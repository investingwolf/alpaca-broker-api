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
export declare class JournalJNLC {
    /**
    * journal ID
    */
    'id': string;
    /**
    * JNLC (constant)
    */
    'entry_type': string;
    /**
    * account ID the amount goes from
    */
    'from_account': string;
    'to_account': string;
    /**
    * ID the amount goes to
    */
    'description'?: string;
    'settle_date': string;
    'status'?: JournalJNLC.StatusEnum;
    'net_amount': string;
    /**
    * max 255 characters
    */
    'transmitter_name'?: string;
    /**
    * max 255 characters
    */
    'transmitter_account_number'?: string;
    /**
    * max 255 characters
    */
    'transmitter_address'?: string;
    /**
    * max 255 characters
    */
    'transmitter_financial_institution'?: string;
    'transmitter_timestamp'?: Date;
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
export declare namespace JournalJNLC {
    enum StatusEnum {
        Pending,
        Canceled,
        Executed
    }
}
