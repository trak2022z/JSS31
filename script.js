'use strict';
(function() {
    window.addEventListener('load', init);

    function init() {

function pizzaCook(resolve, reject) {
    
  //let bool = false;
  let bool = true;

    if (bool) {
        resolve('Pizza is ready!');
    } else {
        reject('The oven is broken!');
    }
}


function pizzaPay(resolve, reject) {
    
  //let bool = false;
  let bool = true;

    if (bool) {
        resolve('Payed!');
    } else {
        reject('No money');
    }
}

      
let p = new Promise(pizzaCook);
let pp = new Promise(pizzaPay);

     
function letsEat(msg) {
    console.log('OK: ' + msg);
}

function stayHungry(msg) {
    console.log('Problem: ' + msg);
}

function letsPay(msg) {
    console.log('OK: ' + msg);
}

function notPay(msg) {
    console.log('Problem: ' + msg);
}

      
p.then(letsEat).catch(stayHungry);
pp.then(letsPay).catch(notPay);

      
    }

})();