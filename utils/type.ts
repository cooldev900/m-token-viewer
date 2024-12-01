import type { Address } from "viem";

export interface INetwork {
    chainId: string;
    name: string;
    mTokenAddress: Address;
    apiUrl: string;
}

export interface IHolder {
    id: string;
    balance: string;
}

export interface IBalanceHistory {
    timestamp: string;
    id: string;
    balance: string;
}