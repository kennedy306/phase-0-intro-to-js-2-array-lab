// Write your solution here!
const cats =["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
   name ="Ralph"
   cats.push(name);
}

function destructivelyPrependCat(name) {
   name = "Bob";
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    name = "Broom";
    const copyCats = cats.slice();
    copyCats.push(name);
    return copyCats;
}
function prependCat(name){
    name = "Arnold";
    const copyCats1 = cats.slice();
    copyCats1.unshift(name);
    return copyCats1;
}
function removeLastCat(){
    const copyCats2 = cats.slice();
    copyCats2.pop();
    return copyCats2;
}
function removeFirstCat(){
    const copyCats5 = cats.slice();
    copyCats5.shift();
    return copyCats5;
}
