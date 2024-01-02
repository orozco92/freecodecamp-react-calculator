import "./display.css";
function Display({ input }) {
  return <div className="display">{input}</div>;
}
Display.defaultProps = { input: 0 };
export default Display;
