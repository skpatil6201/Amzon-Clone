import React from "react";

// BigCard component to display a large image card based on the passed-in props
function BigCard(props) {
  return (
    <div className="">
      {/* Main container for the BigCard */}
      <div className="BigCard">
        {/* Image is sourced from props.image, allowing dynamic images for reuse of this component */}
        <img src={props.image} alt="" />
      </div>
    </div>
  );
}

export default BigCard;
