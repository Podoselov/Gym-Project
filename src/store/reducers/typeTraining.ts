export interface ITraining {
  id: number;
  name: string;
}

export interface User {
  nameMail: string;
  email: string;
  id: string;
  training: string;
  remember: boolean;
}

export interface Training {
  training: User[];
  login: {
    nameMail: string;
    email: string;
    id: string;
    training: string;
    remember: boolean;
  };
  trainingId?: '';
}
