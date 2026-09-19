import {
  ARBITRUM_CHAIN_ID,
  RH_CHAIN_ID,
} from "../chains";
import {
  ADD_LIQUIDITY_ROUTER_ADDRESS,
  EXERCISE_OPTION_FIREWALL_ADDRESS,
  FEE_CLAIM_ADDRESS,
  FEE_STRATEGY_ADDRESS,
  MERKLE_FEE_DISTRIBUTOR_ADDRESS,
  MINT_OPTION_FIREWALL_ADDRESS,
  ON_SWAP_RECEIVER_ADDRESS,
  OPTION_PRICING_LINEAR_ADDRESS,
  POOL_SPOT_PRICE_ADDRESS,
  POSITION_MANAGER_ADDRESS,
} from "../periphery";
import { ChainDeployment } from "../types/types";

const ARBITRUM_HANDLER = "0x6F73aFB6598d7a3881577f884f2E01574aEFC373";

export const deployments: Partial<Record<number, ChainDeployment>> = {
  [ARBITRUM_CHAIN_ID]: {
    chainId: ARBITRUM_CHAIN_ID,
    name: "arbitrum",
    contracts: {
      positionManager: POSITION_MANAGER_ADDRESS,
      handler: ARBITRUM_HANDLER,
      optionPricing: OPTION_PRICING_LINEAR_ADDRESS,
      feeStrategy: FEE_STRATEGY_ADDRESS,
      poolSpotPrice: POOL_SPOT_PRICE_ADDRESS,
      mintOptionFirewall: MINT_OPTION_FIREWALL_ADDRESS,
      exerciseOptionFirewall: EXERCISE_OPTION_FIREWALL_ADDRESS,
      addLiquidityRouter: ADD_LIQUIDITY_ROUTER_ADDRESS,
      onSwapReceiver: ON_SWAP_RECEIVER_ADDRESS,
      feeClaim: FEE_CLAIM_ADDRESS,
      merkleFeeDistributor: MERKLE_FEE_DISTRIBUTOR_ADDRESS,
    },
    optionMarkets: [
      "0x2536974545c28F7C7d17038c7623E8132FbD82bb",
      "0xaBa531Ae39Fa20a0D6B16CD1f9b393862aDb602e",
    ],
  },
  [RH_CHAIN_ID]: {
    chainId: RH_CHAIN_ID,
    name: "robinhood",
    factory: "0x1f7d7550B1b028f7571E69A784071F0205FD2EfA",
    poolInitCodeHash: "0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54",
    contracts: {
      positionManager: "0xc013926a2ecc498a1a986082acac26cf966c7e59",
      handler: "0x67599652ec14f635837929b4c08b1adc10f83300",
      optionPricing: "0xDC5Bb5cd4e8131B558a653406e44a0842583B7EE",
      feeStrategy: "0x56b8221882e4707f998f3e9717fbdfde628ed1b2",
      poolSpotPrice: "0x99e3d2d5ce27780bcf2966c42ff7e811b64a3af8",
      mintOptionFirewall: "0xf3d2504b9ffea0ec6a55a317ef635c9e6b474659",
      exerciseOptionFirewall: "0x677d9d274a9f863c9692faef9846a9c20adbc795",
      openSettlement: "0xa53b8aabdadf2b3a329355c473be46faddd75f88",
      addLiquidityRouter: "0x3333276a73a826ac18374496d06ee564706421e5",
      multiSwapRouter: "0xec6fbc7935307529bd101ca0e08237184a970c8a",
      onSwapReceiver: "0x26dAe4850D151f215aBf8f7B901f1BCbD6fF02F5",
      swapRouterSwapper: "0x182130d289658426ee6101a1597f392c9c8efd6d",
      swapRouter: "0xcaf681a66d020601342297493863e78c959e5cb2",
      merkleFeeDistributor: "0x2D1D09E62De6C8BFFb31F0836406d545740507c2",
    },
    optionMarkets: ["0x6c3dfe2082de2d32812baabca6925eed35881853"],
  },
};

export function getDeployment(chainId: number): ChainDeployment | null {
  return deployments[chainId] ?? null;
}
