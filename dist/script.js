"use strict";
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


// Callback funkce

const y = (nejakeCislo: number ) => console.log(nejakeCislo);

y(10);

function sum(n1: number, n2: number, callBackFun: (n3: number) => void): void {
    const result = n1 + n2;
    callBackFun(result); // Zavolání callback funkce s výsledkem
}

// Callback funkce vrací hodnotu, ale ta se nikde nepoužije
sum(5, 30, (x) => {
    console.log(x); // Výstup: 35
    return x * 2; // Tato hodnota se nikde nepoužije
});

// Hlavní funkce `sum` stále vrací `undefined` (protože má typ `void`)
const result = sum(5, 30, (x) => console.log(x));
console.log(result); // Výstup: undefined

//Unknow type

let test: unknown; // Proměnná může obsahovat libovolný typ
let result: string;

test = 5; // Přiřazení čísla
test = "David"; // Přiřazení řetězce

// Před použitím musíme ověřit typ
if (typeof test === 'string') {
    result = test; // Bezpečné přiřazení, protože víme, že test je string
    console.log(result); // Výstup: David
}

// Toto by způsobilo chybu, protože typ není ověřen
// result = test; // Chyba: Typ 'unknown' není přiřaditelný k typu 'string'.


//Never type

function generateError(errorText: string, errorNumber: number): never {
    throw { message: errorText, errorCode: errorNumber }; // Funkce nikdy nevrátí hodnotu
}

generateError("Chyba!", 500); // Vyvolá výjimku a ukončí běh programu

function infiniteLoop(): never {
    while (true) {
        console.log("Toto se bude opakovat navždy");
    }
}
    
    // příkazy v tsconfig.json
// "target": "es5", // cílová verze JavaScriptu
// "module": "commonjs", // modulární systém
// "outDir": "./dist", // výstupní adresář pro zkompilované soubory
// "rootDir": "./src", // kořenový adresář pro zdrojové soubory
// "strict": true, // zapnutí přísného režimu
// noUnusedLocals: true, // varování pro nepoužité lokální proměnné
// if(5 > 3) {
//     console.log("5 je větší než 3");
// noUnusedParameters: true, // varování pro nepoužité parametry funkcí
// function test(a: number, b: number) {
//     console.log(a);
//     // b není použitý, takže TypeScript vyhodí varování
//noImplicitReturns: true, // varování pro funkce, které nemají explicitní návratovou hodnotu
// function sum2(a: number, b: number)
if(n1+n2 >= 0) {
    return n1 + n2;
    }
    return "Chyba: součet je záporný";
}
// arrow function
    const sumArrow = (n1: number, n2: number) => {
        return n1 + n2;
    }
// nebo ještě kratší zápis
const sumArrow = (n1: number, n2: number) => n1 + n2;

//Defaultní parametr
cosnt sumDefault = (n1: number, n2: number = 10) => n1+n2;
console.log(sumDefault(5)); // Výstup: 15

//Spread operátor
const hobbies = ["čtení", "plavání", "běhání"];
const activeHobbies = ["jízda na kole"];
activeHobbies.push(...hobbies); // Přidání všech prvků z hobbies do activeHobbies pomocí ...

//Rest parametr
const sum = (...numbers: number[]) => {
    return numbers.reduce((acc, curr) => acc + curr, 0); // Použití reduce pro sečtení všech čísel
 }
console.log(sum(1, 2, 3, 4, 5)); // Výstup: 15
console.log(sum (1, 2, 3)); // Výstup: 6


//Array destrukturing
const employees = ["David", "John", "Jane", "Jack", "Jill"];
const [employee1, employee2, ...restOfEmployees] = employees; // Destrukturing pole

console.log(employee1); // Výstup: David
console.log(employee2); // Výstup: John
console.log(restOfEmployees); // Výstup: ["Jane", "Jack", "Jill"] ostatní zaměstnanci
// Destrukturing objektu
const person = {
    name: "Tom",
    age: 30,
    isEmployee: true,
    hobbies: ["reading", "swimming", "running"],
}
const { name: personName, age, ...restOfPerson } = person; // Destrukturing objektu
console.log(personName); // Výstup: David
console.log(age); // Výstup: 30
console.log(restOfPerson); // Výstup: { isEmployee: true, hobbies: ["reading", "swimming", "running"] }

// Objektově orientované programování (OOP) v TypeScriptu

class Department {
    name: string;
    number: number;

    constructor(na: string, nu: number) {
        this.name = na;
        this.number = nu;
    }
}

const department1 = new Department("IT", 1);
const department2 = new Department("HR", 2);

