//variables for displayImage() function
let shakeNumber=0;
let shakeRector="7%";
let shakeDirection=getRandomInteger()%5;

document.body.onload=addElement;
document.getElementById('askmeInput').focus();

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

//Calls ask function when enter key is pressed  
function checkForEnterKey() {
    if (event.key === 'Enter') {
        ask();
    }
}

//ask function
function ask() {
    try{
        let input = document.getElementById('askmeInput').value;
        if (isInputValid(input)) {
            document.getElementById('ErrorMsg').innerHTML=null;
            //shake image few times and display random image
            displayImage();
        }                
    } catch (err) {
        document.getElementById('ErrorMsg').innerHTML=err;
        document.querySelector('img').src='MbImages/magic8ball_extra.png';
    } finally {
        document.getElementById('askmeInput').focus();
        document.getElementById('askmeInput').select();
    }
}

//generates a radon number between 1 and 20
function getRandomInteger() {
    return (Math.floor(Math.random()*20)+1);
}

//Displays image
function displayImage() {
    let myImg=document.getElementById('myImg');
    shakeNumber++;
    myImg.style.left="0%";
    myImg.style.top="0%";
    myImg.src='MbImages/magic8ball_extra.png';
    if(shakeNumber===10) {
        //display new image
        myImg.src='MbImages/magic8ball_'+getRandomInteger()+'.png';
        shakeNumber=0;
        return;        
    }
    //shake image
    switch (shakeDirection) {
        case 1:
            myImg.style.top=parseInt(myImg.style.top)+shakeRector;
            myImg.src='MbImages/magic8ball_'+getRandomInteger()+'.png';
            break;
        case 2:
            myImg.style.left=parseInt(myImg.style.left)+shakeRector;
            myImg.src='MbImages/magic8ball_'+getRandomInteger()+'.png';
            break;
        case 3:
            myImg.style.top=parseInt(myImg.style.top)-shakeRector;
            myImg.src='MbImages/magic8ball_'+getRandomInteger()+'.png';
            break;
        default:
            myImg.style.left=parseInt(myImg.style.left)-shakeRector;
            myImg.src='MbImages/magic8ball_'+getRandomInteger()+'.png';
    }
    shakeDirection<4 ? shakeDirection++ : shakeDirection=1;
    setTimeout("displayImage()",50);        
        // if (shakeDirection==1){
        //     myImg.style.top=parseInt(myImg.style.top)+shakeRector;
        //     myImg.src='MbImages/magic8ball_'+getRandomInteger()+'.png';
        // } else if (shakeDirection==2){
        //     myImg.style.left=parseInt(myImg.style.left)+shakeRector;
        //     myImg.src='MbImages/magic8ball_'+getRandomInteger()+'.png';
        // } else if (shakeDirection==3){
        //     myImg.style.top=parseInt(myImg.style.top)-shakeRector;
        //     myImg.src='MbImages/magic8ball_'+getRandomInteger()+'.png';
        // } else{
        //     myImg.style.left=parseInt(myImg.style.left)-shakeRector;
        //     myImg.src='MbImages/magic8ball_'+getRandomInteger()+'.png';
        // }
 }

//question validation
function isInputValid(input){
    const questionRE = new RegExp(/(\w+\s\w+\s*)+\?/); //Min two words and a question mark
    if (questionRE.test(input)){
        return true;
    } else {
        throw 'Please enter a valid question...';        
    }
}