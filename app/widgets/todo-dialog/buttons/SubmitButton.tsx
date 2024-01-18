import { FC } from 'react';
import { Button } from '@/components/ui/button';
import {
  isOpenAtom, modeAtom, selectedColorAtom, taskTextAtom,
} from '@/recoil/atoms/todo-dialog-atom';
import { useRecoilState } from 'recoil';
import { useTodoDialog } from '@/hooks/use-todo-dialog';

export const SubmitButton: FC = function SubmitButton() {
  const [mode] = useRecoilState(modeAtom);
  const [, setIsOpen] = useRecoilState(isOpenAtom);
  const [selectedColor] = useRecoilState(selectedColorAtom);
  const [taskText] = useRecoilState(taskTextAtom);

  const { addTodoList } = useTodoDialog();

  const onSubmitClick = () => {
    alert(`선택한 색상 : ${selectedColor}\n입력한 텍스트 : ${taskText}\n ${mode === 'edit' ? '수정' : '추가'} 완료!`);
    addTodoList();
    setIsOpen(false);
  };
  return (
    <Button
      className="bg-sky-900 hover:bg-sky-900/80"
      type="submit"
      onClick={() => onSubmitClick()}
    >
      {mode === 'edit' ? '수정' : '추가'}
    </Button>
  );
};
