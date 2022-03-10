import React from "react";
import { InertiaHead } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { ButtonGroup, Button, IconButton } from "@chakra-ui/react";
import { HiOutlinePlus, HiOutlineArrowLeft } from "react-icons/hi";
import TopBar from "../../components/TopBar";
import Container from "../../components/Container";
import Header from "../../components/Header";

const Show = ({ datas }) => {
    return (
        <>
            <InertiaHead title="Categorias detalhes" />
            <Header>
                <TopBar
                    title="Detalhes de registro"
                    subtitle="Detalhes de um titulo qualquer aqui"
                >
                    <ButtonGroup>
                        <IconButton
                            display={{ base: "inline-flex", md: "none" }}
                            rounded="md"
                            variant="outline"
                            icon={<HiOutlineArrowLeft />}
                            onClick={() => Inertia.get("/category")}
                        />

                        <Button
                            display={{ base: "none", md: "inline-flex" }}
                            variant="outline"
                            leftIcon={<HiOutlineArrowLeft />}
                            onClick={() => Inertia.get("/category")}
                        >
                            Voltar
                        </Button>
                        
                        <Button
                            variant="primary"
                            leftIcon={<HiOutlinePlus />}
                            onClick={() =>
                                Inertia.visitInModal("/category/create")
                            }
                        >
                            Novo
                        </Button>
                    </ButtonGroup>
                </TopBar>
            </Header>

            <Container maxW="container.lg" variant="has-header-top-bar">
                DETALHES
            </Container>
        </>
    );
};

export default Show;
