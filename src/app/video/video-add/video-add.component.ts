import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-add',
  templateUrl: './video-add.component.html',
  styleUrls: ['./video-add.component.css']
})
export class VideoAddComponent implements OnInit {
  formAdd: FormGroup;
  disabled = false;


  constructor(
    private http: HttpService,
    private router: Router
    ) { }

  ngOnInit() {
    this.formAdd = new FormGroup({
      name: new FormControl({ value: '', disabled: this.disabled }, [Validators.required]),
      article: new FormControl({ value: '', disabled: this.disabled }, [Validators.required]),
      price: new FormControl({ value: '', disabled: this.disabled }, [Validators.required]),
      chipset: new FormControl({ value: '', disabled: this.disabled }, [Validators.required]),
      formFactor: new FormControl({ value: '', disabled: this.disabled }, [Validators.required]),
    })
  }

  async add(){
    try{
      await this.http.postVideo(
        {
          name: this.formAdd.value.name,
          article: this.formAdd.value.article,
          price: this.formAdd.value.price,
          chipset: this.formAdd.value.chipset,
          formFactor: this.formAdd.value.formFactor,
        }
      )
      this.router.navigate(['/video']);
    }catch(e){
      console.log(e);
    }
  }
}
