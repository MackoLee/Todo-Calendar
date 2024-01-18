import type { FC } from 'react';
import { FaGear } from 'react-icons/fa6';
import { IconButton } from '@/components/buttons/IconButton';

export const SettingButton:FC = function SettingButton() {
  return (
    <IconButton
      icon={FaGear}
    />
  );
};
