import {
  Detail,
  DetailedDetail,
  GroupedDetail,
} from "@services/process/processDTO";

export function getDataGrouped(response: GroupedDetail) {
  const data: Detail[] = [];
  Object.entries(response).forEach(([, value]) => {
    Object.entries(value).forEach(([, detail]) => {
      const dataGrouped = detail as Detail;
      Object.entries(dataGrouped).forEach(([, subdetail]) => {
        data.push(subdetail as Detail);
      });
    });
  });
  return data;
}

export function getDataDetailed(response: DetailedDetail) {
  const data: Detail[] = [];
  Object.entries(response).forEach(([, value]) => {
    data.push(value as Detail);
  });
  return data;
}
