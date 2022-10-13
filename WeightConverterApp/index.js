    let dialog = document.querySelector('dialog');
    document.querySelector('#show').onclick = function() {
    dialog.show();
    };
    document.querySelector('#close').onclick = function() {
    dialog.close();
    };


    let input = document.querySelector(".inputWeight");
    let select = document.querySelector(".units");
    let output = document.querySelector(".outputInfo");


    input.addEventListener("input", function(){ 
    converter(input.value, select.value)
    });

    select.addEventListener("click", function(){ 
    converter(input.value, select.value)
    });

    function converter(value, measure) {

    if (measure == "mg"){

    output.innerHTML = 
    (value/1000) + ' gram/грамм ' + "<br />" +
    (value/1000000) + ' kilogram/килограмм '+ "<br />" + 
    (value/1000000000).toFixed(9) + ' ton/тонна ' + "<br />" +
    (value/6350000 ).toFixed(9) + ' stone/стоун ' + "<br />" +
    (value/453600).toFixed(9) + ' pound(lb)/фунт ' + "<br />" +
    (value * 0.000035273961949).toFixed(9) + ' ounce(oz)/унция ' + "<br />" 
    };

    if (measure == "g"){

    output.innerHTML = 
    (value*1000) + ' miligram/миллиграмм ' + "<br />" +
    (value/1000) + ' kilogram/килограмм '+ "<br />" + 
    (value/1000000).toFixed(9) + ' ton/тонна ' + "<br />" +
    (value/63500).toFixed(7) + ' stone/стоун ' + "<br />" +
    (value/453.6).toFixed(7) + ' pound(lb)/фунт ' + "<br />" +
    (value*0.035274).toFixed(8) + ' ounce(oz)/унция ' + "<br />"     
    };

    if (measure == "kg"){

    output.innerHTML = 
    (value*1000000) + ' miligram/миллиграмм ' + "<br />" +
    (value*1000) + ' gram/грамм '+ "<br />" + 
    (value/1000).toFixed(3) + ' ton/тонна ' + "<br />" +
    (value/6.35).toFixed(2) + ' stone/стоун ' + "<br />" +
    (value*2.205).toFixed(2) + ' pound(lb)/фунт ' + "<br />" +
    (value * 35.2739).toFixed(2) + ' ounce(oz)/унция ' + "<br />"     
    };

    if (measure == "t"){

    output.innerHTML = 
    (value*1000000000) + ' miligram/миллиграмм ' + "<br />" +
    (value*1000000) + ' gram/грамм '+ "<br />" + 
    (value*1000) + ' kilogram/килограмм '+ "<br />" + 
    (value * 157.4730).toFixed(2) + ' stone/стоун ' + "<br />" +
    (value*22.05).toFixed(2) + ' pound(lb)/фунт ' + "<br />" +
    (value * 35838.94).toFixed(1) + ' ounce(oz)/унция ' + "<br />"     
    };

    if (measure == "st"){

    output.innerHTML = 
    (value*6350000) + ' miligram/миллиграмм ' + "<br />" +
    (value*6350) + ' gram/грамм '+ "<br />" + 
    (value*6.35) + ' kilogram/килограмм '+ "<br />" + 
    (value/157.5).toFixed(2) + ' ton/тонна ' + "<br />" +
    (value*14) + ' pound(lb)/фунт ' + "<br />" +
    (value * 224) + ' ounce(oz)/унция ' + "<br />"
    };

    if (measure == "lb"){

    output.innerHTML = 
    (value*453600) + ' miligram/миллиграмм ' + "<br />" +
    (value*453.6) + ' gram/грамм '+ "<br />" + 
    (value/2.205).toFixed(2) + ' kilogram/килограмм '+ "<br />" + 
    (value/2205).toFixed(4) + ' ton/тонна ' + "<br />" +
    (value/14).toFixed(3) + ' stone/стоун ' + "<br />" +
    (value*16) + ' ounce(oz)/унция ' + "<br />"
    };

    if (measure == "oz"){

    output.innerHTML = 
    (value*28350) + ' miligram/миллиграмм ' + "<br />" +
    (value*28.35) + ' gram/грамм '+ "<br />" + 
    (value/35.274).toFixed(3) + ' kilogram/килограмм '+ "<br />" + 
    (value/35274).toFixed(5) + ' ton/тонна ' + "<br />" +
    (value/224).toFixed(4) + ' stone/стоун ' + "<br />" +
    (value/16).toFixed(3) + ' pound(lb)/фунт ' + "<br />" 
    };

    if (!Number(value) && ! value == '') output.innerHTML = 'Only numbers, please!';
    };
