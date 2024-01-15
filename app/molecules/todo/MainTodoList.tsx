import { TodoList } from '@/components/todo/molecules/TodoList';
import { todoListAtom } from '@/recoil/atoms/todo-calendar-atom';
import { useRecoilState } from 'recoil';

export const MainTodoList = function MainTodo() {
  const [todoList] = useRecoilState(todoListAtom);
  return (
    <TodoList
      items={todoList}
    />
  );
};
