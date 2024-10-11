function askScore() {

let score = prompt("Enter your score:");
if (score >= 90) {
    alert("Your grade is: Excellent");
}   else if (score >= 80 && score < 90) {
    alert("Your grade is: Good");
}   else if (score >= 70 && score < 80) {
    alert("Your grade is: Fair");
}   else {
    alert("Your grade is: Needs Improvement");
}
}