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
import { CreateOrderStopLoss } from './createOrderStopLoss';
import { CreateOrderTakeProfit } from './createOrderTakeProfit';

export class CreateOrder {
    'symbol': string;
    'qty'?: string;
    'notional'?: string;
    'side': CreateOrder.SideEnum;
    'type': CreateOrder.TypeEnum;
    'time_in_force': CreateOrder.TimeInForceEnum;
    'limit_price'?: string;
    'stop_price'?: string;
    'trail_price'?: string;
    'trail_percent'?: string;
    'extended_hours'?: boolean;
    'client_order_id'?: string;
    'order_class'?: CreateOrder.OrderClassEnum;
    'take_profit'?: CreateOrderTakeProfit;
    'stop_loss'?: CreateOrderStopLoss;
    'commission'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "notional",
            "baseName": "notional",
            "type": "string"
        },
        {
            "name": "side",
            "baseName": "side",
            "type": "CreateOrder.SideEnum"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CreateOrder.TypeEnum"
        },
        {
            "name": "time_in_force",
            "baseName": "time_in_force",
            "type": "CreateOrder.TimeInForceEnum"
        },
        {
            "name": "limit_price",
            "baseName": "limit_price",
            "type": "string"
        },
        {
            "name": "stop_price",
            "baseName": "stop_price",
            "type": "string"
        },
        {
            "name": "trail_price",
            "baseName": "trail_price",
            "type": "string"
        },
        {
            "name": "trail_percent",
            "baseName": "trail_percent",
            "type": "string"
        },
        {
            "name": "extended_hours",
            "baseName": "extended_hours",
            "type": "boolean"
        },
        {
            "name": "client_order_id",
            "baseName": "client_order_id",
            "type": "string"
        },
        {
            "name": "order_class",
            "baseName": "order_class",
            "type": "CreateOrder.OrderClassEnum"
        },
        {
            "name": "take_profit",
            "baseName": "take_profit",
            "type": "CreateOrderTakeProfit"
        },
        {
            "name": "stop_loss",
            "baseName": "stop_loss",
            "type": "CreateOrderStopLoss"
        },
        {
            "name": "commission",
            "baseName": "commission",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateOrder.attributeTypeMap;
    }
}

export namespace CreateOrder {
    export enum SideEnum {
        Buy = <any> 'buy',
        Sell = <any> 'sell'
    }
    export enum TypeEnum {
        Market = <any> 'market',
        Limit = <any> 'limit',
        Stop = <any> 'stop',
        StopLimit = <any> 'stop_limit',
        TrailingStop = <any> 'trailing_stop'
    }
    export enum TimeInForceEnum {
        Day = <any> 'day',
        Gtc = <any> 'gtc',
        Opg = <any> 'opg',
        Cls = <any> 'cls',
        Ioc = <any> 'ioc',
        Fok = <any> 'fok'
    }
    export enum OrderClassEnum {
        Simple = <any> 'simple',
        Bracket = <any> 'bracket',
        Oco = <any> 'oco',
        Oto = <any> 'oto'
    }
}
