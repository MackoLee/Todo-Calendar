import { RemoveTodoButton } from '@/app/widgets/todo-calendar/buttons/RemoveTodoButton';
import { TodoList } from '@/app/widgets/todo-calendar/TodoList';
import { OpenTriggerButton } from '@/app/widgets/todo-dialog/buttons/OpenTriggerButton';

export const MainTodo = function MainTodo() {
  return (
    <div className="w-full h-full rounded-xl drop-shadow-md bg-white p-[18px]">
      <div className="flex justify-between mb-[18px]">
        <OpenTriggerButton />
        <RemoveTodoButton />
      </div>
      <TodoList />
    </div>

  );
};
