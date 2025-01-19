function validateSyntax() {
  let input = document.getElementById("petInput").value;
  // Regular expression to check if the input starts with "pet_" and is followed by letters and numbers
  const regex = /^pet_[a-zA-Z0-9]+$/;

  // Check if the input matches the regular expression
  let result = "";
  if (regex.test(input)) {
    result = "Valid Syntax.";
  } else {
    result = "Invalid Syntax.";
  }

  // Display the result
  document.getElementById("result").innerText = result;
}
