export interface Prediction {
  id?: number;
  name: string;
  userId: string;
  inputJson: string;
  outputJson: string;
  creationDate?: string;
}
