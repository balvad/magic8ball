//variables for displayImage() function
let shakeNumber=0;
let shakeRector="7%";
let shakeDirection=getRandomInteger()%5;

document.body.onload=addElement;
document.getElementById('askme').focus();


//Create a new div element and set initial img
function addElement () { 
    const myDiv2 = document.createElement('div','answers'); 
    myDiv2.style.width='700px';
    myDiv2.style.height='700px';
    myDiv2.style.margin='auto';
    myDiv2.style.justifyContent='center';
    myDiv2.style.alignItems='center';
    let myImg=document.createElement('img');
    myImg.setAttribute('id', 'myImg');
    myImg.setAttribute('class', 'shakeimage');
    myImg.setAttribute('src', 'MbImages/magic8ball_start.png');
    myImg.setAttribute('height', '700');
    myImg.setAttribute('width', '700');
    myDiv2.appendChild(myImg);
    document.body.appendChild(myDiv2);
  }

function checkForEnterKey(element) {
    if (event.key === 'Enter') {
        ask();
    }
}

function ask() {
    //validate input
    let input = document.getElementById('askme').value;
    if (document.getElementById('askme').value.length<5) {
        document.getElementById('ErrorMsg').innerHTML='Too short. Enter again...';
        document.querySelector('img').src='MbImages/magic8ball_extra.png';
    } else {
        document.getElementById('ErrorMsg').innerHTML=null;
        //shake image few times and display random image
        displayImage();
    }
    document.getElementById('askme').focus();
    document.getElementById('askme').select();
}

function getRandomInteger() {
    return (Math.floor(Math.random()*20)+1);
}

function displayImage() {
    let myImg=document.getElementById('myImg');
    myImg.src='MbImages/magic8ball_extra.png';
    shakeNumber++;
    myImg.style.left="0%";
    myImg.style.top="0%";
    //shake image
    if(shakeNumber%10===0) {
        //display new image
        myImg.src='MbImages/magic8ball_'+getRandomInteger()+'.png';
        shakeNumber=0;
        return;        
    }
    if (shakeDirection==1){
        myImg.style.top=parseInt(myImg.style.top)+shakeRector;
        myImg.src='MbImages/magic8ball_'+getRandomInteger()+'.png';
    } else if (shakeDirection==2){
        myImg.style.left=parseInt(myImg.style.left)+shakeRector;
        myImg.src='MbImages/magic8ball_'+getRandomInteger()+'.png';
    } else if (shakeDirection==3){
        myImg.style.top=parseInt(myImg.style.top)-shakeRector;
        myImg.src='MbImages/magic8ball_'+getRandomInteger()+'.png';
    } else{
        myImg.style.left=parseInt(myImg.style.left)-shakeRector;
        myImg.src='MbImages/magic8ball_'+getRandomInteger()+'.png';
    }
    shakeDirection<4 ? shakeDirection++ : shakeDirection=1;
    setTimeout("displayImage()",50);
 }

























//document.getElementById('askme').addEventListener('keyup',processEnterKey());
// document.getElementById('askme').addEventListener('keyup',function (e) {
//     if (e.key === 'Enter'){
//         //alert( document.getElementById('askme').value);
//         displayRandomImage();   
//         e.preventDefault();
//     }
// });

// function processEnterKey(event) {
//     event.preventDefault();
//     if (event.key === 'Enter') {
//         document.getElementById('ask').click();
//     }
// }
