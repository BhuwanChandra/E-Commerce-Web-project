import React from 'react'
import DualInfoblock from "../Reusable/DualInfoblock"
import Coursecart from "../Cart/Coursecart"
import Bundlecart from "../Cart/Bundlecart"

export default function Services({courses, bundles}) {
    return (
      <section>
        <DualInfoblock
          heading="Courses"
          img={
            "https://images.pexels.com/photos/1092426/pexels-photo-1092426.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
        />
        <Coursecart courses={courses} />
        <DualInfoblock
          heading="Bundles"
          img={
            "https://images.pexels.com/photos/1092426/pexels-photo-1092426.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
        />
        <Bundlecart bundles={bundles} />
      </section>
    )
}

