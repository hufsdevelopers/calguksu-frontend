import {
  TombstoneIcon, TombstoneBlock, TombstoneSubtitle, TombstoneTitle,
} from '@/components/Tombstone/Tombstone.styles';

interface TombstoneProps {
  title?: string;
  subtitle?: string;
}

const Tombstone = ({ title = '404 오류', subtitle = '요청하신 페이지를 찾을 수 없음' }: TombstoneProps) => {
  return <TombstoneBlock>
    <TombstoneIcon>🪦</TombstoneIcon>
    <TombstoneTitle>{title}</TombstoneTitle>
    <TombstoneSubtitle>{subtitle}</TombstoneSubtitle>
  </TombstoneBlock>;
};

export default Tombstone;