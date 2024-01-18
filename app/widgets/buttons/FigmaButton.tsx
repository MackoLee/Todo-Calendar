import type { FC } from 'react';
import { FaFigma } from 'react-icons/fa6';
import { IconButton } from '@/components/buttons/IconButton';

export const FigmaButton:FC = function FigmaButton() {
  return (
    <IconButton
      onClick={() => window.open('https://www.figma.com/file/XlemcYLRudGNtygVb89kBb/DAM-(%40shadcn%2Fui---Design-System)?type=design&node-id=110-1019&mode=design&t=ehOQ1RtkwTFImQzF-0')}
      icon={FaFigma}
    />
  );
};
