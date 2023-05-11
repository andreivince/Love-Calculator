function submitForm() {
    // Get the form elements
    var firstName = document.getElementsByName("firstName")[0].value;
    var lastName = document.getElementsByName("lastName")[0].value;
  
    // Check if the names are "Andrei" and "Veronica" or "Veronica" and "Andrei"
    if ((firstName.toLowerCase() === "andrei" && lastName.toLowerCase() === "veronica") || (firstName.toLowerCase() === "veronica" && lastName.toLowerCase() === "andrei")) {
      var loveScore = 100;
    } else if (firstName.toLowerCase() === "andrei" && lastName.toLowerCase() !== "veronica" || firstName.toLowerCase() !== "veronica" && lastName.toLowerCase() === "andrei") {
      var loveScore = 0;
    } else if (firstName.toLowerCase() === "veronica" && lastName.toLowerCase() !== "andrei" || firstName.toLowerCase() !== "andrei" && lastName.toLowerCase() === "veronica") {
        var loveScore = 0;
    } else {
      var loveScore = Math.floor(Math.random() * 101);
    }
  
    // Display the result
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "O amor de " + firstName + " e " + lastName + " é de " + loveScore + "%.";
  }
  