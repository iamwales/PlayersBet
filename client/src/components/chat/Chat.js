import React from "react";

import "./Chat.scss";

import Pat1 from "../../images/Patt.png";
import Pat2 from "../../images/Pat2.png";

const Chat = () => {
  return (
    <div className="chat mt-3">
      <div className="chat-head">
        <p className="game-nam">
          MADDEN NFL 20 Chats <br />
          <span>1002 Online</span>
        </p>
      </div>

      <div className="chat-section mt-5">
        <div className="mess">
          <div className="user ">
            <div className="user-img">
              <img src={Pat1} alt="" className="user" />
            </div>
            <div className="an">
              <p className="username">
                Pattn <br />
                <span>10:20pm</span>
              </p>
            </div>
          </div>
          <div className="text">
            <p className="chat-text">Anyone in for a $100 Challenge</p>
          </div>
        </div>

        <div className="mess">
          <div className="user ">
            <div className="user-img">
              <img src={Pat2} alt="" className="user" />
            </div>
            <div className="an">
              <p className="username">
                James <br />
                <span>10:22pm</span>
              </p>
            </div>
          </div>
          <div className="text">
            <p className="chat-text">Hello Pattn am in !!</p>
          </div>
        </div>
      </div>

      <div className="chat-input">
        <input type="text" placeholder="Enter text here" className="chat-inp" />
        <buttton className="send">SEND</buttton>
      </div>
    </div>
  );
};

export default Chat;
