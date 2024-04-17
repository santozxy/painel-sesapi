/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Detail,
  DetailedDetail,
  GroupedDetail,
} from "@services/process/processDTO";

export function getDataGrouped(response: GroupedDetail) {
  const data: Detail[] = [];
  Object.entries(response).forEach(([key, value]) => {
    Object.entries(value).forEach(([subkey, detail]) => {
      const dataGrouped = detail as Detail;
      Object.entries(dataGrouped).forEach(([subsubkey, subdetail]) => {
        data.push(subdetail as Detail);
      });
    });
  });
  return data;
}

export function getDataDetailed(response: DetailedDetail) {
  const data: Detail[] = [];
  Object.entries(response).forEach(([key, value]) => {
    data.push(value as Detail);
  });
  return data;
}
