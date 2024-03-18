let person_name = "Ashrab AHmed"
console.log(`Upper Case: ${person_name.toUpperCase()}`);
console.log(`Lower Case: ${person_name.toLowerCase()}`);

let titleCase = person_name.split(" ").map((word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
console.log(`Title Case: ${titleCase}`);