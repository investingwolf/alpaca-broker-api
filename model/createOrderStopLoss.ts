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

import { RequestFile } from './models';

export class CreateOrderStopLoss {
    'stop_price'?: string;
    'limit_price'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "stop_price",
            "baseName": "stop_price",
            "type": "string"
        },
        {
            "name": "limit_price",
            "baseName": "limit_price",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateOrderStopLoss.attributeTypeMap;
    }
}

