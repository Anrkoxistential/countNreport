console.log("U good dawg")

let deleteButton= document.getElementsByClassName("T-I J-J5-Ji aFi T-I-ax7 ar7");
console.log("here the button: " + deleteButton.stringify)
count= 0;

deleteButton.onclick = function (){
	count += 1;
	console.log("buttonClicks: " + count)
}

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
	console.log(message.txt);
};