import React from "react";
import moment from "moment";
import './SingleCard.css'

export default function SingleCard({ post }) {
  return (
    <div className='SingleCard_Container'>
      <div style={{ margin: 10 }}>
        <div
          style={{
            display: "block",
            height: 200,
            width: "100%",
            backgroundImage: `url(${post.feature_url})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div
          style={{
            padding: 10,
            height: 150,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F3F1ED",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              borderRadius: "50%",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: 10,
              width: "50px",
              height: "50px",
              backgroundColor: "#F3F1ED",
              display: "flex",
              justifySelf: "center",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              marginTop: -85
            }}
          >
            <img
              style={{
                margin: 0,
                width: "20px",
                height: "20px",
                objectFit: "contain"
              }}
              src={`/icons/${post.category}.svg`}
              alt="icon"
            />
          </div>
          <h5 style={{ marginTop: 40, marginBottom: 0 }}>{moment(post.date).format("MMMM DD")}</h5>
          <h4
            style={{ margin: 0, textAlign: "center", height: 60 }}
            dangerouslySetInnerHTML={{
              __html: post.title.rendered
            }}
          />

          <h5><a
            style={{ textDecoration: "none", color: "#BD3131" }}
            href={post.link}
          >
            {post.category === "Article" && "Read More"}
            {post.category === "Video" && "Watch Video"}
            {post.category === "Event" && "Read More"}
            {post.category === "Gallery" && "View Gallery"}
          </a></h5>
        </div>
      </div>
    </div>
  );
}
