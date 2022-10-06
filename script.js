//kraštinės
let a = 3; //pirmas stačiakampis
let b = 8;

let c = 25; //antras stačiakampis
let d = 7;

let f = 3.148; //trečias stačiakampis
let g = 3.5456;

let plotas1 = plotoApskaiciavimas1 (a, b);
console.log(plotas1);

let plotas2 = plotoApskaiciavimas1 (c, d);
console.log(plotas2);

let plotas3 = plotoApskaiciavimas1 (f, g);
console.log(plotas3);

//apskaičiuojame stačiakampio plotą
function plotoApskaiciavimas1 (ilgis, plotis) {
    return ilgis * plotis;
}

