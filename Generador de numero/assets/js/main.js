const generar = ()=> {
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
  console.log(pares)
  console.log(paresAd)
  tabody.innerHTML+=`<td><p>Se ha generado ${pares.length} pares</p></td><br>`;
  tabody.innerHTML+=`<td><p>Se ha generado ${paresAd.length} pares para combinar</p></td><br>`;
  
  //Generar Combinaciones
  
let combi =[ [pares], [paresAd]];
combi = combi.filter(function(item){
  return item!==remove
 });
let auxCombinacionesFinal = []
let auxCombinacionesTemporal = []
/* 
/* Lista items primer grupo, deposito en auxiliar que
 utilizaré para formar las combinaciones */
for (let item of combi [0]) {
  auxCombinacionesFinal.push(item)
}
/* Recorro todos los elementos desde la posición 1 de grupos hasta
el final, y en cada grupo concateno con los de la primer lista */
for (let indice = 1; indice < combi.length; indice++) {
  auxCombinacionesTemporal=[]
  for (let item of auxCombinacionesFinal) {
    for (let elem of combi[indice]) {
      auxCombinacionesTemporal.push(item + " " + elem)
    }
  }
  //Igualo la lista y la vació arriba para seguir usando la temporal
  auxCombinacionesFinal = auxCombinacionesTemporal
  
}

console.log(auxCombinacionesFinal)
}
 
}

/*function generarAD(){
  let element = document.getElementById('nvalor').value;
  let elementAd= document.getElementById('nvalorAd').value;
  let paresAd = [];
  let tabody = document.getElementById('tbody');
    if (element == null || element == '' || elementAd==null || elementAd=='') {
  }
    for (let i = 0; i <= elementAd; i++) {
    if (i % 2 == 0) {
      paresAd.push(i);
      //console.log(pares);
    }else{
      let remove = 0;
      paresAd = paresAd.filter(function(item){
      return item!==remove
       });
      console.log(paresAd)
      tabody.innerHTML+=`<td><p>Se ha generado ${paresAd.length} pares</p></td><br>`;
    }
   }
   
  }*/
