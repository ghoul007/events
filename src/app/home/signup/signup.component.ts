import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { UsersService } from "src/app/cors/auth/user.service";
import { tap } from "rxjs/operators";
import { AuthService } from "src/app/cors/auth/auth.service";
import { User } from "src/app/cors/auth/user";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  messageError: any;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initBody();
    this.initForm();
  }

  /**
   *
   *
   * @memberof SignupComponent
   */
  initBody() {
    const body = document.body;
    body.classList.add("signup-page");
  }

  /**
   *
   *
   * @memberof SignupComponent
   */
  initForm() {
    this.signupForm = this.fb.group({
      login: ["", Validators.required],
      email: ["", [Validators.email, Validators.required]],
      password: [
        "",
        [
          Validators.pattern(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@[-`{-~]).{6,64}$"
          ),
          Validators.required
        ]
      ]
    });
  }

  submitForm() {
    if (this.signupForm.invalid) {
      return
    }

    const user = this.signupForm.value;

    this.authService.signup(user).subscribe(
      (user: User) => {
        this.router.navigate(["default"]);
      },
      error => {
        this.messageError = error.message;
      }
    );
    // console.log(this.signupForm.value);
  }
}
