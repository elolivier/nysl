import { useParams } from "react-router";
import { ChatTime } from "../utilities/time";

export const Messages = () => {
  const params = useParams();
  const chatJson = require("../chat.json");
  const chatMessages = chatJson.messages[params.chatId];

  return (
    <div>
      {Object.entries(chatMessages).map(([key, message]) => {
        if (message.author === "abc@example.com") {
          return (
            <div key={key} className={"outgoing_msg"}>
              <div className="sent_msg">
                <p>{message.text}</p>
                <span className="time_date">
                  <ChatTime time={message.timestamp} />
                </span>
              </div>
            </div>
          );
        } else {
          return (
            <div key={key} className="incoming_msg">
              <div className="incoming_msg_img">
                <img
                  src="https://ptetutorials.com/images/user-profile.png"
                  alt="sunil"
                ></img>
              </div>
              <div key={key} className={"received_msg"}>
                <div className="received_withd_msg">
                  <p>{message.text}</p>
                  <span className="time_date">
                    <ChatTime time={message.timestamp} />
                  </span>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};