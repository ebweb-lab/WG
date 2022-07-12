const generar = () => {
  let element = document.getElementById('nvalor').value;
  let elementAd= document.getElementById('nvalorAd').value;
  let pares = [];
  let paresAd = [];
  let tabody = document.getElementById('tbody');
    if (element == null || element == '' || elementAd==null || elementAd=='') {
    alert('Ingrese los 2 valores');
  }else{
    for (let i = 0; i <= element; i++) {
      if (i % 2 == 0) {
        pares.push(i);
      }
     }
     //Segundo valor
     for (let i = 0; i <= elementAd; i++) {
      if (i % 2 == 0) {
        paresAd.push(i);
      }
     }
     let remove = 0;
     pares = pares.filter(function(item){
      return item!==remove
     });
     //segundo valor
     paresAd = paresAd.filter(function(item){
      return item!==remove
     });
     //Generar 2 Combinaciones
    var ar1 = pares.concat(paresAd);

    var result = [].concat(...ar1.map( 
        (v, i) => ar1.slice(i+1).map( w => v + ',' + w ))
    );
    const dduplicated = [];
    for(var i = 0; i < result.length; i++) {
 
  const elemento = result[i];
 
  if (!dduplicated.includes(result[i])) {
    dduplicated.push(elemento);
  }
}
if(document.getElementById('checkbox1').checked){

  //Generar 2
  function cartesian() {
    var r = [], arg = arguments, max = arg.length-1;
    function helper(arr, i) {
        for (var j=0, l=arg[i].length; j<l; j++) {
            var a = arr.slice(0);
            a.push(arg[i][j])
            if (i==max) {
                r.push(a);
            } else
                helper(a, i+1);
        }
    }
    helper([], 0);
    return r;
};



console.log(cartesian(pares, paresAd));
//console.log(cartesian(pares, paresAd));
}else{
  function cartesian() {
    var r = [], arg = arguments, max = arg.length-1;
    function helper(arr, i) {
        for (var j=0, l=arg[i].length; j<l; j++) {
            var a = arr.slice(0);
            a.push(arg[i][j])
            if (i==max) {
                r.push(a);
            } else
                helper(a, i+1);
        }
    }
    helper([], 0);
    return r;
};
let testm = JSON.stringify(cartesian(pares, paresAd));

console.log(cartesian(pares, paresAd,paresAd));
}
 
  //console.log(result);
    tabody.innerHTML+=`<td><p>Se ha generado ${pares.length} pares</p></td><br>
                       <td><p>Se ha generado ${paresAd.length} pares para combinar</p></td><br>`;

    }

    function convertToCSV(objArray) {
 const array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
 let str = "";
for (let i = 0; i < array.length; i++) {
  let line = "";
  for (let index in array[i]) {
   if (line != "") line += ".";
line += array[i][index];
  }
str += line + "\r\n";
 }
return str;
}
//let testm = JSON.stringify(cartesian(pares, paresAd));

function exportCSVFile(headers, items, fileName) {
 if (headers) {
  items.unshift(headers);
 }
const jsonObject = JSON.stringify(items);
const csv = convertToCSV(jsonObject);
const exportName = fileName + ".csv" || "export.csv";
const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
 if (navigator.msSaveBlob) {
  navigator.msSaveBlob(blob, exportName);
 } else {
  const link = document.createElement("a");
  if (link.download !== undefined) {
   const url = URL.createObjectURL(blob);
   link.setAttribute("href", url);
   link.setAttribute("download", exportName);
   link.style.visibility = "hidden";
   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);
  }
 }
}
const headers = {
    id: 'Combinaciones'
};
const data = [{
        id: 1,
        nombre: 'John Doe'
    },
    {
        id: 2,
        nombre: 'Juan'
    },
    {
        id: 3,
        nombre: 'Samanta'
    }
];

//const limpiar =cartesian(paresAd, pares).replace(/^[,\s]+|[,\s]+$/g, '').replace(/,[,\s]*,/g, ',');
exportCSVFile(headers, cartesian(pares, paresAd));

    $("#btnexportar").click(

      );
  
     
    }

