function generar(){
let element = document.getElementById('nvalor').value;

let pares = [''];

let tabody = document.getElementById('tbody');
  if (element == null || element == '') {

  alert('Debes introducir un valor');
}
  for (let i = 0; i <= element; i++) {
  if (i % 2 == 0) {
    console.log(i);
    tabody.innerHTML+=`<th>${i}</th>`;
  }

 }
}