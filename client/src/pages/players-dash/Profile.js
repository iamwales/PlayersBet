import React from "react";

import DBHeader from "../../components/DB-header/DB-header";
import Footer from "../../components/footer/Footer";
import PlayedMatches from "../../components/played-matches/PlayedMatches";
import ProfileHead from "../../components/profile-head/ProfileHead";

const Profile = () => {
  return (
    <div className="profile">
      <div className="">
        <DBHeader />
        <ProfileHead />
        <PlayedMatches />
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
