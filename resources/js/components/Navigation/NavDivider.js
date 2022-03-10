import React from "react";
import { Box } from "@chakra-ui/react";

const NavDivider = ({ children, ...rest }) => (
    <Box
        w="100%"
        marginTop="1.75em"
        marginBottom=".75em"
        marginLeft="2.15em"
        fontWeight="bold"
        textTransform="uppercase"
        fontSize=".72em"
        color="placeholder"
        {...rest}
    >
        {children}
    </Box>
);

export default NavDivider;
