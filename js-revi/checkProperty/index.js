//.checked  = property that determines the checked state of
//an HTML checkbox or radio button element
const myCheckBox = document.getElementById("mycheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const payPalBtn = document.getElementById("payPalBtn");
const submit = document.getElementById("propertyForm");

const subResult = document.getElementById("subResult"); 
const paymentResult = document.getElementById("result");

submit.onsubmit = function (event) {
    event.preventDefault(); // Stop the form from reloading the page

    // ✅ Check the subscription checkbox
    if (myCheckBox.checked) {
        subResult.textContent = "✅ You are subscribed!";
    } else {
        subResult.textContent = "❌ You are NOT subscribed!";
    }

    // ✅ Check which payment method is selected
    if (visaBtn.checked) {
        paymentResult.textContent = "💳 You are paying with Visa.";
    } else if (masterBtn.checked) {
        paymentResult.textContent = "💳 You are paying with Master Card.";
    } else if (payPalBtn.checked) {
        paymentResult.textContent = "💻 You are paying with PayPal.";
    } else {
        paymentResult.textContent = "⚠️ Please select a payment method.";
    }
};
