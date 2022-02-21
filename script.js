//random number generator
const entryElm = document.getElementById('entry');
const pwElm = document.getElementById('pw');

const randomNumber = (max)=>{
  return Math.floor(Math.random()*max+1);
}

const handleOnClick = ()=>{
  let lottoEntry=[]
  for(let i=0;lottoEntry.length<7;i++){
    const numb=randomNumber(35);
    if(!lottoEntry.includes(numb)){
      lottoEntry.push(numb);
    }
   
  }
  pwElm.innerText=randomNumber(20);
  pwElm.style.color="red"
  entryElm.innerText=lottoEntry;
  entryElm.style.color="red"
}
