require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune shoulder name radar museum come install pave army gas'; 
let testAccounts = [
"0xefc6b914938917af1af1429366f913612c84ee40cf1237dae886dcf645b22004",
"0xfedf47d12be2bc8ec4641a90e00b8c5c12e870bb1d4f535ce95206871b607e38",
"0x83b64c994a4a366ae189865412d610a6164f9689887c79d2a1fb076397fd8cbf",
"0xad5e4335679ef2cf46001d8f6ac196ab2af9c7d86bee69907f69e882e804a917",
"0xd8ec55c705ae8b42676b5dee0d51bce4d62ae4955ed7cf8fcaf250685d4e6739",
"0xf9850ec696a26c8c4038bbc301428d74c2597b087da7c2341b327d758dd091da",
"0x06052af1031bb5a3d21896adf56ae401a667bf278a2a845c21963e7217788f6a",
"0x72ab83285a6d3343673e9fedae3720bff5c27d56e7804a88d91af037e77274b3",
"0xf1c5ab3e0851c086da4004923e8ab19719c499e9a0b53c769198904ef86e1c11",
"0x1a35ab487e49259140480624183a21f2f63cd9b0b9894edf2d1f5059198dc6d7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

