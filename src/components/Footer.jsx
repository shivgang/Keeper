import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>sh!vgang ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
