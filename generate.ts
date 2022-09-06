import Wallet from 'ethereumjs-wallet';

const wallet = Wallet.generate();

console.log(`
  Private Key:  ${wallet.getPrivateKeyString()}
  Address:      ${wallet.getAddressString()}
`);
