import {
  ARBITRUM_CHAIN_ID,
  BERACHAIN_CHAIN_ID,
  SONIC_CHAIN_ID,
} from "../chains";
import {
  UNISWAP_V3_NAME,
  KODIAK_NAME,
  KODIAK_NAME_ID,
  PANCAKESWAP_V3_NAME,
  PANCAKESWAP_V3_NAME_ID,
  SUSHISWAP_V3_NAME,
  SUSHISWAP_V3_NAME_ID,
  UNISWAP_V3_NAME_ID,
  UNISWAP_V3_HANDLER_ARBITRUM_ADDRESS,
} from "../handlers";
import {
  ARB_ARBITRUM,
  BOOP_ARBITRUM,
  HONEY_BERACHAIN,
  USDC_ARBITRUM,
  USDC_SONIC,
  WBERA_BERACHAIN,
  WBTC_ARBITRUM,
  WBTC_BERACHAIN,
  WBTC_SONIC,
  WETH_ARBITRUM,
  WETH_BERACHAIN,
  WETH_SONIC,
  WSONIC_SONIC,
} from "../tokens";
import { Address, AMM } from "../types/types";
import {
  FIVE_HUNDRED,
  TEN,
  TEN_THOUSAND,
  TWO_HUNDRED,
} from "../utils/_feesAndTickSpaces";
import {
  ARB,
  BERA,
  BOOP,
  ETH,
  HONEY,
  SONIC,
  USD,
  WBTC,
} from "../utils/symbols";

export const WETH_USDC_UNISWAP_V3_500_POOL_ARBITRUM_ADDRESS: Address =
  "0xC6962004f452bE9203591991D15f6b388e09E8D0";

export const WETH_USDC_SUSHISWAP_V3_500_POOL_ARBITRUM_ADDRESS: Address =
  "0xf3eb87c1f6020982173c908e7eb31aa66c1f0296";

export const WETH_USDC_PANCAKESWAP_V3_500_POOL_ARBITRUM_ADDRESS: Address =
  "0xd9e2a1a61b6e61b275cec326465d417e52c1b95c";

export const WETH_USDC_EQUALIZER_1337_POOL_SONIC_ADDRESS =
  "0xfe809A1D337Bdfc98B77A1067e3819f66d8AD23F";

export const WETH_HONEY_KODIAK_3000_POOL_BERACHAIN_ADDRESS: Address =
  "0x9EB897D400f245E151daFD4c81176397D7798C9c";

export const WBTC_HONEY_KODIAK_3000_POOL_BERACHAIN_ADDRESS: Address =
  "0x545bea6ea7f8fd8dcc5c9a6802a8ebf3dbfc1c6e";

export const WBERA_HONEY_KODIAK_3000_POOL_BERACHAIN_ADDRESS: Address =
  "0x1127f801Cb3ab7BDF8923272949AA7Dba94B5805";

export const WBTC_USDC_UNISWAP_V3_500_POOL_ARBITRUM_ADDRESS: Address =
  "0x0E4831319A50228B9e450861297aB92dee15B44F";

export const WBTC_USDC_SUSHISWAP_V3_500_POOL_ARBITRUM_ADDRESS: Address =
  "0x699f628a8a1de0f28cf9181c1f8ed848ebb0bbdf";

export const WBTC_USDC_PANCAKESWAP_V3_500_POOL_ARBITRUM_ADDRESS: Address =
  "0x843ac8dc6d34aeb07a56812b8b36429ee46bdd07";

export const ARB_USDC_UNISWAP_V3_500_POOL_ARBITRUM_ADDRESS =
  "0xb0f6ca40411360c03d41c5ffc5f179b8403cdcf8";

export const ARB_USDC_SUSHISWAP_V3_500_POOL_ARBITRUM_ADDRESS =
  "0xfa1cc0cae7779b214b1112322a2d1cf0b511c3bc";

export const ARB_USDC_PANCAKESWAP_V3_500_POOL_ARBITRUM_ADDRESS =
  "0x9ffca51d23ac7f7df82da414865ef1055e5afcc3";

export const BOOP_WETH_UNISWAP_V3_10000_POOL_ARBITRUM_ADDRESS: Address =
  "0xe24F62341D84D11078188d83cA3be118193D6389";

