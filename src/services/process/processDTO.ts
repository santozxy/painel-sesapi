type Unids = Record<string, Record<string, Detail>>;
export interface ProcessDTO {
  protocolo: string;
  typeDescription: string;
  startDate: string;
  endDate: string;
  duration: string;
  days: number;
  hours: number;
  type: string;
  unids: Unids;
}

interface Detail {
  start: string;
  unidDescription: string;
  typeGroup: string;
  group: string;
  end: string;
  minutes: number;
  seconds: number;
}
