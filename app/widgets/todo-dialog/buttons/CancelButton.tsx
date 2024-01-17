import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { isOpenAtom } from '@/recoil/atoms/todo-dialog-atom';
import { useRecoilState } from 'recoil';

export const CancelButton: FC = function CancelButton() {
  const [, setIsOpen] = useRecoilState(isOpenAtom);
  const onSubmitClick = () => {
    setIsOpen(false);
  };
  return (
    <Button
      variant="outline"
      onClick={() => onSubmitClick()}
    >
      취소
    </Button>
  );
};
