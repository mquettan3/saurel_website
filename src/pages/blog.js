import React from 'react'
import Layout from "../components/layout"

export default function BlogPage( { data } ) {
    return (
        <Layout>
            <div>
                <h1>Blog</h1>
                <p>Dolor elit deserunt laborum nulla. Consectetur culpa irure occaecat consequat ea culpa eiusmod ipsum ipsum. Sint et laboris do nisi elit tempor cillum nulla nostrud nostrud adipisicing irure ullamco.</p>
                
                <p>___________________</p>
                {data.allMarkdownRemark.edges.map(post => (
                    <div key={post.node.id}>
                        <h1>{post.node.frontmatter.title}</h1>
                        <small>Posted by: {post.node.frontmatter.author} on {post.node.frontmatter.creation_date}</small>
                        <br />
                        <br />
                        <div dangerouslySetInnerHTML={{ __html: post.node.html }}></div> 
                        <br />
                        <p>___________________</p>
                        <br />
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
query BlogIndexQuery {
    allMarkdownRemark(sort: {fields: frontmatter___post_order_id, order: DESC}) {
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
            post_order_id
          }
        }
      }
    }
  }
`