import React, { useEffect, useState } from "react";
import {
    Modal as ModalBase,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    CircularProgress,
    Center,
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
    inertiaAxiosRequestInterceptor: null,
    inertiaAxiosResponseInterceptor: null,
    removeBeforeEventListener: null,
    removeRedirectBackEventListener: null,
    removeSuccessEventListener: null,
};

const Modal = ({ ...rest }) => {
    const [modalState, setModalState] = useState(INITIAL_MODAL_STATE);

    const resetState = () => {
        setModalState(INITIAL_MODAL_STATE);
    };

    const removeEvents = () => {
        // remove the 'X-Inertia-Modal' and 'X-Inertia-Modal-Redirect-Back' headers for future requests
        if (modalState.removeBeforeEventListener) {
            console.log("matou evento 1");
            modalState.removeBeforeEventListener();
        }
        if (modalState.removeRedirectBackEventListener) {
            console.log("matou evento 2");
            modalState.removeRedirectBackEventListener();
        }

        if (modalState.removeSuccessEventListener) {
            console.log("matou evento 3");
            modalState.removeSuccessEventListener();
        }
    };

    const close = () => {
        // Ensure make abort of Modal request
        modalState.cancelToken?.cancel();

        if (modalState.inertiaAxiosRequestInterceptor) {
            console.log('EJECT 1');
            AxiosInertia.interceptors.request.eject(modalState.inertiaAxiosRequestInterceptor);
        }

        if (modalState.inertiaAxiosResponseInterceptor) {
            console.log('EJECT 2');
            AxiosInertia.interceptors.response.eject(modalState.inertiaAxiosResponseInterceptor);
        }

        removeEvents();

        // Reset states
        resetState();
    };

    // Build this method to dispatch modal from Inertia custom function
    useEffect(() => {        
        Inertia.visitInModal = (url, options) => {
            //removeEvents();
            //resetState();
            setModalState((state) => ({ ...state, isOpen: true, loading: true }));

            const opts = {
                headers: {}, redirectBack: true, modalProps: {}, pageProps: {}, ...options,
            };

            

            const inertiaAxiosResponseInterceptor = AxiosInertia.interceptors.response.use((response) => {
                // After the modal is opened the next request shoud be verified if is modal request or not
                // Case not modal request return original Inertia response
                if (response.config.headers['X-Inertia-Modal'] !== true) {
                    return response;
                }          

                const page = response.data;

                Promise.resolve(
                    Inertia.resolveComponent(page.component)
                ).then((component) => {
                    const clonePage = JSON.parse(JSON.stringify(page));

                    // Indicate that page modal is full loaded
                    Inertia.finishVisit(Inertia.activeVisit);

                    if (modalState.removeBeforeEventListener) {
                        modalState.removeBeforeEventListener();
                    }

                    let removeRedirectBackEventListener = null;
                    let removeSuccessEventListener = null;
                    const removeBeforeEventListener = Inertia.on("before", (event) => {
                            console.log("ESTOU VIVVOOOOOOOOVOVOV" + page.url);

                            // make sure the backend knows we're requesting from within a modal
                            event.detail.visit.headers["X-Inertia-Modal"] = true;

                            removeSuccessEventListener = Inertia.on("success", close);

                            // if exist method redirectBack make sure the backend knows wich the next reqeust expect redirect back route
                            if (typeof options?.redirectBack !== "undefined") {
                                event.detail.visit.headers["X-Inertia-Modal-Redirect-Back"] = true;

                                if (typeof opts.redirectBack === "function") {
                                    removeRedirectBackEventListener = Inertia.on("success", opts.redirectBack(event));
                                }
                            }
                        }
                    );

                    setModalState(state => (
                        {
                            ...state,
                            isOpen: true,
                            loading: false,
                            component,
                            page: clonePage,
                            close,
                            options,
                            removeBeforeEventListener,
                            removeRedirectBackEventListener,
                            removeSuccessEventListener,
                        }
                    ));
                });

                return Promise.reject(new AxiosInertiaCancel());
            });

            setModalState(state => (
                {
                    ...state,
                    inertiaAxiosResponseInterceptor,

                }
            ));

            Inertia.visit(url, {
                ...opts,
                onCancelToken: (cancelToken) => (setModalState(state => ({...state, cancelToken: cancelToken}))),
                headers: { ...opts.headers, ["X-Inertia-Modal"]: true }
            });      
        };

        return () => close();
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
            handleOnClose: close,
        })
    ) : (
        <ModalBody p="1.5em">
            Não foi possível carrregar o componente.
        </ModalBody>
    );
};

const ModalLoading = () => (
    <Center my={10}>
        <CircularProgress isIndeterminate color="green.300" />
    </Center>
);

export { Modal };
