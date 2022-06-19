import Counter from "../components/Counter";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {increase, decrease} from '../modules/counter'

const CounterContainer= () => {
  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(()=>dispatch(increase()),[dispatch]);
  const onDecrease = useCallback(()=>dispatch(decrease()),[dispatch]);
  return (
    <div>
        <Counter
         number={number}
         onIncrease={onIncrease}
         onDecrease={onDecrease}
         />
    </div>
  )
}

export default CounterContainer;