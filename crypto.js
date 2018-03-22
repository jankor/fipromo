const socket = io.connect('https://coincap.io');
const symbols = {
  'BTC': true,
  'ETH': true,
  'LTC': true,
  'XRP': true,
  'BCH': true
}
socket.on('trades', function (tradeMsg) {
  if (symbols[tradeMsg.coin]) {
    const price = document.getElementById(tradeMsg.coin.toLowerCase() + '-price');
    price.className = price.innerHTML > tradeMsg.msg.price ? 'price-down' : 'price-up';
    price.innerHTML = tradeMsg.msg.price.toFixed(4);
    document.getElementById(tradeMsg.coin.toLowerCase() + '-cap')
      .innerHTML = tradeMsg.msg.mktcap.toFixed(0)/10000000 + ' $M';
  }
})