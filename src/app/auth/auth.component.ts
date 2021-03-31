import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'admin-login',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  public loginForm: FormGroup;
  public loading = false;
  public submitted = false;
  public error: string = null;

  constructor(private _formBuilder: FormBuilder,
              private _authService: AuthService,
              private _router: Router) {
  }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this._authService.autoLogin();
  }

  get formControls(): { [p: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this._authService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value)
      .subscribe((_) => {
        this.loading = false;
        this._router.navigate(['/admin']);
      }, (error) => {
        this.loading = false;
        this.error = error;
      });
  }


}
