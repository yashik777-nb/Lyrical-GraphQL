import React from "react";
import { gql, useQuery } from "@apollo/client";
// import { graphql } from "react-apollo";
// import gql from "graphql-tag";

const query = gql`
  query songsList {
    songs {
      id
      title
    }
  }
`;

function SongList(props) {
  const { loading, error, data } = useQuery(query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error}</p>;

  console.log(data);

  return (
    <ul className="collection">
      {data.songs.map((song) => (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      ))}
    </ul>
  );
}

export default SongList;
