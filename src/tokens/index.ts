import { Token } from "../types/types";

const ARB_ARBITRUM: Token = {
  address: "0x912ce59144191c1204e64559fe8253a0e49e6548",
  symbol: "ARB",
  decimals: 18,
  chainId: 42161,
};

const WETH_ARBITRUM: Token = {
  address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
  symbol: "WETH",
  decimals: 18,
  chainId: 42161,
};

const WBTC_ARBITRUM: Token = {
  address: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
  symbol: "WBTC",
  decimals: 8,
  chainId: 42161,
};

const USDC_ARBITRUM: Token = {
  address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
  symbol: "USDC",
  decimals: 6,
  chainId: 42161,
};

const BOOP_ARBITRUM: Token = {
  address: "0x13A7DeDb7169a17bE92B0E3C7C2315B46f4772B3",
  symbol: "BOOP",
  decimals: 18,
  chainId: 42161,
};

const WETH_SONIC: Token = {
  address: "0x50c42dEAcD8Fc9773493ED674b675bE577f2634b",
  symbol: "WETH",
  decimals: 18,
  chainId: 146,
};

const USDC_SONIC: Token = {
  address: "0x29219dd400f2Bf60E5a23d13Be72B486D4038894",
  symbol: "USDC",
  decimals: 6,
  chainId: 146,
};

const WSONIC_SONIC: Token = {
  address: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38",
  symbol: "wS",
  decimals: 18,
  chainId: 146,
};

const WBTC_SONIC: Token = {
  address: "0x0555E30da8f98308EdB960aa94C0Db47230d2B9c",
  symbol: "WBTC",
  decimals: 8,
  chainId: 146,
};

const HONEY_BERACHAIN: Token = {
  address: "0xFCBD14DC51f0A4d49d5E53C2E0950e0bC26d0Dce",
  symbol: "HONEY",
  decimals: 18,
  chainId: 80094,
};

const WETH_BERACHAIN: Token = {
  address: "0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590",
  symbol: "WETH",
  decimals: 18,
  chainId: 80094,
};

const WBTC_BERACHAIN: Token = {
  address: "0x0555E30da8f98308EdB960aa94C0Db47230d2B9c",
  symbol: "WBTC",
  decimals: 8,
  chainId: 80094,
};

const WBERA_BERACHAIN: Token = {
  address: "0x6969696969696969696969696969696969696969",
  symbol: "WBERA",
  decimals: 18,
  chainId: 80094,
};

const WETH_BASE: Token = {
  address: "0x4200000000000000000000000000000000000006",
  symbol: "WETH",
  decimals: 18,
  chainId: 8453,
};
const USDC_BASE: Token = {
  address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
  symbol: "USDC",
  decimals: 6,
  chainId: 8453,
};

const CBBTC_BASE: Token = {
  address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
  symbol: "cbBTC",
  decimals: 8,
  chainId: 8453,
};

const WINJ_INJECTIVE_TESTNET: Token = {
  address: "0xf3Bb95A1974aB49aa0399420e1030fC9f566c8Ba",
  symbol: "WINJ",
  decimals: 18,
  chainId: 1439,
};

const USDC_INJECTIVE_TESTNET: Token = {
  address: "0x33a6d08bb2b58d88acDd398A0A815715d66Ee869",
  symbol: "WINJ",
  decimals: 18,
  chainId: 1439,
};

export const tokens = {
  4663: {
    PONS: {
      address: "0x39dBED3a2bd333467115dE45665cC57F813C4571",
      symbol: "PONS",
      decimals: 18,
      chainId: 4663,
    },
    USDG: {
      address: "0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168",
      symbol: "USDG",
      decimals: 6,
      chainId: 4663,
    },
    STONKBROKER: {
      address: "0xe934e36a439c94017b64a3fece66af12099abf50",
      symbol: "STONKBROKER",
      decimals: 18,
      chainId: 4663,
    },
    QUOTRON: {
      address: "0x5a86828Efd322bfb16d93cFeD16EE9BC14940D7F",
      symbol: "QUOTRON",
      decimals: 18,
      chainId: 4663,
    },
    AI: {
      address: "0x2E8c31162b855A2ffa90F6F8634643Ad6F111e18",
      symbol: "AI",
      decimals: 18,
      chainId: 4663,
    },
    NUDES: {
      address: "0xbe98b75361935b18d688409424a869a4C3dC7401",
      symbol: "NUDES",
      decimals: 18,
      chainId: 4663,
    },
    BONER: {
      address: "0x98096d17e191B3dA1d5f99a6D7b3584351b11E18",
      symbol: "BONER",
      decimals: 18,
      chainId: 4663,
    },
  },
  42161: {
    WETH: WETH_ARBITRUM,
    USDC: USDC_ARBITRUM,
    ARB: ARB_ARBITRUM,
    WBTC: WBTC_ARBITRUM,
    BOOP: BOOP_ARBITRUM,
  },
  146: {
    WETH: WETH_SONIC,
    USDC: USDC_SONIC,
    WSONIC: WSONIC_SONIC,
    WBTC: WBTC_SONIC,
  },
  80094: {
    HONEY: HONEY_BERACHAIN,
    WETH: WETH_BERACHAIN,
    WBTC: WBTC_BERACHAIN,
    WBERA: WBERA_BERACHAIN,
  },
  8453: {
    WETH: WETH_BASE,
    USDC: USDC_BASE,
    CBBTC: CBBTC_BASE,
  },
  1439: {
    WINJ: WINJ_INJECTIVE_TESTNET,
    USDC: USDC_INJECTIVE_TESTNET,
  },
} as const;

type GetTokenParams = {
  chainId: number;
  symbol?: string;
  address?: string;
};

export function getToken({
  chainId,
  symbol,
  address,
}: GetTokenParams): Token | null {
  const _tokensMapping = tokens[chainId as keyof typeof tokens] as Record<
    string,
    Token
  >;
  if (symbol) return _tokensMapping[symbol];
  return (
    Object.values(_tokensMapping || {}).find(
      (token) => token.address === address,
    ) || null
  );
}
