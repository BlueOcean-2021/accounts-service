/* eslint-disable no-undef */
const axios = require('axios');

async function getResponseOK (url) {
    const resp = await axios.get(url)
        .then(resp => resp.data);
    expect(resp.data).not.toBeNull();
    expect(resp.ok).toBeTruthy();
    return resp;
}

function beforeAll () {
    /*
    const esImport = require('esm')(module);
    const server = esImport('../server.js');
    */
    const server = require('../server.js');
}

module.exports = {
    beforeAll,
    getResponseOK
};