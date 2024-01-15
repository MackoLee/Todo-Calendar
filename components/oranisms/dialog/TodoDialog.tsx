import type { FC } from 'react';
import {
  Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from '@/components/ui/dialog';
import { FaPlus } from 'react-icons/fa6';
import { DialogBody } from 'next/dist/client/components/react-dev-overlay/internal/components/Dialog';
import { LabelText } from '@/components/oranisms/dialog/LabelText';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export interface TodoDialogProps {
  isEdit?: boolean,
}
export const TodoDialog: FC<TodoDialogProps> = function TodoDialog({
  isEdit = false,
}) {
  return (
    <Dialog>
      <DialogTrigger
        className="w-10 flex justify-center items-center border border-slate-200 rounded-md hover:bg-slate-200 transition-colors"
        type="button"
      >
        <FaPlus className="text-black h-4 w-4" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            작업을 추가해주세요!
          </DialogTitle>
        </DialogHeader>
        <DialogBody
          className="flex flex-col gap-2"
        >
          <LabelText label="내용을 입력해주세요.">
            <Input className="border-slate-200" type="text" />
          </LabelText>
          <LabelText label="색상을 입력해주세요." />

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
