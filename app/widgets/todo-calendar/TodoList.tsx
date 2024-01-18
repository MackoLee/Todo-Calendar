import type { FC } from 'react';
import { TodoItem, TodoOptions } from '@/components/items/TodoItem';
import { useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil';
import { todoListAtom } from '@/recoil/atoms/todo-calendar-atom';
import { useEffect } from 'react';

export const TodoList: FC = function TodoList() {
  const todoList = useRecoilValue(todoListAtom);

  const onItemDropped = useRecoilCallback(
    ({ snapshot, set }) => (_item: TodoOptions, date: string) => {
      const currentTodoList = snapshot.getLoadable(todoListAtom).getValue();
      set(todoListAtom, currentTodoList.map((item) => {
        if (item.id === _item.id) {
          return {
            ...item,
            start_date: date,
            end_date: date,
          };
        }
        return item;
      }));
    },
  );
  return (
    <div className="flex flex-col gap-3">
      {todoList.map((item) => (
        <TodoItem
          key={item.id}
          options={item}
          onItemDropped={(_item, date) => onItemDropped(_item, date)}
        />
      ))}
    </div>
  );
};
