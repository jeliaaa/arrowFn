var number = 5;
var string = "adasfafa";
var arr = [];

var obj = {
  id: 2,
  name: "giorgi",
  surname: "giorgadze",
  sulaberidze: "gvari",
  sleep: function () {
    console.log("zzzz");
    return 4;
  },
};

console.log(obj.sleep());

function funqcia(saxeli, gvari, asaki) {
  console.log(saxeli + gvari + asaki);
}

funqcia("aleksandre", "jelia", 12);
funqcia("aleksandreaaf", "jeliasss", 15);

var info = [
  { id: 1, username: "giorgi1", dob: "10-11-2007", age: 10 },
  { id: 2, username: "giorgi2", dob: "10-11-2007", age: 11 },
  { id: 3, username: "giorgi3", dob: "10-11-2007", age: 12 },
  { id: 4, username: "giorgi4", dob: "10-11-2007", age: 13 },
  { id: 5, username: "giorgi5", dob: "10-11-2007", age: 14 },
  { id: 6, username: "giorgi6", dob: "10-11-2007", age: 15 },
  { id: 7, username: "giorgi7", dob: "10-11-2007", age: 16 },
  { id: 8, username: "giorgi8", dob: "10-11-2007", age: 17 },
  { id: 9, username: "giorgi9", dob: "10-11-2007", age: 18 },
];

var info2 = [
  { id: 1, username: "giorgi1", dob: "10-11-2007", age: 10 },
  { id: 2, username: "giorgi2", dob: "10-11-2007", age: 11 },
  { id: 3, username: "giorgi3", dob: "10-11-2007", age: 12 },
  { id: 4, username: "giorgi4", dob: "10-11-2007", age: 13 },
  { id: 5, username: "giorgi5", dob: "10-11-2007", age: 14 },
  { id: 6, username: "giorgi6", dob: "10-11-2007", age: 15 },
  { id: 7, username: "giorgi7", dob: "10-11-2007", age: 16 },
  { id: 8, username: "giorgi8", dob: "10-11-2007", age: 17 },
  { id: 9, username: "giorgi9", dob: "10-11-2007", age: 18 },
];

function informaciisdamushaveba(dasamushavebeliMasivi) {
  var washlilebi = dasamushavebeliMasivi.splice(3);
  return dasamushavebeliMasivi;
}

var pirveliInfo = informaciisdamushaveba(info);
console.log(pirveliInfo);

var meoreInfo = informaciisdamushaveba(info2);
console.log(meoreInfo);

const useruser = {
  name: "aleksandre",
  surname: "jelia",
  age: 15,
};

const useruserArr = ["aleksandre", "jelia", 15];

useruser.name;
useruserArr[0];

const voidFunction = () => {};
const nonVoidFunction = () => 6;

var arrowfunqcia = () => {
  return 5;
};

var mokleFunqcia = () => voidFunction(); /// void mokle
var nonVoidMokleFunqcia = () => nonVoidFunction(); /// areturnebs imas rac daareturna gamodzaxebulma funqciam

console.log(arrowfunqcia());
console.log(mokleFunqcia());

var arrToSort = [0, 1, 2, 3, 4, 5];
arrToSort.sort((a, b) => b - a);



shevqmeni()


function shevqmeni(){
  console.log('sas');
}

var funqcia = () => {
  
}

shevqmeni()
