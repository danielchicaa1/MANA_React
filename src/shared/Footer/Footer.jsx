import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../../shared/Footer/Footer.css'
export function Footer() {
  return (
    <>
      <footer className="site-footer text-center">
        <div className="container">
          <div className="row">

          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text" >© Maná  &copy; 2023 All Rights Reserved by
                <a href="#">Daniel</a>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12" >
              <ul className="social-icons ">
                <li><a className="facebook" href="#"><i className="bi bi-facebook"></i></a></li>
                <li><a className="twitter" href="#"><i className="bi bi-twitter"></i></a></li>
                <li><a className="linkedin" href="#"><i className="bi bi-linkedin"></i></a></li>
                <li><a className="youtube" href="#"><i className="bi bi-youtube"></i></a></li>
                <li><a className="linkedin" href="#"><i className="bi bi-linkedin"></i></a></li>
                <li><a className="spotify" href="#"><i className="bi bi-spotify"></i></a></li>
                <li><a className="linkedin" href="#"><i className="bi bi-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )


}