//// ProcessDTO detalhado com passar o parametro 0 na rota
export interface Unids {
  [key: string]: Detail;
}
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

export interface Detail {
  start: string;
  unidDescription: string;
  typeGroup: string;
  group: string;
  end: string;
  minutes: number;
  seconds: number;
}



export interface ProcessDTO {
  protocolo: string;
  typeDescription: string;
  startDate: string;
  endDate: string;
  duration: string;
  days: number;
  hours: number;
  type: string;
  unids: Unids ;
}



//// ProcessDTO resumido com passar o parametro 1 na rota

export interface ProcessDTOResume {
  protocolo: string;
  typeDescription: string;
  startDate: string;
  endDate: string;
  duration: string;
  days: number;
  hours: number;
  type: string;
  unids: Unids ;
}
export interface UnidsResume {
  [unitId: string]: UnitResume;
}

export interface UnitResume {
  [order: string]: DetailResume;
}

export interface DetailResume {
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
