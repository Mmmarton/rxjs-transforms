import { Component } from '@angular/core';
import { Observable, partition, Subject } from 'rxjs';

@Component({
  selector: 'partition',
  templateUrl: 'partition.component.html',
  styleUrls: ['partition.component.scss'],
})
export class PartitionComponent {
  a = new Subject<string>();
  x: Observable<any>;
  y: Observable<any>;

  constructor() {
    this.buildResult();
  }

  setA(value: string) {
    this.a.next(value);
  }

  private buildResult() {
    const [x, y] = partition(this.a, (value) => {
      return isNaN(+value);
    });

    this.x = x;
    this.y = y;
  }
}
