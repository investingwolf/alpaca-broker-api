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
export declare class JournalData {
    'entry_type': JournalData.EntryTypeEnum;
    'from_account': string;
    'to_account': string;
    /**
    * Required for JNLC. The dollar amount to move. It has to be a positive value.
    */
    'amount'?: string;
    /**
    * Required for JNLS.
    */
    'symbol'?: string;
    /**
    * Required for JNLS. The number of shares to move. It has to be a positive value.
    */
    'qty'?: string;
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
export declare namespace JournalData {
    enum EntryTypeEnum {
        Jnlc,
        Jnls
    }
}
