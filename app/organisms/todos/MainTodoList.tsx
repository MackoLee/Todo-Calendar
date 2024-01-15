import { TodoList } from '@/components/oranisms/todo/TodoList';
import { todoListAtom } from '@/recoil/atoms/todo-calendar-atom';
import { useRecoilState } from 'recoil';
import { AddTodoDialog } from '@/app/organisms/dialogs/AddTodoDialog';
import { RemoveTodoButton } from '@/app/atoms/buttons/RemoveTodoButton';

export const MainTodoList = function MainTodo() {
  const [todoList] = useRecoilState(todoListAtom);
  return (
    <div className="w-full h-full rounded-xl drop-shadow-md bg-white p-[18px]">
      <div className="flex justify-between mb-[18px]">
        <AddTodoDialog />
        <RemoveTodoButton />
      </div>
      <TodoList
        items={todoList}
      />
    </div>

  );
};
