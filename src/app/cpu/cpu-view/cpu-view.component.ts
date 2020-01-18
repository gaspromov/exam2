import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-cpu-view',
  templateUrl: './cpu-view.component.html',
  styleUrls: ['./cpu-view.component.css']
})
export class CpuViewComponent implements OnInit {

  arr:any=[{}];
  sortParam: string = '';
  filterParam: string = '';

  constructor(
    private http: HttpService,
  ) { }

  async ngOnInit() {
    this.arr = await this.http.getCpu();

  }
}
