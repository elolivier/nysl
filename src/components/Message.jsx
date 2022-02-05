import { PropTypes } from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import ChatTime from '../utilities/time';
import { setData, useData, useUserState } from '../utilities/firebase';

let messageNumber = 1;

export const message = (gameId, data, user) => {
  if (user === null) {
    <Alert variant="danger">Please login to use this function</Alert>;
  }
  setData(`/messages/${gameId}/${`message-${messageNumber}`}`, {
    author: user.email,
    text: data,
    timestamp: Date.now(),
  });
};

const sortKeys = (obj) => Object.assign(
  ...Object.entries(obj)
    .sort()
    .map(([key, value]) => ({
      [key]: value,
    })),
);

export function Messages({ gameId }) {
  const [data, loading, error] = useData('/messages');
  const user = useUserState()[0];

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading messages...</h1>;
  const chatMessages = data[gameId];
  if (chatMessages === undefined || user === null) {
    return <div />;
  }
  messageNumber = Object.keys(chatMessages).length + 1;
  const orderedChatMessages = sortKeys(chatMessages);
  return (
    <div>
      {Object.entries(orderedChatMessages).map(([key, messageData]) => {
        if (messageData.author === user.email) {
          return (
            <div key={key} className="outgoing_msg">
              <div className="sent_msg">
                <p>{messageData.text}</p>
                <span className="time_date">
                  <ChatTime time={messageData.timestamp} />
                </span>
              </div>
            </div>
          );
        }
        return (
          <div key={key} className="incoming_msg">
            <div className="incoming_msg_img">
              <img
                src="https://ptetutorials.com/images/user-profile.png"
                alt={messageData.author}
              />
            </div>
            <div key={key} className="received_msg">
              <div className="received_withd_msg">
                <p className="pb-0 font-weight-bold text-success">
                  {messageData.author}
                </p>
                <p>{messageData.text}</p>
                <span className="time_date">
                  <ChatTime time={messageData.timestamp} />
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Messages.propTypes = {
  gameId: PropTypes.string.isRequired,
};
