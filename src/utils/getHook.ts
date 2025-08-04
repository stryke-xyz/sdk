import { HOOKS } from "../hooks";

export function getHook({ address }: { address: string }) {
  return HOOKS.find(
    (hook) => hook.address.toLowerCase() === address.toLowerCase()
  );
}
