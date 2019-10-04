import React from "react";

import Header from "../../components/header/Header";

import OurTeam from "../../components/ourteam/Ourteams";
import AboutUs from "../../components/aboutus/Aboutus";
import Footer from "../../components/footer/Footer";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "About Us"
    };
  }

  render() {
    const { title } = this.state;
    return (
      <div className="about">
        <Header title={title} />
        <AboutUs />
        <OurTeam />
        <Footer />
      </div>
    );
  }
}

export default About;
