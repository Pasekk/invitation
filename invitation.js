

var guest = prompt("Please provide your alias name");

var firstChar = guest.slice(0,1);
var changeFirstLetter = firstChar.toUpperCase();
var restChar = guest.slice(1,guest.length);
var lowerCaseletter = restChar.toLowerCase();
var fullName = changeFirstLetter + lowerCaseletter;


var guestList = ["Wes", "Jerry", "Paul", "Barry" ];

guestList.includes(fullName);

if (guestList.includes(fullName)){

    alert("Greetings " + fullName + " You have been invited to football match in chill room!");
}

else {
    alert("Sorry " + fullName + " your not invited, maybe next time");
}
