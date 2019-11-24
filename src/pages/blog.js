import React from 'react'
import Layout from "../components/layout"
import { graphql, Link } from 'gatsby'

export default function BlogPage( { data } ) {
    return (
        <Layout>
            <div className="blog container">
                <h1>Blog</h1>
                <p>Dolor elit deserunt laborum nulla. Consectetur culpa irure occaecat consequat ea culpa eiusmod ipsum ipsum. Sint et laboris do nisi elit tempor cillum nulla nostrud nostrud adipisicing irure ullamco.</p>
                
                <p>___________________</p>
                <div className="posts-container">
                  {data.allMarkdownRemark.edges.map(post => {
                      const localDate = new Date(post.node.frontmatter.creation_date);
                      const path = (post.node.fileAbsolutePath.split('\\').pop().split('/').pop().split('.'))[0];
                      
                      return (
                          <div key={post.node.id}>
                            <div className="post-image-container">
                              {/* <Link to={path}><div className="post-image" style={{backgroundImage: "url(" + post.node.frontmatter.blog_image + ")"}}></div></Link> */}
                              <Link to={path}><div className="post-image" style={{backgroundImage: "url(" + "https://via.placeholder.com/500x250" + ")"}}></div></Link>
                            </div>
                            <h1>{post.node.frontmatter.title}</h1>
                            <small>{localDate.toLocaleString("en-US")} | By: {post.node.frontmatter.author}</small>
                            <Link to={path}>Read More</Link>
                          </div>
                      )
                  })}
                </div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
query BlogIndexQuery {
  allMarkdownRemark(sort: {fields: frontmatter___creation_date, order: DESC}, filter: {frontmatter: {post_type: {eq: "blog"}}}, limit: 9) {
    edges {
      node {
        id
        html
        fileAbsolutePath
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