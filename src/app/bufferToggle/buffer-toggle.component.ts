import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { bufferToggle } from 'rxjs/operators';

@Component({
  selector: 'buffer-toggle',
  templateUrl: 'buffer-toggle.component.html',
  styleUrls: ['buffer-toggle.component.scss'],
})
export class BufferToggleComponent {
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
      bufferToggle(this.b, () => {
        return this.b;
      })
    );
  }
}
