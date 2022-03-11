import React, { useCallback, useEffect, useState } from "react";
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
    component: null,
    page: null,
    close: null,
    options: {},
};

const Modal = ({ ...rest }) => {    
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [removeBeforeEventListener, setRemoveBeforeEventListener] = useState(null);
    const [removeSuccessEventListener, setRemoveSuccessEventListener] = useState(null);
    const [cancelToken, setCancelToken] = useState(null);
    const [finishVisit, setFinishVisit] = useState(false);
    const [modalState, setModalState] = useState(INITIAL_MODAL_STATE);

    useEffect(() => {
        // Build this method to dispatch modal from Inertia custom function
        Inertia.visitInModal = (url, options) => {
            // Init visit removing all rest events
            removeAllEvents();            

            // Open modal and set is loading
            setIsOpen(true);
            setLoading(true);

            const opts = {
                headers: {}, 
                redirectBack: true,
                modalProps: {}, 
                pageProps: {}, 
                ...options
            };

            const inertiaAxiosResponseInterceptor = AxiosInertia.interceptors.response.use((response) => {                
                // Sinalize finish load to progressbar and loading
                setLoading(false);

                // Here process modal request
                if (isModal(response.config.headers["X-Inertia-Modal"])) {
                    handleModal(response, url, opts);

                    // When request is modal stop original response of Inertia
                    return Promise.reject(new AxiosInertiaCancel());
                }

                // When request is not modal return original Inertia response
                return response;                
            });

            Inertia.visit(url, {
                ...opts,
                onCancelToken: (cancelToken) => (setCancelToken(cancelToken)),
                headers: { ...opts.headers, ["X-Inertia-Modal"]: 1 }
            });     
            
            // Remove response interceptor 
            AxiosInertia.interceptors.response.eject(inertiaAxiosResponseInterceptor);
        };
    }, [removeBeforeEventListener, removeSuccessEventListener]);

    useEffect(() => {
        if (finishVisit) { 
            removeEvent(removeBeforeEventListener);
        }
    }, [finishVisit]);

    const isModal = (header) => (header === true || header === 1 || header === "true" || header === "1");

    const resetState = () => setModalState(INITIAL_MODAL_STATE);

    const removeEvent = (eRemove) => {
        if (eRemove?.event) {
            eRemove.event();
            eRemove.updateState();
        }
    };

    const removeAllEvents = () => {
        removeEvent(removeBeforeEventListener);
        removeEvent(removeSuccessEventListener);
    };

    const createEvents = (page, options) => {       
        const _removeBeforeEventListener = Inertia.on("before", (event) => {
            // if case a next visit click request, after a POST for exemple, is a GET request garants not place this headers in request
            if (event.detail.visit.method !== "get") {
                // make sure the backend knows we're requesting from within a 
                event.detail.visit.headers["X-Inertia-From-Modal"] = true;

                // if exist method redirectBack make sure the backend knows wich the next reqeust expect redirect back route
                if (options.redirectBack) {
                    event.detail.visit.headers["X-Inertia-From-Modal-Redirect-Back"] = true;
                }
            } else {
                _removeBeforeEventListener();
            }            
        });

        setRemoveBeforeEventListener({updateState: () => (setRemoveBeforeEventListener(null)), event: _removeBeforeEventListener});

        // This event will be removed after executing the close method, so it should be in a separate variable in state
        const _removeSuccessEventListener = Inertia.on("success", (event) => {
            // return callback of redirect back        
            if (typeof options.redirectBack === "function") {
                // When has redirectBack funtion and after execute the redirectBack function, autoremove this event
                // This prevent repeat execution of redirectBack function one each visit click
                _removeSuccessEventListener();

                // Execute redirectBack function
                options.redirectBack(event, close);                
            }
            
            // Close the modal on success request
            close();
        });

        setRemoveSuccessEventListener({updateState: () => (setRemoveSuccessEventListener(null)), event: _removeSuccessEventListener});
    };

    const close = () => {
        // Ensure make abort of Modal request
        cancelToken?.cancel();

        removeAllEvents();

        // Reset states
        resetState();
        setLoading(false);
        setIsOpen(false);
    };

    const handleModal = (response, url, options) => {
        const page = response.data;
        const resolveComponent = Inertia.resolveComponent(page.component);

        Promise.resolve(resolveComponent).then((component) => {
            const clonePage = JSON.parse(JSON.stringify(page));

            setModalState({
                component,
                page: clonePage,
                close,
                options                
            });

            // Finish visit and dispatch event finish to clear events
            Inertia.finishVisit(Inertia.activeVisit);
            setFinishVisit(true);

            // manage events
            createEvents(page, options);
        });
    }

    return (
        <ModalBase
            isOpen={isOpen}
            onClose={close}
            {...rest}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <div>
                    {loading ? (
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
