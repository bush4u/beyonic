import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';
import { PRIMARY_NAVIGATION } from './core/contansts/primary-navigation.constant';
import { IconsService } from './core/services/icons-service/icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'beyonic';
  mdq: MediaQueryList;
  mediaQueryListener: () => void

  constructor(
    private readonly iconService: IconsService,
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher
  ) {
    this.iconService.init();
    this.mdq = media.matchMedia('(max-width: 700px)');
    this.mediaQueryListener = () => {
      changeDetectorRef.detectChanges();
      console.log("Match?: ", this.mdq.matches);
    }
    this.mdq.addListener(this.mediaQueryListener);
  }

}
