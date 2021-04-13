import { Component } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { concatMap, map, take } from 'rxjs/operators';

@Component({
  selector: 'concat-map',
  templateUrl: 'concat-map.component.html',
  styleUrls: ['concat-map.component.scss'],
})
export class ConcatMapComponent {
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
    this.x = this.a.asObservable().pipe(
      concatMap((value) => {
        return this.count().pipe(map((v) => `${value} - ${v}`));
      })
    );

    this.x.subscribe((v) => (this.y += `${v}\n`));
  }

  private count(): Observable<number> {
    return interval(1000).pipe(take(6));
  }
}
