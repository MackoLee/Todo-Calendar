import type { FC } from 'react';
import { FaGithubAlt } from 'react-icons/fa6';
import { IconButton } from '@/components/buttons/IconButton';

export const GithubButton:FC = function GithubButton() {
  return (
    <IconButton
      onClick={() => window.open('https://github.com/MackoLee/todo-calendar')}
      icon={FaGithubAlt}
    />
  );
};
