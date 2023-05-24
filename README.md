# Vottun NFT API (Javascript SDK)

## Overview

The `@vottun/nft-api-sdk` repository provides a package used for interacting with the Vottun NFT API. The goal of this SDK is to help accelerate Vottun API implementations on Javascript-based frameworks.

## Getting started

Once installed, the package needs to be imported. Here is an example using *Node.js*:

```js
const NftApiSdk = require('@vottun/nft-api-sdk'); 
```

With the `NftApiSdk` declared variable, the constructor needs to be called in order to initialize the object.
The constructor expects the following parameters:

- appId: which is a unique hash that refers to the corresponding Vottun application
- token: which is a JWT that lets users query the API
- apiUrl: which is the URL where the Vottun NFT API is hosted
- ipfsUrl: which is the URL where the Vottun IPFS Node is hosted

Therefore, an example of this initialization using *Node.js* would be:
```js 
let sdk = new NftApiSdk(
    '<APP-ID>',
    '<JWT>',
    'https://api.vottun.tech/nft/v2',
    'https://ipfsapi.vottun.tech/ipfs/v1'
);
```

From here, the SDK is ready to be used. There are plenty of methods that can be called on the
`sdk` variable that has been initialized.

## Examples

* **Get networks**: retrieves the supported chains by the API.
```js
sdk.getNetworks().then((networks) => {
    console.log(networks);
});
```

* **Get customer operations**: retrieves all the operations performed by the user. This method expects the following parameters:
  * index: which is the position of the first operation that will be retrieved
  * quantity: which is the total amount of operations that will be retrieved
```js
sdk.getCustomerOperations(0, 5).then((operations) => {
  console.log(operations);
});
```

* **Get custom operation (detail)**: retrieves the information of the `operationId` operation. This method expects the following parameters:
  * operationId: which is the identifier of the operation that will be retrieved
```js
sdk.getCustomerOperation('d5d182e4-d5d3-4a11-8b74-c03c16daaaab').then((operations) => {
console.log(operations);
});
```

* **Get contract types**: retrieves a list of the different Smart Contracts supported by the API.
```js
sdk.getContractTypes().then((types) => {
  console.log(types);
});
```

* **Get gas price**: retrieves the current gas price of the `networkId` chain. This method expects the following parameters:
  * networkId: which is the number that identifies the desired blockchain network
```js
sdk.getGasPrice(137).then((operations) => {
  console.log(operations);
});
```

* **Get transaction fees**: retrieves an approximation of the price that will cost the execution of the `method` method from the `contractAddress` smart contract. This method expects the following parameters:
  * contractAddress: which is the hash that identifies the smart contract
  * method: which is the name of the desired method 
  * networkId: which is the number that identifies the desired blockchain network
```js
sdk.getTransactionFees('0x3900A9A66e1Ca324add0Bbb72563fd685a3B678c', 'mint', 43113).then((webhook) => {
  console.log(webhook);
});
```

* **Get user contracts**: retrieves a list of the Smart Contracts which the user can interact with.
```js
sdk.getUserContracts().then((contracts) => {
  console.log(contracts);
});
```

* **Get account balances**: retrieves a list of the balances of each user account in each of the supported chains.
```js
sdk.getAccountBalances().then((balances) => {
  console.log(balances);
});
```

* **Get account balance**: retrieves the balance of the `walletAddress` in the `networkId` chain. This method expects the following parameters:
  * walletAddress: which is the address of the desired wallet
  * networkId: which is the number that identifies the desired blockchain network
```js
sdk.getAccountBalance('0xBAacAdb05B97a9204812a9A0812A05BEad7ede01', 43113).then((balance) => {
  console.log(balance);
});
```

* **Get wallet NFTs**: retrieves a list of the NFTs that are currently held by the `walletAddress`. This method expects the following parameters:
  * walletAddress: which is the address of the desired wallet
```js
sdk.getWalletNfts('0x72d0CF5Bab8Abdf72E114C3FE869A94033fb3bC7').then((nfts) => {
  console.log(nfts);
});
```

* **Get transaction details**: retrieves the information of the `txHash` transaction in the `networkId` chain. This method expects the following parameters:
  * txHash: which is the hash that identifies the transaction
  * networkId: which is the number that identifies the desired blockchain network
```js
sdk.getTransactionInfo('0xa28deb9fb610509ba74ac3f882c59984a3fbe753b38d249273b5cdcf99e02c7e', 43113).then((txInfo) => {
  console.log(txInfo);
});
```

