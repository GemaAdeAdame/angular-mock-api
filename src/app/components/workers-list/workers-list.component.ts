import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Worker } from 'src/app/services/workers.models';
import { WorkersService } from 'src/app/services/workers.service';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.scss']
})
export class WorkersListComponent implements OnInit {

  public workers$?: Observable<Worker[]>;

  constructor(
    private workersService: WorkersService
  ) { }

  ngOnInit(): void {
    this.getWorkers();
 
