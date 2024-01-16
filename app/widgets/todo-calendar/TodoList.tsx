import type { FC } from 'react';
import { TodoItem } from '@/components/items/TodoItem';
import { useRecoilState } from 'recoil';
import { todoListAtom } from '@/recoil/atoms/todo-calendar-atom';

export const TodoList: FC = function TodoList() {
  const [todoList] = useRecoilState(todoListAtom);
  return (
    <div className="flex flex-col gap-3">
      {todoList.map((item) => (
        <TodoItem
          key={item.id}
          options={item}
        />
      ))}
    </div>
  );
};
