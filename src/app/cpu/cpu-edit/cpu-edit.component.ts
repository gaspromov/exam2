import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/shared/http.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cpu-edit',
  templateUrl: './cpu-edit.component.html',
  styleUrls: ['./cpu-edit.component.css']
})
export class CpuEditComponent implements OnInit {
  id;
  formEdit: FormGroup;
  disabled = false;
  cpu: any;

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
      name: new FormControl({ value: this.cpu.name, disabled: this.disabled }, [Validators.required]),
      article: new FormControl({ value: this.cpu.article, disabled: this.disabled }, [Validators.required]),
      price: new FormControl({ value: this.cpu.price, disabled: this.disabled }, [Validators.required]),
      chipset: new FormControl({ value: this.cpu.chipset, disabled: this.disabled }, [Validators.required]),
      formFactor: new FormControl({ value: this.cpu.formFactor, disabled: this.disabled }, [Validators.required]),
    })
    })
  }

  async getMother(id){
    try{
      this.cpu = await this.http.getCpuById(id);
    }catch(e){
      console.log(e);
    }
  }

  async edit(){
    try{
      await this.http.putCpu(
        this.id, 
        {
          name: this.formEdit.value.name,
          article: this.formEdit.value.article,
          price: this.formEdit.value.price,
          chipset: this.formEdit.value.chipset,
          formFactor: this.formEdit.value.formFactor
        }
      );
      this.router.navigate(['cpu'])
    }catch(e){
      console.log(e);
    }
  }

  async delete(){
    try{
      await this.http.deleteCpu(this.id);
      this.router.navigate(['/cpu'])
    }catch(e){
      console.log(e);
    }
  }
}
