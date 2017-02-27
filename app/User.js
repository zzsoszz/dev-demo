/**
 * Created by Administrator on 2017/2/27.
 */
export class User{
    constructor(name,password){
        this.name=name;
        this.password=password;
    }
    say(){
        console.log("name:",this.name);
        console.log("password:",this.password);
    }
}
