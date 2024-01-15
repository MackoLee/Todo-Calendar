import type { FC } from 'react';
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from '@/components/ui/dialog';
import { FaPlus } from 'react-icons/fa6';
import { DialogBody } from 'next/dist/client/components/react-dev-overlay/internal/components/Dialog';
import { LabelText } from '@/components/atoms/text/LabelText';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ColorPalette } from '@/components/molecules/palettes/ColorPalette';
import { TodoDialogColorPalette } from '@/app/widgets/todo-dialog/TodoDialogColorPalette';
import { TodoDialogTextInput } from '@/app/widgets/todo-dialog/TodoDialogTextInput';
import { todoDialogOpenAtom } from '@/recoil/atoms/todo-dialog-atom';
import { useRecoilState } from 'recoil';

export interface TodoDialogProps {
  isEdit?: boolean,
  onSubmmit?: () => void
}

export const TodoDialog: FC<TodoDialogProps> = function TodoDialog({
  isEdit = false,
}) {
  const [open, setOpen] = useRecoilState(todoDialogOpenAtom);

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
          <Button variant="outline">
            취소
          </Button>
          <Button color="bg-sky-900">
            {isEdit ? '수정' : '추가'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
