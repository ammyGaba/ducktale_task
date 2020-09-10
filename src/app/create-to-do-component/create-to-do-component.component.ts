import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-to-do-component',
  templateUrl: './create-to-do-component.component.html',
  styleUrls: ['./create-to-do-component.component.scss']
})
export class CreateToDoComponentComponent implements OnInit {
  public form: FormGroup;
  tasks : any[] = [];
  open : boolean = false;
  constructor(
    public fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      task_name: new FormControl('', [<any>Validators.required]),
      task_description: new FormControl('', [<any>Validators.required]),
      repeat: new FormControl('', [<any>Validators.required]),
      })
   }

  ngOnInit() {
  }

  addvalueToList(value){
  //  console.log(value);
    let formname ={
      task_name : 'Task name',
      task_description : 'Task Description',
      repeat : 'Want to repeat'
    }
    if(this.checkValidation(this.form , formname)){
     this.tasks.push(value);
     this.form.reset();
    }
  }

  checkValidation(form , formname) : any{
 	let formError = false;
   let msg ;
   let str 
   let validationMsg = {};
		if (formname) {
			for (let i in formname) {
				validationMsg[i] = formname[i];
				// console.log(validationMsg[i])
			}
		}

    for (let i in form.controls) {
      if (form.controls[i].errors) {
				for (let j in form.controls[i].errors) {
					if (form.controls[i].errors[j]) {
						formError = true;
						msg = "";
            str = validationMsg[i];
            console.log(j)
            if (j == "required") {
               msg = str +' ' + 'is required';
              //  alert(msg);
            }
					 }
      }
     if (formError) {
      break;
     }
    }
   }
  return !formError;
 }



}
