export default function calculateBazal(weight, until10, until20, above20) {
    if(!weight) {
        return;
    }

    var weightRemainder = weight;
    var result = 0;
    var calculation = [];
    calculation.push("Výpočet pre váhu "+ weight+" kg:");
    // first 10 kg
    var resultPart = 0;
    if(weightRemainder <= 10) {
        resultPart = weightRemainder * until10;
        calculation.push(weightRemainder + " * " + until10 + " = " + resultPart);
        calculation.push("Bazál: "+resultPart+" ml.");
        return {
            calculationText : calculation,
            result : result
        }
    } else {
        resultPart = 10 * until10;
        calculation.push(10 + " * " + until10 + " = " + resultPart);
        weightRemainder -= 10;
    }
    result += resultPart;

    // next 10 kg
    resultPart = 0;
    if(weightRemainder <= 10) {
        resultPart += weightRemainder * until20;
        calculation.push(weightRemainder + " * " + until20 + " = " + resultPart);
        result += resultPart;
        calculation.push("Bazál: "+result+" ml.");
        return {
            calculationText : calculation,
            result : result
        }
    } else {
        resultPart = 10 * until20;
        calculation.push(10 + " * " + until20 + " = " + resultPart);
        weightRemainder -= 10;
    }
    result += resultPart;

    // rest of weight
    resultPart = weightRemainder * above20;
    calculation.push(weightRemainder + " * " + above20 + " = " + resultPart);
    result += resultPart;
    calculation.push("Bazál: "+result+" ml.");
    return {
        calculationText : calculation,
        result : result
    }
}