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
exports.JournalJNLS = void 0;
class JournalJNLS {
    static getAttributeTypeMap() {
        return JournalJNLS.attributeTypeMap;
    }
}
exports.JournalJNLS = JournalJNLS;
JournalJNLS.discriminator = undefined;
JournalJNLS.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "entry_type",
        "baseName": "entry_type",
        "type": "string"
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
        "name": "settle_date",
        "baseName": "settle_date",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "JournalJNLS.StatusEnum"
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
    }
];
(function (JournalJNLS) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Pending"] = 'pending'] = "Pending";
        StatusEnum[StatusEnum["Canceled"] = 'canceled'] = "Canceled";
        StatusEnum[StatusEnum["Executed"] = 'executed'] = "Executed";
    })(StatusEnum = JournalJNLS.StatusEnum || (JournalJNLS.StatusEnum = {}));
})(JournalJNLS = exports.JournalJNLS || (exports.JournalJNLS = {}));
