import React, { useContext } from "react";
import Sidebar from "../Sidebar";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import { SidebarContext } from "../../contexts/SidebarContext";
import { Modal as ModalComponent } from "../../components/Modal";

const LayoutPanel = ({ children }) => {
    const { isOpen } = useContext(SidebarContext);

    return (
        <Box as="main">
            <Grid
                minH="100vh"
                ml={{
                    base: !isOpen ? "-240px" : "unset",
                    md: "unset",
                }}
                templateColumns="240px auto"
                transition="margin-left .25s"
            >
                <GridItem position="relative">
                    <Sidebar />
                </GridItem>
                <GridItem bg="#f0f0f0" minW={{ base: "100vw", md: "auto" }}>
                    <Box position="relative">{children}</Box>
                </GridItem>
            </Grid>
            <ModalComponent />
        </Box>
    );
};

export default LayoutPanel;
