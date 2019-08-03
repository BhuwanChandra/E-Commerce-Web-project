import React from "react"
import Heading from "../Reusable/Heading"

export default function Contact() {
  return (
    <section className="py-3">
      <Heading title="Contact Us" />
      <div className="col-10 col-sm-8 mx-auto">
              <form action="https://formspree.io/bhuwanchandra0000@gmail.com" method="POST">
          <div className="form-group">
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="email"
              id="email"
              className="form-control"
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="mobile"
              id="mobile"
              className="form-control"
              placeholder="Your mobile"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              id="description"
              className="form-control"
              placeholder="Your message"
            />
          </div>
          <button type="submit" className="btn btn-outline-info btn-block mb-5">Submit</button>
        </form>
      </div>
    </section>
  )
}
