import type { FC } from 'react';
import type { TodoOptions } from '@/components/todo/TodoItem';
import { TodoItem } from '@/components/todo/TodoItem';

export interface TodoListProps {
  className?: string,
  itemClassName?: string,
  items: TodoOptions[]
}
export const TodoList: FC<TodoListProps> = function TodoList({
  className,
  itemClassName,
  items = [],
}) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          className={`${itemClassName}`}
          options={item}
        />
      ))}
    </div>
  );
};