console.log(department1);
console.log(department2);
console.log(department1.name);
console.log(department2.number);
console.log(department1.number);
console.log(department2.name);
console.log(department1.name + " " + department1.number);
console.log(department2.name + " " + department2.number);
//ukol

class House {
    street: string;
    number: number;
    floors: number;

    constructor(street: string, number: number, floors: number) {
        this.street = street;
        this.number = number;
        this.floors = floors;
    }
}
const house1 = new House("Pernerova", 1, 2);
const house2 = new House("Litomyšlská", 2, 3);
const house3 = new House("T.Novákové", 8, 4);

console.log(house1);
console.log(house2);
console.log(house3);

// OOP a metody

class Department {
    departmentName: string;
    number: number;

    constructor(departmentName: string, number: number) {
        this.departmentName = departmentName;
        this.number = number;
    }

    describe() {
        console.log( `Oddělení ${this.departmentName} má číslo ${this.number}`);
    }
}

const HRdep = new Department("Human resources", 100);
const MAdep = new Department("Marketing", 200);
const FIdep = new Department("Finance", 300);
HRdep.describe(); // Výstup: Oddělení Human resources má číslo 100
MAdep.describe(); // Výstup: Oddělení Marketing má číslo 200
FIdep.describe(); // Výstup: Oddělení Finance má číslo 300

// ukol

class House {
    street: string;
    number: number;
    floors: number;
    state: string;

    constructor(street: string, number: number, floors: number, state: string) {
        this.street = street;
        this.number = number;
        this.floors = floors;
        this.state = state;
    }
    describe() {
        console.log(`Jedná se o ${this.state} dům s číslem ${this.number}. Nachází se na ulici ${this.street}. Má ${this.floors} podlaží `)
    }
}

const house1 = new House("Pernerova", 1, 2, "nový");
const house2 = new House("Litomyšlská", 2, 3, "starý");
const house3 = new House("T.Novákové", 8, 4, "zchátralý");
house1.describe(); // Výstup: Jedná se o nový dům s číslem 1. Nachází se na ulici Pernerova. Má 2 podlaží
house2.describe(); // Výstup: Jedná se o starý dům s číslem 2. Nachází se na ulici Litomyšlská. Má 3 podlaží
house3.describe(); // Výstup: Jedná se o zchátralý dům s číslem 8. Nachází se na ulici T.Novákové. Má 4 podlaží

// Public a private vlastnosti
class Department {
    private departmentName: string;
    private number: number;
    private employee: string[] = [];

    constructor(departmentName: string, number: number) {
        this.departmentName = departmentName;
        this.number = number;
    }

    describe() {
        console.log(`Oddělení ${this.departmentName} má číslo ${this.number} a má zaměstnance ${this.employee} .`);
    }
    // Přidání zaměstnanců
    addEmployee(oneEmployee: string) {
        this.employee.push(oneEmployee);
    }
    printAllEmployees() {
        for (const oneEmployee of this.employee) {
            console.log(oneEmployee);
        }
        }
}
const HRdep = new Department("Human resources", 100);
const MAdep = new Department("Marketing", 200);
const FIdep = new Department("Finance", 300);


HRdep.addEmployee("Davida");
MAdep.addEmployee("Johna");
FIdep.addEmployee("Jane");

HRdep.describe();
MAdep.describe();
FIdep.describe();

HRdep.printAllEmployees();

// Readonly vlastnosti
class Department {
    private readonly departmentName: string;
    private readonly number: number;
    private employee: string[] = [];

    constructor(departmentName: string, number: number) {
        this.departmentName = departmentName;
        this.number = number;
    }

    describe() {
        console.log(`Oddělení ${this.departmentName} má číslo ${this.number} a má zaměstnance ${this.employee} .`);
    }
    // Přidání zaměstnanců
    addEmployee(oneEmployee: string) {
        this.employee.push(oneEmployee);
    }
    printAllEmployees() {
        for (const oneEmployee of this.employee) {
            console.log(oneEmployee);
        }
        }
}
const HRdep = new Department("Human resources", 100);
const MAdep = new Department("Marketing", 200);
const FIdep = new Department("Finance", 300);
HRdep.addEmployee("Davida");
MAdep.addEmployee("Johna");
FIdep.addEmployee("Jane");
HRdep.describe();


// Inheritance (dědičnost) - OOP koncept umožňující dědění vlastností a metod z jiné třídy
class Department {
    // readonly - vlastnost nelze po inicializaci měnit
    // private - přístup pouze uvnitř této třídy
    private readonly departmentName: string;
    private readonly number: number;
    // protected - přístupné v této třídě i ve všech třídách, které dědí z této třídy
    protected employee: string[] = []; // Použití protected pro dědičnost

