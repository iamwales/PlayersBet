import React from "react";

import Header from "../../components/header/Header";

import OurGames from "../../components/Games/Games";
import HowToPlay from "../../components/Howtoplay/Howtoplay";
import Footer from "../../components/footer/Footer";

class Games extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Our Games"
    };
  }

  render() {
    const { title } = this.state;
    return (
      <div className="about">
        <Header title={title} />
        <OurGames />
        <HowToPlay />
        <Footer />
      </div>
    );
  }
}

export default Games;
