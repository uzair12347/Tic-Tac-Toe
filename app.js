let turn = "X";

let isgameOver = false;

let isgameWin = true;

const changeTurn  =() =>{
    return turn === "X" ? "0" : "X";

  }

  const checkWin =() =>{
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]
    wins.forEach(e => {
    if((boxtext [e[0]].innerText ===  boxtext[e[1]].innerText)  && (boxtext[e[2]].innerText === boxtext[e[1]].innerText)  && (boxtext[e[0]].innerText !== "") ){
      document.querySelector('.info').innerText = boxtext[e[0]].innerText + "Won";
      isgameOver = true;
      disableBoxes();
    }
    })
  
}




let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
  let boxtext = element.querySelector('.boxtext');
  element.addEventListener('click', (e) => {
    if(boxtext.innerText === ''){
        boxtext.innerText = turn;
         turn = changeTurn();
        checkWin();
        if(!isgameOver){
          document.getElementsByClassName("info")[0].innerText = "Turn For" + turn;

        }
    }
  })
})

reset.addEventListener('click' , ()=> {
  let boxtext = document.querySelectorAll('.boxtext');
  Array.from(boxtext).forEach(element => {
    element.innerText = ""
  });
  turn = "X";
  isgameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn For" +  turn;
  
})

function disableBoxes() {
  document.querySelectorAll('.box').forEach(box => {
    box.style.pointerEvents = 'none'; // Disable box clicks
    box.style.opacity = '0.5'; // Optional: make disabled boxes look faded
  });
}
