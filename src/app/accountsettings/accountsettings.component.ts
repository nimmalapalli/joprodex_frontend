import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-accountsettings',
  templateUrl: './accountsettings.component.html',
  styleUrls: ['./accountsettings.component.scss']
})
export class AccountsettingsComponent {
  setChanges!:FormGroup

  constructor(private formBuilder:FormBuilder) {

    this.setChanges=this.formBuilder.group({

      name:['',[Validators.required,Validators.minLength(4)]],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      password:['',[Validators.required,Validators.minLength(6)]],
      cPassword:['',[Validators.required,Validators.minLength(6)]],
    })
  }
  submit() {
    if (this.setChanges.valid ) {
      console.log("successful made changes")
    }
    else{
      console.log("invalid");
  }
}
}
