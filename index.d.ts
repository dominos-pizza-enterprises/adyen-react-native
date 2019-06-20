export function startPayment(): void;
export function onError(callback: (code: any, error: any) => void): void;
export function onPaymentResult(
  callback: (code: any, error: any) => void
): void;
export function confirmPayment(token: string): void;
