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
exports.Contact = void 0;
/**
* Contact is the model for the account owner contact information.
*/
class Contact {
    static getAttributeTypeMap() {
        return Contact.attributeTypeMap;
    }
}
exports.Contact = Contact;
Contact.discriminator = undefined;
Contact.attributeTypeMap = [
    {
        "name": "email_address",
        "baseName": "email_address",
        "type": "string"
    },
    {
        "name": "phone_number",
        "baseName": "phone_number",
        "type": "string"
    },
    {
        "name": "street_address",
        "baseName": "street_address",
        "type": "Array<string>"
    },
    {
        "name": "city",
        "baseName": "city",
        "type": "string"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "string"
    },
    {
        "name": "postal_code",
        "baseName": "postal_code",
        "type": "string"
    },
    {
        "name": "country",
        "baseName": "country",
        "type": "string"
    }
];
