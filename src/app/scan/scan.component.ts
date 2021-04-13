import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'scan',
  templateUrl: 'scan.component.html',
  styleUrls: ['scan.component.scss'],
})
export class ScanComponent {
  a = new Subject<string>();
  x: Observable<any>;

  constructor() {
    this.buildResult();
  }

  setA(value: string) {
    this.a.next(value);
  }

  private buildResult() {
    this.x = this.a.asObservable().pipe(
      scan((acc, val) => {
        return acc + val;
      }, '')
    );
  }
}
