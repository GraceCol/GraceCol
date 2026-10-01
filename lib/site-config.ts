// Must match the repository name since this is deployed as a GitHub Pages project site.
export const basePath = process.env.NODE_ENV === "production" ? "/GraceCol" : "";

export function asset(path: string): string {
  return `${basePath}${path}`;
}
