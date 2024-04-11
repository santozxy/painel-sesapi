/* eslint-disable @typescript-eslint/no-unused-vars */
import { DetailResume, ProcessDTOResume, Unids } from "@services/process/processDTO";

export function filterUnit(data: Unids, group: string, isMain: boolean) {
  const filteredUnids = Object.entries(data)
    .filter(([_, unidData]) => {
      const firstKey = Object.keys(unidData)[0];
      if (!isMain) {
        return unidData[firstKey].group === group;
      }
      return unidData[firstKey].group !== group;
    })
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {} as Unids);
  return filteredUnids;
}


export function dataResumeObj(response: ProcessDTOResume) {
  const dataResume: DetailResume[] = [];
  Object.entries(response).forEach(([key, value]) => {
    Object.entries(value).forEach(([subkey, detail]) => {
      Object.entries(detail).forEach(([subsubkey, subdetail]) => {
        dataResume.push(subdetail as DetailResume);
      });
    });
  });
  return dataResume;
}