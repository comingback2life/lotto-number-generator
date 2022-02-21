//random number generator
const entryElm = document.getElementById('entry');
const pwElm = document.getElementById('pw');

const randomNumber = (max)=>{
  return Math.floor(Math.random()*max+1);
}

const handleOnClick = ()=>{
  let lottoEntry="";
  for(let i=0;i<7;i++){
    const numb=randomNumber(35);
    lottoEntry+=numb+" ";
  }
  entryElm.innerText=lottoEntry;
}