* **Get token details**: retrieves the information of the `tokenId` token from the `contractAddress` smart contract. This method expects the following parameters:
  * contractAddress: which is the hash that identifies the smart contract
  * tokenId: which is the number that identifies the token
  * networkId: which is the number that identifies the desired blockchain network
```js
sdk.getTokenInfo('0xb530030e67FB642E732Cbc549192E42f64A613c2', 36, '43113').then((nft) => {
  console.log(nft);
});

```
* **Get NFT details**: retrieves the information of the `tokenId` token from the `contractAddress` smart contract. This method expects the following parameters:
  * contractAddress: which is the hash that identifies the smart contract
  * tokenId: which is the number that identifies the token
  * networkId: which is the number that identifies the desired blockchain network
```js
sdk.getNftInfo(
    '0xb530030e67FB642E732Cbc549192E42f64A613c2',
    36,
    '43113'
).then((nft) => {
    console.log(nft);
});
```

* **Get token owner**: retrieves the address holding the `internalTokenId` token. This method expects the following parameters:
  * contractAddress: which is the address of the contract that will be called
  * internalTokenId: which is the number that identifies the token in our database (not the blockchain `tokenId`)
  * networkId: which is the number that identifies the desired blockchain network
```js
sdk.getTokenOwner('0xb530030e67FB642E732Cbc549192E42f64A613c2', 0, 43113).then((owner) => {
  console.log(owner);
});
```

* **Get token history**: retrieves a list of the transactions that involve the `internalTokenId` token. This method expects the following parameters:
  * internalTokenId: which is the number that identifies the token in our database (not the blockchain `tokenId`)
```js
sdk.getTokenHistory(26).then((history) => {
  console.log(history);
});
```

* **Get user wallets**: retrieves a list of the wallet addresses associated to the user.
```js
sdk.getWallets().then((wallets) => {
  console.log(wallets);
});
```

* **Get user wallets**: retrieves the public and private key from the user's wallet address.
```js
sdk.getWalletKeys().then((walletInfo) => {
  console.log(walletInfo);
});
```

* **Get webhook**: retrieves the URL used as webhook for notifying the status of the submitted transactions.
```js
sdk.getWebhook().then((webhook) => {
  console.log(webhook);
});
```

* **Create webhook**: submits the `url` as the current webhook of the user. This method expects the following parameters:
  * url: which is the URL where all the operation results will be sent to
```js
sdk.createWebhook('https://688c-83-59-180-37.eu.ngrok.io').then((result) => {
  console.log(result);
});
```

* **Update webhook**: modifies the current webhook associated to the user with the passed `url`value. This method expects the following parameters:
  * url: which is the URL where all the operation results will be sent to
```js
sdk.updateWebhook('https://webhook.site/b2523c5c-1e92-4ac7-8c31-18c82dfe6def').then((result) => {
  console.log(result);
});
```

* **Send test webhook**: sends a 'test' object to the submitted webhook in order to test its functionality.
```js
sdk.sendTestWebhook().then((result) => {
  console.log(result);
});
```

* **Upload IPFS metadata**: uploads the passed `metadata` object to the IPFS node. This method expects the following parameters:
  * metadata: which is the JSON object that will be stored in IPFS
```js
const metadata = {
  "name": "Vottun NFT",
  "description": "This method allows users to upload their NFT metadata to IPFS."
}

sdk.uploadMetadata(metadata).then((result) => {
  console.log(result);
});
```

* **Upload IPFS file**: uploads the `file` to the IPFS node. This method expects the following parameters:
  * filename: which is the name that will be assigned to the file
  * file: which is the file that will be stored in IPFS
```js
 const file = fs.createReadStream('./images/nefetok.png');

 sdk.uploadFile('NefetokLogo', file).then((response) => {
    console.log(response);
 });
```

* **Deploy ERC721 contract**: deploys an ERC721 contract. This method expects the following parameters:
  * name: which is the name that will be assigned to the contract
  * symbol: which is the symbol that will be used on the blockchain to represent the tokens from this contract
  * networkId: which is the id of the chain where the contract will be deployed on
  * gasLimit: which is the maximum gas that can be spent on the transaction
```js
sdk.deployERC721Contract(
        'Vottun ERC721',
        'VTN721',
        80001,
        500000
).then((result) => {
  console.log(result);
});

```

* **Mint NFT**: mints a token to the `recipientAddress`. This method expects the following parameters:
  * recipientAddress: which is the wallet address that will receive the minted NFT
  * ipfsUri: which is the IPFS URL where the NFT metadata is stored
  * ipfsHash: which is the last part of the ipfsUri
  * networkId: which is the id of the chain where the NFT will be minted on
