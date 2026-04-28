export default function RatingQuestion({ question, value, onChange, index }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <p style={{ fontSize: 15, fontWeight: 500, color: '#111', marginBottom: 10, lineHeight: 1.4 }}>
        {index + 1}. {question}
      </p>
      <div style={{ display: 'flex', gap: 10 }}>
        <button
          onClick={() => onChange('yes')}
          style={{
            flex: 1, padding: '12px 0', borderRadius: 12, border: 'none',
            background: value === 'yes' ? '#4CAF50' : '#f0f0f0',
            color: value === 'yes' ? '#fff' : '#333',
            fontWeight: 600, fontSize: 15, cursor: 'pointer', fontFamily: 'inherit',
          }}
        >
          Так
        </button>
        <button
          onClick={() => onChange('no')}
          style={{
            flex: 1, padding: '12px 0', borderRadius: 12, border: 'none',
            background: value === 'no' ? '#f44336' : '#f0f0f0',
            color: value === 'no' ? '#fff' : '#333',
            fontWeight: 600, fontSize: 15, cursor: 'pointer', fontFamily: 'inherit',
          }}
        >
          Ні
        </button>
      </div>
    </div>
  );
}
