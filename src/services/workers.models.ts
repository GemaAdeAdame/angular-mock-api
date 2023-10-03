export interface Worker {
  id: string;
  createdAt: string;
  name: string;
  avatar: string;
  job: string;
  address: string;
}
  
export type WorkerBody = Omit<Worker, 'id' | 'createdAt'>;