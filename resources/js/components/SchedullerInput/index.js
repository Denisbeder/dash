import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    FormControl,
    FormLabel,
} from "@chakra-ui/react";
import React from "react";
import DateTimePicker from "../../components/DateTimePicker";

const SchedullerInput = ({
    handleOnChange,
    publishedAtValue,
    unpublishedAtValue,
}) => {
    const handleOnChangeDateStart = (fieldName, value) => {
        handleOnChange(fieldName, value);
    };
    return (
        <>
            <DateTimePicker
                defaultValue={publishedAtValue || null}
                handleOnChange={(value) => {
                    handleOnChangeDateStart("published_at", value);
                }}
            />

            <Accordion defaultIndex={[]} allowMultiple>
                <AccordionItem border="none">
                    <AccordionButton
                        p="0"
                        fontSize=".875em"
                        fontWeight="600"
                        color="gray.500"
                        _hover={{
                            bg: "transparent",
                            textDecoration: "underline",
                        }}
                        _focus={{
                            boxShadow: "none",
                        }}
                    >
                        Programar expiração do post
                    </AccordionButton>

                    <AccordionPanel p="1em 0 0">
                        <FormControl id="unpublished_at">
                            <FormLabel variant="small">
                                Data e hora de encerramento
                            </FormLabel>
                            <DateTimePicker
                                defaultValue={unpublishedAtValue || null}
                                handleOnChange={(value) => {
                                    handleOnChangeDateStart(
                                        "unpublished_at",
                                        value
                                    );
                                }}
                            />
                        </FormControl>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </>
    );
};

export default SchedullerInput;
