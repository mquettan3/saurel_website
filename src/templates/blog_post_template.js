import React from 'react'
import Layout from "../components/layout"
import { graphql, Link } from 'gatsby'

export default function BlogPostTemplate( {data} ) {
    const post = data.markdownRemark;
    console.log(post);
    const localDate = new Date(post.frontmatter.creation_date);
    const path = (post.fileAbsolutePath.split('\\').pop().split('/').pop().split('.'))[0];
    console.log(path);

    return (
        <Layout>
            <div>
                <p>___________________</p>
                <div key={post.id}>
                    <h1>{post.frontmatter.title}</h1>
                    <small>Posted by: {post.frontmatter.author} on {localDate.toLocaleString("en-US")}</small>
                    <br />
                    <br />
                    <div dangerouslySetInnerHTML={{ __html: post.html }}></div> 
                    <br />
                    <p>___________________</p>
                    <br />
                </div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
query BlogPostTemplateQuery($path: String!) {
    markdownRemark(fileAbsolutePath: {regex: $path}) {
        id
        html
        fileAbsolutePath
        frontmatter {
          creation_date
          author
          tags
          title
          blog_image
        }
      }
}
`