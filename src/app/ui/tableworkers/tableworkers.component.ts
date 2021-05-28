import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MyWorker} from '../../shared/worker.module';

@Component({
  selector: 'app-tableworkers',
  templateUrl: './tableworkers.component.html',
  styleUrls: ['./tableworkers.component.css']
})
export class TableworkersComponent implements OnInit {

  @Input() title: any ;
  @Input() workers: MyWorker[] = [];
  @Output() deleteWorker = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  onDeleteWorker(id: number){
    this.deleteWorker.emit(id);
  }
}
