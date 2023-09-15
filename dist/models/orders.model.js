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
exports.AllOrders = exports.userOrder = void 0;
const typegoose_1 = require("@typegoose/typegoose");
class userOrder {
}
__decorate([
    (0, typegoose_1.prop)({ type: String, required: true }),
    __metadata("design:type", String)
], userOrder.prototype, "name", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: String, required: true }),
    __metadata("design:type", String)
], userOrder.prototype, "email", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: String, required: true }),
    __metadata("design:type", Number)
], userOrder.prototype, "phone", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: String, required: true }),
    __metadata("design:type", String)
], userOrder.prototype, "address", void 0);
exports.userOrder = userOrder;
class AllOrders {
}
__decorate([
    (0, typegoose_1.prop)({ type: String, required: true }),
    __metadata("design:type", String)
], AllOrders.prototype, "nameProduct", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: String, required: true }),
    __metadata("design:type", String)
], AllOrders.prototype, "company", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], AllOrders.prototype, "quantity", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], AllOrders.prototype, "totalOrder", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: String, required: true }),
    __metadata("design:type", String)
], AllOrders.prototype, "photo", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: String, required: true }),
    __metadata("design:type", String)
], AllOrders.prototype, "userName", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: String, required: true }),
    __metadata("design:type", String)
], AllOrders.prototype, "userEmail", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], AllOrders.prototype, "userPhone", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: String, required: true }),
    __metadata("design:type", String)
], AllOrders.prototype, "userAddress", void 0);
exports.AllOrders = AllOrders;
const AllorderModel = (0, typegoose_1.getModelForClass)(AllOrders);
exports.default = AllorderModel;
