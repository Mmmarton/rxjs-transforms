import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { bufferCount } from 'rxjs/operators';

@Component({
  selector: 'buffer-count',
  templateUrl: 'buffer-count.component.html',
  styleUrls: ['buffer-count.component.scss'],
})
export class BufferCountComponent {
  a = new Subject<string>();
  b = 1;
  c = 1;
  d: Observable<string[]>;

  constructor() {
    this.d = this.a.asObservable().pipe(bufferCount(this.b, this.c));
  }

  setA(value: string) {
    this.a.next(value);
  }

  setB(value: string) {
    this.b = +value;
    this.d = this.a.asObservable().pipe(bufferCount(this.b, this.c));
  }

  setC(value: string) {
    this.c = +value;
    this.d = this.a.asObservable().pipe(bufferCount(this.b, this.c));
  }
}
