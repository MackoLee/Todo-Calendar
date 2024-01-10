import IncreaseButton from './molecules/buttons/IncreaseButton';
import CounterText from './molecules/texts/CounterText';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <IncreaseButton />
      <CounterText />
    </main>
  );
}
