"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAMM = void 0;
const amms_1 = require("../amms");
const getAMM = ({ address, chainId }) => {
    const ammData = amms_1.amms.find((amm) => amm.chainId === chainId &&
        amm.address.toLowerCase() === address.toLowerCase());
    return ammData;
};
exports.getAMM = getAMM;
