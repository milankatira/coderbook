import React from "react";
import Client from "../components/Client";
import Editor from "./Editor";

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
        <Editor/>
      </div>
    </div>
  );
};

export default EditorPage;
