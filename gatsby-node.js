const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        devtool: "eval-source-map"
    });
};

exports.createPages = ({boundActionCreators, graphql}) => {
    const { createPage } = boundActionCreators;

    const postTemplate = path.resolve('src/templates/blog_post_template.js');

    return graphql(`
    {
        allMarkdownRemark(sort: {fields: frontmatter___creation_date, order: DESC}, filter: {frontmatter: {post_type: {eq: "blog"}}}) {
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
    `).then(res => {
        if(res.error) {
            return Promise.reject(res.errors);
        } else {
            res.data.allMarkdownRemark.edges.forEach(({node}) => {
                createPage({
                    path: "/" + (node.fileAbsolutePath.split('\\').pop().split('/').pop().split('.'))[0] + "/",
                    component: postTemplate
                })
            })
        }
    })
}