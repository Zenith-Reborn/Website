import * as Sentry from "@sentry/nextjs";

// Error tracking only: session replay is deliberately not enabled.
Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Do not attach personal data (such as IP addresses or cookies) to events.
  sendDefaultPii: false,

  // Error reports only: no tracing, no trace headers on requests, no session pings.
  integrations: (defaults) =>
    defaults.filter((integration) => !["BrowserTracing", "BrowserSession"].includes(integration.name)),
  tracePropagationTargets: [],

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
