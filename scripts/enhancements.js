/**
* Author: Prasann Doshi
* Target: register.html
* Purpose: validate user input
* Created: 15/04/2017
* Last updated: 15/4/2017
*/
"use strict";

function getFullname() //returns fullname as a concatination of firstname and last name
{
    var fullname;
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    fullname = firstname + " " + lastname;
    return fullname;
}

function getPricing(ticktype, quantity) //retuns price of the number of tickets bought
{
    
    var tickPrice = [10.00,25.00,55.00,99.95] //price without discount of different types of tickets
    var totalPrice, actualPrice;
    var tempQua = Number(quantity);
    if(ticktype == "" && tempQua != 0)
    {
        document.getElementById("pricing").textContent = "Please select a type of seat first"; //dynamic error display
    }
    if(tempQua == NaN || tempQua % 1 != 0 || tempQua == 0)
    {
        document.getElementById("pricing").textContent = "Invalid quantity";
        document.getElementById("pricing2").style.display = "none";
    }
    
    
    if(ticktype != "" && tempQua !=0)
    {
        switch(ticktype)
        {
            case "Regular":
                if(tempQua == 1)
                {
                    totalPrice = tickPrice[0];                                          //calculate price based on table provided in product.html
                    actualPrice = tickPrice[0] * tempQua;
                    totalPrice.toFixed(2);
                    document.getElementById("pricing2").style.display = "none";
                    document.getElementById("pricing").textContent = "Price: $" + totalPrice;
                }

                if(tempQua>1 && tempQua <= 10)
                {
                    totalPrice = 0.85 * (tickPrice[0] * tempQua);
                    actualPrice = tickPrice[0] * tempQua;
                    totalPrice = totalPrice.toFixed(2); //fixes digits after decimal point as 2.
                    document.getElementById("pricing2").style.display = "block";
                    document.getElementById("pricing2").textContent = "Price: $" + actualPrice;
                    document.getElementById("pricing").textContent = "Price: $" + totalPrice + " after 15% OFF!!!";
                }
            break;

            case "Lounge":
                if(tempQua == 1)
                {
                    totalPrice = tickPrice[1];
                    document.getElementById("pricing2").style.display = "none";
                    document.getElementById("pricing").textContent = "Price: $" + totalPrice;
                }

                if(tempQua == 2)
                {
                    totalPrice = 0.95 * (tickPrice[1] * tempQua);
                    actualPrice = tickPrice[1] * tempQua;
                    totalPrice = totalPrice.toFixed(2);
                    document.getElementById("pricing2").style.display = "block";
                    document.getElementById("pricing2").textContent = "Price: $" + actualPrice;
                    document.getElementById("pricing").textContent = "Price: $" + totalPrice  + " after 5% off!";
                }

                if(tempQua == 3)
                {
                    totalPrice = 0.90 * (tickPrice[1] * tempQua);
                    actualPrice = tickPrice[1] * tempQua;
                    totalPrice = totalPrice.toFixed(2);
                    document.getElementById("pricing2").style.display = "block";
                    document.getElementById("pricing2").textContent = "Price: $" + actualPrice;
                    document.getElementById("pricing").textContent = "Price: $" + totalPrice  + " after 10% off!";
                }

                if(tempQua >=4)
                {
                    totalPrice = 0.80 * (tickPrice[1] * tempQua);
                    actualPrice = tickPrice[1] * tempQua;
                    totalPrice = totalPrice.toFixed(2);
                    document.getElementById("pricing2").style.display = "block";
                    document.getElementById("pricing2").textContent = "Price: $" + actualPrice;
                    document.getElementById("pricing").textContent = "Price: $" + totalPrice + " after 20% OFF!!!";
                }
            break;

            case "Luxury":
                if(tempQua == 1)
                {
                    totalPrice = 0.94 * tickPrice[2];
                    actualPrice = tickPrice[2] * tempQua;
                    totalPrice = totalPrice.toFixed(2);
                    document.getElementById("pricing2").style.display = "block";
                    document.getElementById("pricing2").textContent = "Price: $" + actualPrice;
                    document.getElementById("pricing").textContent = "Price: $" + totalPrice + " after 6% off!";
                }

                if(tempQua == 2)
                {
                    totalPrice = 0.91 * (tickPrice[2] * tempQua);
                    actualPrice = tickPrice[2] * tempQua;
                    totalPrice = totalPrice.toFixed(2);
                    document.getElementById("pricing2").style.display = "block";
                    document.getElementById("pricing2").textContent = "Price: $" + actualPrice;
                    document.getElementById("pricing").textContent = "Price: $" + totalPrice + " after 9% off!";
                }


                if(tempQua >=4)
                {
                    totalPrice = 0.85 * (tickPrice[2] * tempQua);
                    actualPrice = tickPrice[2] * tempQua;
                    totalPrice = totalPrice.toFixed(2);
                    document.getElementById("pricing2").style.display = "block";
                    document.getElementById("pricing2").textContent = "Price: $" + actualPrice;
                    document.getElementById("pricing").textContent = "Price: $" + totalPrice + " after 15% OFF!!!";
                }
            break;

            case "Private":
                if(tempQua == 1)
                {
                    totalPrice = 0.90 * tickPrice[3];
                    actualPrice = tickPrice[3] * tempQua;
                    totalPrice = totalPrice.toFixed(2);
                    document.getElementById("pricing2").style.display = "block";
                    document.getElementById("pricing2").textContent = "Price: $" + actualPrice;
                    document.getElementById("pricing").textContent = "Price: $" + totalPrice + " after 10% off!";
                }

                if(tempQua == 2)
                {
                    totalPrice = 0.85 * (tickPrice[3] * tempQua);
                    actualPrice = tickPrice[3] * tempQua;
                    totalPrice = totalPrice.toFixed(2);
                    document.getElementById("pricing2").style.display = "block";
                    document.getElementById("pricing2").textContent = "Price: $" + actualPrice;
                    document.getElementById("pricing").textContent = "Price: $" + totalPrice + " after 15% off!";
                }

                if(tempQua >=3)
                {
                    totalPrice = 0.77 * (tickPrice[3] * tempQua);
                    actualPrice = tickPrice[3] * tempQua;
                    totalPrice = totalPrice.toFixed(2);
                    document.getElementById("pricing2").style.display = "block";
                    document.getElementById("pricing2").textContent = "Price: $" + actualPrice;
                    document.getElementById("pricing").textContent = "Price: $" + totalPrice + " after 23% OFF!!!";
                }
            break;
        }
    }
    return totalPrice;
}

