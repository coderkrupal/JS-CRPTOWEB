const Bitcoin = document.querySelector('#bitcoin_val');
const Ethereium  = document.querySelector('#Ehererum_val');
const Dogcoint = document.querySelector('#Dogecoin_val');

 
async function getRealdata(){
    const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogcoin&vs_currencies=usd', options)
  .then(res => res.json())
  .then(res => {
    Bitcoin.innerHTML = `Bitcoin:${res.bitcoin.usd}`
    Ethereium.innerHTML = `Ethereium:${res.ethereum.usd}`
    Dogcoint.innerHTML = `Dogcoin:${res.dogcoin.usd}`

          console.log(res)
   
  })
  .catch(err => console.error(err));

     

}

getRealdata();


// {"bitcoin":{"usd":97604},"dogcoin":{"usd":5.353e-09},"ethereum":{"usd":2721.65}}