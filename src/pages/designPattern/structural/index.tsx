/** @format */
import { useState } from "react";
import { bridgeClient } from "./bridge";
// import { compositeClient, couponClient } from "./composite";
import { couponClient } from "./composite";

const Structural = () => {
  const [bridgeResult, setBridgeResult] = useState<string[]>([]);
  // 桥接模式
  const handleBridgeClientTrigger = () => {
    bridgeClient((value) => {
      console.log(value);
      setBridgeResult([...bridgeResult, value]);
    });
  };
  return (
    <div>
      <h3>结构型设计模式</h3>
      <h4>适配器模式</h4>
      <div>
        <b>TODO:适配器模式</b>
      </div>
      <h4>桥接模式</h4>
      <input
        type="button"
        value="点击，实践一个桥接模式的输出"
        onClick={handleBridgeClientTrigger}
        className="button"
      />
      {bridgeResult.map((item, key) => {
        return <div key={key}>{item}</div>;
      })}
      <h4>组合模式</h4>
      <input
        type="button"
        value="点击，实践组合模式"
        onClick={() => {
          // compositeClient();
          couponClient();
        }}
        className="button"
      />
    </div>
  );
};

export default Structural;
