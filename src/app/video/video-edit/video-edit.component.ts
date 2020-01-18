import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-video-edit',
  templateUrl: './video-edit.component.html',
  styleUrls: ['./video-edit.component.css']
})
export class VideoEditComponent implements OnInit {

  id;
  formEdit: FormGroup;
  disabled = false;
  video: any;

  constructor(
    private http: HttpService,
    private router: Router,
    private activeRouter: ActivatedRoute,
  ) { 
      this.activeRouter.params.subscribe(param => 
      {
        this.id = param.id;
      })
  }

  ngOnInit() {
    this.getVideo(this.id).then(() => {
    this.formEdit = new FormGroup({
      name: new FormControl({ value: this.video.name, disabled: this.disabled }, [Validators.required]),
      article: new FormControl({ value: this.video.article, disabled: this.disabled }, [Validators.required]),
      price: new FormControl({ value: this.video.price, disabled: this.disabled }, [Validators.required]),
      chipset: new FormControl({ value: this.video.chipset, disabled: this.disabled }, [Validators.required]),
      formFactor: new FormControl({ value: this.video.formFactor, disabled: this.disabled }, [Validators.required]),
    })
    })
  }

  async getVideo(id){
    try{
      this.video = await this.http.getVideoById(id);
    }catch(e){
      console.log(e);
    }
  }

  async edit(){
    try{
      await this.http.putVideo(
        this.id, 
        {
          name: this.formEdit.value.name,
          article: this.formEdit.value.article,
          price: this.formEdit.value.price,
          chipset: this.formEdit.value.chipset,
          formFactor: this.formEdit.value.formFactor
        }
      );
      this.router.navigate(['video'])
    }catch(e){
      console.log(e);
    }
  }

  async delete(){
    try{
      await this.http.deleteVideo(this.id);
      this.router.navigate(['/video'])
    }catch(e){
      console.log(e);
    }
  }

}
