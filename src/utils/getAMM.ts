import { amms, retiredAmms } from "../amms";

type GetAMMParams = {
  chainId: number;
  address: string;
};

export const getAMM = ({ address, chainId }: GetAMMParams) => {
  const ammsByChain = amms[chainId as keyof typeof amms];
  const ammData = ammsByChain?.find(
    (amm) => amm.address.toLowerCase() === address.toLowerCase()
  );

  return (
    ammData ||
    retiredAmms[chainId]?.find(
      (amm) => amm.address.toLowerCase() === address.toLowerCase()
    ) ||
    null
  );
};

export const getAMMs = ({ chainId }: Omit<GetAMMParams, "address">) => {
  const ammsByChain = amms[chainId as keyof typeof amms];

  if (!ammsByChain) return [];

  return ammsByChain;
};

export const getRetiredAMMs = ({ chainId }: Omit<GetAMMParams, "address">) =>
  retiredAmms[chainId] ?? [];
