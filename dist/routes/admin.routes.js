"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_controllers_1 = require("../controllers/admin.controllers");
const router = (0, express_1.Router)();
router.get('/', admin_controllers_1.indexAdmin);
exports.default = router;
