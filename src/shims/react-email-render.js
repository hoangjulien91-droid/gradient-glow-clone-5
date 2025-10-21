// Minimal shim for @react-email/render to satisfy resolver during build
// Provides a no-op render function that returns a basic string
export function render(node) {
  try {
    if (typeof node === 'string') return node;
    return '';
  } catch {
    return '';
  }
}

export default { render };