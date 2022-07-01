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

    //Generar 3 combinaciones


       console.log(dduplicated)
    
  //console.log(result);
    tabody.innerHTML+=`<td><p>Se ha generado ${pares.length} pares</p></td><br>
                       <td><p>Se ha generado ${paresAd.length} pares para combinar</p></td><br>
                       <td><p>Se ha generado ${dduplicated.length} pares combinados </p></td><br>`;
    }
     
    }