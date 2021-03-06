# @investingwolf/alpaca-broker-api

[![Version](https://img.shields.io/npm/v/@investingwolf/alpaca-broker-api)](https://www.npmjs.com/package/@investingwolf/alpaca-broker-api)

Node.js client for the Alpaca Broker API generated from the specs provided [here](https://github.com/alpacahq/bkdocs).

## Installation

Install via NPM:

```sh
npm install @investingwolf/alpaca-broker-api
```

## Usage

### Configuration

You will need an Alpaca API key and API secret. You can then create an Alpaca client as follows:

```js
const {AlpacaApi, AlpacaEnvironments} = require('@investingwolf/alpaca-broker-api');

const alpaca = new AlpacaApi({
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    basePath: AlpacaEnvironments.sandbox, // or AlpacaEnvironments.production
});
```

### Making API Calls

Here is an example API call:

```js
const {body: account} = await alpaca.accounts.accountsPost({
  contact: {
    email_address: 'cool_alpaca@example.com',
    phone_number: '555-666-7788',
    // ...
  },
  // ...
});
```

All methods accept an optional `options` object as the last parameter, which can be used to set additional headers:

```js
const {body: account} = await alpaca.accounts.accountsPost({
    // ...
}, {
    headers: {'x-some-header': 'some-value'}
});
```


### Error Handling

API errors are instances of the `HttpError` class (which can be imported). Errors have both `response` and `statusCode` properties.

### Accounts API

See [Alpaca accounts documentation](https://alpaca.markets/docs/broker/api-references/accounts/accounts/) for descriptions of each endpoint.

```js
// deleteAccount(String, Options?)
alpaca.accounts.deleteAccount(accountId);

// getAccount(String, Options?)
alpaca.accounts.getAccount(accountId);

// getAccounts(String?, Options?)
alpaca.accounts.getAccounts(query);

// getAccountActivities(String?, String?, String?, String?, String?, Number?, String?, Options?)
alpaca.accounts.getAccountActivities(date, until, after, direction, accountId, pageSize, pageToken);

// getAccountActivitiesByType(String, String?, String?, String?, String?, String?, Number?, String?, Options?)
alpaca.accounts.getAccountActivitiesByType(activityType, date, until, after, direction, accountId, pageSize, pageToken);

// getTradingAccount(String, Options?)
alpaca.accounts.getTradingAccount(accountId);

// patchAccount(String, AccountUpdate, Options?)
alpaca.accounts.patchAccount(accountId, accountUpdate);

// postAccount(AccountCreationObject, Options?)
alpaca.accounts.postAccount(accountCreationObject);
```

### Assets API

See [Alpaca assets documentation](https://alpaca.markets/docs/broker/api-references/assets/) for descriptions of each endpoint.

```js
// getAssetById(String, Options?)
alpaca.assets.getAssetById(assetId);

// getAssetBySymbol(String, Options?)
alpaca.assets.getAssetBySymbol(symbol);

// getAssets(Options?)
alpaca.assets.getAssets();
```
### Calendar API

See [Alpaca calendar documentation](https://alpaca.markets/docs/broker/api-references/calendar/) for descriptions of each endpoint.

```js
// getCalendar(String?, String?, Options?)
alpaca.calendar.getCalendar(start, end);
```

### Clock API

See [Alpaca clock documentation](https://alpaca.markets/docs/broker/api-references/clock/) for descriptions of each endpoint.

```js
// getClock(Options?)
alpaca.clock.getClock();
```

### Documents API

See [Alpaca documents documentation](https://alpaca.markets/docs/broker/api-references/documents/) for descriptions of each endpoint.

```js
// documentsDocumentIdGet(String, Options?)
alpaca.documents.documentsDocumentIdGet(documentId);

// getDocumentDownload(String, String, Options?)
alpaca.documents.getDocumentDownload(accountId, documentId);

// getDocuments(String, String?, String?, Options?)
alpaca.documents.getDocuments(accountId, startDate, endDate);

// postDocumentUpload(String, DocumentUpload, Options?)
alpaca.documents.postDocumentUpload(accountId, documentUpload);
```

### Events API

See [Alpaca events documentation](https://alpaca.markets/docs/broker/api-references/events/) for descriptions of each endpoint.

```js
// eventsAccountsStatusGet(Date?, Date?, Number?, Number?, Options?)
alpaca.events.eventsAccountsStatusGet(since, until, sinceId, untilId);

// eventsJournalsStatusGet(Date?, Date?, Number?, Number?, Options?)
alpaca.events.eventsJournalsStatusGet(since, until, sinceId, untilId);
```

### Funding API

See [Alpaca funding documentation](https://alpaca.markets/docs/broker/api-references/funding/ach/) for descriptions of each endpoint.

```js
// deleteAchRelationship(String, String, Options?)
alpaca.funding.deleteAchRelationship(accountId, achRelationshipId);

// deleteRecipientBank(String, String, Options?)
alpaca.funding.deleteRecipientBank(accountId, bankId);

// deleteTransfer(String, String, Options?)
alpaca.funding.deleteTransfer(accountId, transferId);

// getAchRelationships(String, String? Options?)
alpaca.funding.getAchRelationships(accountId, statuses);

// getRecipientBanks(String, String?, String?, Options?)
alpaca.funding.getRecipientBanks(accountId, status, bankName);

// getTransfers(String, String?, Number?, Number? Options?)
alpaca.funding.getTransfers(accountId, direction, limit, offset);

// postAchRelationship(String, AchRelationshipData, Options?)
alpaca.funding.postAchRelationship(accountId, achRelationshipData);

// postRecipientBank(String, BankData, Options?)
alpaca.funding.postRecipientBank(accountId, bankData);

// postTransfer(String, TransferData, Options?)
alpaca.funding.postTransfer(accountId, transferData);
```

### Journals API

See [Alpaca journals documentation](https://alpaca.markets/docs/broker/api-references/journals/) for descriptions of each endpoint.

```js
// deleteJournal(String, Options?)
alpaca.journals.deleteJournal(journalId);

// getJournals(String?, String?, String?, String?, String?, String?, Options?)
alpaca.journals.getJournals(after, before, status, entryType, toAccount, fromAccount);

// postJournals(JournalData, Options?)
alpaca.journals.postJournals(journalData);

// postJournalsBatch(BatchJournalRequest, Options?)
alpaca.journals.postJournalsBatch(batchJournalRequest);
```

### OAuth API

See [Alpaca OAuth documentation](https://alpaca.markets/docs/broker/api-references/oauth/) for descriptions of each endpoint.

```js
// oauthAuthorizePost(OAuthAuthorizeObject, Options?)
alpaca.oauth.oauthAuthorizePost(oauthAuthorizeObject);

// oauthClientsClientIdGet(String, String?, String?, String?, Options?)
alpaca.oauth.oauthClientsClientIdGet(clientId, responseType, redirectUri, scope);

// oauthTokenPost(OAuthTokenObject, Options?)
alpaca.oauth.oauthTokenPost(oauthTokenObject);
```

### Trading API

See [Alpaca trading documentation](https://alpaca.markets/docs/broker/api-references/trading/orders/) for descriptions of each endpoint.

```js
// deleteOrder(String, String, Options?)
alpaca.trading.deleteOrder(accountId, orderId);

// deleteOrders(String, Options?)
alpaca.trading.deleteOrders(accountId);

// getOrder(String, String, Options?)
alpaca.trading.getOrder(accountId, orderId);

// getOrders(String, String?, Number?, Date?, Date?, String?, Boolean?, String?, Options?)
alpaca.trading.getOrders(accountId, status, limit, after, until, direction, nested, symbols);

// getPositions(String, Options?)
alpaca.trading.getPositions(accountId);

// deletePosition(String, String, String?, String?, Options?)
alpaca.trading.deletePosition(accountId, symbol, qty, percentage);

// patchOrder(String, String, PatchOrder, Options?)
alpaca.trading.patchOrder(accountId, orderId, patchOrder);

// postOrder(String, CreateOrder, Options?)
alpaca.trading.postOrder(accountId, createOrder);

// getPortfolioHistory(String, String?, String?, String?, Boolean?, Options?)
alpaca.trading.getPortfolioHistory(accountId, period, timeframe, dateEnd, extendedHours);
```
