export class User {
  constructor(
    public name: string,
    public age: number,
    public gender: string,
    public phone: string,
    public email: string
  ) {}

  // 額外方法：回傳格式化資訊
  getInfo(): string {
    return `${this.name} (${this.age} 歲, ${this.gender})`;
  }
}