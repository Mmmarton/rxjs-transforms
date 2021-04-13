import { Component } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { mergeScan } from 'rxjs/operators';

@Component({
  selector: 'merge-scan',
  templateUrl: 'merge-scan.component.html',
  styleUrls: ['merge-scan.component.scss'],
})
export class MergeScanComponent {
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
      mergeScan((acc, val) => {
        return of(acc + val);
      }, '')
    );
  }
}
