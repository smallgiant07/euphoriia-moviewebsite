/**
* Author: Prasann Doshi
* Target: register.html
* Purpose: validate user input
* Created: 15/04/2017
* Last updated: 15/4/2017
*/
"use strict";

function checkAddress(state , postcode) //checks validity of state and postcode and returns error message if any
{
    var errMsg = "";
    var firstD = postcode.substr(0,1); //takes first character of state
    switch(state)
    {
        case "VIC":
            if(firstD != "3" && firstD != "8")
            {
                errMsg += "The postcode should begin with 3 or 8.\n";
            }
        break;
        
        case "NSW":
            if(firstD != "1" && firstD != "2")
            {
                errMsg += "The postcode should begin with 1 or 2.\n";
            }
        break;
        
        case "QLD":
            if(firstD != "4" && firstD != "9")
            {
                errMsg += "The postcode should begin with 4 or 9.\n";
            }
        break;
    
        case "NT":
            if(firstD != "0")
            {
                errMsg += "The postcode should begin with 0.\n";
            }
        break;
        
        case "WA":
         if(firstD != "6")
        {
            errMsg += "The postcode should begin with 6.\n";
        }
        break;
        
        case "SA":
            if(firstD != "5")
            {
                errMsg += "The postcode should begin with 5.\n";
            }
        break;
            
        case "TAS":
            if(firstD != "7")
            {
                errMsg += "The postcode should begin with 7.\n";
            }
        break;
            
        case "ACT":
            if(firstD != "0")
            {
                errMsg += "The postcode should begin with 0.\n";
            }
        break;  
    }
    return errMsg;
}

function getContact() //returns preferred contact which is selected by user
{
    var prefcontactArr = document.getElementById("prefcontact").getElementsByTagName("input"); //gets all the radio input
    var prefcontact;
    for(var i = 0; i<prefcontactArr.length; i++)                                               // loops until it finds checked element
    {
        if(prefcontactArr[i].checked) prefcontact = prefcontactArr[i].value;
    }
    return prefcontact;
}

function getExtras() //returns extra purchases (if any) as an array
{
    var extraArr = document.getElementsByName("extras[]");
    var extras = [];
    for(var i = 0; i < extraArr.length; i++)
    {
        if(extraArr[i].checked) extras[i] = extraArr[i].value;
    }
    return extras;
}

function storeSessionData(state, postcode, quantity, price) //stores session data
{
    var fullname;
    var extras = [];
    sessionStorage.fullname = getFullname();
    sessionStorage.firstname = document.getElementById("firstname").value;
    sessionStorage.lastname = document.getElementById("lastname").value;
    sessionStorage.email = document.getElementById("emailad").value;
    sessionStorage.state = state;
    sessionStorage.postcode = postcode;
    sessionStorage.quantity = quantity;
    sessionStorage.price = price;
    sessionStorage.phonenumber = document.getElementById("phonenumber").value;
    sessionStorage.preferred_contact = getContact();
    sessionStorage.street = document.getElementById("street").value;
    sessionStorage.suburb = document.getElementById("suburb").value;
    sessionStorage.moviename = document.getElementById("moviename").value;
    sessionStorage.extras = getExtras();
    sessionStorage.ticktype = document.getElementById("ticktype").value;
    if(document.getElementById("descript") != undefined)
    {
        sessionStorage.descript = document.getElementById("descript").value;
    }
    else sessionStorage.descript = "None";
}

