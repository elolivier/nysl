import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faLongArrowAltLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Messages } from "./Message";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

const Chat = () => {
  const params = useParams();
  const gameId = params.chatId;

  return (
    <div className="container">
      <Link to={"/game/" + gameId}>
        <FontAwesomeIcon size="lg" icon={faLongArrowAltLeft} color="darkgrey" />
      </Link>
      <h3 className=" text-center">Game Messaging</h3>
      <div className="messaging">
        <div className="inbox_msg">
          <div className="mesgs">
            <div className="msg_history">
              <Messages chatId={gameId} />
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
};

export const ChatInfo = () => {
  return (
    <>
      <Chat />
    </>
  );
};
