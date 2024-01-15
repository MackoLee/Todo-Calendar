import { DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import type { FC } from 'react';

export const TodoDialogTextInput: FC = function TodoDialogTextInput() {
  return (
    <>
      <DialogDescription>
        내용을 입력해주세요.
      </DialogDescription>
      <Input className="border-slate-200" type="text" />
    </>
  );
};
