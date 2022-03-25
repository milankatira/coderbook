/* eslint-disable no-undef */
import React, { useEffect, useRef } from "react";
import Client from "../components/Client";
import Editor from "./Editor";
import { initSocket } from "../socket";
import ACTIONS from "../Action";
import { useLocation,useNavigate,Navigate,useParams } from "react-router-dom";
import toast from "react-hot-toast";
const EditorPage = () => {
  const [client, setClient] = React.useState([
    { socketId: 1, username: "gfgh" },
    { socketId: 2, username: "gfgh" },
    { socketId: 2, username: "gfgh" },
    { socketId: 2, username: "gfgh" },
    { socketId: 2, username: "gfgh" },
    { socketId: 2, username: "gfgh" },
    { socketId: 2, username: "gfgh" },
    { socketId: 2, username: "gfgh" },
  ]);

  const socketRef = useRef(null);
  const location = useLocation();
  const {roomId}=useParams();
  const reactNavigator = useNavigate();

  if(!location.state){
    Navigate('/')
  }
  useEffect(() => {
    const init = async () => {
      socketRef.current = await initSocket();

      socketRef.current.on("connect_error", (err) => handleErrors(err));

      socketRef.current.on("connect_failed", (err) => handleErrors(err));

      function handleErrors(err) {
        console.log(err);
        toast.error('Socket connection failed');
        reactNavigator('/');
      }
      
      socketRef.current.emit(ACTIONS.JOIN, {
        roomId,
        username: location.state?.username,
      });
    };
    init();
  }, []);

  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img className="logoImage" src="/code-sync.png" alt="logo-image" />
          </div>
          <h3>Connected</h3>

          <div className="clientsList">
            {client.map((client) => (
              <Client key={client.socketId} username={client.username} />
            ))}
          </div>
        </div>
        <button className="btn copyBtn">copy Room Id</button>

        <button className="btn leaveBtn">Leave</button>
      </div>

      <div className="editorWrap">
        <Editor />
      </div>
    </div>
  );
};

export default EditorPage;
