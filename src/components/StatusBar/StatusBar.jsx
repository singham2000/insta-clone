import React, { Component } from "react";
import "./StatusBar.css";
import ProfilePic from "../../images/profile.png";
import { Avatar } from "@mui/material";

class StatusBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusList: [],
    };
  }
  //Execute the react code when the component is placed in a DOM
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    let data = [
      {
        username: "Sumit",
        imageURL:
          "https://media.licdn.com/dms/image/D5603AQHo5UaJH9w0wQ/profile-displayphoto-shrink_800_800/0/1673372413062?e=1693440000&v=beta&t=uOTKbRgpvqVjHdUaM4w3DZlwSmdIuYv0MfCHVOAvBdI",
      },
      {
        username: "Avinash",
        imageURL:
          "https://media.licdn.com/dms/image/D5603AQHo5UaJH9w0wQ/profile-displayphoto-shrink_800_800/0/1673372413062?e=1693440000&v=beta&t=uOTKbRgpvqVjHdUaM4w3DZlwSmdIuYv0MfCHVOAvBdI",
      },
      {
        username: "Singham",
        imageURL:
          "https://media.licdn.com/dms/image/D5603AQHo5UaJH9w0wQ/profile-displayphoto-shrink_800_800/0/1673372413062?e=1693440000&v=beta&t=uOTKbRgpvqVjHdUaM4w3DZlwSmdIuYv0MfCHVOAvBdI",
      },
      {
        username: "Bottler",
        imageURL:
          "https://media.licdn.com/dms/image/D5603AQHo5UaJH9w0wQ/profile-displayphoto-shrink_800_800/0/1673372413062?e=1693440000&v=beta&t=uOTKbRgpvqVjHdUaM4w3DZlwSmdIuYv0MfCHVOAvBdI",
      },
      {
        username: "Chromosome",
        imageURL:
          "https://media.licdn.com/dms/image/D5603AQHo5UaJH9w0wQ/profile-displayphoto-shrink_800_800/0/1673372413062?e=1693440000&v=beta&t=uOTKbRgpvqVjHdUaM4w3DZlwSmdIuYv0MfCHVOAvBdI",
      },
    ];
    this.setState({ statusList: data });
  };

  render() {
    return (
      <div>
        <div className="status_container">
          {this.state.statusList.map((item, index) => (
            <div className="status" key={index}>
              <Avatar className="statusbar_status" src={item.imageURL} />
              <div className="statusbar_text">{item.userName}</div>
            </div>
          ))}
        </div>

        {/* <div className="status_contianer">
          <div className="status">
            <Avatar src={ProfilePic} className="user_status" />
            <div className="user_status_name">Sumit</div>
          </div>
          <div className="status">
            <Avatar src={ProfilePic} className="user_status" />
            <div className="user_status_name">Sumit</div>
          </div>
          <div className="status">
            <Avatar src={ProfilePic} className="user_status" />
            <div className="user_status_name">Sumit</div>
          </div>
          <div className="status">
            <Avatar src={ProfilePic} className="user_status" />
            <div className="user_status_name">Sumit</div>
          </div>
          <div className="status">
            <Avatar src={ProfilePic} className="user_status" />
            <div className="user_status_name">Sumit</div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default StatusBar;
