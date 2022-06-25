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

    public static inputCardNUmber(control: AbstractControl) {
        let isInputCardNumber = false;
        const cardNumber = control.get('cardNumber');

        if (cardNumber!.value !== null || cardNumber!.value !== '') {
            if (control.value === null && control.value === '' && control.value === 'null') {
                let isInputCardNumber = true;
            }
        }
        return isInputCardNumber ? { inputCardNumber: true }: null;
    }

    public static requiredInCaseCardNumberInput(control: AbstractControl) {
        let isError = false;
        const firstName = control.get('firstName');
        const tel = control.get('tel');
        const birhtYear = control.get('birhtYear');
        const birhtMonth = control.get('birhtMonth');
        const birhtDate = control.get('birhtDate');
        const cardNumber = control.get('cardNumber');

        // カード番号が入力されたときにバリデーションが発動
        if (cardNumber?.value !== null && cardNumber?.value !== '' && cardNumber?.value !== 'null') {
            // firstNameが空だった場合、エラーをセット
            if (firstName!.value === null || firstName!.value === '' || firstName?.value === 'null') {
                let isError = true;
                firstName?.setErrors({ inputCardNumber: true });
            }
            if (tel?.value === null || tel?.value === ''|| tel?.value === 'null') {
                let isError = true;
                tel?.setErrors({ inputCardNumber: true });
            }
            if (birhtYear?.value === null || birhtYear?.value === ''|| birhtYear?.value === 'null') {
                let isError = true;
                birhtYear?.setErrors({ inputCardNumber: true });
            }
            if (birhtMonth?.value === null || birhtMonth?.value === ''|| birhtMonth?.value === 'null') {
                let isError = true;
                birhtMonth?.setErrors({ inputCardNumber: true });
            }
            if (birhtDate?.value === null || birhtDate?.value === ''|| birhtDate?.value === 'null') {
                let isError = true;
                birhtDate?.setErrors({ inputCardNumber: true });
            }
        }

        return isError ? { inputCardNumber: true }: null;
    }
}