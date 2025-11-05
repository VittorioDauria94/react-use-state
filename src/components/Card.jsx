export default function Card({ active }) {
  return (
    <div className="box my-20">
      <h4 className="mb-10">
        {active?.title ?? "Nessun linguaggio selezionato"}
      </h4>
      <p>{active?.description ?? ""}</p>
    </div>
  );
}
