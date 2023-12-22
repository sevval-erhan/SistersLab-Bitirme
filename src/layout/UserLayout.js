import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "../components/Layout";

const UserLayout = () => {
        return (
            <Layout>
                <Outlet>

                </Outlet>
            </Layout>
    );
}

export default UserLayout;