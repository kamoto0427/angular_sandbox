import { ValidationErrors, FormControl, AbstractControl } from '@angular/forms';

export class CustomValidator {

    public static isPasswordMatch(control: AbstractControl) {
        const password = control.get('password');
        const passwordConfirm = control.get('passwordConfirm');
        if (password!.value === '' || passwordConfirm!.value === '') {
            return;
        }

        if (password!.value !== passwordConfirm!.value) {
            passwordConfirm!.setErrors({ unmatchPassword: true })
        }
        return { unmatchPassword: null }
    }

    public static requiredInCaseCardNumberInput(control: AbstractControl) {
        let isError = false;
        const firstName = control.get('firstName');
        const lastName = control.get('lastName');
        const cardNumber = control.get('cardNumber');

        if (cardNumber!.value == null || cardNumber!.value == '') {
            console.log('hi');
            return isError ? firstName!.setErrors({ requiredInCaseCardNumberInput: true }) : null;
        }

        // カード番号が入力されたときにバリデーションが発動
        if (cardNumber!.value !== null || cardNumber!.value !== '') {
            console.log('ho');

            // firstNameが空だった場合、エラーをセット
            if (firstName!.value === null || firstName!.value === '') {
                let isError = true;
                console.log('he');

                firstName!.setErrors({ requiredInCaseCardNumberInput: true });
            }

            if (lastName!.value === null || lastName!.value === '') {
                let isError = true;
                console.log('he');

                lastName!.setErrors({ requiredInCaseCardNumberInput: true });
            }
        }

        return null;
    }
}