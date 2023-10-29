import useFullyFlow from '@/components/full-page/FullyFlow.hooks';

export default function IntroduceSection() {
  const { moveDown } = useFullyFlow();
  return <>
    Introduce<br />
    <button onClick={moveDown}>move down</button>
  </>;
}