import axios from "axios";
import React, { useState } from "react";
export default function useUpdateMessage() {
  const [message, setMessage] = useState("message");
  const messageUrl: string = "http://192.168.178.21:3000/:3055/messages";
  function getData() {
    axios
      .get(messageUrl)
      .then((res) => {
        const responseData: JSON = res.data.payload;
        const convertedData: string = JSON.stringify(responseData);
        return convertedData;
      })
      .catch((reason) => {
        console.log(
          "Something went wrong while getting data from backend. Reason: " +
            reason
        );
      });
  }
  function addMessages() {
    const newMessage = getData() + "";
    let messageElement: HTMLInputElement | null = document.getElementById(
      "messageElement"
    ) as HTMLInputElement;
    messageElement.value = newMessage;
    setMessage(newMessage);
  }
  return addMessages;
}
