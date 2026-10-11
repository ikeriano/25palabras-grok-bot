#!/usr/bin/env python3
"""Convierte tools/palabras.txt en src/data/palabras.json (palabra, tema, pistas sin derivadas)."""
import json, re, unicodedata
def norm(s):
    s = unicodedata.normalize('NFD', s.lower()); s = ''.join(c for c in s if unicodedata.category(c) != 'Mn' or c == '\u0303')
    s = unicodedata.normalize('NFC', s); return re.sub(r'[^a-z0-9ñ ]', '', s).strip()
def stem(x): return x if len(x) <= 3 else re.sub(r'[aeiou]+$', '', x)
def deriv1(a, b):
    if a == b: return True
    for x, y in ((a, b), (b, a)):
        s = stem(x)
        if len(s) >= 4 and y.startswith(s): return True
        if len(s) == 3 and y.startswith(s) and len(y) <= len(s) + 4: return True
    k = 0
    while k < min(len(a), len(b)) and a[k] == b[k]: k += 1
    return k >= 5
MANUAL = {('nieve', 'nevada'), ('lluvia', 'llover'), ('sueño', 'soñar'), ('risa', 'reír'), ('nieve', 'pinguino'), ('dientes', 'diente')}
out = []
for l in open('tools/palabras.txt', encoding='utf-8'):
    l = l.strip()
    if not l or l.startswith('#'): continue
    p, t, ps = l.split('|'); tw = [norm(w) for w in p.split() if len(norm(w)) >= 3]
    vistas, lista = set(), []
    for c in ps.split(','):
        c = c.strip(); n = norm(c)
        if not n or n in vistas or any(deriv1(n, w) for w in tw) or (p, c) in MANUAL: continue
        vistas.add(n); lista.append(c)
    out.append({'p': p, 't': t, 'c': lista[:12]})
json.dump(out, open('src/data/palabras.json', 'w', encoding='utf-8'), ensure_ascii=False)
print(len(out), 'palabras', min(len(x['c']) for x in out), 'pistas mín', len({x['t'] for x in out}), 'temas')
