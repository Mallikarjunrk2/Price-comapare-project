import StickyBottomCTA from '../StickyBottomCTA';

export default function StickyBottomCTAExample() {
  const handleCompare = () => {
    console.log('Compare Now clicked from sticky CTA');
  };

  const handleSetAlert = () => {
    console.log('Set Alert clicked from sticky CTA');
  };

  return <StickyBottomCTA onCompare={handleCompare} onSetAlert={handleSetAlert} />;
}