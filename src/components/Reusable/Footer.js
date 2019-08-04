import React from "react"
import logo from "../../images/logo.png"
import { Link } from "gatsby"
import "../layout.css"

export default function Footer() {
  return (
    <footer>
      <div className="footer-block text-white">
        <div className="container-fluid py-3">
          <div className="row text-center">
            <div className="col-md-4">
              <Link to="/" className="navbar-brand ml-5">
                <img src={logo} alt="logo goes here" width="40px" />
                <span className="text-white"> Learncodeonline.in</span>
              </Link>
              <hr className="light" />
              <p>555-555-5555</p>
              <p>office@learncodeonline.in</p>
              <p>100 Street Name</p>
              <p>City, State, 00000</p>
            </div>
            <div className="col-md-4">
              <hr className="light" />
              <h5>Our Hours</h5>
              <hr className="light" />
              <p>Monday: 9am - 5pm</p>
              <p>Saturday: 10am - 4pm</p>
              <p>Sunday: closed</p>
            </div>
            <div className="col-md-4">
              <hr className="light" />
              <h5>Service Area</h5>
              <hr className="light" />
              <p>City, State, 00000 </p>
              <p>City, State, 00000 </p>
              <p>City, State, 00000 </p>
              <p>City, State, 00000 </p>
            </div>
            <div className="col-12">
              <hr className="light-100" />
              <br/>
              <h5>learncodeonline.in &copy; 2019</h5>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
