import React from "react";
import Navigation from "../Navigation";
import { Inertia } from "@inertiajs/inertia";
import { Box, Button, Grid, GridItem, Flex } from "@chakra-ui/react";
import Logo from "../../assets/logo.svg";
import { HiOutlineCog, HiOutlinePlus } from "react-icons/hi";
import { ProfileMenuSidebar } from "../ProfileMenu";
import { NotificationsSidebar } from "../Notifications";

const Sidebar = () => {
    return (
        <Box
            bg="lightGray"
            w="240px"
            minH="100vh"
            position="fixed"
            top="0"
            zIndex="6"
        >
            <Grid
                minH="100vh"
                maxH="100vh"
                templateColumns="1fr"
                templateRows="auto 1fr auto"
            >
                <GridItem
                    height="auto"
                    overflowY="overlay"
                    overflowX="hidden"
                    padding="1.85em 1.75em"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                >
                    <img src={Logo} width="120" />

                    <Button
                        variant="primary"
                        display={{ base: "none", md: "inline-flex" }}
                        leftIcon={<HiOutlinePlus />}
                        isFullWidth={true}
                        marginTop="1.75em"
                        onClick={() => Inertia.visit("/dash/posts/create")}
                    >
                        Criar postagem
                    </Button>
                </GridItem>
                <GridItem
                    height="auto"
                    sx={{
                        overflowX: "hidden",
                        overflowY: "overlay",
                        "::-webkit-scrollbar-thumb": {
                            bg: "rgba(0,0,0,0)",
                        },
                        _hover: {
                            "::-webkit-scrollbar-thumb": {
                                bg: "rgba(0,0,0,.15)",
                            },
                        },
                    }}
                >
                    <Navigation />
                </GridItem>
                <GridItem>
                    <Flex
                        flexDirection="column"
                        justifyContent="center"
                        padding={{ base: "1em 1.75em", md: "1.25em 1.75em" }}
                        borderTop="1px"
                        borderTopColor="fadeGray"
                    >
                        <NotificationsSidebar />
                        <Button
                            leftIcon={<HiOutlineCog />}
                            isFullWidth={true}
                            border="1px"
                            borderColor="fadeGray"
                            justifyContent="flex-start"
                            variant="white"
                        >
                            Configurações
                        </Button>
                    </Flex>
                    <ProfileMenuSidebar />
                </GridItem>
            </Grid>
        </Box>
    );
};

export default Sidebar;
