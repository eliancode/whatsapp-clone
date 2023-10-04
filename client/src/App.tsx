import React, { Component, FC, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  let data: string = "";
  const url: string = "http://localhost:3055";
  axios
    .get(url)
    .then(function (response) {
      data = response.data;
      console.log(response);
    })
    .catch((error) => {
      data = "SORRY. Cannot get data";
      console.log("Error found:" + error);
    });
  axios.post(url, {
    data: "PLS SEE THE POST",
  });
  return <p>{data}</p>;
}

export default App;
