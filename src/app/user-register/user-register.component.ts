import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from '../validator/custom-validator';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  public userRegisterForm: FormGroup;
  public firstName: FormControl;
  public lastName: FormControl;
  public phone: FormControl;
  public cardNumber: FormControl;
  public password: FormControl;
  public passwordConfirm: FormControl;

  public value: string;

  constructor(
    private fb: FormBuilder,
    ) {
  }

  ngOnInit(): void {
    this.firstName = new FormControl();
    this.lastName = new FormControl();
    this.phone = new FormControl();
    this.cardNumber = new FormControl('', [
      Validators.required,
    ]);
    this.password = new FormControl('', [
      Validators.required
    ]);
    this.passwordConfirm = new FormControl('', [
      Validators.required
    ]);


    this.userRegisterForm = this.fb.group({
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      cardNumber: this.cardNumber,
      password: this.password,
      passwordConfirm: this.passwordConfirm
    },
    {
      validators: [
        CustomValidator.isPasswordMatch,
        CustomValidator.requiredInCaseCardNumberInput
      ]
    });
  }

  public getFirstNameErrorMessage() {
    if (this.firstName.hasError('requiredInCaseCardNumberInput')) {
        return 'カード番号入力時は、必須項目です。';
      }
    return '';
  }

  public getLastNameErrorMessage() {
    if (this.lastName.hasError('requiredInCaseCardNumberInput')) {
      return 'カード番号入力時は、必須項目です。';
    }
    return '';
  }

  public getCardNumberErrorMessage() {
    if (this.cardNumber.hasError('required')) {
      return '必須です';
    }

    if (this.cardNumber.hasError('isLongEnough')) {
      return '5文字以内で入力してください';
    }
    return ''
  }

  public getPasswordConfirmError() {
    if (this.passwordConfirm.hasError('required')) {
      return '必須です';
    }
    if (this.passwordConfirm.hasError('unmatchPassword')) {
      return 'パスワードが一致しませんでした。'
    }
    return '';
  }
}
