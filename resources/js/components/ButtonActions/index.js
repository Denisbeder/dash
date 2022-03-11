import React, { memo } from "react";
import {
    ButtonGroup,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
import {
    HiOutlineChevronDown,
    HiOutlinePencil,
} from "react-icons/hi";

const ButtonAction = () => {
    return (
        <ButtonGroup isAttached>
            <Button
                marginRight="-px"
                size="xs"
                variant="outline"
                leftIcon={<HiOutlinePencil />}
            >
                Editar
            </Button>
            <Menu>
                <MenuButton
                    size="xs"
                    variant="outline"
                    as={Button}
                    rightIcon={<HiOutlineChevronDown />}
                    iconSpacing="0"
                />
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>
        </ButtonGroup>
    );
};

export default memo(ButtonAction);
