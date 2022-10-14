// Copyright (c) 2020 Brennan Lee All rights reserved
//
// Created by: Brennan Lee
// Created on: oct 2022
// This file contains the JS functions for index.html

/**
 * This function gets users sreet and sreet number and shows it back to user.
 */
 function enterClicked() {
    // input
    const streetNumber = parseInt (document.getElementById("street number").value
    const streetName = parseInt(document.getElementById("street").value)
  
    // output
    document.getElementById("address").innerHTML =
      "Your info is: " + streetName + "", streetNumber. " 
  }
  