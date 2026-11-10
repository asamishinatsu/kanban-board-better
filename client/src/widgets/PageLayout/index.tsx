import React from "react";

import Footer from "@/widgets/Footer";
import Header from "@/widgets/Header";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default PageLayout;
