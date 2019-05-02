import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-user-inscription",
  templateUrl: "./user-inscription.component.html",
  styleUrls: ["./user-inscription.component.scss"]
})
export class UserInscriptionComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.fb.group({
      id: ["", Validators.required],
      nom: ["", Validators.required],
      fonction: ["", Validators.required],
      adresse: ["", Validators.required],
      telephone: ["", Validators.required],
      email: ["", Validators.required],
      pseudo: ["", Validators.required],
      mdp: ["", Validators.required],
      tokenn: ["", Validators.required],
      permission: ["", Validators.required],
      dateInscrit: ["", Validators.required],
      dateArrive: ["", Validators.required],
      statu: ["", Validators.required],
      parrain: ["", Validators.required],
      interlocuteur: ["", Validators.required]
    });
  }
}