export const WSONIC_USDC_EQUALIZER_619_POOL_SONIC_ADDRESS =
  "0xb1BC4B830FCbA2184B92e15b9133c41160518038";

export const WBTC_USDC_SHADOW_1460_POOL_SONIC_ADDRESS =
  "0x8BC2f9e725cbB07c338df4e77c82190119ddd823";

export const ARB_USDC_UNISWAP_V3_500_POOL_ARBITRUM: AMM = {
  chainId: ARBITRUM_CHAIN_ID,
  inversePrice: false,
  address: ARB_USDC_UNISWAP_V3_500_POOL_ARBITRUM_ADDRESS,
  feeBps: FIVE_HUNDRED,
  handler: UNISWAP_V3_HANDLER_ARBITRUM_ADDRESS,
  ammVerboseName: UNISWAP_V3_NAME,
  ammShortName: UNISWAP_V3_NAME_ID,
  tickSpacing: TEN,
  token0: ARB_ARBITRUM,
  token1: USDC_ARBITRUM,
  principleSymbol: ARB,
  quoteSymbol: USD,
  isMemePair: false,
};

export const ARB_USDC_SUSHISWAP_V3_500_POOL_ARBITRUM: AMM = {
  chainId: ARBITRUM_CHAIN_ID,
  inversePrice: false,
  address: ARB_USDC_SUSHISWAP_V3_500_POOL_ARBITRUM_ADDRESS,
  feeBps: FIVE_HUNDRED,
  handler: "0x36dfa3488E2974f003481fc18388fd6a0741A4Be",
  ammVerboseName: SUSHISWAP_V3_NAME,
  ammShortName: SUSHISWAP_V3_NAME_ID,
  tickSpacing: TEN,
  token0: ARB_ARBITRUM,
  token1: USDC_ARBITRUM,
  principleSymbol: ARB,
  quoteSymbol: USD,
  isMemePair: false,
};

export const ARB_USDC_PANCAKESWAP_V3_500_POOL_ARBITRUM: AMM = {
  chainId: ARBITRUM_CHAIN_ID,
  inversePrice: false,
  address: ARB_USDC_PANCAKESWAP_V3_500_POOL_ARBITRUM_ADDRESS,
  feeBps: FIVE_HUNDRED,
  handler: "0x23aD242c41b965DB6343ec4A9890fcF80da1c314",
  ammVerboseName: PANCAKESWAP_V3_NAME,
  ammShortName: PANCAKESWAP_V3_NAME_ID,
  tickSpacing: TEN,
  token0: ARB_ARBITRUM,
  token1: USDC_ARBITRUM,
  principleSymbol: ARB,
  quoteSymbol: USD,
  isMemePair: false,
};

export const WETH_USDC_UNISWAP_V3_500_POOL_ARBITRUM: AMM = {
  chainId: ARBITRUM_CHAIN_ID,
  inversePrice: false,
  address: WETH_USDC_UNISWAP_V3_500_POOL_ARBITRUM_ADDRESS,
  feeBps: FIVE_HUNDRED,
  handler: UNISWAP_V3_HANDLER_ARBITRUM_ADDRESS,
  ammVerboseName: UNISWAP_V3_NAME,
  ammShortName: UNISWAP_V3_NAME_ID,
  tickSpacing: TEN,
  token0: WETH_ARBITRUM,
  token1: USDC_ARBITRUM,
  principleSymbol: ETH,
  quoteSymbol: USD,
  isMemePair: false,
};

export const WETH_USDC_SUSHISWAP_V3_500_POOL_ARBITRUM: AMM = {
  chainId: ARBITRUM_CHAIN_ID,
  inversePrice: false,
  address: WETH_USDC_SUSHISWAP_V3_500_POOL_ARBITRUM_ADDRESS,
  feeBps: FIVE_HUNDRED,
  handler: UNISWAP_V3_HANDLER_ARBITRUM_ADDRESS,
  ammVerboseName: SUSHISWAP_V3_NAME,
  ammShortName: SUSHISWAP_V3_NAME_ID,
  tickSpacing: TEN,
  token0: WETH_ARBITRUM,
  token1: USDC_ARBITRUM,
  principleSymbol: ETH,
  quoteSymbol: USD,
  isMemePair: false,
};

