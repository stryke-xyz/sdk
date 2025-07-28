import { amms } from "../amms";

type GetAMMParams = {
  chainId: number;
  address: string;
};
export const getAMM = ({ address, chainId }: GetAMMParams) => {
  const ammData = amms.find(
    (amm) =>
      amm.chainId === chainId &&
      amm.address.toLowerCase() === address.toLowerCase()
  );

  return ammData;
};
