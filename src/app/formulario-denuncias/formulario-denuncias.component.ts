import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-denuncias',
  templateUrl: './formulario-denuncias.component.html',
  styleUrl: './formulario-denuncias.component.css',
})
export class FormularioDenunciasComponent {
  onSubmit(event: Event): void {
    const form = event.target as HTMLFormElement;
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      alert(
        'Si el email proporcionado es correcto nos comunicaremos lo antes posible. La denuncia estará sujeta a comprobación.Muchas Gracias y Recuerdé que las lineas de comunicación siempre estan disponibles!!!(PROCESO DE SIMULACIÓN DE CARGA DE DENUNCIA)'
      );
    }
    form.classList.add('was-validated');
  }
}
