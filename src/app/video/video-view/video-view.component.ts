import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent implements OnInit {

  videos:any=[{}];
  sortParam: string = '';
  filterParam: string = '';

  constructor(
    private http: HttpService,
  ) { }

  async ngOnInit() {
    this.videos = await this.http.getVideo();
  }

}
