import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast-container">
      <div *ngFor="let toast of toastService.toasts()" class="toast" [class]="'toast-' + toast.type">
        <div class="toast-icon">
          <ng-container [ngSwitch]="toast.type">
            <span *ngSwitchCase="'success'">✓</span>
            <span *ngSwitchCase="'error'">✕</span>
            <span *ngSwitchCase="'info'">ℹ</span>
            <span *ngSwitchCase="'warning'">⚠</span>
          </ng-container>
        </div>
        <div class="toast-message">{{ toast.message }}</div>
        <button class="toast-close" (click)="toastService.removeToast(toast.id)">×</button>
      </div>
    </div>
  `,
  styles: [`
    .toast-container {
      position: fixed;
      bottom: 30px;
      right: 30px;
      z-index: 9999;
      pointer-events: none;

      @media (max-width: 768px) {
        bottom: 20px;
        right: 20px;
        left: 20px;
      }
    }

    .toast {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px 20px;
      border-radius: 8px;
      margin-bottom: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      animation: slideInRight 0.3s ease-out;
      pointer-events: all;
      font-weight: 500;
      font-size: 14px;
      max-width: 400px;

      @media (max-width: 768px) {
        padding: 14px 16px;
        font-size: 13px;
        max-width: calc(100% - 40px);
      }
    }

    .toast-success {
      background: linear-gradient(135deg, #10b981, #059669);
      color: white;
    }

    .toast-error {
      background: linear-gradient(135deg, #ef4444, #dc2626);
      color: white;
    }

    .toast-info {
      background: linear-gradient(135deg, #3b82f6, #2563eb);
      color: white;
    }

    .toast-warning {
      background: linear-gradient(135deg, #f59e0b, #d97706);
      color: white;
    }

    .toast-icon {
      font-size: 20px;
      font-weight: bold;
      flex-shrink: 0;
    }

    .toast-message {
      flex: 1;
      line-height: 1.4;
    }

    .toast-close {
      background: none;
      border: none;
      color: inherit;
      cursor: pointer;
      font-size: 24px;
      padding: 0;
      margin-left: 8px;
      flex-shrink: 0;
      opacity: 0.7;
      transition: opacity 0.2s;

      &:hover {
        opacity: 1;
      }
    }

    @keyframes slideInRight {
      from {
        transform: translateX(400px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `]
})
export class ToastComponent {
  toastService = inject(ToastService);
}
