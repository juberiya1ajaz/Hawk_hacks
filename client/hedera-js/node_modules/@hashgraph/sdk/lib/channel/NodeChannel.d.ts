/**
 * @property {?HashgraphProto.proto.CryptoService} _crypto
 * @property {?HashgraphProto.proto.SmartContractService} _smartContract
 * @property {?HashgraphProto.proto.FileService} _file
 * @property {?HashgraphProto.proto.FreezeService} _freeze
 * @property {?HashgraphProto.proto.ConsensusService} _consensus
 * @property {?HashgraphProto.proto.NetworkService} _network
 */
export default class NodeChannel extends Channel {
    /**
     * @internal
     * @param {string} address
     * @param {string=} cert
     */
    constructor(address: string, cert?: string | undefined);
    cert: string | undefined;
    /**
     * @type {Client}
     * @private
     */
    private _client;
}
import Channel from "./Channel.js";
