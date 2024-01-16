import { FC } from 'react';
import { IconButton } from '@/components/buttons/IconButton';
import { FaPlus } from 'react-icons/fa6';
import { useTodoDialog } from '@/hooks/use-todo-dialog';

export const OpenTriggerButton: FC = function TodoDialogAddButton() {
  const { onOpen } = useTodoDialog();
  return (
    <IconButton
      onClick={() => onOpen({})}
      icon={FaPlus}
    />
  );
};
