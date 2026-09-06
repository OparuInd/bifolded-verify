/* TR crew service worker — v1 (2026-09-06). Web Push + a click that opens The Slip / the Shop Floor.
   It caches nothing on purpose: these pages must always show the database, never a stale copy. */
self.addEventListener("install", e => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("push", e => {
  let d = {}; try { d = e.data ? e.data.json() : {}; } catch (_) { d = { title: "Tungsten Royce", body: e.data ? e.data.text() : "" }; }
  e.waitUntil(self.registration.showNotification(d.title || "Tungsten Royce", {
    body: d.body || "", tag: d.tag || "tr-crew", renotify: true, icon: "tr-icon-192.png", badge: "tr-badge-96.png",
    data: { url: d.url || "/beta/slip.html" }, vibrate: [80, 40, 80]
  }));
});
self.addEventListener("notificationclick", e => {
  e.notification.close();
  const url = new URL((e.notification.data && e.notification.data.url) || "/beta/slip.html", self.location.origin).href;
  e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(cs => {
    for (const c of cs) { if (c.url.split("?")[0] === url.split("?")[0] && "focus" in c) return c.focus(); }
    return self.clients.openWindow(url);
  }));
});
