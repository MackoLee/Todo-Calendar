import type { FC } from 'react';
import { TodoDialog } from '@/app/widgets/todo-dialog/TodoDialog';
import { TodoDialogAddButton } from '@/app/widgets/todo-dialog/TodoDialogAddButton';

export const AddTodoDialog: FC = function AddTodoDialog() {
  return (
    <>
      <TodoDialogAddButton />
      <TodoDialog isEdit />
    </>
  );
};
