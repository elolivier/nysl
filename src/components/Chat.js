import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faLongArrowAltLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Messages, message } from "./Message";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useState } from "react";
import { useUserState } from "../utilities/firebase";

const Chat = () => {
  const params = useParams();
  const gameId = params.chatId;
  const [input, setInput] = useState("");
  const user = useUserState()[0];

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
                  value={input}
                  onInput={(e) => setInput(e.target.value)}
                ></input>
                <button
                  className="msg_send_btn"
                  type="button"
                  onClick={() => {
                    message(gameId, input, user);
                    setInput("");
                  }}
                >
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
