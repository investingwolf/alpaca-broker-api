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
exports.BatchJournalResponse = void 0;
class BatchJournalResponse {
    static getAttributeTypeMap() {
        return BatchJournalResponse.attributeTypeMap;
    }
}
exports.BatchJournalResponse = BatchJournalResponse;
BatchJournalResponse.discriminator = undefined;
BatchJournalResponse.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "error_message",
        "baseName": "error_message",
        "type": "string"
    },
    {
        "name": "entry_type",
        "baseName": "entry_type",
        "type": "BatchJournalResponse.EntryTypeEnum"
    },
    {
        "name": "from_account",
        "baseName": "from_account",
        "type": "string"
    },
    {
        "name": "to_account",
        "baseName": "to_account",
        "type": "string"
    },
    {
        "name": "symbol",
        "baseName": "symbol",
        "type": "string"
    },
    {
        "name": "qty",
        "baseName": "qty",
        "type": "string"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "BatchJournalResponse.StatusEnum"
    },
    {
        "name": "settle_date",
        "baseName": "settle_date",
        "type": "string"
    },
    {
        "name": "system_date",
        "baseName": "system_date",
        "type": "string"
    },
    {
        "name": "net_amount",
        "baseName": "net_amount",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    }
];
(function (BatchJournalResponse) {
    let EntryTypeEnum;
    (function (EntryTypeEnum) {
        EntryTypeEnum[EntryTypeEnum["Jnlc"] = 'JNLC'] = "Jnlc";
    })(EntryTypeEnum = BatchJournalResponse.EntryTypeEnum || (BatchJournalResponse.EntryTypeEnum = {}));
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Pending"] = 'pending'] = "Pending";
        StatusEnum[StatusEnum["Canceled"] = 'canceled'] = "Canceled";
        StatusEnum[StatusEnum["Executed"] = 'executed'] = "Executed";
        StatusEnum[StatusEnum["Queued"] = 'queued'] = "Queued";
        StatusEnum[StatusEnum["Rejected"] = 'rejected'] = "Rejected";
        StatusEnum[StatusEnum["Deleted"] = 'deleted'] = "Deleted";
    })(StatusEnum = BatchJournalResponse.StatusEnum || (BatchJournalResponse.StatusEnum = {}));
})(BatchJournalResponse = exports.BatchJournalResponse || (exports.BatchJournalResponse = {}));