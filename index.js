function evaluateEquation() {
    const factors = (number) => {
        let leftfactorsNumber = [];
        let rightfactorsNumber = [];
        for (let i = 0; i <= number; i++) {
            if (number % i === 0) {
                leftfactorsNumber.push(i);
            }
        }
        for (const factor in leftfactorsNumber) {
            for (let i = 0; i <= number; i++) {
                if (factor * i === number) {
                    rightfactorsNumber.push(i);
                    continue;
                }
            }
        }
        return [leftfactorsNumber, rightfactorsNumber];
    };
    console.log(factors(18));
    const degree = document.getElementById("degree");
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const c = document.getElementById("c").value;
    const answerElement = document.getElementById("answer");
    const plusOrMinusSymbol = "&#8723;";
    const radicalSymbol = "&radic;";
    const squareOfB = b + "*" + b;
    const divAnswerText = document.createElement("div");
    divAnswerText.innerHTML = "<h1>-----Steps-----</h1>";
    answerElement.appendChild(divAnswerText);
    const sqrtb = b * b;
    const times4ac = `<span style="border-top:2.5px solid black;">${sqrtb} -(4*${a}* ${c})</span>`;
    let answer = sqrtb - 4 * a * c;
    //  case 1 check if b^2 -4ac > 0 if it is then there are two possible values x1 and x2
    //  case 2 check if b^2 -4ac == 0 if it is then there is only one possible value x
    if (answer > 0) {
        // there are two posible value
        let x1 = (-(b) + Math.sqrt(answer)) / 2 * a;
        let x2 = (-(b) - Math.sqrt(answer)) / 2 * a;
        // const answerElement1 = ""+(-(b))+plusOrMinusSymbol+radicalSymbol+times4ac;
        const answerElement1 = `<span style="border-bottom:2.5px solid black;">${-b}${plusOrMinusSymbol}${radicalSymbol}${times4ac}</span><br>2*${a}`;
        const div = document.createElement("div");
        const div2 = document.createElement("div");
        div.innerHTML = answerElement1;
        div2.innerHTML = `X<sub>1</sub> = ${x1} or X<sub>2</sub> = ${x2}`;
        answerElement.appendChild(div);
        answerElement.appendChild(div2);
        return;
    }
    else if (answer == 0) {
        // there is one posible value
        // means that form the quadratic formular the square root of b^2-4ac if its 0 then the square root the 0 is 0
        // so if you drive the formular when the square root of b^2-4ac is 0 you get x=-b/2a
        let x = ((-(b)) / 2 * a);
        answerElement.textContent = `X = ${x}`;
        return;
    }
    else {
        // here means that b^2 - 4ac is negative so we get the complex number example return will be -2+i or -2-i
        // since we know that b^2 - 4ac will give us negative then we use absolute to get the positive number inoder to get the square root of that number so that we can find the square root of that number but our answer will be in negative
        let absNumber = Math.abs(answer);
        // since square root of a number is equal t0 number i example square root of -4 = 2i
        let squareOfNegative = Math.sqrt(absNumber);
        let divedBBy2 = -(b) / 2;
        let diveTheNegativeSquareRootBy2 = squareOfNegative / 2;
        let x1 = `${divedBBy2}+${diveTheNegativeSquareRootBy2}i`;
        let x2 = `${divedBBy2}-${diveTheNegativeSquareRootBy2}i`;
        answerElement.innerHTML = `X<sub>1</sub> = ${x1} or X<sub>2</sub> = ${x2}`;
        return;
    }


}