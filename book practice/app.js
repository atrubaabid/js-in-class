// CHAP 49 READING FIELD VALUES
// =========================================================================================================================



// function checkAddress(fieldId) {
//     var val = document.getElementById(fieldId).value;
//     if (val === "") {

//         alert("Email address required.");
//     }
// }



// CHAP 50 Setting FIELD VALUES
// =========================================================================================================================


// function fillCity() {

//     var cityName;

//     var zipEntered = document.getElementById("zip").value;
//     switch (zipEntered) {
//         case "60608":
//             cityName = "Chicago";
//             break;
//         case "68114":
//             cityName = "Omaha";
//             break;
//         case "53212":

//             cityName = "Milwaukee";
//     }
//     document.getElementById("city").value = cityName;
// }

// function Auto() {
//     let cityname;
//     let zip = document.getElementById("zip").value;
//     let city = document.getElementById("city");
//     switch (zip) {
//         case "10":
//             cityname = "Karachi"
//             break;
//         case "20":
//             cityname = "Islamabad"
//             break;
//         case "30":
//             cityname = "lahore"
//             break;
//         case "40":
//             cityname = "punjab"
//             break;

//     }

//     city.value = cityname;

// }


//  CHAP 51 Reading and setting paragraph text
// =========================================================================================================================


// function more(){
//     let para = document.getElementById("para");
//     let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. A et illo tempore voluptates, eum vero architecto sapiente commodi. Quod, aliquam!"
//     para.innerHTML= text;
// }



// function more(){
//     let para = document.getElementById("para");
//     let text = "<ol><li>Slow loris</li><li>Fast loris</li><li>Just-right loris</li></ol>"
//     para.innerHTML= text;
// }



// function more(){
//     let para = document.getElementById("par").innerHTML;
//     document.getElementById('para').innerHTML = para



// }




// CHAP 52 Manipulating images and text
// =========================================================================================================================



// function rem(){
//     document.querySelector("#html").classList.add("remove");

// }


// function big(){
//   let para=  document.querySelector(".para");
//   para.style.backgroundColor = "green";
// }


// function big(){
//     document.querySelector("#para").classList.add("big")
//     document.querySelector("#para").classList.remove("para")

// }



// CHAP 53 Swapping images

// =========================================================================================================================

// function swap() {
//     document.querySelector("#before").src = "2.jpg"
// }

// function swapout(){
//     document.querySelector("#before").src = "1.jpg"

// }



// function newswap(imgid, imgsrc) {
//     document.querySelector( "#"+ imgid).src = imgsrc;
// }

// function newswap2(imgid, imgsrc) {
//     document.querySelector( "#" + imgid).src = imgsrc;
// }



//  CHAP 54 Swapping images and setting classes -->
//  ==========================================================================================================

// let gpt = document.querySelector("#gpt");
// let result = gpt.href;
// console.log(result);


//  CHAP 55 Setting styles -->
// <!-- ========================================================================================================== -->

// function big(){
//     document.querySelector("#para").style.fontSize = "3rem";
//     document.querySelector("#para").style.backgroundColor = "Green";
//     document.querySelector("#para").style.color = "white";
// }

// function reset(){
//       document.querySelector("#para").style.fontSize = "1rem";
//     document.querySelector("#para").style.backgroundColor = "white";
//     document.querySelector("#para").style.color = "purple";
// }



// FOR INLINE STYLING

// let margin = document.querySelector("#para").style.margin;
// console.log(margin);


// FOR CSS FILE STYLE

// let mar = window.getComputedStyle(
//     document.querySelector("#para")
// ).margin

// console.log(mar);



//  <!-- CHAP 56 Target all elements by tag name -->
// <!-- ========================================================================================================== -->


// let para = document.getElementsByTagName("p");
// // para[4].innerText = "MORNING"

// for (i = 0; i < para.length; i++) {

//     para[i].innerText = para[i].innerText + " EVENING " + i;
//     para[i].style.backgroundColor = "#"+i+1+2+i+8+9;
//     para[i].style.color = "white";


