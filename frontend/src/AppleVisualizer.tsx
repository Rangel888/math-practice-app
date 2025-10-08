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
            min={0}
            onChange={e => {
              const val = e.target.value;

              // Allow empty input (user is typing/deleting)
              if (val === "") {
                  setA(val as any);
                  return;
              }

              const value = parseInt(val);
              if (!isNaN(value)) {
                  setA(Math.min(10, Math.max(0, value)));
              }
            }}
          />
        </label>

        <label style={{ marginLeft: '15px' }}>
          {mode === "division" ? "Groups (÷ by) (b)" : "Apples per group (b)"}:{" "}
          <input
            type="number"
            value={b}
            min={0}
            onChange={e => {
              const val = e.target.value;

              // Allow empty input (user is typing/deleting)
              if (val === "") {
                  setB(val as any);
                  return;
              }

              const value = parseInt(val);
              if (!isNaN(value)) {
                  setB(Math.min(10, Math.max(0, value)));
              }
            }}
          />
        </label>
      </div>

      <div style={{ marginTop: "20px" }}>
        <strong>
          {mode === "multiplication"
            ? `${a} × ${b} = ${a * b}`
            : b === 0
              ? "Cannot divide by 0"
              : `${a} ÷ ${b} = ${Math.floor(a / b)} R${a % b}`}
        </strong>
      </div>

      <div
        style={{
            marginTop: "10px",
            padding: "5px 20px 20px 20px",
            border: "4px solid #8B4513",            // dark brown basket border
            borderRadius: "12px",
            backgroundColor: "#DEB887",             // light brown basket color
            display: "inline-block",
            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)", // soft shadow
            position: "relative"
        }}
        >

      <div style={{ marginTop: "20px" }}>{renderGroups()}</div>
    </div>
    </div>

  );
};

export default AppleVisualizer;