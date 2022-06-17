export default function Counter({ number, onIncrearse, onDecrease }) {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={onIncrearse}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}