// }


//  <!-- CHAP 57 Target some elements by tag name -->
// <!-- ========================================================================================================== -->

// let box = document.getElementById("box");
// let box = document.querySelector("#box");
// console.log(box);

// let para = box.getElementsByTagName("h1");
// console.log(para);

// for(i=0; i<para.length; i++){

//     para[i].style.color = "red";
// }


//  <!-- CHAP 58 The DOM -->  and 59 is the thory
// <!-- ========================================================================================================== -->





//  <!-- CHAP 60 The DOM: Finding children -->
// <!-- ========================================================================================================== -->

// let div = document.getElementById("box");
// // console.log(div.childNodes);

// console.log(div.children[2]);
// console.log(div.children[3].innerHTML);


//  <!-- CHAP 61  Junk artifacts and nodeType -->
// <!-- ========================================================================================================== -->


// var d = document.getElementById("humpty");

// var pCounter = 0;
// for (var i = 0; i < d.childNodes.length; i++) {

//     if (d.childNodes[i].nodeType === 1) {
//         pCounter++;

//     }
//     if (pCounter === 2 ) {
//         d.childNodes[i].innerHTML = "All his men.";

//     }

//       if (pCounter === 3 ) {
//         d.childNodes[i].innerHTML = "All his men.";
//         break;
//     }
// }




// for (var i = 0; i < d.children.length; i++) {
//     d.children[i].innerText = "gggggggg";
// }



// var d = document.getElementById("humpty");

// for (var i = 0; i < d.childNodes.length; i++) {

//     if (d.childNodes[i].nodeType === 1) {
//         d.childNodes[i].innerHTML = "All his men " + i;

//     }
// }



// for (var i = 0; i < d.children.length; i++) {

//     if (d.children[i].nodeType === 1) {
//         d.children[i].innerHTML = "All his men " + i;

//     }
// }


//    <!-- CHAP 62 The DOM: More ways to target elements-->
// <!-- ========================================================================================= -->


// let el = document.querySelector("#box");

// console.log(el.firstChild);
// console.log(el.lastChild);

// //  el.lastChild.innerText = "123";

// let para = document.querySelector("#para");

// console.log(para.parentNode);
// console.log(para.nextSibling);
// console.log(para.previousSibling);


// <!-- CHAP 63 The DOM: Getting a target's name-->
// <!-- ========================================================================================= -->



// let el = document.querySelector("#box");
// NODETYPE
// console.log(el.childNodes[0].nodeType);   //3
// console.log(el.childNodes[1].nodeType);   //1
// console.log(el.childNodes[3].nodeType);   //8
// NODENAME
// console.log(el.childNodes[0].nodeName);   
// console.log(el.childNodes[1].nodeName);   
// console.log(el.childNodes[3].nodeName);  
// NODEVALUE
// console.log(el.childNodes[0].nodeValue);   
// console.log(el.childNodes[1].nodeValue);   
// console.log(el.childNodes[3].nodeValue);




// <!-- CHAP 64 The DOM: Counting elements-->
// <!-- ========================================================================================= -->



// let res = document.getElementsByTagName("li");
// for (i = 0; i < res.length; i++) {
//     if (res[i].innerText === "") {
//         res[i].innerText = "Good night";
//     }
// }

// let el = document.querySelector("#dyy");
// console.log(el);


// let el1 = el.childNodes;
// let count = 0;

// for (i = 0; i < el1.length; i++) {
//     if (el1[i].nodeName.toLowerCase() == "h1") {
//         el1[i].style.color = "red";
//         count++;
//     }

// }
// console.log(count);


//     <!-- CHAP 65 The DOM:Attributes-->
// <!-- ========================================================================================= -->

// let el = document.querySelector("#ID");
// console.log(el.hasAttribute("id"));
// console.log(el.getAttribute("class"));
// console.log(el.setAttribute("class", "special"));

// console.log(el.getAttribute("class"));



    //         <!-- CHAP 66 Attribute names and values-->
    // <!-- ========================================================================================= -->




    





































