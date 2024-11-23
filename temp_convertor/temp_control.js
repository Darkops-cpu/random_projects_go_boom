const display = document.getElementById("output");
const input = document.getElementById("temp");
const cf = document.getElementById("c_f");
const fc = document.getElementById("f_c");
const btn = document.getElementById("btn");

btn.onclick = function () {
    let x = input.value;
    if(cf.checked == true){
        let f = x * 9/5 + 32;
        display.textContent = (f);
    }
    else if(fc.checked == true){
        let c = (x - 32) * 5/9;
        display.textContent = (c);
    }
}