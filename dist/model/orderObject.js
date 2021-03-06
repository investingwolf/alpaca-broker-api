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
exports.OrderObject = void 0;
class OrderObject {
    static getAttributeTypeMap() {
        return OrderObject.attributeTypeMap;
    }
}
exports.OrderObject = OrderObject;
OrderObject.discriminator = undefined;
OrderObject.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "client_order_id",
        "baseName": "client_order_id",
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
    },
    {
        "name": "submitted_at",
        "baseName": "submitted_at",
        "type": "Date"
    },
    {
        "name": "filled_at",
        "baseName": "filled_at",
        "type": "Date"
    },
    {
        "name": "expired_at",
        "baseName": "expired_at",
        "type": "Date"
    },
    {
        "name": "canceled_at",
        "baseName": "canceled_at",
        "type": "Date"
    },
    {
        "name": "failed_at",
        "baseName": "failed_at",
        "type": "Date"
    },
    {
        "name": "replaced_at",
        "baseName": "replaced_at",
        "type": "Date"
    },
    {
        "name": "replaced_by",
        "baseName": "replaced_by",
        "type": "string"
    },
    {
        "name": "replaces",
        "baseName": "replaces",
        "type": "string"
    },
    {
        "name": "asset_id",
        "baseName": "asset_id",
        "type": "string"
    },
    {
        "name": "symbol",
        "baseName": "symbol",
        "type": "string"
    },
    {
        "name": "asset_class",
        "baseName": "asset_class",
        "type": "string"
    },
    {
        "name": "notional",
        "baseName": "notional",
        "type": "string"
    },
    {
        "name": "qty",
        "baseName": "qty",
        "type": "string"
    },
    {
        "name": "filled_qty",
        "baseName": "filled_qty",
        "type": "string"
    },
    {
        "name": "filled_avg_price",
        "baseName": "filled_avg_price",
        "type": "string"
    },
    {
        "name": "order_class",
        "baseName": "order_class",
        "type": "OrderObject.OrderClassEnum"
    },
    {
        "name": "order_type",
        "baseName": "order_type",
        "type": "OrderObject.OrderTypeEnum"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "OrderObject.TypeEnum"
    },
    {
        "name": "side",
        "baseName": "side",
        "type": "OrderObject.SideEnum"
    },
    {
        "name": "time_in_force",
        "baseName": "time_in_force",
        "type": "OrderObject.TimeInForceEnum"
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
        "name": "status",
        "baseName": "status",
        "type": "OrderObject.StatusEnum"
    },
    {
        "name": "extended_hours",
        "baseName": "extended_hours",
        "type": "boolean"
    },
    {
        "name": "legs",
        "baseName": "legs",
        "type": "Array<OrderObject>"
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
        "name": "hwm",
        "baseName": "hwm",
        "type": "string"
    },
    {
        "name": "commission",
        "baseName": "commission",
        "type": "string"
    }
];
(function (OrderObject) {
    let OrderClassEnum;
    (function (OrderClassEnum) {
        OrderClassEnum[OrderClassEnum["Simple"] = 'simple'] = "Simple";
        OrderClassEnum[OrderClassEnum["Bracket"] = 'bracket'] = "Bracket";
        OrderClassEnum[OrderClassEnum["Oco"] = 'oco'] = "Oco";
        OrderClassEnum[OrderClassEnum["Oto"] = 'oto'] = "Oto";
    })(OrderClassEnum = OrderObject.OrderClassEnum || (OrderObject.OrderClassEnum = {}));
    let OrderTypeEnum;
    (function (OrderTypeEnum) {
        OrderTypeEnum[OrderTypeEnum["Market"] = 'market'] = "Market";
        OrderTypeEnum[OrderTypeEnum["Limit"] = 'limit'] = "Limit";
        OrderTypeEnum[OrderTypeEnum["Stop"] = 'stop'] = "Stop";
        OrderTypeEnum[OrderTypeEnum["StopLimit"] = 'stop_limit'] = "StopLimit";
        OrderTypeEnum[OrderTypeEnum["TrailingStop"] = 'trailing_stop'] = "TrailingStop";
    })(OrderTypeEnum = OrderObject.OrderTypeEnum || (OrderObject.OrderTypeEnum = {}));
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Market"] = 'market'] = "Market";
        TypeEnum[TypeEnum["Limit"] = 'limit'] = "Limit";
        TypeEnum[TypeEnum["Stop"] = 'stop'] = "Stop";
        TypeEnum[TypeEnum["StopLimit"] = 'stop_limit'] = "StopLimit";
        TypeEnum[TypeEnum["TrailingStop"] = 'trailing_stop'] = "TrailingStop";
    })(TypeEnum = OrderObject.TypeEnum || (OrderObject.TypeEnum = {}));
    let SideEnum;
    (function (SideEnum) {
        SideEnum[SideEnum["Buy"] = 'buy'] = "Buy";
        SideEnum[SideEnum["Sell"] = 'sell'] = "Sell";
    })(SideEnum = OrderObject.SideEnum || (OrderObject.SideEnum = {}));
    let TimeInForceEnum;
    (function (TimeInForceEnum) {
        TimeInForceEnum[TimeInForceEnum["Day"] = 'day'] = "Day";
        TimeInForceEnum[TimeInForceEnum["Gtc"] = 'gtc'] = "Gtc";
        TimeInForceEnum[TimeInForceEnum["Opg"] = 'opg'] = "Opg";
        TimeInForceEnum[TimeInForceEnum["Cls"] = 'cls'] = "Cls";
        TimeInForceEnum[TimeInForceEnum["Ioc"] = 'ioc'] = "Ioc";
        TimeInForceEnum[TimeInForceEnum["Fok"] = 'fok'] = "Fok";
    })(TimeInForceEnum = OrderObject.TimeInForceEnum || (OrderObject.TimeInForceEnum = {}));
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["New"] = 'new'] = "New";
        StatusEnum[StatusEnum["PartiallyFilled"] = 'partially_filled'] = "PartiallyFilled";
        StatusEnum[StatusEnum["Filled"] = 'filled'] = "Filled";
        StatusEnum[StatusEnum["DoneForDay"] = 'done_for_day'] = "DoneForDay";
        StatusEnum[StatusEnum["Canceled"] = 'canceled'] = "Canceled";
        StatusEnum[StatusEnum["Expired"] = 'expired'] = "Expired";
        StatusEnum[StatusEnum["Replaced"] = 'replaced'] = "Replaced";
        StatusEnum[StatusEnum["PendingCancel"] = 'pending_cancel'] = "PendingCancel";
        StatusEnum[StatusEnum["PendingReplace"] = 'pending_replace'] = "PendingReplace";
        StatusEnum[StatusEnum["Accepted"] = 'accepted'] = "Accepted";
        StatusEnum[StatusEnum["PendingNew"] = 'pending_new'] = "PendingNew";
        StatusEnum[StatusEnum["AcceptedForBidding"] = 'accepted_for_bidding'] = "AcceptedForBidding";
        StatusEnum[StatusEnum["Stopped"] = 'stopped'] = "Stopped";
        StatusEnum[StatusEnum["Rejected"] = 'rejected'] = "Rejected";
        StatusEnum[StatusEnum["Suspended"] = 'suspended'] = "Suspended";
        StatusEnum[StatusEnum["Calculated"] = 'calculated'] = "Calculated";
    })(StatusEnum = OrderObject.StatusEnum || (OrderObject.StatusEnum = {}));
})(OrderObject = exports.OrderObject || (exports.OrderObject = {}));
