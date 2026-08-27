import { Component, ElementRef, viewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  private readonly helpDialog = viewChild<ElementRef<HTMLDialogElement>>('helpDialog');

  openHelp(): void {
    this.helpDialog()?.nativeElement.showModal();
    this.closeMobileNav();
  }

  closeHelp(): void {
    this.helpDialog()?.nativeElement.close();
  }

  onDialogClick(event: MouseEvent): void {
    if (event.target === this.helpDialog()?.nativeElement) {
      this.closeHelp();
    }
  }

  private closeMobileNav(): void {
    const collapse = document.getElementById('navbarResponsive');
    if (!collapse?.classList.contains('show')) {
      return;
    }

    const jquery = (
      window as unknown as { $?: (el: HTMLElement) => { collapse: (action: string) => void } }
    ).$;

    if (jquery) {
      jquery(collapse).collapse('hide');
      return;
    }

    collapse.classList.remove('show');
  }
}
