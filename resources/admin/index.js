import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { LayoutPanel } from "./components/Layout";
import theme from "./theme";
import SidebarProvider from "./contexts/SidebarContext";
import "react-widgets/styles.css";

InertiaProgress.init();

createInertiaApp({
    resolve: (name) => {
        const page = require(`./pages/${name}`).default;
        page.layout = (page) => <LayoutPanel children={page} />;
        return page;
    },
    setup: ({ el, App, props }) => {
        render(
            <ChakraProvider theme={theme}>
                <CSSReset />
                <SidebarProvider>
                    <App {...props} />
                </SidebarProvider>
            </ChakraProvider>,
            el
        );
    },
});
