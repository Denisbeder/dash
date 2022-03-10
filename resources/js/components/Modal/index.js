import React, { useEffect, useState } from "react";
import {
    Modal as ModalBase,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    CircularProgress,
    Center,
    Button,
    ModalBody,
} from "@chakra-ui/react";
import { Inertia, hrefToUrl, urlWithoutHash } from "@inertiajs/inertia";
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
    removeBeforeEventListenerList: [],
    removeRedirectBackEventListenerList: [],
    removeSuccessEventListenerList: [],
};

const Modal = ({ ...rest }) => {
    const [modalState, setModalState] = useState(INITIAL_MODAL_STATE);

    const isModal = (header) => (header === true || header === 1 || header === "true" || header === "1");

    const resetState = () => setModalState(INITIAL_MODAL_STATE);

    const removeEvents = () => {
        if (modalState.removeBeforeEventListenerList.length > 0) {
            modalState.removeBeforeEventListenerList.forEach((removeEvent, index) => {
                console.log("<<removendo-evento>>", removeEvent);
                removeEvent();
                modalState.removeBeforeEventListenerList.splice(index, 1);
            })            
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
            });

            // Stack events to remove after finish visit
            const eventBeforeRemove = modalState.removeBeforeEventListenerList.push(removeBeforeEventListener);

            setModalState(state => ({
                ...state,
                isOpen: true,
                loading: false,
                component,
                page: clonePage,
                close,
                options,
                removeBeforeEventListenerList: eventBeforeRemove,
                //removeRedirectBackEventListener,
                //removeSuccessEventListener,
            }));

            // Finish visit and dispatch event finish to clear events
            Inertia.finishVisit(Inertia.activeVisit);
        });
    }

    useEffect(() => {
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
                    console.log('entr_____OUU');
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
