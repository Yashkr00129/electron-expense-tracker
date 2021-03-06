!(function (a) {
  function j(a, b) {
    for (var c = a.length; c--; ) if (a[c] === b) return c;
    return -1;
  }
  function k(a, b) {
    if (a.length != b.length) return !1;
    for (var c = 0; c < a.length; c++) if (a[c] !== b[c]) return !1;
    return !0;
  }
  function m(a) {
    for (b in d) d[b] = a[l[b]];
  }
  function n(a) {
    var b, e, g, h, k, l;
    if (
      ((b = a.keyCode),
      -1 == j(i, b) && i.push(b),
      (93 == b || 224 == b) && (b = 91),
      b in d)
    ) {
      d[b] = !0;
      for (g in f) f[g] == b && (q[g] = !0);
    } else if ((m(a), q.filter.call(this, a) && b in c))
      for (l = w(), h = 0; h < c[b].length; h++)
        if (((e = c[b][h]), e.scope == l || "all" == e.scope)) {
          k = e.mods.length > 0;
          for (g in d)
            ((!d[g] && j(e.mods, +g) > -1) || (d[g] && -1 == j(e.mods, +g))) &&
              (k = !1);
          ((0 != e.mods.length || d[16] || d[18] || d[17] || d[91]) && !k) ||
            (e.method(a, e) === !1 &&
              (a.preventDefault ? a.preventDefault() : (a.returnValue = !1),
              a.stopPropagation && a.stopPropagation(),
              a.cancelBubble && (a.cancelBubble = !0)));
        }
  }
  function o(a) {
    var c,
      b = a.keyCode,
      e = j(i, b);
    if ((e >= 0 && i.splice(e, 1), (93 == b || 224 == b) && (b = 91), b in d)) {
      d[b] = !1;
      for (c in f) f[c] == b && (q[c] = !1);
    }
  }
  function p() {
    for (b in d) d[b] = !1;
    for (b in f) q[b] = !1;
  }
  function q(a, b, d) {
    var e, f;
    (e = y(a)), void 0 === d && ((d = b), (b = "all"));
    for (var g = 0; g < e.length; g++)
      (f = []),
        (a = e[g].split("+")),
        a.length > 1 && ((f = z(a)), (a = [a[a.length - 1]])),
        (a = a[0]),
        (a = h(a)),
        a in c || (c[a] = []),
        c[a].push({ shortcut: e[g], scope: b, method: d, key: e[g], mods: f });
  }
  function r(a, b) {
    var d,
      e,
      g,
      i,
      j,
      f = [];
    for (d = y(a), i = 0; i < d.length; i++) {
      if (
        ((e = d[i].split("+")),
        e.length > 1 && ((f = z(e)), (a = e[e.length - 1])),
        (a = h(a)),
        void 0 === b && (b = w()),
        !c[a])
      )
        return;
      for (g in c[a])
        (j = c[a][g]), j.scope === b && k(j.mods, f) && (c[a][g] = {});
    }
  }
  function s(a) {
    return "string" == typeof a && (a = h(a)), -1 != j(i, a);
  }
  function t() {
    return i.slice(0);
  }
  function u(a) {
    var b = (a.target || a.srcElement).tagName;
    return !("INPUT" == b || "SELECT" == b || "TEXTAREA" == b);
  }
  function v(a) {
    e = a || "all";
  }
  function w() {
    return e || "all";
  }
  function x(a) {
    var b, d, e;
    for (b in c)
      for (d = c[b], e = 0; e < d.length; )
        d[e].scope === a ? d.splice(e, 1) : e++;
  }
  function y(a) {
    var b;
    return (
      (a = a.replace(/\s/g, "")),
      (b = a.split(",")),
      "" == b[b.length - 1] && (b[b.length - 2] += ","),
      b
    );
  }
  function z(a) {
    for (var b = a.slice(0, a.length - 1), c = 0; c < b.length; c++)
      b[c] = f[b[c]];
    return b;
  }
  function A(a, b, c) {
    a.addEventListener
      ? a.addEventListener(b, c, !1)
      : a.attachEvent &&
        a.attachEvent("on" + b, function () {
          c(window.event);
        });
  }
  function C() {
    var b = a.key;
    return (a.key = B), b;
  }
  var b,
    c = {},
    d = { 16: !1, 18: !1, 17: !1, 91: !1 },
    e = "all",
    f = {
      "\u21e7": 16,
      shift: 16,
      "\u2325": 18,
      alt: 18,
      option: 18,
      "\u2303": 17,
      ctrl: 17,
      control: 17,
      "\u2318": 91,
      command: 91,
    },
    g = {
      backspace: 8,
      tab: 9,
      clear: 12,
      enter: 13,
      return: 13,
      esc: 27,
      escape: 27,
      space: 32,
      left: 37,
      up: 38,
      right: 39,
      down: 40,
      del: 46,
      delete: 46,
      home: 36,
      end: 35,
      pageup: 33,
      pagedown: 34,
      ",": 188,
      ".": 190,
      "/": 191,
      "`": 192,
      "-": 189,
      "=": 187,
      ";": 186,
      "'": 222,
      "[": 219,
      "]": 221,
      "\\": 220,
    },
    h = function (a) {
      return g[a] || a.toUpperCase().charCodeAt(0);
    },
    i = [];
  for (b = 1; 20 > b; b++) g["f" + b] = 111 + b;
  var l = { 16: "shiftKey", 18: "altKey", 17: "ctrlKey", 91: "metaKey" };
  for (b in f) q[b] = !1;
  A(document, "keydown", function (a) {
    n(a);
  }),
    A(document, "keyup", o),
    A(window, "focus", p);
  var B = a.key;
  (a.key = q),
    (a.key.setScope = v),
    (a.key.getScope = w),
    (a.key.deleteScope = x),
    (a.key.filter = u),
    (a.key.isPressed = s),
    (a.key.getPressedKeyCodes = t),
    (a.key.noConflict = C),
    (a.key.unbind = r),
    "undefined" != typeof module && (module.exports = key);
})(this);
