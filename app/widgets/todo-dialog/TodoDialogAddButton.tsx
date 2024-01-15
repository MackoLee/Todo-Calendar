import { FC } from 'react';
import { IconButton } from '@/components/atoms/buttons/IconButton';
import { useRecoilState } from 'recoil';
import { todoDialogOpenAtom } from '@/recoil/atoms/todo-dialog-atom';
import { FaPlus } from 'react-icons/fa6';

export const TodoDialogAddButton: FC = function TodoDialogAddButton() {
  const [, setOpen] = useRecoilState(todoDialogOpenAtom);
  return (
    <IconButton
      onClick={() => setOpen(true)}
      icon={FaPlus}
    />
  );
};
