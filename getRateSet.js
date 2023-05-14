import getSingleRate from './getSingleRate.js'

const getRateSet = async ({ token, isBtc }) => {
    // get pairs
    const tokenPairStrings = []
    tokenPairStrings.push(token + '_' + 'BTC')
    tokenPairStrings.push(token + '_' + 'USDT')
    tokenPairStrings.push('BTC' + '_' + 'USDT')
    //
    // init rates
    const rates = []
    //
    // get rates
    for (let i = 0; i < tokenPairStrings.length; i++) {
        let url = `https://www.superex.com/trade/${tokenPairStrings[i]}`
        let rate = await getSingleRate({ url })
        console.log(`url: ${url} rate: ${rate}`);
        rates.push(rate)
    }
    //
    // return rates
    rates.push(100 * rates[0] * rates[2] / rates[1])
    return { token, rates }
    //
}

export default getRateSet