import React from "react";
import { chakra } from "@chakra-ui/react";
import ComboboxBase from "react-widgets/Combobox";
import { HiOutlineChevronDown } from "react-icons/hi";

const ComboboxChakra = chakra(ComboboxBase, {
    baseStyle: (props) => {
        return {
            ".rw-widget-picker": {
                borderColor: "borderColor",
                rounded: "md",
                minH: "2.5em"
            },
            ".rw-combobox-input": {
                height: "calc(2.5em - 1px * 2)",
                boxShadow: "none",
                _placeholder: {
                    color: 'gray.400',
                }
            },
            ".rw-btn, .rw-popup": {
                borderColor: "borderColor"
            },
            "&.rw-state-focus .rw-widget-picker": {
                boxShadow: `0 0 0 1px ${props.theme.colors.primary[500]}`,
                borderColor: "primary.500",
                outline: "none",
            },
            ".rw-Combobox-tag": {
                rounded: "5px",
                bg: "primary.500",
                color: "white",
                borderColor: "transparent"
            }
        };
    },
});

const Combobox = ({ ...rest }) => {
    return (
        <ComboboxChakra
            selectIcon={<HiOutlineChevronDown />}
            messages={{
                emptyList: "Não há itens nesta lista",
                emptyFilter: "O filtro não retornou resultados",
            }}
            {...rest}
        />
    );
};

export default Combobox;
