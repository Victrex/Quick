"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.order = void 0;
var typegoose_1 = require("@typegoose/typegoose");
var order = exports.order = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _order_decorators;
    var _order_initializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _motorista_decorators;
    var _motorista_initializers = [];
    return _a = /** @class */ (function () {
            function order() {
                this.order = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _order_initializers, void 0));
                this.status = __runInitializers(this, _status_initializers, void 0);
                this.motorista = __runInitializers(this, _motorista_initializers, void 0);
            }
            return order;
        }()),
        (function () {
            _order_decorators = [(0, typegoose_1.prop)({ type: Array, required: true })];
            _status_decorators = [(0, typegoose_1.prop)({ type: String, required: true, trim: true })];
            _motorista_decorators = [(0, typegoose_1.prop)({ type: String, default: 0 })];
            __esDecorate(null, null, _order_decorators, { kind: "field", name: "order", static: false, private: false, access: { has: function (obj) { return "order" in obj; }, get: function (obj) { return obj.order; }, set: function (obj, value) { obj.order = value; } } }, _order_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } } }, _status_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _motorista_decorators, { kind: "field", name: "motorista", static: false, private: false, access: { has: function (obj) { return "motorista" in obj; }, get: function (obj) { return obj.motorista; }, set: function (obj, value) { obj.motorista = value; } } }, _motorista_initializers, _instanceExtraInitializers);
        })(),
        _a;
}();
var orderModel = (0, typegoose_1.getModelForClass)(order);
exports.default = orderModel;
