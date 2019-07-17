 


import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-signin',
    templateUrl: `./signin.component.html`
})
export class SigninComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.fb.group({
      nom: ["", Validators.required],
      fonction: ["", Validators.required],
    });
  }
}
