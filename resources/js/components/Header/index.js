import React, { memo, useContext } from "react";
import { Flex, Divider, Button } from "@chakra-ui/react";
import SidebarButton from "../SidebarButton";
import { ProfileMenuTopBar } from "../ProfileMenu";
import { NotificationsTopBar } from "../Notifications";
import { SidebarContext } from "../../contexts/SidebarContext";
import { HiOutlinePlus } from "react-icons/hi";
import { Inertia } from "@inertiajs/inertia";

const Header = ({ children, ...rest }) => {
    const { isOpen } = useContext(SidebarContext);

    return (
        <Flex
            flexDirection="column"
            w={{ base: "100%", md: "unset" }}
            position="fixed"
            top="0"
            right="0"
            left={{ base: isOpen ? "240px" : "0", md: "240px" }}
            transition="left .25s"
            zIndex="5"
            {...rest}
        >
            <Flex
                borderBottom="1px"
                borderColor="fadeGray"
                bg="white"
                minH="4em"
                alignItems="center"
                justifyContent="space-between"
                padding={{ base: "0 1em", md: "0 2.5em" }}
                display={{ base: "flex", md: "none" }}
            >
                <Flex alignItems="center">
                    <SidebarButton />
                    <Divider
                        orientation="vertical"
                        mr={{ base: "1em", md: "2.5em" }}
                        h="64px"
                    />
                    <Button
                        variant="primary"
                        leftIcon={<HiOutlinePlus />}
                        isFullWidth={true}
                        onClick={() => Inertia.visit("/dash/posts/create")}
                    >
                        Criar
                    </Button>
                </Flex>
                <Flex>
                    <NotificationsTopBar />
                    <ProfileMenuTopBar />
                </Flex>
            </Flex>
            {children}
        </Flex>
    );
};

export default memo(Header);
