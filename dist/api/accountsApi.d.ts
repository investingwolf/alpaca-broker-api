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
import { Account } from '../model/account';
import { AccountCreationObject } from '../model/accountCreationObject';
import { AccountExtended } from '../model/accountExtended';
import { AccountUpdate } from '../model/accountUpdate';
import { ActivityItem } from '../model/activityItem';
import { InlineObject } from '../model/inlineObject';
import { InlineResponse200 } from '../model/inlineResponse200';
import { Authentication, Interceptor } from '../model/models';
import { HttpBasicAuth } from '../model/models';
export declare enum AccountsApiApiKeys {
}
export declare class AccountsApi {
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
    setApiKey(key: AccountsApiApiKeys, value: string): void;
    set username(username: string);
    set password(password: string);
    addInterceptor(interceptor: Interceptor): void;
    /**
     *
     * @summary Request to close an account
     * @param accountId Account identifier.
     */
    deleteAccount(accountId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    /**
     * The response is an Account model.
     * @summary Retrieve an account.
     * @param accountId Account identifier.
     */
    getAccount(accountId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AccountExtended;
    }>;
    /**
     *
     * @summary Retrieve account activities
     * @param date
     * @param until
     * @param after
     * @param direction
     * @param accountId
     * @param pageSize
     * @param pageToken
     */
    getAccountActivities(date?: string, until?: string, after?: string, direction?: 'asc' | 'desc', accountId?: string, pageSize?: number, pageToken?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<ActivityItem>;
    }>;
    /**
     *
     * @summary Retrieve specific account activities
     * @param activityType
     * @param date
     * @param until
     * @param after
     * @param direction
     * @param accountId
     * @param pageSize
     * @param pageToken
     */
    getAccountActivitiesByType(activityType: 'FILL' | 'ACATC' | 'ACATS' | 'CSD' | 'CSR' | 'CSW' | 'DIV' | 'DIVCGL' | 'DIVCGS' | 'DIVNRA' | 'DIVROC' | 'DIVTXEX' | 'INT' | 'JNLC' | 'JNLS' | 'MA' | 'NC' | 'PTC' | 'REORG' | 'SSO' | 'SSP', date?: string, until?: string, after?: string, direction?: 'asc' | 'desc', accountId?: string, pageSize?: number, pageToken?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<ActivityItem>;
    }>;
    /**
     *
     * @summary Retrieve all accounts
     * @param query The query supports partial match of account number, names, emails, etc.. Items can be space delimited.
     */
    getAccounts(query?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Account>;
    }>;
    /**
     * The response is a Trading Account model.
     * @summary Retrieve trading details for an account.
     * @param accountId Account identifier.
     */
    getTradingAccount(accountId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineResponse200;
    }>;
    /**
     *
     * @summary Update an account
     * @param accountId Account identifier.
     * @param accountUpdate
     */
    patchAccount(accountId: string, accountUpdate: AccountUpdate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Account;
    }>;
    /**
     *
     * @summary Create an account
     * @param accountCreationObject
     */
    postAccount(accountCreationObject: AccountCreationObject, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Account;
    }>;
    /**
     *
     * @summary Upload a document to an already existing account
     * @param accountId Account identifier.
     * @param inlineObject
     */
    postDocumentUpload(accountId: string, inlineObject: InlineObject, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
