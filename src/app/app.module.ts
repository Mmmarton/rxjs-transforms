import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BufferComponent } from './buffer/buffer.component';
import { BufferCountComponent } from './bufferCount/buffer-count.component';
import { BufferTimeComponent } from './bufferTime/buffer-time.component';
import { BufferToggleComponent } from './bufferToggle/buffer-toggle.component';
import { BufferWhenComponent } from './bufferWhen/buffer-when.component';
import { ConcatMapComponent } from './concatMap/concat-map.component';
import { ConcatMapToComponent } from './concatMapTo/concat-map-to.component';
import { ExhaustMapComponent } from './exhaustMap/exhaust-map.component';
import { ExpandComponent } from './expand/expand.component';
import { GroupByComponent } from './groupBy/group-by.component';
import { MapComponent } from './map/map.component';
import { MapToComponent } from './mapTo/map-to.component';
import { MergeMapComponent } from './mergeMap/merge-map.component';
import { MergeMapToComponent } from './mergeMapTo/merge-map-to.component';
import { MergeScanComponent } from './mergeScan/merge-scan.component';
import { PartitionComponent } from './partition/partition.component';
import { PluckComponent } from './pluck/pluck.component';
import { ReduceComponent } from './reduce/reduce.component';
import { ScanComponent } from './scan/scan.component';
import { SwitchMapComponent } from './switchMap/switch-map.component';
import { SwitchMapToComponent } from './switchMapTo/switch-map-to.component';
import { ToArrayComponent } from './toArray/to-array.component';
import { WindowComponent } from './window/window.component';
import { WindowCountComponent } from './windowCount/window-count.component';
import { WindowTimeComponent } from './windowTime/window-time.component';
import { WindowToggleComponent } from './windowToggle/window-toggle.component';
import { WindowWhenComponent } from './windowWhen/window-when.component';

@NgModule({
  declarations: [
    AppComponent,
    BufferComponent,
    BufferCountComponent,
    BufferTimeComponent,
    BufferToggleComponent,
    BufferWhenComponent,
    ConcatMapComponent,
    ConcatMapToComponent,
    ExhaustMapComponent,
    MergeMapComponent,
    MergeMapToComponent,
    SwitchMapComponent,
    SwitchMapToComponent,
    ExpandComponent,
    GroupByComponent,
    MapComponent,
    MapToComponent,
    MergeScanComponent,
    ScanComponent,
    ToArrayComponent,
    PartitionComponent,
    PluckComponent,
    ReduceComponent,
    WindowComponent,
    WindowCountComponent,
    WindowTimeComponent,
    WindowToggleComponent,
    WindowWhenComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
