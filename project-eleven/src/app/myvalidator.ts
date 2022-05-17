import { AbstractControl } from '@angular/forms'

export function rangeValidator (min: any, max: any) {
    return function(c:AbstractControl): {[key: string]: boolean} | null {
        if(c.value < min || c.value > max) {
            return {'range': true};
        }        
        return null;
    }
}

export function emailMatchValidator (c:AbstractControl):{[key: string]: boolean} | null {
    let emailControlValue = c.get('email')!.value;
    let confirmemailControlValue = c.get('confirmEmail')!.value;
    if (emailControlValue !== confirmemailControlValue) {
        return {'match': true};
    }
        return null;
}