import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { groupBy, mergeMap, take, tap, toArray } from 'rxjs/operators';

@Component({
  selector: 'group-by',
  templateUrl: 'group-by.component.html',
  styleUrls: ['group-by.component.scss'],
})
export class GroupByComponent {
  a = 'a';
  b = '1';
  c = new Subject<{ key: string; value: string }>();
  x: Observable<any>;

  constructor() {
    this.buildResult();
  }

  setA(value: string) {
    this.a = value;
    this.c.next({ key: this.b, value: this.a });
  }

  setB(value: string) {
    this.b = value;
  }

  private buildResult() {
    this.x = this.c.asObservable().pipe(
      take(5),
      groupBy((entry) => {
        return entry.key;
      }),
      tap((v) => console.log(v)),
      mergeMap((group) => group.pipe(toArray())),
      tap((v) => console.log(v))
    );
  }
}
