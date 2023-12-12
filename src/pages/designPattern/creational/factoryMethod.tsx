/** @format */

/**
 * @description 能源车
 * @description 能源车分为：汽油车、柴油车、电动车、氢能源车等各种耗能车辆
 * @description 它们都会耗能（Energy Consumption）
 */
interface IenergyVehicles {
  /**
   * @description 展示耗能情况
   * @param mileage 里程数
   * @param unit 所耗能源计量单位
   */
  energyConsumption(mileage: number, unit: string): string;
}

/**
 * @description 汽油车
 */
export class GasolineVehicle implements IenergyVehicles {
  energyConsumption(mileage: number, unit: string): string {
    const result = `${mileage * 1000}${unit}`;
    return result;
  }
}
/**
 * @description 柴油车
 */
export class DieselVehicle implements IenergyVehicles {
  energyConsumption(mileage: number, unit: string): string {
    const result = `${mileage * 600}${unit}`;
    return result;
  }
}
/**
 * @description 电动车
 */
export class ElectricVehicle implements IenergyVehicles {
  energyConsumption(mileage: number, unit: string): string {
    const result = `${mileage * 200}${unit}`;
    return result;
  }
}

/**
 * @description 氢能源车
 */
export class HydrogenEnergyVehicle implements IenergyVehicles {
  energyConsumption(mileage: number, unit: string): string {
    const result = `${mileage * 50}${unit}`;
    return result;
  }
}
type vehicleType = 0 | 1 | 2 | 3;
/**
 * @description 车辆制造工厂
 * @param type
 * @param mileage
 * @param unit
 * @returns
 */
const vehicleFactory = (type: vehicleType): IenergyVehicles => {
  const vehicleClass = [
    GasolineVehicle,
    DieselVehicle,
    ElectricVehicle,
    HydrogenEnergyVehicle,
  ];
  return new vehicleClass[type]();
};
export const vehicleFactoryTest = () => {
  const testMileage = 100;
  const testUnit = "公斤";
  const vehicleNameList = ["汽油车", "柴油车", "电动车", "氢能车"];
  return [
    vehicleFactory(0).energyConsumption(testMileage, testUnit),
    vehicleFactory(1).energyConsumption(testMileage, testUnit),
    vehicleFactory(2).energyConsumption(testMileage, testUnit),
    vehicleFactory(3).energyConsumption(testMileage, testUnit),
  ].map((item, index) => `${vehicleNameList[index]}耗能：${item}`);
};
