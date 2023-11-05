import useFullyFlow from '@/components/common/FullyFlow/FullyFlow.hooks';
import { SectionContentColumn, SectionContentTitle, SectionInnerContainer } from '@/styles/ui.styles';

export default function CompleteSection() {
  const { moveToTop } = useFullyFlow();
  return <SectionInnerContainer>
    <SectionContentColumn>
      <SectionContentTitle>
        <p>🍜</p>
        <p>다 됐어요</p>
      </SectionContentTitle>

    </SectionContentColumn>
  </SectionInnerContainer>;
}