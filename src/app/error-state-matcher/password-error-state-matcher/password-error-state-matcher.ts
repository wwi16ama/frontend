import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl } from '@angular/forms';

export class PasswordErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null): boolean {
        const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
        const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

        return (invalidCtrl || invalidParent);
    }
}
