import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allFile.nodes.map((node) => (
        <p>{node.name}</p>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;
