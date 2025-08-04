import { handlers } from "../handlers";

export function getHandlers({ chainId }: { chainId: number }) {
  const handlersByChain = handlers[chainId as keyof typeof handlers];
  if (!handlersByChain) return [];
  return handlersByChain;
}
