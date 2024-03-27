function calculateFootprint() {

    //assume, smartPhone consume 5 Watt
    //assume, Computer Consumes 120 Watt
    var electricity1 = parseFloat(document.getElementById("electricity1").value);
    var electricity2 = parseFloat(document.getElementById("electricity2").value);

    var electricityTotal = (electricity1 * 5) + (electricity2 * 120);

    //assume, emission factor of electricity is 0.85
    var electricityFinal = (electricityTotal / 1000) * 0.85;

    //assume,petrol price 106.03/-
    var transportation = parseFloat(document.getElementById("transportation").value);
    var transportationTotal = transportation / 106.03;

    //assume, emission factor of Petrol is 2.296
    var transportationFinal = transportationTotal * 2.296;

    //var waste = parseFloat(document.getElementById("waste").value);

    var total = electricityFinal + transportationFinal;

    var totalThirty = total * 30;

    var totalTreePlantation = (55.5 / 1500 ) * totalThirty;

    document.getElementById("result1").innerHTML = "Your estimated carbon footprint Perday is: " + (total.toFixed(2)) + " kgCO2e";
    document.getElementById("result2").innerHTML = "Your estimated carbon footprint in a Month is: " + (totalThirty.toFixed(2)) + " kgCO2e";
    document.getElementById("result3").innerHTML = "No of Trees Plant in a Month: " + (totalTreePlantation.toFixed(2));

}
