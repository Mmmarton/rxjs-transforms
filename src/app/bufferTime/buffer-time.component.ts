import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { bufferTime } from 'rxjs/operators';

@Component({
  selector: 'buffer-time',
  templateUrl: 'buffer-time.component.html',
  styleUrls: ['buffer-time.component.scss'],
})
export class BufferTimeComponent {
  a = new Subject<string>();
  b = 1000;
  c = 1000;
  x: Observable<string[]>;

  constructor() {
    this.buildResult();
  }

  setA(value: string) {
    this.a.next(value);
  }

  setB(value: string) {
    this.b = +value;
    this.buildResult();
  }

  setC(value: string) {
    this.c = +value;
    this.buildResult();
  }

  private buildResult() {
    this.x = this.a.asObservable().pipe(bufferTime(this.b, this.c));
  }
}