    constructor(departmentName: string, number: number) {
        this.departmentName = departmentName;
        this.number = number;
    }

    // Metoda popisující oddělení
    describe() {
        console.log(`Oddělení ${this.departmentName} má číslo ${this.number} a má zaměstnance ${this.employee} .`);
    }
    // Přidání zaměstnanců
    addEmployee(oneEmployee: string) {
        this.employee.push(oneEmployee);
    }
    // Metoda pro výpis všech zaměstnanců v konzoli
    printAllEmployees() {
        for (const oneEmployee of this.employee) {
            console.log(oneEmployee);
        }
        }
}

// Dědění třídy Department - ITDepartment dědí všechny vlastnosti a metod z třídy Department
class ITDepartment extends Department {
    // Konstruktor s parametry a deklarací public vlastnosti přímo v parametru
    mainAdmin: string; // Deklarace vlastnosti mainAdmin

    constructor(number: number, public admins: string[]) {
        // super() musí být vždy jako první příkaz v konstruktoru potomka
        super("IT", number); // Zavolání konstruktoru nadřazené třídy
        this.mainAdmin = admins[0]; // Nastavení hlavního administrátora
        this.admins = admins; // Inicializace administrátorů
    }
    // Getter - metoda pro získání seznamu administrátorů
    get leadAdmin() {
        if (this.mainAdmin) {
            return this.mainAdmin;
        }
        throw new Error("Není nastaven hlavní administrátor.");
    }
    // setter - metoda pro nastavení hlavního administrátora
    set leadAdmin(value: string) {
        if (this.mainAdmin) {
            this.mainAdmin = value;
        } else {
            throw new Error("Není nastaven hlavní administrátor.");
        }
    }



    // Přepsání (override) metody z rodičovské třídy - stejné jméno, jiná implementace
    addEmployee(name: string): string {
        if (name === "David" || name === "John") // porovná zda je zaměstnanec admin
        {
            return "Tento zaměstnanec má přístup.";
        } else {
            // Přístup k protected vlastnosti z rodičovské třídy
            this.employee.push(name);
            return "Zaměstnanec byl přidán."; // pokud ne, přidá zaměstnance do pole employee
        }
    }

}




// Vytvoření instance třídy ITDepartment s číslem oddělení a seznamem administrátorů
const ITdep = new ITDepartment(100, ["David", "John"]);
// Volání přepsané metody addEmployee
ITdep.addEmployee("Jane");

// Výpis celého objektu ITdep do konzole
console.log(ITdep);

console.log(ITdep.leadAdmin); // Výpis hlavního administrátora
// Změna hlavního administrátora
ITdep.leadAdmin = "John";



// statické metody a vlastnosti
class Department {
    static fiscalYear = 2023; // statická vlastnost třídy
    private employees: string[] = []; // instance vlastnost třídy

    constructor(private readonly departmentName: string, private readonly number: number) {
        this.departmentName = departmentName;
        this.number = number;
    }

    // statická metoda
    static createEmployee(name: string) {
        return { name: name };
    }
    // instance metoda
    describe() {
        console.log(`Oddělení ${this.departmentName} má číslo ${this.number} a má zaměstnance ${this.employees} .`);
    }
    // Přidání zaměstnanců
    addEmployee(oneEmployee: string) {
        this.employees.push(oneEmployee);
    }
    // Metoda pro výpis všech zaměstnanců v konzoli
    printAllEmployees() {
        for (const oneEmployee of this.employees) {
            console.log(oneEmployee);
        }
    }
}
// Vytvoření instance třídy Department
const HRdep = new Department("Human resources", 100);
const MAdep = new Department("Marketing", 200);
const FIdep = new Department("Finance", 300);
// Přidání zaměstnanců
HRdep.addEmployee("Davida");
MAdep.addEmployee("Johna");
FIdep.addEmployee("Jane");
// Zavolání instance metody
HRdep.describe();
MAdep.describe();
FIdep.describe();
// Zavolání statické metody
const employee1 = Department.createEmployee("David");
const employee2 = Department.createEmployee("Jabadiáš");

// Úprava: Výpis obou zaměstnanců do konzole
console.log("První zaměstnanec:", employee1);
console.log("Druhý zaměstnanec:", employee2);
console.log("Fiskální rok:", Department.fiscalYear);

// Alternativně můžete vypsat oba najednou
console.log("Oba zaměstnanci:", employee1, employee2);

// Nebo je vypsat jako pole
console.log("Zaměstnanci jako pole:", [employee1, employee2]);
*/ 
