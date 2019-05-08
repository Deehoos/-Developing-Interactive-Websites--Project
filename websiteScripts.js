


function randomMessage() {
		var mssg1 = "We regret to inform you that bread prices are due to increase due to wheat shortages.";
		var mssg2 = "Celebrate with BestBred©2017 this Christmas!";
		var mssg3 = "20% discount on all bread as part of our 5th anniversary celebration!!";
		var mssg4 = "New products to be introduced soon!!";
		var mssg5 = "Get em' while they're nice and hot!";
		var mssg6 = "We use the freshest ingredients in town!";
		var mssg7 = "We're rated #1 again! Thank you for making this possible!";
		var mssg8 = "Delivery to your door-step will be availabe soon."; 
				
		var roll = Math.floor(Math.random() * (8 - 1)) + 1;		
		
		if(roll == 1) {document.getElementById("pageMessage").innerHTML=mssg1;}
		if(roll == 2) {document.getElementById("pageMessage").innerHTML=mssg2;}
		if(roll == 3) {document.getElementById("pageMessage").innerHTML=mssg3;}
		if(roll == 4) {document.getElementById("pageMessage").innerHTML=mssg4;}
		if(roll == 5) {document.getElementById("pageMessage").innerHTML=mssg5;}
		if(roll == 6) {document.getElementById("pageMessage").innerHTML=mssg6;}
		if(roll == 7) {document.getElementById("pageMessage").innerHTML=mssg7;}
		if(roll == 8) {document.getElementById("pageMessage").innerHTML=mssg8;}	
	}
	
	function couponValid() {
		//couponIsValid = label id
		//couponField = textfield id
		var validCoupons = ["supersale5", "wowamazing", "howdidyouknow"];
		
		
		var couponTextField = document.getElementById("couponTextField");
		var couponValidLabel = document.getElementById("couponLabel");
		couponValidLabel.style.color = "red";
		var counter=0;
		var foundMatch = false;
		
		while (foundMatch == false && counter < validCoupons.length)
		{
			console.log(couponTextField.value + " compared with " + validCoupons[counter]);
			
			if(couponTextField.value == validCoupons[counter])
			{
				console.log("found a match!");
				couponValidLabel.textContent = "That coupon is valid!";
				couponValidLabel.style.color = "green";
				
				applyDiscount();			
				foundMatch = true;		
			}
			counter++;			
		}
		
		if(counter == validCoupons.length)
		{
			couponValidLabel.textContent = "That coupon is invalid";
			
			//remove discounts that were there
			location.reload();	
		}
		
	}
	
	function removeDiscount() {
		var totalPrices_get = JSON.parse(localStorage.getItem("fruit_totalPrices"));
		var table= document.getElementById("t1");
		var numRows = document.getElementById("t1").rows.length;
		
		for(i=1; i<numRows; i++) //Math.round(num * 100) / 100
		{
			var number = totalPrices_get[i-1];
			number = Math.round(number * 100) / 100;
			
			if(i < (numRows) && totalPrices_get[i-1] != null)
			{
				table.rows[i].cells[3].innerHTML = number;
			} 			
		}
		
		
	}

	function applyDiscount() {
		//localStorage.clear();
		var table = document.getElementById('t1');
		//table.rows[3].cells[1].innerHTML = '<del>' + table.rows[3].cells[1].innerHTML + '</del>';
		
		//get the number of products
		var numRows = document.getElementById('t1').rows.length;
		
		for(i=1; i<numRows; i++) //Math.round(num * 100) / 100
		{
			
			
			var number = table.rows[i].cells[3].innerHTML;
			
			var testParse = parseInt(number) || 0;
			console.log("testParse is " + testParse + " meaning the discount was already applied!");
			
			if(testParse != 0)
			{
				number = Math.round(number * 100) / 100;
				var discountedNumber = (number*0.9).toFixed(2);
				if(i < (numRows-1))
				{
					table.rows[i].cells[3].innerHTML = "<s style='color:red; font-size:15px;'>" + number + "</s>" + " <span style='color:green; font-weight:bold; font-size:21px;'>" + discountedNumber + "</span>";
				} 			
				
				if(i == (numRows-1))
				{
					table.rows[i].cells[3].innerHTML = "<s style='color:black; font-size:15px;'>" + number + "</s>" + " <span style='color:black; font-weight:bold; font-size:21px;'>" + discountedNumber + "</span>";
				}
			}
			
			
		}
	}
	
	
	function modal(productNumber) {
		console.log("In modal function");
		console.log("productNumber: " + productNumber);
		// Get the modal
		var modal = document.getElementById('myModal' + productNumber);
		console.log("Looking for modal: " + productNumber);
		
		// Get the button that opens the modal
		var btn = document.getElementById("product" + productNumber);
		console.log("Looking for element with id: product" + productNumber);
		
		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];
		var spans = document.getElementById("close" + productNumber);
		
		modal.style.display = "block";
			console.log("trying to display modal");
		// When the user clicks on the button, open the modal 
		btn.onclick = function() {
			modal.style.display = "block";
			console.log("trying to display modal");
		}
		

		// When the user clicks on <span> (x), close the modal
		spans.onclick = function() {
			modal.style.display = "none";
			console.log("Closing modal after pressing X");
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
				console.log("Closing modal after pressing outside modal");
			}
		}
	}
	
	
	function showModal(fruitNumber) {
		// Get the modal
			var modal = document.getElementById('myModal' + fruitNumber);

			// Get the button that opens the modal
			//var btn = document.getElementById("fruit1_showBuy");
			var btn = document.getElementById("fruit" + fruitNumber + "_showBuy");
			var btn2 = document.getElementById("fruit" + fruitNumber + "_addToCart");
			
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close" + fruitNumber)[0];
			//var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 
			btn.onclick = function() {
				modal.style.display = "block";
				console.log("buy modal window for fruit number: " + fruitNumber + " has opened");
			}
			
			btn2.onclick = function() {
				modal.style.display = "none";
			}

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
				modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
				if (event.target == modal) {
					modal.style.display = "none";
				}
			}
	}
	
	function showModalFromSearch(fruitNumber) {
		// Get the modal
			var modal = document.getElementById('myModal' + fruitNumber);

			// Get the button that opens the modal
			//var btn = document.getElementById("fruit1_showBuy");
			var btn = document.getElementById("searchButton");
			var btn2 = document.getElementById("fruit" + fruitNumber + "_addToCart");
			
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close" + fruitNumber)[0];
			//var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 
			btn.onclick = function() {
				modal.style.display = "block";
				console.log("buy modal window for fruit number: " + fruitNumber + " has opened");
			}
			
			btn2.onclick = function() {
				modal.style.display = "none";
			}

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
				modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
				if (event.target == modal) {
					modal.style.display = "none";
				}
			}
	}

	
	function showModalLoading(fruitNumber) {
			
			

			// Get the modal
			var modal = document.getElementById('myModalLoading' + fruitNumber);
			
			
		
			// Get the button that opens the modal
			var btn = document.getElementById("fruit" + fruitNumber + "_addToCart");

			// When the user clicks the button, open the modal 
			btn.onclick = function() {
				modal.style.display = "block";
				console.log("Modal loading module has opened.");
				
				var myVar = setInterval(timerCloser, 1000);
				
				function timerCloser() {
    
					//var modal = document.getElementById('myModalLoading');
					modal.style.display = "none";
					console.log("Modal loading module has now closed.");
					
					var mainModal = document.getElementById('myModal' + fruitNumber);
					mainModal.style.display = "none";
					clearInterval(myVar);
					console.log("Modal loading module has closed");
					
					console.log("Attempting to add item to cart");
					try {
						add_toCart(fruitNumber);
						console.log("Item added to cart!");
					}
					catch(err) {
						console.log(err.message);
						console.log("Item # " + fruitNumber + " could not be added to the cart!");
					}
					
					
				}
			}
			
			//timerCloser();
			
	}
	
	function searchBarBuy()
	{
		var getSearchBar = document.getElementById("searchBar");
		//var itemSelected = getSearchBar.options[getSearchBar.selectedIndex].text; 
			//console.log("itemSelected: " + itemSelected);
		//var itemNumber = getSearchBar.options[getSearchBar.selectedIndex].value + 1;
			//console.log("itemNumber: " + itemNumber);
		//return itemSelected;
		
		var item = getSearchBar.value;
		console.log("item: " + item);

		var itemNum;
		/*<option value="Apple">
		<option value="Apricot">
		<option value="Banana">
		<option value="Black Currant">
		<option value="Blueberry">
		<option value="Cripps Red Apples">
		<option value="Givvo Large Limes">
		<option value="Givvo Small Thai Watermelon">
		<option value="Golden Pears">
		<option value="Granny Smith Apples">
		<option value="Kiwi Fruit">
		<option value="Lemons">
		<option value="Grapes">*/
		
		switch(item) {
			case item=="Apple":
			itemNum=1; 
			break;
					
		}
		
		showModalFromSearch(itemNum);
	showModalLoading(itemNum);
	}

	
	function startup() {
		randomMessage();
		populate_menuUpperRight();
		
	}
	
	function populate_menuUpperRight() {
		//check if user is logged in
		//if so, check permissionLevel
		//when done, populate accordingly
		
		//permissionLevel 0: "login/register" [guest]
		//permissionLevel 1: "my cart/account/logout" [registeredUser]
		//permissionLevel 2: "account panel/logout" [Administrator]
		//For added measure, if someone finds the account panel link, add an extra check feature
		//for the page wherein if the required permission level is not met, redirect to:
		//"You do not have permission to view that page" page
		
		 var table;
	 	 var cell1;
	 	 var cell2;
		 var cell3;
		 var cell4;
		 var cell5;
		 var cell6;
		 var cell7;
		 table=document.getElementById("menu");
		 var row=table.insertRow(0);
	   	   
	    var currentUsername = JSON.parse(localStorage.getItem("currentUsername"));
		var currentPermissionLevel = JSON.parse(localStorage.getItem("currentPermissionLevel"));
		
		if(currentPermissionLevel == null)
		{currentPermissionLevel=0;}
		
		var levelDescription;
		
		/////////////////////////////////
		//"Welcome, guest"
		if(currentPermissionLevel == 0)
		{levelDescription="guest";	 
		 
	     cell1=row.insertCell(0);
		 cell2=row.insertCell(1);
		 cell3=row.insertCell(2);		
		 cell4=row.insertCell(3);
	     cell5=row.insertCell(4);
	
	     cell1.innerHTML = "Welcome, " + levelDescription;
		 cell1.width="15%";
		 cell2.innerHTML = "";
		 cell2.width="85%";
		 cell3.innerHTML = cell3.innerHTML + "<a href='login.html' class='menuBlendd'>Login</a>";
		 cell4.innerHTML = "|"; 
		 cell5.innerHTML = cell5.innerHTML + "<a href='register.html' class='menuBlendd'>Register</a>";		 
		 }
	    
		/////////////////////////////////
		//"Welcome registered user, x"
		if(currentPermissionLevel == 1)
		{levelDescription="registered user";
			
		 cell1=row.insertCell(0);
		 cell2=row.insertCell(1);
		 cell3=row.insertCell(2);		
		 cell4=row.insertCell(3);
	     cell5=row.insertCell(4);
		 cell6=row.insertCell(5);
		 cell7=row.insertCell(6);
			
		 cell1.innerHTML = "Welcome, " + levelDescription + " " + currentUsername + "!";
		 cell1.width="15%";
		 cell2.innerHTML = "";
		 cell2.width="72%";
		 cell3.innerHTML = cell3.innerHTML + "<a href='cart.html' class='menuBlendd'>My Cart</a>";
		 cell4.innerHTML = "|"; 
		 cell5.innerHTML = cell5.innerHTML + "<a href='account.html' class='menuBlendd'>Account</a>";
		 cell6.innerHTML = "|"; 
		 cell7.innerHTML = cell7.innerHTML + "<a onclick='logout()' class='menuBlendd'>Logout</a>";
		 }
	    
		/////////////////////////////////
	    //"Welcome, admin"
		if(currentPermissionLevel == 2)
		{levelDescription="admin";
		 
		 cell1=row.insertCell(0);
		 cell2=row.insertCell(1);
		 cell3=row.insertCell(2);		
		 cell4=row.insertCell(3);
	     cell5=row.insertCell(4);	
		 
	     cell1.innerHTML = "Welcome, " + levelDescription;
		 cell1.width="15%";
		 cell2.innerHTML = "";
		 cell2.width="85%";
		 cell3.innerHTML = cell3.innerHTML + "<a href='accounts.html' class='menuBlendd'>AccountPanel</a>";
		 cell4.innerHTML = "|"; 
		 cell5.innerHTML = cell5.innerHTML + "<a onclick='logout()' class='menuBlendd'>Logout</a>";	    
		}
	}
	

	function getUser() {
		var username = JSON.parse(localStorage.getItem("currentUsername"));
		
		if(username == "" || username == null)
		{
			username = guest;
			return username;
		}
		
		return username;
	}
	
	

	function showUser() {
		console.log("running showUser() routine");
		
		var username = JSON.parse(localStorage.getItem("currentUsername"));
		//var password = document.getElementById("password").value;
		
		document.getElementById("displayUsername").textContent = username; 
		console.log("got current user: " + username);
	}

	function showUserCheckout() {
		//checkingOutName
		
		console.log("running showUserCheckout() routine");
		
		var username = JSON.parse(localStorage.getItem("currentUsername"));
		//var password = document.getElementById("password").value;
		
		document.getElementById("checkingOutName").textContent = username; 
		console.log("got current user: " + username);
	}


	
	function matchAccount() {
		
		console.log("checking login credentials...");
	    var targetFound = false;
		var accountsChecked = 0;
		
		//retrieval of the data from the form-->
		
		var username = document.getElementById("username").value;
		var password = document.getElementById("password").value;
		
		console.log("Current username: " + username);
		console.log("Current password: " + password);
		
		//var email = document.getElementById("email").value;
		//later add in function for email/username for login, match with password

		var usernames_get = JSON.parse(localStorage.getItem("usernames"));	
		var passwords_get = JSON.parse(localStorage.getItem("passwords"));
		var permissionLevels_get = JSON.parse(localStorage.getItem("permissionLevels"));
		
		
		//this is needed in case there is nothing in the localStorage.getItem thingy-->
		//the array will not be made and none of this will work properly.-->
		if(usernames_get == null)
		{			
			var usernames_get = [];			
			var passwords_get = [];
			var permissionLevels_get = [];
			
			//If there are no accounts, we should add the administrative account for good measure.
			
			usernames_get[0] = "admin";
			passwords_get[0] = "admin*pw";
			permissionLevels_get[0] = "2";
		}
		
		//loop will end if target is found or for statements finishes with no matches-->
		//the 2nd statement, accountsChecked is needed because of the first which.-->
		//Without it, the while statement will not end if there are no matches.-->
		//Without the while statement, the for statement will continue to check the other-->
		//entries despite having already found a match. That's wasted computational power.-->
		
			for(i=0;i<usernames_get.length;i++)
			{		
				if( (usernames_get[i].localeCompare(username) == 0) && (passwords_get[i].localeCompare(password) == 0) ) // pair matched 
				{
					console.log("Found the target.");
					window.location = 'home.html';
					targetFound = true;
					
					
					//current username, password and permission level established.
					localStorage.setItem('currentUsername', JSON.stringify(usernames_get[i]));
					localStorage.setItem('currentPassword', JSON.stringify(passwords_get[i]));
					localStorage.setItem('currentPermissionLevel', JSON.stringify(permissionLevels_get[i]));
					
					console.log("Entered username: " + usernames_get[i]);
					console.log("Entered password: " + passwords_get[i]);
				}
							
				accountsChecked++;
			};
				
		accountsChecked=0; //reset back
		return false;
	}
	
	//add currentID
	function logout() {
		localStorage.setItem('currentUsername', JSON.stringify("guest"));
		localStorage.setItem('currentPassword', JSON.stringify(""));
		localStorage.setItem('currentPermissionLevel', JSON.stringify(0));
		location.reload();
	}
	
	function todayDate()
	{
		var date = new Date();
		year=date.getFullYear();
		month=date.getMonth();
		month=parseInt(month+1);
		day=date.getDate();
		hours=date.getHours();
		mins=date.getMinutes();
		completeDate="Today is " + day + "/" + month + "/" + year; 
		
		return completeDate;		
		var test=hello;		
	}
	
	
	function loadAccounts() {	    
		var table;
			
		var cell1;			
		var cell2;
		var cell3;
		var cell4;
		var cell5;
		var cell6;
		var cell7;
		var cell8;
		var cell9;
			     		
	    var total_rowNUM = 1;		
	
	    var firstNames_get = JSON.parse(localStorage.getItem("firstNames"));
		var lastNames_get = JSON.parse(localStorage.getItem("lastNames"));
		var genders_get = JSON.parse(localStorage.getItem("genders"));
		var usernames_get = JSON.parse(localStorage.getItem("usernames"));
		var emails_get = JSON.parse(localStorage.getItem("emails"));
		var passwords_get = JSON.parse(localStorage.getItem("passwords"));
		var numbers_get = JSON.parse(localStorage.getItem("numbers"));
		var permissionLevels_get = JSON.parse(localStorage.getItem("permissionLevels"));
		var ids_get = JSON.parse(localStorage.getItem("ids"));
				
		for(i=0; i<firstNames_get.length; i++)
		{

			if(firstNames_get[i] != null) 
			{
				total_rowNUM++;
				table=document.getElementById("t1");
				var row=table.insertRow(1);
				cell1=row.insertCell(0);
				cell2=row.insertCell(1);
				cell3=row.insertCell(2);
				cell4=row.insertCell(3);
				cell5=row.insertCell(4);
				cell6=row.insertCell(5);
				cell7=row.insertCell(6);
				cell8=row.insertCell(7);
				cell9=row.insertCell(8);
				
				
				
				cell1.innerHTML = firstNames_get[i];
				cell2.innerHTML = lastNames_get[i];
				cell3.innerHTML = genders_get[i];
				cell4.innerHTML = usernames_get[i];
				cell5.innerHTML = emails_get[i];
				cell6.innerHTML = passwords_get[i];
				cell7.innerHTML = numbers_get[i];
				cell8.innerHTML = permissionLevels_get[i];
				cell9.innerHTML = ids_get[i];
				
			}
		};
}
	
	
function register() {
		
		//<!--retrieval of the data from the form-->
		var firstName = document.getElementById("firstName").value;
		var lastName = document.getElementById("lastName").value;
		var gender = document.getElementById("gender").value;
		var username = document.getElementById("username").value;
		var email = document.getElementById("email").value;
		var password = document.getElementById("password").value;
		var number = document.getElementById("number").value;
		var permissionLevel = 1; //default permission level for registered user-->
		var id = 0;
		
		console.log("First name: " + firstName);
		console.log("Last name: " + lastName);
		console.log("gender: " + gender);
		console.log("username: " + username);
		console.log("email: " + email);
		console.log("password: " + password);
		console.log("number: " + number);
		console.log("permissionLevel: " + permissionLevel);
		console.log("id: " + id);
		
		//<!--total # of users must be determined, including de-facto admin: [user 0] account-->
		//<!--for: userID, best to declare it after firstNames_get array has been loaded in. In-case firstNames_get is null,-->
		//<!-- it will be placed AFTER the if(firstNames_get == null) so that userID cannot be null if there are no users, preventing program stalling-->
	
		//<!--creation of main array. Why are there two arrays namely the x and x_get ones?-->
		//<!--this is because we load the localStorage data into the x_get arrays first-->
		//<!--then we load that into the x arrays where the data from the form is then appended!-->
		var firstNames = [];
		var lastNames = [];
		var genders = [];
		var usernames = [];
		var emails = [];
		var passwords = [];
		var numbers = [];
		var permissionLevels = [];
		var ids = [];
		
		//<!--This is where localStorage data is loaded in-->
		var firstNames_get = JSON.parse(localStorage.getItem("firstNames"));
		var lastNames_get = JSON.parse(localStorage.getItem("lastNames"));
		var genders_get = JSON.parse(localStorage.getItem("genders"));
		var usernames_get = JSON.parse(localStorage.getItem("usernames"));
		var emails_get = JSON.parse(localStorage.getItem("emails"));
		var passwords_get = JSON.parse(localStorage.getItem("passwords"));
		var numbers_get = JSON.parse(localStorage.getItem("numbers"));
		var permissionLevels_get = JSON.parse(localStorage.getItem("permissionLevels"));
		var ids_get = JSON.parse(localStorage.getItem("ids"));
		
		//this is needed in case there is nothing in the localStorage.getItem thingy-->
		//<!--the array will not be made and none of this will work properly.-->
		if(firstNames_get == null)
		{
			var firstNames_get = [];
			var lastNames_get = [];
			var genders_get = [];
			var usernames_get = [];
			var emails_get = [];
			var passwords_get = [];
			var numbers_get = [];
			var permissionLevels_get = [];
			var ids_get = [];
			
			//<!--Setting master control account. This is especially important on new computers-->
			//<!--where this account has not been made yet!-->
			
		}
		
		    
		
		    firstNames_get[0] = "guest";
			lastNames_get[0] = "N/A";
			genders_get[0] = "N/A";
			usernames_get[0] = "guest"; //<!-- this will be blacklisted in the user list so that you cannot log in with it!!-->
			emails_get[0] = "N/A";
			passwords_get[0] = "N/A";
			numbers_get[0] = "N/A";
			permissionLevels_get[0] = "0"; 
			ids_get[0] = "0"; 
		
			firstNames_get[1] = "admin";
			lastNames_get[1] = "N/A";
			genders_get[1] = "Male";
			usernames_get[1] = "admin";
			emails_get[1] = "dhughes@hughesnet.org";
			passwords_get[1] = "admin*pw2";
			numbers_get[1] = "0000000";
			permissionLevels_get[1] = "2"; 
			ids_get[1] = "1";// <!-- master ID-->
		
		
			//<!--counting number of users is now possible-->
		    userID = firstNames_get.length; 
		
		//<!--PERMISSION LEVELS-->
		//<!--LEVEL 0: GUEST-->
		//<!--LEVEL 1: REGISTERED USER-->
		//<!--LEVEL 1-2: REGISTERED PREMIUM USER-->
		//<!--LEVEL 2: ADMIN-->
		
		
		
		for(i=0; i<firstNames_get.length; i++)
		{		
			firstNames[i] = firstNames_get[i];
			lastNames[i] = lastNames_get[i];
			genders[i] = genders_get[i];
			usernames[i] = usernames_get[i];
			emails[i] = emails_get[i];
			passwords[i] = passwords_get[i];
			numbers[i] = numbers_get[i];
			permissionLevels[i] = permissionLevels_get[i];
			ids[i] = ids_get[i];
		};
		
		//EXP 01 HERE
		//
		var usernameCheck = false;
		var emailCheck = false;
			
		/*while(usernameCheck != true && emailCheck != true) 
		{
			//Check if username and email are already taken before adding it to accounts listing
			for(i=0;i<firstNames.length;i++)
			{
				if(usernames[i].localeCompare(username) == 0)
				{
					//redraw register form w/ all data
					
					
					
					
					//draw warning username already taken
					document.getElementById("registerUsername_taken").innerHTML = "The username you have entered is taken.";
				}
				
				else if(usernames[i].localeCompare(username) == 1){
					//draw warning username not taken
					document.getElementById("registerUsername_available").innerHTML = "Username available!";
					usernameCheck = true;
				}
				
				if(emails[i].localeCompare(email) == 0)
				{
					//draw warning email already taken
					document.getElementById("registerEmail_taken").innerHTML = "The email you have entered is taken.";
				}
				
				else if (emails[i].localeCompare(email) == 1){
					//draw warning email not taken
					document.getElementById("registerEmail_available").innerHTML = "Email available!";
					emailCheck = true;
				}
			};
		}*/
		
		//<!--the entry from the register form will be appended to the end of the array here.-->
		firstNames[i] = firstName;
		lastNames[i] = lastName;
		genders[i] = gender;
		usernames[i] = username;
		emails[i] = email;
		passwords[i] = password;
		numbers[i] = number;
		permissionLevels[i] = permissionLevel;
		ids[i] = id;
	
		localStorage.setItem("firstNames", JSON.stringify(firstNames));
		localStorage.setItem("lastNames", JSON.stringify(lastNames));
		localStorage.setItem("genders", JSON.stringify(genders));
		localStorage.setItem("usernames", JSON.stringify(usernames));
		localStorage.setItem("emails", JSON.stringify(emails));
		localStorage.setItem("passwords", JSON.stringify(passwords));
		localStorage.setItem("numbers", JSON.stringify(numbers));
		localStorage.setItem("permissionLevels", JSON.stringify(permissionLevels));
		localStorage.setItem("ids", JSON.stringify(ids));
		
		matchAccount();
		//location.reload();
		
		
		//loginAfterRegister();
		
	}
	
	function loginAfterRegister()
	{		
		document.getElementById("username").value = username;
		document.getElementById("password").value = password;
		console.log("Logging in after registering");
		matchAccount();
	}
	
	/////////////////////////////
	//FORM VALIDATION FUNCTIONS//
	/////////////////////////////
	
	
	//add spacing detection
	function alphanumeric(givenID) { 
	var input = document.getElementById(givenID).value;
	  var letters = /^[0-9a-zA-Z]+$/;
	  if (letters.test(input)){
		return true;
	  } else {
		alert('Please input alphanumeric characters only.');
		return false;
	  }
	}
	
	function numeric(givenID) { 
	  var input = document.getElementById(givenID).value;
	  var letters = /^[0-9]+$/;
	  if (letters.test(input)){
		return true;
	  } else {
		alert('Please input numbers only.');
		return false;
	  }
	}
	
	function dateCheck(givenID) {
		var input = document.getElementById(givenID).value;
		<!--let's not bug the user if it's empty. They will be notified upon clicking submit.-->
		if(input != null && input.length<10 && input != "")
		{
			alert('The date must be 10 characters long. MM/DD/YYYY format, 2 for month, 2 for day, 4 for year and 2 for the slashes.');
			return false;
		}	
		
        var letters = /^[0-9/]+$/;
		if (letters.test(input) && input.includes("/")){
		return true;}
		else {
		alert("Please enter the appropriate values. Edit it so that there are no M's, D's or Y's!");
		return false;
		}
		
			
	}
	
	function emailValidation(givenID) {
		
		var input = document.getElementById(givenID).value;
		if(input.includes("@") == false)
		{
			alert("The '@' character is required.");	
			return false;
		}
		
		if(input.includes(".") == false)
		{
			alert("The '.' character is required.");	
			return false;
		}
		
		var letters = /^[0-9a-zA-Z@.]+$/;
		if (letters.test(input) && input.includes("@")){
		return true;}
		else {
		alert("Only letters, numbers and the characters '@' and '.' are allowed in the email address field.");
		return false;
		}
	}
	
	function ccvCheck(givenID) {
	
		var input = document.getElementById(givenID).value;
		if(input != null && input != "" && input.length<3)
		{
			alert('CCV should be 3 digits long.');
			return false;
		}	
	
		var letters = /^[0-9]+$/;
		if (letters.test(input) && input.length==3){
		return true;}
		else {
		alert("Only numbers are allowed here. CCV should be 3 digits long.");
		return false;
		}
		
		
	}
	
	function nameCheck(givenID) {
		var input = document.getElementById(givenID).value;
		console.log(input);
		var letters = /^[a-zA-Z ]+$/;
		if (letters.test(input)){
		return true;}
		else {
		alert("Your name should have letters only.");
		return false;
		}
	}
	
	
	function creditCardValidation(givenID) {
		var input = document.getElementById(givenID).value;
		var letters = /^[0-9]+$/;
		if (letters.test(input)){
		return true;}
		else {
		alert("Numbers only.");
		}
		
		if(input != null && input.length<16)
		{
			alert('Credit card must be at least 16 digits long');
			return false;
		}
		
		if(input != null && input.length<=19 && input.length>=16)
		{
			return true;
		}	
		
		
	}
		
	function populate_menuUpperRight() {
		
	}
	
	
	
		
	



