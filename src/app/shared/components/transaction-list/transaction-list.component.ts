import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  mdq: MediaQueryList;
  mediaQueryListener: () => void

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher) {
    this.mdq = media.matchMedia('(max-width: 700px)');
    this.mediaQueryListener = () => {
      changeDetectorRef.detectChanges();
    }
    this.mdq.addListener(this.mediaQueryListener);
  }

  ngOnInit(): void {
  }

}
