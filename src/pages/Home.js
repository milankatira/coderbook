import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Home = () => {
  const [roomId, setRoomid] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const navigate = useNavigate();
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setRoomid(id);
    toast.success("Room created successfully");
  };

  const joinRoom = () => {
    if (!userName || !roomId) {
      toast.error("Please enter all the fields");
    } else {
      navigate(`/editor/${roomId}`, {
        state: {
          userName,
        },
      });
    }
  };

  const handleInputEnter = (e) => {
    if (e.key == "Enter") {
      joinRoom();
    }
  };
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img className="homePageLogo" src="code-sync.png" />
        <h4 className="mainLabel">Paste invitation Room Id</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="Room Id"
            onChange={(e) => setRoomid(e.target.value)}
            value={roomId}
            onKeyUp={handleInputEnter}
          />
          <input
            type="text"
            className="inputBox"
            placeholder="User name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            onKeyUp={handleInputEnter}
          />
          <button onClick={joinRoom} className="btn joinBtn">
            Join
          </button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <a onClick={createNewRoom} className="createNewBtn" href="/">
              New Room
            </a>
          </span>
        </div>
      </div>

      <footer>
        <h4>
          Build with by{" "}
          <a href="https://github.com/milankatira">Milan katira</a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
