/// <reference types="node" />
import localVarRequest from 'request';
export * from './aCHRelationshipData';
export * from './aCHRelationshipResource';
export * from './aCHRelationshipResourceAllOf';
export * from './account';
export * from './accountCreationObject';
export * from './accountExtended';
export * from './accountStatus';
export * from './accountUpdate';
export * from './activity';
export * from './activityItem';
export * from './activityType';
export * from './agreement';
export * from './applicationDocument';
export * from './assetResource';
export * from './bankData';
export * from './bankResource';
export * from './bankResourceAllOf';
export * from './batchJournalRequest';
export * from './batchJournalRequestEntries';
export * from './batchJournalResponse';
export * from './contact';
export * from './createOrder';
export * from './createOrderStopLoss';
export * from './createOrderTakeProfit';
export * from './disclosures';
export * from './documentType';
export * from './documentUpload';
export * from './identifiedResource';
export * from './identity';
export * from './inlineObject';
export * from './inlineObject1';
export * from './inlineResponse200';
export * from './inlineResponse2001';
export * from './inlineResponse2002';
export * from './inlineResponse2003';
export * from './inlineResponse2004';
export * from './inlineResponse2005';
export * from './inlineResponse2006';
export * from './inlineResponse2007';
export * from './inlineResponse2008';
export * from './inlineResponse207';
export * from './journalData';
export * from './journalJNLC';
export * from './journalJNLS';
export * from './journalResource';
export * from './kycResult';
export * from './modelError';
export * from './nonTradeActivity';
export * from './nonTradeActivityAllOf';
export * from './orderObject';
export * from './patchOrder';
export * from './portfolioHistory';
export * from './position';
export * from './tradeActivity';
export * from './tradeActivityAllOf';
export * from './transferData';
export * from './transferDataAllOf';
export * from './transferResource';
export * from './transferResourceAllOf';
export * from './trustedContact';
export * from './untypedACHTransferData';
export * from './untypedACHTransferDataAllOf';
export * from './untypedTransferData';
export * from './untypedWireTransferData';
export * from './untypedWireTransferDataAllOf';
import * as fs from 'fs';
export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    };
}
export declare type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string): any;
    static deserialize(data: any, type: string): any;
}
export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}
export declare class HttpBasicAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class HttpBearerAuth implements Authentication {
    accessToken: string | (() => string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class ApiKeyAuth implements Authentication {
    private location;
    private paramName;
    apiKey: string;
    constructor(location: string, paramName: string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class OAuth implements Authentication {
    accessToken: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class VoidAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(_: localVarRequest.Options): void;
}
export declare type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
