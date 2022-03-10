import React, { useEffect, useRef, useContext } from "react";
import { Flex, useMediaQuery } from "@chakra-ui/react";
import { SidebarContext } from "../../contexts/SidebarContext";

const CardHeader = ({ children, stuck, stuckTop, ...rest }) => {
    const { isOpen } = useContext(SidebarContext);
    const [isSmallThan768] = useMediaQuery("(max-width: 768px)");
    const cardHeaderRef = useRef(null);
    const leftOnStuck = !isSmallThan768 || isOpen ? "240px" : 0;

    useEffect(() => {
        cardHeaderRef.current.style.left = leftOnStuck;
    }, [leftOnStuck]);

    const handleScroll = (e) => {
        const scrollTop = e.target.scrollingElement.scrollTop;
        const element = cardHeaderRef.current;
        const top = typeof stuckTop === "undefined" ? "4em" : stuckTop;
        const stuckTopValue = top.replace(/em|px/, "");
        const stuckTopUnit = top.replace(/[0-9]+/, "");
        const topNegative = `-${stuckTopValue * 2}${stuckTopUnit}`;

        if (scrollTop > 60 && scrollTop < 100) {
            element.style.opacity = 0;
            element.style.top = topNegative;
        } else if (scrollTop > 100) {
            element.style.width = isSmallThan768 ? "100%" : "unset";
            element.style.opacity = 1;
            element.style.position = "fixed";
            element.style.top = isSmallThan768 ? top : 0;
            element.style.left = isSmallThan768 ? 0 : "240px";
            element.style.right = 0;
            element.style.borderTopRightRadius = 0;
            element.style.borderTopLeftRadius = 0;
        } else {
            element.style.opacity = 0;
            element.style.top = topNegative;
            element.removeAttribute("style");
        }
    };

    window.onscroll = (e) => handleScroll(e);

    // Faz unsubscribe
    useEffect(() => () => (window.onscroll = null), []);

    return (
        <Flex
            ref={cardHeaderRef}
            roundedTop="md"
            transition="opacity 1s, top .5s, left .25s"
            h={{ base: "auto", md: "4em" }}
            bg="white"
            padding={{ base: "1em 1.5em", md: "0 2.5em" }}
            flexDirection={{ base: "column", md: "row" }}
            alignItems="center"
            justifyContent="space-between"
            borderBottom="1px solid"
            borderBottomColor="borderColor"
            {...rest}
        >
            {children}
        </Flex>
    );
};

export default CardHeader;
