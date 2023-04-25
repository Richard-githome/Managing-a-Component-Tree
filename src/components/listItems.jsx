import React from "react";

function Listitems(props) {
  return (
    <div
      onClick={() => {
        props.checkClick(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default Listitems;
