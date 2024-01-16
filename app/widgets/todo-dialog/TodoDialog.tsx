import type { FC } from 'react';
import {
  Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle,
} from '@/components/ui/dialog';
import { DialogBody } from 'next/dist/client/components/react-dev-overlay/internal/components/Dialog';
import { TodoDialogColorPalette } from '@/app/widgets/todo-dialog/TodoDialogColorPalette';
import { TodoDialogTextInput } from '@/app/widgets/todo-dialog/TodoDialogTextInput';
import { isOpenAtom } from '@/recoil/atoms/todo-dialog-atom';
import { useRecoilState } from 'recoil';
import { SubmitButton } from '@/app/widgets/todo-dialog/buttons/SubmitButton';
import { CancelButton } from '@/app/widgets/todo-dialog/buttons/CancelButton';

export const TodoDialog: FC = function TodoDialog() {
  const [open, setOpen] = useRecoilState(isOpenAtom);

  return (
    <Dialog open={open} onOpenChange={(_open) => setOpen(_open)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            작업을 추가해주세요!
          </DialogTitle>
        </DialogHeader>
        <DialogBody
          className="flex flex-col gap-2"
        >
          <TodoDialogTextInput />
          <TodoDialogColorPalette />
        </DialogBody>
        <DialogFooter>
          <SubmitButton />
          <CancelButton />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
