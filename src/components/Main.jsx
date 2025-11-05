import { useState } from "react";
import Button from "./Button";
import Card from "./card";

export default function Main({ buttonsArray }) {
  const [activeBtn, setActiveBtn] = useState(null);

  const resetActive = () => setActiveBtn(null)

  return (
    <main onClick={resetActive}>
      <div className="container ">
        <div className="flex gap-10">
          {buttonsArray.map((btn) => (
            <Button key={btn.id} active={activeBtn?.id === btn.id} setActive={(e) => {
              e.stopPropagation();
              setActiveBtn(btn);
            }} curr={btn}/>
          ))}
        </div>
        <Card active={activeBtn}/>
      </div>
    </main>
  );
}
