import useFullyFlow from '@/components/common/FullyFlow/FullyFlow.hooks';
import { SectionContentColumn, SectionContentTitle, SectionInnerContainer } from '@/styles/ui.styles';

export default function Index() {
  const { moveDown } = useFullyFlow();
  return <SectionInnerContainer>
    <SectionContentColumn>
      <SectionContentTitle>
        <p>📮</p>
        <p>어디로 보낼까요</p>
      </SectionContentTitle>

    </SectionContentColumn>
  </SectionInnerContainer>;
}