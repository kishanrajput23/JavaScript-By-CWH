// chapter 7 question 1
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";

// chapter 7 question 2
// NO

// chapter 7 question 3
document.querySelector("div").firstElementChild.style.color = "green";
document.querySelector("div").lastElementChild.style.color = "green";

// chapter 7 question 4
Array.from(document.getElementsByTagName("li")).forEach((element) => {
	element.style.background = "cyan";
});

// chapter 7 question 5
// option d : none of these
