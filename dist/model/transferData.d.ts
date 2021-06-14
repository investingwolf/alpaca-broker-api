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
export declare class TransferData {
    'transfer_type': TransferData.TransferTypeEnum;
    'timing'?: TransferData.TimingEnum;
    'amount': string;
    'direction': TransferData.DirectionEnum;
    'relationship_id': string;
    'additional_information'?: string;
    'bank_id': string;
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
export declare namespace TransferData {
    enum TransferTypeEnum {
        Ach,
        Wire
    }
    enum TimingEnum {
        Immediate
    }
    enum DirectionEnum {
        Incoming,
        Outgoing
    }
}
