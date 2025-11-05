export default function Button({active, setActive, curr}) {
  return (
    <button
      className={`btn my-20 ${active?.id === curr.id ? "active-btn" : ""} `}
      onClick={() => setActive((current) => (current = curr))}
    >
      {curr.title}
    </button>
  );
}
