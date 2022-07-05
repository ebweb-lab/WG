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
console.log(cartesian(pares, paresAd,paresAd));
}
    
  //console.log(result);
    tabody.innerHTML+=`<td><p>Se ha generado ${pares.length} pares</p></td><br>
                       <td><p>Se ha generado ${paresAd.length} pares para combinar</p></td><br>`;

    }
  var wb = XLSX.utils.book_new();
  wb.Props = {
  Title: "Numeros Pares Combinados",
  Subject: "Permutaciones",
  Author: "EBCODE",
  CreatedDate: new Date(2017,12,19)
  };
  wb.SheetNames.push("Combinaciones Realizadas");
  //var ws_data = [['hello, hola', 'world']];
  var ws_data = [[cartesian]];
  var ws = XLSX.utils.aoa_to_sheet(ws_data);
  wb.Sheets["Combinaciones Realizadas"] = ws;
  var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});
  function s2ab(s) {
  var buf = new ArrayBuffer(s.length);
  var view = new Uint8Array(buf);
  for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
  return buf;
  }
  $("#btnexportar").click(function(){
  saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'Numeros_Combinados.xlsx');
  });
     
    }

