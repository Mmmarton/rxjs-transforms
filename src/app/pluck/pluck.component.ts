import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'pluck',
  templateUrl: 'pluck.component.html',
  styleUrls: ['pluck.component.scss'],
})
export class PluckComponent {
  a = 'a';
  b = '1';
  c = new Subject<{ key: string; value: string }>();
  x: Observable<any>;

  constructor() {
    this.buildResult();
  }

  setA(value: string) {
    this.a = value;
    this.c.next({ key: this.a, value: this.b });
  }

  setB(value: string) {
    this.b = value;
    this.c.next({ key: this.a, value: this.b });
  }

  private buildResult() {
    this.x = this.c.asObservable().pipe(pluck('key'));
  }
}
