import React from "react";
import image from "../images/gif/loading-arrow.gif";

export default function Loading() {
  return (
    <div className="loading">
      <h4>Data Loading</h4>
      <img src={image} alt="" />
    </div>
  );
}
