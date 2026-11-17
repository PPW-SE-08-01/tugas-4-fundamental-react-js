import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
      <h3>1. State & Event Handling (Counter)</h3>
      <p>Nilai saat ini: <strong>{count}</strong></p>
      <button onClick={() => setCount(count + 1)} style={{ marginRight: '8px', padding: '6px 12px' }}>Tambah (+)</button>
      <button onClick={() => setCount(count - 1)} disabled={count === 0} style={{ padding: '6px 12px' }}>Kurang (-)</button>
    </div>
  );
}

export default Counter;