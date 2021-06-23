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
exports.InlineObject = void 0;
class InlineObject {
    static getAttributeTypeMap() {
        return InlineObject.attributeTypeMap;
    }
}
exports.InlineObject = InlineObject;
InlineObject.discriminator = undefined;
InlineObject.attributeTypeMap = [
    {
        "name": "client_id",
        "baseName": "client_id",
        "type": "string"
    },
    {
        "name": "client_secret",
        "baseName": "client_secret",
        "type": "string"
    },
    {
        "name": "redirect_uri",
        "baseName": "redirect_uri",
        "type": "string"
    },
    {
        "name": "scope",
        "baseName": "scope",
        "type": "string"
    },
    {
        "name": "account_id",
        "baseName": "account_id",
        "type": "string"
    }
];
