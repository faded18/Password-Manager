import React from "react";
import "./homepage.css";

import Content from "../../utils/content/content";
import Card from "../card/card";
import Manager from "../manager/manager";
import Generator from "../Generator/generator";
const Homepage = ({ setLoginUser }) => {
  return (
    <>
      <div className="homepage">
        <div id="section1-home">
          <div id="heading-home">
            <h1>Homepage</h1>
          </div>
          <div>
            <p id="content-home">
              <Content />
            </p>
          </div>
        </div>
        <div id="section2-home">
          <Card
            source="/passwordmanager.png"
            alternate="Manager Image"
            setLoginUser={setLoginUser}
            text="Manager"
            description="Manage your passwords"
            path="/manager"
          />
          <Card
            source="/genrator.jpg"
            alternate="Generator Image"
            setLoginUser={setLoginUser}
            text="Generator"
            description="Generate a random password to stay secured."
            path="generator"
          />

          <Card
            source="/casestudy.png"
            alternate="CaseStudies Image"
            setLoginUser={setLoginUser}
            text="Case Studies"
            description="Studies on Cryptic Algorithms"
            path="casestudies"
          />
        </div>

        <footer id="section3-home">
          {/* <span id="copyright">@DP Projects</span> */}
          <div className="btn btn-primary" id="logout-home">
            Log out
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;

{
  /* <div id="buttons">
     <div className="button" onClick={() => setLoginUser({})}>
        Manager
      </div>
      <div className="button" onClick={() => setLoginUser({})}>
        Generator
      </div>
      <div className="button" onClick={() => setLoginUser({})}>
        Logout
      </div>
     </div> */
}
