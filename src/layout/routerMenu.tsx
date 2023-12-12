/** @format */
import { Menu } from "antd";
import routers from "../routers/index";

const routeMenuDataCollation = (list: any, startPath: string = "") => {
  return list
    .filter((item: any) => item.path !== "*")
    .map((item: any) => {
      const { title, children } = item;
      const key = `${startPath}${item.path}`.replace("*", "");
      return {
        key,
        label: title,
        children: children ? routeMenuDataCollation(children, key) : null,
      };
    });
};
const RouterMenu = (props: any) => {
  const { handleClick } = props;

  return (
    <Menu
      onClick={handleClick}
      mode="inline"
      items={routeMenuDataCollation(routers)}
      style={{ width: 256 }}
      theme="light"
    />
  );
};

export default RouterMenu;
