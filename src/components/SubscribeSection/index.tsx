import useFullyFlow from '@/components/common/FullyFlow/FullyFlow.hooks';

export default function Index() {
  const { moveDown } = useFullyFlow();
  return <>
    Subscribe<br />
    <button onClick={moveDown}>move down</button>
  </>;
}