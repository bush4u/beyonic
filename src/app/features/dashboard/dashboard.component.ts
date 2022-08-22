import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { AccountCardModel } from 'src/app/core/model/account-card.model';
import { LineChart, Interpolation, Svg } from 'chartist';
import PerfectScrollbar from 'perfect-scrollbar';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('slider1') slider1: ElementRef;
  mdq: MediaQueryList;
  mediaQueryListener: () => void

  acountCardData: AccountCardModel = {
    balance: '9,485,760',
    currency: 'UGX',
    amountSpent: '485,760'
  }

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher) {
    this.mdq = media.matchMedia('(max-width: 700px)');
    this.mediaQueryListener = () => {
      changeDetectorRef.detectChanges();
      console.log("Match ?: ", this.mdq.matches);
    }
    this.mdq.addListener(this.mediaQueryListener);

  }

  ngOnInit(): void {
    this.getDailyChart([50000, 25000, 502473, 50000, 60000])
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const a = this.slider1?.nativeElement && new PerfectScrollbar(this.slider1.nativeElement, {
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 20
      });
      a && a.update();
      console.log(a)
    }, 1000);
  }

  getDailyChart(data: any) {
    const dataDailySalesChart: any = {
      labels: ['1 Apr', '7 Apr', '14 Apr', '21 Apr', '28 Apr'],
      series: [
        data
      ]
    };
    const optionsDailySalesChart: any = {
      lineSmooth: Interpolation.cardinal({
        tension: 0
      }),
      low: 0,
      high: (Math.max(...data) || 0) + 0.5,
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
    }
    var dailySalesChart = new LineChart('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
    this.startAnimationForLineChart(dailySalesChart);
  }

  startAnimationForLineChart(chart: any) {
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;
    chart.on('draw', function (data: any) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === 'point') {
        seq++;
        data.element.animate({
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });
    seq = 0;
  };



}
