export interface ProcessData {
  protocolo: string;
  typeDescription: string;
  startDate: string;
  endDate: string;
  duration: string;
  days: number;
  hours: number;
  type: string;
  grouped: GroupedDetail;
  detailed: DetailedDetail;
}
export interface GroupedDetail {
  [key: string]: {
    [key: string]: Detail;
  };
}

export interface DetailedDetail {
  [key: string]: {
    start: string;
    unidDescription: string;
    typeGroup: string;
    group: string;
    end: string;
    minutes: number;
    seconds: number;
  };
}
export interface Detail {
  seconds: number;
  minutes: number;
  unidDescription: string;
  typeGroup: string;
  group: string;
  start: string;
  end: string;
  hours: number;
  days: number;
}
