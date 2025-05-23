// Helper to show result and remove placeholder
function showResult(element, text) {
    element.innerText = text;
    element.classList.remove('placeholder');
}

// Helper to reset to placeholder
function showPlaceholder(element) {
    element.innerText = "Result will appear here";
    element.classList.add('placeholder');
}

// SIP Calculator
function calculateSIP() {
    const sipAmount = document.getElementById("sipAmount").value;
    const rateOfReturn = document.getElementById("sipRateOfReturn").value;
    const duration = document.getElementById("sipDuration").value;
    const result = document.getElementById("sipResult");

    if (sipAmount && rateOfReturn && duration) {
        const totalAmount = sipAmount * (((Math.pow(1 + rateOfReturn / 100, duration) - 1) / (rateOfReturn / 100)) * (1 + rateOfReturn / 100));
        showResult(result, `Total Amount: ₹${totalAmount.toFixed(2)}`);
    } else {
        alert("Please fill all the fields");
        showPlaceholder(result);
    }
}

// Inflation Calculator
function calculateInflation() {
    const inflationAmount = document.getElementById("inflationAmount").value;
    const inflationRate = document.getElementById("inflationRate").value;
    const inflationDuration = document.getElementById("inflationDuration").value;
    const result = document.getElementById("inflationResult");

    if (inflationAmount && inflationRate && inflationDuration) {
        const futureValue = inflationAmount * Math.pow(1 + inflationRate / 100, inflationDuration);
        showResult(result, `Future Value: ₹${futureValue.toFixed(2)}`);
    } else {
        alert("Please fill all the fields");
        showPlaceholder(result);
    }
}

// Compound Interest Calculator
function calculateCompoundInterest() {
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("compoundRate").value;
    const duration = document.getElementById("compoundDuration").value;
    const result = document.getElementById("compoundResult");

    if (principal && rate && duration) {
        const amount = principal * Math.pow(1 + rate / 100, duration);
        showResult(result, `Compound Interest: ₹${(amount - principal).toFixed(2)} and Total Amount: ₹${amount.toFixed(2)}`);
    } else {
        alert("Please fill all the fields");
        showPlaceholder(result);
    }
}

// CAGR Calculator
function calculateCAGR() {
    const initialValue = document.getElementById("initialValue").value;
    const finalValue = document.getElementById("finalValue").value;
    const years = document.getElementById("years").value;
    const result = document.getElementById("cagrResult");

    if (initialValue && finalValue && years) {
        const cagr = Math.pow(finalValue / initialValue, 1 / years) - 1;
        showResult(result, `CAGR: ${(cagr * 100).toFixed(2)}%`);
    } else {
        alert("Please fill all the fields");
        showPlaceholder(result);
    }
}

// Lump Sum Calculator
function calculateLumpSum() {
    const amount = document.getElementById("lumpSumAmount").value;
    const rate = document.getElementById("lumpSumRate").value;
    const years = document.getElementById("lumpSumYears").value;
    const result = document.getElementById("lumpSumResult");

    if (amount && rate && years) {
        const futureValue = amount * Math.pow(1 + rate / 100, years);
        showResult(result, `Future Value: ₹${futureValue.toFixed(2)}`);
    } else {
        alert("Please fill all the fields");
        showPlaceholder(result);
    }
}

// EMI Calculator
function calculateEMI() {
    const loanAmount = document.getElementById("loanAmount").value;
    const loanInterest = document.getElementById("loanInterest").value;
    const loanDuration = document.getElementById("loanDuration").value;
    const result = document.getElementById("emiResult");

    if (loanAmount && loanInterest && loanDuration) {
        const emi = loanAmount * loanInterest / 1200 / (1 - Math.pow(1 + loanInterest / 1200, -loanDuration));
        showResult(result, `EMI: ₹${emi.toFixed(2)}`);
    } else {
        alert("Please fill all the fields");
        showPlaceholder(result);
    }
}

// XIRR Calculator
function calculateXIRR() {
    const result = document.getElementById("xirrResult");
    alert("XIRR calculation requires an external library. This feature is advanced.");
    showPlaceholder(result);
}

// SWP Calculator
function calculateSWP() {
    const swpAmount = document.getElementById("swpAmount").value;
    const swpRate = document.getElementById("swpRate").value;
    const swpDuration = document.getElementById("swpDuration").value;
    const result = document.getElementById("swpResult");

    if (swpAmount && swpRate && swpDuration) {
        const monthlyWithdrawal = (swpAmount * (swpRate / 100)) / 12;
        showResult(result, `Monthly Withdrawal: ₹${monthlyWithdrawal.toFixed(2)}`);
    } else {
        alert("Please fill all the fields");
        showPlaceholder(result);
    }
}
