export default function Button({ className, value, type, onclick, ...props }) {
  return (
    <button className={className} type={type} onClick={onclick}>
      {value}
    </button>
  );
}
