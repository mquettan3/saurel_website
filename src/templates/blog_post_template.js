import React from 'react'
import Layout from "../components/layout"
import { graphql, Link } from 'gatsby'

export default function BlogPostTemplate( {data} ) {
    const post = data.allMarkdownRemark;
    const localDate = new Date(post.node.frontmatter.creation_date);
    const path = (post.node.fileAbsolutePath.split('\\').pop().split('/').pop().split('.'))[0];
    console.log(path);

    return (
        <Layout>
            <div>
                <p>___________________</p>
                <div key={post.node.id}>
                    <h1>{post.node.frontmatter.title}</h1>
                    <small>Posted by: {post.node.frontmatter.author} on {localDate.toLocaleString("en-US")}</small>
                    <Link to={path}>Read More</Link>
                    <br />
                    <br />
                    <div dangerouslySetInnerHTML={{ __html: post.node.html }}></div> 
                    <br />
                    <p>___________________</p>
                    <br />
                </div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
query BlogPostTemplateQuery {
    allMarkdownRemark(sort: {fields: frontmatter___creation_date, order: DESC}, filter: {frontmatter: {post_type: {eq: "blog"}}, fileAbsolutePath: {regex: "/$path/"}}) {
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