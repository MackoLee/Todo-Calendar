import { DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import type { FC } from 'react';
import { taskTextAtom } from '@/recoil/atoms/todo-dialog-atom';
import { useRecoilState } from 'recoil';

export const TodoDialogTextInput: FC = function TodoDialogTextInput() {
  const [taskText, setTaskText] = useRecoilState(taskTextAtom);
  return (
    <>
      <DialogDescription>
        내용을 입력해주세요.
      </DialogDescription>
      <Input
        className="border-slate-200"
        type="text"
        value={taskText}
        onChange={(event) => setTaskText(event.target.value)}
      />
    </>
  );
};
