
/* klick variabler */
var click = 1;
var clickTotal = 0;
var Money = 0;
var factoryAmmount = 2;

/* I sekunden */
var MPS = 0;
var MPSR =0;

/* Shopen */
var smallstoreCost = 25;
var smallstoreCount = 0;
var smallstoreMPS = 0;
var smallstorePlus = 0.2;

var factoryCost = 50;
var factoryCount = 0;
var factoryMPS = 0;
var factoryPlus = 2;	

/* Updaterar spelet 10 gånger i sekunden */
function update() {
	/* Updaterar dina pengar och hur mycket dina klicks ger */
	document.getElementById("money").innerHTML = Money.toFixed(1) + " Money";
	document.getElementById("click").innerHTML = click.toFixed(1) + " Money per second";
	/* Updaterar priset och mängden för smallstore */
	document.getElementById("smallstoreCost").innerHTML = "Price: " + smallstoreCost.toFixed(1);
	document.getElementById("smallstoreCount").innerHTML = "How many: " + smallstoreCount.toFixed(1);
	/* Updaterar priset och mängden för factory */
	document.getElementById("factoryCost").innerHTML = "Price: " + factoryCost.toFixed(1);
	document.getElementById("factoryCount").innerHTML = "How many: " + factoryCount.toFixed(1);
	/* Updaterar din MPS */
	document.getElementById("MPS").innerHTML = MPS.toFixed(1) + " Money per second";
	/* Updaterar dina klick */
	document.getElementById("ClickTotal").innerHTML = clickTotal + " Amount of clicks made";

	document.getElementById("bankBalance").innerHTML = deposit + "$";

}
setInterval(update, 100)

/* Ditt klick value och hur många gånger du har klickat*/
function addClick() {
	Money = Money + click;
	clickTotal = clickTotal + 1;
	console.log("Ett klick");
	update()
}

/* Första föremålet i shopen */
function smallstore() {
	if (Money >= smallstoreCost) {
		Money = Money - smallstoreCost;
		smallstoreCost = smallstoreCost * 1.1;
		smallstoreCount = smallstoreCount + 1;
		smallstoreMPS = smallstoreMPS + smallstorePlus;

		MPSMaker()
	}
}

/* Andra föremålet i shopen */
function factory() {
	if (Money >= factoryCost) {
		Money = Money - factoryCost;

		factoryCost = factoryCost * 2;
		factoryCount = factoryCount + 1;
		factoryMPS = factoryCount * factoryPlus;

		MPSMaker()
	}
}

function factoryEffect() {
		Money = Money + MPS;
		update()
}

setInterval(factoryEffect, 1000)

/* upgraderingar */
function smallstoreUpgrade() {
	if (smallstoreCount >= 10 && Money >= 250) {
		Money = Money - 250;
		click = click * 2;
		var upgradeBlock = 1;
		update()
		if (upgradeBlock = 1) {
		document.getElementById("smallstoreClickUpgradering").style.display = "none";
		}
	}
}

function factoryUpgrade() {
	if (factoryCount >= 5 && Money >= 850) {
		Money = Money - 850;
		factoryMPS = factoryMPS * 2;
		var upgradeBlock = 1;
		MPSMaker()
		if (upgradeBlock = 1) {
		document.getElementById("factoryUpgradeButton").style.display = "none";
		}
	}
}

/* Läger ihop din MPS */
function MPSMaker() {
	MPS = factoryMPS + smallstoreMPS;
	update()
}
