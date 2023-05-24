const {ApiService} = require('./api.service');
const {IpfsService} = require('./ipfs.service');

class NftApiSdk {

    constructor(appId, token, apiUrl, ipfsUrl) {
        this.ipfsService = new IpfsService(token, ipfsUrl);
        this.apiService = new ApiService(appId, token, apiUrl);
    }

    /********* GET *********/

    async getWalletNfts(walletAddress) {
        return await this.apiService.getWalletNfts(walletAddress);
    }

    async getTokenInfo(contractAddress, tokenId, networkId) {
        return await this.apiService.getTokenInfo(contractAddress, tokenId, networkId);
    }

    async getNftInfo(contractAddress, tokenId, networkId) {
        return await this.apiService.getNftInfo(contractAddress, tokenId, networkId);
    }

    async getTokenHistory(internalTokenId) {
        return await this.apiService.getTokenHistory(internalTokenId);
    }

    async getWebhook() {
        return await this.apiService.getWebhook();
    }

    async getTokenOwner(contractAddress, tokenId, networkId) {
        return await this.apiService.getTokenOwner(contractAddress, tokenId, networkId);
    }

    async getUserContracts() {
        return await this.apiService.getUserContracts();
    }

    async getAccountBalances() {
        return await this.apiService.getAccountBalances();
    }

    async getAccountBalance(walletAddress, networkId) {
        return await this.apiService.getAccountBalance(walletAddress, networkId);
    }

    async getTransactionInfo(txHash, networkId) {
        return await this.apiService.getTransactionInfo(txHash, networkId);
    }

    async getGasPrice(networkId) {
        return await this.apiService.getGasPrice(networkId);
    }

    // async getDeploymentFees(contractAddress, networkId) {
    //     return await this.apiService.getDeploymentFees(contractAddress, networkId);
    // }

    async getTransactionFees(contractAddress, method, networkId) {
        return await this.apiService.getTransactionFees(contractAddress, method, networkId);
    }

    async getContractTypes() {
        return await this.apiService.getContractTypes();
    }

    async getNetworks() {
        return await this.apiService.getNetworks();
    }

    async getCustomerOperations(index, quantity) {
        return await this.apiService.getCustomerOperations(index, quantity);
    }

    async getCustomerOperation(operationId) {
        return await this.apiService.getCustomerOperation(operationId);
    }

    async getWallets() {
        return await this.apiService.getWallets();
    }

    async getWalletKeys() {
        return await this.apiService.getWallet();
    }

    async sendTestWebhook() {
        return await this.apiService.sendTestWebhook();
    }


    /********* POST *********/

    async createWebhook(url) {
        return await this.apiService.createWebhook(url);
    }

    async deployERC721Contract(name, symbol, networkId, gasLimit) {
        return await this.apiService.deployERC721Contract(name, symbol, networkId, gasLimit);
    }

    async mintNft(recipientAddress, ipfsUri, ipfsHash, networkId, contractAddress, royaltyPercentage) {
        return await this.apiService.mintNft(recipientAddress, ipfsUri, ipfsHash, networkId, contractAddress, royaltyPercentage);
    }

    async transferNft(contractAddress, from, to, tokenId, price, networkId) {
        return await this.apiService.transferNft(contractAddress, from, to, tokenId, price, networkId);
    }


    /********* PUT *********/

    async updateWebhook(url) {
        return await this.apiService.updateWebhook(url);
    }


    /********* IPFS *********/

    async uploadFile(filename, file) {
        return await this.ipfsService.uploadFile(filename, file);
    }

    // async uploadDirectory(pathToFolder) {
    //     return await this.ipfsService.uploadDirectory(pathToFolder);
    // }

    async uploadMetadata(metadata) {
        return await this.ipfsService.uploadMetadata(metadata);
    }

    /********* POAP *********/

    async deployPoapContract(to, blockchainNetwork, gasLimit, tokenUri, quantities, tokens, alias) {
        return await this.apiService.deployPoapContract(to, blockchainNetwork, gasLimit, tokenUri, quantities, tokens, alias);
    }

    async mintBatchPoap(contractAddress, recipientAddress, ids, quantities, networkId) {
        return await this.apiService.mintBatchPoap(contractAddress, recipientAddress, ids, quantities, networkId);
    }

    async transferPoap(contractAddress, from, to, ids, networkId) {
        return await this.apiService.transferPoap(contractAddress, from, to, ids, networkId);
    }

    async getPoapUri(contractAddress, tokenId, networkId) {
        return await this.apiService.getPoapUri(contractAddress, tokenId, networkId);
    }

    async getPoapInfo(ownerAddress, contractAddress, tokenId, networkId) {
        return await this.apiService.getPoapInfo(ownerAddress, contractAddress, tokenId, networkId);
    }

    async getPoapsByOwner(ownerAddress) {
        return await this.apiService.getPoapsByOwner(ownerAddress);
    }

    async balanceOfPoap(ownerAddress, contractAddress, tokenId, networkId) {
        return await this.apiService.balanceOfPoap(ownerAddress, contractAddress, tokenId, networkId);
    }


    /********* ERC1155 *********/

    async deployERC1155Contract(name, networkId, gasLimit, tokenUri, ids, quantities, royaltyRecipient, royaltyPercentage, alias) {
        return await this.apiService.deployERC1155Contract(name, networkId, gasLimit, tokenUri, ids, quantities, royaltyRecipient, royaltyPercentage, alias);
    }

    async mintBatchERC1155(contractAddress, recipientAddress, ids, quantities, networkId) {
        return await this.apiService.mintBatchERC1155(contractAddress, recipientAddress, ids, quantities, networkId);
    }

    async transferERC1155(contractAddress, from, to, ids, quantities, networkId) {
        return await this.apiService.transferERC1155(contractAddress, from, to, ids, quantities, networkId);
    }

    async balanceOfERC1155(ownerAddress, contractAddress, tokenId, networkId) {
        return await this.apiService.balanceOfERC1155(ownerAddress, contractAddress, tokenId, networkId);
    }

}

module.exports = {
    NftApiSdk
};
