import React from 'react'
import Layout from "../components/layout"

export default function AboutPage( { data } ) {
    return (
        <Layout>
            <div>
                <h1>Events</h1>
                <p>Dolor elit deserunt laborum nulla. Consectetur culpa irure occaecat consequat ea culpa eiusmod ipsum ipsum. Sint et laboris do nisi elit tempor cillum nulla nostrud nostrud adipisicing irure ullamco.</p>
                <p>___________________</p>
                {data.allMarkdownRemark.edges.map(post => {
                    const eventDate = new Date(post.node.frontmatter.event_date);
                    
                    return (
                        <div key={post.node.id}>
                            <h1>{post.node.frontmatter.title}</h1>
                            <small>Event Date: {eventDate.toLocaleString("en-US")}</small>
                            <p>Location: {post.node.frontmatter.location}</p>
                            <p>Description: {post.node.frontmatter.description}</p>
                            <br />
                            <br />
                            <div dangerouslySetInnerHTML={{ __html: post.node.html }}></div> 
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
          title
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