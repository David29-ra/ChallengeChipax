import { getData } from "../../services/indexdata";
import { conseqArray } from "./createArray";

export async function setData(source, amount) {
  const qty = conseqArray(amount)
  const datas = await getData(source, qty)
  localStorage.setItem(source + "s", JSON.stringify(datas))
}