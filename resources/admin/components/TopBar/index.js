import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

const TopBar = ({ title, children, ...rest }) => {
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
            <Flex alignItems="center">
                <Heading fontSize="18px">{title || ""}</Heading>
            </Flex>
            {children}
        </Flex>
    );
};

export default TopBar;
