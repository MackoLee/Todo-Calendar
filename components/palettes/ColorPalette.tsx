import type { FC } from 'react';
import { FilledCheckBox } from '@/components/check-boxs/FilledCheckBox';

export type ColorOption = 'cyan-900' | 'cyan-800' | 'cyan-700' | 'cyan-600' | 'cyan-500';
export interface ColorPaletteProps {
  selectedColor: ColorOption,
  onSelectedColorChange?: (value: ColorOption) => void
}

type ColorOptionType = {
  name: ColorOption,
  color: string
};

export const bgColorOptions: ColorOptionType[] = [
  {
    name: 'cyan-900',
    color: 'bg-cyan-900',
  },
  {
    name: 'cyan-800',
    color: 'bg-cyan-800',
  },
  {
    name: 'cyan-700',
    color: 'bg-cyan-700',
  },
  {
    name: 'cyan-600',
    color: 'bg-cyan-600',
  },
  {
    name: 'cyan-500',
    color: 'bg-cyan-500',
  },
];
export const textColorOptions: ColorOptionType[] = [
  {
    name: 'cyan-900',
    color: 'text-cyan-900',
  },
  {
    name: 'cyan-800',
    color: 'text-cyan-800',
  },
  {
    name: 'cyan-700',
    color: 'text-cyan-700',
  },
  {
    name: 'cyan-600',
    color: 'text-cyan-600',
  },
  {
    name: 'cyan-500',
    color: 'text-cyan-500',
  },
];

export const ColorPalette: FC<ColorPaletteProps> = function ColorPalette({
  selectedColor = 'cyan-700',
  onSelectedColorChange = () => null,
}) {
  const onCheckBoxClick = (checkBoxValue:boolean, name: ColorOption) => {
    if (checkBoxValue) {
      onSelectedColorChange(name);
    }
  };
  return (
    <div className="flex gap-1">
      {
        textColorOptions.map((color) => (
          <FilledCheckBox
            key={color.name}
            value={color.name === selectedColor}
            className={color.color}
            onClick={(event) => onCheckBoxClick(event, color.name)}
          />
        ))
      }
    </div>
  );
};
