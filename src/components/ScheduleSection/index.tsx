import useFullyFlow from '@/components/common/FullyFlow/FullyFlow.hooks';
import { SectionContentColumn, SectionContentTitle, SectionInnerContainer } from '@/styles/ui.styles';

export default function IntroduceSection() {
  const { moveDown } = useFullyFlow();

  return <SectionInnerContainer>
    <SectionContentColumn>
      <SectionContentTitle>
        <p>🛒</p>
        <p>일정을 골라요</p>
      </SectionContentTitle>

    </SectionContentColumn>
  </SectionInnerContainer>;
}