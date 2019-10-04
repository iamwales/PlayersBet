import React from "react";

import "./GameRules.scss";

const GamesRules = () => {
  return (
    <div className="gamerules">
      {/* <div className="col-md-8"> */}
      <div className="bos mt-4">
        <p className="head">Match Details</p>
        <div className="row">
          <p className="gt">
            Entry Fee: <span className="head">$5.00</span>
          </p>
          <p className="gt float-right">
            Console: <span className="head">Xbox One</span>
          </p>
          <p className="gt">
            Game Type: <span className="head">1v1</span>
          </p>
          <p className="norm">
            <span className="head">IMPORTANT!</span> The rules above are set by
            default.{" "}
          </p>
          <p className="norm">
            If you and your opponent want to agree to alternate rules, you must
            both discuss it in the match chat, otherwise Players' Lounge will
            not honor the change if the match is disputed.
          </p>
        </div>
      </div>
      <div className="bos mt-4">
        <p className="head">Game Rules</p>
        <p className="norm">
          <span className="head">Game Settings:</span> Unless otherwise
          specified, the following settings must be used.
        </p>
        <p className="norm">
          You and your opponent will join and search for a public match on the
          same team. A random 3rd player will be added and their score will be
          ignored. The player with the most kills at the end of the game wins.
        </p>
        <p className="norm">
          <span className="head">IMPORTANT!</span> The rules above are set by
          default.{" "}
        </p>
        <p className="norm">
          If you and your opponent want to agree to alternate rules, you must
          both discuss it in the match chat, otherwise Players' Lounge will not
          honor the change if the match is disputed.
        </p>
        <p className="norm">
          <span className="head">Legends/Weapons:</span> All characters, weapons
          and special abilities are allowed.
        </p>
        <p className="norm">
          <span className="head">Proof:</span>You will need a screenshot of the
          "Post Match Results" showing the final score of the three players. But
          video proof is the best evidence you can provide.
        </p>
        <p className="norm">
          <span className="head">Tiebreaker:</span>If you and your opponent
          finish the game with the same amount of kills, the player with the
          most damage will be rewarded the win.
        </p>
        <p className="norm">
          <span className="head">Reviving:</span>If the random 3rd player
          revives you, you are considered dead and you should purposely die
          again immediately. Any kills after being revived will NOT count.
          WARNING: If you add kills to your score that are from AFTER being
          revived, you're subject to being fined and or suspended. Reviving the
          3rd random player IS allowed. Self-resurrecting yourself with a "Level
          4 Knockdown Shield" is also allowed. ALL disputes related to this
          issue require full video evidence leading up to the revive.
        </p>
        <p className="norm">
          <span className="head">Kills While Downed:</span>Any kills scored
          while you’re downed count towards your final score. Kills scored after
          you die do not count towards your final score (e.g. from explosives,
          or someone that you knocked down bleeding out). ALL disputes related
          to this issue require full match video evidence.
        </p>
        <p className="norm">
          <span className="head">Interference: </span>Using special abilities to
          purposely alter your opponents path or cause them to miss shots is not
          allowed. Admins may use their discretion to assess situations
          involving interference or in-game exploits. While we make the best
          effort possible to maintain a fair and consistent experience, all
          interference calls are strictly at admins discretion.
        </p>
        <p className="norm">
          <span className="head">Kill/Loot Stealing:</span> Kill/loot stealing
          is allowed.
        </p>
        <p className="norm">
          <span className="head">Lag/Settings:</span>After joining the character
          selection screen, any complaints on lag or pre-game settings will not
          be taken into consideration. No exceptions.
        </p>
        <p className="norm">
          <span className="head">Disconnections: </span>If a player disconnects
          before the character selection screen, the game must be restarted. If
          you disconnect during game play, it is treated like a death. Your
          score is equal to the number of kills you had when you disconnected
          and you must provide video evidence proving how many kills you had.
          Your opponent can continue to play even after you have disconnected
          from the match.
        </p>
      </div>
      {/* </div> */}
    </div>
  );
};

export default GamesRules;
