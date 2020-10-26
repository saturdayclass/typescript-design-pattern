// Pakek enum biar lebih strict
enum ComputerType {
  PC = 'PC',
  Laptop = 'Laptop',
}

abstract class Computer {
  protected type: ComputerType;
  protected monitor: String;

  constructor(type: ComputerType, monitor: String) {
    this.type = type;
    this.monitor = monitor;
  }

  abstract getModel(): string;
}

class PC extends Computer {
  constructor(monitor: string) {
    super(ComputerType.PC, monitor);
  }

  getModel(): string {
    return `${this.type} with ${this.monitor}`;
  }
}

class Laptop extends Computer {
  constructor(monitor: string) {
    super(ComputerType.Laptop, monitor);
  }

  getModel(): string {
    return `${this.type} with ${this.monitor}`;
  }
}

enum MonitorType {
  LED = 'LED',
  IPS = 'IPS',
}

class LEDComputerFactory {
  static buildComputer(type: ComputerType): Computer {
    switch (type) {
      case ComputerType.PC:
        return new PC(MonitorType.LED);
      case ComputerType.Laptop:
        return new Laptop(MonitorType.LED);
      default:
        throw new Error('Type Not Found');
    }
  }
}

class IPSComputerFactory {
  static buildComputer(type: ComputerType): Computer {
    switch (type) {
      case ComputerType.PC:
        return new PC(MonitorType.IPS);
      case ComputerType.Laptop:
        return new Laptop(MonitorType.IPS);
    }
  }
}

class ComputerFactory {
  static buildComputer(
    computerType: ComputerType,
    monitorType: MonitorType
  ): Computer {
    switch (monitorType) {
      case MonitorType.LED:
        return LEDComputerFactory.buildComputer(computerType);
      case MonitorType.IPS:
        return IPSComputerFactory.buildComputer(computerType);
      default:
        throw new Error('MonitorType not found');
    }
  }
}

const pcled = ComputerFactory.buildComputer(
  ComputerType.Laptop,
  MonitorType.IPS
);
console.log(pcled.getModel());