function getSessionData() //fills details which were stored in session data and also fills those details in hidden form
{
    if(sessionStorage.firstname != undefined)
    {
        document.getElementById("confirm_firstname").textContent = sessionStorage.firstname;
        document.getElementById("firstname").value = sessionStorage.firstname;
    }
    if(sessionStorage.lastname != undefined)
    {
        document.getElementById("confirm_lastname").textContent = sessionStorage.lastname;
        document.getElementById("lastname").value = sessionStorage.lastname;
    }
    if(sessionStorage.email != undefined)
    {
        document.getElementById("confirm_email").textContent = sessionStorage.email;
        document.getElementById("email").value = sessionStorage.email;
    }
    if(sessionStorage.phonenumber != undefined)
    {
        document.getElementById("confirm_phonenumber").textContent = sessionStorage.phonenumber;
        document.getElementById("phonenumber").value = sessionStorage.phonenumber;
    }
    if(sessionStorage.street != undefined)
    {
        document.getElementById("confirm_street").textContent = sessionStorage.street;
        document.getElementById("street").value = sessionStorage.street;
    }
    if(sessionStorage.suburb != undefined)
    {
        document.getElementById("confirm_suburb").textContent = sessionStorage.suburb;
        document.getElementById("suburb").value = sessionStorage.suburb;
    }
    if(sessionStorage.state != undefined)
    {
        document.getElementById("confirm_state").textContent = sessionStorage.state;
        document.getElementById("state").value = sessionStorage.state;
    }
    if(sessionStorage.postcode != undefined)
    {
        document.getElementById("confirm_postcode").textContent = sessionStorage.postcode;
        document.getElementById("postcode").value = sessionStorage.postcode;
    }
    if(sessionStorage.preferred_contact != undefined)
    {
        document.getElementById("confirm_preferred_contact").textContent = sessionStorage.preferred_contact;
        document.getElementById("preferred_contact").value = sessionStorage.preferred_contact;
    }
    if(sessionStorage.descript != undefined)
    {
        document.getElementById("confirm_descript").textContent = sessionStorage.descript;
        document.getElementById("descript").value = sessionStorage.descript;
    }
    if(sessionStorage.moviename != undefined)
    {
        document.getElementById("confirm_moviename").textContent = sessionStorage.moviename;
        document.getElementById("moviename").value = sessionStorage.moviename;
    }
    if(sessionStorage.ticktype != undefined)
    {
        document.getElementById("confirm_ticktype").textContent = sessionStorage.ticktype;
        document.getElementById("ticktype").value = sessionStorage.ticktype;
    }
    if(sessionStorage.quantity != undefined)
    {
        document.getElementById("confirm_quantity").textContent = sessionStorage.quantity;
        document.getElementById("quantity").value = sessionStorage.quantity;
    }
    if(sessionStorage.price != undefined)
    {
        document.getElementById("confirm_price").textContent = sessionStorage.price;
        document.getElementById("price").value = sessionStorage.price;
    }
    if(sessionStorage.extras != undefined)
    {
        document.getElementById("confirm_extras").textContent = sessionStorage.extras;
        document.getElementById("extras").value = sessionStorage.extras;
    }
    if(sessionStorage.fullname != undefined)
    {
        document.getElementById("fullname").value = sessionStorage.fullname;
    }
}

function validate() //vaildates enquire.html
{
    var errMsg = "";
    var result = true;
    var price = document.getElementById("price").value;
    var state = document.getElementById("state").value;
    var postcode = document.getElementById("postcode").value;
    var quantity = document.getElementById("quantity").value;       //get elements from html page
    var ticktype = document.getElementById("ticktype").value;
    var moviename = document.getElementById("moviename").value;
    
    if(state== "")                                                  // check if user entered anything
    {
        errMsg+= "Please select a state.\n";
        result= false;
    }
    
    if(postcode== "" || postcode== NaN || postcode % 1 != 0 || postcode.length != 4) //check if postcode entered is valid
    {
        errMsg+= "Please enter a valid postcode number.\n";
        result= false;
    }
    
    else
    {
        var tempMsg = "";
        tempMsg = checkAddress(state , postcode);                               //check is postcode and state entered are valid in respect to eachother
        if(tempMsg != "")
        {
            errMsg += tempMsg;
            result = false;
        }
    }
    
    if(moviename== "")
    {
        errMsg+= "Please select a movie.\n"
        result= false;
    }
    
    if(ticktype=="")
    {
        errMsg+= "Please select a type of ticket.\n"
        result= false;
    }
    
    if(quantity == 0 || quantity <0 || isNaN(quantity) || quantity % 1 != 0)
    {
        errMsg += "Invalid number of tickets. Please enter a valid number of tickets.\n";
        result = false;
    }
    
    else
    {
        price = getPricing(ticktype, quantity);                                 //get the price of tickets bought by user
    }
    
    if(errMsg != "")
    {
        alert(errMsg);                                                          // display error messages if any
    }
    
    if(result)
    {
        storeSessionData(state, postcode, quantity, price);                     //store session data if validated correctly
    }
    return result;
}

