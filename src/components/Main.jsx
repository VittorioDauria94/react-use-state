import { useState } from "react";
import Button from "./Button";
import Card from "./card";

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
        <Card active={activeBtn}/>
      </div>
    </main>
  );
}
