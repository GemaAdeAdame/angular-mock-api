import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Worker, WorkerBody } from './workers.models';

const API_URL = 'https://630c77ef83986f74a7c19b29.mockapi.io/Workers';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  constructor(
    private http: HttpClient
  ) { }

  public getWorkers(): Observable<Worker[]> {
    return this.http.get<Worker[]>(API_URL);
  }

  public deleteWorker(id: string): Observable<Worker> {
    return this.http.delete<Worker>(`${API_URL}/${id}`);
  }

  public addWorker(worker: WorkerBody): Observable<Worker> {
    return this.http.post<Worker>(API_URL, worker);
  }
}