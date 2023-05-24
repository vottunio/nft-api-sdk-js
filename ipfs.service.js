const axios = require('axios');
const FormData = require('form-data');
const qs = require("querystring");

class IpfsService {

    constructor(token, ipfsUrl) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        this.url = ipfsUrl;
    }

    async uploadFile(filename, file) {
        var formData = new FormData();
        formData.append('filename', filename);
        formData.append('file', file);

        try {
            const response = await axios.post(
                `${this.url}/file/upload`,
                formData,
                { headers: formData.getHeaders() }
            );
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    async uploadDirectory(path) {
        const body = { path };
        const config = {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }

        try {
            const response = await axios.post(
                `${this.url}/upload/directory`,
                qs.stringify(body),
                config
            );
            return response.data;
        } catch (e) {
            return(e);
        }
    }

    async uploadMetadata(metadata) {
        const body = metadata;
        try {
            const response = await axios.post(`${this.url}/file/metadata`, body);
            return response.data;
        } catch (e) {
            return(e);
        }
    }

}

module.exports = {
    IpfsService
}
