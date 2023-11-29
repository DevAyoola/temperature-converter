const units = document.querySelector("#units");
const units_2 = document.querySelector("#units2");
const getvalue = document.querySelector("#getvalue");
const result = document.querySelector("#result");

//Main Function
function cal() {
    if(units.value === 'C' && units_2.value === 'K') {
        result.value = Number(getvalue.value) + 273;
    }

    else if (units.value === 'K' && units_2.value === 'C') {
        result.value = Number(getvalue.value) - 273;
    }  

    else if (units.value === 'C' && units_2.value === 'F') {
        result.value = (5/9) * (Number(getvalue.value) - 32)
    } 

    else if (units.value === 'F' && units_2.value === 'C') {
        result.value = ((9/5) * Number(getvalue.value)) + 32;
    } 

    else if (units.value === 'K' && units_2.value === 'F') {
        result.value = ((9*Number(getvalue.value) - 2297) / 5);
    } 

    else if (units.value === 'F' && units_2.value === 'K') {
        result.value = ((5*Number(getvalue.value) + 2297) / 9);
    } 

    else if (units.value == units_2.value) {
        result.value = Number(getvalue.value);
    }

    else {
        result.value = 0;
    }
}

