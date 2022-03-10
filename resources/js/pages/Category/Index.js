import React from "react";
import { InertiaHead } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Button, Tag, Avatar } from "@chakra-ui/react";
import { HiOutlinePlus } from "react-icons/hi";
import TopBar from "../../components/TopBar";
import Container from "../../components/Container";
import FlexList from "../../components/FlexList";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import ButtonActions from "../../components/ButtonActions";
import moment from "moment";

const Index = ({ datas, ...props }) => {
    return (
        <>
            <InertiaHead title="Categorias" />
            <Header>
                <TopBar title="Categorias">
                    <Button
                        variant="primary"
                        leftIcon={<HiOutlinePlus />}
                        onClick={() => Inertia.visitInModal("/category/create", {
                            redirectBack: (e) => {
                                console.log(">>>>>>>>>>>>>>EXECUTANDO redirectBack", e);
                            }
                        })}
                    >
                        Novo
                    </Button>
                </TopBar>
            </Header>

            <Container maxW="container.lg" variant="has-header-top-bar">
                <FlexList>
                    <FlexList.Header>
                        <FlexList.Cell flex="2">Nome</FlexList.Cell>
                        <FlexList.Cell>Status</FlexList.Cell>
                        <FlexList.Cell>Criado em</FlexList.Cell>
                        <FlexList.Cell></FlexList.Cell>
                    </FlexList.Header>
                    {datas?.map((item) => {
                        return (
                            <FlexList.Row key={item.id}>
                                <FlexList.Cell flex="2">
                                    {item.id != 4 ? (
                                        <Avatar
                                            src={item.image}
                                            alt={item.title}
                                            mr=".5em"
                                        />
                                    ) : null}
                                    <strong>{item.title}</strong>
                                </FlexList.Cell>
                                <FlexList.Cell head="Status">
                                    {item.id != 4 ? (
                                        <Tag variant="success" size="sm">
                                            Ativo
                                        </Tag>
                                    ) : (
                                        <Tag variant="gray" size="sm">
                                            Desativado
                                        </Tag>
                                    )}
                                </FlexList.Cell>
                                <FlexList.Cell head="Criado em">
                                    {moment(item.createdAt).format("DD/MM/YYYY hh:mm")}
                                </FlexList.Cell>
                                <FlexList.Cell
                                    head="Ações"
                                    justifyContent={{
                                        base: "flex-start",
                                        md: "flex-end",
                                    }}
                                >
                                    <ButtonActions />
                                </FlexList.Cell>
                            </FlexList.Row>
                        );
                    })}
                </FlexList>
                <Pagination />
            </Container>
        </>
    );
};

export default Index;
