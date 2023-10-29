import useFullyFlow from '@/components/full-page/FullyFlow.hooks';

export default function CompleteSection() {
  const { moveToTop } = useFullyFlow();
  return <>
    Complete<br />
    <button onClick={moveToTop}>move to top</button>
  </>;
}