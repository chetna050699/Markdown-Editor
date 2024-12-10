import React, { useState, useEffect } from "react";
import { marked } from "marked";
import io from "socket.io-client";
import MarkdownInput from "./MarkdownInput";
import HtmlPreview from "./HtmlPreview";
import UserList from "./UserList";
import "bootstrap/dist/css/bootstrap.min.css";

const socket = io("http://localhost:5000");

const App = () => {
  const [markdown, setMarkdown] = useState("");
  const [previewHtml, setPreviewHtml] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("markdownUpdate", (updatedMarkdown) => {
      setMarkdown(updatedMarkdown);
      setPreviewHtml(marked(updatedMarkdown));
    });

    socket.on("updateUsers", (connectedUsers) => {
      setUsers(connectedUsers);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    setPreviewHtml(marked(markdown));
  }, [markdown]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Collaborative Markdown Editor</h1>
      <UserList users={users} />
      <MarkdownInput markdown={markdown} setMarkdown={setMarkdown} socket={socket} />
      <HtmlPreview previewHtml={previewHtml} />
    </div>
  );
};

export default App;
