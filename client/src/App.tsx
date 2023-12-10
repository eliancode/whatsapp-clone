import React, { useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  let data: string = "";
  const mainUrl: string = "http://localhost:3055";
  const messageUrl: string = "http://localhost:3055/messages";
  interface Message {
    from: any;
    to: string;
    message: any;
    id: any;
  }

  function getData() {
    axios
      .get(mainUrl)
      .then(function (res) {
        data = res.data;
        console.log(data);
      })
      .catch((reason) => {
        console.log(
          "Something went wrong while getting data from backend. Reason: " +
            reason
        );
      });
  }

  function postData(message: Message) {
    axios
      .post(messageUrl, message)
      .then(() => {
        console.log("Sucess in frontend!");
      })
      .catch((reason) => {
        console.log(
          "Something went wrong while posting data to backend. Reason: " +
            reason
        );
      });
  }
  const [messageValue, setMessageValue] = useState("message");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessageValue(event.target.value);
  };
  const handleSubmit = () => {
    let result: string = messageValue;
    postData({
      from: prompt("Gib deinen Benutzernamen ein: "),
      to: "all",
      message: result,
      id: null,
    });
  };
  <>
    <label>
      Geben Sie die Nachricht hier ein:
      <input name="data" value="Geben sie Die Nachricht hier ein: " />
    </label>
  </>;
  return (
    <div id="collection">
      <label htmlFor="messageField">Enter your message here: </label>
      <input type="text" id="messageField" onChange={handleInputChange} />
      <button type="button" onClick={handleSubmit}>
        Send
      </button>
    </div>
  );
}

export default App;
