// Service Worker seguro para o Lembrete de Pagamento.
// Não intercepta requisições nem armazena o index.html em cache.
// Isso evita que uma versão antiga da página impeça o login no Supabase.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});
