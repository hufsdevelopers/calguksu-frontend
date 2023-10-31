import useFullyFlow from '@/components/common/FullyFlow/FullyFlow.hooks';
import { useTheme } from '@/hooks/useTheme';

export default function IntroduceSection() {
  const { moveDown } = useFullyFlow();
  const { theme, toggleTheme } = useTheme();

  return <>
    Introduce<br />
    {theme}
    <button onClick={moveDown}>move down</button>
    <button onClick={toggleTheme}>toggle</button>
  </>;
}