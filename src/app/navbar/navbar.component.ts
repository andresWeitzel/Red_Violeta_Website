import { Component, ElementRef, HostListener, inject, viewChild } from '@angular/core';
import { NavigationStart, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  private readonly router = inject(Router);
  private readonly helpDialog = viewChild<ElementRef<HTMLDialogElement>>('helpDialog');
  private scrollAtOpen = 0;

  menuOpen = false;

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationStart => event instanceof NavigationStart),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.closeMenu());
  }

  toggleMenu(): void {
    if (this.menuOpen) {
      this.closeMenu();
      return;
    }
    this.menuOpen = true;
    this.scrollAtOpen = window.scrollY;
    document.body.classList.add('nav-locked');
  }

  closeMenu(): void {
    this.menuOpen = false;
    document.body.classList.remove('nav-locked');
  }

  openHelp(): void {
    this.closeMenu();
    this.helpDialog()?.nativeElement.showModal();
  }

  closeHelp(): void {
    this.helpDialog()?.nativeElement.close();
  }

  onDialogClick(event: MouseEvent): void {
    if (event.target === this.helpDialog()?.nativeElement) {
      this.closeHelp();
    }
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (this.menuOpen && Math.abs(window.scrollY - this.scrollAtOpen) > 8) {
      this.closeMenu();
    }
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    if (window.innerWidth >= 992) {
      this.closeMenu();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
    this.closeHelp();
  }
}
