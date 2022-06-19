import {createAction, handleActions} from 'redux-actions'
import produce from 'immer';

// 액션 타입
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; //인풋 값을 변경
const INSERT = 'todos/INSERT'; // 새로운 TODO 등록
const TOGGLE = 'todos/TOGGLE'; // TODO를 체크 활성화 비활성화
const REMOVE = 'todos/REMOVE'; //TODO를 제거

//액션 생성 함수
export const changeInput = createAction(CHANGE_INPUT, input => input);

let id = 3;
export const insert = createAction(INSERT, text=>({
  id : id++,
  text,
  done: false
}));
export const toggle = createAction(TOGGLE, id=>id);
export const remove = createAction(REMOVE, id=>id);

//초기상태 및 리듀서 함수
const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: 'redux1',
      done: true,
    },
    {
      id: 2,
      text: 'redux2',
      done: false,
    },
  ],
};

const todos = handleActions(
  {
    [CHANGE_INPUT] : (state, {payload : input}) => 
      produce(state , draft =>{
        draft.input = input;
      }),
    [INSERT] : (state,  {payload : todo}) =>
      produce(state, draft =>{
        draft.todos.push(todo);
      }),
    [TOGGLE]: (state, {payload : id})=>
      produce(state, draft =>{
        const todo = draft.todos.find(todo=> todo.id ===id);
        todo.done = !todo.done;
      }),
    [REMOVE] : (state,{payload : id}) =>
      produce(state, draft =>{
        const index = draft.todos.findIndex(todo => todo.id === id);
        draft.todos.splice(index,1);
      })
  },
  initialState
);

export default todos;
