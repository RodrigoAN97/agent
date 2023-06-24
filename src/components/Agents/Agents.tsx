import type { FC } from "react";
import { useState, useEffect } from "react";
import Agent from "./Agent";
import { IAgent } from "../../types/Agent";
import axios from "axios";
import "./Agents.css";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
import Modal from "react-modal";

const Agents: FC = () => {
  const [agents, setAgents] = useState<IAgent[]>([]);
  const [agentModal, setAgentModal] = useState<IAgent | undefined>(undefined);
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

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      padding: "0",
      transform: "translate(-50%, -50%)",
    },
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
          <div key={agent.id} onClick={() => setAgentModal(agent)}>
            <Agent fullView={false} agent={agent} />
          </div>
        ))}
      </div>
      {agentModal && (
        <Modal
          ariaHideApp={false}
          isOpen={!!agentModal}
          onRequestClose={() => setAgentModal(undefined)}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Agent fullView={true} key={agentModal.id} agent={agentModal} />
        </Modal>
      )}
    </>
  );
};

export default Agents;
