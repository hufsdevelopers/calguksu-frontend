import useFullyFlow from '@/components/full-page/FullyFlow.hooks';

export default function SubscribeSection() {
  const { moveDown } = useFullyFlow();
  return <>
    Subscribe<br />
    <button onClick={moveDown}>move down</button>
  </>;
}