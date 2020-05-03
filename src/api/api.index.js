import axios from "axios";

const url = "https://covid19.mathdro.id/api";
const url2= "https://covid19.mathdro.id/api/daily";
export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (e) {
    console.log(`an error occured while teching count. ${e}`);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    console.log(`================================`);
    console.log(data);
  } catch (e) {
    console.log(`an error occured. ${e}`);
  }
};
