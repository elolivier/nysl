import { ChatTime } from "../utilities/time";
import { useData } from "../utilities/firebase";

export const Messages = ({ chatId }) => {
  const [data, loading, error] = useData("/messages");

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading messages...</h1>;
  const chatMessages = data[chatId];

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
