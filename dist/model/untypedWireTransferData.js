"use strict";
/**
 * Alpaca Broker API
 * Open brokerage accounts, enable commission-free trading, and manage the ongoing user experience with Alpaca Broker API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UntypedWireTransferData = void 0;
class UntypedWireTransferData {
    static getAttributeTypeMap() {
        return UntypedWireTransferData.attributeTypeMap;
    }
}
exports.UntypedWireTransferData = UntypedWireTransferData;
UntypedWireTransferData.discriminator = undefined;
UntypedWireTransferData.attributeTypeMap = [
    {
        "name": "amount",
        "baseName": "amount",
        "type": "string"
    },
    {
        "name": "direction",
        "baseName": "direction",
        "type": "UntypedWireTransferData.DirectionEnum"
    },
    {
        "name": "additional_information",
        "baseName": "additional_information",
        "type": "string"
    },
    {
        "name": "bank_id",
        "baseName": "bank_id",
        "type": "string"
    }
];
(function (UntypedWireTransferData) {
    let DirectionEnum;
    (function (DirectionEnum) {
        DirectionEnum[DirectionEnum["Incoming"] = 'INCOMING'] = "Incoming";
        DirectionEnum[DirectionEnum["Outgoing"] = 'OUTGOING'] = "Outgoing";
    })(DirectionEnum = UntypedWireTransferData.DirectionEnum || (UntypedWireTransferData.DirectionEnum = {}));
})(UntypedWireTransferData = exports.UntypedWireTransferData || (exports.UntypedWireTransferData = {}));
