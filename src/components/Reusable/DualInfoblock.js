import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function DualInfoblock({ heading, img }) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              laudantium repellendus necessitatibus harum, cum alias ducimus
              aliquam aut illo quam eum ipsum corporis aperiam vel, eligendi
              sapiente mollitia, voluptas quia repellat officia ea molestias
              sint. Tempora laborum cupiditate impedit non quae fugiat
              exercitationem maxime modi maiores vel, debitis ipsum voluptas!
              Qui, ipsum beatae accusantium ut omnis asperiores quae mollitia
              adipisci alias, voluptate libero. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Repudiandae dolorum natus architecto
              atque repellat eligendi! Officiis adipisci animi amet consequuntur
              ad natus, beatae harum soluta est distinctio sunt dolor iure.
            </p>
          </div>
          <div className="col-4">
            <div className="card bg-dark" style={{ width: 18 + "rem" }}>
              <img
                className="card-img-top"
                src={img}
                alt="card"
              />
              <div className="card-body">
                <h5 className="card-title text-success">Just click photos</h5>
                <p className="card-text text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Illum provident maxime eaque temporibus ab corrupti sed
                  officia.
                </p>
                <Link to="#" className="btn btn-block btn-warning">
                  {heading}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
