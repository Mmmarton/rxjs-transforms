import { Component } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { map, switchMapTo, take } from 'rxjs/operators';

@Component({
  selector: 'switch-map-to',
  templateUrl: 'switch-map-to.component.html',
  styleUrls: ['switch-map-to.component.scss'],
})
export class SwitchMapToComponent {
  a = new Subject<string>();
  x: Observable<string>;
  y = '\n';

  constructor() {
    this.buildResult();
  }

  setA(value: string) {
    this.a.next(value);
  }

  private buildResult() {
    this.x = this.a
      .asObservable()
      .pipe(switchMapTo(this.count().pipe(map((v) => `${v}`))));

    this.x.subscribe((v) => (this.y += `${v}\n`));
  }

  private count(): Observable<number> {
    return interval(1000).pipe(take(6));
  }
}
