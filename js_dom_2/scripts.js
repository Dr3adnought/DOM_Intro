/*
document.getElementsByTagName(tagName) returns a list (array) of HTML elements that match the tagName.

E.g document.getElementsByTagName("p") returns a list of all <p> elements
*/

// Use document.getElementsByTagName to get all the <h1> elements on the page and store them in a h1Elements variable

// YOUR CODE GOES HERE
var h1Elements = document.getElementsByTagName("h1")
console.log(h1Elements)

// h1Elements is an array. Change the content of the 2nd h1 to "It was dynamically created with JS"

// YOUR CODE GOES HERE
document.getElementsByTagName("h1")[1].innerHTML = "It was dynamically created with JS."
