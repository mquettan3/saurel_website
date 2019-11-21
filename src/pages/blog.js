import React from 'react'
import Layout from "../components/layout"
import { graphql } from 'gatsby'

export default function BlogPage( { data } ) {
    return (
        <Layout>
            <div>
                <h1>Blog</h1>
                <p>Dolor elit deserunt laborum nulla. Consectetur culpa irure occaecat consequat ea culpa eiusmod ipsum ipsum. Sint et laboris do nisi elit tempor cillum nulla nostrud nostrud adipisicing irure ullamco.</p>
                
                <p>___________________</p>
                {data.allMarkdownRemark.edges.map(post => {
                    const localDate = new Date(post.node.frontmatter.creation_date);
                    
                    return (
                        <div key={post.node.id}>
                            <h1>{post.node.frontmatter.title}</h1>
                            <small>Posted by: {post.node.frontmatter.author} on {localDate.toLocaleString("en-US")}</small>
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
query BlogIndexQuery {
  allMarkdownRemark(sort: {fields: frontmatter___creation_date, order: DESC}, filter: {frontmatter: {post_type: {eq: "blog"}}}) {
    edges {
      node {
        id
        html
        frontmatter {
          title
          author
          creation_date
          blog_image
          tags
          post_type
        }
      }
    }
  }
}
`