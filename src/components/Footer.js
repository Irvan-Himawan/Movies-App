import React from "react";

function Footer() {
  let today = new Date();
  let year = today.getFullYear();
  return (
    <footer>
      <div className="__container">
        <p>
          This resources belongs to{" "}
          <a href="http://www.omdbapi.com/">The OMDb API</a>
        </p>
        <br></br>
        <p>Copyright © {year} created by Irvan Alvisa </p>
      </div>
    </footer>
  );
}

export default Footer;
