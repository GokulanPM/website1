// SIP Calculator
function calculateSIP() {
    const sipAmount = document.getElementById("sipAmount").value;
    const rateOfReturn = document.getElementById("sipRateOfReturn").value;
    const duration = document.getElementById("sipDuration").value;
  
    if (sipAmount && rateOfReturn && duration) {
      const totalAmount = sipAmount * (((Math.pow(1 + rateOfReturn / 100, duration) - 1) / (rateOfReturn / 100)) * (1 + rateOfReturn / 100));
      document.getElementById("sipResult").innerText = `Total Amount: ₹${totalAmount.toFixed(2)}`;
    } else {
      alert("Please fill all the fields");
    }
  }
  
  // Inflation Calculator
  function calculateInflation() {
    const inflationAmount = document.getElementById("inflationAmount").value;
    const inflationRate = document.getElementById("inflationRate").value;
    const inflationDuration = document.getElementById("inflationDuration").value;
  
    if (inflationAmount && inflationRate && inflationDuration) {
      const futureValue = inflationAmount * Math.pow(1 + inflationRate / 100, inflationDuration);
      document.getElementById("inflationResult").innerText = `Future Value: ₹${futureValue.toFixed(2)}`;
    } else {
      alert("Please fill all the fields");
    }
  }
  
  // Compound Interest Calculator
  function calculateCompoundInterest() {
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("compoundRate").value;
    const duration = document.getElementById("compoundDuration").value;
  
    if (principal && rate && duration) {
      const amount = principal * Math.pow(1 + rate / 100, duration);
      document.getElementById("compoundResult").innerText = `Compound Interest: ₹${(amount - principal).toFixed(2)} and Total Amount: ₹${amount.toFixed(2)}`;
    } else {
      alert("Please fill all the fields");
    }
  }
  
  // CAGR Calculator
  function calculateCAGR() {
    const initialValue = document.getElementById("initialValue").value;
    const finalValue = document.getElementById("finalValue").value;
    const years = document.getElementById("years").value;
  
    if (initialValue && finalValue && years) {
      const cagr = Math.pow(finalValue / initialValue, 1 / years) - 1;
      document.getElementById("cagrResult").innerText = `CAGR: ${(cagr * 100).toFixed(2)}%`;
    } else {
      alert("Please fill all the fields");
    }
  }
  
  // Lump Sum Calculator
  function calculateLumpSum() {
    const amount = document.getElementById("lumpSumAmount").value;
    const rate = document.getElementById("lumpSumRate").value;
    const years = document.getElementById("lumpSumYears").value;
  
    if (amount && rate && years) {
      const futureValue = amount * Math.pow(1 + rate / 100, years);
      document.getElementById("lumpSumResult").innerText = `Future Value: ₹${futureValue.toFixed(2)}`;
    } else {
      alert("Please fill all the fields");
    }
  }
  
  // EMI Calculator
  function calculateEMI() {
    const loanAmount = document.getElementById("loanAmount").value;
    const loanInterest = document.getElementById("loanInterest").value;
    const loanDuration = document.getElementById("loanDuration").value;
  
    if (loanAmount && loanInterest && loanDuration) {
      const emi = loanAmount * loanInterest / 1200 / (1 - Math.pow(1 + loanInterest / 1200, -loanDuration));
      document.getElementById("emiResult").innerText = `EMI: ₹${emi.toFixed(2)}`;
    } else {
      alert("Please fill all the fields");
    }
  }
  
  // XIRR Calculator
  function calculateXIRR() {
    alert("XIRR calculation requires an external library. This feature is advanced.");
  }
  
  // SWP Calculator
  function calculateSWP() {
    const swpAmount = document.getElementById("swpAmount").value;
    const swpRate = document.getElementById("swpRate").value;
    const swpDuration = document.getElementById("swpDuration").value;
  
    if (swpAmount && swpRate && swpDuration) {
      const monthlyWithdrawal = (swpAmount * (swpRate / 100)) / 12;
      document.getElementById("swpResult").innerText = `Monthly Withdrawal: ₹${monthlyWithdrawal.toFixed(2)}`;
    } else {
      alert("Please fill all the fields");
    }
  }
  