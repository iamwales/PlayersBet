import React from "react";

import Games from "../../components/Games/Games";
import Footer from "../../components/footer/Footer";
import DbHeader from "../../components/DB-header/DB-header";

const Matches = () => {
  return (
    <div className="matches">
      <DbHeader />
      <Games />
      <Footer />
    </div>
  );
};

export default Matches;
