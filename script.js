



console.log("Name:" + "Patricia Bazemore".toUpperCase()); 
console.log('Career: Full Stack Junior Developer');
console.log('Description: I have a history of being successful at whatever I put my mind to. I went from being a delivery driver with Pizza Hut to managing nine locations in a few short years. I went on to become the lead training manager for the district. I have recently put my efforts into coding and plan to have the same pattern of success through hard work and dedication.');

console.log("My Interests:");
console.log("* Gardening"); 
console.log("* Coding"); 
console.log("* Politics");
console.log("* Community service");

console.log("My Previous Experience:")
function displayPosition(employer, title, jobDuties){
    console.log(employer + title + jobDuties)
}
displayPosition("* ADF Companies, ", "District Training Manager- ", "Oversaw the daily operations of nine Pizza Hut locations and over 130 employees");
displayPosition("* Cracker Barrel, ", "General Restaurant Manager- ", "Oversaw the daily operations of 150 employees and over $4.5 million in annual sales volume");

console.log("My Skills:")
function displaySkill(bam, skill) {if (bam == true) {
    console.log("*BAM: " + skill)
} else console.log("*" + skill)
}

displaySkill(true , "Spanish");
displaySkill(true , "Html");
displaySkill(false , "Conflict Resolution");
displaySkill(false , "Facilitation");
displaySkill(true , "JavaScript");


