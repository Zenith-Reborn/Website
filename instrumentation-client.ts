import * as Sentry from "@sentry/nextjs";

// Export the onRouterTransitionStart hook for navigation instrumentation
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
