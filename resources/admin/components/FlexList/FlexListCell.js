import React from "react";
import { Flex } from "@chakra-ui/react";

const FlexListCell = ({ children, head, ...rest }) => {
    return (
        <Flex
            flex="1"
            fontSize=".88em"
            alignItems="center"
            padding={{ base: ".25em 0", md: "0 .75em" }}
            _first={{
                marginTop: { base: "-.25em", md: 0 },
                paddingLeft: { base: null, md: 0 },
            }}
            _last={{
                marginBottom: { base: "-.25em", md: 0 },
                paddingRight: { base: null, md: 0 },
            }}
            textOverflow="ellipsis"
            marginLeft={{
                base: head ? "6em" : 0,
                md: "unset",
            }}

            _before={{
                base: {
                    maxWidth: "6em",
                    position: "absolute",
                    content: `attr(data-head)`,
                    overflow: "hidden",
                    left: 0,
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    fontSize: ".75em",
                    color: "muted",
                },
                md: { display: "none" },
            }}
            data-head={head}
            {...rest}
        >
            {children}
        </Flex>
    );
};

export default FlexListCell;
