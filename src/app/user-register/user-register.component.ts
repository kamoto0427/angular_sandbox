import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorMessage } from 'src/app/common/errorMessege';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  public errorMessage = ErrorMessage;

  public registerForm: FormGroup;
  public name: FormControl;
  public address: FormControl;
  public phone: FormControl;
  public email: FormControl;
  public password: FormControl;
  public passwordConfirm: FormControl;

  constructor() {}

  ngOnInit(): void {
    this.name = new FormControl('', [
      Validators.required,
      Validators.maxLength(16),
    ]);
    this.address = new FormControl('', Validators.required);
    this.phone = new FormControl('', Validators.required);
    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
    this.passwordConfirm = new FormControl('', Validators.required);

    this.registerForm = new FormGroup({
      name: this.name,
      address: this.address,
      phone: this.phone,
      email: this.email,
      password: this.password,
      passwordConfirm: this.passwordConfirm,
    });
  }

  onSubmit() {
  }
}
