import { useState } from "react";
import "../css/todo.css";

export default function Money() {
  const [salary, setSalary] = useState([500000]);
  const [rent, setRent] = useState([70000]);
  const [electricbill, setElectricBill] = useState([4250]);
  const [gasfee, setGasFee] = useState([3250]);
  const [watercharge, setWaterCharge] = useState([3500]);
  const [food, setFood] = useState([1500, 2500, 1000]);
  const [beauty, setBeauty] = useState([2000, 5000, 10000, 3000]);
  const [clothes, setClothes] = useState([5000, 5000, 20000]);
  const [inputText, setInputElement] = useState("");
  const [selectValue, setSelectValue] = useState("salary");
  const salaryTotal = salary.reduce(function (sum, element) {
    return sum + element;
  }, 0);
  const rentTotal = rent.reduce(function (sum, element) {
    return sum + element;
  }, 0);
  const electricbillTotal = electricbill.reduce(function (sum, element) {
    return sum + element;
  }, 0);
  const gasfeeTotal = gasfee.reduce(function (sum, element) {
    return sum + element;
  }, 0);
  const waterchargeTotal = watercharge.reduce(function (sum, element) {
    return sum + element;
  }, 0);
  const foodTotal = food.reduce(function (sum, element) {
    return sum + element;
  }, 0);
  const beautyTotal = beauty.reduce(function (sum, element) {
    return sum + element;
  }, 0);
  const clothesTotal = clothes.reduce(function (sum, element) {
    return sum + element;
  }, 0);
  const total =
    salaryTotal -
    (rentTotal +
      electricbillTotal +
      gasfeeTotal +
      waterchargeTotal +
      foodTotal +
      beautyTotal +
      clothesTotal);
  const addPrice = () => {
    if (inputText !== "") {
      switch (selectValue) {
        case "salary":
          const newSalary = [...salary, Number(inputText)];
          setSalary(newSalary);
          setInputElement("");
          break;
        case "rent":
          const newRent = [...rent, Number(inputText)];
          setRent(newRent);
          setInputElement("");
          break;
        case "electricbill":
          const newElectricBill = [...electricbill, Number(inputText)];
          setElectricBill(newElectricBill);
          setInputElement("");
          break;
        case "gasfee":
          const newGasFee = [...gasfee, Number(inputText)];
          setGasFee(newGasFee);
          setInputElement("");
          break;
        case "watercharge":
          const newWaterCharge = [...watercharge, Number(inputText)];
          setWaterCharge(newWaterCharge);
          setInputElement("");
          break;
        case "food":
          const newFood = [...food, Number(inputText)];
          setFood(newFood);
          setInputElement("");
          break;
        case "beauty":
          const newBeauty = [...beauty, Number(inputText)];
          setBeauty(newBeauty);
          setInputElement("");
          break;
        default:
          const newClothes = [...clothes, Number(inputText)];
          setClothes(newClothes);
          setInputElement("");
          break;
      }
    }
  };
  return (
    <div className="money">
      <h2>Money</h2>
      <div className="contentflex">
        <select
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
        >
          <option value="salary">Salary</option>
          <option value="rent">Rent</option>
          <option value="electricbill">Electric Bill</option>
          <option value="gasfee">Gas Fee</option>
          <option value="watercharge">Water Charge</option>
          <option value="food">Food</option>
          <option value="beauty">Beauty</option>
          <option value="clothes">Clothes</option>
        </select>
        <input
          type="text"
          className="inputPrice"
          value={inputText}
          onChange={(e) => setInputElement(e.target.value)}
          pattern="^[0-9]+$"
        ></input>
        <button onClick={addPrice} className="addPriceButton">
          追加
        </button>
      </div>
      <table>
        <tr>
          <th className="thtitle">Item</th>
          <th className="thtitle">Price</th>
        </tr>
        <tr>
          <th>Salary</th>
          <th>{salaryTotal}</th>
        </tr>
        <tr>
          <th>Rent</th>
          <th>{rentTotal}</th>
        </tr>
        <tr>
          <th>Electric Bill</th>
          <th>{electricbillTotal}</th>
        </tr>
        <tr>
          <th>Gas Fee</th>
          <th>{gasfeeTotal}</th>
        </tr>
        <tr>
          <th>Water Charge</th>
          <th>{waterchargeTotal}</th>
        </tr>
        <tr>
          <th>Food</th>
          <th>{foodTotal}</th>
        </tr>
        <tr>
          <th>Beauty</th>
          <th>{beautyTotal}</th>
        </tr>
        <tr>
          <th>Clothes</th>
          <th>{clothesTotal}</th>
        </tr>
        <tr>
          <th>Total</th>
          <th>{total}</th>
        </tr>
      </table>
    </div>
  );
}
