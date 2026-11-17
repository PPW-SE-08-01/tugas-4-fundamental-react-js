function Header({ title, studentName }) {
  return (
    <header style={{ textAlign: 'center', marginBottom: '2rem', padding: '1rem', background: '#87E7FF', borderRadius: '8px' }}>
      <h1>{title}</h1>
      <p style={{ color: '#555' }}>Praktikum Pemrograman Web - {studentName}</p>
    </header>
  );
}

export default Header;