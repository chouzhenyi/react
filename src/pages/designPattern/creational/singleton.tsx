/** @format */

// 单例模式有很多种，这里只实践一种
class ServeInfoSingletonInner {
  info: string = "";
  constructor(code: number) {
    this.info = `内部类展示的服务信息（code:${code}）`;
  }
}
export class ServeInfoSingleton {
  serveInfoSingletonInnerInstance: ServeInfoSingletonInner | null = null;
  constructor(code: number) {
    if (!this.serveInfoSingletonInnerInstance) {
      this.serveInfoSingletonInnerInstance = new ServeInfoSingletonInner(code);
    }
  }
  getInstance(): ServeInfoSingletonInner {
    return this.serveInfoSingletonInnerInstance as ServeInfoSingletonInner;
  }
}
