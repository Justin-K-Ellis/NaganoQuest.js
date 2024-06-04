const Button = ({ text }) => {
  return (
    <button className="bg-green-400 hover:bg-cyan-500 rounded shadow-lg text-xl hover:text-white p-2">
      {text}
    </button>
  );
};

export default Button;
