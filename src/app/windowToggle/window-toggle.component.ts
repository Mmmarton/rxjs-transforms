import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { concatMap, tap, windowToggle } from 'rxjs/operators';

@Component({
  selector: 'window-toggle',
  templateUrl: 'window-toggle.component.html',
  styleUrls: ['window-toggle.component.scss'],
})
export class WindowToggleComponent {
  a = new Subject<string>();
  b = new Subject<void>();
  x: Observable<any>;
  y: Observable<any>;

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
      windowToggle(this.b, () => {
        return this.b;
      }),
      tap((v) => {
        this.y = v;
      }),
      concatMap((value) => value)
    );
  }
}
