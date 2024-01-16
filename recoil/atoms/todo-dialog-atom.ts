import { atom, RecoilState } from 'recoil';
import { ColorOption } from '@/components/palettes/ColorPalette';

export const isOpenAtom = atom({
  key: 'todoDialogIsOpen',
  default: false,
});

export const selectedColorAtom = atom({
  key: 'todoDialogSelectedColor',
  default: 'cyan-900' as ColorOption,
});

export type TodoDialogMode = 'add' | 'edit';

export const modeAtom = atom({
  key: 'todoDialogMode',
  default: 'add' as TodoDialogMode,
});

export const taskTextAtom = atom({
  key: 'todoDialogTaskText',
  default: '',
});
