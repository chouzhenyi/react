/**
 * 桥接模式：一组功能存在两个不同的维度，各维度都有各自的变化；
 *
 * @format
 */

// 举例：实现同样的的事件，不同类型的设备各有不同实现
interface IEventDevice {
  /**
   * @description 展示事件描述
   * @param eventName
   */
  displayDesc(eventName: string): void;
}
class OnMobileEventDevice implements IEventDevice {
  displayDesc(eventName: string): string {
    return `在手机设备上触发${eventName}事件！！！`;
  }
}
class OnPCEventDevice implements IEventDevice {
  displayDesc(eventName: string): string {
    return `在电脑设备上触发${eventName}事件！！`;
  }
}

type CallbackFnType = (params: any) => void;

abstract class StructureEvent {
  deviceAPI: IEventDevice | null = null;
  constructor(eventDevice: IEventDevice) {
    this.deviceAPI = eventDevice;
  }
  abstract trigger(callback: CallbackFnType): void;
}
class StructureClickEvent extends StructureEvent {
  constructor(eventDevice: IEventDevice) {
    super(eventDevice);
  }
  trigger(callback: CallbackFnType): void {
    const message = this.deviceAPI?.displayDesc("click");
    callback(message);
  }
}
class StructureScrollEvent extends StructureEvent {
  constructor(eventDevice: IEventDevice) {
    super(eventDevice);
  }
  trigger(callback: CallbackFnType): void {
    const message = this.deviceAPI?.displayDesc("scroll");
    callback(message);
  }
}

export const bridgeClient = (callback: CallbackFnType) => {
  const mobileDevice = new OnMobileEventDevice();
  const PCDevice = new OnPCEventDevice();
  const clickEvent = new StructureClickEvent(mobileDevice);
  const scrollEvent = new StructureScrollEvent(PCDevice);

  Math.random() > 0.5
    ? scrollEvent.trigger(callback)
    : clickEvent.trigger(callback);
};
