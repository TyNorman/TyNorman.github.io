import React from "react";
import "./Copyright.css";

function Copyright() {
  return (
    <div className="Copyright">
      <p className="text">© {new Date().getFullYear()} | Tyler Norman</p>
    </div>
  );
}

export { Copyright };
