// var num = 2
// document.write(num + " x 1 =  " + num*1 + "<br>");
// document.write(num + " x 1 =  " + num*2 + "<br>");
// document.write(num + " x 1 =  " + num*3 + "<br>");
// document.write(num + " x 1 =  " + num*4 + "<br>");
// document.write(num + " x 1 =  " + num*5 + "<br>");
// document.write(num + " x 1 =  " + num*6 + "<br>");
// document.write(num + " x 1 =  " + num*7 + "<br>");
// document.write(num + " x 1 =  " + num*8 + "<br>");
// document.write(num + " x 1 =  " + num*9 + "<br>");
// document.write(num + " x 1 =  " + num*10 + "<br>");

// var cel = 25;
// var fah = 70;
// fahfor = ((cel * 9/5) +32);
// celfor = ((fah -32) * 5/9);
// document.write(cel + "<sup>o</sup>C is " + fahfor +  "<sup>o</sup>F <br>" );
// document.write(fah + "<sup>o</sup>F is " + celfor +  "<sup>o</sup>C" );

// var cityToCheck = prompt("Enter your city");
// var cleanestCities = [
//   "Cheyenne",
//   "Santa Fe",
//   "Tucson",
//   "Great Falls",
//   "Honolulu",
// ];

// if (cityToCheck === cleanestCities[0]) {

//     alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[1]) {

//     alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[2]) {

//     alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[3]) {
//     alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[4]) {
//     alert("It's one of the cleanest cities");
// }

// for (var i = 0; i <= 4; i++) {
//   if (cityToCheck === cleanestCities[i]) {
//     alert("It's one of the cleanest cities");
//   }
// }

// for (var i = 0; i <= 100; i++) {
// //   document.write(i + "<br>");

//   if (i % 2 === 0) {
//     document.write(i + " is even <br>");
//   } else if (i % 2 !== 0) {
//     document.write(i + " is odd <br>");
//   }
// }

// var username = prompt("Enter your name") || "not provided";
// console.log(username);

// for(var i=0; i<=5; i++){
//     console.log(i + "Aeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
//     for(var j=0; j<=5; j++){
//     console.log(j + "B");

//     }

// }

// var nestedarr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// for (var i = 0; i < nestedarr.length; i++) {
//   for (var j = 0; j < nestedarr[i].length; j++) {
//     console.log(nestedarr[i][j]);
//   }
// }

// for(var i=0; i<nestedarr.length; i++){
//     console.log(i+ "fffffffffffffff")
//     for(var j=0; j<nestedarr[i].length; j++){
//     console.log( i ,j, nestedarr[i][j]);

//     }
// }

var Q = ["whats your name", "whats your father name", "whats your age"];
var A = ["Atruba", "abid", 20];
for (i = 0; i < Q.length; i++) {
  var user = prompt(Q[i]);
  for (j = 0; j < A.length; j++) {
    if (user.toLowerCase() === A[i].toLowerCase()) {
      console.log("correct");
    } else {
      console.log("wrong");
    }
  }
}
