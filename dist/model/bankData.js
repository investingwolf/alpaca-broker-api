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
exports.BankData = void 0;
class BankData {
    static getAttributeTypeMap() {
        return BankData.attributeTypeMap;
    }
}
exports.BankData = BankData;
BankData.discriminator = undefined;
BankData.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "bank_code",
        "baseName": "bank_code",
        "type": "string"
    },
    {
        "name": "bank_code_type",
        "baseName": "bank_code_type",
        "type": "BankData.BankCodeTypeEnum"
    },
    {
        "name": "country",
        "baseName": "country",
        "type": "string"
    },
    {
        "name": "state_province",
        "baseName": "state_province",
        "type": "string"
    },
    {
        "name": "postal_code",
        "baseName": "postal_code",
        "type": "string"
    },
    {
        "name": "city",
        "baseName": "city",
        "type": "string"
    },
    {
        "name": "street_address",
        "baseName": "street_address",
        "type": "string"
    },
    {
        "name": "account_number",
        "baseName": "account_number",
        "type": "string"
    }
];
(function (BankData) {
    let BankCodeTypeEnum;
    (function (BankCodeTypeEnum) {
        BankCodeTypeEnum[BankCodeTypeEnum["Aba"] = 'ABA'] = "Aba";
        BankCodeTypeEnum[BankCodeTypeEnum["Bic"] = 'BIC'] = "Bic";
    })(BankCodeTypeEnum = BankData.BankCodeTypeEnum || (BankData.BankCodeTypeEnum = {}));
})(BankData = exports.BankData || (exports.BankData = {}));
