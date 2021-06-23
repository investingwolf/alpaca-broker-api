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
import { InlineObject } from '../model/inlineObject';
import { InlineObject1 } from '../model/inlineObject1';
import { InlineResponse2007 } from '../model/inlineResponse2007';
import { InlineResponse2008 } from '../model/inlineResponse2008';
import { InlineResponse2009 } from '../model/inlineResponse2009';
import { Authentication, Interceptor } from '../model/models';
import { HttpBasicAuth } from '../model/models';
export declare enum OAuthApiApiKeys {
}
export declare class OAuthApi {
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
    setApiKey(key: OAuthApiApiKeys, value: string): void;
    set username(username: string);
    set password(password: string);
    addInterceptor(interceptor: Interceptor): void;
    /**
     * The operation issues an OAuth code which can be used in the OAuth code flow.
     * @summary Issue a code.
     * @param inlineObject1
     */
    oauthAuthorizePost(inlineObject1: InlineObject1, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineResponse2009;
    }>;
    /**
     * The endpoint returns the details of OAuth client to display in the authorization page.
     * @summary Returns an OAuth client.
     * @param clientId
     * @param responseType
     * @param redirectUri
     * @param scope
     */
    oauthClientsClientIdGet(clientId: string, responseType?: 'code' | 'token', redirectUri?: string, scope?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineResponse2007;
    }>;
    /**
     * This operation issues an access token for an account.
     * @summary Issue a token.
     * @param inlineObject
     */
    oauthTokenPost(inlineObject: InlineObject, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineResponse2008;
    }>;
}
