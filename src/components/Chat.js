import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Messages } from "./Message";

const Chat = () => (
  <div className="container">
    <h3 className=" text-center">Game Messaging</h3>
    <div className="messaging">
      <div className="inbox_msg">
        <div className="mesgs">
          <div className="msg_history">
            <Messages />
          </div>
          <div className="type_msg">
            <div className="input_msg_write">
              <input
                type="text"
                className="write_msg"
                placeholder="Type a message"
              ></input>
              <button className="msg_send_btn" type="button">
                <FontAwesomeIcon icon={faPaperPlane} color="darkgrey" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const ChatInfo = () => {
  return (
    <>
      <Chat />
    </>
  );
};
