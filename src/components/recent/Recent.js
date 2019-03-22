import React from "react";
import SingleCard from "./SingleCard";

export default function Recent({ posts }) {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ height: 60, width: "100%", textAlign: "center" }}>
        <h2 style={{ color: "black" }}>Recent Posts</h2>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {posts.map(post => 
          {if(posts.indexOf(post) !== 0){
              return <SingleCard post={post} key={post.id} />
          }}
            
          
        )}
      </div>
    </div>
  );
}
