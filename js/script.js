function enterClicked() {

  const street = document.getElementById("street").value
  const streetNumber = parseInt(document.getElementById("street number-entered").value)

  document.getElementById("address").innerHTML =
    "Your info is: " + street + " " + streetNumber + "."
}
