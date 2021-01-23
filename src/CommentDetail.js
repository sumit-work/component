import React from "react"

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src="https://source.unsplash.com/random"></img>
      </a>
      <div className="content">
        <a href="/" className="author">{props.author}</a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">
          {props.comment}
        </div>
        <div className="actions">
          <a href="/" className="reply">{props.tere}</a>
        </div>
      </div>
    </div>
  )
}

export default CommentDetail;