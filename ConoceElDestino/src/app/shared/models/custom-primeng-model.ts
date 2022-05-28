export enum ToastSeverity {
  success = 'success',
  info = 'info',
  warn = 'warn',
  error = 'error',
}

export interface IToast {
  severity: ToastSeverity;
  summary: string;
  detail: string;
}
