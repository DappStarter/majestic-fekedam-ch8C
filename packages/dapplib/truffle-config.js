require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope area off tragic educate ranch remain smile hidden clinic blue swim'; 
let testAccounts = [
"0xe4c7566973acc99290dbcdbbfcc1243c742b93468ea5ce5e0502c0e70ebf77cd",
"0xc648ccf28e0e144695d020b3618b7d2e2ba5d2492350123c8f9259b63e65c93a",
"0xdb1e4c427c55022b7e7b22141b189c6ef984c438158f270b1cd70a9e7e79f4ad",
"0xb3c16d4e468da0c0ef9f0c56c95757f7980fb00e193856865518d2ba211469ba",
"0x8d67faa762b43ad56c4fadfeda16bc686dfc3dcf0f98ba517f96bee336903c5b",
"0x429b6da8bccdec8446f7b6c0074281e312a4859d81ed0a3299290e0b820a3362",
"0xc78cb18ee5abd4ab8b2003e0e9c4de7ebc2a6c96cadc036eb88b3cad6152910a",
"0x05231c1b2fd9bf04519602695d9277565088e4b23a2ae7485fd06e1ddb20856a",
"0x866573d82aeeecf12b98bf4cc8e6b022cd257ff9d0828b67b979b9694c34c41c",
"0xbdbc806c5cb759971ee6ca168db1202285eb545662640a007274cd0f93d56d94"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

