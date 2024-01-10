'use client';

import { useRecoilState } from 'recoil';
import { counterAtom } from '@/recoil/atoms/counter-atom';

export default function IncreaseButton() {
  const [, setCount] = useRecoilState(counterAtom);
  function increment() {
    setCount((c) => c + 1);
  }
  return (
    <button type="button" onClick={increment}>
      Increment
    </button>
  );
}
