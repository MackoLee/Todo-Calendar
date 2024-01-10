'use client';

import { useRecoilState } from 'recoil';
import { counterAtom } from '@/recoil/atoms/counter-atom';

export default function CounterText() {
  const [counter] = useRecoilState(counterAtom);

  return (
    <div>
      {counter}
    </div>
  );
}
