export interface ITraining {
  id: number;
  enabled: boolean;
  name: string;
  currentPrice: number;
  previousPrice: number;
  category: string;
  urlImg: string;
  productUrl: string;
}

export interface Training {
  training: ITraining[];
  trainingId?: '';
}
