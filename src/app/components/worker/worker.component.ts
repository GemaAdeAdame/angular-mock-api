import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss']
})
export class WorkerComponent {

  @Input() public worker?: Worker;
  @Output() public deleteWorkerChange: EventEmitter<void> = new EventEmitter<void>();

  public deleteWorker() {
    this.deleteWorkerChange.emit();
  }

}