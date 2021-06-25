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

export class BatchJournalResponse {
    'id': string;
    'error_message': string;
    'entry_type': BatchJournalResponse.EntryTypeEnum;
    'from_account': string;
    'to_account': string;
    'symbol': string;
    'qty': string | null;
    'price': string;
    'status': BatchJournalResponse.StatusEnum;
    'settle_date': string | null;
    'system_date': string | null;
    'net_amount': string;
    'description': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
        }    ];

    static getAttributeTypeMap() {
        return BatchJournalResponse.attributeTypeMap;
    }
}

export namespace BatchJournalResponse {
    export enum EntryTypeEnum {
        Jnlc = <any> 'JNLC'
    }
    export enum StatusEnum {
        Pending = <any> 'pending',
        Canceled = <any> 'canceled',
        Executed = <any> 'executed',
        Queued = <any> 'queued',
        Rejected = <any> 'rejected',
        Deleted = <any> 'deleted'
    }
}