import React from "react";

function Files(props) {
  const files = props.files;
  return (
    <div className={files ? "active files" : "files"}>
      <p>
        Eventually, I'll have a menu here that shows little widgets—calculator,
        scratchpad stored in local storage, etc. I'd also like to have options
        to view categories, tags, posts, videos, etc in a list. Perhaps I can
        let you save articles you wanna see later, setup custom filters, etc.
        here as well.
      </p>
    </div>
  );
}

export default Files;
