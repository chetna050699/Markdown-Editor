import React from "react";

const HtmlPreview = ({ previewHtml }) => (
  <div
    className="border p-3"
    style={{ backgroundColor: "#f8f9fa", minHeight: "200px" }}
    dangerouslySetInnerHTML={{ __html: previewHtml }}
  />
);

export default HtmlPreview;
