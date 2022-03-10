import React, { createContext, useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => Inertia.on("start", () => setIsOpen(false)), []);

    const handleIsOpen = () => {
        const isOpenToggle = !isOpen;
        const html = document.querySelector("html");

        if (isOpenToggle) {
            html.classList.add("sidebar-is-open");
        } else {
            html.classList.remove("sidebar-is-open");
        }

        setIsOpen(isOpenToggle);
    };

    return (
        <SidebarContext.Provider
            value={{
                isOpen,
                handleIsOpen,
            }}
        >
            {children}
        </SidebarContext.Provider>
    );
};

/* export function useCount() {
    const context = useContext(SidebarContext);
    if (!context)
        throw new Error("useCount must be used within a SidebarProvider");
    const { count, setCount } = context;
    return { count, setCount };
} */

export default SidebarProvider;