/*CART*/


function loadAll_functions()
	{
		    startup();
			loadStorage();		
	}

	function loadStorage() {	    
		var table;
			
		var cell1;			
		var cell2;
		var cell3;
		var cell4;
		var cell5;

			     		
	    var total_rowNUM = 1;
		var total_quantity = 0;
		var total_totalPrice = 0;
	
	    var names_get = JSON.parse(localStorage.getItem("fruitNames"));
		var quantities_get = JSON.parse(localStorage.getItem("fruitQuantities"));
		var totalPrices_get = JSON.parse(localStorage.getItem("fruit_totalPrices"));
		
for(i=0; i<names_get.length; i++)
{

	if( names_get[i] != null) 
	{
		total_rowNUM++;
		table=document.getElementById("t1");
		var row=table.insertRow(1);
		cell1=row.insertCell(0);
		cell2=row.insertCell(1);
		cell3=row.insertCell(2);
		cell4=row.insertCell(3);
		cell5=row.insertCell(4);
		
		//example: cell1.innerHTML="<img src='img/products/apple.png' alt='hello'/>";
		cell1.innerHTML="<img style='padding-left:30px;' width='80px' height='80px' src='img/products/" + names_get[i] + ".png" + "' />";
		cell2.innerHTML = names_get[i];
		cell3.innerHTML = quantities_get[i];
		
		
		//Math.round(num * 100) / 100
		cell4.innerHTML = Math.round(totalPrices_get[i] * 100) / 100;
		cell5.innerHTML = cell5.innerHTML + "<input type='button' " + "id=" + "button" + i + "  onclick='removeRow(" + i + ")' value='X'>";
		
		
     
		
		
		total_quantity+=parseInt(quantities_get[i]);
		total_totalPrice+=parseInt(totalPrices_get[i]);
	}
};

<!-- Add Grand Total row, it's simpler to modify its values here... -->

table=document.getElementById("t1");
row=table.insertRow(total_rowNUM);


cell1=row.insertCell(0);
cell2=row.insertCell(1);
cell3=row.insertCell(2);
cell4=row.insertCell(3);
cell5=row.insertCell(4);

cell1.innerHTML = "<img style='padding-left:35px;' width='70px' height='70px' src='img/grandTotal.png' />";
cell2.innerHTML = "Grand Total";
cell3.innerHTML = total_quantity;
cell4.innerHTML = total_totalPrice; 
cell5.innerHTML = "";

row.style.background="#1FA51C";




	
}
	
