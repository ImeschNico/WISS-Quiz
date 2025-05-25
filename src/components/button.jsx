const Button = ({ text, answerOnClick }) => {
  return <button onClick={answerOnClick}>{text}</button>;
};
export default Button;
