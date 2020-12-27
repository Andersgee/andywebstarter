import React from "react";
import { graphql } from "gatsby";

export const query = graphql`
  query {
    allFile {
      nodes {
        relativePath
        prettySize
        extension
        birthTime(fromNow: true)
      }
    }
  }
`;

export default function Assets({ data }) {
  const nodes = data.allFile.nodes;
  return (
    <div>
      <h1>List of all assets</h1>
      <table>
        <thead>
          <tr>
            <th>relativePath</th>
            <th>prettySize</th>
            <th>extension</th>
            <th>birthTime</th>
          </tr>
        </thead>
        <tbody>
          {nodes.map((node, i) => (
            <tr key={i}>
              <td>{node.relativePath}</td>
              <td>{node.prettySize}</td>
              <td>{node.extension}</td>
              <td>{node.birthTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
