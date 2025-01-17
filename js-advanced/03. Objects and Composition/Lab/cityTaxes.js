function cityTaxes(name, population, treasury) {
    const myObject = {
        "name": name,
        "population": population,
        "treasury": treasury,
        "taxRate": 10,
        "collectTaxes": function() {
            this.treasury += this.population * this.taxRate;
        },
        "applyGrowth": function (percentage) {
            this.population += Math.floor(this.population * (percentage / 100));
        },
        "applyRecession": function (percentage) {
            this.treasury -= Math.ceil(this.treasury * (percentage / 100));
        }

    }

    return myObject;
}
const city =cityTaxes('Tortuga',
        7000,
        15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
city.applyRecession(5);
console.log(city.treasury);

const city2 = 
  cityTaxes('Tortuga',
  7000,
  15000);
console.log(city2);

