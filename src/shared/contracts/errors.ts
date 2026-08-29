export const ERROR_CODES = {
  InvalidInputError: "InvalidInputError",
  UnsupportedLanguageError: "UnsupportedLanguageError",
  SafetyStopError: "SafetyStopError",
  SafetyProviderTimeoutError: "SafetyProviderTimeoutError",
  ProviderRateLimitError: "ProviderRateLimitError",
  ProviderTimeoutError: "ProviderTimeoutError",
  ProviderRefusalError: "ProviderRefusalError",
  MalformedModelOutputError: "MalformedModelOutputError",
  UnsafeGeneratedOutputError: "UnsafeGeneratedOutputError",
  RateLimitExceededError: "RateLimitExceededError",
  CheckoutCreationError: "CheckoutCreationError",
  WebhookSignatureError: "WebhookSignatureError",
  PaymentVerificationError: "PaymentVerificationError",
  EntitlementClaimError: "EntitlementClaimError",
  DeepCheckGenerationError: "DeepCheckGenerationError",
  DatabaseUnavailableError: "DatabaseUnavailableError",
  AnalyticsDeliveryError: "AnalyticsDeliveryError",
  InvalidRequestOriginError: "InvalidRequestOriginError",
} as const;
export type ErrorCodeName = keyof typeof ERROR_CODES;

export interface TypedApiError {
  code: ErrorCodeName;
  message: string;
  request_id: string;
  field_errors?: Record<string, string>;
  retry_after_seconds?: number;
}
