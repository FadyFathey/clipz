import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { TapComponent } from '../tap/tap.component';
@Component({
  selector: 'app-taps-container',
  templateUrl: './taps-container.component.html',
  styleUrls: ['./taps-container.component.css'],
})
export class TabsContainerComponent implements AfterContentInit {
  @ContentChildren(TapComponent) tabs: QueryList<TapComponent> =
    new QueryList();

  constructor() {}

  ngAfterContentInit(): void {
    const activeTabs = this.tabs?.filter((tab) => tab.active);

    if (!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs!.first);
    }
  }

  selectTab(tab: TapComponent) {
    this.tabs?.forEach((tab) => {
      tab.active = false;
    });

    tab.active = true;

    return false;
  }
}
