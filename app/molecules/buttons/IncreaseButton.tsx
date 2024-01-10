'use client';

import { useRecoilState } from 'recoil';
import { counterAtom } from '@/recoil/atoms/counter-atom';
import { Button } from '@/components/ui/button';

export default function IncreaseButton() {
  const [, setCount] = useRecoilState(counterAtom);
  function increment() {
    setCount((c) => c + 1);
  }
  return (
    <Button
      type="button"
      onClick={() => increment()}
    >
      Increment
    </Button>
  );
}
