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
/// <reference types="node" />
import http from 'http';
import { ACHRelationshipData } from '../model/aCHRelationshipData';
import { ACHRelationshipResource } from '../model/aCHRelationshipResource';
import { BankData } from '../model/bankData';
import { BankResource } from '../model/bankResource';
import { TransferData } from '../model/transferData';
import { TransferResource } from '../model/transferResource';
import { Authentication, Interceptor } from '../model/models';
import { HttpBasicAuth } from '../model/models';
export declare enum FundingApiApiKeys {
}
export declare class FundingApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
        BasicAuth: HttpBasicAuth;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    set defaultHeaders(defaultHeaders: any);
    get defaultHeaders(): any;
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: FundingApiApiKeys, value: string): void;
    set username(username: string);
    set password(password: string);
    addInterceptor(interceptor: Interceptor): void;
    /**
     *
     * @summary Delete an existing ACH relationship
     * @param accountId Account identifier.
     * @param achRelationshipId ACH relationship identifier
     */
    deleteAchRelationship(accountId: string, achRelationshipId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    /**
     *
     * @summary Delete a Bank Relationship for an account
     * @param accountId Account identifier.
     * @param bankId
     */
    deleteRecipientBank(accountId: string, bankId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    /**
     *
     * @summary Request to close a transfer
     * @param accountId
     * @param transferId
     */
    deleteTransfer(accountId: string, transferId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    /**
     *
     * @summary Retrieve ACH Relationships for an account
     * @param accountId Account identifier.
     * @param statuses Comma-separated status values
     */
    getAchRelationships(accountId: string, statuses?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<ACHRelationshipResource>;
    }>;
    /**
     *
     * @summary Retrieve bank relationships for an account
     * @param accountId
     * @param status
     * @param bankName
     */
    getRecipientBanks(accountId: string, status?: string, bankName?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<BankResource>;
    }>;
    /**
     * You can filter requested transfers by values such as direction and status.
     * @summary Return a list of transfers for an account.
     * @param accountId
     * @param direction
     * @param limit
     * @param offset
     */
    getTransfers(accountId: string, direction?: 'INCOMING' | 'OUTGOING', limit?: number, offset?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<TransferResource>;
    }>;
    /**
     *
     * @summary Create an ACH Relationship
     * @param accountId Account identifier.
     * @param aCHRelationshipData
     */
    postAchRelationship(accountId: string, aCHRelationshipData: ACHRelationshipData, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ACHRelationshipResource;
    }>;
    /**
     *
     * @summary Create a Bank Relationship for an account
     * @param accountId Account identifier.
     * @param bankData
     */
    postRecipientBank(accountId: string, bankData: BankData, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BankResource;
    }>;
    /**
     * This operation allows you to fund an account with virtual money in the sandbox environment.
     * @summary Request a new transfer
     * @param accountId
     * @param transferData
     */
    postTransfer(accountId: string, transferData: TransferData, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TransferResource;
    }>;
}
