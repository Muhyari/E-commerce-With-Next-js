import {
    TransactionOutlined,
    AppstoreOutlined,
    DashboardOutlined,
    ProfileOutlined,
    ContainerOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import Link from "next/link";

export type MenuItem = Required<MenuProps>["items"][number];

// transform parameter to valid menu object
const getItem = (
    label: React.ReactNode,
    key: string,
    icon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem => {
    const labelLink = <Link href={key}>{label}</Link>;

    return {
        key,
        icon,
        children,
        label: labelLink,
    };
};

export const items: MenuItem[] = [
    getItem("Dashboard", "/dashboard", <DashboardOutlined />),
    getItem("Transactions", "/dashboard/transactions", <TransactionOutlined />),
    getItem("Products", "/dashboard/products", <ContainerOutlined />),
    getItem("Categories", "/dashboard/categories", <AppstoreOutlined />),
    getItem("Profile", "/dashboard/profile", <ProfileOutlined />),
];

export const userItems: MenuItem[] = [
    getItem("Profile", "/dashboard/profile", <ProfileOutlined />),
    getItem("Dashboard", "/dashboard", <DashboardOutlined />),
    getItem("Transactions", "/dashboard/transactions", <TransactionOutlined />),
]