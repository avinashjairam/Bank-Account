var accounts = [];

function createAccount(account){
	accounts.push(account);
	return account;
}

function getAccount(username){
	var mactchedAccount;

	for(var i=0; i < accounts.length; i++){
	//accounts.forEach(function (account){
		if(accounts[i].username === username){
			matchedAccount = accounts[i];
		}

	//});
	}

	return matchedAccount;

}

function deposit(account, amount){
	if(typeof(amount)==="number"){
		account.balance += amount;	
	}
	else{
		//alert("error");
		console.log("error");
	}	
}


function withdraw(account, amount){
	if(typeof(amount)==="number"){
		account.balance -= amount; 
	}
	else{
		//alert("error");
		console.log(typeof(amount));
		console.log("error");
	}
}


function getBalance(account){
	return account.balance; 
}

function createBalanceGetter(account){
	return function(){
		return account.balance;
	}
}


var aviAccount = createAccount({
	username:'avi',
	balance:1000
});


console.log(getBalance(aviAccount));
console.log(getAccount('avi'));
deposit(aviAccount,300);
withdraw(aviAccount,50);
console.log(getBalance(aviAccount));


var avi2= getAccount('avi');
var aviBalance = createBalanceGetter(avi2);
console.log(aviBalance());

