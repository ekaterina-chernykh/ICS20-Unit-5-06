// Copyright (c) 2022 Ekaterina All rights reserved
//
// Created by: Ekaterina
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit-5-06/sw.js", {
    scope: "/ICS20-Unit-5-06/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  // input
  const value1 = parseFloat(document.getElementById("value1").value)
  const value2 = parseFloat(document.getElementById("value2").value)
  let counter = 0
  let result = 0

  while (counter < value2) {
    result = result + value1
    counter = counter + 1
  }
  // output
  document.getElementById("result").innerHTML = "The result is: " + result
}
