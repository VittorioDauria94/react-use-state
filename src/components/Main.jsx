import { useState } from "react";
import Button from "./Button";

export default function Main({ buttonsArray }) {
  const [activeBtn, setActiveBtn] = useState(null);

  return (
    <main>
      <div className="container ">
        <div className="flex gap-10">
          {buttonsArray.map((btn) => (
            <Button key={btn.id} active={activeBtn} setActive={setActiveBtn} curr={btn}/>
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
