"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tickToPrice = void 0;
const tickToPrice = (tick, precision0, precision1, inversePrice) => {
    const base = inversePrice ? 1 / 1.0001 ** tick : 1.0001 ** tick;
    const dividend = inversePrice ? precision0 : precision1;
    const mulitplicant = inversePrice ? precision1 : precision0;
    const price = (base * mulitplicant) / dividend;
    return price;
};
exports.tickToPrice = tickToPrice;
