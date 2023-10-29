import useFullyFlow from '@/components/full-page/FullyFlow.hooks';

export default function ScheduleSection() {
  const { moveDown } = useFullyFlow();
  return <>
    Schedule<br />
    <button onClick={moveDown}>move down</button>
  </>;
}