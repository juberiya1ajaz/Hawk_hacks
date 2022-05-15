/**
 * @param {number | Long | IEntityId} props
 * @param {(number | null | Long)=} realmOrNull
 * @param {(number | null | Long)=} numOrNull
 * @returns {IEntityIdResult}
 */
export function constructor(props: number | Long | IEntityId, realmOrNull?: (number | null | Long) | undefined, numOrNull?: (number | null | Long) | undefined): IEntityIdResult;
/**
 * @param {[Long, Long, Long]} a
 * @param {[Long, Long, Long]} b
 * @returns {number}
 */
export function compare(a: [Long, Long, Long], b: [Long, Long, Long]): number;
/**
 * @typedef {object} ParseAddressResult
 * @property {number} status
 * @property {Long} [num1]
 * @property {Long} [num2]
 * @property {Long} [num3]
 * @property {string} [correctChecksum]
 * @property {string} [givenChecksum]
 * @property {string} [noChecksumFormat]
 * @property {string} [withChecksumFormat]
 */
/**
 * @param {string} text
 * @returns {IEntityIdParts}
 */
export function fromStringSplitter(text: string): IEntityIdParts;
/**
 * @param {string} text
 * @returns {IEntityIdResultWithChecksum}
 */
export function fromString(text: string): IEntityIdResultWithChecksum;
/**
 * @param {string} address
 * @returns {[Long, Long, Long]}
 */
export function fromSolidityAddress(address: string): [Long, Long, Long];
/**
 * @param {[Long,Long,Long] | [number,number,number]} address
 * @returns {string}
 */
export function toSolidityAddress(address: [Long, Long, Long] | [number, number, number]): string;
/**
 * Parse the address string addr and return an object with the results (8 fields).
 * The first four fields are numbers, which could be implemented as signed 32 bit
 * integers, and the last four are strings.
 *
 *   status;  //the status of the parsed address
 *            //   0 = syntax error
 *            //   1 = an invalid with-checksum address (bad checksum)
 *            //   2 = a valid no-checksum address
 *            //   3 = a valid with-checksum address
 *   num1;    //the 3 numbers in the address, such as 1.2.3, with leading zeros removed
 *   num2;
 *   num3;
 *   correctchecksum;    //the correct checksum
 *   givenChecksum;      //the checksum in the address that was parsed
 *   noChecksumFormat;   //the address in no-checksum format
 *   withChecksumFormat; //the address in with-checksum format
 *
 * @param {Uint8Array} ledgerId
 * @param {string} addr
 * @returns {ParseAddressResult}
 */
export function _parseAddress(ledgerId: Uint8Array, addr: string): ParseAddressResult;
/**
 * Given an address like "0.0.123", return a checksum like "laujm"
 *
 * @param {Uint8Array} ledgerId
 * @param {string} addr
 * @returns {string}
 */
export function _checksum(ledgerId: Uint8Array, addr: string): string;
/**
 * @param {Long} shard
 * @param {Long} realm
 * @param {Long} num
 * @param {string | null} checksum
 * @param {Client} client
 */
export function validateChecksum(shard: Long, realm: Long, num: Long, checksum: string | null, client: import("./client/Client.js").default<any, any>): void;
/**
 * @param {string} string
 * @param {Client} client
 * @returns {string}
 */
export function toStringWithChecksum(string: string, client: import("./client/Client.js").default<any, any>): string;
export type ParseAddressResult = {
    status: number;
    num1?: Long.Long | undefined;
    num2?: Long.Long | undefined;
    num3?: Long.Long | undefined;
    correctChecksum?: string | undefined;
    givenChecksum?: string | undefined;
    noChecksumFormat?: string | undefined;
    withChecksumFormat?: string | undefined;
};
export type Client = import("./client/Client.js").default<any, any>;
export type IEntityId = {
    num: number | Long;
    shard?: (number | Long) | undefined;
    realm?: (number | Long) | undefined;
};
export type IEntityIdResult = {
    shard: Long;
    realm: Long;
    num: Long;
};
export type IEntityIdParts = {
    shard: string | null;
    realm: string | null;
    numOrHex: string;
    checksum: string | null;
};
export type IEntityIdResultWithChecksum = {
    shard: Long;
    realm: Long;
    num: Long;
    checksum: string | null;
};
import Long from "long";
