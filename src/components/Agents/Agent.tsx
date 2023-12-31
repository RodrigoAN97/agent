import type { FC } from "react";
import { IAgent } from "../../types/Agent";

import "./Agent.css";
import Reviews from "../Reviews/Reviews";

const Agent: FC<{ agent: IAgent; fullView: boolean }> = ({
  agent,
  fullView,
}) => {
  return (
    <div
      className="container"
      style={{
        width: fullView ? "fit-content" : "",
        margin: fullView ? 0 : "",
        padding: fullView ? "10px" : "",
      }}
    >
      <header>
        <div className="avatar-holder">
          <img src={agent.photoUrl} className="avatar" alt={agent.firstName} />
        </div>
        <h2 className="agent-name">{agent.firstName + " " + agent.lastName}</h2>
      </header>
      <div className="body">
        <span>
          {fullView
            ? agent.aboutMe
            : `${agent.aboutMe.slice(0, 200)}${
                agent.aboutMe.length > 200 ? "..." : ""
              }`}
        </span>
        {fullView && <Reviews agent={agent}></Reviews>}
      </div>
      <footer>
        <div className="full-width-flex-box">
          <div className="one-third-flex-box">
            <span>{agent.address}</span>
          </div>
          <div className="one-third-flex-box">
            <span>Areas of Practice: {agent.practiceAreas}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Agent;
