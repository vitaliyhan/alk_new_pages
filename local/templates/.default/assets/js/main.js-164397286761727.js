!function(t) {
  var e = {};
  function n(r) {
    if (e[r])
      return e[r].exports;
    var o = e[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return t[r].call(o.exports, o, o.exports, n),
      o.l = !0,
      o.exports
  }
  n.m = t,
    n.c = e,
    n.d = function(t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: r
      })
    }
    ,
    n.r = function(t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }),
        Object.defineProperty(t, "__esModule", {
          value: !0
        })
    }
    ,
    n.t = function(t, e) {
      if (1 & e && (t = n(t)),
      8 & e)
        return t;
      if (4 & e && "object" == typeof t && t && t.__esModule)
        return t;
      var r = Object.create(null);
      if (n.r(r),
        Object.defineProperty(r, "default", {
          enumerable: !0,
          value: t
        }),
      2 & e && "string" != typeof t)
        for (var o in t)
          n.d(r, o, function(e) {
            return t[e]
          }
            .bind(null, o));
      return r
    }
    ,
    n.n = function(t) {
      var e = t && t.__esModule ? function() {
          return t.default
        }
        : function() {
          return t
        }
      ;
      return n.d(e, "a", e),
        e
    }
    ,
    n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    n.p = "",
    n(n.s = 98)
}([function(t, e, n) {
  (function(e) {
      var n = function(t) {
        return t && t.Math == Math && t
      };
      t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || function() {
        return this
      }() || Function("return this")()
    }
  ).call(this, n(77))
}
  , function(t, e, n) {
    var r = n(0)
      , o = n(12).f
      , c = n(7)
      , i = n(17)
      , u = n(27)
      , a = n(47)
      , s = n(81);
    t.exports = function(t, e) {
      var n, f, l, p, y, d = t.target, h = t.global, v = t.stat;
      if (n = h ? r : v ? r[d] || u(d, {}) : (r[d] || {}).prototype)
        for (f in e) {
          if (p = e[f],
            l = t.noTargetGet ? (y = o(n, f)) && y.value : n[f],
          !s(h ? f : d + (v ? "." : "#") + f, t.forced) && void 0 !== l) {
            if (typeof p == typeof l)
              continue;
            a(p, l)
          }
          (t.sham || l && l.sham) && c(p, "sham", !0),
            i(n, f, p, t)
        }
    }
  }
  , function(t, e, n) {
    var r = n(13)
      , o = {}.hasOwnProperty;
    t.exports = Object.hasOwn || function(t, e) {
      return o.call(r(t), e)
    }
  }
  , function(t, e) {
    t.exports = function(t) {
      try {
        return !!t()
      } catch (t) {
        return !0
      }
    }
  }
  , function(t, e) {
    t.exports = function(t) {
      return "object" == typeof t ? null !== t : "function" == typeof t
    }
  }
  , function(t, e, n) {
    var r = n(3);
    t.exports = !r((function() {
        return 7 != Object.defineProperty({}, 1, {
          get: function() {
            return 7
          }
        })[1]
      }
    ))
  }
  , function(t, e, n) {
    var r = n(0)
      , o = n(29)
      , c = n(2)
      , i = n(30)
      , u = n(35)
      , a = n(57)
      , s = o("wks")
      , f = r.Symbol
      , l = a ? f : f && f.withoutSetter || i;
    t.exports = function(t) {
      return c(s, t) && (u || "string" == typeof s[t]) || (u && c(f, t) ? s[t] = f[t] : s[t] = l("Symbol." + t)),
        s[t]
    }
  }
  , function(t, e, n) {
    var r = n(5)
      , o = n(8)
      , c = n(16);
    t.exports = r ? function(t, e, n) {
        return o.f(t, e, c(1, n))
      }
      : function(t, e, n) {
        return t[e] = n,
          t
      }
  }
  , function(t, e, n) {
    var r = n(5)
      , o = n(44)
      , c = n(9)
      , i = n(26)
      , u = Object.defineProperty;
    e.f = r ? u : function(t, e, n) {
      if (c(t),
        e = i(e, !0),
        c(n),
        o)
        try {
          return u(t, e, n)
        } catch (t) {}
      if ("get"in n || "set"in n)
        throw TypeError("Accessors not supported");
      return "value"in n && (t[e] = n.value),
        t
    }
  }
  , function(t, e, n) {
    var r = n(4);
    t.exports = function(t) {
      if (!r(t))
        throw TypeError(String(t) + " is not an object");
      return t
    }
  }
  , function(t, e, n) {
    var r = n(43)
      , o = n(25);
    t.exports = function(t) {
      return r(o(t))
    }
  }
  , function(t, e, n) {
    "use strict";
    var r = n(1)
      , o = n(53);
    r({
      target: "Array",
      proto: !0,
      forced: [].forEach != o
    }, {
      forEach: o
    })
  }
  , function(t, e, n) {
    var r = n(5)
      , o = n(42)
      , c = n(16)
      , i = n(10)
      , u = n(26)
      , a = n(2)
      , s = n(44)
      , f = Object.getOwnPropertyDescriptor;
    e.f = r ? f : function(t, e) {
      if (t = i(t),
        e = u(e, !0),
        s)
        try {
          return f(t, e)
        } catch (t) {}
      if (a(t, e))
        return c(!o.f.call(t, e), t[e])
    }
  }
  , function(t, e, n) {
    var r = n(25);
    t.exports = function(t) {
      return Object(r(t))
    }
  }
  , function(t, e, n) {
    var r = n(48)
      , o = n(0)
      , c = function(t) {
      return "function" == typeof t ? t : void 0
    };
    t.exports = function(t, e) {
      return arguments.length < 2 ? c(r[t]) || c(o[t]) : r[t] && r[t][e] || o[t] && o[t][e]
    }
  }
  , function(t, e, n) {
    var r, o = n(9), c = n(87), i = n(33), u = n(21), a = n(88), s = n(45), f = n(19), l = f("IE_PROTO"), p = function() {}, y = function(t) {
      return "<script>" + t + "<\/script>"
    }, d = function() {
      try {
        r = document.domain && new ActiveXObject("htmlfile")
      } catch (t) {}
      var t, e;
      d = r ? function(t) {
        t.write(y("")),
          t.close();
        var e = t.parentWindow.Object;
        return t = null,
          e
      }(r) : ((e = s("iframe")).style.display = "none",
        a.appendChild(e),
        e.src = String("javascript:"),
        (t = e.contentWindow.document).open(),
        t.write(y("document.F=Object")),
        t.close(),
        t.F);
      for (var n = i.length; n--; )
        delete d.prototype[i[n]];
      return d()
    };
    u[l] = !0,
      t.exports = Object.create || function(t, e) {
        var n;
        return null !== t ? (p.prototype = o(t),
          n = new p,
          p.prototype = null,
          n[l] = t) : n = d(),
          void 0 === e ? n : c(n, e)
      }
  }
  , function(t, e) {
    t.exports = function(t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e
      }
    }
  }
  , function(t, e, n) {
    var r = n(0)
      , o = n(7)
      , c = n(2)
      , i = n(27)
      , u = n(46)
      , a = n(18)
      , s = a.get
      , f = a.enforce
      , l = String(String).split("String");
    (t.exports = function(t, e, n, u) {
        var a, s = !!u && !!u.unsafe, p = !!u && !!u.enumerable, y = !!u && !!u.noTargetGet;
        "function" == typeof n && ("string" != typeof e || c(n, "name") || o(n, "name", e),
        (a = f(n)).source || (a.source = l.join("string" == typeof e ? e : ""))),
          t !== r ? (s ? !y && t[e] && (p = !0) : delete t[e],
            p ? t[e] = n : o(t, e, n)) : p ? t[e] = n : i(e, n)
      }
    )(Function.prototype, "toString", (function() {
        return "function" == typeof this && s(this).source || u(this)
      }
    ))
  }
  , function(t, e, n) {
    var r, o, c, i = n(78), u = n(0), a = n(4), s = n(7), f = n(2), l = n(28), p = n(19), y = n(21), d = u.WeakMap;
    if (i || l.state) {
      var h = l.state || (l.state = new d)
        , v = h.get
        , m = h.has
        , g = h.set;
      r = function(t, e) {
        if (m.call(h, t))
          throw new TypeError("Object already initialized");
        return e.facade = t,
          g.call(h, t, e),
          e
      }
        ,
        o = function(t) {
          return v.call(h, t) || {}
        }
        ,
        c = function(t) {
          return m.call(h, t)
        }
    } else {
      var b = p("state");
      y[b] = !0,
        r = function(t, e) {
          if (f(t, b))
            throw new TypeError("Object already initialized");
          return e.facade = t,
            s(t, b, e),
            e
        }
        ,
        o = function(t) {
          return f(t, b) ? t[b] : {}
        }
        ,
        c = function(t) {
          return f(t, b)
        }
    }
    t.exports = {
      set: r,
      get: o,
      has: c,
      enforce: function(t) {
        return c(t) ? o(t) : r(t, {})
      },
      getterFor: function(t) {
        return function(e) {
          var n;
          if (!a(e) || (n = o(e)).type !== t)
            throw TypeError("Incompatible receiver, " + t + " required");
          return n
        }
      }
    }
  }
  , function(t, e, n) {
    var r = n(29)
      , o = n(30)
      , c = r("keys");
    t.exports = function(t) {
      return c[t] || (c[t] = o(t))
    }
  }
  , function(t, e) {
    t.exports = !1
  }
  , function(t, e) {
    t.exports = {}
  }
  , function(t, e, n) {
    var r = n(0)
      , o = n(59)
      , c = n(53)
      , i = n(7);
    for (var u in o) {
      var a = r[u]
        , s = a && a.prototype;
      if (s && s.forEach !== c)
        try {
          i(s, "forEach", c)
        } catch (t) {
          s.forEach = c
        }
    }
  }
  , function(t, e, n) {
    var r = n(2)
      , o = n(13)
      , c = n(19)
      , i = n(63)
      , u = c("IE_PROTO")
      , a = Object.prototype;
    t.exports = i ? Object.getPrototypeOf : function(t) {
      return t = o(t),
        r(t, u) ? t[u] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
    }
  }
  , function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
      return n.call(t).slice(8, -1)
    }
  }
  , function(t, e) {
    t.exports = function(t) {
      if (null == t)
        throw TypeError("Can't call method on " + t);
      return t
    }
  }
  , function(t, e, n) {
    var r = n(4);
    t.exports = function(t, e) {
      if (!r(t))
        return t;
      var n, o;
      if (e && "function" == typeof (n = t.toString) && !r(o = n.call(t)))
        return o;
      if ("function" == typeof (n = t.valueOf) && !r(o = n.call(t)))
        return o;
      if (!e && "function" == typeof (n = t.toString) && !r(o = n.call(t)))
        return o;
      throw TypeError("Can't convert object to primitive value")
    }
  }
  , function(t, e, n) {
    var r = n(0)
      , o = n(7);
    t.exports = function(t, e) {
      try {
        o(r, t, e)
      } catch (n) {
        r[t] = e
      }
      return e
    }
  }
  , function(t, e, n) {
    var r = n(0)
      , o = n(27)
      , c = r["__core-js_shared__"] || o("__core-js_shared__", {});
    t.exports = c
  }
  , function(t, e, n) {
    var r = n(20)
      , o = n(28);
    (t.exports = function(t, e) {
        return o[t] || (o[t] = void 0 !== e ? e : {})
      }
    )("versions", []).push({
      version: "3.14.0",
      mode: r ? "pure" : "global",
      copyright: ""
    })
  }
  , function(t, e) {
    var n = 0
      , r = Math.random();
    t.exports = function(t) {
      return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++n + r).toString(36)
    }
  }
  , function(t, e, n) {
    var r = n(49)
      , o = n(33).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
      return r(t, o)
    }
  }
  , function(t, e) {
    var n = Math.ceil
      , r = Math.floor;
    t.exports = function(t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
    }
  }
  , function(t, e) {
    t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
  }
  , function(t, e) {
    t.exports = function(t) {
      if ("function" != typeof t)
        throw TypeError(String(t) + " is not a function");
      return t
    }
  }
  , function(t, e, n) {
    var r = n(84)
      , o = n(3);
    t.exports = !!Object.getOwnPropertySymbols && !o((function() {
        var t = Symbol();
        return !String(t) || !(Object(t)instanceof Symbol) || !Symbol.sham && r && r < 41
      }
    ))
  }
  , function(t, e, n) {
    var r = n(1)
      , o = n(0)
      , c = n(56)
      , i = [].slice
      , u = function(t) {
      return function(e, n) {
        var r = arguments.length > 2
          , o = r ? i.call(arguments, 2) : void 0;
        return t(r ? function() {
            ("function" == typeof e ? e : Function(e)).apply(this, o)
          }
          : e, n)
      }
    };
    r({
      global: !0,
      bind: !0,
      forced: /MSIE .\./.test(c)
    }, {
      setTimeout: u(o.setTimeout),
      setInterval: u(o.setInterval)
    })
  }
  , function(t, e, n) {
    var r = n(1)
      , o = n(5);
    r({
      target: "Object",
      stat: !0,
      forced: !o,
      sham: !o
    }, {
      defineProperty: n(8).f
    })
  }
  , function(t, e, n) {
    var r = n(8).f
      , o = n(2)
      , c = n(6)("toStringTag");
    t.exports = function(t, e, n) {
      t && !o(t = n ? t : t.prototype, c) && r(t, c, {
        configurable: !0,
        value: e
      })
    }
  }
  , function(t, e, n) {
    var r = {};
    r[n(6)("toStringTag")] = "z",
      t.exports = "[object z]" === String(r)
  }
  , function(t, e, n) {
    "use strict";
    var r = n(10)
      , o = n(93)
      , c = n(41)
      , i = n(18)
      , u = n(73)
      , a = i.set
      , s = i.getterFor("Array Iterator");
    t.exports = u(Array, "Array", (function(t, e) {
        a(this, {
          type: "Array Iterator",
          target: r(t),
          index: 0,
          kind: e
        })
      }
    ), (function() {
        var t = s(this)
          , e = t.target
          , n = t.kind
          , r = t.index++;
        return !e || r >= e.length ? (t.target = void 0,
          {
            value: void 0,
            done: !0
          }) : "keys" == n ? {
          value: r,
          done: !1
        } : "values" == n ? {
          value: e[r],
          done: !1
        } : {
          value: [r, e[r]],
          done: !1
        }
      }
    ), "values"),
      c.Arguments = c.Array,
      o("keys"),
      o("values"),
      o("entries")
  }
  , function(t, e) {
    t.exports = {}
  }
  , function(t, e, n) {
    "use strict";
    var r = {}.propertyIsEnumerable
      , o = Object.getOwnPropertyDescriptor
      , c = o && !r.call({
      1: 2
    }, 1);
    e.f = c ? function(t) {
        var e = o(this, t);
        return !!e && e.enumerable
      }
      : r
  }
  , function(t, e, n) {
    var r = n(3)
      , o = n(24)
      , c = "".split;
    t.exports = r((function() {
        return !Object("z").propertyIsEnumerable(0)
      }
    )) ? function(t) {
        return "String" == o(t) ? c.call(t, "") : Object(t)
      }
      : Object
  }
  , function(t, e, n) {
    var r = n(5)
      , o = n(3)
      , c = n(45);
    t.exports = !r && !o((function() {
        return 7 != Object.defineProperty(c("div"), "a", {
          get: function() {
            return 7
          }
        }).a
      }
    ))
  }
  , function(t, e, n) {
    var r = n(0)
      , o = n(4)
      , c = r.document
      , i = o(c) && o(c.createElement);
    t.exports = function(t) {
      return i ? c.createElement(t) : {}
    }
  }
  , function(t, e, n) {
    var r = n(28)
      , o = Function.toString;
    "function" != typeof r.inspectSource && (r.inspectSource = function(t) {
        return o.call(t)
      }
    ),
      t.exports = r.inspectSource
  }
  , function(t, e, n) {
    var r = n(2)
      , o = n(79)
      , c = n(12)
      , i = n(8);
    t.exports = function(t, e) {
      for (var n = o(e), u = i.f, a = c.f, s = 0; s < n.length; s++) {
        var f = n[s];
        r(t, f) || u(t, f, a(e, f))
      }
    }
  }
  , function(t, e, n) {
    var r = n(0);
    t.exports = r
  }
  , function(t, e, n) {
    var r = n(2)
      , o = n(10)
      , c = n(50).indexOf
      , i = n(21);
    t.exports = function(t, e) {
      var n, u = o(t), a = 0, s = [];
      for (n in u)
        !r(i, n) && r(u, n) && s.push(n);
      for (; e.length > a; )
        r(u, n = e[a++]) && (~c(s, n) || s.push(n));
      return s
    }
  }
  , function(t, e, n) {
    var r = n(10)
      , o = n(51)
      , c = n(80)
      , i = function(t) {
      return function(e, n, i) {
        var u, a = r(e), s = o(a.length), f = c(i, s);
        if (t && n != n) {
          for (; s > f; )
            if ((u = a[f++]) != u)
              return !0
        } else
          for (; s > f; f++)
            if ((t || f in a) && a[f] === n)
              return t || f || 0;
        return !t && -1
      }
    };
    t.exports = {
      includes: i(!0),
      indexOf: i(!1)
    }
  }
  , function(t, e, n) {
    var r = n(32)
      , o = Math.min;
    t.exports = function(t) {
      return t > 0 ? o(r(t), 9007199254740991) : 0
    }
  }
  , function(t, e) {
    e.f = Object.getOwnPropertySymbols
  }
  , function(t, e, n) {
    "use strict";
    var r = n(54).forEach
      , o = n(58)("forEach");
    t.exports = o ? [].forEach : function(t) {
      return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
  }
  , function(t, e, n) {
    var r = n(82)
      , o = n(43)
      , c = n(13)
      , i = n(51)
      , u = n(83)
      , a = [].push
      , s = function(t) {
      var e = 1 == t
        , n = 2 == t
        , s = 3 == t
        , f = 4 == t
        , l = 6 == t
        , p = 7 == t
        , y = 5 == t || l;
      return function(d, h, v, m) {
        for (var g, b, S = c(d), O = o(S), w = r(h, v, 3), x = i(O.length), j = 0, _ = m || u, E = e ? _(d, x) : n || p ? _(d, 0) : void 0; x > j; j++)
          if ((y || j in O) && (b = w(g = O[j], j, S),
            t))
            if (e)
              E[j] = b;
            else if (b)
              switch (t) {
                case 3:
                  return !0;
                case 5:
                  return g;
                case 6:
                  return j;
                case 2:
                  a.call(E, g)
              }
            else
              switch (t) {
                case 4:
                  return !1;
                case 7:
                  a.call(E, g)
              }
        return l ? -1 : s || f ? f : E
      }
    };
    t.exports = {
      forEach: s(0),
      map: s(1),
      filter: s(2),
      some: s(3),
      every: s(4),
      find: s(5),
      findIndex: s(6),
      filterOut: s(7)
    }
  }
  , function(t, e, n) {
    var r = n(24);
    t.exports = Array.isArray || function(t) {
      return "Array" == r(t)
    }
  }
  , function(t, e, n) {
    var r = n(14);
    t.exports = r("navigator", "userAgent") || ""
  }
  , function(t, e, n) {
    var r = n(35);
    t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
  }
  , function(t, e, n) {
    "use strict";
    var r = n(3);
    t.exports = function(t, e) {
      var n = [][t];
      return !!n && r((function() {
          n.call(null, e || function() {
            throw 1
          }
            , 1)
        }
      ))
    }
  }
  , function(t, e) {
    t.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
    }
  }
  , function(t, e, n) {
    n(1)({
      target: "Object",
      stat: !0
    }, {
      setPrototypeOf: n(61)
    })
  }
  , function(t, e, n) {
    var r = n(9)
      , o = n(86);
    t.exports = Object.setPrototypeOf || ("__proto__"in {} ? function() {
      var t, e = !1, n = {};
      try {
        (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []),
          e = n instanceof Array
      } catch (t) {}
      return function(n, c) {
        return r(n),
          o(c),
          e ? t.call(n, c) : n.__proto__ = c,
          n
      }
    }() : void 0)
  }
  , function(t, e, n) {
    var r = n(1)
      , o = n(3)
      , c = n(13)
      , i = n(23)
      , u = n(63);
    r({
      target: "Object",
      stat: !0,
      forced: o((function() {
          i(1)
        }
      )),
      sham: !u
    }, {
      getPrototypeOf: function(t) {
        return i(c(t))
      }
    })
  }
  , function(t, e, n) {
    var r = n(3);
    t.exports = !r((function() {
        function t() {}
        return t.prototype.constructor = null,
        Object.getPrototypeOf(new t) !== t.prototype
      }
    ))
  }
  , function(t, e, n) {
    var r = n(1)
      , o = n(14)
      , c = n(34)
      , i = n(9)
      , u = n(4)
      , a = n(15)
      , s = n(89)
      , f = n(3)
      , l = o("Reflect", "construct")
      , p = f((function() {
        function t() {}
        return !(l((function() {}
        ), [], t)instanceof t)
      }
    ))
      , y = !f((function() {
        l((function() {}
        ))
      }
    ))
      , d = p || y;
    r({
      target: "Reflect",
      stat: !0,
      forced: d,
      sham: d
    }, {
      construct: function(t, e) {
        c(t),
          i(e);
        var n = arguments.length < 3 ? t : c(arguments[2]);
        if (y && !p)
          return l(t, e, n);
        if (t == n) {
          switch (e.length) {
            case 0:
              return new t;
            case 1:
              return new t(e[0]);
            case 2:
              return new t(e[0],e[1]);
            case 3:
              return new t(e[0],e[1],e[2]);
            case 4:
              return new t(e[0],e[1],e[2],e[3])
          }
          var r = [null];
          return r.push.apply(r, e),
            new (s.apply(t, r))
        }
        var o = n.prototype
          , f = a(u(o) ? o : Object.prototype)
          , d = Function.apply.call(t, f, e);
        return u(d) ? d : f
      }
    })
  }
  , function(t, e, n) {
    var r = n(49)
      , o = n(33);
    t.exports = Object.keys || function(t) {
      return r(t, o)
    }
  }
  , function(t, e, n) {
    n(1)({
      target: "Object",
      stat: !0,
      sham: !n(5)
    }, {
      create: n(15)
    })
  }
  , function(t, e, n) {
    "use strict";
    var r = n(1)
      , o = n(0)
      , c = n(14)
      , i = n(20)
      , u = n(5)
      , a = n(35)
      , s = n(57)
      , f = n(3)
      , l = n(2)
      , p = n(55)
      , y = n(4)
      , d = n(9)
      , h = n(13)
      , v = n(10)
      , m = n(26)
      , g = n(16)
      , b = n(15)
      , S = n(65)
      , O = n(31)
      , w = n(90)
      , x = n(52)
      , j = n(12)
      , _ = n(8)
      , E = n(42)
      , L = n(7)
      , P = n(17)
      , T = n(29)
      , k = n(19)
      , A = n(21)
      , M = n(30)
      , R = n(6)
      , q = n(68)
      , I = n(69)
      , C = n(38)
      , F = n(18)
      , B = n(54).forEach
      , D = k("hidden")
      , N = R("toPrimitive")
      , Y = F.set
      , G = F.getterFor("Symbol")
      , W = Object.prototype
      , z = o.Symbol
      , V = c("JSON", "stringify")
      , H = j.f
      , U = _.f
      , J = w.f
      , $ = E.f
      , K = T("symbols")
      , Q = T("op-symbols")
      , X = T("string-to-symbol-registry")
      , Z = T("symbol-to-string-registry")
      , tt = T("wks")
      , et = o.QObject
      , nt = !et || !et.prototype || !et.prototype.findChild
      , rt = u && f((function() {
        return 7 != b(U({}, "a", {
          get: function() {
            return U(this, "a", {
              value: 7
            }).a
          }
        })).a
      }
    )) ? function(t, e, n) {
        var r = H(W, e);
        r && delete W[e],
          U(t, e, n),
        r && t !== W && U(W, e, r)
      }
      : U
      , ot = function(t, e) {
      var n = K[t] = b(z.prototype);
      return Y(n, {
        type: "Symbol",
        tag: t,
        description: e
      }),
      u || (n.description = e),
        n
    }
      , ct = s ? function(t) {
        return "symbol" == typeof t
      }
      : function(t) {
        return Object(t)instanceof z
      }
      , it = function(t, e, n) {
      t === W && it(Q, e, n),
        d(t);
      var r = m(e, !0);
      return d(n),
        l(K, r) ? (n.enumerable ? (l(t, D) && t[D][r] && (t[D][r] = !1),
          n = b(n, {
            enumerable: g(0, !1)
          })) : (l(t, D) || U(t, D, g(1, {})),
          t[D][r] = !0),
          rt(t, r, n)) : U(t, r, n)
    }
      , ut = function(t, e) {
      d(t);
      var n = v(e)
        , r = S(n).concat(lt(n));
      return B(r, (function(e) {
          u && !at.call(n, e) || it(t, e, n[e])
        }
      )),
        t
    }
      , at = function(t) {
      var e = m(t, !0)
        , n = $.call(this, e);
      return !(this === W && l(K, e) && !l(Q, e)) && (!(n || !l(this, e) || !l(K, e) || l(this, D) && this[D][e]) || n)
    }
      , st = function(t, e) {
      var n = v(t)
        , r = m(e, !0);
      if (n !== W || !l(K, r) || l(Q, r)) {
        var o = H(n, r);
        return !o || !l(K, r) || l(n, D) && n[D][r] || (o.enumerable = !0),
          o
      }
    }
      , ft = function(t) {
      var e = J(v(t))
        , n = [];
      return B(e, (function(t) {
          l(K, t) || l(A, t) || n.push(t)
        }
      )),
        n
    }
      , lt = function(t) {
      var e = t === W
        , n = J(e ? Q : v(t))
        , r = [];
      return B(n, (function(t) {
          !l(K, t) || e && !l(W, t) || r.push(K[t])
        }
      )),
        r
    };
    (a || (P((z = function() {
        if (this instanceof z)
          throw TypeError("Symbol is not a constructor");
        var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0
          , e = M(t)
          , n = function(t) {
          this === W && n.call(Q, t),
          l(this, D) && l(this[D], e) && (this[D][e] = !1),
            rt(this, e, g(1, t))
        };
        return u && nt && rt(W, e, {
          configurable: !0,
          set: n
        }),
          ot(e, t)
      }
    ).prototype, "toString", (function() {
        return G(this).tag
      }
    )),
      P(z, "withoutSetter", (function(t) {
          return ot(M(t), t)
        }
      )),
      E.f = at,
      _.f = it,
      j.f = st,
      O.f = w.f = ft,
      x.f = lt,
      q.f = function(t) {
        return ot(R(t), t)
      }
      ,
    u && (U(z.prototype, "description", {
      configurable: !0,
      get: function() {
        return G(this).description
      }
    }),
    i || P(W, "propertyIsEnumerable", at, {
      unsafe: !0
    }))),
      r({
        global: !0,
        wrap: !0,
        forced: !a,
        sham: !a
      }, {
        Symbol: z
      }),
      B(S(tt), (function(t) {
          I(t)
        }
      )),
      r({
        target: "Symbol",
        stat: !0,
        forced: !a
      }, {
        for: function(t) {
          var e = String(t);
          if (l(X, e))
            return X[e];
          var n = z(e);
          return X[e] = n,
            Z[n] = e,
            n
        },
        keyFor: function(t) {
          if (!ct(t))
            throw TypeError(t + " is not a symbol");
          if (l(Z, t))
            return Z[t]
        },
        useSetter: function() {
          nt = !0
        },
        useSimple: function() {
          nt = !1
        }
      }),
      r({
        target: "Object",
        stat: !0,
        forced: !a,
        sham: !u
      }, {
        create: function(t, e) {
          return void 0 === e ? b(t) : ut(b(t), e)
        },
        defineProperty: it,
        defineProperties: ut,
        getOwnPropertyDescriptor: st
      }),
      r({
        target: "Object",
        stat: !0,
        forced: !a
      }, {
        getOwnPropertyNames: ft,
        getOwnPropertySymbols: lt
      }),
      r({
        target: "Object",
        stat: !0,
        forced: f((function() {
            x.f(1)
          }
        ))
      }, {
        getOwnPropertySymbols: function(t) {
          return x.f(h(t))
        }
      }),
      V) && r({
      target: "JSON",
      stat: !0,
      forced: !a || f((function() {
          var t = z();
          return "[null]" != V([t]) || "{}" != V({
            a: t
          }) || "{}" != V(Object(t))
        }
      ))
    }, {
      stringify: function(t, e, n) {
        for (var r, o = [t], c = 1; arguments.length > c; )
          o.push(arguments[c++]);
        if (r = e,
        (y(e) || void 0 !== t) && !ct(t))
          return p(e) || (e = function(t, e) {
              if ("function" == typeof r && (e = r.call(this, t, e)),
                !ct(e))
                return e
            }
          ),
            o[1] = e,
            V.apply(null, o)
      }
    });
    z.prototype[N] || L(z.prototype, N, z.prototype.valueOf),
      C(z, "Symbol"),
      A[D] = !0
  }
  , function(t, e, n) {
    var r = n(6);
    e.f = r
  }
  , function(t, e, n) {
    var r = n(48)
      , o = n(2)
      , c = n(68)
      , i = n(8).f;
    t.exports = function(t) {
      var e = r.Symbol || (r.Symbol = {});
      o(e, t) || i(e, t, {
        value: c.f(t)
      })
    }
  }
  , function(t, e, n) {
    "use strict";
    var r = n(1)
      , o = n(5)
      , c = n(0)
      , i = n(2)
      , u = n(4)
      , a = n(8).f
      , s = n(47)
      , f = c.Symbol;
    if (o && "function" == typeof f && (!("description"in f.prototype) || void 0 !== f().description)) {
      var l = {}
        , p = function() {
        var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0])
          , e = this instanceof p ? new f(t) : void 0 === t ? f() : f(t);
        return "" === t && (l[e] = !0),
          e
      };
      s(p, f);
      var y = p.prototype = f.prototype;
      y.constructor = p;
      var d = y.toString
        , h = "Symbol(test)" == String(f("test"))
        , v = /^Symbol\((.*)\)[^)]+$/;
      a(y, "description", {
        configurable: !0,
        get: function() {
          var t = u(this) ? this.valueOf() : this
            , e = d.call(t);
          if (i(l, t))
            return "";
          var n = h ? e.slice(7, -1) : e.replace(v, "$1");
          return "" === n ? void 0 : n
        }
      }),
        r({
          global: !0,
          forced: !0
        }, {
          Symbol: p
        })
    }
  }
  , function(t, e, n) {
    var r = n(39)
      , o = n(17)
      , c = n(91);
    r || o(Object.prototype, "toString", c, {
      unsafe: !0
    })
  }
  , function(t, e, n) {
    n(69)("iterator")
  }
  , function(t, e, n) {
    "use strict";
    var r = n(1)
      , o = n(94)
      , c = n(23)
      , i = n(61)
      , u = n(38)
      , a = n(7)
      , s = n(17)
      , f = n(6)
      , l = n(20)
      , p = n(41)
      , y = n(74)
      , d = y.IteratorPrototype
      , h = y.BUGGY_SAFARI_ITERATORS
      , v = f("iterator")
      , m = function() {
      return this
    };
    t.exports = function(t, e, n, f, y, g, b) {
      o(n, e, f);
      var S, O, w, x = function(t) {
        if (t === y && P)
          return P;
        if (!h && t in E)
          return E[t];
        switch (t) {
          case "keys":
          case "values":
          case "entries":
            return function() {
              return new n(this,t)
            }
        }
        return function() {
          return new n(this)
        }
      }, j = e + " Iterator", _ = !1, E = t.prototype, L = E[v] || E["@@iterator"] || y && E[y], P = !h && L || x(y), T = "Array" == e && E.entries || L;
      if (T && (S = c(T.call(new t)),
      d !== Object.prototype && S.next && (l || c(S) === d || (i ? i(S, d) : "function" != typeof S[v] && a(S, v, m)),
        u(S, j, !0, !0),
      l && (p[j] = m))),
      "values" == y && L && "values" !== L.name && (_ = !0,
          P = function() {
            return L.call(this)
          }
      ),
      l && !b || E[v] === P || a(E, v, P),
        p[e] = P,
        y)
        if (O = {
          values: x("values"),
          keys: g ? P : x("keys"),
          entries: x("entries")
        },
          b)
          for (w in O)
            (h || _ || !(w in E)) && s(E, w, O[w]);
        else
          r({
            target: e,
            proto: !0,
            forced: h || _
          }, O);
      return O
    }
  }
  , function(t, e, n) {
    "use strict";
    var r, o, c, i = n(3), u = n(23), a = n(7), s = n(2), f = n(6), l = n(20), p = f("iterator"), y = !1;
    [].keys && ("next"in (c = [].keys()) ? (o = u(u(c))) !== Object.prototype && (r = o) : y = !0);
    var d = null == r || i((function() {
        var t = {};
        return r[p].call(t) !== t
      }
    ));
    d && (r = {}),
    l && !d || s(r, p) || a(r, p, (function() {
        return this
      }
    )),
      t.exports = {
        IteratorPrototype: r,
        BUGGY_SAFARI_ITERATORS: y
      }
  }
  , function(t, e, n) {
    "use strict";
    var r = n(95).charAt
      , o = n(18)
      , c = n(73)
      , i = o.set
      , u = o.getterFor("String Iterator");
    c(String, "String", (function(t) {
        i(this, {
          type: "String Iterator",
          string: String(t),
          index: 0
        })
      }
    ), (function() {
        var t, e = u(this), n = e.string, o = e.index;
        return o >= n.length ? {
          value: void 0,
          done: !0
        } : (t = r(n, o),
          e.index += t.length,
          {
            value: t,
            done: !1
          })
      }
    ))
  }
  , function(t, e, n) {
    var r = n(0)
      , o = n(59)
      , c = n(40)
      , i = n(7)
      , u = n(6)
      , a = u("iterator")
      , s = u("toStringTag")
      , f = c.values;
    for (var l in o) {
      var p = r[l]
        , y = p && p.prototype;
      if (y) {
        if (y[a] !== f)
          try {
            i(y, a, f)
          } catch (t) {
            y[a] = f
          }
        if (y[s] || i(y, s, l),
          o[l])
          for (var d in c)
            if (y[d] !== c[d])
              try {
                i(y, d, c[d])
              } catch (t) {
                y[d] = c[d]
              }
      }
    }
  }
  , function(t, e) {
    var n;
    n = function() {
      return this
    }();
    try {
      n = n || new Function("return this")()
    } catch (t) {
      "object" == typeof window && (n = window)
    }
    t.exports = n
  }
  , function(t, e, n) {
    var r = n(0)
      , o = n(46)
      , c = r.WeakMap;
    t.exports = "function" == typeof c && /native code/.test(o(c))
  }
  , function(t, e, n) {
    var r = n(14)
      , o = n(31)
      , c = n(52)
      , i = n(9);
    t.exports = r("Reflect", "ownKeys") || function(t) {
      var e = o.f(i(t))
        , n = c.f;
      return n ? e.concat(n(t)) : e
    }
  }
  , function(t, e, n) {
    var r = n(32)
      , o = Math.max
      , c = Math.min;
    t.exports = function(t, e) {
      var n = r(t);
      return n < 0 ? o(n + e, 0) : c(n, e)
    }
  }
  , function(t, e, n) {
    var r = n(3)
      , o = /#|\.prototype\./
      , c = function(t, e) {
      var n = u[i(t)];
      return n == s || n != a && ("function" == typeof e ? r(e) : !!e)
    }
      , i = c.normalize = function(t) {
      return String(t).replace(o, ".").toLowerCase()
    }
      , u = c.data = {}
      , a = c.NATIVE = "N"
      , s = c.POLYFILL = "P";
    t.exports = c
  }
  , function(t, e, n) {
    var r = n(34);
    t.exports = function(t, e, n) {
      if (r(t),
      void 0 === e)
        return t;
      switch (n) {
        case 0:
          return function() {
            return t.call(e)
          }
            ;
        case 1:
          return function(n) {
            return t.call(e, n)
          }
            ;
        case 2:
          return function(n, r) {
            return t.call(e, n, r)
          }
            ;
        case 3:
          return function(n, r, o) {
            return t.call(e, n, r, o)
          }
      }
      return function() {
        return t.apply(e, arguments)
      }
    }
  }
  , function(t, e, n) {
    var r = n(4)
      , o = n(55)
      , c = n(6)("species");
    t.exports = function(t, e) {
      var n;
      return o(t) && ("function" != typeof (n = t.constructor) || n !== Array && !o(n.prototype) ? r(n) && null === (n = n[c]) && (n = void 0) : n = void 0),
        new (void 0 === n ? Array : n)(0 === e ? 0 : e)
    }
  }
  , function(t, e, n) {
    var r, o, c = n(0), i = n(56), u = c.process, a = u && u.versions, s = a && a.v8;
    s ? o = (r = s.split("."))[0] < 4 ? 1 : r[0] + r[1] : i && (!(r = i.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = i.match(/Chrome\/(\d+)/)) && (o = r[1]),
      t.exports = o && +o
  }
  , function(t, e, n) {
    "use strict";
    var r = n(1)
      , o = n(50).indexOf
      , c = n(58)
      , i = [].indexOf
      , u = !!i && 1 / [1].indexOf(1, -0) < 0
      , a = c("indexOf");
    r({
      target: "Array",
      proto: !0,
      forced: u || !a
    }, {
      indexOf: function(t) {
        return u ? i.apply(this, arguments) || 0 : o(this, t, arguments.length > 1 ? arguments[1] : void 0)
      }
    })
  }
  , function(t, e, n) {
    var r = n(4);
    t.exports = function(t) {
      if (!r(t) && null !== t)
        throw TypeError("Can't set " + String(t) + " as a prototype");
      return t
    }
  }
  , function(t, e, n) {
    var r = n(5)
      , o = n(8)
      , c = n(9)
      , i = n(65);
    t.exports = r ? Object.defineProperties : function(t, e) {
      c(t);
      for (var n, r = i(e), u = r.length, a = 0; u > a; )
        o.f(t, n = r[a++], e[n]);
      return t
    }
  }
  , function(t, e, n) {
    var r = n(14);
    t.exports = r("document", "documentElement")
  }
  , function(t, e, n) {
    "use strict";
    var r = n(34)
      , o = n(4)
      , c = [].slice
      , i = {}
      , u = function(t, e, n) {
      if (!(e in i)) {
        for (var r = [], o = 0; o < e; o++)
          r[o] = "a[" + o + "]";
        i[e] = Function("C,a", "return new C(" + r.join(",") + ")")
      }
      return i[e](t, n)
    };
    t.exports = Function.bind || function(t) {
      var e = r(this)
        , n = c.call(arguments, 1)
        , i = function() {
        var r = n.concat(c.call(arguments));
        return this instanceof i ? u(e, r.length, r) : e.apply(t, r)
      };
      return o(e.prototype) && (i.prototype = e.prototype),
        i
    }
  }
  , function(t, e, n) {
    var r = n(10)
      , o = n(31).f
      , c = {}.toString
      , i = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function(t) {
      return i && "[object Window]" == c.call(t) ? function(t) {
        try {
          return o(t)
        } catch (t) {
          return i.slice()
        }
      }(t) : o(r(t))
    }
  }
  , function(t, e, n) {
    "use strict";
    var r = n(39)
      , o = n(92);
    t.exports = r ? {}.toString : function() {
      return "[object " + o(this) + "]"
    }
  }
  , function(t, e, n) {
    var r = n(39)
      , o = n(24)
      , c = n(6)("toStringTag")
      , i = "Arguments" == o(function() {
      return arguments
    }());
    t.exports = r ? o : function(t) {
      var e, n, r;
      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function(t, e) {
        try {
          return t[e]
        } catch (t) {}
      }(e = Object(t), c)) ? n : i ? o(e) : "Object" == (r = o(e)) && "function" == typeof e.callee ? "Arguments" : r
    }
  }
  , function(t, e, n) {
    var r = n(6)
      , o = n(15)
      , c = n(8)
      , i = r("unscopables")
      , u = Array.prototype;
    null == u[i] && c.f(u, i, {
      configurable: !0,
      value: o(null)
    }),
      t.exports = function(t) {
        u[i][t] = !0
      }
  }
  , function(t, e, n) {
    "use strict";
    var r = n(74).IteratorPrototype
      , o = n(15)
      , c = n(16)
      , i = n(38)
      , u = n(41)
      , a = function() {
      return this
    };
    t.exports = function(t, e, n) {
      var s = e + " Iterator";
      return t.prototype = o(r, {
        next: c(1, n)
      }),
        i(t, s, !1, !0),
        u[s] = a,
        t
    }
  }
  , function(t, e, n) {
    var r = n(32)
      , o = n(25)
      , c = function(t) {
      return function(e, n) {
        var c, i, u = String(o(e)), a = r(n), s = u.length;
        return a < 0 || a >= s ? t ? "" : void 0 : (c = u.charCodeAt(a)) < 55296 || c > 56319 || a + 1 === s || (i = u.charCodeAt(a + 1)) < 56320 || i > 57343 ? t ? u.charAt(a) : c : t ? u.slice(a, a + 2) : i - 56320 + (c - 55296 << 10) + 65536
      }
    };
    t.exports = {
      codeAt: c(!1),
      charAt: c(!0)
    }
  }
  , function(t, e, n) {
    var r = n(1)
      , o = n(4)
      , c = n(9)
      , i = n(2)
      , u = n(12)
      , a = n(23);
    r({
      target: "Reflect",
      stat: !0
    }, {
      get: function t(e, n) {
        var r, s, f = arguments.length < 3 ? e : arguments[2];
        return c(e) === f ? e[n] : (r = u.f(e, n)) ? i(r, "value") ? r.value : void 0 === r.get ? void 0 : r.get.call(f) : o(s = a(e)) ? t(s, n, f) : void 0
      }
    })
  }
  , function(t, e, n) {
    var r = n(1)
      , o = n(3)
      , c = n(10)
      , i = n(12).f
      , u = n(5)
      , a = o((function() {
        i(1)
      }
    ));
    r({
      target: "Object",
      stat: !0,
      forced: !u || a,
      sham: !u
    }, {
      getOwnPropertyDescriptor: function(t, e) {
        return i(c(t), e)
      }
    })
  }
  , function(t, e, n) {
    "use strict";
    n.r(e);
    n(11),
      n(22),
      n(36);
    n(85);
    function r(t, e) {
      if (!(t.length >= e)) {
        var n = Math.floor(Math.random() * e);
        t.indexOf(n) < 0 && t.push(n),
          r(t, e)
      }
    }
    function o(t) {
      try {
        var e = function() {
          r(c, o.length),
            c.forEach((function(t, e) {
                o[t].classList.add("show"),
                  o[t].style.transitionDelay = "".concat(200 * e, "ms")
              }
            ))
        }
          , n = function() {
          c.forEach((function(t) {
              o[t].classList.remove("show")
            }
          ))
        }
          , o = document.querySelectorAll(t)
          , c = [];
        e(),
          setTimeout(n, 7e3),
          setInterval((function() {
              e(),
                setTimeout(n, 7e3)
            }
          ), 14e3)
      } catch (t) {
        // console.log(t)
      }
    }
    function c() {
      try {
        var t, e = function() {
          try {
            r.forEach((function(t) {
                t.classList.remove("show"),
                  t.classList.add("hidden")
              }
            ))
          } catch (t) {
            // console.log(t)
          }
        }, n = document.querySelectorAll(".hiking__title-btn"), r = document.querySelectorAll(".hiking__tooltip");
        n.forEach((function(n, o) {
            n.addEventListener("click", (function() {
                e(),
                  function(t) {
                    try {
                      r[t].classList.remove("hidden"),
                        r[t].classList.add("show")
                    } catch (t) {
                      // console.log(t)
                    }
                  }(o),
                  clearTimeout(t),
                  t = setTimeout(e, 3e3)
              }
            ))
          }
        ))
      } catch (t) {
        // console.log(t)
      }
    }
    n(60),
      n(62),
      n(64),
      n(66),
      n(37),
      n(67),
      n(70),
      n(71),
      n(72),
      n(40),
      n(75),
      n(76);
    function i(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1,
          r.configurable = !0,
        "value"in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r)
      }
    }
    var u = function() {
      function t(e, n, r) {
        !function(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
        }(this, t);
        try {
          this.btnOpen = document.querySelector(e),
            this.btnClose = document.querySelector(n),
            this.modal = document.querySelector(r)
        } catch (t) {
          // console.log(t)
        }
      }
      var e, n, r;
      return e = t,
      (n = [{
        key: "showModal",
        value: function() {
          var t = this;
          try {
            this.btnOpen.addEventListener("click", (function() {
                t.show()
              }
            ))
          } catch (t) {
            // console.log(t)
          }
        }
      }, {
        key: "hiddenModal",
        value: function() {
          var t = this;
          try {
            this.btnClose.addEventListener("click", (function() {
                t.hidden()
              }
            ))
          } catch (t) {
            // console.log(t)
          }
        }
      }, {
        key: "show",
        value: function() {
          try {
            this.modal.classList.remove("hidden"),
              this.modal.classList.add("show"),
              document.body.style.overflow = "hidden"
          } catch (t) {
            // console.log(t)
          }
        }
      }, {
        key: "hidden",
        value: function() {
          try {
            this.modal.classList.remove("show"),
              this.modal.classList.add("hidden"),
              document.body.style.overflow = ""
          } catch (t) {
            // console.log(t)
          }
        }
      }, {
        key: "render",
        value: function() {
          this.showModal(),
            this.hiddenModal()
        }
      }]) && i(e.prototype, n),
      r && i(e, r),
        t
    }();
    function a(t) {
      return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          }
          : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }
      )(t)
    }
    function s(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1,
          r.configurable = !0,
        "value"in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r)
      }
    }
    function f(t, e) {
      return (f = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e,
            t
        }
      )(t, e)
    }
    function l(t) {
      var e = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
          return !1;
        if (Reflect.construct.sham)
          return !1;
        if ("function" == typeof Proxy)
          return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
          ))),
            !0
        } catch (t) {
          return !1
        }
      }();
      return function() {
        var n, r = y(t);
        if (e) {
          var o = y(this).constructor;
          n = Reflect.construct(r, arguments, o)
        } else
          n = r.apply(this, arguments);
        return p(this, n)
      }
    }
    function p(t, e) {
      return !e || "object" !== a(e) && "function" != typeof e ? function(t) {
        if (void 0 === t)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }
    function y(t) {
      return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }
      )(t)
    }
    var d = function(t) {
      !function(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }),
        e && f(t, e)
      }(c, t);
      var e, n, r, o = l(c);
      function c(t, e, n, r) {
        var i;
        return function(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
        }(this, c),
          (i = o.call(this, t, e, n)).banner = document.querySelector(r),
          i
      }
      return e = c,
      (n = [{
        key: "showModal",
        value: function() {
          var t = this;
          try {
            this.btnOpen.addEventListener("click", (function() {
                t.show(),
                  t.banner.style.zIndex = "1"
              }
            ))
          } catch (t) {
            console.log(t)
          }
        }
      }, {
        key: "hiddenModal",
        value: function() {
          var t = this;
          try {
            this.btnClose.addEventListener("click", (function() {
                t.hidden(),
                  t.banner.style.zIndex = ""
              }
            ))
          } catch (t) {
            // console.log(t)
          }
        }
      }, {
        key: "render",
        value: function() {
          this.showModal(),
            this.hiddenModal()
        }
      }]) && s(e.prototype, n),
      r && s(e, r),
        c
    }(u);
    n(96),
      n(97);
    function h(t) {
      return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          }
          : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }
      )(t)
    }
    function v(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1,
          r.configurable = !0,
        "value"in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r)
      }
    }
    function m(t, e, n) {
      return (m = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
          var r = function(t, e) {
            for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = O(t)); )
              ;
            return t
          }(t, e);
          if (r) {
            var o = Object.getOwnPropertyDescriptor(r, e);
            return o.get ? o.get.call(n) : o.value
          }
        }
      )(t, e, n || t)
    }
    function g(t, e) {
      return (g = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e,
            t
        }
      )(t, e)
    }
    function b(t) {
      var e = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
          return !1;
        if (Reflect.construct.sham)
          return !1;
        if ("function" == typeof Proxy)
          return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
          ))),
            !0
        } catch (t) {
          return !1
        }
      }();
      return function() {
        var n, r = O(t);
        if (e) {
          var o = O(this).constructor;
          n = Reflect.construct(r, arguments, o)
        } else
          n = r.apply(this, arguments);
        return S(this, n)
      }
    }
    function S(t, e) {
      return !e || "object" !== h(e) && "function" != typeof e ? function(t) {
        if (void 0 === t)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }
    function O(t) {
      return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }
      )(t)
    }
    var w = function(t) {
      !function(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }),
        e && g(t, e)
      }(c, t);
      var e, n, r, o = b(c);
      function c(t, e, n, r) {
        var i;
        !function(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
        }(this, c);
        try {
          (i = o.call(this, t, e, n)).overlayModal = document.querySelector(r)
        } catch (t) {
          // console.log(t)
        }
        return i
      }
      return e = c,
      (n = [{
        key: "clickOverlay",
        value: function() {
          var t = this;
          try {
            this.overlayModal.addEventListener("click", (function() {
                t.hidden()
              }
            ))
          } catch (t) {
            // console.log(t)
          }
        }
      }, {
        key: "render",
        value: function() {
          m(O(c.prototype), "render", this).call(this),
            this.clickOverlay()
        }
      }]) && v(e.prototype, n),
      r && v(e, r),
        c
    }(u);
    document.addEventListener("DOMContentLoaded", (function() {
        (function() {
          try {
            var t = document.querySelector(".banner__desr");
            // console.log(t);
            if (t !== null) {
              setTimeout((function() {
                  t.classList.add("show")
                }
              ), 1e3),
                setTimeout((function() {
                    t.classList.add("bef", "aft")
                  }
                ), 1500)

            }
          } catch (t) {
            // console.log(t)
          }
        }(),
          function() {
            try {
              var t = {
                choiceWrapper: document.querySelector(".choice__wrapper"),
                cat: document.querySelector("section.causes > .container"),
                causesItem: document.querySelectorAll(".causes__item"),
                diagramBox: document.querySelector(".diagram__box"),
                element: document.querySelector(".puch")
              }
                , e = document.querySelectorAll(".puch")
                , n = [];
              r(n, t.causesItem.length);
              var o = 0
                , c = 0
                , i = 0;
              window.addEventListener("scroll", (function() {
                  try {
                    var r = {
                      choice: document.querySelector(".choice").getBoundingClientRect(),
                      causes: document.querySelector(".causes").getBoundingClientRect(),
                      diagramBox: document.querySelector(".diagram__box").getBoundingClientRect(),
                      hiking: document.querySelector(".hiking").getBoundingClientRect()
                    };
                    if (r.choice.top <= 700 && t.choiceWrapper.classList.add("show"),
                    document.documentElement.clientWidth >= 768) {
                      if (r.causes.top <= 400) {
                        t.cat.classList.add("show"),
                          n.forEach((function(e, n) {
                              t.causesItem[e].classList.add("show"),
                                t.causesItem[e].style.transitionDelay = "".concat(200 * n, "ms")
                            }
                          ));
                        var u = document.documentElement.scrollTop;
                        document.querySelector(".causes").offsetHeight > -r.causes.top && (o > u ? (e[0].style.transform = "translateY(".concat(i += .7, "px) rotate(-10deg)"),
                          e[1].style.transform = "translateY(".concat(i += .7, "px) rotate(20deg)")) : (e[0].style.transform = "translateY(".concat(i -= .7, "px) rotate(-10deg)"),
                          e[1].style.transform = "translateY(".concat(i -= .7, "px) rotate(20deg)"))),
                          o = u
                      }
                    } else if (r.causes.top <= 400) {
                      t.cat.classList.add("show");
                      var a = document.documentElement.scrollTop;
                      document.querySelector(".causes").offsetHeight > -r.causes.top && (o > a ? (e[0].style.transform = "translateY(".concat(i += .7, "px) rotate(-10deg)"),
                        e[1].style.transform = "translateY(".concat(i += .7, "px) rotate(20deg)")) : (e[0].style.transform = "translateY(".concat(i -= .7, "px) rotate(-10deg)"),
                        e[1].style.transform = "translateY(".concat(i -= .7, "px) rotate(20deg)"))),
                        o = a
                    }
                    if (r.hiking.top <= 200) {
                      var s = document.documentElement.scrollTop;
                      document.querySelector(".hiking").offsetHeight > -r.causes.top && (c > s ? (e[2].style.transform = "translateY(20px) rotate(20deg)",
                        e[3].style.transform = "translateY(20px) rotate(-10deg)") : (e[2].style.transform = "translateY(-30px) rotate(20deg)",
                        e[3].style.transform = "translateY(-30px) rotate(-10deg)")),
                        c = s
                    }
                    r.diagramBox.top <= 200 && t.diagramBox.classList.add("show")
                  } catch (t) {
                    // console.log(t)
                  }
                }
              ))
            } catch (t) {
              // console.log(t)
            }
          }(),
          new d("[data-open-menu]","[data-close-menu]","[data-header-modal]",".banner").render(),
          function() {
            try {
              var t = document.querySelectorAll(".header__item")
                , e = document.querySelectorAll(".header__drop");
              !function() {
                try {
                  t.forEach((function(t, n) {
                      t.addEventListener("click", (function() {
                          e[n].classList.toggle("show")
                        }
                      ))
                    }
                  ))
                } catch (t) {
                  // console.log(t)
                }
              }()
            } catch (t) {
              // console.log(t)
            }
          }(),
          o(".circles-grop_choice"),
          o(".circles-grop_banner"),
          o(".circles-grop_banner2"),
          o(".circles-grop_footer"),
          o(".circles-grop_header"),
          o(".circles-grop_static"),
          c(),
          new w(".articles__video-btn",".modal-youtube__btnClose",".modal-youtube",".modal-youtube").render(),
          function() {
            try {
              var t = function(t) {
                try {
                  t > o.length && (c = 1),
                  t < 1 && (c = o.length),
                    o.forEach((function(t) {
                        t.classList.remove("show"),
                          t.classList.add("hidden")
                      }
                    )),
                    o[c - 1].classList.remove("hidden"),
                    o[c - 1].classList.add("show")
                } catch (t) {}
              }
                , e = function(e) {
                try {
                  t(c += e)
                } catch (t) {}
              }
                , n = document.querySelector(".causes__btn-next")
                , r = document.querySelector(".causes__btn-prev")
                , o = document.querySelectorAll(".causes__item")
                , c = 1;
              document.documentElement.clientWidth < 768 && (t(c),
                n.addEventListener("click", (function() {
                    e(1)
                  }
                )),
                r.addEventListener("click", (function() {
                    e(-1)
                  }
                )))
            } catch (t) {}
          }()),
          document.querySelectorAll('[href^="#"]').forEach((function(t) {
              t.addEventListener("click", (function(e) {
                  e.preventDefault();
                  var n = document.documentElement.scrollTop
                    , r = this.hash
                    , o = document.querySelector(r).getBoundingClientRect().top
                    , c = null;
                  requestAnimationFrame((function e(i) {
                      null === c && (c = i);
                      var u = i - c
                        , a = o < 0 ? Math.max(n - u / .3, n + o) : Math.min(n + u / .3, n + o);
                      document.documentElement.clientWidth >= 1023 && "#next" === t.getAttribute("href") ? document.documentElement.scrollTo(0, "".concat(a - 250)) : document.documentElement.scrollTo(0, a),
                        a != n + o ? requestAnimationFrame(e) : location.hash = r
                    }
                  ))
                }
              ))
            }
          ))
      }
    ))
  }
]);
