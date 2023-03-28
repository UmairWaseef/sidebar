import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as FcIcons from "react-icons/fc";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";
import * as TbIcons from "react-icons/tb"





export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Oraganization",
    path: "/organization",
    icon:<AiIcons.AiOutlineTeam />,
    cName: "nav-text",
  },
  {
    title: "Employee",
    path: "/employee",
    icon: <RiIcons.RiTeamLine />,
    cName: "nav-text",
  },
  {
    title: "Departments",
    path: "/departments",
    icon: <FcIcons.FcDepartment />,
    cName: "nav-text",
  },
  {
    title: "Products",
    path: "/products",
    icon: <MdIcons.MdOutlineProductionQuantityLimits />,
    cName: "nav-text",
  },
  {
    title: "Customer",
    path: "/customer",
    icon: <MdIcons.MdBoy />,
    cName: "nav-text",
  },
  {
    title: "Supplier",
    path: "/supplier",
    icon: <FaIcons.FaShuttleVan />,
    cName: "nav-text",
  },
  {
    title: "Report",
    path: "/Report",
    icon: <TbIcons.TbReport />,
    cName: "nav-text",
  },
  {
    title: "Feedback",
    path: "/feedback",
    icon: <MdIcons.MdOutlineFeedback />,
    cName: "nav-text",
  },

];
