import React, { useRef } from "react";
import {
    ButtonGroup,
    Button,
    ModalBody,
    ModalHeader,
    ModalFooter,
} from "@chakra-ui/react";
import { Inertia } from "@inertiajs/inertia";
import _form from "./_form";

const FormModal = () => {
    const _formRef = useRef(null);

    const handleSubmit = () => {
        _formRef.current.dispatchEvent(
            new Event("submit", {
                cancelable: true,
                bubbles: true,
                defaultPrevented: true,
            })
        );
    };

    return (
        <>
            <ModalHeader>Criar categoria</ModalHeader>
            <ModalBody>
                <_form ref={_formRef} />
            </ModalBody>
            <ModalFooter>
                <ButtonGroup ml="auto" mt={0}>
                    <Button
                        variant="outline"
                        bg="white"
                        onClick={() => Inertia.visitInModal("/category/test")}
                    >
                        Abrir novo
                    </Button>

                    <Button variant="primary" onClick={() => handleSubmit()}>
                        Salvar
                    </Button>
                </ButtonGroup>
            </ModalFooter>
        </>
    );
};

export default FormModal;
