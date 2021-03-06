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
import { CreateOrderStopLoss } from './createOrderStopLoss';
import { CreateOrderTakeProfit } from './createOrderTakeProfit';
export declare class CreateOrder {
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
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace CreateOrder {
    enum SideEnum {
        Buy,
        Sell
    }
    enum TypeEnum {
        Market,
        Limit,
        Stop,
        StopLimit,
        TrailingStop
    }
    enum TimeInForceEnum {
        Day,
        Gtc,
        Opg,
        Cls,
        Ioc,
        Fok
    }
    enum OrderClassEnum {
        Simple,
        Bracket,
        Oco,
        Oto
    }
}
