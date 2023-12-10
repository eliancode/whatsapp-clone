import React, { useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  let message: Message;
  const mainUrl: string = "http://192.168.124.49:3000";
  const messageUrl: string = "http://localhost:3055/messages";
  interface Message {
    from: any;
    to: string;
    message: any;
  }

  function getData() {
    axios
      .get(mainUrl)
      .then((res) => {
        let messageElement =
          document.getElementById("messageElement")?.innerHTML;
        messageElement = res.data;
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
    let messageField: HTMLInputElement | null = document.getElementById(
      "messageField"
    ) as HTMLInputElement;
    postData({
      from: prompt("Gib deinen Benutzernamen ein: "),
      to: "all",
      message: result,
    });
    messageField.value = "";
  };
  <>
    <label>
      Geben Sie die Nachricht hier ein:
      <input name="data" value="Geben sie Die Nachricht hier ein: " />
    </label>
  </>;
  //message = getData();

  // let dataMessage = message.message;
  // console.log(dataMessage);

  return (
    <>
      <div id="collection">
        <input
          type="text"
          id="messageField"
          placeholder="Nachricht eingeben"
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleSubmit} id="sendButton">
          Send
        </button>
      </div>
      <h1 id="message_in_JSON">
        Message in JSON. SOLLTE sich ändern - tut es nd
      </h1>
      getData();
    </>
  );
}

export default App;
