import React, { useState, useEffect } from "react";
import DatePicker from "../../components/DatePicker";
import TimeInput from "../../components/TimeInput";
import { SimpleGrid } from "@chakra-ui/react";
import moment from "moment";

const DateTimePicker = ({
    disabled,
    readOnly,
    dateProps,
    timeProps,
    handleOnChange,
    defaultValue,
    ...rest
}) => {
    const prepareDefaultValue = (string) => {
        if (string === null || string === "") {
            return null;
        }

        if (string instanceof Date) {
            return string;
        } else {
            return new Date(moment(string, "YYYY-MM-DD hh:mm:ss"));
        }
    };

    const [datetime, setDatetime] = useState(prepareDefaultValue(defaultValue));

    useEffect(() => {
        if (datetime !== null && datetime !== "") {
            handleOnChange(moment(datetime).format("YYYY-MM-DD hh:mm:00"));
        } else {
            handleOnChange(datetime)
        }
    }, [datetime]);

    return (
        <SimpleGrid templateColumns="54% 46%" spacing="0" {...rest}>
            <DatePicker
                sx={{
                    ".rw-widget-picker": {
                        borderEndRadius: "0",
                    },
                }}
                readOnly={readOnly}
                disabled={disabled}
                onChange={(date) => setDatetime(date)}
                value={datetime}
                {...dateProps}
            />
            <TimeInput
                noClearButton
                borderStartRadius="0"
                borderLeftColor="transparent"
                readOnly={readOnly}
                disabled={disabled}
                onChange={(date) => setDatetime(date)}
                value={datetime}
                {...timeProps}
            />
        </SimpleGrid>
    );
};

export default DateTimePicker;