export const WETH_USDC_PANCAKESWAP_V3_500_POOL_ARBITRUM: AMM = {
  chainId: ARBITRUM_CHAIN_ID,
  inversePrice: false,
  address: WETH_USDC_PANCAKESWAP_V3_500_POOL_ARBITRUM_ADDRESS,
  feeBps: FIVE_HUNDRED,
  handler: UNISWAP_V3_HANDLER_ARBITRUM_ADDRESS,
  ammVerboseName: PANCAKESWAP_V3_NAME,
  ammShortName: PANCAKESWAP_V3_NAME_ID,
  tickSpacing: TEN,
  token0: WETH_ARBITRUM,
  token1: USDC_ARBITRUM,
  principleSymbol: ETH,
  quoteSymbol: USD,
  isMemePair: false,
};

export const WETH_HONEY_KODIAK_3000_POOL_BERACHAIN: AMM = {
  chainId: BERACHAIN_CHAIN_ID,
  inversePrice: false,
  address: WETH_HONEY_KODIAK_3000_POOL_BERACHAIN_ADDRESS,
  feeBps: 3000,
  handler: "0xf6314300b42B7D88c153348921a95d3CA95E74Bd",
  ammVerboseName: KODIAK_NAME,
  ammShortName: KODIAK_NAME_ID,
  tickSpacing: 60,
  token0: WETH_BERACHAIN,
  token1: HONEY_BERACHAIN,
  principleSymbol: ETH,
  quoteSymbol: HONEY,
  isMemePair: false,
};

export const WBTC_HONEY_KODIAK_3000_POOL_BERACHAIN: AMM = {
  chainId: BERACHAIN_CHAIN_ID,
  inversePrice: false,
  address: WBTC_HONEY_KODIAK_3000_POOL_BERACHAIN_ADDRESS,
  feeBps: 3000,
  handler: "0xf6314300b42B7D88c153348921a95d3CA95E74Bd",
  ammVerboseName: KODIAK_NAME,
  ammShortName: KODIAK_NAME_ID,
  tickSpacing: 60,
  token0: WBTC_BERACHAIN,
  token1: HONEY_BERACHAIN,
  principleSymbol: WBTC,
  quoteSymbol: HONEY,
  isMemePair: false,
};

export const WBERA_HONEY_KODIAK_3000_POOL_BERACHAIN: AMM = {
  chainId: BERACHAIN_CHAIN_ID,
  inversePrice: false,
  address: WBERA_HONEY_KODIAK_3000_POOL_BERACHAIN_ADDRESS,
  feeBps: 3000,
  handler: "0xf6314300b42B7D88c153348921a95d3CA95E74Bd",
  ammVerboseName: KODIAK_NAME,
  ammShortName: KODIAK_NAME_ID,
  tickSpacing: 60,
  token0: WBERA_BERACHAIN,
  token1: HONEY_BERACHAIN,
  principleSymbol: BERA,
  quoteSymbol: HONEY,
  isMemePair: false,
};

export const WBTC_USDC_UNISWAP_V3_500_POOL_ARBITRUM: AMM = {
  chainId: ARBITRUM_CHAIN_ID,
  inversePrice: false,
  address: WBTC_USDC_UNISWAP_V3_500_POOL_ARBITRUM_ADDRESS,
  feeBps: FIVE_HUNDRED,
  handler: "0xf6314300b42B7D88c153348921a95d3CA95E74Bd",
  ammVerboseName: UNISWAP_V3_NAME,
  ammShortName: UNISWAP_V3_NAME_ID,
  tickSpacing: TEN,
  token0: WBTC_ARBITRUM,
  token1: USDC_ARBITRUM,
  principleSymbol: WBTC,
  quoteSymbol: USD,
  isMemePair: false,
};

