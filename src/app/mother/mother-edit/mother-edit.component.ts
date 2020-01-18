import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mother-edit',
  templateUrl: './mother-edit.component.html',
  styleUrls: ['./mother-edit.component.css']
})
export class MotherEditComponent implements OnInit {
  id;
  formEdit: FormGroup;
  disabled = false;
  mother: any;

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
    this.getMother(this.id).then(() => {
    this.formEdit = new FormGroup({
      name: new FormControl({ value: this.mother.name, disabled: this.disabled }, [Validators.required]),
      article: new FormControl({ value: this.mother.article, disabled: this.disabled }, [Validators.required]),
      price: new FormControl({ value: this.mother.price, disabled: this.disabled }, [Validators.required]),
      chipset: new FormControl({ value: this.mother.chipset, disabled: this.disabled }, [Validators.required]),
      formFactor: new FormControl({ value: this.mother.formFactor, disabled: this.disabled }, [Validators.required]),
    })
    })
  }

  async getMother(id){
    try{
      this.mother = await this.http.getMotherById(id);
    }catch(e){
      console.log(e);
    }
  }

  async edit(){
    try{
      await this.http.putMother(
        this.id, 
        {
          name: this.formEdit.value.name,
          article: this.formEdit.value.article,
          price: this.formEdit.value.price,
          chipset: this.formEdit.value.chipset,
          formFactor: this.formEdit.value.formFactor
        }
      );
      this.router.navigate(['mother'])
    }catch(e){
      console.log(e);
    }
  }

  async delete(){
    try{
      await this.http.deleteMother(this.id);
      this.router.navigate(['/mother'])
    }catch(e){
      console.log(e);
    }
  }

}
