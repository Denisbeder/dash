import React from "react";
import {
    ButtonGroup,
    Button,
    ModalBody,
    ModalHeader,
    ModalFooter,
} from "@chakra-ui/react";
import { Inertia } from "@inertiajs/inertia";

const TestModal = () => {
    return (
        <>
            <ModalHeader>Teste MODAL</ModalHeader>
            <ModalBody>
                TESTETETTTETE
                <br />
                TESTETETTTETE
                <br />
                TESTETETTTETE
                <br />
                TESTETETTTETE
                <br />
                TESTETETTTETE
                <br />
            </ModalBody>
            <ModalFooter>
                <ButtonGroup ml="auto" mt={0}>
                    <Button
                        variant="outline"
                        bg="white"
                        onClick={() => Inertia.visitInModal("/category/create")}
                    >
                        Criar categoria
                    </Button>
                </ButtonGroup>
            </ModalFooter>
        </>
    );
};

export default TestModal;
