import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "src/app/cors/auth/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit, OnDestroy {
  body = document.body;

  loginForm: FormGroup;
  returnUrl: any;
  messageError: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.initBody();
    this.initForm();

    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";

    if (this.authService.isLogin()) {
      this.router.navigate([this.returnUrl]);
      return;
    }
  }

  /**
   *
   *
   * @memberof LoginComponent
   */
  initBody() {
    this.body.classList.add("login-page");
  }

  /**
   *
   *
   * @memberof LoginComponent
   */
  initForm() {
    this.loginForm = this.fb.group({
      login: ["", [Validators.required]],
      // email: ["", [Validators.email, Validators.required]],
      password: [
        "",
        [
          Validators.pattern(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,64}$" //(?=.*[ -/:-@[-`{-~])
          ),
          Validators.required
        ]
      ]
    });
  }

  submitForm() {
    if (this.loginForm.invalid) {
      return;
    }

    this.messageError = "";
    const { login, password } = this.loginForm.value;

    if (login == "" || password == "") {
      this.messageError =
        ((!login && "login") || (!password && "password")) + " is required";
      return;
    }

    this.authService.login(login, password).subscribe(
      user => {
        this.router.navigate(["default"]);
      },
      error => {
        this.messageError =
          error && error.status === 404
            ? "login or password invalid"
            : error.message;
      }
    );
  }

  ngOnDestroy(): void {
    this.body.classList.remove("login-page");
  }
}
