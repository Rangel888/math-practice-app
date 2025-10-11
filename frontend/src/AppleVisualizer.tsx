import React, { useState, useEffect } from 'react';

import './AppleVisualizer.scss';

const Apple = () => (
  <span style={{ fontSize: '2rem', margin: '2px' }}>🍎</span>
);

const AppleVisualizer: React.FC = () => {
  const [mode, setMode] = useState(() => {
    return sessionStorage.getItem('mode') || 'multiplication';
  });

  const [a, setA] = useState<number>(() => {
    const saved = sessionStorage.getItem('a');
    return saved ? parseInt(saved) : 3;
  });
  const [b, setB] = useState<number>(() => {
    const saved = sessionStorage.getItem('b');
    return saved ? parseInt(saved) : 4;
  });

  useEffect(() => {
    sessionStorage.setItem('a', String(a));
  }, [a]);

  useEffect(() => {
    sessionStorage.setItem('b', String(b));
  }, [b]);

  useEffect(() => {
    sessionStorage.setItem('mode', mode);
  }, [mode]);


  const renderGroups = () => {
    let groups = [];

    if (mode === "multiplication") {
      for (let i = 0; i < a; i++) {
        let group = [];

        // build row of apples
        for (let j = 0; j < b; j++) {
          const key = `mult-${i}-${j}`
          group.push(<Apple key={key} />);
        }
        
        // push row into array
        groups.push(
          <div key={`mult-group-${i}`}>{group}</div>
        );
      }
    }
    else if (mode === "division") {
      const totalApples = a;
      const groupsCount = b;

      if (!Number.isFinite(groupsCount) || groupsCount <= 0) {
        return [<div key="error">Enter a valid divisor</div>];
      }

      const rowsOfApples = Math.floor(totalApples / groupsCount);
      const remainder = totalApples % groupsCount;

      for (let i = 0; i < rowsOfApples; i++) {
        const group = [];

        // build row of apples
        for (let j = 0; j < groupsCount; j++) {
          const key = `div-${i}-${j}`
          group.push(<Apple key={key} />);
        }

        // push row into array
        groups.push(
          <div key={`div-group-${i}`} className='apple-divison-row'>{group}</div>
        );
      }
      
      // push remainder row into array
      if (remainder > 0) {
        const remainderGroup = [];
        for (let i = 0; i < remainder; i ++) {
            remainderGroup.push(<Apple key={`rem-${i}`}/>
            );
        }
        groups.push(<div key="remainder"
        className='apple-remainder-row'>{remainderGroup}</div>)
      }
    }
    return groups;
  }

  return (
    <div className="apple-visualizer">
      <h2>🍎 Apple Math Visualizer</h2>

      <div className="mode-selector">
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
            style={{ fontSize: '1.5rem', width: '60px', padding: '5px' }}
            onChange={e => {
              const val = e.target.value;

              // Allow empty input (user is typing/deleting)
              if (val === "") {
                  setA(val as any);
                  return;
              }

              const value = parseInt(val);
              if (!isNaN(value)) {
                  const maxValue = mode === "division" ? 100 : 10;
                  setA(Math.min(maxValue, Math.max(0, value)));
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
            style={{ fontSize: '1.5rem', width: '60px', padding: '5px' }}
            onChange={e => {
              const val = e.target.value;

              // Allow empty input (user is typing/deleting)
              if (val === "") {
                  setB(val as any);
                  return;
              }

              const value = parseInt(val);
              if (!isNaN(value)) {
                  const maxValue = mode === "division" ? 100 : 10;
                  setB(Math.min(maxValue, Math.max(0, value)));
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

      <div className="basket">
        <div className="apple-group">{renderGroups()}</div>
      </div>
    </div>

  );
};

export default AppleVisualizer;