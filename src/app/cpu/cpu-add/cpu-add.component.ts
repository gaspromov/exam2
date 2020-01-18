import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-cpu-add',
  templateUrl: './cpu-add.component.html',
  styleUrls: ['./cpu-add.component.css']
})
export class CpuAddComponent implements OnInit {
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
      await this.http.postCpu(
        {
          name: this.formAdd.value.name,
          article: this.formAdd.value.article,
          price: this.formAdd.value.price,
          chipset: this.formAdd.value.chipset,
          formFactor: this.formAdd.value.formFactor,
        }
      )
      this.router.navigate(['/cpu']);
    }catch(e){
      console.log(e);
    }
  }

}
