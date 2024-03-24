// Array inside object
let develporSkills = {
    languages: ["python", "typescript", 'C++'],
    tools: ["Git", "Webpack", "Docker" ],
    framework: ["React", "Angular", "Vue"]
};
// Array destruction
let {languages,tools,framework} = develporSkills;
// Calling elements
console.log(`Language: ${languages[0]}
Framework: ${framework[1]}
Tools: ${tools[2]}`)