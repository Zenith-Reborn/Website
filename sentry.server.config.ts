import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Do not attach personal data (such as IP addresses or cookies) to events.
  sendDefaultPii: false,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
