const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/pages/blogs/blogtemplate.js`);
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter

  // ** fetch slugs
   return graphql(
     `
        query Mypages {
  allContentfulTribesSchema {
    edges {
      node {
        slug
      }
    }
  }
}
     `
   ).then((result) => {
     if (result.errors) {
       throw result.errors;
     }

     // Create blog post pages.
     result.data.allContentfulTribesSchema.edges.forEach((edge) => {
       createPage({
         // Path for this page — required
         path: `/blogs/${edge.node.slug}`,
         component: blogPostTemplate,
         context: {
           slug : `${edge.node.slug}`
         },
       });
     });
   });
  // *****end
};
