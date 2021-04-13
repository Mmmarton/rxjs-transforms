import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Component({
  selector: 'map-to',
  templateUrl: 'map-to.component.html',
  styleUrls: ['map-to.component.scss'],
})
export class MapToComponent {
  a = new Subject<string>();
  b = '1';
  x: Observable<any>;

  constructor() {
    this.buildResult();
  }

  setA(value: string) {
    this.a.next(value);
  }

  setB(value: string) {
    this.b = value;
    this.buildResult();
  }

  private buildResult() {
    this.x = this.a.asObservable().pipe(mapTo(this.b));
  }
}
