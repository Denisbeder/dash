import React from "react";
import {
    Menu,
    MenuList,
    MenuButton,
    MenuItem,
    MenuDivider,
    IconButton,
} from "@chakra-ui/react";
import { HiOutlineBell } from "react-icons/hi";

const NotificationsTopBar = () => {
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                icon={<HiOutlineBell />}
                border="1px"
                borderColor="fadeGray"
                rounded="full"
                mr=".75em"
                bg="white"
                _focus={{
                    boxShadow: "none",
                }}
                _hover={{
                    bg: "primary.500",
                    color: "white",
                    borderColor: "primary.500",
                }}
                _expanded={{
                    bg: "primary.500",
                    color: "white",
                    borderColor: "primary.500",
                }}
                _active={{
                    bg: "primary.500",
                    color: "white",
                    borderColor: "primary.500",
                }}
            />
            <MenuList>
                <MenuItem>Minha conta</MenuItem>
                <MenuDivider />
                <MenuItem>Sair</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default NotificationsTopBar;
