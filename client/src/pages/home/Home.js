import React from "react";

import Header from "../../components/header/Header";
import Games from "../../components/Games/Games";
import HowToPlay from "../../components/Howtoplay/Howtoplay";
import RecentMatches from "../../components/Recentmatch/Recentmatch";
import Bonus from "../../components/bonus/Bonus";
import Footer from "../../components/footer/Footer";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Play For Something"
    };
  }

  render() {
    const { title } = this.state;
    return (
      <div className="home">
        <Header title={title} />
        <Games />
        <HowToPlay />
        <RecentMatches />
        <Bonus />
        <Footer />
      </div>
    );
  }
}

export default Home;
