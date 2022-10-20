function enterClicked() {
  const street = document.getElementById("street-entered").value
  const streetNumber = parseInt(
    document.getElementById("streetNumber-entered").value
  )

  document.getElementById("address").innerHTML =
    "Your info is: " + street + " " + streetNumber + "."
}
