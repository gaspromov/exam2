import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/shared/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-morher-add',
  templateUrl: './morher-add.component.html',
  styleUrls: ['./morher-add.component.css']
})
export class MorherAddComponent implements OnInit {
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
      await this.http.postMother(
        {
          name: this.formAdd.value.name,
          article: this.formAdd.value.article,
          price: this.formAdd.value.price,
          chipset: this.formAdd.value.chipset,
          formFactor: this.formAdd.value.formFactor,
        }
      )
      this.router.navigate(['/mother']);
    }catch(e){
      console.log(e);
    }
  }

}
