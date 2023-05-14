import getRateSet from "./getRateSet.js"

const btcTokens = ['ETH', '1INCH', 'AAVE', 'ACH', 'ADA', 'AGLD', 'ALCX', 'ATOM', 'ALGO', 'ALICE', 'ALPACA', 'AMP', 'ANKR', 'AERGO', 'AGIX', 'ANT', 'AVAX', 'AMB', 'BAL', 'BAT', 'CHZ', 'COMP', 'CRV', 'DASH', 'DOGE', 'DOT', 'ENJ', 'EOS', 'FIL', 'GRT', 'KNC', 'LINK', 'LRC', 'LTC', 'MANA', 'MKR', 'OKB', 'OMG', 'REN', 'TRX', 'UNI', 'XRP', 'YFI', 'ZRX'];

const ethTokens = ['AAVE', 'CRV', 'DASH', 'DOGE', 'DOT', 'EOS', 'FIL', 'LINK', 'LTC', 'MANA', 'MKR', 'OKB', 'SNX', 'SUSHI', 'TRX', 'UNI', 'XRP', 'YFI', 'ZRX'];

(async function () {
  await getRateSet({ token: btcTokens[1], isBtc: true })
})()
