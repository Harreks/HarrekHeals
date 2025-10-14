export default function Clip({ url }) {
  return (
    <video autoPlay loop muted style={{ width: '100%' }}>
        <source src={ url }/>
    </video>
  );
}
