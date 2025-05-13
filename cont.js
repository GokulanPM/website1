function calculateSIP() {
  let amount = parseFloat(document.getElementById("sipAmount").value);
  let rate = parseFloat(document.getElementById("sipRateOfReturn").value) / 100 / 12;
  let years = parseFloat(document.getElementById("sipDuration").value);
  let months = years * 12;
  let result = amount * ((Math.pow(1 + rate, months) - 1) / rate) * (1 + rate);
  document.getElementById("sipResult").innerText = "Future Value: ₹" + result.toFixed(2);
}

function calculateInflation() {
  let amount = parseFloat(document.getElementById("inflationAmount").value);
  let rate = parseFloat(document.getElementById("inflationRate").value) / 100;
  let years = parseFloat(document.getElementById("inflationDuration").value);
  let result = amount * Math.pow(1 + rate, years);
  document.getElementById("inflationResult").innerText = "Future Cost: ₹" + result.toFixed(2);
}

function calculateCompoundInterest() {
  let principal = parseFloat(document.getElementById("principal").value);
  let rate = parseFloat(document.getElementById("compoundRate").value) / 100;
  let years = parseFloat(document.getElementById("compoundDuration").value);
  let result = principal * Math.pow(1 + rate, years);
  document.getElementById("compoundResult").innerText = "Future Value: ₹" + result.toFixed(2);
}

function calculateCAGR() {
  let initial = parseFloat(document.getElementById("initialValue").value);
  let final = parseFloat(document.getElementById("finalValue").value);
  let years = parseFloat(document.getElementById("years").value);
  let result = Math.pow(final / initial, 1 / years) - 1;
  document.getElementById("cagrResult").innerText = "CAGR: " + (result * 100).toFixed(2) + "%";
}

function calculateLumpSum() {
  let amount = parseFloat(document.getElementById("lumpSumAmount").value);
  let rate = parseFloat(document.getElementById("lumpSumRate").value) / 100;
  let years = parseFloat(document.getElementById("lumpSumYears").value);
  let result = amount * Math.pow(1 + rate, years);
  document.getElementById("lumpSumResult").innerText = "Future Value: ₹" + result.toFixed(2);
}

function calculateEMI() {
  let loan = parseFloat(document.getElementById("loanAmount").value);
  let rate = parseFloat(document.getElementById("loanInterest").value) / 100 / 12;
  let months = parseFloat(document.getElementById("loanDuration").value);
  let emi = loan * rate * Math.pow(1 + rate, months) / (Math.pow(1 + rate, months) - 1);
  document.getElementById("emiResult").innerText = "Monthly EMI: ₹" + emi.toFixed(2);
}

function calculateXIRR() {
  let amounts = document.getElementById("investmentAmounts").value.split(',').map(Number);
  let dates = document.getElementById("investmentDates").value.split(',').map(d => new Date(d.trim()));
  let finalAmount = parseFloat(document.getElementById("finalAmount").value);
  amounts.push(-finalAmount);
  dates.push(new Date());

  function xirr(values, dates, guess = 0.1) {
    const daysBetween = (d1, d2) => (d2 - d1) / (1000 * 3600 * 24);
    const xnpv = (rate) =>
      values.reduce((sum, val, i) => sum + val / Math.pow(1 + rate, daysBetween(dates[0], dates[i]) / 365), 0);

    let rate = guess;
    for (let i = 0; i < 100; i++) {
      let fx = xnpv(rate);
      let dfx = (xnpv(rate + 0.0001) - fx) / 0.0001;
      let newRate = rate - fx / dfx;
      if (Math.abs(newRate - rate) < 1e-6) return newRate;
      rate = newRate;
    }
    return rate;
  }

  let result = xirr(amounts, dates);
  document.getElementById("xirrResult").innerText = "XIRR: " + (result * 100).toFixed(2) + "%";
}

function calculateSWP() {
  let amount = parseFloat(document.getElementById("swpAmount").value);
  let rate = parseFloat(document.getElementById("swpRate").value) / 100 / 12;
  let months = parseFloat(document.getElementById("swpDuration").value);
  let swp = amount * rate / (1 - Math.pow(1 + rate, -months));
  document.getElementById("swpResult").innerText = "Monthly Withdrawal: ₹" + swp.toFixed(2);
}
