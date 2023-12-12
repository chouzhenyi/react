/** @format */
import Home from "../pages/home/index";
import DesignPattern from "../pages/designPattern/index";
import Network from "../pages/network/index";
import Creational from "../pages/designPattern/creational/index";
import Structural from "../pages/designPattern/structural/index";
import Behavioral from "../pages/designPattern/behavioral/index";

export const designRoutersChildren = [
  { path: "*", component: Creational },
  { title: "创建型", path: "creational", component: Creational },
  { title: "结构型", path: "structural", component: Structural },
  { title: "行为型", path: "behavioral", component: Behavioral },
];
const routers = [
  {
    title: "首页",
    path: "/",
    component: Home,
  },
  {
    title: "设计模式",
    path: "/designPattern/*",
    component: DesignPattern,
    children: designRoutersChildren,
  },
  {
    title: "网络",
    path: "/network",
    component: Network,
  },
];
export default routers;
