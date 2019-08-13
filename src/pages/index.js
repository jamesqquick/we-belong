import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StoryForm from "../components/StoryForm"
import { StaticQuery, graphql } from "gatsby"
import StoryCard from "../components/storyCard"
const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        allStoriesJson {
          edges {
            node {
              id
              content
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Home" />
        <StoryForm />
        {data.allStoriesJson.edges.map(story => (
          <StoryCard story={story.node}></StoryCard>
        ))}
      </Layout>
    )}
  />
)

export default IndexPage
