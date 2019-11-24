import React from 'react'
import Layout from "../components/layout"

export default function AboutPage( { data } ) {
    return (
        <Layout>
            <div className="container">
                <h1>Events</h1>
                <p>Dolor elit deserunt laborum nulla. Consectetur culpa irure occaecat consequat ea culpa eiusmod ipsum ipsum. Sint et laboris do nisi elit tempor cillum nulla nostrud nostrud adipisicing irure ullamco.</p>
                <p>___________________</p>
                {data.allMarkdownRemark.edges.map(post => {
                    const eventDate = new Date(post.node.frontmatter.event_date);
                    
                    return (
                        <div key={post.node.id}>
                            <h1>{post.node.frontmatter.event_title}</h1>
                            <small>Event Date: {eventDate.toLocaleString("en-US")}</small>
                            <p>Description: {post.node.frontmatter.description}</p>
                            <p>Location: {post.node.frontmatter.location}</p>
                            <a href={post.node.frontmatter.eventbrite_link}>Register for this Event</a>
                            <br />
                            <p>___________________</p>
                            <br />
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}


export const pageQuery = graphql`
query EventsIndexQuery {
  allMarkdownRemark(sort: {fields: frontmatter___event_date, order: DESC}, filter: {frontmatter: {post_type: {eq: "event"}}}) {
    edges {
      node {
        id
        html
        frontmatter {
          event_title
          event_date
          eventbrite_link
          description
          location
          tags
        }
      }
    }
  }
}
`