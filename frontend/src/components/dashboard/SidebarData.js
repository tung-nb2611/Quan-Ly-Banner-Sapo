import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";

export const SidebarDataAdmin = [
    {
        title: "Báo cáo",
        path: "/report",
        icon: <IoIcons.IoIosStats size={24} />,
    },
    {
        title: "Quản lý người dùng",
        path: "/banner1/manage/",
        icon: <BiIcons.BiUser size={24} />,
        iconClosed: <BiIcons.BiChevronRight size={24} />,
        iconOpened: <BiIcons.BiChevronDown size={24} />,
        subNav: [
            {
                title: "Thêm mới người dùng",
                path: "/banner1/create",
                icon: <AiIcons.AiOutlineGlobal size={24} />,
                cName: "sub-nav",
            },
            {
                title: "Cập nhật người dùng",
                path: "/banner1/update/",
                icon: <MdIcons.MdManageSearch size={24} />,
                cName: "sub-nav",
            },
        ]
    }
];

export const SidebarData = [
    {
        title: "Tổng quan",
        path: "/home",
        icon: <AiIcons.AiOutlineHome size={24} />
    },
    {
        title: "Quản lý khu vực",
        path: "/website",
        icon: <BiIcons.BiCollection size={24} />,
        iconClosed: <BiIcons.BiChevronRight size={24} />,
        iconOpened: <BiIcons.BiChevronDown size={24} />,

        subNav: [
            {
                title: "Sapo Web",
                path: "/section/SapoWeb",
                icon: <AiIcons.AiOutlineGlobal size={24} />,
                cName: "sub-nav",
            },
            {
                title: "Sapo Omni",
                path: "/section/SapoOmni",
                icon: <MdIcons.MdManageSearch size={24} />,
                cName: "sub-nav",
            },
            {
                title: "Sapo FnB",
                path: "/section/SapoFnB",
                icon: <BiIcons.BiFoodMenu size={24} />,
                cName: "sub-nav",
            }
        ]
    },
    {
        title: "Quản lý banner",
        path: "/banner/manage",
        icon: <MdIcons.MdPictureInPicture size={24} />,

    },

];
