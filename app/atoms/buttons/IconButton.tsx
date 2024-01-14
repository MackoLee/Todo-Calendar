import type { FC } from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import React from 'react';
import { VariantProps } from 'class-variance-authority';
import { IconType } from 'react-icons';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  icon: IconType
}

export const IconButton: FC<IconButtonProps> = function IconButton({ icon, ...props }) {
  return (
    <Button
      className="text-black"
      variant="outline"
      size="icon"
      {...props}
    >
      {React.createElement(icon)}
    </Button>
  );
};
