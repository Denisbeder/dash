import React from "react";
import { chakra } from "@chakra-ui/react";
import MultiSelectBase from "react-widgets/Multiselect";
import { HiOutlineChevronDown } from "react-icons/hi";

const MultiSelectChakra = chakra(MultiSelectBase, {
    baseStyle: (props) => {
        return {
            ".rw-widget-picker": {
                borderColor: "borderColor",
                boxShadow: "none",
                rounded: "md",
                minH: "2.5em"
            },
            ".rw-widget-picker .rw-multiselect-input": {
                height: "calc(2.5em - 1px * 2)"
            },
            ".rw-popup": {
                borderColor: "borderColor"
            },
            "&.rw-state-focus .rw-widget-picker": {
                boxShadow: `0 0 0 1px ${props.theme.colors.primary[500]}`,
                borderColor: "primary.500",
                outline: "none",
            },
            ".rw-multiselect-tag": {
                rounded: "5px",
                bg: "primary.500",
                color: "white",
                borderColor: "transparent"
            }
        };
    },
});

const MultiSelect = ({ ...rest }) => {
    return (
        <MultiSelectChakra
        selectIcon={<HiOutlineChevronDown />}
            messages={{
                emptyList: "Não há itens nesta lista",
                emptyFilter: "O filtro não retornou resultados",
            }}
            {...rest}
        />
    );
};

export default MultiSelect;
