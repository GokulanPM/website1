function calculateCompoundInterest() {
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value) / 100;
    let time = parseFloat(document.getElementById("time").value);
    let frequency = parseFloat(document.getElementById("frequency").value);

    let amount = principal * Math.pow(1 + rate / frequency, frequency * time);
    let interest = amount - principal;

    document.getElementById("ciResult").innerHTML = `
        <p>Total Amount: ${amount.toFixed(2)}</p>
        <p>Total Interest: ${interest.toFixed(2)}</p>
    `;
}