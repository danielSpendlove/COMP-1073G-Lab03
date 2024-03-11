const output = document.getElementById('output');

function Hamburger(bun,vegetable,cheese,sauce,meat,pattyCount,extraTopping){
    this.bun = bun;
    this.vegetable = vegetable;
    this.cheese = cheese;
    this.sauce = sauce;
    this.meat = meat;
    this.pattyCount = pattyCount;
    this.extraTopping = extraTopping;
    this.burgerInfo = function () {
        return `${this.pattyCount} ${this.meat} burger with ${this.vegetable}, ${this.cheese} cheese, ${this.sauce}, ${this.extraTopping}, and a ${this.bun} bun.`;
    };
}
let hamburger = new Hamburger("Brioche", "Lettuce","Swiss","Ketchup","Beef","Double","Pickles");
output.textContent = hamburger.burgerInfo();