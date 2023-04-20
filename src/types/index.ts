type OwnerType = {
  login: string;
};

export type ProjectTypeData = {
  id: number;
  owner: OwnerType;
  name: string;
  created_at: string;
  size: string;
};

export type LanguagesTypeData = {
  [value: string]: number
}

export type ProjectType = {
  id: number;
  name: string;
  create: string;
  size: string;
  owner: string;
};

export type DataChart = {
  name: string;
  y: number;
};
