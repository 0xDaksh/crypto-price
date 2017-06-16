# Crypto-Price

Crypto Price is a Node.js Module that provides an Easy API which allows users to easily get crypto currency price in their Local / Base Currency and returns a Promise that gives you the price.

## Supported Crypto Currencies

- Ethereum (ETH)
- Bitcoin (BTC)
- Litecoin (LTC)
- Monero (XMR)
- Ripple (XRP)
- ZCash (ZEC)
- Many More ([Here's a list of them.](https://www.cryptonator.com/api/currencies)) 

## API (with Example)

### getCryptoPrice

The getCryptoPrice allows you to get the price of crypto currency from your base currency.

```javascript

let price = require('crypto-price')
price.getCryptoPrice(base, crypto).then(obj => { // Base for ex - USD, Crypto for ex - ETH 
	console.log(obj.price)
}).catch(err => {
	console.log(err)
})

```

### getBasePrice

The getBasePrice allows you to get the price of base currency from your crypto currency.

```javascript

let price = require('crypto-price')
price.getBasePrice(base, crypto).then(obj => { // Base for ex - USD, Crypto for ex - ETH 
	console.log(obj.price)
}).catch(err => {
	console.log(err)
})

```

## License
Copyright [Daksh Miglani](https://dak.sh), Licensed Under MIT 2017.