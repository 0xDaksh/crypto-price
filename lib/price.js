let api = 'https://api.cryptonator.com/api/ticker/'

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
			fetch(cApi)
				.then(response => {
					if (response.status === 200) {
						return response.json()
					} else {
						err(`Sorry, We couldn't get the Price. Bad response code : ` + response.status)
					}
				})
				.then(json => done(json.ticker))
				.catch(error => console.error(`Sorry, We couldn't get the Price. Error: ` + error))
		}
	})
})

getPrice.getBasePrice = ((base, crypto) => {
	return new Promise((done, err) => {
		if(typeof base === 'undefined' && typeof crypto === 'undefined') {
			err('You forgot to provide Base / Cryptic Currency Name')
		} else {
			let cApi = api + base + '-' + crypto
			fetch(cApi)
				.then(response => {
					if (response.status === 200) {
						return response.json()
					} else {
						err(`Sorry, We couldn't get the Price. Bad response code : ` + response.status)
					}
				})
				.then(json => done(json.ticker))
				.catch(error => console.error(`Sorry, We couldn't get the Price. Error: ` + error))
		}
	})
})

module.exports = getPrice