function removeRow(a)
{
	<!-- update array --> 
	var fruitNames = [];
	var fruitQuantities = [];
	var fruit_totalPrices = [];
	
	var names_update = JSON.parse(localStorage.getItem("fruitNames"));
	var quantities_update = JSON.parse(localStorage.getItem("fruitQuantities"));
	var totalPrices_update = JSON.parse(localStorage.getItem("fruit_totalPrices"));
	
	names_update[a] = null;
	quantities_update[a] = 0;
	totalPrices_update[a] = 0;
	
	localStorage.setItem("fruitNames", JSON.stringify(names_update));
	localStorage.setItem("fruitQuantities", JSON.stringify(quantities_update));
	localStorage.setItem("fruit_totalPrices", JSON.stringify(totalPrices_update));
	
	<!-- refresh page, thereby starting from the body again and running loadStorage() again with the updated array ;) -->
	location.reload();	
}







/**********/
/*checkout*/
/**********/

function entriesCheck()
	{
		
		
			
		//credit card, delivery and terms of service not selected
		if(document.getElementById("card_1").checked == false && document.getElementById("card_2").checked == false && document.getElementById("card_3").checked == false && document.getElementById("card_4").checked == false
		&& document.getElementById("delivery_1").checked == false && document.getElementById("delivery_2").checked == false && document.getElementById("termsOfservice").checked == false)
		{
			alert("Credit Card and delivery options not selected. Terms of Service not accepted. Please tick the appropriate boxes.");
			return false;
		}
		
		//credit card, delivery
		if(document.getElementById("card_1").checked == false && document.getElementById("card_2").checked == false && document.getElementById("card_3").checked == false && document.getElementById("card_4").checked == false
		&& document.getElementById("delivery_1").checked == false && document.getElementById("delivery_2").checked == false)
		{
			alert("Credit Card and delivery options not selected. Please tick the appropriate boxes.");
			return false;
		}
		
		//only credit card option not selected
		if(document.getElementById("card_1").checked == false && document.getElementById("card_2").checked == false && document.getElementById("card_3").checked == false && document.getElementById("card_4").checked == false)
		{
			alert("Credit Card option must be selected. Cash on delivery/pay on retrieval is not supported by our company.");
			return false;
		} 
		
		//only delivery option not selected
		if(document.getElementById("delivery_1").checked == false && document.getElementById("delivery_2").checked == false)
		{
			alert("Delivery option must be selected.");
			return false;
		} 
		
		//only terms of service option not selected
		if(document.getElementById("termsOfservice").checked == false)
		{
			alert("You must accept our terms of service to continue.");
			return false;
		} 
		
		//full text-box form check
		return creditCardValidation(document.getElementById("cardNumber").value);
		return alphanumeric(document.getElementById("firstName").value);
		return alphanumeric(document.getElementById("lastName").value);
		//no check here needed for organization
		return emailValidation(document.getElementById("email").value);
		//no check here needed for country
		
		return creditCardValidation(document.getElementById("cardNumber").value);
		return dateCheck(document.getElementById("expirationDate").value);
		return ccvCheck(document.getElementById("ccv").value);
		return alphanumeric(document.getElementById("cardHolderName").value);
		
		/////////////////////////////////////
		//full text-box form check complete//
		/////////////////////////////////////
		
		
		
		////////////////////////////
		//full form check complete//
		////////////////////////////
	}
	


	function checkout()
	{
		if(entriesCheck() == false)
		{
			return false;
		}
		
		this.window.open('ThankYou.html');
		
	
		localStorage.removeItem("breadNames");
		localStorage.removeItem("breadQuantities");
		localStorage.removeItem("bread_totalPrices");
	}

	function checkout_As()
	{
		var currentUsername = JSON.parse(localStorage.getItem("currentUsername"));
		
		if(currentUsername == null || currentUsername == "")
		{currentUsername = "Guest";}
		
		document.getElementById("checkoutName").innerHTML = "Checking out as " + currentUsername; 
	}
	
	function checkbox_patrolDelivery(checkboxNo)
	{
		document.getElementById("delivery_1").checked = false;
		document.getElementById("delivery_2").checked = false;
		
		document.getElementById("delivery_" + checkboxNo).checked = true;
	}
	
	
	function checkbox_patrolCardType(checkboxNo)
	{
		document.getElementById("card_1").checked = false;
		document.getElementById("card_2").checked = false;
		document.getElementById("card_3").checked = false;
		document.getElementById("card_4").checked = false;
		
		document.getElementById("card_" + checkboxNo).checked = true;
	}
	
	function checkout_startup()
	{
		startup();
		checkout_As();
		autofill_accountInfo();
		loadStorage();
	}
	
	function autofill_accountInfo()
	{
		var currentUsername = JSON.parse(localStorage.getItem("currentUsername"));
	
		if(currentUsername == null || currentUsername == "")
		{currentUsername = "Guest";}
	
		<!--If the current user is not a guest, then auto-fill logged in user's account info-->
		if(currentUsername != "Guest" )
		{			
			var firstNames_get = JSON.parse(localStorage.getItem("firstNames"));
			var lastNames_get = JSON.parse(localStorage.getItem("lastNames"));
			var emails_get = JSON.parse(localStorage.getItem("emails"));
			var usernames_get = JSON.parse(localStorage.getItem("usernames"));

			<!--Search entire user localStorage for a match 
			var matchFound = false;
			
			<!--Let's not waste unnecessary computing power. If a match is found, we exit the loop immediately-->
			while(matchFound != true)
			{
				for(i=0; i<firstNames_get.length;i++)
				{
					<!--Matching account information found-->
					if(usernames_get[i].localeCompare(currentUsername) == 0)
					{
						<!--Auto-fill account information textboxes!-->
						document.getElementById("firstName").value = firstNames_get[i];
						document.getElementById("lastName").value = lastNames_get[i];
						document.getElementById("email").value = emails_get[i];
						
						
						<!--EXIT LOOP-->
						matchFound = true;
					}
				};
			}
			
			
		}
		
	}
	
	
	
	
	/*checkout*/
	
	//<li class="navigationTop"><a href="login.html" style="color:white;" class="navigationTop">Log in</a></li>
	function setupUserbar() {
		console.log("Setting up user bar...");
		//check the permission level of the logged in user
		//1. if guest, Register/Login [permission level 0]
		//2. if regular user, Logout [permission level 1]
		//3. if administrator, ControlPanel/Accounts/Logout [permission level 2]
		
		var currentUsername = JSON.parse(localStorage.getItem("currentUsername"));
		var currentPermissionLevel = JSON.parse(localStorage.getItem("currentPermissionLevel"));

		console.log("The current permission level is for user: " + currentUsername + " is " + currentPermissionLevel);
		
		
		//Make the controls and call them if necessary
		var userbar = document.getElementById("navigationTop");
		var register = document.createElement("list");
		
		if (currentPermissionLevel == "0" || "null")
		{
			userbar.innerHTML = "";
			userbar.innerHTML =  userbar.innerHTML 
			+ "<li class='navigationTop'><a href='login.html' style='color:white;' class='navigationTop'>Log in</a></li>" 
			+ "<li class='navigationTop'><a href='register.html' style='color:white;' class='navigationTop'>Register</a></li>";			
		}
		
		if (currentPermissionLevel == "1") 
		{			
			userbar.innerHTML = "";
			userbar.innerHTML = userbar.innerHTML 
			+ "<li class='navigationTop'><a onclick='logout()' style='color:white;' class='navigationTop'>Log Out</a></li>"
			+ "<li class='navigationTop'><a href='myaccount.html' style='color:white;' class='navigationTop'>My Account</a></li>";
		}
		
		if (currentPermissionLevel == "2")
		{
			userbar.innerHTML = "";
			userbar.innerHTML =  userbar.innerHTML 
			//localStorage.clear();
			+ "<li class='navigationTop'><a onclick='localStorage.clear()' style='color:white;' class='navigationTop'>Clear Local Storage</a></li>" 
			+ "<li class='navigationTop'><a href='administrativePanel.html' style='color:white;' class='navigationTop'>Administrative Panel</a></li>" 
			+ "<li class='navigationTop'><a href='accounts.html' style='color:white;' class='navigationTop'>Accounts</a></li>" 
			+ "<li class='navigationTop'><a onclick='logout()' style='color:white;' class='navigationTop'>Log Out</a></li>";
				
		}
		
		
	}
	
	
	
	/*XML functions*/
	//we will be allowing export of XML data
	//programmatical adding of products to the store area via reading data of XML docs
	
	
	//1. read off the official file
	//2. 
	
	function loadXMLSync() {
		var url="accounts.xml";
	  
		console.log("lmaoo");
		 try {
			// Prefer XMLHttpRequest when available
			var xhr = new XMLHttpRequest()
			xhr.open('GET', url, false)
			xhr.setRequestHeader('Content-Type', 'text/xml')
			xhr.send()

			return xmlhttp.responseXML
		  }
		  catch (e) {
			// XMLHttpRequest not available, fallback on ActiveXObject
			try {
			  var activex = new ActiveXObject('Microsoft.XMLDOM')
			  activex.async = false
			  activex.load(url)

			  return activex
			}
			catch (e) {
			  // Neither XMLHttpRequest or ActiveXObject are available
			  return undefined
			}
		  }
  }
	
	
	function readUserXML(NAME)
	{
		var xmlDoc=null;
		if (window.ActiveXObject)
		{// code for IE
			xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
			console.log("new activeX object");
		}
		
		else if (document.implementation.createDocument)
		{// code for Mozilla, Firefox, Opera, etc.
			xmlDoc=document.implementation.createDocument("","",null);
			console.log("creating document..");
		}
		
		
		else{alert('Your browser cannot handle this script');
		console.log("Your browser cannot handle this script");
		}
					
			
					
		if (xmlDoc!=null) 
		{
			xmlDoc.async=false;
			xmlDoc.load("accounts.xml");
			//var x=xmlDoc.getElementsByTagName("accounts");
			var x=xmlDoc.getElementsByTagName("account");


			var testName;
			
			var firstName = document.getElementById("firstName");
			var lastName = document.getElementById("lastName");
			var gender = document.getElementById("gender");
			var username = document.getElementById("username");
			var email = document.getElementById("email");
			var psswd = document.getElementById("password");
			var number = document.getElementById("number");
			
			for (var i=0;i<x.length;i++)
			{ 
				var getFirstName = (x[i].getElementsByTagName("firstName")[0].childNodes[0].nodeValue);
				if(getFirstName == NAME)
				{
					console.log("Inside the loop!");
					firstName.value = (x[i].getElementsByTagName("firstName")[0].childNodes[0].nodeValue);
					lastName.value = (x[i].getElementsByTagName("lastName")[0].childNodes[0].nodeValue);
					gender.value = (x[i].getElementsByTagName("gender")[0].childNodes[0].nodeValue);
					username.value = (x[i].getElementsByTagName("username")[0].childNodes[0].nodeValue);
					email.value = (x[i].getElementsByTagName("email")[0].childNodes[0].nodeValue);
					psswd.value = (x[i].getElementsByTagName("password")[0].childNodes[0].nodeValue);
					number.value = (x[i].getElementsByTagName("number")[0].childNodes[0].nodeValue);
				}			
			}
		}
		
		console.log("it was null");
	}

	function readProductXML(NAME)
	{
		var xmlDoc=null;
		if (window.ActiveXObject)
		{// code for IE
			xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
			console.log("new activeX object");
		}
		
		else if (document.implementation.createDocument)
		{// code for Mozilla, Firefox, Opera, etc.
			xmlDoc=document.implementation.createDocument("","",null);
			console.log("creating document..");
		}
		
		
		else{alert('Your browser cannot handle this script');
		console.log("Your browser cannot handle this script");
		}
					
			
					
		if (xmlDoc!=null) 
		{
			xmlDoc.async=false;
			xmlDoc.load("products.xml");
			//var x=xmlDoc.getElementsByTagName("products");
			var x=xmlDoc.getElementsByTagName("product");
			
			var productName = document.getElementById("productName");
			var productPrice = document.getElementById("productPrice");
			
			for (var i=0;i<x.length;i++)
			{ 
				var getProductName = (x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue);
				if(getProductName == NAME)
				{
					console.log("Inside the loop!");
					productName.value = (x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue);
					productPrice.value = (x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue);
				}			
			}
		}
		
		console.log("it was null");
	}