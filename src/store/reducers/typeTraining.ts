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

export interface User {
  nameMail: string;
  email: string;
  password: string;
  remember: boolean;
}

export interface Training {
  training: ITraining[];
  login: {
    nameMail: string;
    email: string;
    id: string;
    remember: boolean;
  };
  trainingId?: '';
}
