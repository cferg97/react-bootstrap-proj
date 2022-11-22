import React from "react"

const MyFooter = () => {
    return (
    <footer>
    <nav class="navbar navbar-dark bg-dark">
  <span class="navbar-text">
  Ⓒ Epic Book Stores {(new Date().getFullYear())}
  </span>
    </nav>
    </footer>
     );
}
 
export default MyFooter;