function checkCardValidity(credtype, cardno, cvv)     // returns error message if type of card, card number and cvv arent valid in respect to eath other
{
    var errMsg = "";
    var startNum = "";
    if(!cardno.match(/^([0-9]{15,16})+$/))          //pattern for digits entered restricted to 15 or 16 in length
    {
        errMsg += "Invalid card number\n";
    }
    if(!cvv.match(/^([0-9]{3,4})+$/))               //pattern for digits entered restricted to 3 or 4
    {
        errMsg += "Invalid cvv number\n";
    }
    
    if(credtype!= "" && cvv.match(/^([0-9]{3,4})+$/) && cardno.match(/^([0-9]{15,16})+$/))//if data is entered correctly it is sent for further validation
    {
        switch(credtype)
        {
            case "Visa":
                startNum = cardno.substr(0,1);
                if(cardno.length != 16 || startNum != "4") errMsg += "Invalid visa number\n";
                if(cvv.length != 3) errMsg += "Invalid cvv\n";
                break;
            case "Mastercard":
                startNum = cardno.substr(0,2);
                if(cardno.length != 16 || (startNum != "51" && startNum != "52" && startNum != "53" && startNum !="54" && startNum != "55"))
                errMsg += "Invalid Mastercard number\n";
                if(cvv.length != 3) errMsg += "Invalid cvv\n";
                break;
            case "American Express":
                startNum = cardno.substr(0,2);
                if(cardno.length != 15 || (startNum != "34" && startNum != "37")) errMsg += "Invalid American Express card number\n";
                if(cvv.length != 4) errMsg += "Invalid cvv\n";
                break;
        }
    }
    return errMsg;
}

function validate2()        //validates payment.html
{
    var errMsg = "";
    var result = true;
    var credtype = document.getElementById("credtype").value;
    var fullname = document.getElementById("fullname").value;
    var cardno = document.getElementById("cardno").value;           //get values of elements
    var expdate = document.getElementById("expdate").value;
    var cvv = document.getElementById("cvv").value;
    var date = new Date();
    var currentmnth = date.getMonth()+1;
    var currentyear = date.getFullYear();
    
    if(credtype == "")                                              //check whether data is entered (ensures requirement)
    {
        errMsg += "Please select card type.\n";
        result = false;
    }
    
    if(fullname == "" || fullname.match(/^[ ]+$/))                      //check whether name entered is not empty
    {
        errMsg += "Your name can't be empty.\n";
        result = false;
    }
    else if(fullname.length>40)
    {
        errMsg += "Your name can not be more than 40 characters\n"; //checks the maximum length of name 
        result = false;
    }
    else if(!fullname.match(/^[a-zA-Z ]+$/))
    {
        errMsg += "Your name can only contain alphabetical characters and spaces\n"; //checks if value entered has valid letters
        result = false;
    }
    
    if(cardno == "")
    {
        errMsg += "Please enter card number.\n";
        result = false;
    }
    
    if(cvv == "")
    {
        errMsg += "Please enter cvv.\n";
        result = false;
    }
    
    else if(cvv != "" && cardno != "" && credtype != "")
    {
        var tempMsg = "";
        tempMsg = checkCardValidity(credtype, cardno, cvv); //checks validity of parameters with respect to each other
        if(tempMsg != "")
        {
            errMsg += tempMsg;
            result = false;
        }
    }
    
    if(expdate == "")
    {
        errMsg += "Please enter date of expiry.\n";
        result = false;
    }
    
    else if(!expdate.match(/^(([0-9][0-9])([-])([0-9][0-9]))+$/)) //checks if date entered matched mm-yy format
    {
        errMsg += "Please match the format of the expiry date mm-yy\n";
        result = false;
    }
    
    else if(!expdate.match(/^(((0[1-9])([-])([0-9][0-9]))|((1[0-2])([-])([0-9][0-9])))+$/)) //checks for a valid date
    {
        errMsg += "Please enter a valid date.\n";
        result = false;
    }
    
    else        //checks if date hasnt crossed expiry limit
    {
        var checkmnth = expdate.substr(0,2);
        var checkyear = expdate.substr(3,2);
        if(((Number(checkmnth) <= currentmnth) && ((Number(checkyear) + 2000) == currentyear)) || ((Number(checkyear) + 2000) < currentyear))
        {
            errMsg += "Invalid expiry date.\n";
            result = false;
        }
    }
    if(errMsg != "") alert(errMsg);
    return result;
}

function cancelBooking()
{
    sessionStorage.clear();                     //clears session data and redirects the user to homepage
    window.location = "index.html";
}

function init()
{   
    var loc= window.location.pathname; 
    var pageName= loc.substr(loc.lastIndexOf("/")+1);
    if(pageName == "enquire.html")         //initialsed based on the page the user is on
    {
        fetchData();                                        //gets data from product page if any
        var regform = document.getElementById("regform"); 
        priceEn();                                          //changes price on changing quantity 
        regform.onsubmit = validate;
    }
    if(pageName == "payment.html")
    {
        getSessionData();                                   // fills data and hidden form
        var payform = document.getElementById("payform");
        payform.onsubmit = validate2;                       //validates form
        var cancelButton = document.getElementById("cancelButton");
        cancelButton.onclick = cancelBooking;           //cancels booking, clears sessions data and redirects to home page
    }
    
    if(pageName == "product.html")
    {
        getMovieData();             //stores movie name in session data
    }
}

window.onload = init;