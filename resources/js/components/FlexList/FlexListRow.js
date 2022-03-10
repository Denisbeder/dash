import React from "react";
import { Flex } from "@chakra-ui/react";
import Card from "../../components/Card";

const FlexListRow = ({ children, ...rest }) => {
    return (
        <Card marginBottom=".75em">
            <Card.Body padding=".75em">
                <Flex
                    {...rest}
                    position="relative"
                    flexDirection={{
                        base: "column",
                        md: "row",
                    }}
                >
                    {children}
                </Flex>
            </Card.Body>
        </Card>
    );
};

export default FlexListRow;
