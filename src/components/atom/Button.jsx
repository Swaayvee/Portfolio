const Button = ({ type, style, children }) => {
  return (
    <button
      className={`bg-blue-500 border-white border rounded-md p-1 ${style}`}
      type={type}
    >
        {children}
    </button>
  );
};

export default Button;
