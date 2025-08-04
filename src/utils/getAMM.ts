import { amms } from "../amms";

type GetAMMParams = {
  chainId: number;
  address: string;
};

export const getAMM = ({ address, chainId }: GetAMMParams) => {
  const ammsByChain = amms[chainId as keyof typeof amms];

  if (!ammsByChain) return null;

  const ammData = ammsByChain.find(
    (amm) => amm.address.toLowerCase() === address.toLowerCase()
  );

  return ammData || null;
};

export const getAMMs = ({ chainId }: Omit<GetAMMParams, "address">) => {
  const ammsByChain = amms[chainId as keyof typeof amms];

  if (!ammsByChain) return [];

  return ammsByChain;
};
