let request = require('request'),
	api = 'https://api.cryptonator.com/api/ticker/'

function getPrice() {
	return new Promise((done, err) => {
		err('Use One of Our Methods, Please Check API for reference on Methods')
	})
}

getPrice.getCryptoPrice = ((base, crypto) => {
	return new Promise((done, err) => {
		if(typeof base === 'undefined' && typeof crypto === 'undefined') {
			err(`You forgot to provide Base / Cryptic Currency Name`)
		} else {
			let cApi = api + crypto + '-' + base
			request(cApi, (error, response, body) => {
				if(!error && response.statusCode === 200) {
					done(JSON.parse(body).ticker)
				} else {
					err(`Sorry, We couldn't get the Price. ` + error)
				}
			})
		}
	})
})

getPrice.getBasePrice = ((base, crypto) => {
	return new Promise((done, err) => {
		if(typeof base === 'undefined' && typeof crypto === 'undefined') {
			err('You forgot to provide Base / Cryptic Currency Name')
		} else {
			let cApi = api + base + '-' + crypto
			request(cApi, (error, response, body) => {
				if(!error && response.statusCode === 200) {
					done(JSON.parse(body).ticker)
				} else {
					err(`Sorry, We couldn't get the price. ` + error)
				}
			})
		}
	})
})

module.exports = getPrice