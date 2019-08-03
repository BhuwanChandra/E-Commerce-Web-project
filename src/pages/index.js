import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import DualInfoblock from "../components/Reusable/DualInfoblock"
import Coursecart from "../components/Cart/Coursecart"
import Bundlecart from "../components/Cart/Bundlecart";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="I write code"
      subtitle="learncodeonline.in"
      heroclass="hero-background"
    />
    <Infoblock heading="About Us" />
    <Coursecart courses={data.courses} />
    <DualInfoblock
      heading="Our Team"
      img={
        "https://images.pexels.com/photos/1092426/pexels-photo-1092426.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      }
    />
    <Bundlecart bundles={data.bundles} />
    <DualInfoblock
      heading="Machine Learning"
      img={
        "https://images.pexels.com/photos/1092424/pexels-photo-1092424.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      }
    />
  </Layout>
)

export const query = graphql`
         {
           img: file(relativePath: { eq: "heromain.png" }) {
             childImageSharp {
               fluid(maxWidth: 400, maxHeight: 250) {
                 ...GatsbyImageSharpFluid_tracedSVG
               }
             }
           }
           courses: allContentfulCourses {
             edges {
               node {
                 id
                 title
                 category
                 price
                 image {
                   fixed(width: 200, height: 120) {
                     ...GatsbyContentfulFixed_tracedSVG
                   }
                 }
                 description {
                   description
                 }
               }
             }
           }
           bundles: allContentfulBundles {
             edges {
               node {
                 id
                 title
                 price
                 image {
                   fixed(width: 200, height: 120) {
                     ...GatsbyContentfulFixed_tracedSVG
                   }
                 }
               }
             }
           }
         }
       `

export default IndexPage
