import useFullyFlow from '@/components/common/FullyFlow/FullyFlow.hooks';

export default function CompleteSection() {
  const { moveToTop } = useFullyFlow();
  return <>
    Complete<br />
    <button onClick={moveToTop}>move to top</button>
  </>;
}