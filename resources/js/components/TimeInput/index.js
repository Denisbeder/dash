import React from "react";
import { chakra } from "@chakra-ui/react";
import TimeInputBase from "react-widgets/TimeInput";
import moment from "moment";

const TimeInputChakra = chakra(TimeInputBase, {
    baseStyle: (props) => {
        return {
            rounded: ".375em",
            justifyContent: "center",
            boxShadow: "none",
            borderColor: "borderColor",
            minH: "2.5em",
            "&.rw-state-focus": {
                boxShadow: `0 0 0 1px ${props.theme.colors.primary[500]}`,
                borderColor: "primary.500",
                zIndex: "1",
                position: "relative",
            },
            "&.rw-state-disabled": {
                opacity: ".4",
                bg: "white",
            },
            "&.rw-state-disabled, &.rw-state-disabled *": {
                cursor: "not-allowed",
            },
        };
    },
});

const TimeInput = ({ handleOnChange, ...rest }) => {
    const _onChange = (value) => {
        handleOnChange(moment(value));
    }
        

    return <TimeInputChakra onChange={(e) => _onChange(e)} {...rest} />;
};

export default TimeInput;
