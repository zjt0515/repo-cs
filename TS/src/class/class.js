"use strict";
class People {
    constructor(_name, _age, _addr) {
        this.name = _name;
        this.age = _age;
        this.addr = _addr;
    }
    doEat() {
        console.log("eating");
    }
}
let p = new People("zjt", 13);
