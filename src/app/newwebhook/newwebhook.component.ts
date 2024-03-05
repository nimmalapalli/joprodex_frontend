import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newwebhook',
  templateUrl: './newwebhook.component.html',
  styleUrls: ['./newwebhook.component.scss']
})
export class NewwebhookComponent {
  webhook!:FormGroup

  constructor(private formBuilder:FormBuilder) {

    this.webhook=this.formBuilder.group({

      name:['',[Validators.required,Validators.minLength(4)]],
      email:['',[Validators.required,Validators.email]],
      url:['',[Validators.required,Validators.minLength(6)]],
      selectOne:['',[Validators.required]],
    })
  }
  submit() {
    if (this.webhook.valid ) {
      console.log("successful made changes")
    }
    else{
      console.log("invalid");
  }
}
}
