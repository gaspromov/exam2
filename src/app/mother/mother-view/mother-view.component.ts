import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-mother-view',
  templateUrl: './mother-view.component.html',
  styleUrls: ['./mother-view.component.css']
})
export class MotherViewComponent implements OnInit {
  mothers:any=[{}];
  filterParam: string = '';

  constructor(
    private http: HttpService,
  ) { }

  async ngOnInit() {
    this.mothers = await this.http.getMother();
  }

}
