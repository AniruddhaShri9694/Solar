import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit, OnDestroy {
  isMenuOpen = false;
  activeSection = 'home';
  private readonly sections = ['home', 'about', 'services', 'portfolio', 'contact'];
  private observer: IntersectionObserver | null = null;
  private scrollDebounceTimer: number | null = null;

  ngOnInit(): void {
    this.updateActiveSection();
    globalThis.addEventListener('scroll', this.handleScroll, { passive: true });
    globalThis.addEventListener('resize', this.handleScroll, { passive: true });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    globalThis.removeEventListener('scroll', this.handleScroll);
    globalThis.removeEventListener('resize', this.handleScroll);

    if (this.scrollDebounceTimer !== null) {
      globalThis.clearTimeout(this.scrollDebounceTimer);
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  private readonly handleScroll = (): void => {
    if (this.scrollDebounceTimer !== null) {
      globalThis.clearTimeout(this.scrollDebounceTimer);
    }

    this.scrollDebounceTimer = globalThis.setTimeout(() => {
      this.updateActiveSection();
    }, 80);
  };

  private updateActiveSection(): void {
    const viewportCenter = window.innerHeight * 0.35;
    let currentSection = 'home';
    let smallestDistance = Number.POSITIVE_INFINITY;

    for (const section of this.sections) {
      const element = document.getElementById(section);
      if (!element) {
        continue;
      }

      const rect = element.getBoundingClientRect();
      const distance = Math.abs(rect.top - viewportCenter);

      if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
        currentSection = section;
        break;
      }

      if (distance < smallestDistance) {
        smallestDistance = distance;
        currentSection = section;
      }
    }

    this.activeSection = currentSection;
  }

  private initObserver(): void {
    const sectionElements = this.sections
      .map((section) => document.getElementById(section))
      .filter((element): element is HTMLElement => element !== null);

    if (!sectionElements.length) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visibleEntries.length) {
          return;
        }

        const activeEntry = visibleEntries.find((entry) => {
          const rect = entry.boundingClientRect;
          return rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.15;
        }) ?? visibleEntries[0];

        if (activeEntry?.target instanceof HTMLElement) {
          this.activeSection = activeEntry.target.id;
        }
      },
      {
        root: null,
        threshold: [0.15, 0.35, 0.5, 0.8],
        rootMargin: '-10% 0px -25% 0px'
      }
    );

    sectionElements.forEach((section) => this.observer?.observe(section));
  }

  ngAfterViewInit(): void {
    this.initObserver();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.closeMenu();

      globalThis.setTimeout(() => {
        this.updateActiveSection();
      }, 500);
    }
  }
}
