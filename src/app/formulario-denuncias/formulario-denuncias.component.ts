import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
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
  private readonly host = inject(ElementRef);
  private readonly confirmDialog = viewChild('confirmDialog', { read: ElementRef });

  readonly kinds = DENUNCIA_KINDS;
  readonly accept = DENUNCIA_ACCEPT;
  readonly maxFiles = DENUNCIA_MAX_FILES;
  readonly maxFileMb = DENUNCIA_MAX_FILE_MB;

  files: File[] = [];
  fileError = '';
  submitted = false;

  readonly form = this.formBuilder.group({
    anonymous: [false],
    nombre: [''],
    apellido: [''],
    edad: [''],
    email: ['', [Validators.required, Validators.email]],
    telefono: [''],
    localidad: [''],
    kind: ['', Validators.required],
    descripcion: ['', [Validators.required, Validators.minLength(10)]],
    consent: [false, Validators.requiredTrue],
  });

  get anonymous(): boolean {
    return this.isAnonymousChecked();
  }

  get previewEmail(): string {
    return this.form.controls.email.value?.trim() ?? '';
  }

  get submitBlocked(): boolean {
    return this.submitted && !this.canSubmit();
  }

  openConfirm(): void {
    this.submitted = true;
    this.syncAnonymousFromDom();
    this.form.markAllAsTouched();

    if (!this.canSubmit()) {
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
    return this.submitted && this.identityMissing();
  }

  private canSubmit(): boolean {
    return !this.form.invalid && !this.identityMissing();
  }

  private identityMissing(): boolean {
    if (this.isAnonymousChecked()) {
      return false;
    }
    const nombre = String(this.form.controls.nombre.value ?? '').trim();
    const apellido = String(this.form.controls.apellido.value ?? '').trim();
    return !nombre || !apellido;
  }

  private isAnonymousChecked(): boolean {
    const checkbox = this.anonymousCheckbox();
    if (checkbox) {
      return checkbox.checked;
    }
    return Boolean(this.form.controls.anonymous.value);
  }

  private syncAnonymousFromDom(): void {
    const checkbox = this.anonymousCheckbox();
    if (checkbox) {
      this.form.controls.anonymous.setValue(checkbox.checked, { emitEvent: false });
    }
  }

  private anonymousCheckbox(): HTMLInputElement | null {
    const el = this.host.nativeElement.querySelector('#anonymous');
    return el instanceof HTMLInputElement ? el : null;
  }

  private dialog(): HTMLDialogElement | undefined {
    const ref = this.confirmDialog();
    if (!ref) {
      return undefined;
    }
    const el = ref instanceof HTMLDialogElement ? ref : ref.nativeElement;
    return el ?? undefined;
  }

  private firstInvalidControlName(): string | null {
    if (this.identityMissing()) {
      const nombre = String(this.form.controls.nombre.value ?? '').trim();
      return nombre ? 'apellido' : 'nombre';
    }

    const order = ['email', 'kind', 'descripcion', 'consent'] as const;
    for (const name of order) {
      if (this.form.controls[name].invalid) {
        return name;
      }
    }

    return null;
  }

  private scrollToError(): void {
    const name = this.firstInvalidControlName();
    setTimeout(() => {
      const root = this.host.nativeElement;
      const field = name ? root.querySelector(`#${name}`) : null;
      const target = field ?? root.querySelector('.has-error');
      if (!(target instanceof HTMLElement)) {
        return;
      }

      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const focusable = target.matches('input, select, textarea')
        ? target
        : target.querySelector('input, select, textarea');
      if (focusable instanceof HTMLElement) {
        focusable.focus({ preventScroll: true });
      }
    }, 0);
  }
}
