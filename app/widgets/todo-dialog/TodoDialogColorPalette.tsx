import type { FC } from 'react';
import { ColorPalette } from '@/components/molecules/palettes/ColorPalette';
import { DialogDescription } from '@/components/ui/dialog';
import { selectedColorAtom } from '@/recoil/atoms/todo-dialog-atom';
import { useRecoilState } from 'recoil';

export const TodoDialogColorPalette: FC = function TodoDialogColorPalette() {
  const [selectedColor, setSelectedColor] = useRecoilState(selectedColorAtom);
  return (
    <>
      <DialogDescription>
        색상을 입력해주세요.
      </DialogDescription>
      <ColorPalette
        selectedColor={selectedColor}
        onSelectedColorChange={(value) => setSelectedColor(value)}
      />
    </>
  );
};
