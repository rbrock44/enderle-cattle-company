
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4271, hash: 'eba24fb4ca141895646de1e539c2f795f29b98651889e24ed30d03e064efb545', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1019, hash: '12912284dfce505b8b712ff1d35d0d4f9b90c4a480b8a45818b78f74a718028c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 16459, hash: 'a432cc3fccc9a78050094dd62dfff850b027c341dca5f1bc83d12c712be2db80', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-KXJQADTN.css': {size: 11497, hash: 'lR25a0IFch0', text: () => import('./assets-chunks/styles-KXJQADTN_css.mjs').then(m => m.default)}
  },
};
