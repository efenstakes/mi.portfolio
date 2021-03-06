
interface ComponentProps {
    space: number,
}
const VSpacerComponent: React.FC<ComponentProps> = ({ space=2 }) => {
  return (
    <div style={{ marginBottom: `${space*8}px` }} />
  );
};

export default VSpacerComponent;
