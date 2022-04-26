import Button from "../Button/Button";
import Number from "../Number/Number";
import "./Numbers.css";

const Numbers = ({ numbers, increment, decrement }) => {
  return (
    <>
      <Button text="<<" action={decrement} />
      <ul>
        {numbers.map((number) => (
          <li key={number}>
            <Number number={number} />
          </li>
        ))}
      </ul>
      <Button text=">>" action={increment} />
    </>
  );
};

export default Numbers;
