var accounts = [];

function createAccount(account){
	accounts.push(account);
	return account;
}

function getAccount(username){
	var mactchedAccount;

	accounts.forEach(function (account){
		if(account.username === username){
			matchedAccount = account;
		}

	});

	return matchedAccount;

}




function deposit(account, amount){
	account.balance += amount;	
}


function withdraw(account, amount){
	account.balance -= amount; 

}


function getBalance(account){
	return account.balance; 
}

var aviAccount= createAccount({
	username:'Avi',
	balance:0
});

deposit(aviAccount,100);
console.log(getBalance(aviAccount));
withdraw(aviAccount, 11);
console.log(getBalance(aviAccount));

var existingAccount = getAccount('Avi');

console.log(getBalance(aviAccount));

var jensAccount = createAccount({
	username:'jen001',
	balance:12

});

console.log(accounts);

var existingJensAccount = getAccount('jen001');
console.log(existingJensAccount);
