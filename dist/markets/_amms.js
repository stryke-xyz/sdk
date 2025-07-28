"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WBTC_USDC_EQUALIZER_1460_POOL_SONIC = exports.WSONIC_USDC_EQUALIZER_1337_POOL_SONIC = exports.WETH_USDC_EQUALIZER_1337_POOL_SONIC = exports.BOOP_WETH_UNISWAP_V3_10000_POOL_ARBITRUM = exports.WBTC_USDC_PANCAKESWAP_V3_500_POOL_ARBITRUM = exports.WBTC_USDC_SUSHISWAP_V3_500_POOL_ARBITRUM = exports.WBTC_USDC_UNISWAP_V3_500_POOL_ARBITRUM = exports.WBERA_HONEY_KODIAK_3000_POOL_BERACHAIN = exports.WBTC_HONEY_KODIAK_3000_POOL_BERACHAIN = exports.WETH_HONEY_KODIAK_3000_POOL_BERACHAIN = exports.WETH_USDC_PANCAKESWAP_V3_500_POOL_ARBITRUM = exports.WETH_USDC_SUSHISWAP_V3_500_POOL_ARBITRUM = exports.WETH_USDC_UNISWAP_V3_500_POOL_ARBITRUM = exports.ARB_USDC_PANCAKESWAP_V3_500_POOL_ARBITRUM = exports.ARB_USDC_SUSHISWAP_V3_500_POOL_ARBITRUM = exports.ARB_USDC_UNISWAP_V3_500_POOL_ARBITRUM = exports.WBTC_USDC_SHADOW_1460_POOL_SONIC_ADDRESS = exports.WSONIC_USDC_EQUALIZER_619_POOL_SONIC_ADDRESS = exports.BOOP_WETH_UNISWAP_V3_10000_POOL_ARBITRUM_ADDRESS = exports.ARB_USDC_PANCAKESWAP_V3_500_POOL_ARBITRUM_ADDRESS = exports.ARB_USDC_SUSHISWAP_V3_500_POOL_ARBITRUM_ADDRESS = exports.ARB_USDC_UNISWAP_V3_500_POOL_ARBITRUM_ADDRESS = exports.WBTC_USDC_PANCAKESWAP_V3_500_POOL_ARBITRUM_ADDRESS = exports.WBTC_USDC_SUSHISWAP_V3_500_POOL_ARBITRUM_ADDRESS = exports.WBTC_USDC_UNISWAP_V3_500_POOL_ARBITRUM_ADDRESS = exports.WBERA_HONEY_KODIAK_3000_POOL_BERACHAIN_ADDRESS = exports.WBTC_HONEY_KODIAK_3000_POOL_BERACHAIN_ADDRESS = exports.WETH_HONEY_KODIAK_3000_POOL_BERACHAIN_ADDRESS = exports.WETH_USDC_EQUALIZER_1337_POOL_SONIC_ADDRESS = exports.WETH_USDC_PANCAKESWAP_V3_500_POOL_ARBITRUM_ADDRESS = exports.WETH_USDC_SUSHISWAP_V3_500_POOL_ARBITRUM_ADDRESS = exports.WETH_USDC_UNISWAP_V3_500_POOL_ARBITRUM_ADDRESS = void 0;
const chains_1 = require("../chains");
const periphery_1 = require("../periphery");
const tokens_1 = require("../tokens");
const _feesAndTickSpaces_1 = require("./_feesAndTickSpaces");
const _handlers_1 = require("./_handlers");
const symbols_1 = require("./symbols");
exports.WETH_USDC_UNISWAP_V3_500_POOL_ARBITRUM_ADDRESS = "0xC6962004f452bE9203591991D15f6b388e09E8D0";
exports.WETH_USDC_SUSHISWAP_V3_500_POOL_ARBITRUM_ADDRESS = "0xf3eb87c1f6020982173c908e7eb31aa66c1f0296";
exports.WETH_USDC_PANCAKESWAP_V3_500_POOL_ARBITRUM_ADDRESS = "0xd9e2a1a61b6e61b275cec326465d417e52c1b95c";
exports.WETH_USDC_EQUALIZER_1337_POOL_SONIC_ADDRESS = "0xfe809A1D337Bdfc98B77A1067e3819f66d8AD23F";
exports.WETH_HONEY_KODIAK_3000_POOL_BERACHAIN_ADDRESS = "0x9EB897D400f245E151daFD4c81176397D7798C9c";
exports.WBTC_HONEY_KODIAK_3000_POOL_BERACHAIN_ADDRESS = "0x545bea6ea7f8fd8dcc5c9a6802a8ebf3dbfc1c6e";
exports.WBERA_HONEY_KODIAK_3000_POOL_BERACHAIN_ADDRESS = "0x1127f801Cb3ab7BDF8923272949AA7Dba94B5805";
exports.WBTC_USDC_UNISWAP_V3_500_POOL_ARBITRUM_ADDRESS = "0x0E4831319A50228B9e450861297aB92dee15B44F";
exports.WBTC_USDC_SUSHISWAP_V3_500_POOL_ARBITRUM_ADDRESS = "0x699f628a8a1de0f28cf9181c1f8ed848ebb0bbdf";
exports.WBTC_USDC_PANCAKESWAP_V3_500_POOL_ARBITRUM_ADDRESS = "0x843ac8dc6d34aeb07a56812b8b36429ee46bdd07";
exports.ARB_USDC_UNISWAP_V3_500_POOL_ARBITRUM_ADDRESS = "0xb0f6ca40411360c03d41c5ffc5f179b8403cdcf8";
exports.ARB_USDC_SUSHISWAP_V3_500_POOL_ARBITRUM_ADDRESS = "0xfa1cc0cae7779b214b1112322a2d1cf0b511c3bc";
exports.ARB_USDC_PANCAKESWAP_V3_500_POOL_ARBITRUM_ADDRESS = "0x9ffca51d23ac7f7df82da414865ef1055e5afcc3";
exports.BOOP_WETH_UNISWAP_V3_10000_POOL_ARBITRUM_ADDRESS = "0xe24F62341D84D11078188d83cA3be118193D6389";
exports.WSONIC_USDC_EQUALIZER_619_POOL_SONIC_ADDRESS = "0xb1BC4B830FCbA2184B92e15b9133c41160518038";
exports.WBTC_USDC_SHADOW_1460_POOL_SONIC_ADDRESS = "0x8BC2f9e725cbB07c338df4e77c82190119ddd823";
exports.ARB_USDC_UNISWAP_V3_500_POOL_ARBITRUM = {
    chainId: chains_1.ARBITRUM_CHAIN_ID,
    inversePrice: false,
    address: exports.ARB_USDC_UNISWAP_V3_500_POOL_ARBITRUM_ADDRESS,
    feeBps: _feesAndTickSpaces_1.FIVE_HUNDRED,
    handler: periphery_1.UNISWAP_V3_HANDLER_ARBITRUM_ADDRESS,
    ammVerboseName: _handlers_1.UNISWAP_V3_NAME,
    ammShortName: _handlers_1.UNISWAP_V3_NAME_ID,
    tickSpacing: _feesAndTickSpaces_1.TEN,
    token0: tokens_1.ARB_ARBITRUM,
    token1: tokens_1.USDC_ARBITRUM,
    principleSymbol: symbols_1.ARB,
    quoteSymbol: symbols_1.USD,
    isMemePair: false,
};
exports.ARB_USDC_SUSHISWAP_V3_500_POOL_ARBITRUM = {
    chainId: chains_1.ARBITRUM_CHAIN_ID,
    inversePrice: false,
    address: exports.ARB_USDC_SUSHISWAP_V3_500_POOL_ARBITRUM_ADDRESS,
    feeBps: _feesAndTickSpaces_1.FIVE_HUNDRED,
    handler: "0x36dfa3488E2974f003481fc18388fd6a0741A4Be",
    ammVerboseName: _handlers_1.SUSHISWAP_V3_NAME,
    ammShortName: _handlers_1.SUSHISWAP_V3_NAME_ID,
    tickSpacing: _feesAndTickSpaces_1.TEN,
    token0: tokens_1.ARB_ARBITRUM,
    token1: tokens_1.USDC_ARBITRUM,
    principleSymbol: symbols_1.ARB,
    quoteSymbol: symbols_1.USD,
    isMemePair: false,
};
exports.ARB_USDC_PANCAKESWAP_V3_500_POOL_ARBITRUM = {
    chainId: chains_1.ARBITRUM_CHAIN_ID,
    inversePrice: false,
    address: exports.ARB_USDC_PANCAKESWAP_V3_500_POOL_ARBITRUM_ADDRESS,
    feeBps: _feesAndTickSpaces_1.FIVE_HUNDRED,
    handler: "0x23aD242c41b965DB6343ec4A9890fcF80da1c314",
    ammVerboseName: _handlers_1.PANCAKESWAP_V3_NAME,
    ammShortName: _handlers_1.PANCAKESWAP_V3_NAME_ID,
    tickSpacing: _feesAndTickSpaces_1.TEN,
    token0: tokens_1.ARB_ARBITRUM,
    token1: tokens_1.USDC_ARBITRUM,
    principleSymbol: symbols_1.ARB,
    quoteSymbol: symbols_1.USD,
    isMemePair: false,
};
exports.WETH_USDC_UNISWAP_V3_500_POOL_ARBITRUM = {
    chainId: chains_1.ARBITRUM_CHAIN_ID,
    inversePrice: false,
    address: exports.WETH_USDC_UNISWAP_V3_500_POOL_ARBITRUM_ADDRESS,
    feeBps: _feesAndTickSpaces_1.FIVE_HUNDRED,
    handler: periphery_1.UNISWAP_V3_HANDLER_ARBITRUM_ADDRESS,
    ammVerboseName: _handlers_1.UNISWAP_V3_NAME,
    ammShortName: _handlers_1.UNISWAP_V3_NAME_ID,
    tickSpacing: _feesAndTickSpaces_1.TEN,
    token0: tokens_1.WETH_ARBITRUM,
    token1: tokens_1.USDC_ARBITRUM,
    principleSymbol: symbols_1.ETH,
    quoteSymbol: symbols_1.USD,
    isMemePair: false,
};
exports.WETH_USDC_SUSHISWAP_V3_500_POOL_ARBITRUM = {
    chainId: chains_1.ARBITRUM_CHAIN_ID,
    inversePrice: false,
    address: exports.WETH_USDC_SUSHISWAP_V3_500_POOL_ARBITRUM_ADDRESS,
    feeBps: _feesAndTickSpaces_1.FIVE_HUNDRED,
    handler: periphery_1.UNISWAP_V3_HANDLER_ARBITRUM_ADDRESS,
    ammVerboseName: _handlers_1.SUSHISWAP_V3_NAME,
    ammShortName: _handlers_1.SUSHISWAP_V3_NAME_ID,
    tickSpacing: _feesAndTickSpaces_1.TEN,
    token0: tokens_1.WETH_ARBITRUM,
    token1: tokens_1.USDC_ARBITRUM,
    principleSymbol: symbols_1.ETH,
    quoteSymbol: symbols_1.USD,
    isMemePair: false,
};
exports.WETH_USDC_PANCAKESWAP_V3_500_POOL_ARBITRUM = {
    chainId: chains_1.ARBITRUM_CHAIN_ID,
    inversePrice: false,
    address: exports.WETH_USDC_PANCAKESWAP_V3_500_POOL_ARBITRUM_ADDRESS,
    feeBps: _feesAndTickSpaces_1.FIVE_HUNDRED,
    handler: periphery_1.UNISWAP_V3_HANDLER_ARBITRUM_ADDRESS,
    ammVerboseName: _handlers_1.PANCAKESWAP_V3_NAME,
    ammShortName: _handlers_1.PANCAKESWAP_V3_NAME_ID,
    tickSpacing: _feesAndTickSpaces_1.TEN,
    token0: tokens_1.WETH_ARBITRUM,
    token1: tokens_1.USDC_ARBITRUM,
    principleSymbol: symbols_1.ETH,
    quoteSymbol: symbols_1.USD,
    isMemePair: false,
};
exports.WETH_HONEY_KODIAK_3000_POOL_BERACHAIN = {
    chainId: chains_1.BERACHAIN_CHAIN_ID,
    inversePrice: false,
    address: exports.WETH_HONEY_KODIAK_3000_POOL_BERACHAIN_ADDRESS,
    feeBps: 3000,
    handler: "0xf6314300b42B7D88c153348921a95d3CA95E74Bd",
    ammVerboseName: _handlers_1.KODIAK_NAME,
    ammShortName: _handlers_1.KODIAK_NAME_ID,
    tickSpacing: 60,
    token0: tokens_1.WETH_BERACHAIN,
    token1: tokens_1.HONEY_BERACHAIN,
    principleSymbol: symbols_1.ETH,
    quoteSymbol: symbols_1.HONEY,
    isMemePair: false,
};
exports.WBTC_HONEY_KODIAK_3000_POOL_BERACHAIN = {
    chainId: chains_1.BERACHAIN_CHAIN_ID,
    inversePrice: false,
    address: exports.WBTC_HONEY_KODIAK_3000_POOL_BERACHAIN_ADDRESS,
    feeBps: 3000,
    handler: "0xf6314300b42B7D88c153348921a95d3CA95E74Bd",
    ammVerboseName: _handlers_1.KODIAK_NAME,
    ammShortName: _handlers_1.KODIAK_NAME_ID,
    tickSpacing: 60,
    token0: tokens_1.WBTC_BERACHAIN,
    token1: tokens_1.HONEY_BERACHAIN,
    principleSymbol: symbols_1.WBTC,
    quoteSymbol: symbols_1.HONEY,
    isMemePair: false,
};
exports.WBERA_HONEY_KODIAK_3000_POOL_BERACHAIN = {
    chainId: chains_1.BERACHAIN_CHAIN_ID,
    inversePrice: false,
    address: exports.WBERA_HONEY_KODIAK_3000_POOL_BERACHAIN_ADDRESS,
    feeBps: 3000,
    handler: "0xf6314300b42B7D88c153348921a95d3CA95E74Bd",
    ammVerboseName: _handlers_1.KODIAK_NAME,
    ammShortName: _handlers_1.KODIAK_NAME_ID,
    tickSpacing: 60,
    token0: tokens_1.WBERA_BERACHAIN,
    token1: tokens_1.HONEY_BERACHAIN,
    principleSymbol: symbols_1.BERA,
    quoteSymbol: symbols_1.HONEY,
    isMemePair: false,
};
exports.WBTC_USDC_UNISWAP_V3_500_POOL_ARBITRUM = {
    chainId: chains_1.ARBITRUM_CHAIN_ID,
    inversePrice: false,
    address: exports.WBTC_USDC_UNISWAP_V3_500_POOL_ARBITRUM_ADDRESS,
    feeBps: _feesAndTickSpaces_1.FIVE_HUNDRED,
    handler: "0xf6314300b42B7D88c153348921a95d3CA95E74Bd",
    ammVerboseName: _handlers_1.UNISWAP_V3_NAME,
    ammShortName: _handlers_1.UNISWAP_V3_NAME_ID,
    tickSpacing: _feesAndTickSpaces_1.TEN,
    token0: tokens_1.WBTC_ARBITRUM,
    token1: tokens_1.USDC_ARBITRUM,
    principleSymbol: symbols_1.WBTC,
    quoteSymbol: symbols_1.USD,
    isMemePair: false,
};
exports.WBTC_USDC_SUSHISWAP_V3_500_POOL_ARBITRUM = {
    chainId: chains_1.ARBITRUM_CHAIN_ID,
    inversePrice: false,
    address: exports.WBTC_USDC_SUSHISWAP_V3_500_POOL_ARBITRUM_ADDRESS,
    feeBps: _feesAndTickSpaces_1.FIVE_HUNDRED,
    handler: "0xf6314300b42B7D88c153348921a95d3CA95E74Bd",
    ammVerboseName: _handlers_1.SUSHISWAP_V3_NAME,
    ammShortName: _handlers_1.SUSHISWAP_V3_NAME_ID,
    tickSpacing: _feesAndTickSpaces_1.TEN,
    token0: tokens_1.WBTC_ARBITRUM,
    token1: tokens_1.USDC_ARBITRUM,
    principleSymbol: symbols_1.WBTC,
    quoteSymbol: symbols_1.USD,
    isMemePair: false,
};
exports.WBTC_USDC_PANCAKESWAP_V3_500_POOL_ARBITRUM = {
    chainId: chains_1.ARBITRUM_CHAIN_ID,
    inversePrice: false,
    address: exports.WBTC_USDC_PANCAKESWAP_V3_500_POOL_ARBITRUM_ADDRESS,
    feeBps: _feesAndTickSpaces_1.FIVE_HUNDRED,
    handler: "0x36dfa3488E2974f003481fc18388fd6a0741A4Be",
    ammVerboseName: _handlers_1.PANCAKESWAP_V3_NAME,
    ammShortName: _handlers_1.PANCAKESWAP_V3_NAME_ID,
    tickSpacing: _feesAndTickSpaces_1.TEN,
    token0: tokens_1.WBTC_ARBITRUM,
    token1: tokens_1.USDC_ARBITRUM,
    principleSymbol: symbols_1.WBTC,
    quoteSymbol: symbols_1.USD,
    isMemePair: false,
};
exports.BOOP_WETH_UNISWAP_V3_10000_POOL_ARBITRUM = {
    chainId: chains_1.ARBITRUM_CHAIN_ID,
    inversePrice: false,
    address: exports.BOOP_WETH_UNISWAP_V3_10000_POOL_ARBITRUM_ADDRESS,
    feeBps: _feesAndTickSpaces_1.TEN_THOUSAND,
    handler: periphery_1.UNISWAP_V3_HANDLER_ARBITRUM_ADDRESS,
    ammVerboseName: _handlers_1.UNISWAP_V3_NAME,
    ammShortName: _handlers_1.UNISWAP_V3_NAME_ID,
    tickSpacing: _feesAndTickSpaces_1.TWO_HUNDRED,
    token0: tokens_1.BOOP_ARBITRUM,
    token1: tokens_1.WETH_ARBITRUM,
    principleSymbol: symbols_1.BOOP,
    quoteSymbol: symbols_1.ETH,
    isMemePair: true,
};
exports.WETH_USDC_EQUALIZER_1337_POOL_SONIC = {
    chainId: chains_1.SONIC_CHAIN_ID,
    inversePrice: true,
    address: exports.WETH_USDC_EQUALIZER_1337_POOL_SONIC_ADDRESS,
    feeBps: 1337,
    handler: "0x461f057030Fbfd2C20f32DEA392D67b1174eec82",
    ammVerboseName: "Equalizer",
    ammShortName: "equalizer",
    tickSpacing: 8,
    token0: tokens_1.USDC_SONIC,
    token1: tokens_1.WETH_SONIC,
    principleSymbol: symbols_1.USD,
    quoteSymbol: symbols_1.ETH,
    isMemePair: false,
};
exports.WSONIC_USDC_EQUALIZER_1337_POOL_SONIC = {
    chainId: chains_1.SONIC_CHAIN_ID,
    inversePrice: false,
    address: exports.WSONIC_USDC_EQUALIZER_619_POOL_SONIC_ADDRESS,
    feeBps: 619,
    handler: "0x461f057030Fbfd2C20f32DEA392D67b1174eec82",
    ammVerboseName: "Equalizer",
    ammShortName: "equalizer",
    tickSpacing: 8,
    token0: tokens_1.WSONIC_SONIC,
    token1: tokens_1.USDC_SONIC,
    principleSymbol: symbols_1.SONIC,
    quoteSymbol: symbols_1.USD,
    isMemePair: false,
};
exports.WBTC_USDC_EQUALIZER_1460_POOL_SONIC = {
    chainId: chains_1.SONIC_CHAIN_ID,
    inversePrice: false,
    address: exports.WBTC_USDC_SHADOW_1460_POOL_SONIC_ADDRESS,
    feeBps: 1460,
    handler: "0x461f057030Fbfd2C20f32DEA392D67b1174eec82",
    ammVerboseName: "Shadow Exchange",
    ammShortName: "shadow",
    tickSpacing: 50,
    token0: tokens_1.WBTC_SONIC,
    token1: tokens_1.USDC_SONIC,
    principleSymbol: symbols_1.WBTC,
    quoteSymbol: symbols_1.USD,
    isMemePair: false,
};
