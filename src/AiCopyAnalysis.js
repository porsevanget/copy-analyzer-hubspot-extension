var zr = { exports: {} }, Qe = {}, Kr = { exports: {} }, b = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mt;
function Bt() {
  if (mt)
    return b;
  mt = 1;
  var m = Symbol.for("react.element"), d = Symbol.for("react.portal"), ne = Symbol.for("react.fragment"), H = Symbol.for("react.strict_mode"), ae = Symbol.for("react.profiler"), K = Symbol.for("react.provider"), q = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), G = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), U = Symbol.iterator;
  function J(n) {
    return n === null || typeof n != "object" ? null : (n = U && n[U] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var W = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ie = Object.assign, ge = {};
  function ee(n, u, _) {
    this.props = n, this.context = u, this.refs = ge, this.updater = _ || W;
  }
  ee.prototype.isReactComponent = {}, ee.prototype.setState = function(n, u) {
    if (typeof n != "object" && typeof n != "function" && n != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, u, "setState");
  }, ee.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function ce() {
  }
  ce.prototype = ee.prototype;
  function k(n, u, _) {
    this.props = n, this.context = u, this.refs = ge, this.updater = _ || W;
  }
  var pe = k.prototype = new ce();
  pe.constructor = k, ie(pe, ee.prototype), pe.isPureReactComponent = !0;
  var fe = Array.isArray, Y = Object.prototype.hasOwnProperty, oe = { current: null }, ve = { key: !0, ref: !0, __self: !0, __source: !0 };
  function be(n, u, _) {
    var R, S = {}, I = null, j = null;
    if (u != null)
      for (R in u.ref !== void 0 && (j = u.ref), u.key !== void 0 && (I = "" + u.key), u)
        Y.call(u, R) && !ve.hasOwnProperty(R) && (S[R] = u[R]);
    var P = arguments.length - 2;
    if (P === 1)
      S.children = _;
    else if (1 < P) {
      for (var T = Array(P), B = 0; B < P; B++)
        T[B] = arguments[B + 2];
      S.children = T;
    }
    if (n && n.defaultProps)
      for (R in P = n.defaultProps, P)
        S[R] === void 0 && (S[R] = P[R]);
    return { $$typeof: m, type: n, key: I, ref: j, props: S, _owner: oe.current };
  }
  function Pe(n, u) {
    return { $$typeof: m, type: n.type, key: u, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function ke(n) {
    return typeof n == "object" && n !== null && n.$$typeof === m;
  }
  function Ke(n) {
    var u = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(_) {
      return u[_];
    });
  }
  var je = /\/+/g;
  function re(n, u) {
    return typeof n == "object" && n !== null && n.key != null ? Ke("" + n.key) : u.toString(36);
  }
  function ue(n, u, _, R, S) {
    var I = typeof n;
    (I === "undefined" || I === "boolean") && (n = null);
    var j = !1;
    if (n === null)
      j = !0;
    else
      switch (I) {
        case "string":
        case "number":
          j = !0;
          break;
        case "object":
          switch (n.$$typeof) {
            case m:
            case d:
              j = !0;
          }
      }
    if (j)
      return j = n, S = S(j), n = R === "" ? "." + re(j, 0) : R, fe(S) ? (_ = "", n != null && (_ = n.replace(je, "$&/") + "/"), ue(S, u, _, "", function(B) {
        return B;
      })) : S != null && (ke(S) && (S = Pe(S, _ + (!S.key || j && j.key === S.key ? "" : ("" + S.key).replace(je, "$&/") + "/") + n)), u.push(S)), 1;
    if (j = 0, R = R === "" ? "." : R + ":", fe(n))
      for (var P = 0; P < n.length; P++) {
        I = n[P];
        var T = R + re(I, P);
        j += ue(I, u, _, T, S);
      }
    else if (T = J(n), typeof T == "function")
      for (n = T.call(n), P = 0; !(I = n.next()).done; )
        I = I.value, T = R + re(I, P++), j += ue(I, u, _, T, S);
    else if (I === "object")
      throw u = String(n), Error("Objects are not valid as a React child (found: " + (u === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : u) + "). If you meant to render a collection of children, use an array instead.");
    return j;
  }
  function X(n, u, _) {
    if (n == null)
      return n;
    var R = [], S = 0;
    return ue(n, R, "", "", function(I) {
      return u.call(_, I, S++);
    }), R;
  }
  function de(n) {
    if (n._status === -1) {
      var u = n._result;
      u = u(), u.then(function(_) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = _);
      }, function(_) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = _);
      }), n._status === -1 && (n._status = 0, n._result = u);
    }
    if (n._status === 1)
      return n._result.default;
    throw n._result;
  }
  var p = { current: null }, ye = { transition: null }, xe = { ReactCurrentDispatcher: p, ReactCurrentBatchConfig: ye, ReactCurrentOwner: oe };
  function _e() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return b.Children = { map: X, forEach: function(n, u, _) {
    X(n, function() {
      u.apply(this, arguments);
    }, _);
  }, count: function(n) {
    var u = 0;
    return X(n, function() {
      u++;
    }), u;
  }, toArray: function(n) {
    return X(n, function(u) {
      return u;
    }) || [];
  }, only: function(n) {
    if (!ke(n))
      throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, b.Component = ee, b.Fragment = ne, b.Profiler = ae, b.PureComponent = k, b.StrictMode = H, b.Suspense = D, b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xe, b.act = _e, b.cloneElement = function(n, u, _) {
    if (n == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var R = ie({}, n.props), S = n.key, I = n.ref, j = n._owner;
    if (u != null) {
      if (u.ref !== void 0 && (I = u.ref, j = oe.current), u.key !== void 0 && (S = "" + u.key), n.type && n.type.defaultProps)
        var P = n.type.defaultProps;
      for (T in u)
        Y.call(u, T) && !ve.hasOwnProperty(T) && (R[T] = u[T] === void 0 && P !== void 0 ? P[T] : u[T]);
    }
    var T = arguments.length - 2;
    if (T === 1)
      R.children = _;
    else if (1 < T) {
      P = Array(T);
      for (var B = 0; B < T; B++)
        P[B] = arguments[B + 2];
      R.children = P;
    }
    return { $$typeof: m, type: n.type, key: S, ref: I, props: R, _owner: j };
  }, b.createContext = function(n) {
    return n = { $$typeof: q, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: K, _context: n }, n.Consumer = n;
  }, b.createElement = be, b.createFactory = function(n) {
    var u = be.bind(null, n);
    return u.type = n, u;
  }, b.createRef = function() {
    return { current: null };
  }, b.forwardRef = function(n) {
    return { $$typeof: A, render: n };
  }, b.isValidElement = ke, b.lazy = function(n) {
    return { $$typeof: L, _payload: { _status: -1, _result: n }, _init: de };
  }, b.memo = function(n, u) {
    return { $$typeof: G, type: n, compare: u === void 0 ? null : u };
  }, b.startTransition = function(n) {
    var u = ye.transition;
    ye.transition = {};
    try {
      n();
    } finally {
      ye.transition = u;
    }
  }, b.unstable_act = _e, b.useCallback = function(n, u) {
    return p.current.useCallback(n, u);
  }, b.useContext = function(n) {
    return p.current.useContext(n);
  }, b.useDebugValue = function() {
  }, b.useDeferredValue = function(n) {
    return p.current.useDeferredValue(n);
  }, b.useEffect = function(n, u) {
    return p.current.useEffect(n, u);
  }, b.useId = function() {
    return p.current.useId();
  }, b.useImperativeHandle = function(n, u, _) {
    return p.current.useImperativeHandle(n, u, _);
  }, b.useInsertionEffect = function(n, u) {
    return p.current.useInsertionEffect(n, u);
  }, b.useLayoutEffect = function(n, u) {
    return p.current.useLayoutEffect(n, u);
  }, b.useMemo = function(n, u) {
    return p.current.useMemo(n, u);
  }, b.useReducer = function(n, u, _) {
    return p.current.useReducer(n, u, _);
  }, b.useRef = function(n) {
    return p.current.useRef(n);
  }, b.useState = function(n) {
    return p.current.useState(n);
  }, b.useSyncExternalStore = function(n, u, _) {
    return p.current.useSyncExternalStore(n, u, _);
  }, b.useTransition = function() {
    return p.current.useTransition();
  }, b.version = "18.3.1", b;
}
var er = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
er.exports;
var gt;
function zt() {
  return gt || (gt = 1, function(m, d) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var ne = "18.3.1", H = Symbol.for("react.element"), ae = Symbol.for("react.portal"), K = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), D = Symbol.for("react.provider"), G = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), J = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), ie = Symbol.for("react.lazy"), ge = Symbol.for("react.offscreen"), ee = Symbol.iterator, ce = "@@iterator";
      function k(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = ee && e[ee] || e[ce];
        return typeof r == "function" ? r : null;
      }
      var pe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, fe = {
        transition: null
      }, Y = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, oe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ve = {}, be = null;
      function Pe(e) {
        be = e;
      }
      ve.setExtraStackFrame = function(e) {
        be = e;
      }, ve.getCurrentStack = null, ve.getStackAddendum = function() {
        var e = "";
        be && (e += be);
        var r = ve.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var ke = !1, Ke = !1, je = !1, re = !1, ue = !1, X = {
        ReactCurrentDispatcher: pe,
        ReactCurrentBatchConfig: fe,
        ReactCurrentOwner: oe
      };
      X.ReactDebugCurrentFrame = ve, X.ReactCurrentActQueue = Y;
      function de(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          ye("warn", e, a);
        }
      }
      function p(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          ye("error", e, a);
        }
      }
      function ye(e, r, a) {
        {
          var o = X.ReactDebugCurrentFrame, c = o.getStackAddendum();
          c !== "" && (r += "%s", a = a.concat([c]));
          var v = a.map(function(f) {
            return String(f);
          });
          v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
        }
      }
      var xe = {};
      function _e(e, r) {
        {
          var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", c = o + "." + r;
          if (xe[c])
            return;
          p("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, o), xe[c] = !0;
        }
      }
      var n = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, r, a) {
          _e(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, r, a, o) {
          _e(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, r, a, o) {
          _e(e, "setState");
        }
      }, u = Object.assign, _ = {};
      Object.freeze(_);
      function R(e, r, a) {
        this.props = e, this.context = r, this.refs = _, this.updater = a || n;
      }
      R.prototype.isReactComponent = {}, R.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, R.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var S = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, I = function(e, r) {
          Object.defineProperty(R.prototype, e, {
            get: function() {
              de("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var j in S)
          S.hasOwnProperty(j) && I(j, S[j]);
      }
      function P() {
      }
      P.prototype = R.prototype;
      function T(e, r, a) {
        this.props = e, this.context = r, this.refs = _, this.updater = a || n;
      }
      var B = T.prototype = new P();
      B.constructor = T, u(B, R.prototype), B.isPureReactComponent = !0;
      function Er() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var rr = Array.isArray;
      function Ne(e) {
        return rr(e);
      }
      function Rr(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function We(e) {
        try {
          return Ce(e), !1;
        } catch {
          return !0;
        }
      }
      function Ce(e) {
        return "" + e;
      }
      function Ae(e) {
        if (We(e))
          return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rr(e)), Ce(e);
      }
      function tr(e, r, a) {
        var o = e.displayName;
        if (o)
          return o;
        var c = r.displayName || r.name || "";
        return c !== "" ? a + "(" + c + ")" : a;
      }
      function De(e) {
        return e.displayName || "Context";
      }
      function he(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case K:
            return "Fragment";
          case ae:
            return "Portal";
          case A:
            return "Profiler";
          case q:
            return "StrictMode";
          case U:
            return "Suspense";
          case J:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case G:
              var r = e;
              return De(r) + ".Consumer";
            case D:
              var a = e;
              return De(a._context) + ".Provider";
            case L:
              return tr(e, e.render, "ForwardRef");
            case W:
              var o = e.displayName || null;
              return o !== null ? o : he(e.type) || "Memo";
            case ie: {
              var c = e, v = c._payload, f = c._init;
              try {
                return he(f(v));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Ie = Object.prototype.hasOwnProperty, Ve = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, nr, ar, Ue;
      Ue = {};
      function qe(e) {
        if (Ie.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function we(e) {
        if (Ie.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Cr(e, r) {
        var a = function() {
          nr || (nr = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function or(e, r) {
        var a = function() {
          ar || (ar = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function ir(e) {
        if (typeof e.ref == "string" && oe.current && e.__self && oe.current.stateNode !== e.__self) {
          var r = he(oe.current.type);
          Ue[r] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), Ue[r] = !0);
        }
      }
      var Fe = function(e, r, a, o, c, v, f) {
        var h = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: H,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: a,
          props: f,
          // Record the component responsible for creating this element.
          _owner: v
        };
        return h._store = {}, Object.defineProperty(h._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(h, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(h, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: c
        }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
      };
      function wr(e, r, a) {
        var o, c = {}, v = null, f = null, h = null, C = null;
        if (r != null) {
          qe(r) && (f = r.ref, ir(r)), we(r) && (Ae(r.key), v = "" + r.key), h = r.__self === void 0 ? null : r.__self, C = r.__source === void 0 ? null : r.__source;
          for (o in r)
            Ie.call(r, o) && !Ve.hasOwnProperty(o) && (c[o] = r[o]);
        }
        var x = arguments.length - 2;
        if (x === 1)
          c.children = a;
        else if (x > 1) {
          for (var F = Array(x), $ = 0; $ < x; $++)
            F[$] = arguments[$ + 2];
          Object.freeze && Object.freeze(F), c.children = F;
        }
        if (e && e.defaultProps) {
          var N = e.defaultProps;
          for (o in N)
            c[o] === void 0 && (c[o] = N[o]);
        }
        if (v || f) {
          var z = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          v && Cr(c, z), f && or(c, z);
        }
        return Fe(e, v, f, h, C, oe.current, c);
      }
      function Sr(e, r) {
        var a = Fe(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function Tr(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, c = u({}, e.props), v = e.key, f = e.ref, h = e._self, C = e._source, x = e._owner;
        if (r != null) {
          qe(r) && (f = r.ref, x = oe.current), we(r) && (Ae(r.key), v = "" + r.key);
          var F;
          e.type && e.type.defaultProps && (F = e.type.defaultProps);
          for (o in r)
            Ie.call(r, o) && !Ve.hasOwnProperty(o) && (r[o] === void 0 && F !== void 0 ? c[o] = F[o] : c[o] = r[o]);
        }
        var $ = arguments.length - 2;
        if ($ === 1)
          c.children = a;
        else if ($ > 1) {
          for (var N = Array($), z = 0; z < $; z++)
            N[z] = arguments[z + 2];
          c.children = N;
        }
        return Fe(e.type, v, f, h, C, x, c);
      }
      function Se(e) {
        return typeof e == "object" && e !== null && e.$$typeof === H;
      }
      var ur = ".", Or = ":";
      function Pr(e) {
        var r = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(r, function(c) {
          return a[c];
        });
        return "$" + o;
      }
      var Ye = !1, sr = /\/+/g;
      function Ee(e) {
        return e.replace(sr, "$&/");
      }
      function $e(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (Ae(e.key), Pr("" + e.key)) : r.toString(36);
      }
      function Te(e, r, a, o, c) {
        var v = typeof e;
        (v === "undefined" || v === "boolean") && (e = null);
        var f = !1;
        if (e === null)
          f = !0;
        else
          switch (v) {
            case "string":
            case "number":
              f = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case H:
                case ae:
                  f = !0;
              }
          }
        if (f) {
          var h = e, C = c(h), x = o === "" ? ur + $e(h, 0) : o;
          if (Ne(C)) {
            var F = "";
            x != null && (F = Ee(x) + "/"), Te(C, r, F, "", function(Yt) {
              return Yt;
            });
          } else
            C != null && (Se(C) && (C.key && (!h || h.key !== C.key) && Ae(C.key), C = Sr(
              C,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (C.key && (!h || h.key !== C.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Ee("" + C.key) + "/"
              ) : "") + x
            )), r.push(C));
          return 1;
        }
        var $, N, z = 0, Z = o === "" ? ur : o + Or;
        if (Ne(e))
          for (var _r = 0; _r < e.length; _r++)
            $ = e[_r], N = Z + $e($, _r), z += Te($, r, a, N, c);
        else {
          var Yr = k(e);
          if (typeof Yr == "function") {
            var vt = e;
            Yr === vt.entries && (Ye || de("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ye = !0);
            for (var Vt = Yr.call(vt), yt, Ut = 0; !(yt = Vt.next()).done; )
              $ = yt.value, N = Z + $e($, Ut++), z += Te($, r, a, N, c);
          } else if (v === "object") {
            var ht = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (ht === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : ht) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return z;
      }
      function Le(e, r, a) {
        if (e == null)
          return e;
        var o = [], c = 0;
        return Te(e, o, "", "", function(v) {
          return r.call(a, v, c++);
        }), o;
      }
      function kr(e) {
        var r = 0;
        return Le(e, function() {
          r++;
        }), r;
      }
      function cr(e, r, a) {
        Le(e, function() {
          r.apply(this, arguments);
        }, a);
      }
      function jr(e) {
        return Le(e, function(r) {
          return r;
        }) || [];
      }
      function lr(e) {
        if (!Se(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function fr(e) {
        var r = {
          $$typeof: G,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: D,
          _context: r
        };
        var a = !1, o = !1, c = !1;
        {
          var v = {
            $$typeof: G,
            _context: r
          };
          Object.defineProperties(v, {
            Provider: {
              get: function() {
                return o || (o = !0, p("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(f) {
                r.Provider = f;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(f) {
                r._currentValue = f;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(f) {
                r._currentValue2 = f;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(f) {
                r._threadCount = f;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, p("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(f) {
                c || (de("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", f), c = !0);
              }
            }
          }), r.Consumer = v;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var Me = -1, He = 0, Ge = 1, dr = 2;
      function xr(e) {
        if (e._status === Me) {
          var r = e._result, a = r();
          if (a.then(function(v) {
            if (e._status === He || e._status === Me) {
              var f = e;
              f._status = Ge, f._result = v;
            }
          }, function(v) {
            if (e._status === He || e._status === Me) {
              var f = e;
              f._status = dr, f._result = v;
            }
          }), e._status === Me) {
            var o = e;
            o._status = He, o._result = a;
          }
        }
        if (e._status === Ge) {
          var c = e._result;
          return c === void 0 && p(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, c), "default" in c || p(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, c), c.default;
        } else
          throw e._result;
      }
      function Ar(e) {
        var r = {
          // We use these fields to store the result.
          _status: Me,
          _result: e
        }, a = {
          $$typeof: ie,
          _payload: r,
          _init: xr
        };
        {
          var o, c;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(v) {
                p("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = v, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return c;
              },
              set: function(v) {
                p("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), c = v, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function Dr(e) {
        e != null && e.$$typeof === W ? p("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? p("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && p("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && p("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: L,
          render: e
        };
        {
          var a;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(o) {
              a = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return r;
      }
      var pr;
      pr = Symbol.for("react.module.reference");
      function t(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === K || e === A || ue || e === q || e === U || e === J || re || e === ge || ke || Ke || je || typeof e == "object" && e !== null && (e.$$typeof === ie || e.$$typeof === W || e.$$typeof === D || e.$$typeof === G || e.$$typeof === L || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === pr || e.getModuleId !== void 0));
      }
      function i(e, r) {
        t(e) || p("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: W,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var o;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(c) {
              o = c, !e.name && !e.displayName && (e.displayName = c);
            }
          });
        }
        return a;
      }
      function s() {
        var e = pe.current;
        return e === null && p(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function y(e) {
        var r = s();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? p("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && p("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function w(e) {
        var r = s();
        return r.useState(e);
      }
      function O(e, r, a) {
        var o = s();
        return o.useReducer(e, r, a);
      }
      function E(e) {
        var r = s();
        return r.useRef(e);
      }
      function g(e, r) {
        var a = s();
        return a.useEffect(e, r);
      }
      function Q(e, r) {
        var a = s();
        return a.useInsertionEffect(e, r);
      }
      function M(e, r) {
        var a = s();
        return a.useLayoutEffect(e, r);
      }
      function V(e, r) {
        var a = s();
        return a.useCallback(e, r);
      }
      function se(e, r) {
        var a = s();
        return a.useMemo(e, r);
      }
      function Oe(e, r, a) {
        var o = s();
        return o.useImperativeHandle(e, r, a);
      }
      function Re(e, r) {
        {
          var a = s();
          return a.useDebugValue(e, r);
        }
      }
      function te() {
        var e = s();
        return e.useTransition();
      }
      function Je(e) {
        var r = s();
        return r.useDeferredValue(e);
      }
      function Ir() {
        var e = s();
        return e.useId();
      }
      function Fr(e, r, a) {
        var o = s();
        return o.useSyncExternalStore(e, r, a);
      }
      var Xe = 0, qr, Hr, Gr, Jr, Xr, Qr, Zr;
      function et() {
      }
      et.__reactDisabledLog = !0;
      function Ct() {
        {
          if (Xe === 0) {
            qr = console.log, Hr = console.info, Gr = console.warn, Jr = console.error, Xr = console.group, Qr = console.groupCollapsed, Zr = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: et,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          Xe++;
        }
      }
      function wt() {
        {
          if (Xe--, Xe === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: u({}, e, {
                value: qr
              }),
              info: u({}, e, {
                value: Hr
              }),
              warn: u({}, e, {
                value: Gr
              }),
              error: u({}, e, {
                value: Jr
              }),
              group: u({}, e, {
                value: Xr
              }),
              groupCollapsed: u({}, e, {
                value: Qr
              }),
              groupEnd: u({}, e, {
                value: Zr
              })
            });
          }
          Xe < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var $r = X.ReactCurrentDispatcher, Lr;
      function vr(e, r, a) {
        {
          if (Lr === void 0)
            try {
              throw Error();
            } catch (c) {
              var o = c.stack.trim().match(/\n( *(at )?)/);
              Lr = o && o[1] || "";
            }
          return `
` + Lr + e;
        }
      }
      var Mr = !1, yr;
      {
        var St = typeof WeakMap == "function" ? WeakMap : Map;
        yr = new St();
      }
      function rt(e, r) {
        if (!e || Mr)
          return "";
        {
          var a = yr.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        Mr = !0;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var v;
        v = $r.current, $r.current = null, Ct();
        try {
          if (r) {
            var f = function() {
              throw Error();
            };
            if (Object.defineProperty(f.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(f, []);
              } catch (Z) {
                o = Z;
              }
              Reflect.construct(e, [], f);
            } else {
              try {
                f.call();
              } catch (Z) {
                o = Z;
              }
              e.call(f.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Z) {
              o = Z;
            }
            e();
          }
        } catch (Z) {
          if (Z && o && typeof Z.stack == "string") {
            for (var h = Z.stack.split(`
`), C = o.stack.split(`
`), x = h.length - 1, F = C.length - 1; x >= 1 && F >= 0 && h[x] !== C[F]; )
              F--;
            for (; x >= 1 && F >= 0; x--, F--)
              if (h[x] !== C[F]) {
                if (x !== 1 || F !== 1)
                  do
                    if (x--, F--, F < 0 || h[x] !== C[F]) {
                      var $ = `
` + h[x].replace(" at new ", " at ");
                      return e.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", e.displayName)), typeof e == "function" && yr.set(e, $), $;
                    }
                  while (x >= 1 && F >= 0);
                break;
              }
          }
        } finally {
          Mr = !1, $r.current = v, wt(), Error.prepareStackTrace = c;
        }
        var N = e ? e.displayName || e.name : "", z = N ? vr(N) : "";
        return typeof e == "function" && yr.set(e, z), z;
      }
      function Tt(e, r, a) {
        return rt(e, !1);
      }
      function Ot(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function hr(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return rt(e, Ot(e));
        if (typeof e == "string")
          return vr(e);
        switch (e) {
          case U:
            return vr("Suspense");
          case J:
            return vr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case L:
              return Tt(e.render);
            case W:
              return hr(e.type, r, a);
            case ie: {
              var o = e, c = o._payload, v = o._init;
              try {
                return hr(v(c), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var tt = {}, nt = X.ReactDebugCurrentFrame;
      function mr(e) {
        if (e) {
          var r = e._owner, a = hr(e.type, e._source, r ? r.type : null);
          nt.setExtraStackFrame(a);
        } else
          nt.setExtraStackFrame(null);
      }
      function Pt(e, r, a, o, c) {
        {
          var v = Function.call.bind(Ie);
          for (var f in e)
            if (v(e, f)) {
              var h = void 0;
              try {
                if (typeof e[f] != "function") {
                  var C = Error((o || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw C.name = "Invariant Violation", C;
                }
                h = e[f](r, f, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (x) {
                h = x;
              }
              h && !(h instanceof Error) && (mr(c), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, f, typeof h), mr(null)), h instanceof Error && !(h.message in tt) && (tt[h.message] = !0, mr(c), p("Failed %s type: %s", a, h.message), mr(null));
            }
        }
      }
      function Be(e) {
        if (e) {
          var r = e._owner, a = hr(e.type, e._source, r ? r.type : null);
          Pe(a);
        } else
          Pe(null);
      }
      var Nr;
      Nr = !1;
      function at() {
        if (oe.current) {
          var e = he(oe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function kt(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
      function jt(e) {
        return e != null ? kt(e.__source) : "";
      }
      var ot = {};
      function xt(e) {
        var r = at();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
      function it(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = xt(r);
          if (!ot[a]) {
            ot[a] = !0;
            var o = "";
            e && e._owner && e._owner !== oe.current && (o = " It was passed a child from " + he(e._owner.type) + "."), Be(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), Be(null);
          }
        }
      }
      function ut(e, r) {
        if (typeof e == "object") {
          if (Ne(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              Se(o) && it(o, r);
            }
          else if (Se(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var c = k(e);
            if (typeof c == "function" && c !== e.entries)
              for (var v = c.call(e), f; !(f = v.next()).done; )
                Se(f.value) && it(f.value, r);
          }
        }
      }
      function st(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var a;
          if (typeof r == "function")
            a = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === L || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === W))
            a = r.propTypes;
          else
            return;
          if (a) {
            var o = he(r);
            Pt(a, e.props, "prop", o, e);
          } else if (r.PropTypes !== void 0 && !Nr) {
            Nr = !0;
            var c = he(r);
            p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function At(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var o = r[a];
            if (o !== "children" && o !== "key") {
              Be(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), Be(null);
              break;
            }
          }
          e.ref !== null && (Be(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), Be(null));
        }
      }
      function ct(e, r, a) {
        var o = t(e);
        if (!o) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = jt(r);
          v ? c += v : c += at();
          var f;
          e === null ? f = "null" : Ne(e) ? f = "array" : e !== void 0 && e.$$typeof === H ? (f = "<" + (he(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, p("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, c);
        }
        var h = wr.apply(this, arguments);
        if (h == null)
          return h;
        if (o)
          for (var C = 2; C < arguments.length; C++)
            ut(arguments[C], e);
        return e === K ? At(h) : st(h), h;
      }
      var lt = !1;
      function Dt(e) {
        var r = ct.bind(null, e);
        return r.type = e, lt || (lt = !0, de("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return de("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function It(e, r, a) {
        for (var o = Tr.apply(this, arguments), c = 2; c < arguments.length; c++)
          ut(arguments[c], o.type);
        return st(o), o;
      }
      function Ft(e, r) {
        var a = fe.transition;
        fe.transition = {};
        var o = fe.transition;
        fe.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (fe.transition = a, a === null && o._updatedFibers) {
            var c = o._updatedFibers.size;
            c > 10 && de("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var ft = !1, gr = null;
      function $t(e) {
        if (gr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), a = m && m[r];
            gr = a.call(m, "timers").setImmediate;
          } catch {
            gr = function(c) {
              ft === !1 && (ft = !0, typeof MessageChannel > "u" && p("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var v = new MessageChannel();
              v.port1.onmessage = c, v.port2.postMessage(void 0);
            };
          }
        return gr(e);
      }
      var ze = 0, dt = !1;
      function pt(e) {
        {
          var r = ze;
          ze++, Y.current === null && (Y.current = []);
          var a = Y.isBatchingLegacy, o;
          try {
            if (Y.isBatchingLegacy = !0, o = e(), !a && Y.didScheduleLegacyUpdate) {
              var c = Y.current;
              c !== null && (Y.didScheduleLegacyUpdate = !1, Ur(c));
            }
          } catch (N) {
            throw br(r), N;
          } finally {
            Y.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var v = o, f = !1, h = {
              then: function(N, z) {
                f = !0, v.then(function(Z) {
                  br(r), ze === 0 ? Wr(Z, N, z) : N(Z);
                }, function(Z) {
                  br(r), z(Z);
                });
              }
            };
            return !dt && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              f || (dt = !0, p("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), h;
          } else {
            var C = o;
            if (br(r), ze === 0) {
              var x = Y.current;
              x !== null && (Ur(x), Y.current = null);
              var F = {
                then: function(N, z) {
                  Y.current === null ? (Y.current = [], Wr(C, N, z)) : N(C);
                }
              };
              return F;
            } else {
              var $ = {
                then: function(N, z) {
                  N(C);
                }
              };
              return $;
            }
          }
        }
      }
      function br(e) {
        e !== ze - 1 && p("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ze = e;
      }
      function Wr(e, r, a) {
        {
          var o = Y.current;
          if (o !== null)
            try {
              Ur(o), $t(function() {
                o.length === 0 ? (Y.current = null, r(e)) : Wr(e, r, a);
              });
            } catch (c) {
              a(c);
            }
          else
            r(e);
        }
      }
      var Vr = !1;
      function Ur(e) {
        if (!Vr) {
          Vr = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var a = e[r];
              do
                a = a(!0);
              while (a !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(r + 1), o;
          } finally {
            Vr = !1;
          }
        }
      }
      var Lt = ct, Mt = It, Nt = Dt, Wt = {
        map: Le,
        forEach: cr,
        count: kr,
        toArray: jr,
        only: lr
      };
      d.Children = Wt, d.Component = R, d.Fragment = K, d.Profiler = A, d.PureComponent = T, d.StrictMode = q, d.Suspense = U, d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X, d.act = pt, d.cloneElement = Mt, d.createContext = fr, d.createElement = Lt, d.createFactory = Nt, d.createRef = Er, d.forwardRef = Dr, d.isValidElement = Se, d.lazy = Ar, d.memo = i, d.startTransition = Ft, d.unstable_act = pt, d.useCallback = V, d.useContext = y, d.useDebugValue = Re, d.useDeferredValue = Je, d.useEffect = g, d.useId = Ir, d.useImperativeHandle = Oe, d.useInsertionEffect = Q, d.useLayoutEffect = M, d.useMemo = se, d.useReducer = O, d.useRef = E, d.useState = w, d.useSyncExternalStore = Fr, d.useTransition = te, d.version = ne, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(er, er.exports)), er.exports;
}
process.env.NODE_ENV === "production" ? Kr.exports = Bt() : Kr.exports = zt();
var le = Kr.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bt;
function Kt() {
  if (bt)
    return Qe;
  bt = 1;
  var m = le, d = Symbol.for("react.element"), ne = Symbol.for("react.fragment"), H = Object.prototype.hasOwnProperty, ae = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, K = { key: !0, ref: !0, __self: !0, __source: !0 };
  function q(A, D, G) {
    var L, U = {}, J = null, W = null;
    G !== void 0 && (J = "" + G), D.key !== void 0 && (J = "" + D.key), D.ref !== void 0 && (W = D.ref);
    for (L in D)
      H.call(D, L) && !K.hasOwnProperty(L) && (U[L] = D[L]);
    if (A && A.defaultProps)
      for (L in D = A.defaultProps, D)
        U[L] === void 0 && (U[L] = D[L]);
    return { $$typeof: d, type: A, key: J, ref: W, props: U, _owner: ae.current };
  }
  return Qe.Fragment = ne, Qe.jsx = q, Qe.jsxs = q, Qe;
}
var Ze = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _t;
function qt() {
  return _t || (_t = 1, process.env.NODE_ENV !== "production" && function() {
    var m = le, d = Symbol.for("react.element"), ne = Symbol.for("react.portal"), H = Symbol.for("react.fragment"), ae = Symbol.for("react.strict_mode"), K = Symbol.for("react.profiler"), q = Symbol.for("react.provider"), A = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), G = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), ie = Symbol.iterator, ge = "@@iterator";
    function ee(t) {
      if (t === null || typeof t != "object")
        return null;
      var i = ie && t[ie] || t[ge];
      return typeof i == "function" ? i : null;
    }
    var ce = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(t) {
      {
        for (var i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), y = 1; y < i; y++)
          s[y - 1] = arguments[y];
        pe("error", t, s);
      }
    }
    function pe(t, i, s) {
      {
        var y = ce.ReactDebugCurrentFrame, w = y.getStackAddendum();
        w !== "" && (i += "%s", s = s.concat([w]));
        var O = s.map(function(E) {
          return String(E);
        });
        O.unshift("Warning: " + i), Function.prototype.apply.call(console[t], console, O);
      }
    }
    var fe = !1, Y = !1, oe = !1, ve = !1, be = !1, Pe;
    Pe = Symbol.for("react.module.reference");
    function ke(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === H || t === K || be || t === ae || t === G || t === L || ve || t === W || fe || Y || oe || typeof t == "object" && t !== null && (t.$$typeof === J || t.$$typeof === U || t.$$typeof === q || t.$$typeof === A || t.$$typeof === D || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === Pe || t.getModuleId !== void 0));
    }
    function Ke(t, i, s) {
      var y = t.displayName;
      if (y)
        return y;
      var w = i.displayName || i.name || "";
      return w !== "" ? s + "(" + w + ")" : s;
    }
    function je(t) {
      return t.displayName || "Context";
    }
    function re(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case H:
          return "Fragment";
        case ne:
          return "Portal";
        case K:
          return "Profiler";
        case ae:
          return "StrictMode";
        case G:
          return "Suspense";
        case L:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case A:
            var i = t;
            return je(i) + ".Consumer";
          case q:
            var s = t;
            return je(s._context) + ".Provider";
          case D:
            return Ke(t, t.render, "ForwardRef");
          case U:
            var y = t.displayName || null;
            return y !== null ? y : re(t.type) || "Memo";
          case J: {
            var w = t, O = w._payload, E = w._init;
            try {
              return re(E(O));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ue = Object.assign, X = 0, de, p, ye, xe, _e, n, u;
    function _() {
    }
    _.__reactDisabledLog = !0;
    function R() {
      {
        if (X === 0) {
          de = console.log, p = console.info, ye = console.warn, xe = console.error, _e = console.group, n = console.groupCollapsed, u = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: _,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        X++;
      }
    }
    function S() {
      {
        if (X--, X === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ue({}, t, {
              value: de
            }),
            info: ue({}, t, {
              value: p
            }),
            warn: ue({}, t, {
              value: ye
            }),
            error: ue({}, t, {
              value: xe
            }),
            group: ue({}, t, {
              value: _e
            }),
            groupCollapsed: ue({}, t, {
              value: n
            }),
            groupEnd: ue({}, t, {
              value: u
            })
          });
        }
        X < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var I = ce.ReactCurrentDispatcher, j;
    function P(t, i, s) {
      {
        if (j === void 0)
          try {
            throw Error();
          } catch (w) {
            var y = w.stack.trim().match(/\n( *(at )?)/);
            j = y && y[1] || "";
          }
        return `
` + j + t;
      }
    }
    var T = !1, B;
    {
      var Er = typeof WeakMap == "function" ? WeakMap : Map;
      B = new Er();
    }
    function rr(t, i) {
      if (!t || T)
        return "";
      {
        var s = B.get(t);
        if (s !== void 0)
          return s;
      }
      var y;
      T = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var O;
      O = I.current, I.current = null, R();
      try {
        if (i) {
          var E = function() {
            throw Error();
          };
          if (Object.defineProperty(E.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(E, []);
            } catch (te) {
              y = te;
            }
            Reflect.construct(t, [], E);
          } else {
            try {
              E.call();
            } catch (te) {
              y = te;
            }
            t.call(E.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (te) {
            y = te;
          }
          t();
        }
      } catch (te) {
        if (te && y && typeof te.stack == "string") {
          for (var g = te.stack.split(`
`), Q = y.stack.split(`
`), M = g.length - 1, V = Q.length - 1; M >= 1 && V >= 0 && g[M] !== Q[V]; )
            V--;
          for (; M >= 1 && V >= 0; M--, V--)
            if (g[M] !== Q[V]) {
              if (M !== 1 || V !== 1)
                do
                  if (M--, V--, V < 0 || g[M] !== Q[V]) {
                    var se = `
` + g[M].replace(" at new ", " at ");
                    return t.displayName && se.includes("<anonymous>") && (se = se.replace("<anonymous>", t.displayName)), typeof t == "function" && B.set(t, se), se;
                  }
                while (M >= 1 && V >= 0);
              break;
            }
        }
      } finally {
        T = !1, I.current = O, S(), Error.prepareStackTrace = w;
      }
      var Oe = t ? t.displayName || t.name : "", Re = Oe ? P(Oe) : "";
      return typeof t == "function" && B.set(t, Re), Re;
    }
    function Ne(t, i, s) {
      return rr(t, !1);
    }
    function Rr(t) {
      var i = t.prototype;
      return !!(i && i.isReactComponent);
    }
    function We(t, i, s) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return rr(t, Rr(t));
      if (typeof t == "string")
        return P(t);
      switch (t) {
        case G:
          return P("Suspense");
        case L:
          return P("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case D:
            return Ne(t.render);
          case U:
            return We(t.type, i, s);
          case J: {
            var y = t, w = y._payload, O = y._init;
            try {
              return We(O(w), i, s);
            } catch {
            }
          }
        }
      return "";
    }
    var Ce = Object.prototype.hasOwnProperty, Ae = {}, tr = ce.ReactDebugCurrentFrame;
    function De(t) {
      if (t) {
        var i = t._owner, s = We(t.type, t._source, i ? i.type : null);
        tr.setExtraStackFrame(s);
      } else
        tr.setExtraStackFrame(null);
    }
    function he(t, i, s, y, w) {
      {
        var O = Function.call.bind(Ce);
        for (var E in t)
          if (O(t, E)) {
            var g = void 0;
            try {
              if (typeof t[E] != "function") {
                var Q = Error((y || "React class") + ": " + s + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Q.name = "Invariant Violation", Q;
              }
              g = t[E](i, E, y, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (M) {
              g = M;
            }
            g && !(g instanceof Error) && (De(w), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", y || "React class", s, E, typeof g), De(null)), g instanceof Error && !(g.message in Ae) && (Ae[g.message] = !0, De(w), k("Failed %s type: %s", s, g.message), De(null));
          }
      }
    }
    var Ie = Array.isArray;
    function Ve(t) {
      return Ie(t);
    }
    function nr(t) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, s = i && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return s;
      }
    }
    function ar(t) {
      try {
        return Ue(t), !1;
      } catch {
        return !0;
      }
    }
    function Ue(t) {
      return "" + t;
    }
    function qe(t) {
      if (ar(t))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(t)), Ue(t);
    }
    var we = ce.ReactCurrentOwner, Cr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, or, ir, Fe;
    Fe = {};
    function wr(t) {
      if (Ce.call(t, "ref")) {
        var i = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Sr(t) {
      if (Ce.call(t, "key")) {
        var i = Object.getOwnPropertyDescriptor(t, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Tr(t, i) {
      if (typeof t.ref == "string" && we.current && i && we.current.stateNode !== i) {
        var s = re(we.current.type);
        Fe[s] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', re(we.current.type), t.ref), Fe[s] = !0);
      }
    }
    function Se(t, i) {
      {
        var s = function() {
          or || (or = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        s.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function ur(t, i) {
      {
        var s = function() {
          ir || (ir = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        s.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var Or = function(t, i, s, y, w, O, E) {
      var g = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: t,
        key: i,
        ref: s,
        props: E,
        // Record the component responsible for creating this element.
        _owner: O
      };
      return g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(g, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.defineProperty(g, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    };
    function Pr(t, i, s, y, w) {
      {
        var O, E = {}, g = null, Q = null;
        s !== void 0 && (qe(s), g = "" + s), Sr(i) && (qe(i.key), g = "" + i.key), wr(i) && (Q = i.ref, Tr(i, w));
        for (O in i)
          Ce.call(i, O) && !Cr.hasOwnProperty(O) && (E[O] = i[O]);
        if (t && t.defaultProps) {
          var M = t.defaultProps;
          for (O in M)
            E[O] === void 0 && (E[O] = M[O]);
        }
        if (g || Q) {
          var V = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          g && Se(E, V), Q && ur(E, V);
        }
        return Or(t, g, Q, w, y, we.current, E);
      }
    }
    var Ye = ce.ReactCurrentOwner, sr = ce.ReactDebugCurrentFrame;
    function Ee(t) {
      if (t) {
        var i = t._owner, s = We(t.type, t._source, i ? i.type : null);
        sr.setExtraStackFrame(s);
      } else
        sr.setExtraStackFrame(null);
    }
    var $e;
    $e = !1;
    function Te(t) {
      return typeof t == "object" && t !== null && t.$$typeof === d;
    }
    function Le() {
      {
        if (Ye.current) {
          var t = re(Ye.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function kr(t) {
      {
        if (t !== void 0) {
          var i = t.fileName.replace(/^.*[\\\/]/, ""), s = t.lineNumber;
          return `

Check your code at ` + i + ":" + s + ".";
        }
        return "";
      }
    }
    var cr = {};
    function jr(t) {
      {
        var i = Le();
        if (!i) {
          var s = typeof t == "string" ? t : t.displayName || t.name;
          s && (i = `

Check the top-level render call using <` + s + ">.");
        }
        return i;
      }
    }
    function lr(t, i) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var s = jr(i);
        if (cr[s])
          return;
        cr[s] = !0;
        var y = "";
        t && t._owner && t._owner !== Ye.current && (y = " It was passed a child from " + re(t._owner.type) + "."), Ee(t), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, y), Ee(null);
      }
    }
    function fr(t, i) {
      {
        if (typeof t != "object")
          return;
        if (Ve(t))
          for (var s = 0; s < t.length; s++) {
            var y = t[s];
            Te(y) && lr(y, i);
          }
        else if (Te(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var w = ee(t);
          if (typeof w == "function" && w !== t.entries)
            for (var O = w.call(t), E; !(E = O.next()).done; )
              Te(E.value) && lr(E.value, i);
        }
      }
    }
    function Me(t) {
      {
        var i = t.type;
        if (i == null || typeof i == "string")
          return;
        var s;
        if (typeof i == "function")
          s = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === D || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === U))
          s = i.propTypes;
        else
          return;
        if (s) {
          var y = re(i);
          he(s, t.props, "prop", y, t);
        } else if (i.PropTypes !== void 0 && !$e) {
          $e = !0;
          var w = re(i);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function He(t) {
      {
        for (var i = Object.keys(t.props), s = 0; s < i.length; s++) {
          var y = i[s];
          if (y !== "children" && y !== "key") {
            Ee(t), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", y), Ee(null);
            break;
          }
        }
        t.ref !== null && (Ee(t), k("Invalid attribute `ref` supplied to `React.Fragment`."), Ee(null));
      }
    }
    var Ge = {};
    function dr(t, i, s, y, w, O) {
      {
        var E = ke(t);
        if (!E) {
          var g = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Q = kr(w);
          Q ? g += Q : g += Le();
          var M;
          t === null ? M = "null" : Ve(t) ? M = "array" : t !== void 0 && t.$$typeof === d ? (M = "<" + (re(t.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : M = typeof t, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", M, g);
        }
        var V = Pr(t, i, s, w, O);
        if (V == null)
          return V;
        if (E) {
          var se = i.children;
          if (se !== void 0)
            if (y)
              if (Ve(se)) {
                for (var Oe = 0; Oe < se.length; Oe++)
                  fr(se[Oe], t);
                Object.freeze && Object.freeze(se);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              fr(se, t);
        }
        if (Ce.call(i, "key")) {
          var Re = re(t), te = Object.keys(i).filter(function(Fr) {
            return Fr !== "key";
          }), Je = te.length > 0 ? "{key: someKey, " + te.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ge[Re + Je]) {
            var Ir = te.length > 0 ? "{" + te.join(": ..., ") + ": ...}" : "{}";
            k(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Je, Re, Ir, Re), Ge[Re + Je] = !0;
          }
        }
        return t === H ? He(V) : Me(V), V;
      }
    }
    function xr(t, i, s) {
      return dr(t, i, s, !0);
    }
    function Ar(t, i, s) {
      return dr(t, i, s, !1);
    }
    var Dr = Ar, pr = xr;
    Ze.Fragment = H, Ze.jsx = Dr, Ze.jsxs = pr;
  }()), Ze;
}
process.env.NODE_ENV === "production" ? zr.exports = Kt() : zr.exports = qt();
var me = zr.exports;
function Ht(m) {
  return self.extend_V2(m);
}
function Gt(m, d) {
  return self.serverless(m, d);
}
function Jt(m, d) {
  return self.hsFetch(m, d);
}
const Xt = {
  extend: Ht,
  serverless: Gt,
  fetch: Jt
}, Qt = 3;
function Zt(m) {
  return m != null && m.kind === Qt;
}
const en = /* @__PURE__ */ le.createContext(null);
function rn() {
  const m = le.useContext(en);
  if (m == null)
    throw new Error("No remote-ui Render instance found in context");
  return m;
}
function l(m, {
  fragmentProps: d
} = {}) {
  if (!d || !d.length)
    return m;
  const ne = tn(m, d);
  return ne.displayName = m, ne;
}
function tn(m, d) {
  const ne = m;
  return /* @__PURE__ */ le.memo(function({
    children: ae = [],
    ...K
  }) {
    const q = le.useRef({}), {
      root: A,
      reconciler: D
    } = rn(), {
      props: G,
      children: L
    } = le.useMemo(() => {
      const U = [], J = {};
      for (const W of Object.keys(K)) {
        const ie = K[W];
        if (d.includes(W) && /* @__PURE__ */ le.isValidElement(ie)) {
          const ge = q.current[W], ee = Zt(ge) ? ge : A.createFragment();
          q.current[W] = ee, Object.assign(ee, {
            createText(...k) {
              return A.createText(...k);
            },
            createComponent(k, ...pe) {
              return A.createComponent(k, ...pe);
            }
          });
          const ce = D.createPortal(ie, ee, null, null);
          U.push(ce), J[W] = ee;
        } else
          J[W] = ie, delete q.current[W];
      }
      return {
        props: J,
        children: [...le.Children.toArray(ae), ...U]
      };
    }, [ae, K, A, D, q]);
    return /* @__PURE__ */ me.jsx(ne, {
      ...G,
      children: L
    });
  });
}
const nn = l("Alert"), an = l("Button", {
  fragmentProps: ["overlay"]
});
l("ButtonRow");
l("Card");
l("DescriptionList");
l("DescriptionListItem");
l("Divider");
l("EmptyState");
l("ErrorState");
l("Form");
l("Heading");
l("Image", {
  fragmentProps: ["overlay"]
});
l("Input");
l("Link", {
  fragmentProps: ["overlay"]
});
l("TextArea");
l("Textarea");
l("LoadingSpinner");
l("ProgressBar");
l("Select");
l("Tag", {
  fragmentProps: ["overlay"]
});
const Br = l("Text");
l("Tile");
l("Stack");
l("ToggleGroup");
l("StatisticsItem");
l("Statistics");
l("StatisticsTrend");
l("Table");
l("TableFooter");
l("TableCell");
l("TableRow");
l("TableBody");
l("TableHeader");
l("TableHead");
l("NumberInput");
l("Box");
l("StepIndicator");
l("Accordion");
l("MultiSelect");
const Et = l("Flex");
l("DateInput");
l("Checkbox");
l("RadioButton");
l("List");
l("Toggle");
l("Dropdown");
l("Panel");
l("PanelFooter");
l("PanelBody");
l("PanelSection");
l("StepperInput");
l("Modal");
l("ModalBody");
l("ModalFooter");
l("Icon");
l("StatusTag");
l("LoadingButton", {
  fragmentProps: ["overlay"]
});
l("BarChart");
l("LineChart");
l("Tabs");
l("Tab");
l("Illustration");
l("Tooltip");
l("SearchInput");
var Rt;
(function(m) {
  m.Success = "SUCCESS", m.Error = "ERROR";
})(Rt || (Rt = {}));
Xt.extend(() => /* @__PURE__ */ me.jsx(on, {}));
const on = () => {
  const [m, d] = le.useState(""), [ne, H] = le.useState(""), [ae, K] = le.useState(""), q = async () => {
    if (K(""), H(""), !m) {
      K("Please enter text to analyze.");
      return;
    }
    try {
      const A = await fetch("https://your-copy-analyzer-app.vercel.app/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: m })
      });
      if (!A.ok) {
        const G = await A.json();
        throw new Error(G.error || "Failed to analyze text.");
      }
      const D = await A.json();
      H(D.analysis);
    } catch (A) {
      K(A.message || "An unknown error occurred.");
    }
  };
  return /* @__PURE__ */ me.jsxs(Et, { direction: "column", gap: "sm", children: [
    /* @__PURE__ */ me.jsx(Br, { children: "Enter your copy below and we'll provide an analysis." }),
    /* @__PURE__ */ me.jsx(
      "textarea",
      {
        value: m,
        onChange: (A) => d(A.target.value),
        placeholder: "Paste your copy here...",
        rows: 5,
        style: { width: "100%", padding: "8px", borderRadius: "3px", border: "1px solid #cbd6e2" }
      }
    ),
    /* @__PURE__ */ me.jsx(an, { onClick: q, variant: "primary", children: "Analyze Copy" }),
    ae && /* @__PURE__ */ me.jsx(nn, { title: "Error", variant: "error", children: ae }),
    ne && /* @__PURE__ */ me.jsxs(Et, { direction: "column", gap: "sm", children: [
      /* @__PURE__ */ me.jsx(Br, { format: { fontWeight: "bold" }, children: "Analysis Result:" }),
      /* @__PURE__ */ me.jsx(Br, { children: ne })
    ] })
  ] });
};
