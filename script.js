let availablekeywords=[
	'B.E / B.Tech',
	'B.Com',
	'B.Arch',
	'B.A',
];
const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
	let result= [];
	let input = inputBox.value;
	if(input.length){
		result = availablekeywords.filter((keyword)=>{
			return keyword.toLowerCase().includes(input.toLowerCase());
		});
		
	}
	display(result);
}
function display(result){
	const content = result.map((list)=>{
		return "<li onclick=selectInput(this)>" + list + "</li>";
	});
	resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
	inputBox.value = list.innerHTML;
	resultsBox.innerHTML = '';
}

let availablekeywords2=[
	'None',
	'M.A',
	'M.Com',
	'M.Arch',
	'M.Tech',
];
const resultsBox2 = document.querySelector(".result-box2");
const inputBox2 = document.getElementById("input-box2");

inputBox2.onkeyup = function(){
	let result2= [];
	let input2 = inputBox2.value;
	if(input2.length){
		result2 = availablekeywords2.filter((keyword)=>{
			return keyword.toLowerCase().includes(input2.toLowerCase());
		});
		
	}
	display2(result2);
}
function display2(result2){
	const content2 = result2.map((list)=>{
		return "<li onclick=selectInput2(this)>" + list + "</li>";
	});
	resultsBox2.innerHTML = "<ul>" + content2.join('') + "</ul>";
}

function selectInput2(list){
	inputBox2.value = list.innerHTML;
	resultsBox2.innerHTML = '';
}

let availablekeywords3=[
	'Computer Science',
	'Electrical & Electronics',
	'Mechanical',
	'Automobile',
	'Chemical',
	'Commerce',
	'Architecture',
	'Communication',
	'Economics',
	'English',
	'Film',
	'History',
	'Sales',
];
const resultsBox3 = document.querySelector(".result-box3");
const inputBox3 = document.getElementById("input-box3");

inputBox3.onkeyup = function(){
	let result3= [];
	let input3 = inputBox3.value;
	if(input3.length){
		result3 = availablekeywords3.filter((keyword)=>{
			return keyword.toLowerCase().includes(input3.toLowerCase());
		});
		
	}
	display3(result3);
}
function display3(result3){
	const content3 = result3.map((list)=>{
		return "<li onclick=selectInput3(this)>" + list + "</li>";
	});
	resultsBox3.innerHTML = "<ul>" + content3.join('') + "</ul>";
}

function selectInput3(list){
	inputBox3.value = list.innerHTML;
	resultsBox3.innerHTML = '';
}

let availablekeywords31=[
	'Cyber Security',
	'UI/UX Designing',
	'Artificial Intelligence',
	'Web Development',
	'Fluid Mechanics',
	'Machine Design',
	'Thermal Dynamics',
	'Aerodynamics',
	'Rapid Prototyping',
	'Manufacturing',
	'Accounts & Finance',
	'Economics',
    'Investment Management',
    'Financial Market',
    'Residential',
    'Commercial',
    'Landscaping',
    'Interior Architecture',
];
const resultsBox31 = document.querySelector(".result-box31");
const inputBox31 = document.getElementById("input-box31");

inputBox31.onkeyup = function(){
	let result31= [];
	let input31 = inputBox31.value;
	if(input31.length){
		result31 = availablekeywords31.filter((keyword)=>{
			return keyword.toLowerCase().includes(input31.toLowerCase());
		});
		
	}
	display31(result31);
}
function display31(result31){
	const content31 = result31.map((list)=>{
		return "<li onclick=selectInput31(this)>" + list + "</li>";
	});
	resultsBox31.innerHTML = "<ul>" + content31.join('') + "</ul>";
}

function selectInput31(list){
	inputBox31.value = list.innerHTML;
	resultsBox31.innerHTML = '';
}

let availablekeywords4=[
	'None',
	'Social Work',
	'Communication',
	'Economics',
	'English',
	'Commerce',
	'Finance and Taxation',
	'Architectural Design',
	'Landscape Architecture',
	'Housing',
	'Data Science',
	'Computer Science',
	'Electrical & Electronics',
	'Mechanical',
	'Automobile',
	'Chemical',
	'Accounting',
];
const resultsBox4 = document.querySelector(".result-box4");
const inputBox4 = document.getElementById("input-box4");

