let laptopPrices1 = [1200,1400,1100];
let laptopPrices2 = [1000,1800,1300];

let combinedPrices = [...laptopPrices1,...laptopPrices2].sort((a,b) => a - b);
console.log(`Combined and sorted laptop prices are ${combinedPrices}`);

