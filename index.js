import getRateSet from "./getRateSet.js"

// const btcTokens = ['ETH', '1INCH', 'AAVE', 'ACH', 'ADA', 'AGLD', 'ALCX', 'ATOM', 'ALGO', 'ALICE', 'ALPACA', 'AMP', 'ANKR', 'AERGO', 'AGIX', 'ANT', 'AVAX', 'AMB', 'BAL', 'BAT', 'CHZ', 'COMP', 'CRV', 'DASH', 'DOGE', 'DOT', 'ENJ', 'EOS', 'FIL', 'GRT', 'KNC', 'LINK', 'LRC', 'LTC', 'MANA', 'MKR', 'OKB', 'OMG', 'REN', 'TRX', 'UNI', 'XRP', 'YFI', 'ZRX'];

const btcTokens = ['ATOM', 'AMP', 'AERGO', 'AMB'];

const ethTokens = ['AAVE', 'CRV', 'DASH', 'DOGE', 'DOT', 'EOS', 'FIL', 'LINK', 'LTC', 'MANA', 'MKR', 'OKB', 'SNX', 'SUSHI', 'TRX', 'UNI', 'XRP', 'YFI', 'ZRX'];

(async function () {
  for (let i = 0; i < btcTokens.length; i++) {
    let result = await getRateSet({ token: btcTokens[i], isBtc: true })
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
    console.log('result is:')
    console.log(`         : ${result.token}`)
    console.log(`         : ${result.rates[3]}`)
    console.log(`         : ${result.rates[0]}, ${result.rates[1]}, ${result.rates[2]}`)
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
  }
})()
