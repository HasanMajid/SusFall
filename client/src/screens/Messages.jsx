import { useState, useEffect } from "react";
import io from "socket.io-client";
// const socket = io.connect("http://localhost:3000");

function Messages() {
  const [message, setMessage] = useState("");
  const [convo, setConvo] = useState([]);

  // const sendMessage = () => {
  //   socket.emit("send_message", { message: message });
  // };

  // useEffect(() => {
  //   console.log('socket changed')
  //   socket.on("receive_message", (data) => {
  //     // console.log("convo:",convo)
  //     setConvo(prevList =>{return [...prevList, data.message]});
  //     // setConvo([...convo, data.message]);
  //     console.log(data.message);
  //   });
  // }, [socket]);

  // useEffect(()=>{
  //   console.log('initial render finished')
  // },[])

  // useEffect(()=>{
  //   console.log(convo)
  // },[convo])

  return <div></div>

  return (
    <div className="App">
      <h1>Hello World</h1>
      <label>Message: </label>
      <input
        placeholder="message..."
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <button
        style={{ color: "gray", backgroundColor: "cyan", fontWeight: "bold" }}
        onClick={sendMessage}
      >
        {" "}
        Send{" "}
      </button>

      {convo.map((item, index) => {
        return <h4 key={index}>{item}</h4>;
      })}
    </div>
  );
}

export default Messages;