inputBox4.onkeyup = function(){
	let result4= [];
	let input4 = inputBox4.value;
	if(input4.length){
		result4 = availablekeywords4.filter((keyword)=>{
			return keyword.toLowerCase().includes(input4.toLowerCase());
		});
		
	}
	display4(result4);
}
function display4(result4){
	const content4 = result4.map((list)=>{
		return "<li onclick=selectInput4(this)>" + list + "</li>";
	});
	resultsBox4.innerHTML = "<ul>" + content4.join('') + "</ul>";
}

function selectInput4(list){
	inputBox4.value = list.innerHTML;
	resultsBox4.innerHTML = '';
}

const candidates = [
    { name: "Alice", skills: ["B.E / B.Tech", "Computer Science","Cyber Security","M.Tech","Computer Science"],location:["Chennai"],email: ["Alice@gmail.com"] },
    { name: "Roveno", skills: ["B.E / B.Tech", "Computer Science","UI/UX Designing","M.Tech","Data Science"],location:["Chennai"],email: ["roveno@gmail.com"] },
    { name: "Shyam", skills: ["B.E / B.Tech", "Mechanical","Fluid Mechanics","M.Arch","Architectural Design"],location:["Chennai"],email: ["shyam@gmail.com"] },
    { name: "Charlie", skills: ["B.E / B.Tech", "Mechanical"],location:["Bangalore"],email: ["charlie@gmail.com"] },
    { name: "Roshan", skills: ["B.E / B.Tech", "Automobile","Aerodynamics","M.A","Social Work"],location:["Pune"],email: ["roshan@gmail.com"] },
    
    { name: "Roshan", skills: ["B.A", "Communication","","M.A","Social Work"],location:["Pune"],email: ["roshan@gmail.com"] },
    

    { name: "Bob", skills: ["B.Com", "Commerce","Economics","M.Com","Finance and Taxation"],location:["Mumbai"],email: ["bob@gmail.com"] },
    { name: "Raj", skills: ["B.Com", "Sales","Economics","M.Com","Finance and Taxation"],location:["Mumbai"],email: ["bob@gmail.com"] },
    
    { name: "Denver", skills: ["B.Com", "Commerce","Investment Management","M.Com","Finance and Taxation"],location:["Mumbai"],email: ["denver@gmail.com"] },
    { name: "Rithish", skills: ["B.Arch", "Architecture","Residential"],location:["Chennai"],email: ["rithish@gmail.com"] },
    { name: "Ranjith", skills: ["B.Arch", "Architecture","Commercial"],location:["Mumbai"],email: ["ranjith@gmail.com"] },
    // Add more candidates as needed
];

function performSearch() {
    let keywords = [
        document.getElementById('input-box').value,
        document.getElementById('input-box3').value,
        document.getElementById('input-box31').value,
        document.getElementById('input-box2').value,
        document.getElementById('input-box4').value,
        // Add more keywords if you have more search bars
    ];

    // Filter candidates who match all entered keywords
    let results = candidates.filter(candidate => 
        keywords.every(kw => kw === "" || candidate.skills.includes(kw))
    );

    displayResults(results);
}

function displayResults(results) {
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results

    if (results.length === 0) {
        resultsDiv.innerHTML = "<p>No candidates found.</p>";
        return;
    }

    results.forEach(candidate => {
        let p = document.createElement("p");
        //  p.textContent = `Name: ${candidate.name}, Skills: ${candidate.skills.join(", ")} , Location: ${candidate.location}, Email: ${candidate.email}`;
        p.innerHTML = `<br>
    <span class="name">Name: ${candidate.name}</span> 
    <br>
    <span class="skills">Skills: ${candidate.skills.join(", ")}</span>
    <br>
    <span class="location">Location: ${candidate.location}</span>
    <br>
    <span class="email">Email: <a href="mailto:${candidate.email}">${candidate.email}</a></span><br>`;

        resultsDiv.appendChild(p);
    });
}