export const WBTC_USDC_SUSHISWAP_V3_500_POOL_ARBITRUM: AMM = {
  chainId: ARBITRUM_CHAIN_ID,
  inversePrice: false,
  address: WBTC_USDC_SUSHISWAP_V3_500_POOL_ARBITRUM_ADDRESS,
  feeBps: FIVE_HUNDRED,
  handler: "0xf6314300b42B7D88c153348921a95d3CA95E74Bd",
  ammVerboseName: SUSHISWAP_V3_NAME,
  ammShortName: SUSHISWAP_V3_NAME_ID,
  tickSpacing: TEN,
  token0: WBTC_ARBITRUM,
  token1: USDC_ARBITRUM,
  principleSymbol: WBTC,
  quoteSymbol: USD,
  isMemePair: false,
};

export const WBTC_USDC_PANCAKESWAP_V3_500_POOL_ARBITRUM: AMM = {
  chainId: ARBITRUM_CHAIN_ID,
  inversePrice: false,
  address: WBTC_USDC_PANCAKESWAP_V3_500_POOL_ARBITRUM_ADDRESS,
  feeBps: FIVE_HUNDRED,
  handler: "0x36dfa3488E2974f003481fc18388fd6a0741A4Be",
  ammVerboseName: PANCAKESWAP_V3_NAME,
  ammShortName: PANCAKESWAP_V3_NAME_ID,
  tickSpacing: TEN,
  token0: WBTC_ARBITRUM,
  token1: USDC_ARBITRUM,
  principleSymbol: WBTC,
  quoteSymbol: USD,
  isMemePair: false,
};

export const BOOP_WETH_UNISWAP_V3_10000_POOL_ARBITRUM: AMM = {
  chainId: ARBITRUM_CHAIN_ID,
  inversePrice: false,
  address: BOOP_WETH_UNISWAP_V3_10000_POOL_ARBITRUM_ADDRESS,
  feeBps: TEN_THOUSAND,
  handler: UNISWAP_V3_HANDLER_ARBITRUM_ADDRESS,
  ammVerboseName: UNISWAP_V3_NAME,
  ammShortName: UNISWAP_V3_NAME_ID,
  tickSpacing: TWO_HUNDRED,
  token0: BOOP_ARBITRUM,
  token1: WETH_ARBITRUM,
  principleSymbol: BOOP,
  quoteSymbol: ETH,
  isMemePair: true,
};

export const WETH_USDC_EQUALIZER_1337_POOL_SONIC: AMM = {
  chainId: SONIC_CHAIN_ID,
  inversePrice: true,
  address: WETH_USDC_EQUALIZER_1337_POOL_SONIC_ADDRESS,
  feeBps: 1337,
  handler: "0x461f057030Fbfd2C20f32DEA392D67b1174eec82",
  ammVerboseName: "Equalizer",
  ammShortName: "equalizer",
  tickSpacing: 8,
  token0: USDC_SONIC,
  token1: WETH_SONIC,
  principleSymbol: USD,
  quoteSymbol: ETH,
  isMemePair: false,
};

export const WSONIC_USDC_EQUALIZER_1337_POOL_SONIC: AMM = {
  chainId: SONIC_CHAIN_ID,
  inversePrice: false,
  address: WSONIC_USDC_EQUALIZER_619_POOL_SONIC_ADDRESS,
  feeBps: 619,
  handler: "0x461f057030Fbfd2C20f32DEA392D67b1174eec82",
  ammVerboseName: "Equalizer",
  ammShortName: "equalizer",
  tickSpacing: 8,
  token0: WSONIC_SONIC,
  token1: USDC_SONIC,
  principleSymbol: SONIC,
  quoteSymbol: USD,
  isMemePair: false,
};

export const WBTC_USDC_EQUALIZER_1460_POOL_SONIC: AMM = {
  chainId: SONIC_CHAIN_ID,
  inversePrice: false,
  address: WBTC_USDC_SHADOW_1460_POOL_SONIC_ADDRESS,
  feeBps: 1460,
  handler: "0x461f057030Fbfd2C20f32DEA392D67b1174eec82",
  ammVerboseName: "Shadow Exchange",
  ammShortName: "shadow",
  tickSpacing: 50,
  token0: WBTC_SONIC,
  token1: USDC_SONIC,
  principleSymbol: WBTC,
  quoteSymbol: USD,
  isMemePair: false,
};
