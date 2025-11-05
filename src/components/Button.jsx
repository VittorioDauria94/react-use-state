export default function Button({active, setActive, curr}) {
  return (
    <button
      className={`btn my-20 ${active ? "active-btn" : ""} `}
      onClick={setActive}
    >
      {curr.title}
    </button>
  );
}
