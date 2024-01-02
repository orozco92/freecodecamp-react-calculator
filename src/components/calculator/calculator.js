import { useState } from "react";
import Button from "../button/button";
import Display from "../display/display";
import "./calculator.css";
import { Actions, Values } from "../../constants";
import { evaluate } from "mathjs";

function Calculator() {
  const [input, setInput] = useState("");
  const handlerUserInput = (value) => setInput(input + value);

  const resetDisplay = () => setInput("");

  const calculate = () => {
    if (input) setInput(evaluate(input));
  };

  return (
    <div className="calculator">
      <div className="row">
        <Display input={input} />
      </div>
      <div className="row">
        <Button styleClass="btn-number" clickHandler={handlerUserInput}>
          {Values.ONE}
        </Button>
        <Button styleClass="btn-number" clickHandler={handlerUserInput}>
          {Values.TWO}
        </Button>
        <Button styleClass="btn-number" clickHandler={handlerUserInput}>
          {Values.THREE}
        </Button>
        <Button styleClass="btn-action" clickHandler={handlerUserInput}>
          {Actions.SUM}
        </Button>
      </div>
      <div className="row">
        <Button styleClass="btn-number" clickHandler={handlerUserInput}>
          {Values.FOUR}
        </Button>
        <Button styleClass="btn-number" clickHandler={handlerUserInput}>
          {Values.FIVE}
        </Button>
        <Button styleClass="btn-number" clickHandler={handlerUserInput}>
          {Values.SIX}
        </Button>
        <Button styleClass="btn-action" clickHandler={handlerUserInput}>
          {Actions.SUB}
        </Button>
      </div>
      <div className="row">
        <Button styleClass="btn-number" clickHandler={handlerUserInput}>
          {Values.SEVEN}
        </Button>
        <Button styleClass="btn-number" clickHandler={handlerUserInput}>
          {Values.EIGHT}
        </Button>
        <Button styleClass="btn-number" clickHandler={handlerUserInput}>
          {Values.NINE}
        </Button>
        <Button styleClass="btn-action" clickHandler={handlerUserInput}>
          {Actions.POW}
        </Button>
      </div>
      <div className="row">
        <Button styleClass="btn-number" clickHandler={calculate}>
          {Actions.EQ}
        </Button>
        <Button styleClass="btn-number" clickHandler={handlerUserInput}>
          {Values.ZERO}
        </Button>
        <Button styleClass="btn-number" clickHandler={handlerUserInput}>
          {Values.DOT}
        </Button>
        <Button styleClass="btn-action" clickHandler={handlerUserInput}>
          {Actions.DIV}
        </Button>
      </div>
      <div className="row">
        <Button te styleClass="btn-clear" clickHandler={resetDisplay}>
          Clear
        </Button>
      </div>
    </div>
  );
}

export default Calculator;
