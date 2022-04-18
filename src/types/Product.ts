export class Data {
  constructor(
    id: string,
    name: string,
    value: number,
    description: string,
    type: string
  ) {}
}

export class Product {
  constructor(
    private id: string,
    private name: string,
    private value: number,
    private description: string,
    private type: string
  ) {}

  public getId() {
    return this.id
  }

  public getName() {
    return this.name
  }

  public getValue() {
    return this.value
  }

  public getDescription() {
    return this.description
  }

  public getType() {
    return this.type
  }
}
