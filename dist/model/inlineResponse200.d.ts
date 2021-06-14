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
import { AccountStatus } from './accountStatus';
export declare class InlineResponse200 {
    'id'?: string;
    'account_number'?: string;
    'status'?: AccountStatus;
    'currency'?: string;
    'buying_power'?: string;
    'regt_buying_power'?: string;
    'daytrading_buying_power'?: string;
    'cash'?: string;
    'cash_withdrawable'?: string;
    'cash_transferable'?: string;
    'pending_transfer_out'?: string;
    'portfolio_value'?: string;
    'pattern_day_trader'?: boolean;
    'trading_blocked'?: boolean;
    'transfers_blocked'?: boolean;
    'account_blocked'?: boolean;
    'created_at'?: string;
    'trade_suspended_by_user'?: boolean;
    'multiplier'?: string;
    'shorting_enabled'?: boolean;
    'equity'?: string;
    'last_equity'?: string;
    'long_market_value'?: string;
    'short_market_value'?: string;
    'initial_margin'?: string;
    'maintenance_margin'?: string;
    'last_maintenance_margin'?: string;
    'sma'?: string;
    'daytrade_count'?: number;
    'previous_close'?: string;
    'last_long_market_value'?: string;
    'last_short_market_value'?: string;
    'last_cash'?: string;
    'last_initial_margin'?: string;
    'last_regt_buying_power'?: string;
    'last_daytrading_buying_power'?: string;
    'last_buying_power'?: string;
    'last_daytrade_count'?: number;
    'clearing_broker'?: string;
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
