/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
export default function App() {
  const [bill, setBill] = useState("");
  const [peopleNumber, setPeopleNumber] = useState("");
  const [porcent, setPorcent] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const [totalTip, setTotalTip] = useState(0);
  

  useEffect(() => {
    if (bill && peopleNumber && porcent) {
      const total = (parseFloat(bill) * parseFloat(porcent)) / 100;
      const tip = total / parseFloat(peopleNumber);

      setTotalTip(total);
      setTipAmount(tip);
    }
  }, [bill, peopleNumber, porcent]);

  return (
    <main>
      <header>
        <h1>
          Spli
          <br />
          tter
        </h1>
      </header>
      <form className="container">
        <div>
          <section className="bill">
            <h3>Bill</h3>
            <Input
              className={"iconDollar"}
              onChange={(e) => setBill(e.target.value)}
              value={bill}
              type={"number"}
            />
          </section>
          <section className="porcent">
            <h3>Select Tip %</h3>
            <div className="porcentButtons">
              <Button text={"5%"} onClick={() => setPorcent(5)} />
              <Button text={"10%"} onClick={() => setPorcent(10)} />
              <Button text={"15%"} onClick={() => setPorcent(15)} />
              <Button text={"25%"} onClick={() => setPorcent(20)} />
              <Button text={"50%"} onClick={() => setPorcent(50)} />
              <Input
                placeholder={"Custom"}
                className={"inputPorcent"}
                type={"number"}
                onChange={(e) => setPorcent(e.target.value)}
              />
            </div>
            <div className="divMessageError">
              <h3>Number of People</h3>
            </div>
            <Input
              className={"iconPerson"}
              onChange={(e) => setPeopleNumber(e.target.value)}
              value={peopleNumber}
              type={"number"}
            />
          </section>
        </div>
        <section className="resultPorcent">
          <div>
            <h3>Tip Amount</h3>
            <p>/ person</p>
          </div>
          <div>
            <h1>{tipAmount.toFixed(2)}</h1>
          </div>
          <div className="totalPerson">
            <h3>Total</h3>
            <p>/ person</p>
          </div>
          <div>
            <h1>{totalTip.toFixed(2)}</h1>
          </div>
          <div className="divButton">
            <Button
              text={"RESET"}
              className={"resetButton"}
              onClick={() => {
                setBill("");
                setPeopleNumber("");
                setPorcent("");
                setTipAmount(0);
                setTotalTip(0);
              }}
            />
          </div>
        </section>
      </form>
    </main>
  );
}
