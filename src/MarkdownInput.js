import React from "react";

const MarkdownInput = ({ markdown, setMarkdown, socket }) => {
  const handleChange = (e) => {
    const input = e.target.value;
    setMarkdown(input);

    // Emit changes to the server
    socket.emit("markdownUpdate", input);
  };

  return (
    <textarea
      className="form-control"
      value={markdown}
      onChange={handleChange}
      placeholder="Type Markdown here..."
      style={{ height: "200px", marginBottom: "20px" }}
    />
  );
};

export default MarkdownInput;
