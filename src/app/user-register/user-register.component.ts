import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CustomValidator } from '../validator/custom-validator';

export class TamarunErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl): boolean {
    return control && control.invalid;
  }
}

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  public matcher = new TamarunErrorStateMatcher();

  public formGroup: FormGroup;
  public firstName: FormControl;
  public tel: FormControl;
  public birthYear: FormControl;
  public birthMonth: FormControl;
  public birthDate: FormControl;
  public cardNumber: FormControl;

  constructor(
    private fb: FormBuilder,
    ) {
  }

  ngOnInit(): void {
    this.firstName = new FormControl();
    this.tel = new FormControl();
    this.birthYear = new FormControl();
    this.birthMonth = new FormControl();
    this.birthDate = new FormControl();
    this.cardNumber = new FormControl();

    this.formGroup = this.fb.group({
      firstName: this.firstName,
      tel: this.tel,
      birthYear: this.birthYear,
      birthMonth: this.birthMonth,
      birthDate: this.birthDate,
      cardNumber: this.cardNumber
    }, { validators: CustomValidator.requiredInCaseCardNumberInput });

    this.cardNumberValueChanges();
  }

  public cardNumberValueChanges() {
    this.cardNumber.valueChanges.subscribe((cardNumber: string) => {
      console.log(this.birthYear);
      if (cardNumber !== null && cardNumber !== '' && cardNumber !== 'null') {
        if (this.firstName.value === null || this.firstName.value === '' || this.firstName.value === 'null') {
          this.firstName.setValidators([Validators.required]);
        }

        if (this.tel.value === null || this.tel.value === '' || this.tel.value === 'null') {
          this.tel.setValidators([Validators.required]);
        }

        if (this.birthYear.value === null || this.birthYear.value === '' || this.birthYear.value === 'null') {
          this.birthYear.setValidators([Validators.required]);
        }

        if (this.birthMonth.value === null || this.birthMonth.value === '' || this.birthMonth.value === 'null') {
          this.birthMonth.setValidators([Validators.required]);
        }

        if (this.birthDate.value === null || this.birthDate.value === '' || this.birthDate.value === 'null') {
          this.birthDate.setValidators([Validators.required]);
        }
      } else {
        this.firstName.clearValidators();
        this.tel.clearValidators();
        this.birthYear.clearValidators();
        this.birthMonth.clearValidators();
        this.birthDate.clearValidators();
      }
      this.firstName.updateValueAndValidity();
      this.tel.updateValueAndValidity();
      this.birthYear.updateValueAndValidity();
      this.birthMonth.updateValueAndValidity();
      this.birthDate.updateValueAndValidity();
    });
  }
}
