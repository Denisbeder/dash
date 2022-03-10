import React from "react";
import {
    Button,
    Menu,
    MenuList,
    MenuButton,
    MenuItem,
    MenuDivider,
    Avatar,
    Text,
} from "@chakra-ui/react";
import { HiOutlineSelector } from "react-icons/hi";

const ProfileMenuSidebar = () => {
    return (
        <Menu matchWidth={true} arrowPadding="0" gutter="0">
            <MenuButton
                as={Button}
                isFullWidth={true}
                leftIcon={
                    <Avatar
                        name="Denisbeder"
                        src="https://pt.gravatar.com/userimage/5521328/38a97858a3746bca1aa1c969bd837401.jpeg"
                        size="sm"
                    />
                }
                rightIcon={<HiOutlineSelector />}
                rounded="0"
                paddingTop="1.75em"
                paddingBottom="1.75em"
                border="1px"
                borderColor="fadeGray"
                size="lg"
                textAlign="left"
                display={{ base: "none", md: "inline-flex" }}
                bg="white"
                _focus={{ boxShadow: "none" }}
                _hover={{ bg: "white" }}
                _expanded={{ bg: "white" }}
                _active={{ bg: "white" }}
            >
                <Text
                    fontSize="md"
                    isTruncated
                    maxWidth="120px"
                    fontWeight="normal"
                >
                    Denisbeder
                </Text>
                <Text fontSize="xs" color="lightText" fontWeight="normal">
                    Edite sua conta
                </Text>
            </MenuButton>
            <MenuList boxShadow="none" marginBottom="-1px" borderRadius="0">
                <MenuItem>Minha conta</MenuItem>
                <MenuDivider />
                <MenuItem>Sair</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default ProfileMenuSidebar;
