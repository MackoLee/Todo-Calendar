'use client';

import { useRecoilState } from 'recoil';
import { counterAtom } from '@/recoil/atoms/counter-atom';
import { FC } from 'react';

export const CounterText: FC = function CounterText() {
  const [counter] = useRecoilState(counterAtom);

  return (
    <div>
      {counter}
    </div>
  );
};
