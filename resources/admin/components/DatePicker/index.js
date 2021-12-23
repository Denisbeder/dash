import React, { useState } from "react";
import { chakra } from "@chakra-ui/react";
import { DateLocalizer } from "react-widgets/IntlLocalizer";
import DatePickerBase from "react-widgets/DatePicker";
import moment from "moment";

const DatePickerChakra = chakra(DatePickerBase, {
    baseStyle: (props) => {
        return {
            "> div": {
                gridTemplate: "1fr/calc(100% - 36px) 36px",
                rounded: ".375em",
                borderColor: "borderColor",
            },
            "> .rw-widget-picker": {
                minH: "2.5em",
            },
            ".rw-btn, .rw-popup": {
                borderColor: "borderColor",
            },
            "&.rw-state-focus .rw-widget-picker": {
                boxShadow: `0 0 0 1px ${props.theme.colors.primary[500]}`,
                borderColor: "primary.500",
                zIndex: "1",
                position: "relative",
            },
            "&.rw-state-disabled": {
                opacity: ".4",
            },
            "&.rw-state-disabled input, &.rw-state-disabled button": {
                bg: "white",
            },
            input: { boxShadow: "none" },
        };
    },
});

const DatePicker = ({ defaultValue, handleOnChange, ...rest }) => {
    const [date, setDate] = useState(defaultValue || null);

    const _onChange = (date, rawValue) => {
        const parsedDate = new Date(moment(rawValue, "DD-MM-YYYY"));
        setDate(parsedDate);
        handleOnChange(date);
    };

    return (
        <DatePickerChakra
            localizer={new DateLocalizer({ culture: "pt-BR" })}
            messages={{
                moveToday: "Hoje",
                moveBack: "Navegar para trás",
                moveForward: "Navegar para a frente",
            }}
            parse={(string) => {
                return string === "" ? null : new Date(string);
            }}
            onChange={(date, rawValue) => _onChange(date, rawValue)}
            value={date}
            {...rest}
        />
    );
};

export default DatePicker;
