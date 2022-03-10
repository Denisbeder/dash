import React from "react";
import { InertiaHead } from "@inertiajs/inertia-react";
import Header from "../../components/Header";

const Index = ({ user }) => {
    return (
        <>
            <InertiaHead title="Visão geral" />
            <Header />
            HOME {user.name}
        </>
    );
};

export default Index;
