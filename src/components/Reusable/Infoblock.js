import React from 'react'
import Heading from "./Heading"
import {Link} from 'gatsby'

export default function Infoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title={heading}/>
                <div className="col-10 col-sm-8 mx-auto text-center">
                    <p className="lead text-white mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto laboriosam optio necessitatibus inventore perferendis sit odit corporis obcaecati atque a natus amet repellat, quisquam aliquid, esse dolorem placeat sequi cumque, numquam ducimus quidem dolores. Nobis ipsam dignissimos nulla in repellendus blanditiis culpa placeat, voluptatem recusandae explicabo distinctio dolorum, esse maiores architecto molestias! Nostrum doloribus quas nisi rem fugiat deserunt ea.</p>
                    <Link to="/about/">
                        <button className="btn btn-warning btn-lg">{heading}</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
