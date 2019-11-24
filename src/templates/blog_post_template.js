import React from 'react'
import Layout from "../components/layout"
import Header from "../components/header"
import { graphql, Link } from 'gatsby'

export default function BlogPostTemplate( {data} ) {
    const post = data.markdownRemark;
    console.log(post);
    const localDate = new Date(post.frontmatter.creation_date);
    const path = (post.fileAbsolutePath.split('\\').pop().split('/').pop().split('.'))[0];
    console.log(path);

    return (
        <div>
            <div className="blog-post">
                <Header siteTitle="Saurel Quettan Enterprises" />
                <img className="post-image" src={post.frontmatter.blog_image}></img>
                <div className="container">
                    <h1>{post.frontmatter.title}</h1>
                    <small>{localDate.toLocaleString("en-US")} | Author: {post.frontmatter.author}</small>
                    <br />
                    <br />
                    <div dangerouslySetInnerHTML={{ __html: post.html }}></div> 
                </div>
            </div>
        </div>
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