```js 
sdk.mintNft(
    '0xaB497Af59DDaA2C7627e8f43D356816C9f87879F',
    'https://ipfsgw.vottun.tech/ipfs/QmWHCtjVcmJnwDQ7nPVNnvVSDWmFm2YLJK6uJTQ4rsXPLU',
    'QmWHCtjVcmJnwDQ7nPVNnvVSDWmFm2YLJK6uJTQ4rsXPLU',
    43113,
    '0x00B39e2B8Fd84Aa7aE729BE584a197E053e51EE0',
    0,
).then((result) => {
    console.log(result);
});
```

* **Transfer NFT**: transfers the `tokenId` token to the `to` address. This method expects the following parameters:
    * contractAddress: which is the address of the smart contract that will be called
    * from: which is the wallet address that will receive the NFT
    * to: which is the wallet address that currently owns the NFT
    * tokenId: which is the id of the transferred token
    * price: which is the price for which the NFT is transferred
    * networkId: which is the id of the chain where the NFT will be minted on
```js 
sdk.transferNft(
    '0x00B39e2B8Fd84Aa7aE729BE584a197E053e51EE0',
    '0x72d0CF5Bab8Abdf72E114C3FE869A94033fb3bC7',
    '0xaB497Af59DDaA2C7627e8f43D356816C9f87879F',
    36,
    0,
    43113
).then((result) => {
    console.log(result);
});
```

### POAP
* **Deploy POAP contract**: deploys a contract for POAPs and mints a batch of tokens to the `recipientAddress`. This method expects the following parameters:
  * to: which is the address that will receive the NFTs that are minted in the deployment
  * networkId: which is the id of the chain where the contract will be deployed on
  * gasLimit: which is the maximum gas that can be spent on the transaction
  * tokenUri: which is the IPFS uri where the metadata of the tokens is stored
  * quantities: which is an array of the quantities that will be minted in the deployment
  * tokens: 
  * alias: which is an alias name that will be assigned to the deployed contract
```js
sdk.deployPoapContract(
    '0xbaacadb05b97a9204812a9a0812a05bead7ede01', 
    80001,
    500000,
    'https://ipfsgw.vottun.tech/ipfs/QmTFqeMP4ytgqCghwsefYAmJWyebguykkRRrRqvfyFcHdg', 
    [10],
    1,
    "contract alias"
).then((result) => {
    console.log(result);
});
```

* **Mint batch POAP**: mints a batch of tokens to the `recipientAddress`. This method expects the following parameters:
  * contractAddress: which is the address of the smart contract that will be called
  * recipientAddress: which is the address that will receive the minted NFTs
  * ids: which is an array of the token id's that will be minted
  * quantities: which is an array of the quantities that will be minted (must correspond with the ids array)
  * networkId: which is the id of the chain where the NFTs will be minted on
```js
sdk.mintBatchPoap(
    '0xE4b580329785D520a981Be7EF52B7B3081e6C390',
    '0xB23afB26866Ff5b2D01DaF83C6a82FC5ed02334C',
    [1],
    [10], 
    80001
).then((result) => {
    console.log(result);
});
```

* **Transfer POAP**: transfers a batch of tokens to the `to` address. This method expects the following parameters:
  * contractAddress: which is the address of the smart contract that will be called
  * from: which is the wallet address that will receive the NFTs
  * to: which is the wallet address that currently owns the NFTs
  * ids: which is an array of the token id's that will be transferred
  * networkId: which is the id of the chain where the NFTs belong to
```js 
sdk.transferPoap(
    '0xE4b580329785D520a981Be7EF52B7B3081e6C390',
    '0xB23afB26866Ff5b2D01DaF83C6a82FC5ed02334C',
    '0x567500cb72Cef96a25df0152e911C924B1BB6f46',
    [1],
    80001
).then((result) => {
    console.log(result);
});
```

* **Get POAP uri**: retrieves the IPFS uri where the `tokenId` metadata is stored. This method expects the following parameters:
  * contractAddress: which is the address of the smart contract where the token belongs to
  * tokenId: which is the id of the token
  * networkId: which is the id of the chain where the NFT resides
```js 
sdk.getPoapUri(
    '0x9b4c46bc191c478205c1081bccad5071e1711387', 
    0,
    137
).then((uri) => {
    console.log(uri);
});
```

* **Get POAP info**: retrieves the `tokenId` POAP information. This method expects the following parameters:
  * ownerAddress: which is the address of the token owner
  * contractAddress: which is the address of the smart contract where the token belongs to
  * tokenId: which is the id of the token
  * networkId: which is the id of the chain where the NFT resides
