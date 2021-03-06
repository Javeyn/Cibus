import React, { Component } from "react";
import Nutrilabel from "../Nutrilabel";
import Expand from "../Expand";
import Fade from "react-reveal/Fade";


const styles = {
  imageStyle: {
    width: "600px",
    height: "auto",
    display:"inline-block"
  }
};

class PostCard extends Component {
  render() {
    return <article className="Post" ref="Post" key={this.props.id} id={this.props.id}>
        <header >
          <div className="Post-user">
            <div className="Post-user-avatar">
              <img src={this.props.posts? this.props.posts.User.profilePic : ""} alt="Chris" />
              {/* "https://qph.fs.quoracdn.net/main-qimg-134e3bf89fff27bf56bdbd04e7dbaedf.webp" */}
            </div>
            <div className="Post-user-nickname">
              <span>{this.props.posts? this.props.posts.User.username : ""}</span>
            </div>
          </div>
        </header>
        <div className="Post-image">
          <div className="Post-image-bg" style={{textAlign:"center"}}>
            {<img style={styles.imageStyle} alt="Icon Living" src={this.props.posts? this.props.posts.image : ""} />}
          </div>
        </div>
        <div className="Post-description">
         
          {this.props.posts? this.props.posts.description : ""}

        </div>

     
        <Expand comments={this.props.posts.Comments}/>
           {/* {this.props.posts && this.props.posts.Comments? 
           this.props.posts.Comments.map( (item, index) => <Fade><p>{item}</p></Fade>)
            : 
            ""} */}
        
          {/* <div>

           {this.props.posts? 
           this.props.posts.Comments.map( (item, index) => {
             <Fade>
               <p>{item}</p>
             </Fade>
           })
            : 
            ""}
          </div> */}
      </article>;  
    }
}
export default PostCard;

