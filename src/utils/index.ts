import { DataChart, LanguagesTypeData } from "types";

export const findOccurrences = (arr: string[] = []) => {
  const res: any = [];
  arr.forEach((el) => {
    const index = res.findIndex((obj: DataChart) => {
      return obj.name === el;
    });
    if (index === -1) {
      res.push({
        name: el,
        y: 1,
      });
    } else {
      res[index].y++;
    }
  });
  return res;
};

// { string: number } => { name: string, y: number }
export const formatDataChart = (obj: LanguagesTypeData) => {
  let projectLanguages: DataChart[] = [];
  for (let key in obj) {
    projectLanguages = [...projectLanguages, { name: key, y: obj[key] }];
  }

  return projectLanguages;
};
