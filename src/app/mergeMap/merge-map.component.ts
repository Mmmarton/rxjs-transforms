import { Component } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { map, mergeMap, take } from 'rxjs/operators';

@Component({
  selector: 'merge-map',
  templateUrl: 'merge-map.component.html',
  styleUrls: ['merge-map.component.scss'],
})
export class MergeMapComponent {
  a = new Subject<string>();
  b = 10;
  x: Observable<string>;
  y = '\n';

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

  private buildResult() {
    this.x = this.a.asObservable().pipe(
      mergeMap((value) => {
        return this.count().pipe(map((v) => `${value} - ${v}`));
      }, this.b)
    );

    this.x.subscribe((v) => (this.y += `${v}\n`));
  }

  private count(): Observable<number> {
    return interval(1000).pipe(take(6));
  }
}
