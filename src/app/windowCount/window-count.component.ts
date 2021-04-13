import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { concatMap, tap, windowCount } from 'rxjs/operators';

@Component({
  selector: 'window-count',
  templateUrl: 'window-count.component.html',
  styleUrls: ['window-count.component.scss'],
})
export class WindowCountComponent {
  a = new Subject<string>();
  b = 1;
  c = 1;
  x: Observable<any>;
  y: Observable<any>;

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
    this.x = this.a.asObservable().pipe(
      windowCount(this.b, this.c),
      tap((v) => {
        this.y = v;
      }),
      concatMap((value) => value)
    );
  }
}
