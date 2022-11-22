import React from "react"

const MyFooter = () => {
    return ( 
        <footer className="page-footer font-small blue pt-4">
    <div className="footer-copyright text-center py-3">© Epic Book Store {(new Date().getFullYear())}
    </div>

</footer>
     );
}
 
export default MyFooter;