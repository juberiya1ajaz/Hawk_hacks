/**
 * @typedef {import("./LedgerId.js").default} LedgerId
 * @typedef {import("./Provider.js").default} Provider
 * @typedef {import("./Key.js").default} Key
 * @typedef {import("./transaction/Transaction.js").default} Transaction
 * @typedef {import("./transaction/TransactionResponse.js").default} TransactionResponse
 * @typedef {import("./transaction/TransactionReceipt.js").default} TransactionReceipt
 * @typedef {import("./transaction/TransactionRecord.js").default} TransactionRecord
 * @typedef {import("./account/AccountBalance.js").default} AccountBalance
 * @typedef {import("./account/AccountInfo.js").default} AccountInfo
 */
/**
 * @template {any} O
 * @typedef {import("./query/Query.js").default<O>} Query<O>
 */
/**
 * @template RequestT
 * @template ResponseT
 * @template OutputT
 * @typedef {import("./Executable.js").default<RequestT, ResponseT, OutputT>} Executable<RequestT, ResponseT, OutputT>
 */
export default class LocalWallet extends Wallet {
    provider: LocalProvider;
    publicKey: import("./PublicKey.js").default;
    /**
     * @type {(messasge: Uint8Array) => Promise<Uint8Array>}
     */
    signer: (messasge: Uint8Array) => Promise<Uint8Array>;
    accountId: AccountId;
}
export type LedgerId = import("./LedgerId.js").default;
export type Provider = import("./Provider.js").default;
export type Key = import("./Key.js").default;
export type Transaction = import("./transaction/Transaction.js").default;
export type TransactionResponse = import("./transaction/TransactionResponse.js").default;
export type TransactionReceipt = import("./transaction/TransactionReceipt.js").default;
export type TransactionRecord = import("./transaction/TransactionRecord.js").default;
export type AccountBalance = import("./account/AccountBalance.js").default;
export type AccountInfo = import("./account/AccountInfo.js").default;
/**
 * <O>
 */
export type Query<O extends unknown> = import("./query/Query.js").default<O>;
/**
 * <RequestT, ResponseT, OutputT>
 */
export type Executable<RequestT, ResponseT, OutputT> = import("./Executable.js").default<RequestT, ResponseT, OutputT>;
import Wallet from "./Wallet.js";
import LocalProvider from "./LocalProvider.js";
import AccountId from "./account/AccountId.js";
