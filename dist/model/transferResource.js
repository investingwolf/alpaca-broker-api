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
exports.TransferResource = void 0;
class TransferResource {
    static getAttributeTypeMap() {
        return TransferResource.attributeTypeMap;
    }
}
exports.TransferResource = TransferResource;
TransferResource.discriminator = "type";
TransferResource.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "created_at",
        "baseName": "created_at",
        "type": "Date"
    },
    {
        "name": "updated_at",
        "baseName": "updated_at",
        "type": "Date"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "TransferResource.TypeEnum"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "TransferResource.StatusEnum"
    },
    {
        "name": "account_id",
        "baseName": "account_id",
        "type": "string"
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "string"
    },
    {
        "name": "expires_at",
        "baseName": "expires_at",
        "type": "Date"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "string"
    },
    {
        "name": "direction",
        "baseName": "direction",
        "type": "TransferResource.DirectionEnum"
    },
    {
        "name": "relationship_id",
        "baseName": "relationship_id",
        "type": "string"
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
(function (TransferResource) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Ach"] = 'ach'] = "Ach";
        TypeEnum[TypeEnum["Wire"] = 'wire'] = "Wire";
    })(TypeEnum = TransferResource.TypeEnum || (TransferResource.TypeEnum = {}));
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Queued"] = 'QUEUED'] = "Queued";
        StatusEnum[StatusEnum["Pending"] = 'PENDING'] = "Pending";
        StatusEnum[StatusEnum["Rejected"] = 'REJECTED'] = "Rejected";
        StatusEnum[StatusEnum["Approved"] = 'APPROVED'] = "Approved";
        StatusEnum[StatusEnum["Complete"] = 'COMPLETE'] = "Complete";
    })(StatusEnum = TransferResource.StatusEnum || (TransferResource.StatusEnum = {}));
    let DirectionEnum;
    (function (DirectionEnum) {
        DirectionEnum[DirectionEnum["Incoming"] = 'INCOMING'] = "Incoming";
        DirectionEnum[DirectionEnum["Outgoing"] = 'OUTGOING'] = "Outgoing";
    })(DirectionEnum = TransferResource.DirectionEnum || (TransferResource.DirectionEnum = {}));
})(TransferResource = exports.TransferResource || (exports.TransferResource = {}));
