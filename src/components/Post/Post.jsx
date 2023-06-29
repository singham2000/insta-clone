import React, { Component } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import love from "../../images/love.svg";
import comment from "../../images/comment.svg";
import share from "../../images/share.svg";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [],
    };
  }

  componentDidMount() {
    this.getComments();
  }

  getComments = () => {
    let data = [
      {
        username: "Sumit",
        commentid: "1234",
        timestamp: "123456",
        description: "This is my Comment",
      },
      {
        username: "Avinash",
        commentid: "1234",
        timestamp: "123456",
        description: "This is my Comment",
      },
      {
        username: "Tejas",
        commentid: "1234",
        timestamp: "123456",
        description: "This is my Comment",
      },
      {
        username: "Surya",
        commentid: "1234",
        timestamp: "123456",
        description: "This is my Comment",
      },
      {
        username: "Pratap",
        commentid: "1234",
        timestamp: "123456",
        description: "This is my Comment",
      },
    ];
    this.setState({
      commentList: data,
    });
  };
  render() {
    return (
      <div className="post_container">
        <div className="postHeader">
          <Avatar className="post_image" src="" />
          <div className="post_username">{this.props.userName}</div>
        </div>
        <div className="image">
          <img src={this.props.postImage} alt="post image" />
        </div>

        <div>
          <div style={{ marginLeft: "10px" }}>
            <img src={love} alt="love" className="post_reactimage" />
            <img src={comment} alt="comment" className="post_reactimage" />
            <img src={share} alt="share" className="post_reactimage" />
          </div>
          <div style={{ fontWeight: "bold", marginLeft: "20px" }}>
            {this.props.likes} likes
          </div>
          <div>
            {this.state.commentList.map((item, index) => (
              <div className="post_comment">{item.description}</div>
            ))}
            <input
              type="text"
              className="post_commentbox"
              placeholder="Add a Comment"
            />
          </div>
        </div>
      </div>
    );
  }
}
