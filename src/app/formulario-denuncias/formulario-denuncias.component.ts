import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  DENUNCIA_ACCEPT,
  DENUNCIA_ACCEPT_TYPES,
  DENUNCIA_KINDS,
  DENUNCIA_MAX_FILE_MB,
  DENUNCIA_MAX_FILES,
} from './denuncia-config';

@Component({
  selector: 'app-formulario-denuncias',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-denuncias.component.html',
  styleUrl: './formulario-denuncias.component.css',
})
export class FormularioDenunciasComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly confirmDialog = viewChild('confirmDialog', { read: ElementRef });

  readonly kinds = DENUNCIA_KINDS;
  readonly accept = DENUNCIA_ACCEPT;
  readonly maxFiles = DENUNCIA_MAX_FILES;
  readonly maxFileMb = DENUNCIA_MAX_FILE_MB;

  files: File[] = [];
  fileError = '';
  submitted = false;

  readonly form = this.formBuilder.group(
    {
      anonymous: [false],
      nombre: [''],
      apellido: [''],
      edad: [''],
      email: ['', [Validators.required, Validators.email]],
      telefono: [''],
      localidad: [''],
      kind: ['', Validators.required],
      descripcion: ['', [Validators.required, Validators.minLength(30)]],
      consent: [false, Validators.requiredTrue],
    },
    { validators: [identityValidator] },
  );

  get anonymous(): boolean {
    return Boolean(this.form.controls.anonymous.value);
  }

  get previewEmail(): string {
    return this.form.controls.email.value?.trim() ?? '';
  }

  get submitBlocked(): boolean {
    return this.submitted && (this.form.invalid || !this.files.length);
  }

  openConfirm(): void {
    this.submitted = true;
    this.form.markAllAsTouched();
    this.fileError = this.files.length ? '' : 'Adjuntá al menos un archivo que ayude a comprobar lo que contás.';

    if (this.form.invalid || !this.files.length) {
      this.scrollToError();
      return;
    }

    this.dialog()?.showModal();
  }

  closeConfirm(): void {
    const dialog = this.dialog();
    if (dialog?.open) {
      dialog.close();
    }
  }

  onDialogClick(event: MouseEvent): void {
    if (event.target === this.dialog()) {
      this.closeConfirm();
    }
  }

  finishFlow(): void {
    this.closeConfirm();
    this.resetForm();
    void this.router.navigateByUrl('/lineas-de-atencion');
  }

  onFiles(event: Event): void {
    const input = event.target as HTMLInputElement;
    const incoming = Array.from(input.files ?? []);
    input.value = '';
    this.fileError = '';

    const next = [...this.files];
    for (const file of incoming) {
      if (next.length >= DENUNCIA_MAX_FILES) {
        this.fileError = `Podés adjuntar hasta ${DENUNCIA_MAX_FILES} archivos.`;
        break;
      }
      if (file.size > DENUNCIA_MAX_FILE_MB * 1024 * 1024) {
        this.fileError = `${file.name} supera los ${DENUNCIA_MAX_FILE_MB} MB.`;
        continue;
      }
      if (file.type && !DENUNCIA_ACCEPT_TYPES.includes(file.type)) {
        this.fileError = `${file.name} no es un tipo admitido.`;
        continue;
      }
      if (next.some((item) => item.name === file.name && item.size === file.size)) {
        continue;
      }
      next.push(file);
    }

    this.files = next;
  }

  removeFile(index: number): void {
    this.files = this.files.filter((_, current) => current !== index);
    if (this.files.length) {
      this.fileError = '';
    }
  }

  resetForm(): void {
    this.form.reset({ anonymous: false, consent: false, kind: '' });
    this.files = [];
    this.fileError = '';
    this.submitted = false;
  }

  hasError(name: string): boolean {
    const control = this.form.get(name);
    return Boolean(control && control.invalid && (control.touched || this.submitted));
  }

  identityError(): boolean {
    return Boolean(this.form.errors?.['identity'] && (this.form.touched || this.submitted));
  }

  private dialog(): HTMLDialogElement | undefined {
    const ref = this.confirmDialog();
    if (!ref) {
      return undefined;
    }
    const el = ref instanceof HTMLDialogElement ? ref : ref.nativeElement;
    return el ?? undefined;
  }

  private scrollToError(): void {
    queueMicrotask(() => {
      const host = document.querySelector('app-formulario-denuncias');
      const target = host?.querySelector('.has-error, .field-error');
      target?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }
}

function identityValidator(group: AbstractControl): { identity: true } | null {
  if (group.get('anonymous')?.value) {
    return null;
  }
  const nombre = String(group.get('nombre')?.value ?? '').trim();
  const apellido = String(group.get('apellido')?.value ?? '').trim();
  return nombre && apellido ? null : { identity: true };
}
