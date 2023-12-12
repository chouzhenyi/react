/** @format */
import "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.less";
import routers from "./routers/index";
import RouterMenu from "./layout/routerMenu";

const App = () => {
  const navigate = useNavigate();
  const handleRouteMenuClick = ({ key: path }: { key: string }) => {
    navigate(path);
  };
  return (
    <>
      <RouterMenu className="menu-wrapper" handleClick={handleRouteMenuClick} />
      <div className="nav-wrapper">
        <Routes>
          {routers.map((item, index) => {
            return (
              <Route
                key={index}
                path={item.path}
                element={<item.component />}
              />
            );
          })}
        </Routes>
      </div>
    </>
  );
};

export default App;
