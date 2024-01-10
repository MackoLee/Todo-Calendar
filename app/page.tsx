'use client';

import { Box } from '@/components/drag-and-drop/Box';
import { Dustbin } from '@/components/drag-and-drop/Dustbin';
import IncreaseButton from './molecules/buttons/IncreaseButton';
import CounterText from './molecules/texts/CounterText';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <IncreaseButton />
      <CounterText />
      <Dustbin />
      <Box name="Box 1" />
      <Box name="Box 2" />
    </main>
  );
}
