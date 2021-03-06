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
exports.Agreement = void 0;
class Agreement {
    static getAttributeTypeMap() {
        return Agreement.attributeTypeMap;
    }
}
exports.Agreement = Agreement;
Agreement.discriminator = undefined;
Agreement.attributeTypeMap = [
    {
        "name": "agreement",
        "baseName": "agreement",
        "type": "Agreement.AgreementEnum"
    },
    {
        "name": "signed_at",
        "baseName": "signed_at",
        "type": "string"
    },
    {
        "name": "ip_address",
        "baseName": "ip_address",
        "type": "string"
    }
];
(function (Agreement) {
    let AgreementEnum;
    (function (AgreementEnum) {
        AgreementEnum[AgreementEnum["MarginAgreement"] = 'margin_agreement'] = "MarginAgreement";
        AgreementEnum[AgreementEnum["AccountAgreement"] = 'account_agreement'] = "AccountAgreement";
        AgreementEnum[AgreementEnum["CustomerAgreement"] = 'customer_agreement'] = "CustomerAgreement";
    })(AgreementEnum = Agreement.AgreementEnum || (Agreement.AgreementEnum = {}));
})(Agreement = exports.Agreement || (exports.Agreement = {}));
