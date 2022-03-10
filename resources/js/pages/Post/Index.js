import React from "react";
import { InertiaHead } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Button, Tag } from "@chakra-ui/react";
import { HiOutlinePlus } from "react-icons/hi";
import TopBar from "../../components/TopBar";
import Container from "../../components/Container";
import FlexList from "../../components/FlexList";
import Img from "../../components/Img";
import Header from "../../components/Header";
import ButtonActions from "../../components/ButtonActions";
import Pagination from "../../components/Pagination";
import moment from "moment";

const Index = ({ datas }) => {
    return (
        <>
            <InertiaHead title="Posts" />
            <Header>
                <TopBar title="Postagens">
                    <Button
                        variant="primary"
                        leftIcon={<HiOutlinePlus />}
                        onClick={() => Inertia.get("/post/create")}
                    >
                        Novo
                    </Button>
                </TopBar>
            </Header>

            <Container variant="has-header-top-bar">
                <FlexList>
                    <FlexList.Header>
                        <FlexList.Cell flex="2">Título</FlexList.Cell>
                        <FlexList.Cell>Categoria</FlexList.Cell>
                        <FlexList.Cell>Status</FlexList.Cell>
                        <FlexList.Cell>Criado em</FlexList.Cell>
                        <FlexList.Cell></FlexList.Cell>
                    </FlexList.Header>
                    {datas.map((item) => {
                        return (
                            <FlexList.Row key={item.id}>
                                <FlexList.Cell flex="2">
                                    {item.id != 3 ? (
                                        <Img
                                            marginRight=".75em"
                                            w="75px"
                                            h="58px"
                                            //THUMBOR src={`http://localhost:8888/unsafe/300x300/https://picsum.photos/id/${item.id}/0/0`}
                                            src={`https://picsum.photos/id/${item.id}/300/300`}
                                            alt={item.title}
                                        />
                                    ) : null}
                                    <strong>{item.title}</strong>
                                </FlexList.Cell>
                                <FlexList.Cell head="Categoria">
                                    Categoria {item.id}
                                </FlexList.Cell>
                                <FlexList.Cell head="Status">
                                    {item.id == 4 ? (
                                        <Tag variant="danger" size="sm">
                                            Não publicado
                                        </Tag>
                                    ) : item.id == 3 ? (
                                        <Tag variant="gray" size="sm">
                                            Desativado
                                        </Tag>
                                    ) : item.id == 7 ? (
                                        <Tag variant="warning" size="sm">
                                            Programado
                                        </Tag>
                                    ) : item.id == 8 ? (
                                        <Tag variant="gray" size="sm">
                                            Expirado
                                        </Tag>
                                    ) : (
                                        <Tag variant="success" size="sm">
                                            Publicado
                                        </Tag>
                                    )}
                                </FlexList.Cell>
                                <FlexList.Cell head="Criado em">
                                    {moment(item.createdAt).format(
                                        "DD/MM/YYYY hh:mm"
                                    )}
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
