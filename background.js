console.log("background activated")

chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab){
	let message = {
		txt:"monkeys"
	}
	console.log("i clicked the buttonClicked");
	console.log(tab);
	chrome.tabs.sendMessage(tab.id, message)
}