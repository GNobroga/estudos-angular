import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

function textValidator(control: AbstractControl<string>) {
  if (control.value.startsWith('Gabriel'))
    return {
      invalidText: true,
      message: 'The input name is Gabriel, it is not allowed in this case.'
  };
  return null;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  #formBuilder = inject(FormBuilder);

  public username = new FormControl('');

  public login = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.max(5)]),
    password: new FormControl(''),
    address: new FormGroup({
      number: new FormControl(''),
      street: new FormControl('')
    })
  });

  public courses = new FormGroup({
    items: new FormArray<FormControl>([])
  });

  public formWithFormBuilder = this.#formBuilder.group({
    name: ['', [textValidator]],
    lastName: [''],
    brothers: this.#formBuilder.array([])
  });

  constructor() {
    for (let i = 0 ; i < 5 ; i++) {
      this.courses.controls['items'].push(new FormControl(''));
    }
  }

  public addBrother(name: string) {
    const formArray = this.formWithFormBuilder.controls.brothers;
    formArray.push(new FormControl(name));
    this.formWithFormBuilder.patchValue({ name: '' });
  }

  public submit(): void {
    window.alert('Enviou');
  }
}
