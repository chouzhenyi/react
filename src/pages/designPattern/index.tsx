/** @format */
import { Routes, Route } from "react-router-dom";
import { designRoutersChildren } from "../../routers/index";

const DesignPattern = () => {
  return (
    <>
      <Routes>
        {designRoutersChildren.map((item, index) => {
          return (
            <Route key={index} path={item.path} element={<item.component />} />
          );
        })}
      </Routes>
    </>
  );
};

export default DesignPattern;
