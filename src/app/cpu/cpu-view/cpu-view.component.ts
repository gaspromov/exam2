import { Component, OnInit } from '@angular/core';
import { CpuService } from 'src/app/shared/cpu.service';

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
    private http: CpuService,
  ) { }

  async ngOnInit() {
    this.arr = await this.http.getCpu();

  }
}