function priceEn() //dynamically display total cost of products bought based on input
{
    document.getElementById("pricing2").style.textDecoration = "line-through";
    document.getElementById("quantity").oninput = function() {getPricing(document.getElementById("ticktype").value, document.getElementById("quantity").value)}; //calls an event listener and performs a function if input event happened
    document.getElementById("ticktype").onchange = function() {getPricing(document.getElementById("ticktype").value, document.getElementById("quantity").value)}; //calls an event listener and performs a function if value in input field changes and only occurs after the focus is shifted
}

function fetchData() //changes value of element 'moviename' if stored in sessiondata
{
    if(sessionStorage.moviename != undefined)
    {
        document.getElementById("moviename").value = sessionStorage.moviename;
    }
}

function setMovieData(moviename1) //store session data based on users input on product page
{
    switch(moviename1)
    {
        case "ff8":
            sessionStorage.moviename = "Fate of the Furious";
        break;
        case "ghostinshell":
            sessionStorage.moviename = "Ghost in the Shell";
        break;
        case "smurfs2":
            sessionStorage.moviename = "Smurfs 2";
        break;
        case "guardians":
            sessionStorage.moviename = "Guardians of Galaxy Vol.2";
        break;
    }
}

function getMovieData() //calls event listener and passes moviename if the user clicks on particular movie
{
    document.getElementById("ff8").onclick = function() {setMovieData("ff8")};
    document.getElementById("ghostinshell").onclick = function() {setMovieData("ghostinshell")};
    document.getElementById("guardians").onclick = function() {setMovieData("guardians")};
    document.getElementById("smurfs2").onclick = function() {setMovieData("smurfs2")};
}