// Converts a CSS declaration string (as used throughout the prototype's dynamic
// style values) into a React style object. Objects are passed through untouched.
export function css(input) {
  if (!input) return undefined;
  if (typeof input === 'object') return input;
  const out = {};
  const push = (decl) => {
    const i = decl.indexOf(':');
    if (i < 0) return;
    const key = decl.slice(0, i).trim();
    const value = decl.slice(i + 1).trim();
    if (!key || !value) return;
    out[key.startsWith('--') ? key : key.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = value;
  };
  let depth = 0;
  let cur = '';
  for (const ch of input) {
    if (ch === '(') depth++;
    if (ch === ')') depth--;
    if (ch === ';' && depth === 0) { push(cur); cur = ''; } else { cur += ch; }
  }
  if (cur.trim()) push(cur);
  return out;
}
