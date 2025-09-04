document.getElementById("paymentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  FlutterwaveCheckout({
    public_key: "FLWPUBK_TEST-021e4d517abbe4de6f247ac9da70f379-X",
    tx_ref: "txn_" + Date.now(),
    amount: document.getElementById("amount").value,
    currency: "USD",
    payment_options: "card, mobilemoney, ussd",
    customer: {
      email: document.getElementById("email").value,
      name: document.getElementById("name").value,
    },
    callback: function(data) {
      alert("Payment successful! Reference: " + data.tx_ref);
    },
    onclose: function() {
      alert("Transaction closed.");
    },
  });
});
