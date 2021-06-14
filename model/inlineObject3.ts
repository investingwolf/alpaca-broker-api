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

export class InlineObject3 {
    /**
    * OAuth client ID
    */
    'client_id'?: string;
    /**
    * OAuth client secret
    */
    'client_secret'?: string;
    /**
    * redirect URI for the OAuth flow
    */
    'redirect_uri'?: string;
    /**
    * scopes requested by the OAuth flow
    */
    'scope'?: string;
    /**
    * end-user account ID
    */
    'account_id'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
        }    ];

    static getAttributeTypeMap() {
        return InlineObject3.attributeTypeMap;
    }
}

