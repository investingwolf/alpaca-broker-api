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
exports.IdentifiedResource = void 0;
class IdentifiedResource {
    static getAttributeTypeMap() {
        return IdentifiedResource.attributeTypeMap;
    }
}
exports.IdentifiedResource = IdentifiedResource;
IdentifiedResource.discriminator = undefined;
IdentifiedResource.attributeTypeMap = [
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
    }
];
