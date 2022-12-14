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
exports.company = void 0;
const typegoose_1 = require("@typegoose/typegoose");
class company {
}
__decorate([
    (0, typegoose_1.prop)({ type: String, required: true }),
    __metadata("design:type", String)
], company.prototype, "companyName", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: String, required: true, trim: true }),
    __metadata("design:type", String)
], company.prototype, "category", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: String, default: 0 }),
    __metadata("design:type", String)
], company.prototype, "since", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: String, required: true }),
    __metadata("design:type", String)
], company.prototype, "until", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: String, required: true }),
    __metadata("design:type", String)
], company.prototype, "photo", void 0);
exports.company = company;
const companyModel = (0, typegoose_1.getModelForClass)(company);
exports.default = companyModel;
