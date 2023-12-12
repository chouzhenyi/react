/** @format */

interface IConfigPrototype {
  clone(): IConfigPrototype;
}

class GenReadServiceConf implements IConfigPrototype {
  SQLStatus: string = "";
  BankServerStatus: string = "";
  StockServerStatus: string = "";
  constructor() {
    this.readSQL();
    this.readBank();
    this.readStock();
  }
  readSQL() {
    this.SQLStatus = "读取数据库状态：001";
  }
  readBank() {
    this.BankServerStatus = "读取银行服务状态：002";
  }
  readStock() {
    this.StockServerStatus = "读取库存状态成功";
  }
  clone(): IConfigPrototype {
    return new GenReadServiceConf();
  }
}

export const readServiceConf = new GenReadServiceConf();
