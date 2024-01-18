import { FC } from 'react';
import { DateTitleText } from '@/app/widgets/todo-calendar/texts/DateTitleText';
import { DecreaseMonthButton } from '@/app/widgets/todo-calendar/buttons/DecreaseMonthButton';
import { TodayButton } from '@/app/widgets/todo-calendar/buttons/TodayButton';
import { IncreaseMonthButton } from '@/app/widgets/todo-calendar/buttons/IncreaseMonthButton';
import { FigmaButton } from '@/app/widgets/buttons/FigmaButton';
import { GithubButton } from '@/app/widgets/buttons/GithubButton';
import { SettingButton } from '@/app/widgets/buttons/SettingButton';
import { DamIcon } from '@/app/widgets/icons/DamIcon';

export const MainHeader: FC = function MainHeader() {
  return (
    <div className="h-[var(--header-height)]">
      <div className="h-full flex flex-col mx-6">
        <div className="h-4 w-full" />
        <div className="my-auto flex items-center gap-2">
          <DateTitleText />
          <DecreaseMonthButton />
          <TodayButton />
          <IncreaseMonthButton />
          <div className="flex-grow" />
          <FigmaButton />
          <GithubButton />
          <SettingButton />
          <DamIcon />
        </div>
      </div>
    </div>
  );
};
