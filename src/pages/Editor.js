import React, { useEffect } from "react";
import codemirror from "codemirror";
import "codemirror/theme/dracula.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";
import "codemirror/lib/codemirror.css";
const Editor = () => {
  useEffect(() => {
    async function init() {
      codemirror.fromTextArea(document.getElementById("realtimeEditor"), {
        mode: { name: "javascript", json: true },
        theme: "dracula",
        autoCloseBrackets: true,
        autoCloseTags: true,
        lineNumbers: true,
      });
    }
    init();
  },[]);
  return <textarea id="realtimeEditor"></textarea>;
};

export default Editor;
