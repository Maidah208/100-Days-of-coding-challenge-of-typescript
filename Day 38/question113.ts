let Countries = new Map<string, string>();
Countries.set("Pakistan", "Islamabad"); 
Countries.set("Afghanistan", "Kabul"); 
Countries.set("Japan", "Tokyo"); 

console.log(Countries);

function logCapitalOfCanada(countries: Map<string, string>): void {
    if (Countries.has("Canada")) {
      console.log(`The capital of Canada is ${Countries.get("Canada")}`);
    } else {
      console.log("Canada is not in the Map.");
    }
}

logCapitalOfCanada(Countries)


