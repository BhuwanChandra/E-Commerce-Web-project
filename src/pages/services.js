import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import DualInfoblock from "../components/Reusable/DualInfoblock";
import Coursecart from "../components/Cart/Coursecart";
import Bundlecart from "../components/Cart/Bundlecart";

const AboutPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />
        <HeroSection
            img={data.img.childImageSharp.fluid}
            title="Our Services"
            subtitle=""
            heroclass="about-background"
        />
        <DualInfoblock
            heading="What We Offer"
            img={
                "https://images.pexels.com/photos/1092426/pexels-photo-1092426.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
        />
    <Coursecart courses={data.courses}/>
    <DualInfoblock
      heading="Bundle Courses"
      img={
        "https://images.pexels.com/photos/1092426/pexels-photo-1092426.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      }
    />
    <Bundlecart bundles={data.bundles} />
    </Layout>
)

export const query = graphql`
         {
           img: file(relativePath: { eq: "services.png" }) {
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

export default AboutPage
