"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHookData = getHookData;
const hooks_1 = require("../hooks");
__exportStar(require("./tick-to-price"), exports);
__exportStar(require("./getAMM"), exports);
__exportStar(require("./liquidity-amount-math"), exports);
__exportStar(require("./tick-math"), exports);
__exportStar(require("./getMarket"), exports);
function getHookData({ address, chainId, }) {
    return hooks_1.HOOKS.find((hook) => hook.address.toLowerCase() === address.toLowerCase() &&
        hook.chainId === chainId);
}
