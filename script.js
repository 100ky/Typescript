/*
class Realitka {
    // Nejprve musíme deklarovat vlastnosti třídy
    windows: number;
    doors: number;
    color: string;
    height: number;
    isNew: boolean;
    garage: boolean;

    constructor(
        windows: number,
        doors: number,
        color: string,
        height: number,
        isNew: boolean,
        garage: boolean
    ) {
        // Tělo konstruktoru musí být uvnitř závorek
        this.windows = windows;
        this.doors = doors;
        this.color = color;
        this.height = height;
        this.isNew = isNew;
        this.garage = garage;
    }

    // Přidání metody pro zobrazení na stránce
    getDisplayHTML(): string {
        return `
            <div class="property-title">Informace o nemovitosti</div>
            <div class="property-details">
                <p>Počet oken: ${this.windows}</p>
                <p>Počet dveří: ${this.doors}</p>
                <p>Barva: ${this.color}</p>
                <p>Výška: ${this.height} m</p>
                <p>Nový dům: ${this.isNew ? 'Ano' : 'Ne'}</p>
                <p>Garáž: ${this.garage ? 'Ano' : 'Ne'}</p>
            </div>
        `;
    }
}

// Vytvoření objektu (oprava názvu proměnné "house1" místo "hause1")
const house1 = new Realitka(50, 20, "red", 10, true, true);

// Funkce pro zobrazení na stránce
function displayHouseOnPage(house: Realitka): void {
    const displayElement = document.getElementById('house-display');
    if (displayElement) {
        displayElement.innerHTML = house.getDisplayHTML();
    } else {
        console.error("Element pro zobrazení nebyl nalezen!");
    }
}

// Zobrazení na stránce po načtení DOM
document.addEventListener('DOMContentLoaded', () => {
    displayHouseOnPage(house1);
    console.log(house1);
});

// práce s poli
let employees: any[]
employees = ["David", "John", "Jane", "Jack", "Jill" , 5, true];

for (const oneEmployee of employees) {
    console.log(oneEmployee);
}

const person = {
    name: "David",
    age: 30,
    isEmployee: true,
    hobbies: ["reading", "swimming", "running"],
}

for (const oneHobbie of person.hobbies) {
    console.log(`${person.name} a má rád ${oneHobbie}`);
}

// ukol
const hous = {
    windows: 4,
    doors: 2,
    color: "red",
    height: 10,
    isNew: true,
    garage: true,
    vipClients: ["Build-store", "Damage-to", "Bum-bum-company"],
    otherClients: ["Daniel", "John", "Jane", "Jack", "Jill"]
}

console.log(`O dům který má ${hous.windows} okna a ${hous.doors} dveře, barva je ${hous.color} a výška je ${hous.height} m, je nový: ${hous.isNew ? 'Ano' : 'Ne'} a má garáž: ${hous.garage ? 'Ano' : 'Ne'} mají zájem tito VIP klienti ${hous.vipClients} a tito další klienti ${hous.otherClients}`);

// tuples- pole s fixní délkou

const tuples: [string, number, boolean] = ["David", 30, true];

const employees: {
    name: string;
    age: number;
    isEmployee: boolean;
    hobbies: [string, string, string]; // tohle je tuples, definujeme fixní délku pole
} = {
    name: "David",
    age: 30,
    isEmployee: true,
    hobbies: ["reading", "swimming", "running"],
};

for (const oneHobie of employees.hobbies) {
    console.log(`${employees.name} má rád ${oneHobie}`);
}

// Enum

enum Role { ADMIN, READ_ONLY, AUTHOR };

const employees = {
    name: "David",
    age: 30,
    role: Role.READ_ONLY
}

//ukol
enum House_condition { habited = "obydlený", uninhabited = "neobyvatelný", normal = "Normálka" };

const hause = {
    windows: 4,
    doors: 2,
    color: "red",
    height: 10,
    isNew: true,
    garage: true,
    vipClients: ["Build-store", "Damage-to", "Bum-bum-company"],
    otherClients: ["Daniel", "John", "Jane", "Jack", "Jill"],
    role: House_condition.uninhabited
}

console.log(hause.role);


// Union type

function combine(input1: number | string, input2: number | string) {
    let result;
    if (typeof(input1) === 'number' && typeof(input2) === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30, 26);
const combinedNames = combine("David", "John");
console.log(combinedAges + " " + combinedNames);


// Literal type

function combine(input1, input2, resultConversion) {
    let result;
    if (typeof (input1) === 'number' && typeof (input2) === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedAges = combine(30, 26, ' as-number');
const combinedStringAges = combine('30', '26', 'as-number');
const combinedNames = combine("David", "John", 'as-text');
console.log(combinedAges + " " + combinedNames + " " + combinedStringAges);


// Type Aliases
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';



function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor): Combinable {
    let result: Combinable;
    if (typeof (input1) === 'number' && typeof (input2) === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedAges = combine(30, 26, 'as-number');
const combinedStringAges = combine('30', '26', 'as-number');
const combinedNames = combine("David", "John", 'as-text');
console.log(combinedAges + " " + combinedNames + " " + combinedStringAges);

// ukol
const hause = {
    windows: 4,
    doors: 2,
    color: "red",
    height: 10,
}

const hause2 = {
    windows: 5,
    doors: 1,
    color: "blue",
    height: 10,
    isNew: true,
 }
 
function sentence(myObject) {
    return `O dům který má ${myObject.windows} okna a ${myObject.doors} dveře, barva je ${myObject.color} a výška je ${myObject.height} m`;
}


console.log(sentence(hause));
console.log(sentence(hause2));


// fukce jako typ
function sum(num1: number, num2: number) {
    return num1 + num2;
}

function test(description: string): string {
    return description;
}

// Definování typu funkce
let myFunction: (x: number, y: number) => number;

// Přiřazení funkce, která odpovídá typu
myFunction = sum;

// Toto by způsobilo chybu, protože `test` neodpovídá typu
// myFunction = test;

// Volání funkce
console.log(myFunction(10, 40));

let myNumber: 5;
let myString: "David";


console.log(myFunction(5, 10));


// ukol

function test1(num1: number, num2: number): number {
    return num1 + num2;
}

let myFunction: (x: number, y: number) => number;
myFunction = test1;

function test2(description: string) {
    return description;
}

let myFunction2: (x: string) => string;
myFunction2 = test2;

function test3(myString: string, myNumber: number) {
    return myString
}

let myFunction3: (x: string, y: number) => string;
myFunction3 = test3;

*/
// Callback funkce
var y = function (nejakeCislo) { return console.log(nejakeCislo); };
y(10);
function sum(n1, n2, callBackFun) {
    var result = n1 + n2;
    callBackFun(result); // Zavolání callback funkce s výsledkem
}
// Callback funkce vrací hodnotu, ale ta se nikde nepoužije
sum(5, 30, function (x) {
    console.log(x); // Výstup: 35
    return x * 2; // Tato hodnota se nikde nepoužije
});
// Hlavní funkce `sum` stále vrací `undefined` (protože má typ `void`)
var result = sum(5, 30, function (x) { return console.log(x); });
console.log(result); // Výstup: undefined
