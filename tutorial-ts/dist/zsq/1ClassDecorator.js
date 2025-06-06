"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 带参装饰器
 * @param params
 * @returns
 */
function FirstClassDecorator(params) {
    return function (targetClass) {
        var targetClassObj = new targetClass();
        targetClassObj.buy();
        console.log('targetClass.name: ', targetClass.name);
        console.log('params: ', params);
    };
}
var CustomerService = /** @class */ (function () {
    function CustomerService() {
        this.name = '下单';
    }
    CustomerService.prototype.buy = function () {
        console.log(this.name + '购买');
    };
    CustomerService.prototype.placeOrder = function () {
        console.log(this.name + '下单购买');
    };
    CustomerService = __decorate([
        FirstClassDecorator('修饰CS类的装饰器参数'),
        __metadata("design:paramtypes", [])
    ], CustomerService);
    return CustomerService;
}());
