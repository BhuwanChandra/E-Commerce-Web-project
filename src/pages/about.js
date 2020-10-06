import React from "react"
import { graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock";
import DualInfoblock from "../components/Reusable/DualInfoblock";
import Teamphotosection from "../components/About/Teamphotosection";

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="About LearnToCode"
      subtitle=""
      heroclass="about-background"
    />
    <DualInfoblock
      heading="A message from CEO"
      img={
        "https://images.pexels.com/photos/1092426/pexels-photo-1092426.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      }
    />
    <Teamphotosection />
    <Infoblock heading="Our Vision" />
  </Layout>
)

export const query = graphql`
         {
           img: file(relativePath: { eq: "about.png" }) {
             childImageSharp {
               fluid(maxWidth: 400, maxHeight: 250) {
                 ...GatsbyImageSharpFluid
               }
             }
           }
         }
       `

export default AboutPage
