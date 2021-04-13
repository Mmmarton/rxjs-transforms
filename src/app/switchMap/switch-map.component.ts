import { Component } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'switch-map',
  templateUrl: 'switch-map.component.html',
  styleUrls: ['switch-map.component.scss'],
})
export class SwitchMapComponent {
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
      switchMap((value) => {
        return this.count().pipe(map((v) => `${value} - ${v}`));
      })
    );

    this.x.subscribe((v) => (this.y += `${v}\n`));
  }

  private count(): Observable<number> {
    return interval(1000).pipe(take(6));
  }
}
