import React from "react";
import moment from "moment";

export default function Featured({ post }) {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#B5A484",
        height: 300,
        display: "block",
        position: "relative"
      }}
    >
      <div
        style={{
          height: 400,
          top: -150,
          left: 0,
          right: 0,
          borderRadius: 5,
          overflow: "hidden",
          maxWidth: "90%",
          marginRight: "auto",
          marginLeft: "auto",
          backgroundColor: "white",
          zIndex: 500,
          position: "absolute",
          display: "block"
        }}
      >
        {post && (
          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
              height: "100%",
              alignContent: "center"
            }}
          >
            <div style={{ height: "100%", width: "50%" }}>
              <img
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                src={post.feature_url}
              />
            </div>
            <div
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center"
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
                  alignItems: "center"
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
              <h4 style={{ margin: 0, opacity: 0.5 }}>
                {moment(post.date).format("MMMM DD")}
              </h4>
              <h3 style={{ margin: 0, paddingLeft: 20, paddingRight: 20 }}>
                {post.title.rendered}
              </h3>
              <p
                style={{ margin: 0, paddingLeft: 20, paddingRight: 20 }}
                dangerouslySetInnerHTML={{
                  __html: post.excerpt.rendered
                }}
              />
              <a style={{textDecoration: 'none', color: '#BD3131' }} href={post.link}>Read More</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
