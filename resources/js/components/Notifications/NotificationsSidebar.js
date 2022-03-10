import React from "react";
import {
    Button,
    Menu,
    MenuList,
    MenuButton,
    MenuItem,
    MenuDivider,
    Tag,
} from "@chakra-ui/react";
import { HiOutlineBell } from "react-icons/hi";

const NotificationsSidebar = () => {
    return (
        <Menu>
            <MenuButton
                as={Button}
                isFullWidth={true}
                leftIcon={<HiOutlineBell />}
                rightIcon={
                    <Tag
                        bg="red"
                        color="white"
                        size="sm"
                        padding=".45em"
                        rounded="full"
                    >
                        99
                    </Tag>
                }
                marginBottom=".5rem"
                border="1px"
                borderColor="fadeGray"
                variant="white"
            >
                Notificações
            </MenuButton>
            <MenuList>
                <MenuItem>Minha conta</MenuItem>
                <MenuDivider />
                <MenuItem>Sair</MenuItem>
                <MenuDivider />
                <MenuItem>Sair</MenuItem>
                <MenuDivider />
                <MenuItem>Sair</MenuItem>
                <MenuDivider />
                <MenuItem>Sair</MenuItem>
                <MenuDivider />
                <MenuItem>Sair</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default NotificationsSidebar;
