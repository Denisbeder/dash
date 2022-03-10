import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

const TopBar = ({ title, subtitle, children, ...rest }) => {
    return (
        <Flex
            h="4em"
            bg="white"
            padding={{ base: "0 1em", md: "0 2.5em" }}
            alignItems="center"
            justifyContent="space-between"
            borderBottom="1px solid"
            borderBottomColor="borderColor"
            transition="left .25s"
            {...rest}
        >
            {(typeof title !== "undefined" || typeof subtitle !== "undefined") && (title !== "" || subtitle !== "") ? (
                <Flex alignItems="center" gap={3}>
                    { title === "" || <Heading fontSize="18px" isTruncated>{title}</Heading> }
                    { subtitle === "" || <Text fontSize="md" isTruncated>{subtitle}</Text> }
                    
                </Flex>
            ) : null}

            {children}
        </Flex>
    );
};

export default TopBar;
