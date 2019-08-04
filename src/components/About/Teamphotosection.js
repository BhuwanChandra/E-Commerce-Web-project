import React from "react"
import Heading from "../Reusable/Heading"

export default function Teamphotosection() {
  return (
    <div className="container-fluid">
      <Heading title="Our Team" />
      <div className="row pb-3">
        <div className="col-md-4 mx-auto">
          <div className="card">
            <img
              src="https://cdn.pixabay.com/photo/2018/01/15/07/52/woman-3083390__340.jpg"
              className="card-img-top"
              alt="team member"
            />
            <div className="card-body">
              <h4 className="card-title">Marry huper</h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, deserunt.This is a wider card with supporting
                text below as a natural lead-in to additional content. This card
                has even longer content than the first to show that equal height
                action.
              </p>
              <button className="btn btn-outline-warning">See Profile</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mx-auto">
          <div className="card">
            <img
              src="https://cdn.pixabay.com/photo/2017/11/02/14/27/model-2911332__340.jpg"
              className="card-img-top"
              alt="team member"
            />
            <div className="card-body">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, deserunt.This is a wider card with supporting
                text below as a natural lead-in to additional content. This card
                has even longer content than the first to show that equal height
                action.
              </p>
              <button className="btn btn-outline-warning">See Profile</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mx-auto">
          <div className="card">
            <img
              src="https://cdn.pixabay.com/photo/2015/01/08/18/30/entrepreneur-593371__340.jpg"
              className="card-img-top"
              alt="team member"
            />
            <div className="card-body">
              <h4 className="card-title">Phil Ho</h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, deserunt.This is a wider card with supporting
                text below as a natural lead-in to additional content. This card
                has even longer content than the first to show that equal height
                action.
              </p>
              <button className="btn btn-outline-warning">See Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