```js 
sdk.getPoapInfo(
    '0x8464745F6BD9faC89E42F25F6e3312BACF21F2F6',
    '0xb8c5B4f30a53691Adc3C94B32d8701e92ED229dF',
    0,
    80001
).then((balance) => {
    console.log(balance);
});
```

* **Get POAPs by owner**: retrieves a list of all the POAPs owned by the `ownerAddress` address. This method expects the following parameter:
  * ownerAddress: which is the address of the token owner
```js
sdk.getPoapsByOwner('0x85333be3c455D9c3670275a2C3BdF0f42f0D7ad7').then((poaps) => {
    console.log(poaps);
});
```

* **Get POAP balance**: retrieves the amount of `tokenId` tokens owned by the `ownerAddress` address. This method expects the following parameters:
  * ownerAddress: which is the address of the owner
  * contractAddress: which is the address of the smart contract where the token belongs to
  * tokenId: which is the id of the token
  * networkId: which is the id of the chain where the NFT resides
```js 
sdk.balanceOfPoap(
    '0x3a49E087d0b317Bc30B68c42387360ED7e459cec',
    '0x2A80BAb3b957a9B51C0349A1aF8dFaD542779724',
    0,
    43113
).then((balance) => {
    console.log(balance);
});
```

### ERC1155
* **Deploy ERC1155 contract**: deploys an ERC1155 contract and mints a batch of tokens to the contract address. This method expects the following parameters:
  * name: which is the name that will be assigned to the contract
  * networkId: which is the id of the chain where the contract will be deployed on
  * gasLimit: which is the maximum gas that can be spent on the transaction
  * tokenUri: which is the IPFS uri where the metadata of the tokens is stored
  * ids: which is an array of the token id's that will be minted
  * quantities: which is an array of the quantities that will be minted (must correspond with the ids array)
  * royaltyRecipient: which is the address that will receive the royalties from the NFTs
  * royaltyPercentage: which is the percentage of the transaction cost that will be sent as royalty 
  * alias: which is an alias name that will be assigned to the deployed contract
```js
sdk.deployERC1155Contract(
    'Vottun ERC115',
    80001,
    500000,
    'https://ipfsgw.vottun.tech/ipfs/QmTFqeMP4ytgqCghwsefYAmJWyebguykkRRrRqvfyFcHdg', 
    [0],
    [10], 
    '0x9EEe21B201D303cCf5a0EFa285D2367Bbe8AD34C', 
    10,
    'ERC1155 testnet'
).then((result) => {
  console.log(result);
});
```

* **Mint batch ERC1155**: mints a batch of tokens to the `recipientAddress`. This method expects the following parameters:
  * contractAddress: which is the address of the smart contract that will be called
  * recipientAddress: which is the address that will receive the minted NFTs
  * ids: which is an array of the token id's that will be minted
  * quantities: which is an array of the quantities that will be minted (must correspond with the ids array)
  * networkId: which is the id of the chain where the NFTs will be minted on
```js
sdk.mintBatchERC1155(
    '0xF19aEFec4868D13C89D46EA5AC8a498C3F6ae998', 
    '0x72d0CF5Bab8Abdf72E114C3FE869A94033fb3bC7',
    [3],
    [10],
    43113
).then((result) => {
  console.log(result);
});
```

* **Transfer ERC1155**: transfers a batch of tokens to the `to` address. This method expects the following parameters:
  * contractAddress: which is the address of the smart contract that will be called
  * from: which is the wallet address that will receive the NFTs
  * to: which is the wallet address that currently owns the NFTs
  * ids: which is an array of the token id's that will be transferred
  * quantities: which is an array of the quantities that will be transferred (must correspond with the ids array)
  * networkId: which is the id of the chain where the NFTs belong to
```js 
sdk.transferERC1155(
    '0xE4b580329785D520a981Be7EF52B7B3081e6C390',
    '0xB23afB26866Ff5b2D01DaF83C6a82FC5ed02334C',
    '0x567500cb72Cef96a25df0152e911C924B1BB6f46',
    [1],
    [10],
    80001
).then((result) => {
  console.log(result);
});
```

* **Get ERC1155 balance**: retrieves the amount of `tokenId` tokens owned by the `ownerAddress` address. This method expects the following parameters:
  * ownerAddress: which is the address of the owner
  * contractAddress: which is the address of the smart contract where the token belongs to
  * tokenId: which is the id of the token
  * networkId: which is the id of the chain where the NFT resides
```js 
sdk.balanceOfERC1155(
    '0x80b5824636736f4Bf27f378259D0319fCDc1303D',
    '0x63b92E4b12C7f3546c981bC29c5bd8AAA6CBF670',
    0,
    137
).then((result) => {
  console.log(result);
});
```
