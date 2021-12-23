import React from "react";
import { InertiaHead } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Button, Tag, Avatar } from "@chakra-ui/react";
import { HiOutlinePlus } from "react-icons/hi";
import TopBar from "../../components/TopBar";
import Container from "../../components/Container";
import FlexList from "../../components/FlexList";
import Header from "../../components/Header";
import ButtonActions from "../../components/ButtonActions";
import moment from "moment";

const Index = ({ datas }) => {
    return (
        <>
            <InertiaHead title="Usuários" />
            <Header>
                <TopBar title="Usuários">
                    <Button
                        variant="primary"
                        leftIcon={<HiOutlinePlus />}
                        onClick={() => Inertia.get("/dash/users/create")}
                    >
                        Novo
                    </Button>
                </TopBar>
            </Header>

            <Container maxW="container.lg" variant="has-header-top-bar">
                <FlexList>
                    <FlexList.Header>
                        <FlexList.Cell flex="2">Nome</FlexList.Cell>
                        <FlexList.Cell flex="2">E-mail</FlexList.Cell>
                        <FlexList.Cell>Status</FlexList.Cell>
                        <FlexList.Cell>Criado em</FlexList.Cell>
                        <FlexList.Cell></FlexList.Cell>
                    </FlexList.Header>
                    {datas.map((item) => {
                        return (
                            <FlexList.Row key={item.id}>
                                <FlexList.Cell flex="2">
                                    {item.id != 3 ? (
                                        <Avatar
                                            src={`https://source.unsplash.com/random/300x300/?nature,${item.id}`}
                                            alt={item.name}
                                            mr=".5em"
                                        />
                                    ) : null}
                                    <strong>{item.name}</strong>
                                </FlexList.Cell>
                                <FlexList.Cell head="E-mail" flex="2">
                                    {item.email}
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
            </Container>
        </>
    );
};

export default Index;
