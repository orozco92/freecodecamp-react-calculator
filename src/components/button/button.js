import "./button.css";
function Button({ children, styleClass, clickHandler }) {
  return (
    <button
      type="button"
      className={`btn ${styleClass}`}
      onClick={() => clickHandler(children)}
    >
      {children}
    </button>
  );
}
export default Button;
