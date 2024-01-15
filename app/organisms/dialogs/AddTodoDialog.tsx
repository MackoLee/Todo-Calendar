import type { FC } from 'react';
import { TodoDialog } from '@/components/dialog/TodoDialog';

export const AddTodoDialog: FC = function AddTodoDialog() {
  return (
    <TodoDialog isEdit />
  );
};
