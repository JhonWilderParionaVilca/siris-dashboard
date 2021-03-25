import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Nosotros",
    path: "/",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Convenios",
    // path: "/convenios",
    icon: <FaIcons.FaHandshake />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Convenio FED",
        path: "/convenios/fed",
        icon: <FaIcons.FaChartLine />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Estrategias Sanitarias",
    // path: "/products",
    icon: <FaIcons.FaBrain />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Salud sexual y reproductiva",
        path: "/materno",
        icon: <FaIcons.FaVenusMars />,
        cName: "sub-nav",
      },
      {
        title: "Inmunizaciones",
        path: "/inmunizaciones",
        icon: <FaIcons.FaSyringe />,
        cName: "sub-nav",
      },
      {
        title: "Puntos de vacunación contra COVID19",
        path: "/puntos-vacunacion",
        icon: <FaIcons.FaSyringe />,
        cName: "sub-nav",
      },
    ],
  },
];
