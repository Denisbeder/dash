import React, { useRef } from "react";
import { InertiaHead } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Heading, Button, ButtonGroup } from "@chakra-ui/react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Header from "../../components/Header";
import _form from "./_form";

const Form = () => {
    const _formRef = useRef(null);

    const handleSubmit = () => {
        _formRef.current.dispatchEvent(
            new Event("submit", { cancelable: true, bubbles: true })
        );
    };

    return (
        <>
            <Header />
            <Container variant="has-header">
                <InertiaHead title="Criar categoria" />
                <Card w={{ base: "100%", md: "800px" }}>
                    <Card.Header stuck={true}>
                        <Heading fontSize="18px">Criar categoria</Heading>
                        <ButtonGroup mt={{ base: ".75em", md: "unset" }}>
                            <Button
                                colorScheme="gray"
                                leftIcon={<HiOutlineArrowLeft />}
                                onClick={() => Inertia.get("/category")}
                            >
                                Cancelar
                            </Button>

                            <Button
                                variant="primary"
                                onClick={() => handleSubmit()}
                            >
                                Salvar
                            </Button>
                        </ButtonGroup>
                    </Card.Header>
                    <Card.Body>
                        <_form ref={_formRef} />
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default Form;
