import type { FC } from "react";
import { useState, useEffect } from "react";
import { IAgent } from "../../types/Agent";
import axios from "axios";
import "./CreateAgent.css";

const CreateAgent: FC = () => {
  const [agents, setAgents] = useState<IAgent[]>([]);

  useEffect(() => {}, []);

  return <div>Create Agent</div>;
};

export default CreateAgent;
