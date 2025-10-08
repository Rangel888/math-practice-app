import React, { useState } from 'react';

const Apple = () => (
  <span style={{ fontSize: '2rem', margin: '2px' }}>🍎</span>
);

const AppleVisualizer: React.FC = () => {
  const [mode, setMode] = useState("multiplication");
  const [a, setA] = useState<number>(3);
  const [b, setB] = useState<number>(4);

  const renderGroups = () => {
    let groups = [];

    if (mode === "multiplication") {
      // Multiplication: a groups of b apples
      for (let i = 0; i < a; i++) {
        let group = [];
        for (let j = 0; j < b; j++) {
          group.push(<Apple key={j} />);
        }
        groups.push(
          <div key={i}>
            {group}
          </div>
        );
      }
      return groups;
    }
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>🍎 Apple Math Visualizer</h2>

      <div style={{ marginBottom: "15px" }}>
        <label>
          Mode:{" "}
          <select value={mode} onChange={e => setMode(e.target.value)}>
            <option value="multiplication">Multiplication</option>
            <option value="division">Division</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          {mode === "division" ? "Total Apples (a)" : "Groups (a)"}:{" "}
          <input
            type="number"
            value={a}
            min={1}
            onChange={e => setA(Math.max(1, parseInt(e.target.value) || 1))}
          />
        </label>

        <label style={{ marginLeft: '15px' }}>
          {mode === "division" ? "Groups (÷ by) (b)" : "Apples per group (b)"}:{" "}
          <input
            type="number"
            value={b}
            min={1}
            onChange={e => setB(Math.max(1, parseInt(e.target.value) || 1))}
          />
        </label>
      </div>

      <div style={{ marginTop: "20px" }}>
        <strong>
          {mode === "multiplication"
            ? `${a} × ${b} = ${a * b}`
            : `${a} ÷ ${b} = ${Math.floor(a / b)} R${a % b}`}
        </strong>
      </div>
      
      <div style={{ marginTop: "20px" }}>{renderGroups()}</div>
    </div>

  );
};

export default AppleVisualizer;