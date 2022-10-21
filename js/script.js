// Copyright (c) 2022 Brennan Lee All rights reserved
//
// Created by: Brennan Lee
// Created on: oct 2022
// This file contains the JS functions for index.html

/**
 * This function gets users street and street number and shows it back to user.
 */
function enterClicked() {
  // input
  const street = document.getElementById("street").value
  const streetNumber = parseInt(document.getElementById("streetNumber").value)

  // output
  document.getElementById("address").innerHTML =
    "Your info is: " + street + streetNumber + "."
}
