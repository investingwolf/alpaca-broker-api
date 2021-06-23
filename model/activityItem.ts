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
import { ActivityType } from './activityType';
import { NonTradeActivity } from './nonTradeActivity';
import { TradeActivity } from './tradeActivity';

export class ActivityItem {
    'id'?: string;
    'account_id'?: string;
    'activity_type'?: ActivityType;
    'transaction_time'?: string;
    'type'?: ActivityItem.TypeEnum;
    'price'?: string;
    'qty'?: string;
    'side'?: ActivityItem.SideEnum;
    'symbol'?: string;
    'leaves_qty'?: string;
    'order_id'?: string;
    'cum_qty'?: string;
    'order_status'?: ActivityItem.OrderStatusEnum;
    'date'?: string;
    'net_amount'?: string;
    'description'?: string;
    'status'?: ActivityItem.StatusEnum;
    'per_share_amount'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "account_id",
            "baseName": "account_id",
            "type": "string"
        },
        {
            "name": "activity_type",
            "baseName": "activity_type",
            "type": "ActivityType"
        },
        {
            "name": "transaction_time",
            "baseName": "transaction_time",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ActivityItem.TypeEnum"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "string"
        },
        {
            "name": "qty",
            "baseName": "qty",
            "type": "string"
        },
        {
            "name": "side",
            "baseName": "side",
            "type": "ActivityItem.SideEnum"
        },
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "string"
        },
        {
            "name": "leaves_qty",
            "baseName": "leaves_qty",
            "type": "string"
        },
        {
            "name": "order_id",
            "baseName": "order_id",
            "type": "string"
        },
        {
            "name": "cum_qty",
            "baseName": "cum_qty",
            "type": "string"
        },
        {
            "name": "order_status",
            "baseName": "order_status",
            "type": "ActivityItem.OrderStatusEnum"
        },
        {
            "name": "date",
            "baseName": "date",
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
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ActivityItem.StatusEnum"
        },
        {
            "name": "per_share_amount",
            "baseName": "per_share_amount",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ActivityItem.attributeTypeMap;
    }
}

export namespace ActivityItem {
    export enum TypeEnum {
        Fill = <any> 'fill',
        PartialFill = <any> 'partial_fill'
    }
    export enum SideEnum {
        Buy = <any> 'buy',
        Sell = <any> 'sell'
    }
    export enum OrderStatusEnum {
        New = <any> 'new',
        PartiallyFilled = <any> 'partially_filled',
        Filled = <any> 'filled',
        DoneForDay = <any> 'done_for_day',
        Canceled = <any> 'canceled',
        Expired = <any> 'expired',
        Replaced = <any> 'replaced',
        PendingCancel = <any> 'pending_cancel',
        PendingReplace = <any> 'pending_replace',
        Accepted = <any> 'accepted',
        PendingNew = <any> 'pending_new',
        AcceptedForBidding = <any> 'accepted_for_bidding',
        Stopped = <any> 'stopped',
        Rejected = <any> 'rejected',
        Suspended = <any> 'suspended',
        Calculated = <any> 'calculated'
    }
    export enum StatusEnum {
        Executed = <any> 'executed',
        Correct = <any> 'correct',
        Canceled = <any> 'canceled'
    }
}
