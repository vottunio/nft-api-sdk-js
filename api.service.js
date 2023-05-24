const axios = require('axios');
const FormData = require("form-data");
const qs = require('querystring');

class ApiService {

    constructor(appId, token, apiUrl) {
        axios.defaults.headers.common['x-application-vkn'] = appId;
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        this.url = apiUrl;
    }

    /********* GET *********/

    async getWallets() {
        try {
            const response = await axios.get(`${this.url}/vottun/wallets`);
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    async getWallet() {
        try {
            const response = await axios.get(`${this.url}/vottun/wallet`);
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    async getWalletNfts(walletAddress) {
        try {
            const response = await axios.get(`${this.url}/wallet/${walletAddress}/nfts`);
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    async getTokenInfo(contractAddress, tokenId, networkId) {
        try {
            const response = await axios.get(`${this.url}/vottun/token/${tokenId}/info?network=${networkId}&c=${contractAddress}`);
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    async getNftInfo(contractAddress, tokenId, networkId) {
        try {
            const response = await axios.get(`${this.url}/nft/contract/${contractAddress}/token/${tokenId}?network=${networkId}`);
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    async getTokenHistory(internalTokenId) {
        try {
            const response = await axios.get(`${this.url}/nft/${internalTokenId}/history`);
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    async getTokenOwner(contractAddress, tokenId, networkId) {
        try {
            const response = await axios.get(`${this.url}/vottun/contract/${contractAddress}/token/${tokenId}?network=${networkId}`);
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    async getWebhook() {
        try {
            const response = await axios.get(`${this.url}/config/webhook`);
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    async getUserContracts() {
        try {
            const response = await axios.get(`${this.url}/contracts`);
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    async getAccountBalances() {
        try {
            const response = await axios.get(`${this.url}/balances`);
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    async getAccountBalance(walletAddress, networkId) {
        const data = { walletAddress, networkId };
        try {
            const response = await axios.get(`${this.url}/balance`, { data });
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    async getTransactionInfo(txHash, networkId) {
        try {
            const response = await axios.get(`${this.url}/vottun/transaction/${txHash}?network=${networkId}`);
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    async getGasPrice(networkId) {
        try {
            const response = await axios.get(`${this.url}/vottun/gasprice?network=${networkId}`);
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    async getDeploymentFees(contractAddress, networkId) {
        try {
            const response = await axios.get(`${this.url}/fees/contract/${contractAddress}/deploy?network=${networkId}`);
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    async getTransactionFees(contractAddress, method, networkId) {
        try {
            const response = await axios.get(`${this.url}/fees/contract/${contractAddress}/${method}?network=${networkId}`);
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    async getContractTypes() {
        try {
            const response = await axios.get(`${this.url}/contract/types`);
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    async getNetworks() {
        try {
            const response = await axios.get(`${this.url}/networks`);
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    async getCustomerOperations(index, quantity) {
        try {
            const response = await axios.get(`${this.url}/operations?o=${index}&n=${quantity}`);
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    async getCustomerOperation(operationId) {
        try {
            const response = await axios.get(`${this.url}/operation/${operationId}`);
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    async sendTestWebhook() {
        try {
            const response = await axios.get(`${this.url}/config/webhook/test`);
            return response.data;
        } catch (e) {
            return(e);
        }
    }


    /********* POST *********/

    async createWebhook(url) {
        const body = { url };

        const config = {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }

        try {
            const response = await axios.post(
                `${this.url}/config/webhook`,
                qs.stringify(body),
                config
            );
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    async deployERC721Contract(name, symbol, blockchainNetwork, gasLimit) {
        const body = { name, symbol, blockchainNetwork, gasLimit };
        try {
            const response = await axios.post(`${this.url}/erc721/deploy`, body);
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    async mintNft(recipientAddress, ipfsUri, ipfsHash, blockchainNetwork, contractAddress, royaltyPercentage) {
        const body = { recipientAddress, ipfsUri, ipfsHash, blockchainNetwork, contractAddress, royaltyPercentage };
        try {
            const response = await axios.post(`${this.url}/vottun/mint`, body);
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    async transferNft(contractAddress, from, to, tokenId, price, blockchainNetwork) {
        const body = {contractAddress, from, to, tokenId, price, blockchainNetwork};
        try {
            const response = await axios.post(`${this.url}/vottun/transfer`, body);
            return response.data;
        } catch (e) {
            return(e);
        }
    }


    /********* PUT *********/

    async updateWebhook(url) {
        const body = { url };

        const config = {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }

        try {
            const response = await axios.put(
                `${this.url}/config/webhook`,
                qs.stringify(body),
                config
            );
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    /********* POAP *********/
    async deployPoapContract(to, blockchainNetwork, gasLimit, tokenUri, quantities, tokens, alias) {
        const body = { to, blockchainNetwork, gasLimit, tokenUri, quantities, tokens, alias };
        try {
            const response = await axios.post(`${this.url}/poap/deploy`, body);
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    async mintBatchPoap(contract, recipientAddress, ids, quantities, blockchainNetwork) {
        const body = { contract, recipientAddress, ids, quantities, blockchainNetwork };
        try {
            const response = await axios.post(`${this.url}/poap/mint`, body);
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    async transferPoap(contract, from, to, ids, blockchainNetwork) {
        const body = { contract, from, to, ids, blockchainNetwork };
        try {
            const response = await axios.post(`${this.url}/poap/transfer`, body);
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    async getPoapUri(contractAddress, tokenId, blockchainNetwork) {
        try {
            const response = await axios.get(`${this.url}/poap/contract/${contractAddress}/token/${tokenId}/uri?network=${blockchainNetwork}`);
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    async getPoapInfo(ownerAddress, contractAddress, tokenId, blockchainNetwork) {
        try {
            const response = await axios.get(`${this.url}/poap/owner/${ownerAddress}/contract/${contractAddress}/token/${tokenId}/info?network=${blockchainNetwork}`);
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    async getPoapsByOwner(ownerAddress) {
        try {
            const response = await axios.get(`${this.url}/poaps/owner/${ownerAddress}`);
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    async balanceOfPoap(ownerAddress, contractAddress, tokenID, blockchainNetwork) {
        const body = { contractAddress, ownerAddress, tokenID }
        try {
            const response = await axios.get(`${this.url}/poap/balanceof?network=${blockchainNetwork}`, {data: body});
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    /********* ERC1155 *********/

    async deployERC1155Contract(name, blockchainNetwork, gasLimit, tokenUri, ids, quantities, royaltyRecipient, royaltyPercentage, alias) {
        const body = { name, blockchainNetwork, gasLimit, tokenUri, ids, quantities, royaltyRecipient, royaltyPercentage, alias };
        try {
            const response = await axios.post(`${this.url}/erc1155/deploy`, body);
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    async mintBatchERC1155(contract, recipientAddress, ids, quantities, blockchainNetwork) {
        const body = { contract, recipientAddress, ids, quantities, blockchainNetwork };
        try {
            const response = await axios.post(`${this.url}/erc1155/mint`, body);
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    async transferERC1155(contract, from, to, ids, quantities, blockchainNetwork) {
        const body = { contract, from, to, ids, quantities, blockchainNetwork };
        try {
            const response = await axios.post(`${this.url}/erc1155/transfer`, body);
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    async balanceOfERC1155(ownerAddress, contractAddress, tokenID, blockchainNetwork) {
        const body = { contractAddress, ownerAddress, tokenID }
        try {
            const response = await axios.get(`${this.url}/erc1155/balanceof?network=${blockchainNetwork}`, {data: body});
            return response.data;
        } catch (e) {
            return(e);
        }
    }

}

module.exports = {
    ApiService
}
