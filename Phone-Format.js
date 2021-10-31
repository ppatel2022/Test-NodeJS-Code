
let input = '  123   456   789024  52525  251341  41532';
input = input.split(/\s+/).join('');    // Remove all SPACEs from entire string anywhere...

input = input.substring(0,10);  // Gives first 10 charachers from string only.

//Format 10 Digit string into (000)-000-0000 format.
let Regex = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})/;
let Replace_Pattern = '($1)-$2-$3'
let Output = input.replace(Regex,Replace_Pattern); 


console.log(' PHONE ::', Output)

input = " Hello? How~~ are You!!!??";

input = input.replace(/[^a-zA-Z0-9]/g, '');

console.log(' Keep only [a-zA-Z0-9] characters ::', input)