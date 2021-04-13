import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { bufferWhen } from 'rxjs/operators';

@Component({
  selector: 'buffer-when',
  templateUrl: 'buffer-when.component.html',
  styleUrls: ['buffer-when.component.scss'],
})
export class BufferWhenComponent {
  a = new Subject<string>();
  b = new Subject<void>();
  x: Observable<string[]>;

  constructor() {
    this.buildResult();
  }

  setA(value: string) {
    this.a.next(value);
  }

  setB() {
    this.b.next();
  }

  private buildResult() {
    this.x = this.a.asObservable().pipe(
      bufferWhen(() => {
        return this.b;
      })
    );
  }
}
