import { HOOKS } from "../hooks";

export * from "./tick-to-price";
export * from "./getAMM";
export * from "./liquidity-amount-math";
export * from "./tick-math";
export * from "./getMarket";

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';


export function getHookData({
  address,
  chainId,
}: {
  address: string;
  chainId: number;
}) {
  return HOOKS.find(
    (hook) =>
      hook.address.toLowerCase() === address.toLowerCase()
  );
}
