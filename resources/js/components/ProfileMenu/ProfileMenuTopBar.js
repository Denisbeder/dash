import React from "react";
import {
    Menu,
    MenuList,
    MenuButton,
    MenuItem,
    MenuDivider,
    Avatar,
    IconButton,
} from "@chakra-ui/react";

const ProfileMenuTopBar = () => {
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                icon={
                    <Avatar
                        name="Denisbeder"
                        src="https://pt.gravatar.com/userimage/5521328/38a97858a3746bca1aa1c969bd837401.jpeg"
                        h="38px"
                        w="38px"
                    />
                }
                bg="white"
                _focus={{ boxShadow: "none" }}
                _hover={{ bg: "white" }}
                _expanded={{ bg: "white" }}
                _active={{ bg: "white" }}
            />
            <MenuList>
                <MenuItem>Minha conta</MenuItem>
                <MenuDivider />
                <MenuItem>Sair</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default ProfileMenuTopBar;
