function UserCard({ name, job, color }) {
  // 1. Define the style INSIDE the function so it can see 'props'
  const cardStyle = {
    padding: '10px',
    margin: '10px',
    border: `2px solid ${color}` // Added a fallback color just in case
  };

  return (
    // 2. Apply the style object to your div
    <div style={cardStyle}>
      <h2>Name: {name}</h2>
      <p>Job: {job}</p>
    </div>
  );
}

export default UserCard;