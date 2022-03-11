import React, { useContext } from "react";
import { IconButton } from "@chakra-ui/react";
import { SidebarContext } from "../../contexts/SidebarContext";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const SidebarButton = () => {
    const { isOpen, handleIsOpen } = useContext(SidebarContext);

    return (
        <IconButton
            icon={<HiOutlineMenuAlt1 />}
            onClick={() => handleIsOpen()}
            bg="transparent"
            size="lg"
            ml={{ base: "-.885em", md: "-2.25em" }} 
            paddingInlineEnd={{ base: "1em", md: "2.5em" }}
            paddingInlineStart={{ base: "1em", md: "2.5em" }}
            minH="64px"
            position="relative"
            zIndex="5"
            _focus={{ boxShadow: "none" }}
            _active={{ bg: "transparent" }}
            _hover={{ bg: "transparent", color: "primary" }}
            _after={{
                base: {
                    transition: "left .25s",
                    content: `""`,
                    bg: "rgba(0,0,0,.5)",
                    width: "100vw",
                    height: "100vh",
                    position: "fixed",
                    backdropFilter: `blur(2px)`,
                    visibility: isOpen ? "visible" : "hidden",
                    left: isOpen ? "240px" : "0px",
                    top: 0,
                    bottom: 0,
                    zIndex: 0,
                },
                md: { display: "none" },
            }}
        />
    );
};

export default SidebarButton;
