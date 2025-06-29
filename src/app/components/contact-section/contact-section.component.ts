import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  imports: [],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {
  //contactForm!: FormGroup; //(!) irá iniciar como undefined e depois será inicializado no ngOnInit

  //constructor(private fb: FormBuilder) {} // injeção de dependência do FormBuilder

  ngOnInit(): void {
    //this.contactForm = this.fb.group({
    //  name: ['', Validators.required],
    //  email: ['', [Validators.required, Validators.email]],
    //  message: ['', Validators.required],
    //});
  }

  onSubmit(): void {
    //if (this.contactForm.valid) {
    //  console.log('Formulário enviado:', this.contactForm.value);
    //  alert('Formulário enviado com sucesso!');
    //  this.contactForm.reset();
    //} else {
    //  console.log('Formulário inválido');
    //  this.contactForm.markAllAsTouched();
    //}
  }
}