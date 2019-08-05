import React from 'react'
import Infoblock from "../Reusable/Infoblock"
import Coursecart from "../Cart/Coursecart"
import Bundlecart from "../Cart/Bundlecart"

export default function Services({courses, bundles}) {
    return (
      <section>
        <Infoblock
          heading="Courses"
        />
        <Coursecart courses={courses} />
        <Infoblock
          heading="Bundles"
        />
        <Bundlecart bundles={bundles} />
      </section>
    )
}

