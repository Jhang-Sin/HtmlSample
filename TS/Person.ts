class Person
{
    //屬性
    name:string;
    age:number;
    // constructor 建構函數/建構子
    constructor(n:string,y:number)
    {
        this.name=n;
        this.age=y;
    }

    ///方法
    print():string{
        let msg:string = '<p>My name is' + this.name+ 'Age = ' + this.age+'</p>';
        return msg;

        ///let用於宣告一個「只作用在當前區塊的變數」，初始值可選擇性的設定。
        
    }

}
function doclick(): void {
    let val: string = (document.querySelector('#text1') as HTMLInputElement).value;
    console.log(val);
}

