import { getHooks, HOOKS } from "../hooks";

export function getHook({ address, chainId }: { address: string; chainId?: number }) {
  const hooks = chainId === undefined ? HOOKS : getHooks(chainId);

  return hooks.find(
    (hook) => hook.address.toLowerCase() === address.toLowerCase()
  );
}
