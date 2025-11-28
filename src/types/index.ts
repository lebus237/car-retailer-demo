export type BrandType = {
  id: string;
  name: string;
};

export type CarModelType = {
  id: string;
  name: string;
};

export type CartYearModel = {
  id: string;
  label: string;
};

export interface Car {
  id?: any;
  brand: string;
  model: string;
  yearModel: string;
  value: number;
  fuel: string;
}
