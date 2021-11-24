import { getData } from "../../services/indexdata";

export async function setData(source, amount) {
  const datas = await getData(source, amount)
  localStorage.setItem(source + "s", JSON.stringify(datas))
}