import React from "react";
import { InertiaHead } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Heading, Button, ButtonGroup } from "@chakra-ui/react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Header from "../../components/Header";

const Form = () => {
    return (
        <>
            <Header />
            <Container variant="has-header">
                <InertiaHead title="Criar usuário" />
                <Card w={{ base: "100%", md: "800px" }}>
                    <Card.Header stuck={true}>
                        <Heading fontSize="18px">Criar usuário</Heading>
                        <ButtonGroup mt={{ base: ".75em", md: "unset" }}>
                            <Button
                                colorScheme="gray"
                                leftIcon={<HiOutlineArrowLeft />}
                                onClick={() => Inertia.get("/user")}
                            >
                                Cancelar
                            </Button>

                            <Button variant="primary">Salvar</Button>
                        </ButtonGroup>
                    </Card.Header>
                    <Card.Body>
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                        FORM
                        <br />
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default Form;
