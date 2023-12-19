import { LCDClient, MnemonicKey } from '@terra-money/feather.js';

const lcd = new LCDClient({
  'osmosis-1': {
    chainID: 'osmosis-1',
    lcd: 'https://lcd.osmosis.zone',
    gasAdjustment: 1.75,
    gasPrices: {
      uosmo: 0.025,
    },
    prefix: 'osmo',
  },
  'phoenix-1': {
    chainID: 'phoenix-1',
    lcd: 'https://phoenix-lcd.terra.dev',
    gasAdjustment: 1.75,
    gasPrices: {
      uluna: 0.015,
    },
    prefix: 'terra',
  },
});




const mk = new MnemonicKey({
  mnemonic: 'surface glove shine shaft belt subject marine onion open deliver that cloth come invite tenant man canyon tourist public usage inform foil real gate',
});
const wallet = lcd.wallet(mk);
console.log(wallet.key.accAddress('terra'))
console.log(wallet.key.accAddress('osmo'))
console.log("Correct osmo address : osmo1939flzmmmj7aeqyrdvfknxvawxruwhwfrq72w0")