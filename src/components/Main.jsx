import { useState } from "react";

export default function Main({ buttonsArray }) {
  const [activeBtn, setActiveBtn] = useState(null);

  return (
    <main>
      <div className="container ">
        <div className="flex gap-10">
          {buttonsArray.map((btn) => (
            <button
              key={btn.id}
              className={`btn my-20 ${
                activeBtn?.id === btn.id ? "active-btn" : ""
              } `}
              onClick={() => setActiveBtn((curr) => (curr = btn))}
            >
              {btn.title}
            </button>
          ))}
        </div>
        <div className="box my-20">
          <h4 className="mb-10">
            {activeBtn ? activeBtn.title : "Nessun linguaggio selezionato"}
          </h4>
          <p>{activeBtn ? activeBtn.description : ""}</p>
        </div>
      </div>
    </main>
  );
}
