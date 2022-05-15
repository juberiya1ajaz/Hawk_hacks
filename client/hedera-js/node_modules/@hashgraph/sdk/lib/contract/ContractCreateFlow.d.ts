/**
 * @typedef {import("../account/AccountId.js").default} AccountId
 * @typedef {import("../file/FileId.js").default} FileId
 * @typedef {import("../Key.js").default} Key
 * @typedef {import("./ContractFunctionParameters.js").default} ContractFunctionParameters
 * @typedef {import("../Hbar.js").default} Hbar
 * @typedef {import("../Duration.js").default} Duration
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../transaction/TransactionId.js").default} TransactionId
 * @typedef {import("../transaction/TransactionResponse.js").default} TransactionResponse
 * @typedef {import("../client/Client.js").ClientOperator} ClientOperator
 */
/**
 * @typedef {import("bignumber.js").BigNumber} BigNumber
 * @typedef {import("long").Long} Long
 */
export default class ContractCreateFlow {
    /** @type {Uint8Array | null} */
    _bytecode: Uint8Array | null;
    _contractCreate: ContractCreateTransaction;
    /**
     * @returns {?Uint8Array}
     */
    get bytecode(): Uint8Array | null;
    /**
     * @param {string | Uint8Array} bytecode
     * @returns {this}
     */
    setBytecode(bytecode: string | Uint8Array): this;
    /**
     * @returns {?Key}
     */
    get adminKey(): import("../Key.js").default | null;
    /**
     * @param {Key} adminKey
     * @returns {this}
     */
    setAdminKey(adminKey: Key): this;
    /**
     * @returns {?Long}
     */
    get gas(): import("long").Long | null;
    /**
     * @param {number | Long} gas
     * @returns {this}
     */
    setGas(gas: number | Long): this;
    /**
     * @returns {?Hbar}
     */
    get initialBalance(): import("../Hbar.js").default | null;
    /**
     * Set the initial amount to transfer into this contract.
     *
     * @param {number | string | Long | BigNumber | Hbar} initialBalance
     * @returns {this}
     */
    setInitialBalance(initialBalance: number | string | Long | BigNumber | Hbar): this;
    /**
     * @returns {?AccountId}
     */
    get proxyAccountId(): import("../account/AccountId.js").default | null;
    /**
     * @param {AccountId | string} proxyAccountId
     * @returns {this}
     */
    setProxyAccountId(proxyAccountId: AccountId | string): this;
    /**
     * @returns {Duration}
     */
    get autoRenewPeriod(): import("../Duration.js").default;
    /**
     * @param {Duration | Long | number} autoRenewPeriod
     * @returns {this}
     */
    setAutoRenewPeriod(autoRenewPeriod: Duration | Long | number): this;
    /**
     * @returns {?Uint8Array}
     */
    get constructorParameters(): Uint8Array | null;
    /**
     * @param {Uint8Array | ContractFunctionParameters} constructorParameters
     * @returns {this}
     */
    setConstructorParameters(constructorParameters: Uint8Array | ContractFunctionParameters): this;
    /**
     * @returns {?string}
     */
    get contractMemo(): string | null;
    /**
     * @param {string} contractMemo
     * @returns {this}
     */
    setContractMemo(contractMemo: string): this;
    /**
     * @template {Channel} ChannelT
     * @template MirrorChannelT
     * @param {import("../client/Client.js").default<ChannelT, MirrorChannelT>} client
     * @param {number=} requestTimeout
     * @returns {Promise<TransactionResponse>}
     */
    execute<ChannelT extends import("../channel/Channel.js").default, MirrorChannelT>(client: import("../client/Client.js").default<ChannelT, MirrorChannelT>, requestTimeout?: number | undefined): Promise<TransactionResponse>;
}
export type AccountId = import("../account/AccountId.js").default;
export type FileId = import("../file/FileId.js").default;
export type Key = import("../Key.js").default;
export type ContractFunctionParameters = import("./ContractFunctionParameters.js").default;
export type Hbar = import("../Hbar.js").default;
export type Duration = import("../Duration.js").default;
export type Channel = import("../channel/Channel.js").default;
export type TransactionId = import("../transaction/TransactionId.js").default;
export type TransactionResponse = import("../transaction/TransactionResponse.js").default;
export type ClientOperator = import("../client/Client.js").ClientOperator;
export type BigNumber = import("bignumber.js").BigNumber;
export type Long = import("long").Long;
import ContractCreateTransaction from "./ContractCreateTransaction.js";
