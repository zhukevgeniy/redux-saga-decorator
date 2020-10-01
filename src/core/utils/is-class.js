export function isClass(candidate) {
  return (
    typeof candidate === "function" && /^\s*class\s+/.test(candidate.toString())
  );
}
