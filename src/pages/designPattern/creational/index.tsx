/** @format */
// import { useRef, useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { vehicleFactoryTest } from "./factoryMethod";
import { drawPieTest } from "./abstractFactory";
import { PageBuilder } from "./builder";
import { readServiceConf } from "./prototype";
import { ServeInfoSingleton } from "./singleton";
const Creational = () => {
  // 工厂方法
  const factorys = vehicleFactoryTest();
  // const canvasRef = useRef<any>();
  const [abstractFactory, setAbstractFactory] = useState<string[]>([]);

  useEffect(() => {
    // if (canvasRef.current) {
    //   console.log(canvasRef.current);
    // }
    // 抽象工厂
    const list = drawPieTest();
    setAbstractFactory(list);
  }, []);
  // 建造者模式
  const builderPanel = new PageBuilder().buildPanel("建造一个面板");
  const builderForm = new PageBuilder().buildForm([
    { labelType: "Input" },
    { labelType: "Select" },
    { labelType: "InputNumber" },
  ]);
  // 原型模式（提供cloneable的实现，提供源对象实例的复制）
  const prototypeCloneResults = [
    readServiceConf.SQLStatus,
    readServiceConf.BankServerStatus,
    readServiceConf.StockServerStatus,
  ];
  // 单例模式
  const singletonText0 = new ServeInfoSingleton(0);
  const singletonText1 = new ServeInfoSingleton(1);
  const singletonText2 = new ServeInfoSingleton(2);
  return (
    <>
      <h2>工厂方法</h2>
      <h3>车辆耗能计算工厂</h3>
      {factorys.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
      <h2>抽象工厂</h2>
      {/* <canvas ref={canvasRef}></canvas> */}
      {abstractFactory.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
      <h2>建造者模式</h2>
      {builderPanel}
      <br />
      {builderForm}
      <h2>原型模式</h2>
      {prototypeCloneResults.map((status, index) => (
        <div key={index}>{status}</div>
      ))}
      <h2>单例模式</h2>
      <div>{singletonText0.getInstance().info}</div>
      <div>{singletonText1.getInstance().info}</div>
      <div>{singletonText2.getInstance().info}</div>
    </>
  );
};

export default Creational;
