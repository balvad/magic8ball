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
    myImg.setAttribute('src', 'MbImages/magic8ball_start.png');
    myImg.setAttribute('height', '700');
    myImg.setAttribute('width', '700');
    myDiv2.appendChild(myImg);
    document.body.appendChild(myDiv2);
  }

function checkForEnterKey(element) {
    if (event.key === 'Enter') {
        displayRandomImage();
    }
}

function displayRandomImage() {
    //validate input
    let input = document.getElementById('askme').value;
    if (document.getElementById('askme').value.length<3) {
        document.getElementById('ErrorMsg').innerHTML='Too short. Enter again...';
        document.querySelector('img').src='MbImages/magic8ball_extra.png';
    } else {
        document.getElementById('ErrorMsg').innerHTML='';
        //display new image
        let myImg=document.querySelector('img');
        myImg.src='MbImages/magic8ball_'+getRandomInteger()+'.png';        
        //reset input
        document.getElementById('askme').value='';
    }
    document.getElementById('askme').focus();
}

function getRandomInteger() {
    return (Math.floor(Math.random()*20)+1);
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
