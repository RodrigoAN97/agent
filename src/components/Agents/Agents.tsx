import type { FC } from "react";
import { useState, useEffect } from "react";
import Agent from "./Agent";
import { IAgent } from "../../types/Agent";
import axios from "axios";
import "./Agents.css";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";

const Agents: FC = () => {
  const [agents, setAgents] = useState<IAgent[]>([]);
  const [agentSearch, setAgentSearch] = useState<string>("");

  useEffect(() => {
    async function fetchInitialData() {
      const response = await axios.post("/agents", { freeText: agentSearch });
      setAgents(response.data);
    }
    fetchInitialData();
  }, [agentSearch]);

  const handleSearch = (event: React.FormEvent<HTMLInputElement>) => {
    setAgentSearch((event.target as HTMLInputElement).value);
  };

  const debounceOnChange = debounce(handleSearch, 500);

  return (
    <>
      <div id="top">
        <Link to="/join">
          <button type="button" id="join">
            Join the team
          </button>
        </Link>
        <input
          type="text"
          name="search"
          placeholder="Search"
          onChange={debounceOnChange}
        />
      </div>
      <div className="agents">
        {agents.map((agent) => (
          <Agent key={agent.id} agent={agent} />
        ))}
      </div>
    </>
  );
};

export default Agents;
