import { Component } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { concatMapTo, map, take } from 'rxjs/operators';

@Component({
  selector: 'concat-map-to',
  templateUrl: 'concat-map-to.component.html',
  styleUrls: ['concat-map-to.component.scss'],
})
export class ConcatMapToComponent {
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
      .pipe(concatMapTo(this.count().pipe(map((v) => `${v}`))));

    this.x.subscribe((v) => (this.y += `${v}\n`));
  }

  private count(): Observable<number> {
    return interval(1000).pipe(take(6));
  }
}
