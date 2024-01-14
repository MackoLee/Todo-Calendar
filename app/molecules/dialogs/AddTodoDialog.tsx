import type { FC } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FaPlus } from 'react-icons/fa6';
import { DialogBody } from 'next/dist/client/components/react-dev-overlay/internal/components/Dialog';
import { Input } from '@/components/ui/input';

export const AddTodoDialog: FC = function AddTodoDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline" className="" size="icon">
          <FaPlus className="text-black h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            작업을 추가해주세요!
          </DialogTitle>
        </DialogHeader>
        <DialogBody>
          <DialogDescription>
            내용을 입력해주세요.
          </DialogDescription>
          <Input className="border-slate-200" type="text" />
        </DialogBody>
        <DialogFooter>
          <button type="button">
            Cancel
          </button>
          <button type="button">
            Add
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
