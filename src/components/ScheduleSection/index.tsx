import useFullyFlow from '@/components/common/FullyFlow/FullyFlow.hooks';

export default function IntroduceSection() {
  const { moveDown } = useFullyFlow();
  return <>
    Schedule<br />
    <button onClick={moveDown}>move down</button>
  </>;
}