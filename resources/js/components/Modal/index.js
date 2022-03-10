import React, { useEffect, useState } from "react";
import {
    Modal as ModalBase,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    CircularProgress,
    Center,
} from "@chakra-ui/react";
import { Inertia } from "@inertiajs/inertia";
import AxiosInertia from "@inertiajs/inertia/node_modules/axios";
import AxiosInertiaCancel from '@inertiajs/inertia/node_modules/axios/lib/cancel/Cancel';

const INITIAL_MODAL_STATE = {
    isOpen: false,
    loading: false,
    component: null,
    page: null,
    close: null,
    cancelToken: null,
    options: {},
    removeEventListenerList: [],
};

const Modal = ({ ...rest }) => {
    const [modalState, setModalState] = useState(INITIAL_MODAL_STATE);

    const isModal = (header) => (header === true || header === 1 || header === "true" || header === "1");

    const resetState = () => setModalState(INITIAL_MODAL_STATE);

    const removeEvents = () => {
        if (modalState.removeSuccessEventListener) {
            modalState.removeSuccessEventListener();
        }

        if (modalState.removeEventListenerList.length > 0) {
            modalState.removeEventListenerList.forEach((removeEvent, index) => {
                console.log("<<removendo-evento>>", removeEvent);
                removeEvent();
                modalState.removeEventListenerList.splice(index, 1);
            });            
        }
    }

    const close = () => {
        // Ensure make abort of Modal request
        modalState.cancelToken?.cancel();

        removeEvents();

        // Reset states
        resetState();
    };

    const handleModal = (response, url, options) => {
        const page = response.data;
        const resolveComponent = Inertia.resolveComponent(page.component);

        Promise.resolve(resolveComponent).then((component) => {
            const clonePage = JSON.parse(JSON.stringify(page));

            const removeBeforeEventListener = Inertia.on("before", (event) => {
                // make sure the backend knows we're requesting from within a modal
                event.detail.visit.headers["X-Inertia-Modal"] = true;
                console.log("<<event-before>>", event);

                // if exist method redirectBack make sure the backend knows wich the next reqeust expect redirect back route
                if (typeof options?.redirectBack !== "undefined") {
                    event.detail.visit.headers["X-Inertia-Modal-Redirect-Back"] = true;
                }
            });

            const removeRedirectBackEventListener = Inertia.on("success", (event) => {
                console.log("<<event-success>> redirectBack", event);
                if (typeof options?.redirectBack === "function") {
                    options.redirectBack(event);
                }
            });

            // This event will be removed after executing the close method, so it should be in a separate variable in state
            const removeSuccessEventListener = Inertia.on("success", (event) => {
                console.log("<<event-success>> close", event);
                close();
            });

            // Stack events to remove after finish visit. 
            // Important: the order of events remove is important. First remove the events of 'after' after so remove anothers
            const eventBeforeRemove = modalState.removeEventListenerList.push(removeBeforeEventListener, removeRedirectBackEventListener);

            setModalState(state => ({
                ...state,
                isOpen: true,
                loading: false,
                component,
                page: clonePage,
                close,
                options,
                removeSuccessEventListener,
                removeEventListenerList: eventBeforeRemove,
            }));

            // Finish visit and dispatch event finish to clear events
            Inertia.finishVisit(Inertia.activeVisit);
        });
    }

    useEffect(() => {
        // Grants clear wherever events existing. 
        // This prevents put header[X-Inertia-Modal] when make request after close modal
        Inertia.on('finish', (event) => {
            removeEvents();
            console.log("<<FINISH-ALL>>");
        });
    }, []);

    // Build this method to dispatch modal from Inertia custom function
    useEffect(() => {
        Inertia.visitInModal = (url, options) => {
            setModalState((state) => ({ ...state, isOpen: true, loading: true }));
    
            const opts = {
                headers: {}, 
                redirectBack: true,
                modalProps: {}, 
                pageProps: {}, 
                ...options
            };
    
            const inertiaAxiosResponseInterceptor = AxiosInertia.interceptors.response.use((response) => {                
                // Sinalize finish load to progressbar and loading
                setModalState((state) => ({ ...state, loading: false }));

                // Here process modal request
                if (isModal(response.config.headers["X-Inertia-Modal"])) {
                    handleModal(response, url, options);

                    // When request is modal stop original response of Inertia
                    return Promise.reject(new AxiosInertiaCancel());
                }

                // When request is not modal return original Inertia response
                return response;                
            });
    
            Inertia.visit(url, {
                ...opts,
                onCancelToken: (cancelToken) => (setModalState(state => ({...state, cancelToken: cancelToken}))),
                headers: { ...opts.headers, ["X-Inertia-Modal"]: 1 }
            });     
            
            // Remove response interceptor 
            AxiosInertia.interceptors.response.eject(inertiaAxiosResponseInterceptor);
        };
    }, []);

    return (
        <ModalBase
            isOpen={modalState.isOpen}
            onClose={close}
            {...rest}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <div>
                    {modalState.loading ? (
                        <ModalLoading />
                    ) : (
                        <ModalContentLoader modal={modalState} />
                    )}
                </div>
            </ModalContent>
        </ModalBase>
    );
};

const ModalContentLoader = ({ modal }) => {
    return modal.component !== null ? (
        React.createElement(modal.component, {
            handleOnClose: modal.close,
        })
    ) : (
        <Center p="1.5em">
            Não foi possível carrregar o componente.
        </Center>
    );
};

const ModalLoading = () => (
    <Center my={10}>
        <CircularProgress isIndeterminate color="green.300" />
    </Center>
);

export { Modal };
