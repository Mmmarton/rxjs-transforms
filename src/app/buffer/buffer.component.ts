import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { buffer } from 'rxjs/operators';

@Component({
  selector: 'buffer',
  templateUrl: 'buffer.component.html',
  styleUrls: ['buffer.component.scss'],
})
export class BufferComponent {
  a = new Subject<string>();
  t = new Subject<void>();
  c = this.a.asObservable().pipe(buffer(this.t.asObservable()));

  constructor() {}

  setA(value: string) {
    this.a.next(value);
  }

  trigger() {
    this.t.next();
  }
}
