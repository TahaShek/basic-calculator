let calc=()=>{
    let value1 =parseInt(document.querySelector('#i1').value);
    let value2 =parseInt(document.querySelector('#i2').value);
    let oper =document.querySelector('#ope').value;
    if(oper ==="+"){
         document.querySelector('#result').value=value1 + value2;


    }
    if(oper ==="-"){
        document.querySelector('#result').value=value1 - value2;


   }
   if(oper ==="*"){
    document.querySelector('#result').value=value1 * value2;


}
if(oper ==="/"){
    document.querySelector('#result').value=value1 / value2;


}
}