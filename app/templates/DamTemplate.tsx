import { DamHeader } from '@/app/organisms/DamHeader';
import { DamBody } from '@/app/organisms/DamBody';

export const DamTemplate = function DamTemplate() {
  return (
    <div className="flex flex-col w-full h-full bg-[#00516A] text-white">
      <div className="">
        <DamHeader />
      </div>
      <div className="flex-1">
        <DamBody />
      </div>
    </div>
  );
};
