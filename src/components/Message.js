import { ChatTime } from "../utilities/time";
import { setData, useData, useUserState } from "../utilities/firebase";

let messageNumber = 1;

export const message = (gameId, message, user) => {
  if (user === null) {
    return alert("Please sign in to be able to send messages");
  }
  setData(`/messages/${gameId}/${"message-" + messageNumber}`, {
    author: user.email,
    text: message,
    timestamp: Date.now(),
  });
};

const sortKeys = (obj) => {
  return Object.assign(
    ...Object.entries(obj)
      .sort()
      .map(([key, value]) => {
        return {
          [key]: value,
        };
      })
  );
};

export const Messages = ({ gameId }) => {
  const [data, loading, error] = useData("/messages");
  const user = useUserState()[0];

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading messages...</h1>;
  const chatMessages = data[gameId];
  if (chatMessages === undefined || user === null) {
    return <></>;
  }
  messageNumber = Object.keys(chatMessages).length + 1;
  const orderedChatMessages = sortKeys(chatMessages);
  return (
    <div>
      {Object.entries(orderedChatMessages).map(([key, message]) => {
        if (message.author === user.email) {
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
                  alt={message.author}
                ></img>
              </div>
              <div key={key} className={"received_msg"}>
                <div className="received_withd_msg">
                  <p className="pb-0 font-weight-bold text-success">
                    {message.author}
                  </p>
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
