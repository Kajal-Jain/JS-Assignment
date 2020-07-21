let marks = prompt("Enter Marks:");
if (marks < 35)
    console.log(`Marks are ${marks} and Grade is D`);
if (marks >= 75 && marks < 100)
    console.log(`Marks are ${marks} and Grade is A+`);
if (marks < 75 && marks >= 60)
    console.log(`Marks are ${marks} and Grade is A`);
if (marks < 60 && marks >= 45)
    console.log(`Marks are ${marks} and Grade is B`);
if (marks < 45 && marks >= 35)
    console.log(`Marks are ${marks} and Grade is C`);
else
    console.log("please enter valid marks");

