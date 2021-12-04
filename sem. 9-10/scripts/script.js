//1
//(вывод на лист)
document.write('задание 1:')
for(var i=0;i<8;i++){
    for(var j=0;j<i;j++){
        document.write('#');
    }
    document.write('<br/>');
}

// 2
console.log('задание 2:')
for(var i=1;i<101;i++){
    if(i%3==0 & i%5==0) {
        console.log('FizzBuzz')
    } else if (i%3==0){
        console.log('Fizz')
    } else if (i%5==0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}

// 3
document.write('задание 3:')
document.write('<br/>')
for (let i = 1; i <= 8; i++) {
    if (i % 2 == 0) {
        document.write(("   " + "#").repeat(4) + '<br/>');
    } else {
        document.write(("#").repeat(4) + '<br/>');
    }
}


// 4
console.log('задание 4:')
function min(x,y) {
    if (x>y){
        console.log('min: '+y)
    } else {
        console.log('min: '+x)
    }
}
min(1,2)

// 5
document.write('задание 5:')
document.write('<br/>')
let n5="cBaBb"
function CountBs(a){
    let c=0;
    for (let i=1; i<= a.length; i++) {
        if (a.charAt(i)=="B") {
            c=c+1;
        }
    }
    document.write("Количество B: " + c + '<br/>');
}

function countChar(a,b){
    let c=0;
    for (let i=1; i<= a.length; i++) {
        if (a.charAt(i)==b) {
            c=c+1;
        }
    }
    document.write('Количество ' + b + ': ' + c + '<br/>');
}

CountBs(n5)
countChar(n5,'a')

// 6
console.log('задание 6:')
function range(a,b){
    let n6 = [];
    for (let i=a; i<=b; i++){
        n6.push(i)
    }
    console.log(n6);
    return n6;
}
function sum(c){
    let s=0;
    for (let i=0;i<c.length;i++){
        s+=c[i]
    }
    console.log(s)
}

sum(range(5,10))

// 7
console.log('задание 7:')
function reverseArray(a){
    let n7=[];
    for (let i=a.length-1; i>=0;i--){
        n7.push(a[i])
    }
    console.log(n7);
    return n7;
}

function reverseArrayInPlace(a) { 
    j=a.length
    for (let i=0;i<a.length/2; i++){
        let t=a[i];
        a[i]=a[a.length-1-i];
        a[a.length-1-i]=t;

    }
    console.log(a);
    return a;
}

reverseArray([1,2,3,4,5])
reverseArrayInPlace([1,2,3,4,5])

// 8
console.log('задание 8:')
function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }
    return list;
}

console.log(arrayToList([1, 2, 3]));

function listToArray(list, array=[]) {
    array.push(list.value)
    if (list.rest != null) {
      list = list.rest;
      return listToArray(list, array)
    } else {
      return array;
    }
}
  
console.log(listToArray(arrayToList([1,2,3])));


// 9
console.log('задание 9:')
function deepEqual(x, y) {
    if (x === y) {
      return true;
    }
    else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
        if (x == y)
        return true;
    } else {
        return false
    }
}

console.log(deepEqual(1,1))

// 10
console.log('задание 10:')
array = [[1, 2], [3, 4, 5], [6, 7]]
console.log(array.reduce(function(a, b) {return a.concat(b);}, []));

// 11
console.log('задание 11:')
var ANCESTRY_FILE = JSON.stringify([
    { "name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel" },
    { "name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme" },
    { "name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen" },
    { "name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten" },
    { "name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano" },
    { "name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother": null },
    { "name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother": null },
    { "name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene" },
    { "name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm" },
    { "name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes" },
    { "name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother": null },
    { "name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape" },
    { "name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters" },
    { "name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans" },
    { "name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother": null },
    { "name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke" },
    { "name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker" },
    { "name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker" },
    { "name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze" },
    { "name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke" },
    { "name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father": null, "mother": null },
    { "name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke" },
    { "name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze" },
    { "name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene" },
    { "name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters" },
    { "name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke" },
    { "name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke" },
    { "name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters" },
    { "name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze" },
    { "name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano" },
    { "name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke" },
    { "name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes" },
    { "name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke" },
    { "name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens" },
    { "name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander" },
    { "name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke" },
    { "name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert" },
    { "name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier" },
    { "name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke" }
])

function average(array) {  
    function plus(a, b) { 
        return a + b; 
    }
    return array.reduce(plus) / array.length;
}

ancestry = JSON.parse(ANCESTRY_FILE);  

var byName = {}; 
ancestry.forEach(function(person) {
    byName[person.name] = person;
});

// создаём новый массив со всеми элементами, прошедшими проверку
var difference = ancestry.filter(  
    function(person) {
      return byName[person.mother] != null;  
    }).map( 
       function(person) {
         return person.born - byName[person.mother].born
       });
  
console.log(average(difference));

// 12
console.log('задание 12:')
var n12 = JSON.parse(ANCESTRY_FILE);  

centuries = {}
n12.forEach(function(person){
  if ( centuries[Math.ceil(person.died / 100)] ) {
    centuries[Math.ceil(person.died / 100)].push(person.died - person.born)
  } else {
    centuries[Math.ceil(person.died / 100)] = [person.died - person.born]
  }
})

for (century in centuries) {
  centuries[century] = average(centuries[century]);
  console.log(centuries[century])
}

// 13
console.log('задание 13:')
function some(arr, f) {
    for (let i = 0; i < arr.length; i++) {
        if (f(arr[i])) {
            return true
        }
    }
    return false
}
  
function every(arr, f) {
    for (let i = 0; i < arr.length; i++) {
        if (!f(arr[i])) {
            return false
        }
    }
    return true
}
  
console.log(every([NaN, NaN, NaN], isNaN))
console.log(every([NaN, NaN, 10], isNaN))
console.log(some([NaN, 5, 6], isNaN))
console.log(some([1, 2, 3], isNaN))
