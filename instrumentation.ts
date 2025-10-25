import * as Sentry from "@sentry/nextjs";

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./sentry.server.config");
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    await import("./sentry.edge.config");
  }
}

export async function onRequestError(
  err: unknown,
  request: {
    path: string; // resource path, e.g. /blog?name=foo
    method: string; // request method. e.g. GET, POST, etc
    headers: { [key: string]: string };
  },
  context: {
    routerKind: "Pages Router" | "App Router"; // the router type
    routePath: string; // the route file path, e.g. /app/blog/[dynamic]
    routeType: "render" | "route" | "action" | "middleware"; // the context in which the error occurred
    renderSource:
      | "react-server-components"
      | "react-server-components-payload"
      | "server-rendering";
    revalidateReason: "on-demand" | "stale" | undefined; // undefined is a normal request outside of revalidation
    renderType: "dynamic" | "dynamic-resume"; // "dynamic-resume" for PPR
  }
) {
  Sentry.captureException(err, {
    contexts: {
      nextjs: {
        request: {
          path: request.path,
          method: request.method,
        },
        router: context.routerKind,
        route: context.routePath,
        type: context.routeType,
      },
    },
  });
}
