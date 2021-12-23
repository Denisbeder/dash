import React, { useEffect, useState } from "react";
import {
    Modal as ModalBase,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    CircularProgress,
    Center,
    useTheme,
} from "@chakra-ui/react";
import {
    Inertia,
    hrefToUrl,
    urlWithoutHash,
    mergeDataIntoQueryString,
} from "@inertiajs/inertia";
import Axios from "axios";

const Modal = ({ ...rest }) => {
    const theme = useTheme();
    const [modal, setModal] = useState(null);
    const [loading, setLoading] = useState(false);
    const [cancelTokenSource, setCancelTokenSource] = useState(null);
    const [title, setTitle] = useState(null);
    const [size, setSize] = useState(null);

    const close = () => {
        cancelTokenSource.cancel();
        if (modal) {
            // remove the 'X-Inertia-Modal' and 'X-Inertia-Modal-Redirect-Back' headers for future requests
            modal.removeBeforeEventListener();
        }
        setModal(null);
    };

    const visitInModal = (url, onSuccess) => {
        setLoading(true);

        if (cancelTokenSource) {
            cancelTokenSource.cancel();
        }

        const cancel = Axios.CancelToken.source();
        setCancelTokenSource(cancel);

        let data = {};

        [url, data] = mergeDataIntoQueryString("get", hrefToUrl(url), {});

        Axios({
            method: "get",
            url: urlWithoutHash(new URL(url)).href,
            data: {},
            params: data,
            headers: {
                Accept: "text/html, application/xhtml+xml",
                "X-Requested-With": "XMLHttpRequest",
                "X-Inertia": true,
                "X-Inertia-Modal": true,
                "X-Inertia-Version": Inertia.page.version,
            },
            cancelToken: cancel.token,
        })
            .then((response) => {
                const page = response.data;

                return Promise.resolve(
                    Inertia.resolveComponent(page.component)
                ).then((component) => {
                    const clone = JSON.parse(JSON.stringify(page));

                    const removeBeforeEventListener = Inertia.on(
                        "before",
                        (event) => {
                            // make sure the backend knows we're requesting from within a modal
                            event.detail.visit.headers[
                                "X-Inertia-Modal"
                            ] = true;
                            if (onSuccess) {
                                event.detail.visit.headers[
                                    "X-Inertia-Modal-Redirect-Back"
                                ] = true;
                            }
                        }
                    );

                    const cloneSize = clone.props.size;

                    if (cloneSize === "full") {
                        setSize({
                            maxW: "100vw",
                            maxH: "100vh",
                            my: 0,
                            borderRadius: 0,
                        });
                    } else if (!isNaN(parseInt(cloneSize))) {
                        setSize({ maxW: clone.props.size });
                    } else {
                        setSize({
                            maxW: theme.sizes[clone.props.size ?? "md"],
                        });
                    }

                    setTitle(clone.props.title);

                    setModal({
                        component,
                        onSuccess,
                        removeBeforeEventListener,
                        page: clone,
                    });
                });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        Inertia.visitInModal = (url, onSuccess) => {
            visitInModal(url, onSuccess);
        };
    }, []);

    useEffect(() => {
        Inertia.on("success", (event) => {
            console.log("Inertia.on('success')", modal);
            if (typeof modal?.onSuccess === "function") {
                modal.onSuccess(event);
            }
            close();
        });
    }, [modal]);

    return (
        <ModalBase
            isOpen={modal != null || loading}
            onClose={() => close()}
            {...size}
            {...rest}
        >
            <ModalOverlay />
            <ModalContent {...size}>
                <ModalCloseButton />
                {title != null ? <ModalHeader>{title}</ModalHeader> : null}
                {!loading && modal != null ? (
                    React.createElement(modal.component, {
                        handleOnClose: close,
                    })
                ) : (
                    <Center my={10}>
                        <CircularProgress isIndeterminate color="green.300" />
                    </Center>
                )}
            </ModalContent>
        </ModalBase>
    );
};

export { Modal };
