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
exports.TradeActivity = void 0;
class TradeActivity {
    static getAttributeTypeMap() {
        return TradeActivity.attributeTypeMap;
    }
}
exports.TradeActivity = TradeActivity;
TradeActivity.discriminator = undefined;
TradeActivity.attributeTypeMap = [
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
        "type": "TradeActivity.TypeEnum"
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
        "type": "TradeActivity.SideEnum"
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
        "type": "TradeActivity.OrderStatusEnum"
    }
];
(function (TradeActivity) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Fill"] = 'fill'] = "Fill";
        TypeEnum[TypeEnum["PartialFill"] = 'partial_fill'] = "PartialFill";
    })(TypeEnum = TradeActivity.TypeEnum || (TradeActivity.TypeEnum = {}));
    let SideEnum;
    (function (SideEnum) {
        SideEnum[SideEnum["Buy"] = 'buy'] = "Buy";
        SideEnum[SideEnum["Sell"] = 'sell'] = "Sell";
    })(SideEnum = TradeActivity.SideEnum || (TradeActivity.SideEnum = {}));
    let OrderStatusEnum;
    (function (OrderStatusEnum) {
        OrderStatusEnum[OrderStatusEnum["New"] = 'new'] = "New";
        OrderStatusEnum[OrderStatusEnum["PartiallyFilled"] = 'partially_filled'] = "PartiallyFilled";
        OrderStatusEnum[OrderStatusEnum["Filled"] = 'filled'] = "Filled";
        OrderStatusEnum[OrderStatusEnum["DoneForDay"] = 'done_for_day'] = "DoneForDay";
        OrderStatusEnum[OrderStatusEnum["Canceled"] = 'canceled'] = "Canceled";
        OrderStatusEnum[OrderStatusEnum["Expired"] = 'expired'] = "Expired";
        OrderStatusEnum[OrderStatusEnum["Replaced"] = 'replaced'] = "Replaced";
        OrderStatusEnum[OrderStatusEnum["PendingCancel"] = 'pending_cancel'] = "PendingCancel";
        OrderStatusEnum[OrderStatusEnum["PendingReplace"] = 'pending_replace'] = "PendingReplace";
        OrderStatusEnum[OrderStatusEnum["Accepted"] = 'accepted'] = "Accepted";
        OrderStatusEnum[OrderStatusEnum["PendingNew"] = 'pending_new'] = "PendingNew";
        OrderStatusEnum[OrderStatusEnum["AcceptedForBidding"] = 'accepted_for_bidding'] = "AcceptedForBidding";
        OrderStatusEnum[OrderStatusEnum["Stopped"] = 'stopped'] = "Stopped";
        OrderStatusEnum[OrderStatusEnum["Rejected"] = 'rejected'] = "Rejected";
        OrderStatusEnum[OrderStatusEnum["Suspended"] = 'suspended'] = "Suspended";
        OrderStatusEnum[OrderStatusEnum["Calculated"] = 'calculated'] = "Calculated";
    })(OrderStatusEnum = TradeActivity.OrderStatusEnum || (TradeActivity.OrderStatusEnum = {}));
})(TradeActivity = exports.TradeActivity || (exports.TradeActivity = {}));
