const Button = ({ onClick, text }) => {
  return (
    <button className="button" type="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
