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
exports.CreateOrder = void 0;
class CreateOrder {
    static getAttributeTypeMap() {
        return CreateOrder.attributeTypeMap;
    }
}
exports.CreateOrder = CreateOrder;
CreateOrder.discriminator = undefined;
CreateOrder.attributeTypeMap = [
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
    }
];
(function (CreateOrder) {
    let SideEnum;
    (function (SideEnum) {
        SideEnum[SideEnum["Buy"] = 'buy'] = "Buy";
        SideEnum[SideEnum["Sell"] = 'sell'] = "Sell";
    })(SideEnum = CreateOrder.SideEnum || (CreateOrder.SideEnum = {}));
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Market"] = 'market'] = "Market";
        TypeEnum[TypeEnum["Limit"] = 'limit'] = "Limit";
        TypeEnum[TypeEnum["Stop"] = 'stop'] = "Stop";
        TypeEnum[TypeEnum["StopLimit"] = 'stop_limit'] = "StopLimit";
        TypeEnum[TypeEnum["TrailingStop"] = 'trailing_stop'] = "TrailingStop";
    })(TypeEnum = CreateOrder.TypeEnum || (CreateOrder.TypeEnum = {}));
    let TimeInForceEnum;
    (function (TimeInForceEnum) {
        TimeInForceEnum[TimeInForceEnum["Day"] = 'day'] = "Day";
        TimeInForceEnum[TimeInForceEnum["Gtc"] = 'gtc'] = "Gtc";
        TimeInForceEnum[TimeInForceEnum["Opg"] = 'opg'] = "Opg";
        TimeInForceEnum[TimeInForceEnum["Cls"] = 'cls'] = "Cls";
        TimeInForceEnum[TimeInForceEnum["Ioc"] = 'ioc'] = "Ioc";
        TimeInForceEnum[TimeInForceEnum["Fok"] = 'fok'] = "Fok";
    })(TimeInForceEnum = CreateOrder.TimeInForceEnum || (CreateOrder.TimeInForceEnum = {}));
    let OrderClassEnum;
    (function (OrderClassEnum) {
        OrderClassEnum[OrderClassEnum["Simple"] = 'simple'] = "Simple";
        OrderClassEnum[OrderClassEnum["Bracket"] = 'bracket'] = "Bracket";
        OrderClassEnum[OrderClassEnum["Oco"] = 'oco'] = "Oco";
        OrderClassEnum[OrderClassEnum["Oto"] = 'oto'] = "Oto";
    })(OrderClassEnum = CreateOrder.OrderClassEnum || (CreateOrder.OrderClassEnum = {}));
})(CreateOrder = exports.CreateOrder || (exports.CreateOrder = {}));
