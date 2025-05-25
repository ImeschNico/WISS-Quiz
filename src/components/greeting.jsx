const Greeting = ({ name }) => {
  if (!name) {
    return <div>Welcome to the game!</div>;
  }
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>Welcome back to the game!</p>
    </div>
  );
};
export default Greeting;
