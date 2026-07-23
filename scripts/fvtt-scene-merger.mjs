//#region node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function e(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var t = {}, n = [], r = () => {}, i = () => !1, a = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), o = (e) => e.startsWith("onUpdate:"), s = Object.assign, c = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, l = Object.prototype.hasOwnProperty, u = (e, t) => l.call(e, t), d = Array.isArray, f = (e) => x(e) === "[object Map]", p = (e) => x(e) === "[object Set]", m = (e) => x(e) === "[object Date]", h = (e) => typeof e == "function", g = (e) => typeof e == "string", _ = (e) => typeof e == "symbol", v = (e) => typeof e == "object" && !!e, y = (e) => (v(e) || h(e)) && h(e.then) && h(e.catch), b = Object.prototype.toString, x = (e) => b.call(e), ee = (e) => x(e).slice(8, -1), S = (e) => x(e) === "[object Object]", C = (e) => g(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, te = /* @__PURE__ */ e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), ne = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, re = /-\w/g, w = ne((e) => e.replace(re, (e) => e.slice(1).toUpperCase())), ie = /\B([A-Z])/g, T = ne((e) => e.replace(ie, "-$1").toLowerCase()), ae = ne((e) => e.charAt(0).toUpperCase() + e.slice(1)), oe = ne((e) => e ? `on${ae(e)}` : ""), E = (e, t) => !Object.is(e, t), se = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, D = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, ce = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, le, ue = () => le ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function de(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = g(r) ? he(r) : de(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	} else if (g(e) || v(e)) return e;
}
var fe = /;(?![^(]*\))/g, pe = /:([^]+)/, me = /\/\*[^]*?\*\//g;
function he(e) {
	let t = {};
	return e.replace(me, "").split(fe).forEach((e) => {
		if (e) {
			let n = e.split(pe);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function O(e) {
	let t = "";
	if (g(e)) t = e;
	else if (d(e)) for (let n = 0; n < e.length; n++) {
		let r = O(e[n]);
		r && (t += r + " ");
	}
	else if (v(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var ge = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", _e = /* @__PURE__ */ e(ge);
ge + "";
function ve(e) {
	return !!e || e === "";
}
function ye(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = be(e[r], t[r]);
	return n;
}
function be(e, t) {
	if (e === t) return !0;
	let n = m(e), r = m(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = _(e), r = _(t), n || r) return e === t;
	if (n = d(e), r = d(t), n || r) return n && r ? ye(e, t) : !1;
	if (n = v(e), r = v(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !be(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
var xe = (e) => !!(e && e.__v_isRef === !0), k = (e) => g(e) ? e : e == null ? "" : d(e) || v(e) && (e.toString === b || !h(e.toString)) ? xe(e) ? k(e.value) : JSON.stringify(e, Se, 2) : String(e), Se = (e, t) => xe(t) ? Se(e, t.value) : f(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Ce(t, r) + " =>"] = n, e), {}) } : p(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Ce(e)) } : _(t) ? Ce(t) : v(t) && !d(t) && !S(t) ? String(t) : t, Ce = (e, t = "") => _(e) ? `Symbol(${e.description ?? t})` : e, A, we = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && A && (A.active ? (this.parent = A, this.index = (A.scopes ||= []).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = !0;
			let e, t;
			if (this.scopes) for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].pause();
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
		}
	}
	resume() {
		if (this._active && this._isPaused) {
			this._isPaused = !1;
			let e, t;
			if (this.scopes) for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].resume();
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].resume();
		}
	}
	run(e) {
		if (this._active) {
			let t = A;
			try {
				return A = this, e();
			} finally {
				A = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = A, A = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (A === this) A = this.prevScope;
			else {
				let e = A;
				for (; e;) {
					if (e.prevScope === this) {
						e.prevScope = this.prevScope;
						break;
					}
					e = e.prevScope;
				}
			}
			this.prevScope = void 0;
		}
	}
	stop(e) {
		if (this._active) {
			this._active = !1;
			let t, n;
			for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
			for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
			if (this.cleanups.length = 0, this.scopes) {
				for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !e) {
				let e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
			}
			this.parent = void 0;
		}
	}
};
function Te(e) {
	return new we(e);
}
function Ee() {
	return A;
}
function De(e, t = !1) {
	A && A.cleanups.push(e);
}
var j, Oe = /* @__PURE__ */ new WeakSet(), ke = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, A && (A.active ? A.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Oe.has(this) && (Oe.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ne(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, Ke(this), Ie(this);
		let e = j, t = He;
		j = this, He = !0;
		try {
			return this.fn();
		} finally {
			Le(this), j = e, He = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Be(e);
			this.deps = this.depsTail = void 0, Ke(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Oe.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Re(this) && this.run();
	}
	get dirty() {
		return Re(this);
	}
}, Ae = 0, je, Me;
function Ne(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = Me, Me = e;
		return;
	}
	e.next = je, je = e;
}
function Pe() {
	Ae++;
}
function Fe() {
	if (--Ae > 0) return;
	if (Me) {
		let e = Me;
		for (Me = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; je;) {
		let t = je;
		for (je = void 0; t;) {
			let n = t.next;
			if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
				t.trigger();
			} catch (t) {
				e ||= t;
			}
			t = n;
		}
	}
	if (e) throw e;
}
function Ie(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Le(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Be(r), Ve(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Re(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (ze(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function ze(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === qe) || (e.globalVersion = qe, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Re(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = j, r = He;
	j = e, He = !0;
	try {
		Ie(e);
		let n = e.fn(e._value);
		(t.version === 0 || E(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		j = n, He = r, Le(e), e.flags &= -3;
	}
}
function Be(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Be(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ve(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var He = !0, Ue = [];
function We() {
	Ue.push(He), He = !1;
}
function Ge() {
	let e = Ue.pop();
	He = e === void 0 ? !0 : e;
}
function Ke(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = j;
		j = void 0;
		try {
			t();
		} finally {
			j = e;
		}
	}
}
var qe = 0, Je = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, Ye = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!j || !He || j === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== j) t = this.activeLink = new Je(j, this), j.deps ? (t.prevDep = j.depsTail, j.depsTail.nextDep = t, j.depsTail = t) : j.deps = j.depsTail = t, Xe(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = j.depsTail, t.nextDep = void 0, j.depsTail.nextDep = t, j.depsTail = t, j.deps === t && (j.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, qe++, this.notify(e);
	}
	notify(e) {
		Pe();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Fe();
		}
	}
};
function Xe(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) Xe(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var Ze = /* @__PURE__ */ new WeakMap(), Qe = /* @__PURE__ */ Symbol(""), $e = /* @__PURE__ */ Symbol(""), et = /* @__PURE__ */ Symbol("");
function M(e, t, n) {
	if (He && j) {
		let t = Ze.get(e);
		t || Ze.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new Ye()), r.map = t, r.key = n), r.track();
	}
}
function tt(e, t, n, r, i, a) {
	let o = Ze.get(e);
	if (!o) {
		qe++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Pe(), t === "clear") o.forEach(s);
	else {
		let i = d(e), a = i && C(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === et || !_(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(et)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(Qe)), f(e) && s(o.get($e)));
				break;
			case "delete":
				i || (s(o.get(Qe)), f(e) && s(o.get($e)));
				break;
			case "set":
				f(e) && s(o.get(Qe));
				break;
		}
	}
	Fe();
}
function nt(e, t) {
	let n = Ze.get(e);
	return n && n.get(t);
}
function rt(e) {
	let t = /* @__PURE__ */ N(e);
	return t === e ? t : (M(t, "iterate", et), /* @__PURE__ */ Ht(e) ? t : t.map(Gt));
}
function it(e) {
	return M(e = /* @__PURE__ */ N(e), "iterate", et), e;
}
function at(e, t) {
	return /* @__PURE__ */ Vt(e) ? Kt(/* @__PURE__ */ Bt(e) ? Gt(t) : t) : Gt(t);
}
var ot = {
	__proto__: null,
	[Symbol.iterator]() {
		return st(this, Symbol.iterator, (e) => at(this, e));
	},
	concat(...e) {
		return rt(this).concat(...e.map((e) => d(e) ? rt(e) : e));
	},
	entries() {
		return st(this, "entries", (e) => (e[1] = at(this, e[1]), e));
	},
	every(e, t) {
		return lt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return lt(this, "filter", e, t, (e) => e.map((e) => at(this, e)), arguments);
	},
	find(e, t) {
		return lt(this, "find", e, t, (e) => at(this, e), arguments);
	},
	findIndex(e, t) {
		return lt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return lt(this, "findLast", e, t, (e) => at(this, e), arguments);
	},
	findLastIndex(e, t) {
		return lt(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return lt(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return dt(this, "includes", e);
	},
	indexOf(...e) {
		return dt(this, "indexOf", e);
	},
	join(e) {
		return rt(this).join(e);
	},
	lastIndexOf(...e) {
		return dt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return lt(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return ft(this, "pop");
	},
	push(...e) {
		return ft(this, "push", e);
	},
	reduce(e, ...t) {
		return ut(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return ut(this, "reduceRight", e, t);
	},
	shift() {
		return ft(this, "shift");
	},
	some(e, t) {
		return lt(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return ft(this, "splice", e);
	},
	toReversed() {
		return rt(this).toReversed();
	},
	toSorted(e) {
		return rt(this).toSorted(e);
	},
	toSpliced(...e) {
		return rt(this).toSpliced(...e);
	},
	unshift(...e) {
		return ft(this, "unshift", e);
	},
	values() {
		return st(this, "values", (e) => at(this, e));
	}
};
function st(e, t, n) {
	let r = it(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ Ht(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var ct = Array.prototype;
function lt(e, t, n, r, i, a) {
	let o = it(e), s = o !== e && !/* @__PURE__ */ Ht(e), c = o[t];
	if (c !== ct[t]) {
		let t = c.apply(e, a);
		return s ? Gt(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, at(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function ut(e, t, n, r) {
	let i = it(e), a = i !== e && !/* @__PURE__ */ Ht(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = at(e, t)), n.call(this, t, at(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? at(e, c) : c;
}
function dt(e, t, n) {
	let r = /* @__PURE__ */ N(e);
	M(r, "iterate", et);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Ut(n[0]) ? (n[0] = /* @__PURE__ */ N(n[0]), r[t](...n)) : i;
}
function ft(e, t, n = []) {
	We(), Pe();
	let r = (/* @__PURE__ */ N(e))[t].apply(e, n);
	return Fe(), Ge(), r;
}
var pt = /* @__PURE__ */ e("__proto__,__v_isRef,__isVue"), mt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_));
function ht(e) {
	_(e) || (e = String(e));
	let t = /* @__PURE__ */ N(this);
	return M(t, "has", e), t.hasOwnProperty(e);
}
var gt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Pt : Nt : i ? Mt : jt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = d(e);
		if (!r) {
			let e;
			if (a && (e = ot[t])) return e;
			if (t === "hasOwnProperty") return ht;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ P(e) ? e : n);
		if ((_(t) ? mt.has(t) : pt(t)) || (r || M(e, "get", t), i)) return o;
		if (/* @__PURE__ */ P(o)) {
			let e = a && C(t) ? o : o.value;
			return r && v(e) ? /* @__PURE__ */ Rt(e) : e;
		}
		return v(o) ? r ? /* @__PURE__ */ Rt(o) : /* @__PURE__ */ It(o) : o;
	}
}, _t = class extends gt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = d(e) && C(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Vt(i);
			if (!/* @__PURE__ */ Ht(n) && !/* @__PURE__ */ Vt(n) && (i = /* @__PURE__ */ N(i), n = /* @__PURE__ */ N(n)), !a && /* @__PURE__ */ P(i) && !/* @__PURE__ */ P(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : u(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ P(e) ? e : r);
		return e === /* @__PURE__ */ N(r) && (o ? E(n, i) && tt(e, "set", t, n, i) : tt(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = u(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && tt(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!_(t) || !mt.has(t)) && M(e, "has", t), n;
	}
	ownKeys(e) {
		return M(e, "iterate", d(e) ? "length" : Qe), Reflect.ownKeys(e);
	}
}, vt = class extends gt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, yt = /* @__PURE__ */ new _t(), bt = /* @__PURE__ */ new vt(), xt = /* @__PURE__ */ new _t(!0), St = (e) => e, Ct = (e) => Reflect.getPrototypeOf(e);
function wt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ N(i), o = f(a), c = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? St : t ? Kt : Gt;
		return !t && M(a, "iterate", l ? $e : Qe), s(Object.create(u), { next() {
			let { value: e, done: t } = u.next();
			return t ? {
				value: e,
				done: t
			} : {
				value: c ? [d(e[0]), d(e[1])] : d(e),
				done: t
			};
		} });
	};
}
function Tt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Et(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ N(r), a = /* @__PURE__ */ N(n);
			e || (E(n, a) && M(i, "get", n), M(i, "get", a));
			let { has: o } = Ct(i), s = t ? St : e ? Kt : Gt;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && M(/* @__PURE__ */ N(t), "iterate", Qe), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ N(n), i = /* @__PURE__ */ N(t);
			return e || (E(t, i) && M(r, "has", t), M(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ N(a), s = t ? St : e ? Kt : Gt;
			return !e && M(o, "iterate", Qe), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return s(n, e ? {
		add: Tt("add"),
		set: Tt("set"),
		delete: Tt("delete"),
		clear: Tt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ N(this), r = Ct(n), i = /* @__PURE__ */ N(e), a = !t && !/* @__PURE__ */ Ht(e) && !/* @__PURE__ */ Vt(e) ? i : e;
			return r.has.call(n, a) || E(e, a) && r.has.call(n, e) || E(i, a) && r.has.call(n, i) || (n.add(a), tt(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ Ht(n) && !/* @__PURE__ */ Vt(n) && (n = /* @__PURE__ */ N(n));
			let r = /* @__PURE__ */ N(this), { has: i, get: a } = Ct(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ N(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? E(n, s) && tt(r, "set", e, n, s) : tt(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ N(this), { has: n, get: r } = Ct(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ N(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && tt(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ N(this), t = e.size !== 0, n = e.clear();
			return t && tt(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = wt(r, e, t);
	}), n;
}
function Dt(e, t) {
	let n = Et(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(u(n, r) && r in t ? n : t, r, i);
}
var Ot = { get: /* @__PURE__ */ Dt(!1, !1) }, kt = { get: /* @__PURE__ */ Dt(!1, !0) }, At = { get: /* @__PURE__ */ Dt(!0, !1) }, jt = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap(), Nt = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ new WeakMap();
function Ft(e) {
	switch (e) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
// @__NO_SIDE_EFFECTS__
function It(e) {
	return /* @__PURE__ */ Vt(e) ? e : zt(e, !1, yt, Ot, jt);
}
// @__NO_SIDE_EFFECTS__
function Lt(e) {
	return zt(e, !1, xt, kt, Mt);
}
// @__NO_SIDE_EFFECTS__
function Rt(e) {
	return zt(e, !0, bt, At, Nt);
}
function zt(e, t, n, r, i) {
	if (!v(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Ft(ee(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Bt(e) {
	return /* @__PURE__ */ Vt(e) ? /* @__PURE__ */ Bt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Vt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ht(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function N(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ N(t) : e;
}
function Wt(e) {
	return !u(e, "__v_skip") && Object.isExtensible(e) && D(e, "__v_skip", !0), e;
}
var Gt = (e) => v(e) ? /* @__PURE__ */ It(e) : e, Kt = (e) => v(e) ? /* @__PURE__ */ Rt(e) : e;
// @__NO_SIDE_EFFECTS__
function P(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function F(e) {
	return Jt(e, !1);
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
	return Jt(e, !0);
}
function Jt(e, t) {
	return /* @__PURE__ */ P(e) ? e : new Yt(e, t);
}
var Yt = class {
	constructor(e, t) {
		this.dep = new Ye(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ N(e), this._value = t ? e : Gt(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Ht(e) || /* @__PURE__ */ Vt(e);
		e = n ? e : /* @__PURE__ */ N(e), E(e, t) && (this._rawValue = e, this._value = n ? e : Gt(e), this.dep.trigger());
	}
};
function I(e) {
	return /* @__PURE__ */ P(e) ? e.value : e;
}
var Xt = {
	get: (e, t, n) => t === "__v_raw" ? e : I(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ P(i) && !/* @__PURE__ */ P(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function Zt(e) {
	return /* @__PURE__ */ Bt(e) ? e : new Proxy(e, Xt);
}
// @__NO_SIDE_EFFECTS__
function Qt(e) {
	let t = d(e) ? Array(e.length) : {};
	for (let n in e) t[n] = en(e, n);
	return t;
}
var $t = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = _(t) ? t : String(t), this._raw = /* @__PURE__ */ N(e);
		let r = !0, i = e;
		if (!d(e) || _(this._key) || !C(this._key)) do
			r = !/* @__PURE__ */ Ut(i) || /* @__PURE__ */ Ht(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = I(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ P(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ P(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return nt(this._raw, this._key);
	}
};
function en(e, t, n) {
	return new $t(e, t, n);
}
var tn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new Ye(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = qe - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && j !== this) return Ne(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return ze(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function nn(e, t, n = !1) {
	let r, i;
	return h(e) ? r = e : (r = e.get, i = e.set), new tn(r, i, n);
}
var rn = {}, an = /* @__PURE__ */ new WeakMap(), on = void 0;
function sn(e, t = !1, n = on) {
	if (n) {
		let t = an.get(n);
		t || an.set(n, t = []), t.push(e);
	}
}
function cn(e, n, i = t) {
	let { immediate: a, deep: o, once: s, scheduler: l, augmentJob: u, call: f } = i, p = (e) => o ? e : /* @__PURE__ */ Ht(e) || o === !1 || o === 0 ? ln(e, 1) : ln(e), m, g, _, v, y = !1, b = !1;
	if (/* @__PURE__ */ P(e) ? (g = () => e.value, y = /* @__PURE__ */ Ht(e)) : /* @__PURE__ */ Bt(e) ? (g = () => p(e), y = !0) : d(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Bt(e) || /* @__PURE__ */ Ht(e)), g = () => e.map((e) => {
		if (/* @__PURE__ */ P(e)) return e.value;
		if (/* @__PURE__ */ Bt(e)) return p(e);
		if (h(e)) return f ? f(e, 2) : e();
	})) : g = h(e) ? n ? f ? () => f(e, 2) : e : () => {
		if (_) {
			We();
			try {
				_();
			} finally {
				Ge();
			}
		}
		let t = on;
		on = m;
		try {
			return f ? f(e, 3, [v]) : e(v);
		} finally {
			on = t;
		}
	} : r, n && o) {
		let e = g, t = o === !0 ? Infinity : o;
		g = () => ln(e(), t);
	}
	let x = Ee(), ee = () => {
		m.stop(), x && x.active && c(x.effects, m);
	};
	if (s && n) {
		let e = n;
		n = (...t) => {
			let n = e(...t);
			return ee(), n;
		};
	}
	let S = b ? Array(e.length).fill(rn) : rn, C = (e) => {
		if (!(!(m.flags & 1) || !m.dirty && !e)) if (n) {
			let t = m.run();
			if (e || o || y || (b ? t.some((e, t) => E(e, S[t])) : E(t, S))) {
				_ && _();
				let e = on;
				on = m;
				try {
					let e = [
						t,
						S === rn ? void 0 : b && S[0] === rn ? [] : S,
						v
					];
					S = t, f ? f(n, 3, e) : n(...e);
				} finally {
					on = e;
				}
			}
		} else m.run();
	};
	return u && u(C), m = new ke(g), m.scheduler = l ? () => l(C, !1) : C, v = (e) => sn(e, !1, m), _ = m.onStop = () => {
		let e = an.get(m);
		if (e) {
			if (f) f(e, 4);
			else for (let t of e) t();
			an.delete(m);
		}
	}, n ? a ? C(!0) : S = m.run() : l ? l(C.bind(null, !0), !0) : m.run(), ee.pause = m.pause.bind(m), ee.resume = m.resume.bind(m), ee.stop = ee, ee;
}
function ln(e, t = Infinity, n) {
	if (t <= 0 || !v(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ P(e)) ln(e.value, t, n);
	else if (d(e)) for (let r = 0; r < e.length; r++) ln(e[r], t, n);
	else if (p(e) || f(e)) e.forEach((e) => {
		ln(e, t, n);
	});
	else if (S(e)) {
		for (let r in e) ln(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && ln(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function un(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		fn(e, t, n);
	}
}
function dn(e, t, n, r) {
	if (h(e)) {
		let i = un(e, t, n, r);
		return i && y(i) && i.catch((e) => {
			fn(e, t, n);
		}), i;
	}
	if (d(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(dn(e[a], t, n, r));
		return i;
	}
}
function fn(e, n, r, i = !0) {
	let a = n ? n.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = n && n.appContext.config || t;
	if (n) {
		let t = n.parent, i = n.proxy, a = `https://vuejs.org/error-reference/#runtime-${r}`;
		for (; t;) {
			let n = t.ec;
			if (n) {
				for (let t = 0; t < n.length; t++) if (n[t](e, i, a) === !1) return;
			}
			t = t.parent;
		}
		if (o) {
			We(), un(o, null, 10, [
				e,
				i,
				a
			]), Ge();
			return;
		}
	}
	pn(e, r, a, i, s);
}
function pn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var L = [], mn = -1, hn = [], gn = null, _n = 0, vn = /* @__PURE__ */ Promise.resolve(), yn = null;
function bn(e) {
	let t = yn || vn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function xn(e) {
	let t = mn + 1, n = L.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = L[r], a = Dn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Sn(e) {
	if (!(e.flags & 1)) {
		let t = Dn(e), n = L[L.length - 1];
		!n || !(e.flags & 2) && t >= Dn(n) ? L.push(e) : L.splice(xn(t), 0, e), e.flags |= 1, Cn();
	}
}
function Cn() {
	yn ||= vn.then(On);
}
function wn(e) {
	d(e) ? hn.push(...e) : gn && e.id === -1 ? gn.splice(_n + 1, 0, e) : e.flags & 1 || (hn.push(e), e.flags |= 1), Cn();
}
function Tn(e, t, n = mn + 1) {
	for (; n < L.length; n++) {
		let t = L[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			L.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function En(e) {
	if (hn.length) {
		let e = [...new Set(hn)].sort((e, t) => Dn(e) - Dn(t));
		if (hn.length = 0, gn) {
			gn.push(...e);
			return;
		}
		for (gn = e, _n = 0; _n < gn.length; _n++) {
			let e = gn[_n];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		gn = null, _n = 0;
	}
}
var Dn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function On(e) {
	try {
		for (mn = 0; mn < L.length; mn++) {
			let e = L[mn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), un(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; mn < L.length; mn++) {
			let e = L[mn];
			e && (e.flags &= -2);
		}
		mn = -1, L.length = 0, En(e), yn = null, (L.length || hn.length) && On(e);
	}
}
var kn = null, An = null;
function jn(e) {
	let t = kn;
	return kn = e, An = e && e.type.__scopeId || null, t;
}
function Mn(e, t = kn, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && zi(-1);
		let i = jn(t), a;
		try {
			a = e(...n);
		} finally {
			jn(i), r._d && zi(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function Nn(e, n) {
	if (kn === null) return e;
	let r = ya(kn), i = e.dirs ||= [];
	for (let e = 0; e < n.length; e++) {
		let [a, o, s, c = t] = n[e];
		a && (h(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && ln(o), i.push({
			dir: a,
			instance: r,
			value: o,
			oldValue: void 0,
			arg: s,
			modifiers: c
		}));
	}
	return e;
}
function Pn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (We(), dn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), Ge());
	}
}
function Fn(e, t) {
	if (K) {
		let n = K.provides, r = K.parent && K.parent.provides;
		r === n && (n = K.provides = Object.create(r)), n[e] = t;
	}
}
function In(e, t, n = !1) {
	let r = ia();
	if (r || Hr) {
		let i = Hr ? Hr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && h(t) ? t.call(r && r.proxy) : t;
	}
}
function Ln() {
	return !!(ia() || Hr);
}
var Rn = /* @__PURE__ */ Symbol.for("v-scx"), zn = () => In(Rn);
function Bn(e, t, n) {
	return Vn(e, t, n);
}
function Vn(e, n, i = t) {
	let { immediate: a, deep: o, flush: c, once: l } = i, u = s({}, i), d = n && a || !n && c !== "post", f;
	if (ua) {
		if (c === "sync") {
			let e = zn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = r, e.resume = r, e.pause = r, e;
		}
	}
	let p = K;
	u.call = (e, t, n) => dn(e, p, t, n);
	let m = !1;
	c === "post" ? u.scheduler = (e) => {
		z(e, p && p.suspense);
	} : c !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : Sn(e);
	}), u.augmentJob = (e) => {
		n && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = cn(e, n, u);
	return ua && (f ? f.push(h) : d && h()), h;
}
function Hn(e, t, n) {
	let r = this.proxy, i = g(e) ? e.includes(".") ? Un(r, e) : () => r[e] : e.bind(r, r), a;
	h(t) ? a = t : (a = t.handler, n = t);
	let o = sa(this), s = Vn(i, a.bind(r), n);
	return o(), s;
}
function Un(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Wn = /* @__PURE__ */ Symbol("_vte"), Gn = (e) => e.__isTeleport, Kn = /* @__PURE__ */ Symbol("_leaveCb");
function qn(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, qn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Jn(e, t) {
	return h(e) ? /* @__PURE__ */ s({ name: e.name }, t, { setup: e }) : e;
}
function Yn(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function Xn(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var Zn = /* @__PURE__ */ new WeakMap();
function Qn(e, n, r, a, o = !1) {
	if (d(e)) {
		e.forEach((e, t) => Qn(e, n && (d(n) ? n[t] : n), r, a, o));
		return;
	}
	if (er(a) && !o) {
		a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && Qn(e, n, r, a.component.subTree);
		return;
	}
	let s = a.shapeFlag & 4 ? ya(a.component) : a.el, l = o ? null : s, { i: f, r: p } = e, m = n && n.r, _ = f.refs === t ? f.refs = {} : f.refs, v = f.setupState, y = /* @__PURE__ */ N(v), b = v === t ? i : (e) => Xn(_, e) ? !1 : u(y, e), x = (e, t) => !(t && Xn(_, t));
	if (m != null && m !== p) {
		if ($n(n), g(m)) _[m] = null, b(m) && (v[m] = null);
		else if (/* @__PURE__ */ P(m)) {
			let e = n;
			x(m, e.k) && (m.value = null), e.k && (_[e.k] = null);
		}
	}
	if (h(p)) un(p, f, 12, [l, _]);
	else {
		let t = g(p), n = /* @__PURE__ */ P(p);
		if (t || n) {
			let i = () => {
				if (e.f) {
					let n = t ? b(p) ? v[p] : _[p] : x(p) || !e.k ? p.value : _[e.k];
					if (o) d(n) && c(n, s);
					else if (d(n)) n.includes(s) || n.push(s);
					else if (t) _[p] = [s], b(p) && (v[p] = _[p]);
					else {
						let t = [s];
						x(p, e.k) && (p.value = t), e.k && (_[e.k] = t);
					}
				} else t ? (_[p] = l, b(p) && (v[p] = l)) : n && (x(p, e.k) && (p.value = l), e.k && (_[e.k] = l));
			};
			if (l) {
				let t = () => {
					i(), Zn.delete(e);
				};
				t.id = -1, Zn.set(e, t), z(t, r);
			} else $n(e), i();
		}
	}
}
function $n(e) {
	let t = Zn.get(e);
	t && (t.flags |= 8, Zn.delete(e));
}
ue().requestIdleCallback, ue().cancelIdleCallback;
var er = (e) => !!e.type.__asyncLoader, tr = (e) => e.type.__isKeepAlive;
function nr(e, t) {
	ir(e, "a", t);
}
function rr(e, t) {
	ir(e, "da", t);
}
function ir(e, t, n = K) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (or(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) tr(e.parent.vnode) && ar(r, t, n, e), e = e.parent;
	}
}
function ar(e, t, n, r) {
	let i = or(t, e, r, !0);
	pr(() => {
		c(r[t], i);
	}, n);
}
function or(e, t, n = K, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			We();
			let i = sa(n), a = dn(t, n, e, r);
			return i(), Ge(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var sr = (e) => (t, n = K) => {
	(!ua || e === "sp") && or(e, (...e) => t(...e), n);
}, cr = sr("bm"), lr = sr("m"), ur = sr("bu"), dr = sr("u"), fr = sr("bum"), pr = sr("um"), mr = sr("sp"), hr = sr("rtg"), gr = sr("rtc");
function _r(e, t = K) {
	or("ec", e, t);
}
var vr = /* @__PURE__ */ Symbol.for("v-ndc");
function yr(e, t, n, r) {
	let i, a = n && n[r], o = d(e);
	if (o || g(e)) {
		let n = o && /* @__PURE__ */ Bt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ Ht(e), s = /* @__PURE__ */ Vt(e), e = it(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? Kt(Gt(e[n])) : Gt(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		i = Array(e);
		for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
	} else if (v(e)) if (e[Symbol.iterator]) i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
	else {
		let n = Object.keys(e);
		i = Array(n.length);
		for (let r = 0, o = n.length; r < o; r++) {
			let o = n[r];
			i[r] = t(e[o], o, r, a && a[r]);
		}
	}
	else i = [];
	return n && (n[r] = i), i;
}
var br = (e) => e ? la(e) ? ya(e) : br(e.parent) : null, xr = /* @__PURE__ */ s(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => br(e.parent),
	$root: (e) => br(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Ar(e),
	$forceUpdate: (e) => e.f ||= () => {
		Sn(e.update);
	},
	$nextTick: (e) => e.n ||= bn.bind(e.proxy),
	$watch: (e) => Hn.bind(e)
}), Sr = (e, n) => e !== t && !e.__isScriptSetup && u(e, n), Cr = {
	get({ _: e }, n) {
		if (n === "__v_skip") return !0;
		let { ctx: r, setupState: i, data: a, props: o, accessCache: s, type: c, appContext: l } = e;
		if (n[0] !== "$") {
			let e = s[n];
			if (e !== void 0) switch (e) {
				case 1: return i[n];
				case 2: return a[n];
				case 4: return r[n];
				case 3: return o[n];
			}
			else if (Sr(i, n)) return s[n] = 1, i[n];
			else if (a !== t && u(a, n)) return s[n] = 2, a[n];
			else if (u(o, n)) return s[n] = 3, o[n];
			else if (r !== t && u(r, n)) return s[n] = 4, r[n];
			else Tr && (s[n] = 0);
		}
		let d = xr[n], f, p;
		if (d) return n === "$attrs" && M(e.attrs, "get", ""), d(e);
		if ((f = c.__cssModules) && (f = f[n])) return f;
		if (r !== t && u(r, n)) return s[n] = 4, r[n];
		if (p = l.config.globalProperties, u(p, n)) return p[n];
	},
	set({ _: e }, n, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return Sr(a, n) ? (a[n] = r, !0) : i !== t && u(i, n) ? (i[n] = r, !0) : u(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (o[n] = r, !0);
	},
	has({ _: { data: e, setupState: n, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== t && c[0] !== "$" && u(e, c) || Sr(n, c) || u(o, c) || u(i, c) || u(xr, c) || u(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? u(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function wr(e) {
	return d(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Tr = !0;
function Er(e) {
	let t = Ar(e), n = e.proxy, i = e.ctx;
	Tr = !1, t.beforeCreate && Or(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: f, beforeMount: p, mounted: m, beforeUpdate: g, updated: _, activated: y, deactivated: b, beforeDestroy: x, beforeUnmount: ee, destroyed: S, unmounted: C, render: te, renderTracked: ne, renderTriggered: re, errorCaptured: w, serverPrefetch: ie, expose: T, inheritAttrs: ae, components: oe, directives: E, filters: se } = t;
	if (u && Dr(u, i, null), s) for (let e in s) {
		let t = s[e];
		h(t) && (i[e] = t.bind(n));
	}
	if (a) {
		let t = a.call(n, n);
		v(t) && (e.data = /* @__PURE__ */ It(t));
	}
	if (Tr = !0, o) for (let e in o) {
		let t = o[e], a = q({
			get: h(t) ? t.bind(n, n) : h(t.get) ? t.get.bind(n, n) : r,
			set: !h(t) && h(t.set) ? t.set.bind(n) : r
		});
		Object.defineProperty(i, e, {
			enumerable: !0,
			configurable: !0,
			get: () => a.value,
			set: (e) => a.value = e
		});
	}
	if (c) for (let e in c) kr(c[e], i, n, e);
	if (l) {
		let e = h(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Fn(t, e[t]);
		});
	}
	f && Or(f, e, "c");
	function D(e, t) {
		d(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (D(cr, p), D(lr, m), D(ur, g), D(dr, _), D(nr, y), D(rr, b), D(_r, w), D(gr, ne), D(hr, re), D(fr, ee), D(pr, C), D(mr, ie), d(T)) if (T.length) {
		let t = e.exposed ||= {};
		T.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	te && e.render === r && (e.render = te), ae != null && (e.inheritAttrs = ae), oe && (e.components = oe), E && (e.directives = E), ie && Yn(e);
}
function Dr(e, t, n = r) {
	d(e) && (e = Fr(e));
	for (let n in e) {
		let r = e[n], i;
		i = v(r) ? "default" in r ? In(r.from || n, r.default, !0) : In(r.from || n) : In(r), /* @__PURE__ */ P(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Or(e, t, n) {
	dn(d(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function kr(e, t, n, r) {
	let i = r.includes(".") ? Un(n, r) : () => n[r];
	if (g(e)) {
		let n = t[e];
		h(n) && Bn(i, n);
	} else if (h(e)) Bn(i, e.bind(n));
	else if (v(e)) if (d(e)) e.forEach((e) => kr(e, t, n, r));
	else {
		let r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
		h(r) && Bn(i, r, e);
	}
}
function Ar(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => jr(c, e, o, !0)), jr(c, t, o)), v(t) && a.set(t, c), c;
}
function jr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && jr(e, a, n, !0), i && i.forEach((t) => jr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Mr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Mr = {
	data: Nr,
	props: Lr,
	emits: Lr,
	methods: Ir,
	computed: Ir,
	beforeCreate: R,
	created: R,
	beforeMount: R,
	mounted: R,
	beforeUpdate: R,
	updated: R,
	beforeDestroy: R,
	beforeUnmount: R,
	destroyed: R,
	unmounted: R,
	activated: R,
	deactivated: R,
	errorCaptured: R,
	serverPrefetch: R,
	components: Ir,
	directives: Ir,
	watch: Rr,
	provide: Nr,
	inject: Pr
};
function Nr(e, t) {
	return t ? e ? function() {
		return s(h(e) ? e.call(this, this) : e, h(t) ? t.call(this, this) : t);
	} : t : e;
}
function Pr(e, t) {
	return Ir(Fr(e), Fr(t));
}
function Fr(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function R(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Ir(e, t) {
	return e ? s(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Lr(e, t) {
	return e ? d(e) && d(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : s(/* @__PURE__ */ Object.create(null), wr(e), wr(t ?? {})) : t;
}
function Rr(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = s(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = R(e[r], t[r]);
	return n;
}
function zr() {
	return {
		app: null,
		config: {
			isNativeTag: i,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: /* @__PURE__ */ Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var Br = 0;
function Vr(e, t) {
	return function(n, r = null) {
		h(n) || (n = s({}, n)), r != null && !v(r) && (r = null);
		let i = zr(), a = /* @__PURE__ */ new WeakSet(), o = [], c = !1, l = i.app = {
			_uid: Br++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: xa,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && h(e.install) ? (a.add(e), e.install(l, ...t)) : h(e) && (a.add(e), e(l, ...t))), l;
			},
			mixin(e) {
				return i.mixins.includes(e) || i.mixins.push(e), l;
			},
			component(e, t) {
				return t ? (i.components[e] = t, l) : i.components[e];
			},
			directive(e, t) {
				return t ? (i.directives[e] = t, l) : i.directives[e];
			},
			mount(a, o, s) {
				if (!c) {
					let u = l._ceVNode || W(n, r);
					return u.appContext = i, s === !0 ? s = "svg" : s === !1 && (s = void 0), o && t ? t(u, a) : e(u, a, s), c = !0, l._container = a, a.__vue_app__ = l, ya(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				c && (dn(o, l._instance, 16), e(null, l._container), delete l._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, l;
			},
			runWithContext(e) {
				let t = Hr;
				Hr = l;
				try {
					return e();
				} finally {
					Hr = t;
				}
			}
		};
		return l;
	};
}
var Hr = null, Ur = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${w(t)}Modifiers`] || e[`${T(t)}Modifiers`];
function Wr(e, n, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || t, a = r, o = n.startsWith("update:"), s = o && Ur(i, n.slice(7));
	s && (s.trim && (a = r.map((e) => g(e) ? e.trim() : e)), s.number && (a = r.map(ce)));
	let c, l = i[c = oe(n)] || i[c = oe(w(n))];
	!l && o && (l = i[c = oe(T(n))]), l && dn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, dn(u, e, 6, a);
	}
}
var Gr = /* @__PURE__ */ new WeakMap();
function Kr(e, t, n = !1) {
	let r = n ? Gr : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, c = !1;
	if (!h(e)) {
		let r = (e) => {
			let n = Kr(e, t, !0);
			n && (c = !0, s(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !c ? (v(e) && r.set(e, null), null) : (d(a) ? a.forEach((e) => o[e] = null) : s(o, a), v(e) && r.set(e, o), o);
}
function qr(e, t) {
	return !e || !a(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), u(e, t[0].toLowerCase() + t.slice(1)) || u(e, T(t)) || u(e, t));
}
function Jr(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: s, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = jn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = Xi(u.call(t, e, d, f, m, p, h)), y = c;
		} else {
			let e = t;
			v = Xi(e.length > 1 ? e(f, {
				attrs: c,
				slots: s,
				emit: l
			}) : e(f, null)), y = t.props ? c : Yr(c);
		}
	} catch (t) {
		Fi.length = 0, fn(t, e, 1), v = W(Ni);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(o) && (y = Xr(y, a)), b = Ji(b, y, !1, !0));
	}
	return n.dirs && (b = Ji(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && qn(b, n.transition), v = b, jn(_), v;
}
var Yr = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || a(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, Xr = (e, t) => {
	let n = {};
	for (let r in e) (!o(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function Zr(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? Qr(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if ($r(o, r, n) && !qr(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? Qr(r, o, l) : !0 : !!o;
	return !1;
}
function Qr(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if ($r(t, e, a) && !qr(n, a)) return !0;
	}
	return !1;
}
function $r(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && v(r) && v(i) ? !be(r, i) : r !== i;
}
function ei({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var ti = {}, ni = () => Object.create(ti), ri = (e) => Object.getPrototypeOf(e) === ti;
function ii(e, t, n, r = !1) {
	let i = {}, a = ni();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), oi(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ Lt(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function ai(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ N(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (qr(e.emitsOptions, o)) continue;
				let d = t[o];
				if (c) if (u(a, o)) d !== a[o] && (a[o] = d, l = !0);
				else {
					let t = w(o);
					i[t] = si(c, s, t, d, e, !1);
				}
				else d !== a[o] && (a[o] = d, l = !0);
			}
		}
	} else {
		oi(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !u(t, a) && ((r = T(a)) === a || !u(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = si(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !u(t, e)) && (delete a[e], l = !0);
	}
	l && tt(e.attrs, "set", "");
}
function oi(e, n, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (n) for (let t in n) {
		if (te(t)) continue;
		let l = n[t], d;
		a && u(a, d = w(t)) ? !o || !o.includes(d) ? r[d] = l : (c ||= {})[d] = l : qr(e.emitsOptions, t) || (!(t in i) || l !== i[t]) && (i[t] = l, s = !0);
	}
	if (o) {
		let n = /* @__PURE__ */ N(r), i = c || t;
		for (let t = 0; t < o.length; t++) {
			let s = o[t];
			r[s] = si(a, n, s, i[s], e, !u(i, s));
		}
	}
	return s;
}
function si(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = u(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && h(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = sa(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === T(n)) && (r = !0));
	}
	return r;
}
var ci = /* @__PURE__ */ new WeakMap();
function li(e, r, i = !1) {
	let a = i ? ci : r.propsCache, o = a.get(e);
	if (o) return o;
	let c = e.props, l = {}, f = [], p = !1;
	if (!h(e)) {
		let t = (e) => {
			p = !0;
			let [t, n] = li(e, r, !0);
			s(l, t), n && f.push(...n);
		};
		!i && r.mixins.length && r.mixins.forEach(t), e.extends && t(e.extends), e.mixins && e.mixins.forEach(t);
	}
	if (!c && !p) return v(e) && a.set(e, n), n;
	if (d(c)) for (let e = 0; e < c.length; e++) {
		let n = w(c[e]);
		di(n) && (l[n] = t);
	}
	else if (c) for (let e in c) {
		let t = w(e);
		if (di(t)) {
			let n = c[e], r = l[t] = d(n) || h(n) ? { type: n } : s({}, n), i = r.type, a = !1, o = !0;
			if (d(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = h(t) && t.name;
				if (n === "Boolean") {
					a = !0;
					break;
				} else n === "String" && (o = !1);
			}
			else a = h(i) && i.name === "Boolean";
			r[0] = a, r[1] = o, (a || u(r, "default")) && f.push(t);
		}
	}
	let m = [l, f];
	return v(e) && a.set(e, m), m;
}
function di(e) {
	return e[0] !== "$" && !te(e);
}
var fi = (e) => e === "_" || e === "_ctx" || e === "$stable", pi = (e) => d(e) ? e.map(Xi) : [Xi(e)], mi = (e, t, n) => {
	if (t._n) return t;
	let r = Mn((...e) => pi(t(...e)), n);
	return r._c = !1, r;
}, hi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (fi(n)) continue;
		let i = e[n];
		if (h(i)) t[n] = mi(n, i, r);
		else if (i != null) {
			let e = pi(i);
			t[n] = () => e;
		}
	}
}, gi = (e, t) => {
	let n = pi(t);
	e.slots.default = () => n;
}, _i = (e, t, n) => {
	for (let r in t) (n || !fi(r)) && (e[r] = t[r]);
}, vi = (e, t, n) => {
	let r = e.slots = ni();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (_i(r, t, n), n && D(r, "_", e, !0)) : hi(t, r);
	} else t && gi(e, t);
}, yi = (e, n, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = t;
	if (i.shapeFlag & 32) {
		let e = n._;
		e ? r && e === 1 ? o = !1 : _i(a, n, r) : (o = !n.$stable, hi(n, a)), s = n;
	} else n && (gi(e, n), s = { default: 1 });
	if (o) for (let e in a) !fi(e) && s[e] == null && delete a[e];
}, z = ji;
function bi(e) {
	return xi(e);
}
function xi(e, i) {
	let a = ue();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = r, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Ui(e, t) && (r = be(e), O(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case Mi:
				y(e, t, n, r);
				break;
			case Ni:
				b(e, t, n, r);
				break;
			case Pi:
				e ?? x(t, n, r, o);
				break;
			case B:
				oe(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? C(e, t, n, r, i, a, o, s, c) : d & 6 ? E(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, Se);
		}
		u != null && i ? Qn(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && Qn(e.ref, null, a, e, !0);
	}, y = (e, t, n, r) => {
		if (e == null) o(t.el = u(t.children), n, r);
		else {
			let n = t.el = e.el;
			t.children !== e.children && f(n, t.children);
		}
	}, b = (e, t, n, r) => {
		e == null ? o(t.el = d(t.children || ""), n, r) : t.el = e.el;
	}, x = (e, t, n, r) => {
		[e.el, e.anchor] = _(e.children, t, n, r, e.el, e.anchor);
	}, ee = ({ el: e, anchor: t }, n, r) => {
		let i;
		for (; e && e !== t;) i = h(e), o(e, n, r), e = i;
		o(t, n, r);
	}, S = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, C = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) ne(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), ie(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, ne = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && w(e.children, d, null, r, i, Si(e, a), s, u), _ && Pn(e, null, r, "created"), re(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !te(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && ea(f, r, e);
		}
		_ && Pn(e, null, r, "beforeMount");
		let v = wi(i, g);
		v && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && z(() => {
			try {
				f && ea(f, r, e), v && g.enter(d), _ && Pn(e, null, r, "mounted");
			} finally {}
		}, i);
	}, re = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Ai(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				re(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, w = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? Zi(e[l]) : Xi(e[l]), t, n, r, i, a, o, s);
	}, ie = (e, n, r, i, a, o, s) => {
		let l = n.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = n;
		u |= e.patchFlag & 16;
		let m = e.props || t, h = n.props || t, g;
		if (r && Ci(r, !1), (g = h.onVnodeBeforeUpdate) && ea(g, r, n, e), f && Pn(n, e, r, "beforeUpdate"), r && Ci(r, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? T(e.dynamicChildren, d, l, r, i, Si(n, a), o) : s || fe(e, n, l, null, r, i, Si(n, a), o, !1), u > 0) {
			if (u & 16) ae(l, m, h, r, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = n.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let n = e[t], i = m[n], o = h[n];
					(o !== i || n === "value") && c(l, n, i, o, a, r);
				}
			}
			u & 1 && e.children !== n.children && p(l, n.children);
		} else !s && d == null && ae(l, m, h, r, a);
		((g = h.onVnodeUpdated) || f) && z(() => {
			g && ea(g, r, n, e), f && Pn(n, e, r, "updated");
		}, i);
	}, T = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === B || !Ui(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
		}
	}, ae = (e, n, r, i, a) => {
		if (n !== r) {
			if (n !== t) for (let t in n) !te(t) && !(t in r) && c(e, t, n[t], null, a, i);
			for (let t in r) {
				if (te(t)) continue;
				let o = r[t], s = n[t];
				o !== s && t !== "value" && c(e, t, s, o, a, i);
			}
			"value" in r && c(e, "value", n.value, r.value, a);
		}
	}, oe = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), w(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (T(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Ti(e, t, !0)) : fe(e, t, n, f, i, a, s, c, l);
	}, E = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : D(t, n, r, i, a, o, c) : ce(e, t, c);
	}, D = (e, t, n, r, i, a, o) => {
		let s = e.component = ra(e, r, i);
		if (tr(e) && (s.ctx.renderer = Se), da(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, le, o), !e.el) {
				let r = s.subTree = W(Ni);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else le(s, e, t, n, i, a, o);
	}, ce = (e, t, n) => {
		let r = t.component = e.component;
		if (Zr(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			de(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, le = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Di(e);
					if (n) {
						t && (t.el = c.el, de(e, t, o)), n.asyncDep.then(() => {
							z(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				Ci(e, !1), t ? (t.el = c.el, de(e, t, o)) : t = c, n && se(n), (d = t.props && t.props.onVnodeBeforeUpdate) && ea(d, s, t, c), Ci(e, !0);
				let f = Jr(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), be(p), e, i, a), t.el = f.el, u === null && ei(e, f.el), r && z(r, i), (d = t.props && t.props.onVnodeUpdated) && z(() => ea(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = er(t);
				if (Ci(e, !1), l && se(l), !m && (o = c && c.onVnodeBeforeMount) && ea(o, d, t), Ci(e, !0), s && A) {
					let t = () => {
						e.subTree = Jr(e), A(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = Jr(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && z(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					z(() => ea(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && er(d.vnode) && d.vnode.shapeFlag & 256) && e.a && z(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new ke(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Sn(u), Ci(e, !0), l();
	}, de = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, ai(e, t.props, r, n), yi(e, t.children, n), We(), Tn(e), Ge();
	}, fe = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				me(l, d, n, r, i, a, o, s, c);
				return;
			} else if (f & 256) {
				pe(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && ye(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? me(l, d, n, r, i, a, o, s, c) : ye(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && w(d, n, r, i, a, o, s, c));
	}, pe = (e, t, r, i, a, o, s, c, l) => {
		e ||= n, t ||= n;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let n = t[p] = l ? Zi(t[p]) : Xi(t[p]);
			v(e[p], n, r, null, a, o, s, c, l);
		}
		u > d ? ye(e, a, o, !0, !1, f) : w(t, r, i, a, o, s, c, l, f);
	}, me = (e, t, r, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let n = e[u], i = t[u] = l ? Zi(t[u]) : Xi(t[u]);
			if (Ui(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let n = e[f], i = t[p] = l ? Zi(t[p]) : Xi(t[p]);
			if (Ui(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, n = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? Zi(t[u]) : Xi(t[u]), r, n, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) O(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? Zi(t[u]) : Xi(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, ee = 0, S = Array(b);
			for (u = 0; u < b; u++) S[u] = 0;
			for (u = m; u <= f; u++) {
				let n = e[u];
				if (y >= b) {
					O(n, a, o, !0);
					continue;
				}
				let i;
				if (n.key != null) i = g.get(n.key);
				else for (_ = h; _ <= p; _++) if (S[_ - h] === 0 && Ui(n, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? O(n, a, o, !0) : (S[i - h] = u + 1, i >= ee ? ee = i : x = !0, v(n, t[i], r, null, a, o, s, c, l), y++);
			}
			let C = x ? Ei(S) : n;
			for (_ = C.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, n = t[e], f = t[e + 1], p = e + 1 < d ? f.el || ki(f) : i;
				S[u] === 0 ? v(null, n, r, p, a, o, s, c, l) : x && (_ < 0 || u !== C[_] ? he(n, r, p, 2) : _--);
			}
		}
	}, he = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			he(e.component.subTree, t, n, r);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, r);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, Se);
			return;
		}
		if (c === B) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) he(u[e], t, n, r);
			o(e.anchor, t, n);
			return;
		}
		if (c === Pi) {
			ee(e, t, n);
			return;
		}
		if (r !== 2 && d & 1 && l) if (r === 0) l.persisted && !a[Kn] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), z(() => l.enter(a), i));
		else {
			let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? s(a) : o(a, t, n);
			}, d = () => {
				let e = a._isLeaving || !!a[Kn];
				a._isLeaving && a[Kn](!0), l.persisted && !e ? u() : r(a, () => {
					u(), c && c();
				});
			};
			i ? i(a, u, d) : d();
		}
		else o(a, t, n);
	}, O = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (We(), Qn(s, null, n, e, !0), Ge()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !er(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && ea(_, t, e), u & 6) ve(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Pn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Se, r) : l && !l.hasOnce && (a !== B || d > 0 && d & 64) ? ye(l, t, n, !1, !0) : (a === B && d & 384 || !i && u & 16) && ye(c, t, n), r && ge(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && z(() => {
			_ && ea(_, t, e), h && Pn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, ge = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === B) {
			_e(n, r);
			return;
		}
		if (t === Pi) {
			S(e);
			return;
		}
		let a = () => {
			s(n), i && !i.persisted && i.afterLeave && i.afterLeave();
		};
		if (e.shapeFlag & 1 && i && !i.persisted) {
			let { leave: t, delayLeave: r } = i, o = () => t(n, a);
			r ? r(e.el, a, o) : o();
		} else a();
	}, _e = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, ve = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		Oi(c), Oi(l), r && se(r), i.stop(), a && (a.flags |= 8, O(o, e, t, n)), s && z(s, t), z(() => {
			e.isUnmounted = !0;
		}, t);
	}, ye = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) O(e[o], t, n, r, i);
	}, be = (e) => {
		if (e.shapeFlag & 6) return be(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Wn];
		return n ? h(n) : t;
	}, xe = !1, k = (e, t, n) => {
		let r;
		e == null ? t._vnode && (O(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, xe ||= (xe = !0, Tn(r), En(), !1);
	}, Se = {
		p: v,
		um: O,
		m: he,
		r: ge,
		mt: D,
		mc: w,
		pc: fe,
		pbc: T,
		n: be,
		o: e
	}, Ce, A;
	return i && ([Ce, A] = i(Se)), {
		render: k,
		hydrate: Ce,
		createApp: Vr(k, Ce)
	};
}
function Si({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ci({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function wi(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ti(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (d(r) && d(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Zi(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Ti(t, a)), a.type === Mi && (a.patchFlag === -1 && (a = i[e] = Zi(a)), a.el = t.el), a.type === Ni && !a.el && (a.el = t.el);
	}
}
function Ei(e) {
	let t = e.slice(), n = [0], r, i, a, o, s, c = e.length;
	for (r = 0; r < c; r++) {
		let c = e[r];
		if (c !== 0) {
			if (i = n[n.length - 1], e[i] < c) {
				t[r] = i, n.push(r);
				continue;
			}
			for (a = 0, o = n.length - 1; a < o;) s = a + o >> 1, e[n[s]] < c ? a = s + 1 : o = s;
			c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
		}
	}
	for (a = n.length, o = n[a - 1]; a-- > 0;) n[a] = o, o = t[o];
	return n;
}
function Di(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Di(t);
}
function Oi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function ki(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? ki(t.subTree) : null;
}
var Ai = (e) => e.__isSuspense;
function ji(e, t) {
	t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : wn(e);
}
var B = /* @__PURE__ */ Symbol.for("v-fgt"), Mi = /* @__PURE__ */ Symbol.for("v-txt"), Ni = /* @__PURE__ */ Symbol.for("v-cmt"), Pi = /* @__PURE__ */ Symbol.for("v-stc"), Fi = [], Ii = null;
function V(e = !1) {
	Fi.push(Ii = e ? null : []);
}
function Li() {
	Fi.pop(), Ii = Fi[Fi.length - 1] || null;
}
var Ri = 1;
function zi(e, t = !1) {
	Ri += e, e < 0 && Ii && t && (Ii.hasOnce = !0);
}
function Bi(e) {
	return e.dynamicChildren = Ri > 0 ? Ii || n : null, Li(), Ri > 0 && Ii && Ii.push(e), e;
}
function H(e, t, n, r, i, a) {
	return Bi(U(e, t, n, r, i, a, !0));
}
function Vi(e, t, n, r, i) {
	return Bi(W(e, t, n, r, i, !0));
}
function Hi(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Ui(e, t) {
	return e.type === t.type && e.key === t.key;
}
var Wi = ({ key: e }) => e ?? null, Gi = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : g(e) || /* @__PURE__ */ P(e) || h(e) ? {
	i: kn,
	r: e,
	k: t,
	f: !!n
} : e);
function U(e, t = null, n = null, r = 0, i = null, a = e === B ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Wi(t),
		ref: t && Gi(t),
		scopeId: An,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: a,
		patchFlag: r,
		dynamicProps: i,
		dynamicChildren: null,
		appContext: null,
		ctx: kn
	};
	return s ? (Qi(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= g(n) ? 8 : 16), Ri > 0 && !o && Ii && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && Ii.push(c), c;
}
var W = Ki;
function Ki(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === vr) && (e = Ni), Hi(e)) {
		let r = Ji(e, t, !0);
		return n && Qi(r, n), Ri > 0 && !a && Ii && (r.shapeFlag & 6 ? Ii[Ii.indexOf(e)] = r : Ii.push(r)), r.patchFlag = -2, r;
	}
	if (ba(e) && (e = e.__vccOpts), t) {
		t = qi(t);
		let { class: e, style: n } = t;
		e && !g(e) && (t.class = O(e)), v(n) && (/* @__PURE__ */ Ut(n) && !d(n) && (n = s({}, n)), t.style = de(n));
	}
	let o = g(e) ? 1 : Ai(e) ? 128 : Gn(e) ? 64 : v(e) ? 4 : h(e) ? 2 : 0;
	return U(e, t, n, r, i, o, a, !0);
}
function qi(e) {
	return e ? /* @__PURE__ */ Ut(e) || ri(e) ? s({}, e) : e : null;
}
function Ji(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? $i(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Wi(l),
		ref: t && t.ref ? n && a ? d(a) ? a.concat(Gi(t)) : [a, Gi(t)] : Gi(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== B ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Ji(e.ssContent),
		ssFallback: e.ssFallback && Ji(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && qn(u, c.clone(u)), u;
}
function Yi(e = " ", t = 0) {
	return W(Mi, null, e, t);
}
function G(e = "", t = !1) {
	return t ? (V(), Vi(Ni, null, e)) : W(Ni, null, e);
}
function Xi(e) {
	return e == null || typeof e == "boolean" ? W(Ni) : d(e) ? W(B, null, e.slice()) : Hi(e) ? Zi(e) : W(Mi, null, String(e));
}
function Zi(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ji(e);
}
function Qi(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (d(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), Qi(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !ri(t) ? t._ctx = kn : r === 3 && kn && (kn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else h(t) ? (t = {
		default: t,
		_ctx: kn
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Yi(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function $i(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = O([t.class, r.class]));
		else if (e === "style") t.style = de([t.style, r.style]);
		else if (a(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(d(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !o(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function ea(e, t, n, r = null) {
	dn(e, t, 7, [n, r]);
}
var ta = zr(), na = 0;
function ra(e, n, r) {
	let i = e.type, a = (n ? n.appContext : e.appContext) || ta, o = {
		uid: na++,
		vnode: e,
		type: i,
		parent: n,
		appContext: a,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new we(!0),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: n ? n.provides : Object.create(a.provides),
		ids: n ? n.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: li(i, a),
		emitsOptions: Kr(i, a),
		emit: null,
		emitted: null,
		propsDefaults: t,
		inheritAttrs: i.inheritAttrs,
		ctx: t,
		data: t,
		props: t,
		attrs: t,
		slots: t,
		refs: t,
		setupState: t,
		setupContext: null,
		suspense: r,
		suspenseId: r ? r.pendingId : 0,
		asyncDep: null,
		asyncResolved: !1,
		isMounted: !1,
		isUnmounted: !1,
		isDeactivated: !1,
		bc: null,
		c: null,
		bm: null,
		m: null,
		bu: null,
		u: null,
		um: null,
		bum: null,
		da: null,
		a: null,
		rtg: null,
		rtc: null,
		ec: null,
		sp: null
	};
	return o.ctx = { _: o }, o.root = n ? n.root : o, o.emit = Wr.bind(null, o), e.ce && e.ce(o), o;
}
var K = null, ia = () => K || kn, aa, oa;
{
	let e = ue(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	aa = t("__VUE_INSTANCE_SETTERS__", (e) => K = e), oa = t("__VUE_SSR_SETTERS__", (e) => ua = e);
}
var sa = (e) => {
	let t = K;
	return aa(e), e.scope.on(), () => {
		e.scope.off(), aa(t);
	};
}, ca = () => {
	K && K.scope.off(), aa(null);
};
function la(e) {
	return e.vnode.shapeFlag & 4;
}
var ua = !1;
function da(e, t = !1, n = !1) {
	t && oa(t);
	let { props: r, children: i } = e.vnode, a = la(e);
	ii(e, r, a, t), vi(e, i, n || t);
	let o = a ? fa(e, t) : void 0;
	return t && oa(!1), o;
}
function fa(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Cr);
	let { setup: r } = n;
	if (r) {
		We();
		let n = e.setupContext = r.length > 1 ? va(e) : null, i = sa(e), a = un(r, e, 0, [e.props, n]), o = y(a);
		if (Ge(), i(), (o || e.sp) && !er(e) && Yn(e), o) {
			if (a.then(ca, ca), t) return a.then((n) => {
				pa(e, n, t);
			}).catch((t) => {
				fn(t, e, 0);
			});
			e.asyncDep = a;
		} else pa(e, a, t);
	} else ga(e, t);
}
function pa(e, t, n) {
	h(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : v(t) && (e.setupState = Zt(t)), ga(e, n);
}
var ma, ha;
function ga(e, t, n) {
	let i = e.type;
	if (!e.render) {
		if (!t && ma && !i.render) {
			let t = i.template || Ar(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: r } = e.appContext.config, { delimiters: a, compilerOptions: o } = i;
				i.render = ma(t, s(s({
					isCustomElement: n,
					delimiters: a
				}, r), o));
			}
		}
		e.render = i.render || r, ha && ha(e);
	}
	{
		let t = sa(e);
		We();
		try {
			Er(e);
		} finally {
			Ge(), t();
		}
	}
}
var _a = { get(e, t) {
	return M(e, "get", ""), e[t];
} };
function va(e) {
	return {
		attrs: new Proxy(e.attrs, _a),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function ya(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(Zt(Wt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in xr) return xr[n](e);
		},
		has(e, t) {
			return t in e || t in xr;
		}
	}) : e.proxy;
}
function ba(e) {
	return h(e) && "__vccOpts" in e;
}
var q = (e, t) => /* @__PURE__ */ nn(e, t, ua), xa = "3.5.38", Sa = void 0, Ca = typeof window < "u" && window.trustedTypes;
if (Ca) try {
	Sa = /* @__PURE__ */ Ca.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var wa = Sa ? (e) => Sa.createHTML(e) : (e) => e, Ta = "http://www.w3.org/2000/svg", Ea = "http://www.w3.org/1998/Math/MathML", Da = typeof document < "u" ? document : null, Oa = Da && /* @__PURE__ */ Da.createElement("template"), ka = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Da.createElementNS(Ta, e) : t === "mathml" ? Da.createElementNS(Ea, e) : n ? Da.createElement(e, { is: n }) : Da.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Da.createTextNode(e),
	createComment: (e) => Da.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Da.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			Oa.innerHTML = wa(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Oa.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Aa = /* @__PURE__ */ Symbol("_vtc");
function ja(e, t, n) {
	let r = e[Aa];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Ma = /* @__PURE__ */ Symbol("_vod"), Na = /* @__PURE__ */ Symbol("_vsh"), Pa = /* @__PURE__ */ Symbol(""), Fa = /(?:^|;)\s*display\s*:/;
function Ia(e, t, n) {
	let r = e.style, i = g(n), a = !1;
	if (n && !i) {
		if (t) if (g(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? Ra(r, t, "");
		}
		else for (let e in t) n[e] ?? Ra(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? Ra(r, i, "") : Ha(e, i, !g(t) && t ? t[i] : void 0, o) || Ra(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Pa];
			e && (n += ";" + e), r.cssText = n, a = Fa.test(n);
		}
	} else t && e.removeAttribute("style");
	Ma in e && (e[Ma] = a ? r.display : "", e[Na] && (r.display = "none"));
}
var La = /\s*!important$/;
function Ra(e, t, n) {
	if (d(n)) n.forEach((n) => Ra(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = Va(e, t);
		La.test(n) ? e.setProperty(T(r), n.replace(La, ""), "important") : e[r] = n;
	}
}
var za = [
	"Webkit",
	"Moz",
	"ms"
], Ba = {};
function Va(e, t) {
	let n = Ba[t];
	if (n) return n;
	let r = w(t);
	if (r !== "filter" && r in e) return Ba[t] = r;
	r = ae(r);
	for (let n = 0; n < za.length; n++) {
		let i = za[n] + r;
		if (i in e) return Ba[t] = i;
	}
	return t;
}
function Ha(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && g(r) && n === r;
}
var Ua = "http://www.w3.org/1999/xlink";
function Wa(e, t, n, r, i, a = _e(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ua, t.slice(6, t.length)) : e.setAttributeNS(Ua, t, n) : n == null || a && !ve(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : _(n) ? String(n) : n);
}
function Ga(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? wa(n) : n);
		return;
	}
	let a = e.tagName;
	if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
		let r = a === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
		(r !== i || !("_value" in e)) && (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if (n === "" || n == null) {
		let r = typeof e[t];
		r === "boolean" ? n = ve(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function Ka(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function qa(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var Ja = /* @__PURE__ */ Symbol("_vei");
function Ya(e, t, n, r, i = null) {
	let a = e[Ja] || (e[Ja] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = Za(t);
		r ? Ka(e, n, a[t] = to(r, i), s) : o && (qa(e, n, o, s), a[t] = void 0);
	}
}
var Xa = /(?:Once|Passive|Capture)$/;
function Za(e) {
	let t;
	if (Xa.test(e)) {
		t = {};
		let n;
		for (; n = e.match(Xa);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : T(e.slice(2)), t];
}
var Qa = 0, $a = /* @__PURE__ */ Promise.resolve(), eo = () => Qa ||= ($a.then(() => Qa = 0), Date.now());
function to(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (d(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let i = r.slice(), a = [e];
			for (let n = 0; n < i.length && !e._stopped; n++) {
				let e = i[n];
				e && dn(e, t, 5, a);
			}
		} else dn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = eo(), n;
}
var no = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ro = (e, t, n, r, i, s) => {
	let c = i === "svg";
	t === "class" ? ja(e, r, c) : t === "style" ? Ia(e, n, r) : a(t) ? o(t) || Ya(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : io(e, t, r, c)) ? (Ga(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Wa(e, t, r, c, s, t !== "value")) : e._isVueCE && (ao(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !g(r))) ? Ga(e, w(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Wa(e, t, r, c));
};
function io(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && no(t) && h(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return no(t) && g(n) ? !1 : t in e;
}
function ao(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = w(t);
	return Array.isArray(n) ? n.some((e) => w(e) === r) : Object.keys(n).some((e) => w(e) === r);
}
var oo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return d(t) ? (e) => se(t, e) : t;
};
function so(e) {
	e.target.composing = !0;
}
function co(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var lo = /* @__PURE__ */ Symbol("_assign");
function uo(e, t, n) {
	return t && (e = e.trim()), n && (e = ce(e)), e;
}
var fo = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[lo] = oo(i);
		let a = r || i.props && i.props.type === "number";
		Ka(e, t ? "change" : "input", (t) => {
			t.target.composing || e[lo](uo(e.value, n, a));
		}), (n || a) && Ka(e, "change", () => {
			e.value = uo(e.value, n, a);
		}), t || (Ka(e, "compositionstart", so), Ka(e, "compositionend", co), Ka(e, "change", co));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[lo] = oo(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? ce(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, po = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], mo = {
	stop: (e) => e.stopPropagation(),
	prevent: (e) => e.preventDefault(),
	self: (e) => e.target !== e.currentTarget,
	ctrl: (e) => !e.ctrlKey,
	shift: (e) => !e.shiftKey,
	alt: (e) => !e.altKey,
	meta: (e) => !e.metaKey,
	left: (e) => "button" in e && e.button !== 0,
	middle: (e) => "button" in e && e.button !== 1,
	right: (e) => "button" in e && e.button !== 2,
	exact: (e, t) => po.some((n) => e[`${n}Key`] && !t.includes(n))
}, ho = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = mo[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, go = /* @__PURE__ */ s({ patchProp: ro }, ka), _o;
function vo() {
	return _o ||= bi(go);
}
var yo = ((...e) => {
	let t = vo().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = xo(e);
		if (!r) return;
		let i = t._component;
		!h(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, bo(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function bo(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function xo(e) {
	return g(e) ? document.querySelector(e) : e;
}
//#endregion
//#region node_modules/pinia/dist/pinia.mjs
var So = typeof window < "u", Co, wo = (e) => Co = e, To = Symbol();
function Eo(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Do;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Do ||= {});
var Oo = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function ko(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function Ao(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		Fo(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function jo(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function Mo(e) {
	try {
		e.dispatchEvent(new MouseEvent("click"));
	} catch {
		let t = new MouseEvent("click", {
			bubbles: !0,
			cancelable: !0,
			view: window,
			detail: 0,
			screenX: 80,
			screenY: 20,
			clientX: 80,
			clientY: 20,
			ctrlKey: !1,
			altKey: !1,
			shiftKey: !1,
			metaKey: !1,
			button: 0,
			relatedTarget: null
		});
		e.dispatchEvent(t);
	}
}
var No = typeof navigator == "object" ? navigator : { userAgent: "" }, Po = /Macintosh/.test(No.userAgent) && /AppleWebKit/.test(No.userAgent) && !/Safari/.test(No.userAgent), Fo = So ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Po ? Io : "msSaveOrOpenBlob" in No ? Lo : Ro : () => {};
function Io(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? Mo(r) : jo(r.href) ? Ao(e, t, n) : (r.target = "_blank", Mo(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		Mo(r);
	}, 0));
}
function Lo(e, t = "download", n) {
	if (typeof e == "string") if (jo(e)) Ao(e, t, n);
	else {
		let t = document.createElement("a");
		t.href = e, t.target = "_blank", setTimeout(function() {
			Mo(t);
		});
	}
	else navigator.msSaveOrOpenBlob(ko(e, n), t);
}
function Ro(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return Ao(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(Oo.HTMLElement)) || "safari" in Oo, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || Po) && typeof FileReader < "u") {
		let t = new FileReader();
		t.onloadend = function() {
			let e = t.result;
			if (typeof e != "string") throw r = null, Error("Wrong reader.result type");
			e = o ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = e : location.assign(e), r = null;
		}, t.readAsDataURL(e);
	} else {
		let t = URL.createObjectURL(e);
		r ? r.location.assign(t) : location.href = t, r = null, setTimeout(function() {
			URL.revokeObjectURL(t);
		}, 4e4);
	}
}
var { assign: zo } = Object;
function Bo() {
	let e = Te(!0), t = e.run(() => /* @__PURE__ */ F({})), n = [], r = [], i = Wt({
		install(e) {
			wo(i), i._a = e, e.provide(To, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
		},
		use(e) {
			return this._a ? n.push(e) : r.push(e), this;
		},
		_p: n,
		_a: null,
		_e: e,
		_s: /* @__PURE__ */ new Map(),
		state: t
	});
	return i;
}
var Vo = () => {};
function Ho(e, t, n, r = Vo) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && Ee() && De(i), i;
}
function Uo(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var Wo = (e) => e(), Go = Symbol(), Ko = Symbol();
function qo(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		Eo(i) && Eo(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ P(r) && !/* @__PURE__ */ Bt(r) ? e[n] = qo(i, r) : e[n] = r;
	}
	return e;
}
var Jo = Symbol();
function Yo(e) {
	return !Eo(e) || !Object.prototype.hasOwnProperty.call(e, Jo);
}
var { assign: Xo } = Object;
function Zo(e) {
	return !!(/* @__PURE__ */ P(e) && e.effect);
}
function Qo(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || (n.state.value[e] = i ? i() : {}), Xo(/* @__PURE__ */ Qt(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Wt(q(() => {
			wo(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = $o(e, l, t, n, r, !0), c;
}
function $o(e, t, n = {}, r, i, a) {
	let o, s = Xo({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = r.state.value[e];
	!a && !p && (r.state.value[e] = {});
	let m;
	function h(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: Do.patchFunction,
			storeId: e,
			events: void 0
		}) : (qo(r.state.value[e], t), n = {
			type: Do.patchObject,
			payload: t,
			storeId: e,
			events: void 0
		});
		let i = m = Symbol();
		bn().then(() => {
			m === i && (l = !0);
		}), u = !0, Uo(d, n, r.state.value[e]);
	}
	let g = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			Xo(e, t);
		});
	} : Vo;
	function _() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let v = (t, n = "") => {
		if (Go in t) return t[Ko] = n, t;
		let i = function() {
			wo(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			Uo(f, {
				args: n,
				name: i[Ko],
				store: y,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : y, n);
			} catch (e) {
				throw Uo(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (Uo(a, e), e)).catch((e) => (Uo(o, e), Promise.reject(e))) : (Uo(a, l), l);
		};
		return i[Go] = !0, i[Ko] = n, i;
	}, y = /* @__PURE__ */ It({
		_p: r,
		$id: e,
		$onAction: Ho.bind(null, f),
		$patch: h,
		$reset: g,
		$subscribe(t, n = {}) {
			let i = Ho(d, t, n.detached, () => a()), a = o.run(() => Bn(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: Do.direct,
					events: void 0
				}, r);
			}, Xo({}, c, n)));
			return i;
		},
		$dispose: _
	});
	r._s.set(e, y);
	let b = (r._a && r._a.runWithContext || Wo)(() => r._e.run(() => (o = Te()).run(() => t({ action: v }))));
	for (let t in b) {
		let n = b[t];
		/* @__PURE__ */ P(n) && !Zo(n) || /* @__PURE__ */ Bt(n) ? a || (p && Yo(n) && (/* @__PURE__ */ P(n) ? n.value = p[t] : qo(n, p[t])), r.state.value[e][t] = n) : typeof n == "function" && (b[t] = v(n, t), s.actions[t] = n);
	}
	return Xo(y, b), Xo(/* @__PURE__ */ N(y), b), Object.defineProperty(y, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			h((t) => {
				Xo(t, e);
			});
		}
	}), r._p.forEach((e) => {
		Xo(y, o.run(() => e({
			store: y,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), p && a && n.hydrate && n.hydrate(y.$state, p), l = !0, u = !0, y;
}
function es(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = Ln();
		return n ||= o ? In(To, null) : null, n && wo(n), n = Co, n._s.has(e) || (i ? $o(e, t, r, n) : Qo(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
//#endregion
//#region src/functions/scene-merger/defaults.ts
var ts = {
	edgeThreshold: 16,
	gridSize: 100,
	mode: "edge",
	pixelInterval: 50
};
function ns(e) {
	return {
		content: {
			backgrounds: !0,
			drawings: !0,
			lights: !0,
			notes: !0,
			regions: !0,
			sounds: !0,
			templates: !1,
			tiles: !0,
			tokens: !1,
			walls: !0
		},
		destination: {
			activateAfterMerge: !1,
			folderId: null,
			lockBackgroundTiles: !0,
			name: e,
			navigation: !1,
			openAfterMerge: !0
		}
	};
}
//#endregion
//#region src/functions/scene-merger/cleanup.ts
function rs(e) {
	return e.cleanupEnabled && e.destinationCreated && e.stage !== "finalizing";
}
//#endregion
//#region src/functions/scene-merger/content.ts
var is = {
	drawings: "Drawing",
	lights: "AmbientLight",
	notes: "Note",
	regions: "Region",
	sounds: "AmbientSound",
	tiles: "Tile",
	tokens: "Token",
	walls: "Wall"
};
function as(e) {
	return Object.entries(is).flatMap(([t, n]) => e[t] && n ? [n] : []);
}
//#endregion
//#region src/functions/scene-merger/layout/bounds.ts
function os(e, t, n, r) {
	return {
		height: Math.max(0, r - t),
		maxX: n,
		maxY: r,
		minX: e,
		minY: t,
		width: Math.max(0, n - e)
	};
}
function ss(e) {
	return e.length === 0 ? os(0, 0, 0, 0) : os(Math.min(...e.map((e) => e.x)), Math.min(...e.map((e) => e.y)), Math.max(...e.map((e) => e.x + e.width)), Math.max(...e.map((e) => e.y + e.height)));
}
//#endregion
//#region src/functions/scene-merger/layout/normalize.ts
var cs = {
	x: 0,
	y: 0
};
function ls(e, t = cs) {
	let n = ss(e), r = {
		x: t.x - n.minX,
		y: t.y - n.minY
	}, i = e.map((e) => ({
		...e,
		x: e.x + r.x,
		y: e.y + r.y
	}));
	return {
		bounds: os(t.x, t.y, t.x + n.width, t.y + n.height),
		height: n.height,
		placements: i,
		shift: r,
		sourceBounds: n,
		width: n.width
	};
}
//#endregion
//#region src/functions/scene-merger/layout/overlaps.ts
function us(e, t) {
	let n = Math.max(e.x, t.x), r = Math.max(e.y, t.y), i = Math.min(e.x + e.width, t.x + t.width), a = Math.min(e.y + e.height, t.y + t.height);
	return i > n && a > r ? os(n, r, i, a) : null;
}
function ds(e) {
	let t = [];
	for (let n = 0; n < e.length; n += 1) {
		let r = e[n];
		if (r) for (let i = n + 1; i < e.length; i += 1) {
			let n = e[i];
			if (!n) continue;
			let a = us(r, n);
			a && t.push({
				firstSceneId: r.sceneId,
				intersection: a,
				secondSceneId: n.sceneId
			});
		}
	}
	return t;
}
//#endregion
//#region src/functions/scene-merger/layout/snap.ts
function fs(e, t) {
	let n = t > 0 ? Math.round(e / t) * t : e;
	return Object.is(n, -0) ? 0 : n;
}
function ps(e, t, n) {
	let r = e, i = n + 2 ** -52;
	for (let n of t) {
		let t = Math.abs(n - e);
		t < i && (r = n, i = t);
	}
	return i <= n ? r : e;
}
function ms(e, t) {
	let n = [], r = [];
	for (let i of t) n.push(i.x, i.x + i.width, i.x - e.width, i.x + i.width - e.width), r.push(i.y, i.y + i.height, i.y - e.height, i.y + i.height - e.height);
	return {
		x: n,
		y: r
	};
}
function hs(e, t, n = []) {
	if (t.mode === "pixel") return {
		x: fs(e.x, t.pixelInterval),
		y: fs(e.y, t.pixelInterval)
	};
	if (t.mode === "grid") return {
		x: fs(e.x, t.gridSize),
		y: fs(e.y, t.gridSize)
	};
	if (t.mode === "edge") {
		let r = ms(e, n);
		return {
			x: ps(e.x, r.x, t.edgeThreshold),
			y: ps(e.y, r.y, t.edgeThreshold)
		};
	}
	return {
		x: e.x,
		y: e.y
	};
}
function gs(e, t, n) {
	return {
		...e,
		...hs(e, t, n)
	};
}
//#endregion
//#region src/functions/scene-merger/layout/viewport.ts
var _s = .02;
function vs(e, t = _s, n = 8) {
	return Math.min(n, Math.max(t, e));
}
function ys(e, t, n = 32) {
	let r = Math.max(1, t.width - n * 2), i = Math.max(1, t.height - n * 2), a = e.width > 0 ? r / e.width : 1, o = e.height > 0 ? i / e.height : 1, s = vs(Math.min(a, o, 1));
	return {
		panX: (t.width - e.width * s) / 2 - e.minX * s,
		panY: (t.height - e.height * s) / 2 - e.minY * s,
		zoom: s
	};
}
function bs(e, t, n) {
	let r = vs(t), i = (n.x - e.panX) / e.zoom, a = (n.y - e.panY) / e.zoom;
	return {
		panX: n.x - i * r,
		panY: n.y - a * r,
		zoom: r
	};
}
//#endregion
//#region src/functions/scene-merger/references/keys.ts
function xs(e) {
	return JSON.stringify([
		e.sceneId,
		e.documentType,
		...e.parentIds ?? [],
		e.documentId
	]);
}
function Ss(e, t, n, r = []) {
	return xs({
		documentId: n,
		documentType: t,
		parentIds: r,
		sceneId: e
	});
}
//#endregion
//#region src/functions/scene-merger/transforms/clone.ts
function J(e) {
	return Array.isArray(e) ? e.map((e) => J(e)) : e && typeof e == "object" ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, J(t)])) : e;
}
//#endregion
//#region src/functions/scene-merger/references/uuid.ts
var Cs = new Set([
	"Level",
	"Tile",
	"Wall",
	"AmbientLight",
	"AmbientSound",
	"Drawing",
	"Note",
	"Region",
	"RegionBehavior",
	"Token"
]);
function ws(e) {
	return Cs.has(e);
}
function Ts(e, t, n, r = [], i = e.sourceSceneId) {
	return e.idMap.get(Ss(i, t, n, r));
}
function Es(e, t) {
	let n = e.split("."), r = n[1];
	if (n[0] !== "Scene" || !r || !t.sourceSceneIds.includes(r)) return {
		rewritten: 0,
		unresolved: [],
		value: e
	};
	if (n.length === 2) return {
		rewritten: 1,
		unresolved: [],
		value: `Scene.${t.destinationSceneId}`
	};
	let i = ["Scene", t.destinationSceneId], a = [], o = 1;
	for (let s = 2; s < n.length; s += 2) {
		let c = n[s], l = n[s + 1];
		if (!c || !l || !ws(c)) return {
			rewritten: 0,
			unresolved: [e],
			value: e
		};
		let u = Ts(t, c, l, a, r);
		if (!u) return {
			rewritten: 0,
			unresolved: [e],
			value: e
		};
		i.push(c, u), a.push(l), o += 1;
	}
	return {
		rewritten: o,
		unresolved: [],
		value: i.join(".")
	};
}
//#endregion
//#region src/functions/scene-merger/references/rewrite.ts
function Ds(e, t, n) {
	if (typeof e.level == "string") {
		let r = e.level, i = Ts(t, "Level", r);
		i ? (e.level = i, n.rewritten += 1) : n.unresolved.push(`Level.${r}`);
	}
	Array.isArray(e.levels) && (e.levels = e.levels.map((e) => {
		if (typeof e != "string") return e;
		let r = Ts(t, "Level", e);
		return r ? (n.rewritten += 1, r) : (n.unresolved.push(`Level.${e}`), e);
	}));
}
function Os(e, t, n) {
	if (typeof e != "string") return e;
	let r = Es(e, t);
	return n.rewritten += r.rewritten, n.unresolved.push(...r.unresolved), r.value;
}
function ks(e, t, n, r) {
	let i = e[t];
	if (typeof i != "string") return;
	let a = Ts(n, "Token", i);
	a ? (e[t] = a, r.rewritten += 1) : r.unresolved.push(`Token.${i}`);
}
function As(e, t, n) {
	if (typeof e == "string") return Os(e, t, n);
	if (!e || typeof e != "object" || Array.isArray(e)) return e;
	let r = J(e);
	typeof r.uuid == "string" && (r.uuid = Os(r.uuid, t, n));
	let i = r.scene;
	if (typeof i == "string" && t.sourceSceneIds.includes(i) && typeof r.region == "string") {
		let e = Ts(t, "Region", r.region, [], i);
		e ? (r.scene = t.destinationSceneId, r.region = e, n.rewritten += 2) : n.unresolved.push(`Region.${String(r.region)}`);
	}
	return r;
}
function js(e, t, n, r) {
	if (!e || typeof e != "object" || Array.isArray(e)) return e;
	let i = J(e), a = i.system;
	if (!a || typeof a != "object" || Array.isArray(a)) return i;
	let o = { ...a }, s = typeof i.type == "string" ? i.type.toLowerCase() : "";
	if (s.includes("teleport") && Array.isArray(o.destinations) && (o.destinations = o.destinations.map((e) => As(e, n, r))), s.includes("toggle") && t) for (let e of ["enable", "disable"]) Array.isArray(o[e]) && (o[e] = o[e].map((e) => {
		if (typeof e != "string") return e;
		if (e.startsWith("Scene.")) return Os(e, n, r);
		let i = Ts(n, "RegionBehavior", e, [t]);
		return i ? (r.rewritten += 1, i) : (r.unresolved.push(`Region.${t}.RegionBehavior.${e}`), e);
	}));
	return i.system = o, i;
}
function Ms(e, t, n) {
	let r = e.attachment;
	if (r && typeof r == "object" && !Array.isArray(r)) {
		let i = J(r);
		ks(i, "token", t, n), e.attachment = i;
	}
	Array.isArray(e.shapes) && (e.shapes = e.shapes.map((e) => {
		if (!e || typeof e != "object" || Array.isArray(e)) return e;
		let r = J(e);
		return ks(r, "token", t, n), r;
	}));
	let i = typeof e._id == "string" ? e._id : void 0;
	Array.isArray(e.behaviors) && (e.behaviors = e.behaviors.map((e) => js(e, i, t, n)));
}
function Ns(e, t, n) {
	let r = J(t), i = {
		rewritten: 0,
		unresolved: []
	};
	return Ds(r, n, i), e === "Region" && Ms(r, n, i), {
		rewritten: i.rewritten,
		unresolved: i.unresolved,
		value: r
	};
}
//#endregion
//#region src/functions/scene-merger/transforms/coordinates.ts
function Ps(e, t) {
	return {
		x: e.x + t.x,
		y: e.y + t.y
	};
}
function Fs(e, t, n) {
	return {
		x: t.sceneX + n.x - e.sceneX,
		y: t.sceneY + n.y - e.sceneY
	};
}
function Is(e, t) {
	if (!Number.isFinite(t) || t <= 0) return !1;
	let n = 1e-7, r = e.x / t, i = e.y / t;
	return Math.abs(r - Math.round(r)) < n && Math.abs(i - Math.round(i)) < n;
}
//#endregion
//#region src/functions/scene-merger/transforms/documents.ts
function Ls(e, t) {
	return {
		...J(e),
		...Ps(e, t)
	};
}
function Rs(e, t) {
	return Ls(e, t);
}
function zs(e, t) {
	return {
		...J(e),
		c: [
			e.c[0] + t.x,
			e.c[1] + t.y,
			e.c[2] + t.x,
			e.c[3] + t.y
		]
	};
}
function Bs(e, t) {
	return Ls(e, t);
}
function Vs(e, t) {
	return {
		...Ls(e, t),
		_movementHistory: [],
		_regions: []
	};
}
function Hs(e, t) {
	let n = { ...J(e) };
	return typeof e.level == "string" && (n.level = t.get(e.level) ?? e.level), Array.isArray(e.levels) && (n.levels = e.levels.map((e) => t.get(e) ?? e)), n;
}
//#endregion
//#region src/functions/scene-merger/transforms/regions.ts
var Us = new Set([
	"circle",
	"cone",
	"ellipse",
	"line",
	"rectangle",
	"ring"
]);
function Ws(e, t) {
	let n = { ...J(e) };
	return typeof e.x == "number" && (n.x = e.x + t.x), typeof e.y == "number" && (n.y = e.y + t.y), n;
}
function Gs(e, t) {
	return e.map((e, n) => e + (n % 2 == 0 ? t.x : t.y));
}
function Ks(e, t, n) {
	if (!n || n.type !== 1 || n.size <= 0) throw Error("Grid Region shapes can currently be translated only on a square grid.");
	let r = t.y / n.size, i = t.x / n.size;
	if (!Number.isInteger(r) || !Number.isInteger(i)) throw Error("Grid Region shape translation must align to complete grid cells.");
	return e.map((e) => ({
		...J(e),
		i: e.i + r,
		j: e.j + i
	}));
}
function qs(e, t, n) {
	let r = { ...J(e) };
	if (Us.has(e.type)) return Ws(r, t);
	if (e.type === "polygon") return r.points = Gs(e.points ?? [], t), r;
	if (e.type === "emanation") return e.base && (r.base = Ws(e.base, t)), r;
	if (e.type === "grid") return r.offsets = Ks(e.offsets ?? [], t, n), r;
	throw e.type === "token" ? Error("Token-linked Region shapes cannot currently be merged safely.") : Error(`Unsupported Region shape type: ${e.type}`);
}
function Js(e, t, n) {
	let r = e.attachment?.token;
	if (typeof r == "string" && r.length > 0) throw Error("Attached Regions cannot currently be merged safely.");
	return {
		...J(e),
		_shapeConstraints: null,
		shapes: e.shapes?.map((e) => qs(e, t, n)) ?? []
	};
}
//#endregion
//#region src/functions/scene-merger/validation/compatibility.ts
function Y(e, t, n, r = {}, i = t !== "error") {
	return {
		code: e,
		details: r,
		overridable: i,
		sceneIds: n,
		severity: t
	};
}
function Ys(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
	for (let r of e) t.has(r) && n.add(r), t.add(r);
	return [...n];
}
function Xs(e) {
	return !Number.isFinite(e.x) || !Number.isFinite(e.y) || !Number.isFinite(e.width) || !Number.isFinite(e.height) || !Number.isFinite(e.x + e.width) || !Number.isFinite(e.y + e.height) || e.width <= 0 || e.height <= 0;
}
function Zs(e) {
	let t = e[0];
	if (!t) return [];
	let n = [];
	for (let r of e.slice(1)) {
		let e = [t.id, r.id];
		r.grid.type !== t.grid.type && n.push(Y("grid.typeMismatch", "error", e)), r.grid.size !== t.grid.size && n.push(Y("grid.sizeMismatch", "error", e)), r.grid.distance !== t.grid.distance && n.push(Y("grid.distanceMismatch", "error", e)), r.grid.units !== t.grid.units && n.push(Y("grid.unitsMismatch", "error", e));
	}
	return n;
}
function Qs(e, t, n) {
	let r = [], i = e.background;
	return n.content.backgrounds && i && (i.x !== 0 || i.y !== 0 || i.rotation !== 0 || i.scaleX !== 1 || i.scaleY !== 1) && r.push(Y("background.transform", "warning", [e.id])), e.metrics.crossSceneReferences > 0 && r.push(Y("references.crossScene", "warning", [e.id], { count: e.metrics.crossSceneReferences })), e.metrics.moduleFlagDocuments > 0 && r.push(Y("flags.moduleData", "warning", [e.id], { count: e.metrics.moduleFlagDocuments })), n.content.regions && e.metrics.unsupportedRegionBehaviors > 0 && r.push(Y("regions.unsupportedBehavior", "warning", [e.id], { count: e.metrics.unsupportedRegionBehaviors })), n.content.regions && e.metrics.attachedRegions > 0 && r.push(Y("regions.attachedUnsupported", "error", [e.id], { count: e.metrics.attachedRegions })), n.content.regions && e.metrics.unsupportedRegionShapes > 0 && r.push(Y("regions.unsupportedShape", "error", [e.id], { count: e.metrics.unsupportedRegionShapes })), n.content.regions && e.metrics.tokenRegionShapes > 0 && r.push(Y("regions.tokenShapeUnsupported", "error", [e.id], { count: e.metrics.tokenRegionShapes })), n.content.regions && e.metrics.gridRegionShapes > 0 && e.grid.type !== 1 && r.push(Y("grid.regionShapeUnsupported", "error", [e.id])), n.content.regions && t && e.metrics.gridRegionShapes > 0 && e.grid.type === 1 && e.grid.size > 0 && (t.x % e.grid.size !== 0 || t.y % e.grid.size !== 0) && r.push(Y("grid.regionAlignment", "error", [e.id])), r;
}
function $s(e, t, n) {
	let r = [], i = new Map(t.map((e) => [e.sceneId, e]));
	n.destination.name.trim() || r.push(Y("destination.nameRequired", "error", [])), e.length < 2 && r.push(Y("selection.tooFew", "error", e.map((e) => e.id)));
	let a = Ys(e.map((e) => e.id));
	a.length > 0 && r.push(Y("selection.duplicate", "error", a));
	let o = Ys(t.map((e) => e.sceneId));
	o.length > 0 && r.push(Y("layout.duplicate", "error", o));
	let s = new Set(e.map((e) => e.id)), c = [...new Set(t.map((e) => e.sceneId).filter((e) => !s.has(e)))];
	c.length > 0 && r.push(Y("layout.unknown", "error", c));
	for (let t of e) {
		let e = i.get(t.id);
		t.canMerge || r.push(Y("selection.unavailable", "error", [t.id])), e ? (Xs(e) || e.width !== t.dimensions.sceneWidth || e.height !== t.dimensions.sceneHeight) && r.push(Y("layout.invalidDimensions", "error", [t.id], {
			actualHeight: e.height,
			actualWidth: e.width,
			expectedHeight: t.dimensions.sceneHeight,
			expectedWidth: t.dimensions.sceneWidth
		})) : r.push(Y("layout.missing", "error", [t.id])), t.levels.length !== 1 && r.push(Y("levels.multiple", "error", [t.id], { count: t.levels.length })), r.push(...Qs(t, e, n));
	}
	r.push(...Zs(e)), n.content.backgrounds && new Set(e.map((e) => String(e.background?.color ?? "none"))).size > 1 && r.push(Y("background.colorMismatch", "warning", e.map((e) => e.id)));
	for (let e of ds(t)) r.push(Y("layout.overlap", "warning", [e.firstSceneId, e.secondSceneId], {
		height: e.intersection.height,
		width: e.intersection.width
	}));
	return n.content.templates && r.push(Y("content.templatesUnavailable", "error", [])), r;
}
//#endregion
//#region src/functions/scene-merger/validation/performance.ts
var ec = {
	animatedAssets: 12,
	area: 15e7,
	backgrounds: 20,
	dimension: 16384,
	lights: 500,
	regions: 500,
	sounds: 500,
	texturePixels: 25e7,
	tiles: 1e3,
	tokens: 1e3,
	walls: 5e3
};
function tc(e, t) {
	return e[t] ?? 0;
}
function nc(e, t, n) {
	let r = {}, i = rc(n);
	for (let t of e) for (let [e, n] of Object.entries(t.metrics.documents)) i && !i.has(e) || (r[e] = (r[e] ?? 0) + (n ?? 0));
	let a = !n || n.backgrounds || n.tiles;
	return {
		animatedAssets: a ? e.reduce((e, t) => e + t.metrics.animatedAssets, 0) : 0,
		backgrounds: !n || n.backgrounds ? e.reduce((e, t) => e + t.metrics.backgroundImages, 0) : 0,
		bounds: t,
		documents: r,
		sourceCount: e.length,
		texturePixels: a ? e.reduce((e, t) => e + t.metrics.texturePixels, 0) : 0
	};
}
function rc(e) {
	return e ? new Set(Object.entries(is).flatMap(([t, n]) => n && e[t] ? [n] : [])) : null;
}
function ic(e, t, n) {
	return {
		code: e,
		details: {
			threshold: n,
			value: t
		},
		overridable: !0,
		sceneIds: [],
		severity: "warning"
	};
}
function ac(e, t = ec) {
	let n = [], r = Math.max(e.bounds.width, e.bounds.height), i = e.bounds.width * e.bounds.height, a = [
		[
			"performance.dimension",
			r,
			t.dimension
		],
		[
			"performance.area",
			i,
			t.area
		],
		[
			"performance.textures",
			e.texturePixels,
			t.texturePixels
		],
		[
			"performance.backgrounds",
			e.backgrounds,
			t.backgrounds
		],
		[
			"performance.tiles",
			tc(e.documents, "Tile") + e.backgrounds,
			t.tiles
		],
		[
			"performance.animatedAssets",
			e.animatedAssets,
			t.animatedAssets
		],
		[
			"performance.walls",
			tc(e.documents, "Wall"),
			t.walls
		],
		[
			"performance.lights",
			tc(e.documents, "AmbientLight"),
			t.lights
		],
		[
			"performance.sounds",
			tc(e.documents, "AmbientSound"),
			t.sounds
		],
		[
			"performance.tokens",
			tc(e.documents, "Token"),
			t.tokens
		],
		[
			"performance.regions",
			tc(e.documents, "Region"),
			t.regions
		]
	];
	for (let [e, t, r] of a) t > r && n.push(ic(e, t, r));
	return n;
}
//#endregion
//#region src/functions/scene-merger/validation/report.ts
function oc(e) {
	let t = e.filter((e) => e.severity === "error"), n = e.filter((e) => e.severity !== "error");
	return {
		blocking: t,
		canMerge: t.length === 0,
		warnings: n
	};
}
function sc(e, t, n, r = ec) {
	let i = nc(e, ss(t), n.content);
	return oc([...$s(e, t, n), ...ac(i, r)]);
}
//#endregion
//#region src/types/scene-merger/options.ts
var cc = {
	backgrounds: "available",
	drawings: "available",
	lights: "available",
	notes: "available",
	regions: "available",
	sounds: "available",
	templates: "unavailable",
	tiles: "available",
	tokens: "available",
	walls: "available"
};
//#endregion
//#region src/state/scene-merger/derivations.ts
function lc(e) {
	let t = q(() => {
		let t = new Map(e.availableScenes.value.map((e) => [e.id, e]));
		return e.placements.value.flatMap((e) => {
			let n = t.get(e.sceneId);
			return n ? [n] : [];
		});
	}), n = q(() => e.placements.value.map(({ sceneId: e }) => e)), r = q(() => ss(e.placements.value)), i = q(() => ds(e.placements.value)), a = q(() => [...e.sceneFolders.value].sort((e, t) => e.name.localeCompare(t.name))), o = q(() => ({
		content: { ...e.content },
		destination: { ...e.destination }
	}));
	return {
		arrangementBounds: r,
		currentRequest: q(() => ({
			acknowledgedWarnings: e.warningsAcknowledged.value ? [...new Set(e.validation.value?.warnings.map(({ code: e }) => e) ?? [])] : [],
			options: o.value,
			placements: e.placements.value,
			sourceSceneIds: n.value
		})),
		folderChoices: a,
		overlaps: i,
		selectedSceneIds: n,
		selectedScenes: t
	};
}
//#endregion
//#region src/state/scene-merger/errors.ts
var uc = new Set([
	"beforeDestination",
	"calculatingBounds",
	"copyingDrawings",
	"copyingLights",
	"copyingNotes",
	"copyingRegions",
	"copyingSounds",
	"copyingTiles",
	"copyingTokens",
	"copyingWalls",
	"creatingBackgrounds",
	"creatingScene",
	"finalizing",
	"rewritingReferences",
	"validating"
]);
function dc(e, t) {
	if (typeof e != "object" || !e || !("stage" in e)) return t;
	let n = e.stage;
	return typeof n == "string" && uc.has(n) ? n : t;
}
//#endregion
//#region src/state/scene-merger/workspace.ts
function fc(e, t, n = () => !0) {
	let r = /* @__PURE__ */ F({
		panX: 24,
		panY: 24,
		zoom: .1
	}), i = /* @__PURE__ */ It({
		...ts,
		mode: ts.mode
	});
	function a(e, t) {
		n() && (i.mode = e, t !== void 0 && Number.isFinite(t) && t > 0 && (i.pixelInterval = t));
	}
	function o(e) {
		n() && (r.value = e);
	}
	function s(e, t) {
		n() && (r.value = bs(r.value, e, t));
	}
	function c(e) {
		n() && (r.value = ys(t.value, e, 36));
	}
	function l() {
		n() && (r.value = {
			panX: 24,
			panY: 24,
			zoom: .1
		});
	}
	function u(t, i) {
		if (!n()) return;
		let a = e.value.find((e) => e.sceneId === t);
		a && (r.value = {
			...r.value,
			panX: i.width / 2 - (a.x + a.width / 2) * r.value.zoom,
			panY: i.height / 2 - (a.y + a.height / 2) * r.value.zoom
		});
	}
	return {
		fitView: c,
		locateScene: u,
		resetView: l,
		setSnap: a,
		setView: o,
		snap: i,
		view: r,
		zoomAt: s
	};
}
//#endregion
//#region src/state/scene-merger/store.ts
var pc = es("scene-merger", () => {
	let e = ns("Merged Scene"), t = /* @__PURE__ */ qt(null), n = /* @__PURE__ */ F([]), r = /* @__PURE__ */ F([]), i = /* @__PURE__ */ F([]), a = /* @__PURE__ */ It({ ...e.content }), o = /* @__PURE__ */ It({ ...e.destination }), s = /* @__PURE__ */ F("loading"), c = /* @__PURE__ */ F(null), l = /* @__PURE__ */ F(!1), u = /* @__PURE__ */ F(!1), d = /* @__PURE__ */ F(null), f = /* @__PURE__ */ F(null), p = /* @__PURE__ */ F(""), m = /* @__PURE__ */ F("beforeDestination"), h = /* @__PURE__ */ F(!1), g = 0, _ = q(() => s.value === "ready"), { arrangementBounds: v, currentRequest: y, folderChoices: b, overlaps: x, selectedSceneIds: ee, selectedScenes: S } = lc({
		availableScenes: n,
		content: a,
		destination: o,
		placements: i,
		sceneFolders: r,
		validation: c,
		warningsAcknowledged: u
	}), { fitView: C, locateScene: te, resetView: ne, setSnap: re, setView: w, snap: ie, view: T, zoomAt: ae } = fc(i, v, () => _.value), oe = q(() => _.value && !l.value && !!c.value?.canMerge && (c.value?.warnings.length === 0 || u.value)), E = q(() => s.value === "merging" && !h.value && !!t.value?.cancelActiveMerge && (!d.value || d.value.stage === "validating" || d.value.stage === "calculatingBounds"));
	async function se(e, i) {
		t.value = e, o.name = i, s.value = "loading";
		try {
			[n.value, r.value] = await Promise.all([e.listScenes(), e.listSceneFolders()]), s.value = "ready", await me();
		} catch (e) {
			be(e, "beforeDestination");
		}
	}
	function D(e) {
		if (!_.value || ee.value.includes(e)) return;
		let t = n.value.find(({ id: t }) => t === e);
		if (!t) return;
		let r = v.value, a = i.value.length === 0 ? 0 : r.maxX + Math.max(50, t.grid.size);
		i.value = [...i.value, {
			height: t.dimensions.sceneHeight,
			order: i.value.length,
			sceneId: e,
			width: t.dimensions.sceneWidth,
			x: a,
			y: i.value.length === 0 ? 0 : r.minY
		}], i.value.length === 1 && (ie.gridSize = t.grid.size), ye(), me();
	}
	function ce(e) {
		_.value && (i.value = i.value.filter((t) => t.sceneId !== e).map((e, t) => ({
			...e,
			order: t
		})), ye(), me());
	}
	function le() {
		_.value && (i.value = [], ye(), me());
	}
	function ue(e, t) {
		if (!_.value) return;
		let n = [...i.value], r = n.findIndex((t) => t.sceneId === e), a = r + t;
		r < 0 || a < 0 || a >= n.length || ([n[r], n[a]] = [n[a], n[r]], i.value = n.map((e, t) => ({
			...e,
			order: t
		})), ye(), me());
	}
	function de(e, t, n, r = !0) {
		if (!_.value) return;
		let a = i.value.find((t) => t.sceneId === e);
		if (!a) return;
		let o = {
			...a,
			x: Math.round(t),
			y: Math.round(n)
		}, s = r ? gs(o, ie, i.value.filter((t) => t.sceneId !== e)) : o;
		i.value = i.value.map((t) => t.sceneId === e ? s : t), ye();
	}
	function fe(e, t) {
		!_.value || cc[e] === "unavailable" || (a[e] = t, ye(), me());
	}
	function pe(e, t) {
		_.value && (o[e] = t, ye(), me());
	}
	async function me() {
		if (!t.value || !_.value) return;
		let e = ++g;
		l.value = !0;
		try {
			let n = await t.value.validate(y.value);
			e === g && (c.value = n);
		} catch (t) {
			e === g && be(t, "beforeDestination");
		} finally {
			e === g && (l.value = !1);
		}
	}
	async function he() {
		if (!(!t.value || !_.value) && (await me(), oe.value)) {
			s.value = "merging", d.value = null, h.value = !1;
			try {
				f.value = await t.value.merge(y.value, (e) => {
					d.value = e;
				}), s.value = "success";
			} catch (e) {
				be(e, dc(e, d.value?.stage ?? "beforeDestination"));
			}
		}
	}
	async function O() {
		E.value && (h.value = !0, await t.value?.cancelActiveMerge?.());
	}
	async function ge() {
		f.value && t.value && await t.value.openScene(f.value.destinationSceneId);
	}
	function _e(e) {
		_.value && (u.value = e);
	}
	function ve() {
		s.value = "ready", d.value = null, h.value = !1, p.value = "", me();
	}
	function ye() {
		u.value = !1, f.value = null;
	}
	function be(e, t) {
		p.value = e instanceof Error ? e.message : String(e), m.value = t, s.value = "failure";
	}
	return {
		arrangementBounds: v,
		availableScenes: n,
		canCancel: E,
		canMerge: oe,
		cancelMerge: O,
		cancelRequested: h,
		clearScenes: le,
		content: a,
		destination: o,
		failureMessage: p,
		failureStage: m,
		fitView: C,
		folderChoices: b,
		initialize: se,
		locateScene: te,
		merge: he,
		moveScene: de,
		openDestination: ge,
		overlaps: x,
		placements: i,
		progress: d,
		removeScene: ce,
		reorderScene: ue,
		resetView: ne,
		returnToEditing: ve,
		selectedSceneIds: ee,
		selectedScenes: S,
		setContent: fe,
		setDestination: pe,
		setSnap: re,
		setView: w,
		setWarningsAcknowledged: _e,
		setupEditable: _,
		snap: ie,
		status: s,
		summary: f,
		validateNow: me,
		validating: l,
		validation: c,
		view: T,
		warningsAcknowledged: u,
		zoomAt: ae,
		addScene: D
	};
}), mc = { class: "dui-card dui-card-border tw:bg-base-200" }, hc = {
	key: 0,
	class: "dui-card-body tw:flex-row tw:flex-wrap tw:items-center tw:justify-between tw:gap-3 tw:p-3"
}, gc = { class: "dui-card-title tw:text-base" }, _c = { class: "tw:m-0 tw:text-xs tw:opacity-65" }, vc = { class: "tw:flex tw:items-center tw:gap-2" }, yc = {
	key: 0,
	class: "tw:max-w-72 tw:text-right tw:text-xs tw:opacity-65"
}, bc = ["disabled"], xc = {
	key: 1,
	class: "dui-card-body tw:gap-3 tw:p-3"
}, Sc = { class: "tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-2" }, Cc = { class: "dui-card-title tw:text-base" }, wc = { class: "tw:m-0 tw:text-xs tw:opacity-70" }, Tc = { key: 0 }, Ec = {
	key: 1,
	class: "dui-badge dui-badge-ghost dui-badge-sm"
}, Dc = ["value"], Oc = { class: "tw:flex tw:justify-between tw:text-[0.68rem] tw:opacity-65" }, kc = {
	key: 2,
	class: "dui-card-body tw:gap-3 tw:p-3"
}, Ac = {
	role: "alert",
	class: "dui-alert dui-alert-success dui-alert-soft"
}, jc = { class: "tw:min-w-0 tw:flex-1" }, Mc = { class: "tw:m-0 tw:font-semibold" }, Nc = { class: "tw:m-0 tw:text-sm" }, Pc = { class: "tw:grid tw:gap-3 tw:md:grid-cols-2 tw:xl:grid-cols-4" }, Fc = { class: "tw:rounded-box tw:bg-base-300/50 tw:p-3" }, Ic = { class: "tw:mt-0 tw:mb-2 tw:text-sm tw:font-semibold" }, Lc = { class: "tw:m-0 tw:grid tw:list-none tw:gap-1 tw:p-0 tw:text-xs" }, Rc = {
	key: 0,
	class: "tw:opacity-60"
}, zc = { class: "tw:rounded-box tw:bg-base-300/50 tw:p-3" }, Bc = { class: "tw:mt-0 tw:mb-2 tw:text-sm tw:font-semibold" }, Vc = { class: "tw:m-0 tw:grid tw:list-none tw:gap-1 tw:p-0 tw:text-xs" }, Hc = {
	key: 0,
	class: "tw:opacity-60"
}, Uc = { class: "tw:rounded-box tw:bg-base-300/50 tw:p-3" }, Wc = { class: "tw:mt-0 tw:mb-2 tw:text-sm tw:font-semibold" }, Gc = { class: "tw:m-0 tw:grid tw:grid-cols-[1fr_auto] tw:gap-x-3 tw:gap-y-1 tw:text-xs" }, Kc = { class: "tw:m-0 tw:font-semibold" }, qc = { class: "tw:m-0 tw:font-semibold" }, Jc = { class: "tw:m-0 tw:font-semibold" }, Yc = { class: "tw:rounded-box tw:bg-base-300/50 tw:p-3" }, Xc = { class: "tw:mt-0 tw:mb-2 tw:text-sm tw:font-semibold" }, Zc = { class: "tw:m-0 tw:max-h-24 tw:overflow-auto tw:pl-4 tw:text-xs" }, Qc = {
	key: 0,
	class: "tw:list-none tw:opacity-60"
}, $c = { class: "dui-card-actions tw:justify-end" }, el = {
	key: 3,
	class: "dui-card-body tw:gap-3 tw:p-3"
}, tl = {
	role: "alert",
	class: "dui-alert dui-alert-error dui-alert-soft"
}, nl = { class: "tw:min-w-0 tw:flex-1" }, rl = { class: "tw:m-0 tw:font-semibold" }, il = { class: "tw:m-0 tw:text-sm" }, al = { class: "tw:mt-1 tw:block tw:break-words tw:text-xs" }, ol = { class: "tw:mt-2 tw:mb-0 tw:text-xs" }, sl = /* @__PURE__ */ Jn({
	__name: "ExecutionPanel",
	props: { t: { type: Function } },
	setup(e) {
		let t = e, n = pc(), r = q(() => {
			let e = n.progress;
			return e && e.total > 0 ? Math.round(e.completed / e.total * 100) : 0;
		}), i = q(() => o(n.summary?.copied)), a = q(() => o(n.summary?.skipped));
		function o(e) {
			return Object.entries(e ?? {}).filter((e) => typeof e[1] == "number" && e[1] > 0).sort(([e], [t]) => e.localeCompare(t));
		}
		function s(e) {
			let n = e.indexOf(":"), r = n < 0 ? e : e.slice(0, n), i = n < 0 ? "" : e.slice(n + 1), a = `FVTT_SCENE_MERGER.Validation.Issues.${r.replace(".", "_")}`, o = t.t(a);
			return o === a ? e : i ? `${o} — ${i}` : o;
		}
		return (t, o) => (V(), H("footer", mc, [I(n).status === "ready" ? (V(), H("div", hc, [U("div", null, [U("h2", gc, k(e.t("FVTT_SCENE_MERGER.Execution.Title")), 1), U("p", _c, k(e.t("FVTT_SCENE_MERGER.Execution.ReadySummary", {
			count: I(n).selectedScenes.length,
			width: Math.round(I(n).arrangementBounds.width),
			height: Math.round(I(n).arrangementBounds.height)
		})), 1)]), U("div", vc, [I(n).canMerge ? G("", !0) : (V(), H("span", yc, k(e.t("FVTT_SCENE_MERGER.Execution.ResolveIssues")), 1)), U("button", {
			class: "dui-btn dui-btn-primary",
			type: "button",
			disabled: !I(n).canMerge,
			onClick: o[0] ||= (e) => I(n).merge()
		}, k(e.t("FVTT_SCENE_MERGER.Actions.Merge")), 9, bc)])])) : I(n).status === "merging" ? (V(), H("div", xc, [
			U("div", Sc, [U("div", null, [U("h2", Cc, k(e.t("FVTT_SCENE_MERGER.Execution.Merging")), 1), U("p", wc, [Yi(k(I(n).progress ? e.t(`FVTT_SCENE_MERGER.MergeStage.${I(n).progress.stage}`) : e.t("FVTT_SCENE_MERGER.MergeStage.validating")) + " ", 1), I(n).progress?.detail ? (V(), H("span", Tc, " · " + k(I(n).progress.detail), 1)) : G("", !0)])]), I(n).canCancel ? (V(), H("button", {
				key: 0,
				class: "dui-btn dui-btn-warning dui-btn-outline dui-btn-sm",
				type: "button",
				onClick: o[1] ||= (e) => I(n).cancelMerge()
			}, k(I(n).cancelRequested ? e.t("FVTT_SCENE_MERGER.Actions.Cancelling") : e.t("FVTT_SCENE_MERGER.Actions.Cancel")), 1)) : (V(), H("span", Ec, k(e.t("FVTT_SCENE_MERGER.Execution.CancellationClosed")), 1))]),
			U("progress", {
				class: "dui-progress tw:w-full",
				value: r.value,
				max: "100"
			}, null, 8, Dc),
			U("div", Oc, [U("span", null, k(e.t("FVTT_SCENE_MERGER.Execution.SourceSafety")), 1), U("span", null, k(r.value) + "%", 1)])
		])) : I(n).status === "success" && I(n).summary ? (V(), H("div", kc, [
			U("div", Ac, [
				o[5] ||= U("span", { "aria-hidden": "true" }, "✓", -1),
				U("div", jc, [U("h2", Mc, k(e.t("FVTT_SCENE_MERGER.Results.SuccessTitle", { name: I(n).summary.destinationSceneName })), 1), U("p", Nc, k(e.t("FVTT_SCENE_MERGER.Results.SuccessDimensions", {
					width: I(n).summary.destinationWidth,
					height: I(n).summary.destinationHeight,
					count: I(n).summary.sourceCount
				})), 1)]),
				U("button", {
					class: "dui-btn dui-btn-sm",
					type: "button",
					onClick: o[2] ||= (e) => I(n).openDestination()
				}, k(e.t("FVTT_SCENE_MERGER.Actions.OpenScene")), 1)
			]),
			U("div", Pc, [
				U("section", Fc, [U("h3", Ic, k(e.t("FVTT_SCENE_MERGER.Results.Copied")), 1), U("ul", Lc, [(V(!0), H(B, null, yr(i.value, ([t, n]) => (V(), H("li", {
					key: t,
					class: "tw:flex tw:justify-between tw:gap-2"
				}, [U("span", null, k(e.t(`FVTT_SCENE_MERGER.Documents.${t}`)), 1), U("strong", null, k(n), 1)]))), 128)), i.value.length === 0 ? (V(), H("li", Rc, k(e.t("FVTT_SCENE_MERGER.Results.None")), 1)) : G("", !0)])]),
				U("section", zc, [U("h3", Bc, k(e.t("FVTT_SCENE_MERGER.Results.Skipped")), 1), U("ul", Vc, [(V(!0), H(B, null, yr(a.value, ([t, n]) => (V(), H("li", {
					key: t,
					class: "tw:flex tw:justify-between tw:gap-2"
				}, [U("span", null, k(e.t(`FVTT_SCENE_MERGER.Documents.${t}`)), 1), U("strong", null, k(n), 1)]))), 128)), a.value.length === 0 ? (V(), H("li", Hc, k(e.t("FVTT_SCENE_MERGER.Results.NoneSkipped")), 1)) : G("", !0)])]),
				U("section", Uc, [U("h3", Wc, k(e.t("FVTT_SCENE_MERGER.Results.Diagnostics")), 1), U("dl", Gc, [
					U("dt", null, k(e.t("FVTT_SCENE_MERGER.Results.Rewritten")), 1),
					U("dd", Kc, k(I(n).summary.referencesRewritten), 1),
					U("dt", null, k(e.t("FVTT_SCENE_MERGER.Results.Unresolved")), 1),
					U("dd", qc, k(I(n).summary.unresolvedReferences.length), 1),
					U("dt", null, k(e.t("FVTT_SCENE_MERGER.Results.Warnings")), 1),
					U("dd", Jc, k(I(n).summary.warnings.length), 1)
				])]),
				U("section", Yc, [U("h3", Xc, k(e.t("FVTT_SCENE_MERGER.Results.Review")), 1), U("ul", Zc, [
					(V(!0), H(B, null, yr(I(n).summary.warnings, (e) => (V(), H("li", { key: e }, k(s(e)), 1))), 128)),
					(V(!0), H(B, null, yr(I(n).summary.unresolvedReferences, (e) => (V(), H("li", { key: e }, k(e), 1))), 128)),
					!I(n).summary.warnings.length && !I(n).summary.unresolvedReferences.length ? (V(), H("li", Qc, k(e.t("FVTT_SCENE_MERGER.Results.NoReviewItems")), 1)) : G("", !0)
				])])
			]),
			U("div", $c, [U("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				type: "button",
				onClick: o[3] ||= (e) => I(n).returnToEditing()
			}, k(e.t("FVTT_SCENE_MERGER.Actions.MergeAnother")), 1)])
		])) : I(n).status === "failure" ? (V(), H("div", el, [U("div", tl, [
			o[6] ||= U("span", { "aria-hidden": "true" }, "×", -1),
			U("div", nl, [
				U("h2", rl, k(e.t("FVTT_SCENE_MERGER.Results.FailureTitle")), 1),
				U("p", il, k(e.t("FVTT_SCENE_MERGER.Results.FailureStage", { stage: e.t(`FVTT_SCENE_MERGER.MergeStage.${I(n).failureStage}`) })), 1),
				U("code", al, k(I(n).failureMessage), 1),
				U("p", ol, k(e.t("FVTT_SCENE_MERGER.Results.FailureSafety")), 1)
			]),
			U("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: o[4] ||= (e) => I(n).returnToEditing()
			}, k(e.t("FVTT_SCENE_MERGER.Actions.BackToSetup")), 1)
		])])) : G("", !0)]));
	}
}), cl = { class: "tw:flex tw:flex-wrap tw:items-end tw:justify-between tw:gap-2" }, ll = { class: "tw:flex tw:flex-wrap tw:items-end tw:gap-2" }, ul = { class: "dui-fieldset tw:p-0" }, dl = { class: "dui-fieldset-legend tw:py-0 tw:text-[0.68rem]" }, fl = ["value", "disabled"], pl = { value: "none" }, ml = { value: "pixel" }, hl = { value: "grid" }, gl = { value: "edge" }, _l = {
	key: 0,
	class: "dui-fieldset tw:w-24 tw:p-0"
}, vl = { class: "dui-fieldset-legend tw:py-0 tw:text-[0.68rem]" }, yl = ["value", "disabled"], bl = {
	key: 1,
	class: "dui-badge dui-badge-outline dui-badge-sm tw:mb-1.5"
}, xl = { class: "tw:flex tw:items-center tw:gap-1" }, Sl = ["disabled", "aria-label"], Cl = { class: "dui-badge dui-badge-ghost tw:min-w-16 tw:justify-center" }, wl = ["disabled", "aria-label"], Tl = ["disabled"], El = ["disabled"], Dl = /* @__PURE__ */ Jn({
	__name: "LayoutToolbar",
	props: { t: { type: Function } },
	emits: [
		"fit",
		"reset",
		"zoom"
	],
	setup(e, { emit: t }) {
		let n = t, r = pc();
		function i(e) {
			r.setSnap(e.currentTarget.value);
		}
		function a(e) {
			r.setSnap(r.snap.mode, Number(e.currentTarget.value));
		}
		return (t, o) => (V(), H("div", cl, [U("div", ll, [
			U("fieldset", ul, [U("legend", dl, k(e.t("FVTT_SCENE_MERGER.Layout.SnapMode")), 1), U("select", {
				class: "dui-select dui-select-sm",
				value: I(r).snap.mode,
				disabled: !I(r).setupEditable,
				onChange: i
			}, [
				U("option", pl, k(e.t("FVTT_SCENE_MERGER.Layout.Snap.none")), 1),
				U("option", ml, k(e.t("FVTT_SCENE_MERGER.Layout.Snap.pixel")), 1),
				U("option", hl, k(e.t("FVTT_SCENE_MERGER.Layout.Snap.grid")), 1),
				U("option", gl, k(e.t("FVTT_SCENE_MERGER.Layout.Snap.edge")), 1)
			], 40, fl)]),
			I(r).snap.mode === "pixel" ? (V(), H("fieldset", _l, [U("legend", vl, k(e.t("FVTT_SCENE_MERGER.Layout.Interval")), 1), U("input", {
				class: "dui-input dui-input-sm tw:w-full",
				type: "number",
				min: "1",
				step: "1",
				value: I(r).snap.pixelInterval,
				disabled: !I(r).setupEditable,
				onChange: a
			}, null, 40, yl)])) : G("", !0),
			I(r).snap.mode === "grid" ? (V(), H("span", bl, k(e.t("FVTT_SCENE_MERGER.Layout.GridSize", { size: I(r).snap.gridSize })), 1)) : G("", !0)
		]), U("div", xl, [
			U("button", {
				class: "dui-btn dui-btn-sm dui-btn-square",
				type: "button",
				disabled: !I(r).setupEditable,
				"aria-label": e.t("FVTT_SCENE_MERGER.Layout.ZoomOut"),
				onClick: o[0] ||= (e) => n("zoom", .8)
			}, " − ", 8, Sl),
			U("span", Cl, k(Math.round(I(r).view.zoom * 100)) + "%", 1),
			U("button", {
				class: "dui-btn dui-btn-sm dui-btn-square",
				type: "button",
				disabled: !I(r).setupEditable,
				"aria-label": e.t("FVTT_SCENE_MERGER.Layout.ZoomIn"),
				onClick: o[1] ||= (e) => n("zoom", 1.25)
			}, " + ", 8, wl),
			U("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				disabled: !I(r).setupEditable,
				onClick: o[2] ||= (e) => n("fit")
			}, k(e.t("FVTT_SCENE_MERGER.Layout.ZoomFit")), 9, Tl),
			U("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				type: "button",
				disabled: !I(r).setupEditable,
				onClick: o[3] ||= (e) => n("reset")
			}, k(e.t("FVTT_SCENE_MERGER.Layout.ResetView")), 9, El)
		])]));
	}
}), Ol = ["aria-disabled"], kl = { class: "tw:absolute tw:-top-6 tw:left-0 tw:whitespace-nowrap tw:text-[0.68rem] tw:text-accent" }, Al = [
	"disabled",
	"aria-label",
	"onPointerdown",
	"onKeydown"
], jl = ["src"], Ml = { class: "tw:absolute tw:inset-x-2 tw:top-1.5 tw:min-w-0" }, Nl = { class: "tw:block tw:truncate tw:text-xs" }, Pl = { class: "tw:block tw:truncate tw:text-[0.65rem] tw:opacity-80" }, Fl = { class: "tw:absolute tw:right-1.5 tw:bottom-1 tw:rounded-field tw:bg-neutral/80 tw:px-1.5 tw:py-0.5 tw:text-[0.62rem]" }, Il = {
	key: 1,
	class: "tw:pointer-events-none tw:absolute tw:inset-0 tw:flex tw:items-center tw:justify-center tw:p-8 tw:text-center tw:text-sm tw:opacity-60"
}, Ll = { class: "tw:pointer-events-none tw:absolute tw:right-2 tw:bottom-2 tw:rounded-field tw:bg-base-300/85 tw:px-2 tw:py-1 tw:text-[0.65rem] tw:opacity-75" }, Rl = /* @__PURE__ */ Jn({
	__name: "WorkspaceCanvas",
	props: { t: { type: Function } },
	setup(e, { expose: t }) {
		let n = pc(), r = /* @__PURE__ */ F(null), i = /* @__PURE__ */ F(null), a = q(() => new Map(n.availableScenes.map((e) => [e.id, e]))), o = q(() => new Set(n.overlaps.flatMap((e) => [e.firstSceneId, e.secondSceneId]))), s = q(() => ({
			height: r.value?.clientHeight ?? 480,
			width: r.value?.clientWidth ?? 800
		}));
		function c(e) {
			return {
				height: `${Math.max(8, e.height * n.view.zoom)}px`,
				left: `${n.view.panX + e.x * n.view.zoom}px`,
				top: `${n.view.panY + e.y * n.view.zoom}px`,
				width: `${Math.max(8, e.width * n.view.zoom)}px`,
				zIndex: e.order + 2
			};
		}
		let l = q(() => ({
			height: `${n.arrangementBounds.height * n.view.zoom}px`,
			left: `${n.view.panX + n.arrangementBounds.minX * n.view.zoom}px`,
			top: `${n.view.panY + n.arrangementBounds.minY * n.view.zoom}px`,
			width: `${n.arrangementBounds.width * n.view.zoom}px`
		})), u = q(() => ({
			backgroundPosition: `${n.view.panX}px ${n.view.panY}px`,
			backgroundSize: `${Math.max(12, 100 * n.view.zoom)}px ${Math.max(12, 100 * n.view.zoom)}px`
		}));
		function d(e) {
			e.currentTarget.setPointerCapture(e.pointerId);
		}
		function f(e) {
			e.button === 0 && (d(e), i.value = {
				kind: "pan",
				panX: n.view.panX,
				panY: n.view.panY,
				pointerId: e.pointerId,
				startX: e.clientX,
				startY: e.clientY
			});
		}
		function p(e, t) {
			e.button === 0 && (e.stopPropagation(), d(e), i.value = {
				kind: "scene",
				originX: t.x,
				originY: t.y,
				pointerId: e.pointerId,
				sceneId: t.sceneId,
				startX: e.clientX,
				startY: e.clientY
			});
		}
		function m(e) {
			let t = i.value;
			if (!t || t.pointerId !== e.pointerId) return;
			let r = e.clientX - t.startX, a = e.clientY - t.startY;
			t.kind === "pan" ? n.setView({
				zoom: n.view.zoom,
				panX: t.panX + r,
				panY: t.panY + a
			}) : n.moveScene(t.sceneId, t.originX + r / n.view.zoom, t.originY + a / n.view.zoom, !1);
		}
		function h(e) {
			let t = i.value;
			if (!(!t || t.pointerId !== e.pointerId)) {
				if (t.kind === "scene") {
					let e = n.placements.find(({ sceneId: e }) => e === t.sceneId);
					e && n.moveScene(t.sceneId, e.x, e.y, !0), n.validateNow();
				}
				i.value = null;
			}
		}
		function g(e) {
			let t = r.value?.getBoundingClientRect();
			t && n.zoomAt(n.view.zoom * (e.deltaY < 0 ? 1.14 : .88), {
				x: e.clientX - t.left,
				y: e.clientY - t.top
			});
		}
		function _(e, t) {
			let r = e.shiftKey ? 50 : 10, i = {
				ArrowDown: [0, r],
				ArrowLeft: [-r, 0],
				ArrowRight: [r, 0],
				ArrowUp: [0, -r]
			}[e.key];
			i && (e.preventDefault(), n.moveScene(t.sceneId, t.x + i[0], t.y + i[1], !0), n.validateNow());
		}
		function v() {
			n.fitView(s.value);
		}
		function y() {
			n.resetView();
		}
		function b(e) {
			n.locateScene(e, s.value);
		}
		function x(e) {
			n.zoomAt(n.view.zoom * e, {
				x: s.value.width / 2,
				y: s.value.height / 2
			});
		}
		return t({
			fit: v,
			locate: b,
			reset: y,
			zoom: x
		}), (t, i) => (V(), H("div", {
			ref_key: "workspace",
			ref: r,
			class: O(["layout-workspace tw:relative tw:min-h-[440px] tw:touch-none tw:overflow-hidden tw:rounded-box tw:border tw:border-base-300 tw:bg-base-100 tw:select-none", { "tw:pointer-events-none tw:opacity-70": !I(n).setupEditable }]),
			"aria-disabled": !I(n).setupEditable,
			style: de(u.value),
			onPointerdown: f,
			onPointermove: m,
			onPointerup: h,
			onPointercancel: h,
			onWheel: ho(g, ["prevent"])
		}, [
			I(n).placements.length ? (V(), H("div", {
				key: 0,
				class: "layout-total-bounds tw:pointer-events-none tw:absolute tw:border tw:border-dashed tw:border-accent/70",
				style: de(l.value)
			}, [U("span", kl, k(e.t("FVTT_SCENE_MERGER.Layout.TotalBounds")), 1)], 4)) : G("", !0),
			(V(!0), H(B, null, yr(I(n).placements, (t) => (V(), H("button", {
				key: t.sceneId,
				class: O(["layout-scene tw:absolute tw:overflow-hidden tw:rounded-field tw:border-2 tw:border-secondary tw:bg-neutral tw:p-0 tw:text-left tw:text-neutral-content tw:shadow-lg tw:focus:outline-2 tw:focus:outline-accent", { "layout-scene-overlap": o.value.has(t.sceneId) }]),
				style: de(c(t)),
				type: "button",
				disabled: !I(n).setupEditable,
				"aria-label": e.t("FVTT_SCENE_MERGER.Layout.DragScene", { name: a.value.get(t.sceneId)?.name ?? t.sceneId }),
				onPointerdown: (e) => p(e, t),
				onKeydown: (e) => _(e, t)
			}, [
				a.value.get(t.sceneId)?.thumbnail ? (V(), H("img", {
					key: 0,
					class: "tw:absolute tw:inset-0 tw:h-full tw:w-full tw:object-cover tw:opacity-45",
					src: a.value.get(t.sceneId)?.thumbnail ?? "",
					alt: "",
					draggable: "false"
				}, null, 8, jl)) : G("", !0),
				i[0] ||= U("span", { class: "tw:absolute tw:inset-0 tw:bg-neutral/30" }, null, -1),
				U("span", Ml, [U("strong", Nl, k(a.value.get(t.sceneId)?.name), 1), U("small", Pl, k(t.width) + " × " + k(t.height), 1)]),
				U("span", Fl, k(Math.round(t.x)) + ", " + k(Math.round(t.y)), 1)
			], 46, Al))), 128)),
			I(n).placements.length === 0 ? (V(), H("div", Il, k(e.t("FVTT_SCENE_MERGER.Layout.Empty")), 1)) : G("", !0),
			U("div", Ll, k(e.t("FVTT_SCENE_MERGER.Layout.PanZoomHint")), 1)
		], 46, Ol));
	}
}), zl = { class: "dui-card dui-card-border tw:min-w-0 tw:bg-base-200" }, Bl = { class: "dui-card-body tw:gap-3 tw:p-3" }, Vl = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-2" }, Hl = { class: "dui-card-title tw:text-base" }, Ul = { class: "tw:m-0 tw:text-xs tw:opacity-65" }, Wl = { class: "tw:flex tw:flex-wrap tw:gap-1" }, Gl = { class: "dui-badge dui-badge-outline dui-badge-sm" }, Kl = { class: "dui-badge dui-badge-outline dui-badge-sm" }, ql = { class: "dui-badge dui-badge-secondary dui-badge-sm" }, Jl = {
	key: 0,
	role: "alert",
	class: "dui-alert dui-alert-warning dui-alert-soft tw:py-2 tw:text-sm"
}, Yl = /* @__PURE__ */ Jn({
	__name: "LayoutPanel",
	props: { t: { type: Function } },
	setup(e, { expose: t }) {
		let n = pc(), r = /* @__PURE__ */ F(null);
		Bn(() => n.placements.length, async (e, t) => {
			e > 0 && t === 0 && (await bn(), r.value?.fit());
		});
		function i(e) {
			r.value?.locate(e);
		}
		return t({ locateScene: i }), (t, i) => (V(), H("section", zl, [U("div", Bl, [
			U("div", Vl, [U("div", null, [U("h2", Hl, k(e.t("FVTT_SCENE_MERGER.Layout.Title")), 1), U("p", Ul, k(e.t("FVTT_SCENE_MERGER.Layout.Help")), 1)]), U("div", Wl, [
				U("span", Gl, "X " + k(Math.round(I(n).arrangementBounds.minX)) + " → " + k(Math.round(I(n).arrangementBounds.maxX)), 1),
				U("span", Kl, "Y " + k(Math.round(I(n).arrangementBounds.minY)) + " → " + k(Math.round(I(n).arrangementBounds.maxY)), 1),
				U("span", ql, k(Math.round(I(n).arrangementBounds.width).toLocaleString()) + " × " + k(Math.round(I(n).arrangementBounds.height).toLocaleString()), 1)
			])]),
			W(Dl, {
				t: e.t,
				onFit: i[0] ||= (e) => r.value?.fit(),
				onReset: i[1] ||= (e) => r.value?.reset(),
				onZoom: i[2] ||= (e) => r.value?.zoom(e)
			}, null, 8, ["t"]),
			W(Rl, {
				ref_key: "workspaceComponent",
				ref: r,
				t: e.t
			}, null, 8, ["t"]),
			I(n).overlaps.length ? (V(), H("div", Jl, [i[3] ||= U("span", { "aria-hidden": "true" }, "△", -1), U("span", null, k(e.t("FVTT_SCENE_MERGER.Layout.OverlapWarning", { count: I(n).overlaps.length })), 1)])) : G("", !0)
		])]));
	}
}), Xl = { class: "dui-card dui-card-border tw:bg-base-200" }, Zl = { class: "dui-card-body tw:gap-4 tw:p-3" }, Ql = { class: "dui-card-title tw:text-base" }, $l = { class: "tw:m-0 tw:text-xs tw:opacity-65" }, eu = { class: "tw:grid tw:gap-4 tw:lg:grid-cols-2" }, tu = { class: "dui-fieldset tw:min-w-0 tw:rounded-box tw:bg-base-300/50 tw:p-3" }, nu = { class: "dui-fieldset-legend" }, ru = { class: "tw:grid tw:gap-x-4 tw:gap-y-2 tw:sm:grid-cols-2" }, iu = { class: "tw:min-w-0" }, au = { class: "tw:block tw:text-sm tw:font-medium" }, ou = { class: "tw:block tw:text-[0.68rem] tw:opacity-60" }, su = {
	key: 0,
	class: "dui-badge dui-badge-warning dui-badge-soft dui-badge-xs tw:mt-1"
}, cu = [
	"checked",
	"disabled",
	"onChange"
], lu = { class: "dui-fieldset tw:min-w-0 tw:rounded-box tw:bg-base-300/50 tw:p-3" }, uu = { class: "dui-fieldset-legend" }, du = {
	class: "dui-label tw:pb-0 tw:text-xs",
	for: "scene-merger-name"
}, fu = ["value", "disabled"], pu = {
	class: "dui-label tw:pb-0 tw:text-xs",
	for: "scene-merger-folder"
}, mu = ["value", "disabled"], hu = { value: "" }, gu = ["value"], _u = { class: "tw:mt-2 tw:grid tw:gap-2" }, vu = { class: "tw:block" }, yu = { class: "tw:block tw:text-[0.68rem] tw:opacity-60" }, bu = [
	"checked",
	"disabled",
	"onChange"
], xu = /* @__PURE__ */ Jn({
	__name: "MergeOptionsPanel",
	props: { t: { type: Function } },
	setup(e) {
		let t = pc(), n = [
			"backgrounds",
			"tiles",
			"walls",
			"lights",
			"sounds",
			"drawings",
			"notes",
			"regions",
			"tokens",
			"templates"
		];
		function r(e, n) {
			t.setContent(e, n.currentTarget.checked);
		}
		function i(e) {
			t.setDestination("name", e.currentTarget.value.trim());
		}
		function a(e) {
			t.setDestination("folderId", e.currentTarget.value || null);
		}
		function o(e, n) {
			t.setDestination(e, n.currentTarget.checked);
		}
		return (s, c) => (V(), H("section", Xl, [U("div", Zl, [U("div", null, [U("h2", Ql, k(e.t("FVTT_SCENE_MERGER.Options.Title")), 1), U("p", $l, k(e.t("FVTT_SCENE_MERGER.Options.Help")), 1)]), U("div", eu, [U("fieldset", tu, [U("legend", nu, k(e.t("FVTT_SCENE_MERGER.Options.ContentTitle")), 1), U("div", ru, [(V(), H(B, null, yr(n, (n) => U("label", {
			key: n,
			class: "tw:flex tw:min-w-0 tw:items-start tw:justify-between tw:gap-2 tw:rounded-field tw:bg-base-200 tw:p-2"
		}, [U("span", iu, [
			U("span", au, k(e.t(`FVTT_SCENE_MERGER.Options.Content.${n}.Label`)), 1),
			U("span", ou, k(e.t(`FVTT_SCENE_MERGER.Options.Content.${n}.Help`)), 1),
			I(cc)[n] === "unavailable" ? (V(), H("span", su, k(e.t("FVTT_SCENE_MERGER.Options.UnavailableV14")), 1)) : G("", !0)
		]), U("input", {
			class: "dui-toggle dui-toggle-sm",
			type: "checkbox",
			checked: I(t).content[n],
			disabled: I(cc)[n] === "unavailable" || !I(t).setupEditable,
			onChange: (e) => r(n, e)
		}, null, 40, cu)])), 64))])]), U("fieldset", lu, [
			U("legend", uu, k(e.t("FVTT_SCENE_MERGER.Options.DestinationTitle")), 1),
			U("label", du, k(e.t("FVTT_SCENE_MERGER.Options.Name")), 1),
			U("input", {
				id: "scene-merger-name",
				class: "dui-input dui-input-sm tw:w-full",
				type: "text",
				value: I(t).destination.name,
				disabled: !I(t).setupEditable,
				onChange: i
			}, null, 40, fu),
			U("label", pu, k(e.t("FVTT_SCENE_MERGER.Options.Folder")), 1),
			U("select", {
				id: "scene-merger-folder",
				class: "dui-select dui-select-sm tw:w-full",
				value: I(t).destination.folderId ?? "",
				disabled: !I(t).setupEditable,
				onChange: a
			}, [U("option", hu, k(e.t("FVTT_SCENE_MERGER.Selection.RootFolder")), 1), (V(!0), H(B, null, yr(I(t).folderChoices, (e) => (V(), H("option", {
				key: e.id,
				value: e.id
			}, k(e.name), 9, gu))), 128))], 40, mu),
			U("div", _u, [(V(), H(B, null, yr([
				"navigation",
				"openAfterMerge",
				"activateAfterMerge",
				"lockBackgroundTiles"
			], (n) => U("label", {
				key: n,
				class: "tw:flex tw:items-center tw:justify-between tw:gap-3 tw:text-sm"
			}, [U("span", null, [U("span", vu, k(e.t(`FVTT_SCENE_MERGER.Options.Destination.${n}.Label`)), 1), U("span", yu, k(e.t(`FVTT_SCENE_MERGER.Options.Destination.${n}.Help`)), 1)]), U("input", {
				class: "dui-checkbox dui-checkbox-sm",
				type: "checkbox",
				checked: I(t).destination[n],
				disabled: !I(t).setupEditable,
				onChange: (e) => o(n, e)
			}, null, 40, bu)])), 64))])
		])])])]));
	}
}), Su = { class: "dui-card dui-card-border tw:min-h-0 tw:bg-base-200" }, Cu = { class: "dui-card-body tw:min-h-0 tw:gap-3 tw:p-3" }, wu = { class: "tw:flex tw:items-center tw:justify-between tw:gap-2" }, Tu = { class: "dui-card-title tw:text-base" }, Eu = { class: "tw:m-0 tw:text-xs tw:opacity-65" }, Du = { class: "dui-badge dui-badge-neutral dui-badge-sm" }, Ou = { class: "dui-input dui-input-sm tw:flex tw:w-full tw:items-center tw:gap-2" }, ku = ["disabled", "placeholder"], Au = { class: "scene-list-scroll tw:min-h-32 tw:flex-1 tw:overflow-auto tw:rounded-box tw:bg-base-300/60 tw:p-1" }, ju = {
	key: 0,
	class: "dui-list tw:m-0 tw:list-none tw:gap-1 tw:p-0"
}, Mu = { class: "tw:h-10 tw:w-12 tw:overflow-hidden tw:rounded-field tw:bg-neutral" }, Nu = ["src"], Pu = {
	key: 1,
	class: "tw:flex tw:h-full tw:items-center tw:justify-center tw:text-xs tw:opacity-50",
	"aria-hidden": "true"
}, Fu = { class: "tw:min-w-0" }, Iu = { class: "tw:truncate tw:text-sm tw:font-semibold" }, Lu = { class: "tw:truncate tw:text-[0.7rem] tw:opacity-65" }, Ru = { class: "tw:text-[0.7rem] tw:opacity-65" }, zu = { class: "tw:text-[0.68rem] tw:opacity-60" }, Bu = [
	"disabled",
	"aria-label",
	"onClick"
], Vu = {
	key: 1,
	class: "tw:m-3 tw:text-center tw:text-sm tw:opacity-60"
}, Hu = { class: "tw:flex tw:items-center tw:justify-between tw:gap-2" }, Uu = { class: "tw:m-0 tw:text-sm tw:font-semibold" }, Wu = ["disabled"], Gu = { class: "dui-list tw:m-0 tw:max-h-56 tw:list-none tw:overflow-auto tw:p-0" }, Ku = { class: "dui-badge dui-badge-ghost dui-badge-xs" }, qu = { class: "tw:min-w-0" }, Ju = { class: "tw:truncate tw:text-sm tw:font-medium" }, Yu = { class: "tw:text-[0.68rem] tw:opacity-60" }, Xu = { class: "tw:flex tw:gap-0.5" }, Zu = [
	"disabled",
	"aria-label",
	"onClick"
], Qu = [
	"disabled",
	"aria-label",
	"onClick"
], $u = [
	"disabled",
	"aria-label",
	"onClick"
], ed = [
	"disabled",
	"aria-label",
	"onClick"
], td = /* @__PURE__ */ Jn({
	__name: "SceneSelectionPanel",
	props: { t: { type: Function } },
	emits: ["locate"],
	setup(e, { emit: t }) {
		let n = t, r = pc(), i = /* @__PURE__ */ F(""), a = q(() => {
			let e = i.value.trim().toLocaleLowerCase();
			return r.availableScenes.filter((t) => r.selectedSceneIds.includes(t.id) ? !1 : e ? `${t.name} ${t.folderName ?? ""}`.toLocaleLowerCase().includes(e) : !0);
		});
		function o(e, t) {
			return `${e.toLocaleString()} × ${t.toLocaleString()}`;
		}
		return (t, s) => (V(), H("aside", Su, [U("div", Cu, [
			U("div", wu, [U("div", null, [U("h2", Tu, k(e.t("FVTT_SCENE_MERGER.Selection.Title")), 1), U("p", Eu, k(e.t("FVTT_SCENE_MERGER.Selection.Help")), 1)]), U("span", Du, k(I(r).selectedScenes.length), 1)]),
			U("label", Ou, [s[2] ||= U("span", { "aria-hidden": "true" }, "⌕", -1), Nn(U("input", {
				"onUpdate:modelValue": s[0] ||= (e) => i.value = e,
				class: "tw:min-w-0 tw:flex-1",
				type: "search",
				disabled: !I(r).setupEditable,
				placeholder: e.t("FVTT_SCENE_MERGER.Selection.Search")
			}, null, 8, ku), [[fo, i.value]])]),
			U("div", Au, [a.value.length ? (V(), H("ul", ju, [(V(!0), H(B, null, yr(a.value, (t) => (V(), H("li", {
				key: t.id,
				class: "dui-list-row tw:grid-cols-[3rem_minmax(0,1fr)_auto] tw:items-center tw:gap-2 tw:bg-base-200 tw:p-2"
			}, [
				U("div", Mu, [t.thumbnail ? (V(), H("img", {
					key: 0,
					class: "tw:h-full tw:w-full tw:object-cover",
					src: t.thumbnail,
					alt: ""
				}, null, 8, Nu)) : (V(), H("span", Pu, "▧"))]),
				U("div", Fu, [
					U("div", Iu, k(t.name), 1),
					U("div", Lu, k(t.folderName ?? e.t("FVTT_SCENE_MERGER.Selection.RootFolder")), 1),
					U("div", Ru, k(o(t.dimensions.sceneWidth, t.dimensions.sceneHeight)), 1),
					U("div", zu, k(e.t("FVTT_SCENE_MERGER.Selection.GridDetails", {
						type: t.grid.type,
						size: t.grid.size,
						distance: t.grid.distance,
						units: t.grid.units
					})), 1)
				]),
				U("button", {
					class: "dui-btn dui-btn-sm dui-btn-square",
					type: "button",
					disabled: !I(r).setupEditable || !t.canMerge,
					"aria-label": e.t("FVTT_SCENE_MERGER.Selection.AddNamed", { name: t.name }),
					onClick: (e) => I(r).addScene(t.id)
				}, " + ", 8, Bu)
			]))), 128))])) : (V(), H("p", Vu, k(e.t("FVTT_SCENE_MERGER.Selection.NoMatches")), 1))]),
			U("div", Hu, [U("h3", Uu, k(e.t("FVTT_SCENE_MERGER.Selection.Selected")), 1), U("button", {
				class: "dui-btn dui-btn-ghost dui-btn-xs",
				type: "button",
				disabled: !I(r).setupEditable || I(r).selectedScenes.length === 0,
				onClick: s[1] ||= (e) => I(r).clearScenes()
			}, k(e.t("FVTT_SCENE_MERGER.Actions.Clear")), 9, Wu)]),
			U("ol", Gu, [(V(!0), H(B, null, yr(I(r).selectedScenes, (t, i) => (V(), H("li", {
				key: t.id,
				class: "dui-list-row tw:grid-cols-[1.5rem_minmax(0,1fr)_auto] tw:items-center tw:gap-1 tw:px-2 tw:py-1.5"
			}, [
				U("span", Ku, k(i + 1), 1),
				U("div", qu, [U("div", Ju, k(t.name), 1), U("div", Yu, k(o(t.dimensions.sceneWidth, t.dimensions.sceneHeight)), 1)]),
				U("div", Xu, [
					U("button", {
						class: "dui-btn dui-btn-ghost dui-btn-xs dui-btn-square",
						type: "button",
						disabled: !I(r).setupEditable || i === 0,
						"aria-label": e.t("FVTT_SCENE_MERGER.Actions.MoveUp"),
						onClick: (e) => I(r).reorderScene(t.id, -1)
					}, " ↑ ", 8, Zu),
					U("button", {
						class: "dui-btn dui-btn-ghost dui-btn-xs dui-btn-square",
						type: "button",
						disabled: !I(r).setupEditable || i === I(r).selectedScenes.length - 1,
						"aria-label": e.t("FVTT_SCENE_MERGER.Actions.MoveDown"),
						onClick: (e) => I(r).reorderScene(t.id, 1)
					}, " ↓ ", 8, Qu),
					U("button", {
						class: "dui-btn dui-btn-ghost dui-btn-xs dui-btn-square",
						type: "button",
						disabled: !I(r).setupEditable,
						"aria-label": e.t("FVTT_SCENE_MERGER.Actions.Locate"),
						onClick: (e) => n("locate", t.id)
					}, " ◎ ", 8, $u),
					U("button", {
						class: "dui-btn dui-btn-ghost dui-btn-xs dui-btn-square",
						type: "button",
						disabled: !I(r).setupEditable,
						"aria-label": e.t("FVTT_SCENE_MERGER.Selection.RemoveNamed", { name: t.name }),
						onClick: (e) => I(r).removeScene(t.id)
					}, " × ", 8, ed)
				])
			]))), 128))])
		])]));
	}
}), nd = { class: "dui-card dui-card-border tw:bg-base-200" }, rd = { class: "dui-card-body tw:gap-3 tw:p-3" }, id = { class: "tw:flex tw:items-start tw:justify-between tw:gap-2" }, ad = { class: "dui-card-title tw:text-base" }, od = { class: "tw:m-0 tw:text-xs tw:opacity-65" }, sd = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm"
}, cd = {
	key: 1,
	class: "dui-badge dui-badge-success dui-badge-soft"
}, ld = {
	key: 2,
	class: "dui-badge dui-badge-error dui-badge-soft"
}, ud = { class: "tw:flex tw:flex-wrap tw:gap-1" }, dd = { class: "dui-badge dui-badge-outline dui-badge-sm" }, fd = { class: "dui-badge dui-badge-outline dui-badge-sm" }, pd = { class: "dui-badge dui-badge-outline dui-badge-sm" }, md = { class: "dui-badge dui-badge-outline dui-badge-sm" }, hd = {
	key: 0,
	class: "dui-badge dui-badge-warning dui-badge-soft dui-badge-sm"
}, gd = {
	key: 0,
	class: "tw:grid tw:gap-2"
}, _d = { class: "tw:block" }, vd = {
	key: 0,
	class: "tw:opacity-70"
}, yd = {
	key: 1,
	class: "tw:grid tw:gap-2"
}, bd = { class: "tw:block" }, xd = {
	key: 0,
	class: "tw:opacity-70"
}, Sd = { class: "tw:flex tw:items-start tw:gap-2 tw:rounded-box tw:bg-warning/10 tw:p-2 tw:text-sm" }, Cd = ["checked", "disabled"], wd = { class: "tw:block" }, Td = { class: "tw:opacity-70" }, Ed = {
	key: 2,
	role: "alert",
	class: "dui-alert dui-alert-success dui-alert-soft tw:py-2 tw:text-sm"
}, Dd = /* @__PURE__ */ Jn({
	__name: "ValidationPanel",
	props: { t: { type: Function } },
	setup(e) {
		let t = pc(), n = q(() => nc(t.selectedScenes, t.arrangementBounds, { ...t.content }));
		function r(e) {
			return `FVTT_SCENE_MERGER.Validation.Issues.${e.code.replace(".", "_")}`;
		}
		function i(e) {
			return Object.entries(e.details).map(([e, t]) => `${e}: ${t}`).join(" · ");
		}
		function a(e) {
			return e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e.toLocaleString();
		}
		function o(e) {
			t.setWarningsAcknowledged(e.currentTarget.checked);
		}
		return (s, c) => (V(), H("section", nd, [U("div", rd, [
			U("div", id, [U("div", null, [U("h2", ad, k(e.t("FVTT_SCENE_MERGER.Validation.Title")), 1), U("p", od, k(e.t("FVTT_SCENE_MERGER.Validation.Help")), 1)]), I(t).validating ? (V(), H("span", sd)) : I(t).validation?.canMerge ? (V(), H("span", cd, k(e.t("FVTT_SCENE_MERGER.Validation.Ready")), 1)) : (V(), H("span", ld, k(e.t("FVTT_SCENE_MERGER.Validation.Blocked")), 1))]),
			U("div", ud, [
				U("span", dd, k(e.t("FVTT_SCENE_MERGER.Validation.Estimate.Area", { value: a(I(t).arrangementBounds.width * I(t).arrangementBounds.height) })), 1),
				U("span", fd, k(e.t("FVTT_SCENE_MERGER.Validation.Estimate.Textures", { value: a(n.value.texturePixels) })), 1),
				U("span", pd, k(e.t("FVTT_SCENE_MERGER.Validation.Estimate.Walls", { value: n.value.documents.Wall ?? 0 })), 1),
				U("span", md, k(e.t("FVTT_SCENE_MERGER.Validation.Estimate.Tokens", { value: n.value.documents.Token ?? 0 })), 1),
				n.value.animatedAssets ? (V(), H("span", hd, k(e.t("FVTT_SCENE_MERGER.Validation.Estimate.Animated", { value: n.value.animatedAssets })), 1)) : G("", !0)
			]),
			I(t).validation?.blocking.length ? (V(), H("div", gd, [(V(!0), H(B, null, yr(I(t).validation.blocking, (t, n) => (V(), H("div", {
				key: `${t.code}-${n}`,
				role: "alert",
				class: "dui-alert dui-alert-error dui-alert-soft tw:items-start tw:py-2 tw:text-sm"
			}, [c[0] ||= U("span", { "aria-hidden": "true" }, "×", -1), U("span", null, [U("strong", _d, k(e.t(r(t), t.details)), 1), Object.keys(t.details).length ? (V(), H("small", vd, k(i(t)), 1)) : G("", !0)])]))), 128))])) : G("", !0),
			I(t).validation?.warnings.length ? (V(), H("div", yd, [(V(!0), H(B, null, yr(I(t).validation.warnings, (t, n) => (V(), H("div", {
				key: `${t.code}-${n}`,
				role: "alert",
				class: "dui-alert dui-alert-warning dui-alert-soft tw:items-start tw:py-2 tw:text-sm"
			}, [c[1] ||= U("span", { "aria-hidden": "true" }, "!", -1), U("span", null, [U("strong", bd, k(e.t(r(t), t.details)), 1), Object.keys(t.details).length ? (V(), H("small", xd, k(i(t)), 1)) : G("", !0)])]))), 128)), U("label", Sd, [U("input", {
				class: "dui-checkbox dui-checkbox-warning dui-checkbox-sm tw:mt-0.5",
				type: "checkbox",
				checked: I(t).warningsAcknowledged,
				disabled: !I(t).setupEditable,
				onChange: o
			}, null, 40, Cd), U("span", null, [U("strong", wd, k(e.t("FVTT_SCENE_MERGER.Validation.Acknowledge")), 1), U("small", Td, k(e.t("FVTT_SCENE_MERGER.Validation.AcknowledgeHelp")), 1)])])])) : G("", !0),
			I(t).validation && !I(t).validation.blocking.length && !I(t).validation.warnings.length ? (V(), H("div", Ed, [c[2] ||= U("span", { "aria-hidden": "true" }, "✓", -1), U("span", null, k(e.t("FVTT_SCENE_MERGER.Validation.NoIssues")), 1)])) : G("", !0)
		])]));
	}
}), Od = { class: "scene-merger-shell tw:flex tw:min-h-[720px] tw:flex-col tw:gap-3 tw:p-3 tw:text-base-content" }, kd = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-3" }, Ad = { class: "tw:flex tw:items-center tw:gap-2" }, jd = { class: "dui-badge dui-badge-neutral dui-badge-sm" }, Md = { class: "tw:m-0 tw:text-xl tw:font-semibold" }, Nd = { class: "tw:mt-1 tw:mb-0 tw:text-sm tw:opacity-70" }, Pd = { class: "dui-badge dui-badge-outline tw:gap-2" }, Fd = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-xs"
}, Id = {
	key: 0,
	class: "dui-card dui-card-border tw:flex-1 tw:bg-base-200"
}, Ld = { class: "dui-card-body tw:items-center tw:justify-center tw:text-center" }, Rd = { class: "dui-card-title" }, zd = { class: "tw:grid tw:min-h-0 tw:flex-1 tw:gap-3 tw:xl:grid-cols-[21rem_minmax(0,1fr)]" }, Bd = { class: "tw:grid tw:gap-3 tw:xl:grid-cols-[minmax(0,1fr)_minmax(22rem,0.72fr)]" }, Vd = /* @__PURE__ */ Jn({
	__name: "SceneMergerApp",
	props: {
		services: {},
		t: { type: Function }
	},
	setup(e) {
		let t = e, n = pc(), r = /* @__PURE__ */ F(null);
		lr(() => {
			n.initialize(t.services, t.t("FVTT_SCENE_MERGER.Defaults.DestinationName"));
		});
		function i(e) {
			r.value?.locateScene(e);
		}
		return (t, a) => (V(), H("main", Od, [U("header", kd, [U("div", null, [U("div", Ad, [U("span", jd, k(e.t("FVTT_SCENE_MERGER.App.GmBadge")), 1), U("h1", Md, k(e.t("FVTT_SCENE_MERGER.App.Title")), 1)]), U("p", Nd, k(e.t("FVTT_SCENE_MERGER.App.Subtitle")), 1)]), U("span", Pd, [I(n).status === "loading" ? (V(), H("span", Fd)) : G("", !0), Yi(" " + k(e.t(`FVTT_SCENE_MERGER.Status.${I(n).status}`)), 1)])]), I(n).status === "loading" ? (V(), H("div", Id, [U("div", Ld, [
			a[0] ||= U("span", { class: "dui-loading dui-loading-ring dui-loading-lg" }, null, -1),
			U("h2", Rd, k(e.t("FVTT_SCENE_MERGER.Loading.Title")), 1),
			U("p", null, k(e.t("FVTT_SCENE_MERGER.Loading.Body")), 1)
		])])) : (V(), H(B, { key: 1 }, [
			U("section", zd, [W(td, {
				t: e.t,
				onLocate: i
			}, null, 8, ["t"]), W(Yl, {
				ref_key: "layoutPanel",
				ref: r,
				t: e.t
			}, null, 8, ["t"])]),
			U("section", Bd, [W(xu, { t: e.t }, null, 8, ["t"]), W(Dd, { t: e.t }, null, 8, ["t"])]),
			W(sl, { t: e.t }, null, 8, ["t"])
		], 64))]));
	}
}), X = "fvtt-scene-merger", Hd = "Foundry VTT Scene Merger", Ud = "FVTT_SCENE_MERGER";
//#endregion
//#region src/module/logging/logger.ts
function Wd() {
	try {
		return game?.settings.get(X, "debugLogging") === !0;
	} catch {
		return !1;
	}
}
var Gd = {
	debug(e, t) {
		Wd() && console.debug(`${Hd} | ${e}`, t ?? "");
	},
	error(e, t) {
		console.error(`${Hd} | ${e}`, t ?? "");
	},
	info(e, t) {
		console.info(`${Hd} | ${e}`, t ?? "");
	},
	warn(e, t) {
		console.warn(`${Hd} | ${e}`, t ?? "");
	}
};
//#endregion
//#region src/module/runtime/runtime-utils.ts
function Kd() {
	if (!game) throw Error("Foundry game data is not available yet.");
	return game;
}
function qd(e) {
	let t = Kd().scenes.get(e);
	if (!t) throw Error(`Source Scene ${e} is unavailable.`);
	return t;
}
function Z(e) {
	return Yd(e);
}
function Jd(e) {
	return Z(e.toObject(!0));
}
function Yd(e) {
	if (Array.isArray(e)) return e.map(Yd);
	if (e instanceof Set) return [...e].map(Yd);
	if (e && typeof e == "object") {
		let t = {};
		for (let [n, r] of Object.entries(e)) t[n] = Yd(r);
		return t;
	}
	return e;
}
function Q(e) {
	if (!(!e || typeof e != "object" || Array.isArray(e))) return e;
}
function Xd(e) {
	return Array.isArray(e) ? e.map(Q).filter((e) => !!e) : [];
}
function $(e, t = 0) {
	return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Zd(e, t = "") {
	return typeof e == "string" ? e : t;
}
function Qd(e) {
	let t = e._id;
	return typeof t == "string" && t.length > 0 ? t : void 0;
}
function $d(e) {
	return e instanceof Error ? e.message : String(e);
}
function ef(e) {
	return typeof e == "string" && /\.(?:m4v|mp4|ogg|ogv|webm)(?:[?#].*)?$/i.test(e);
}
async function tf() {
	await new Promise((e) => {
		setTimeout(e, 0);
	});
}
function nf(e) {
	return e.replace(/([a-z])([A-Z])/g, "$1 $2").replaceAll(".", ": ").replace(/^./, (e) => e.toUpperCase());
}
//#endregion
//#region src/module/settings/settings-values.ts
function rf() {
	return Kd().settings.get(X, "cleanupPartialDestination") !== !1;
}
//#endregion
//#region src/module/runtime/merge/errors.ts
var af = class extends Error {
	constructor() {
		super("Scene merge cancelled."), this.name = "MergeCancelledError";
	}
}, of = class extends Error {
	cleanupError;
	destinationSceneId;
	originalError;
	stage;
	constructor(e) {
		let t = e.cleanupError ? ` Cleanup also failed: ${$d(e.cleanupError)}` : "", n = e.destinationSceneId ? ` Partial destination Scene: ${e.destinationSceneId}.` : "";
		super(`Scene merge failed during ${e.stage}: ${$d(e.error)}.${t}${n}`), this.name = "SceneMergeError", this.cleanupError = e.cleanupError ? $d(e.cleanupError) : null, this.destinationSceneId = e.destinationSceneId ?? null, this.originalError = e.error, this.stage = e.stage;
	}
}, sf = class {
	#e = !1;
	cancel() {
		this.#e = !0;
	}
	throwIfCancelled() {
		if (this.#e) throw new af();
	}
}, cf = class {
	#e;
	constructor(e) {
		let t = e.id, n = e.levels.contents[0]?.id;
		if (!t || !n || e.levels.size !== 1) throw Error("Foundry did not create the expected destination Scene and Level.");
		this.#e = e, this.id = t, this.levelId = n;
	}
	get dimensions() {
		return this.#e.dimensions;
	}
	get name() {
		return this.#e.name ?? "Merged Scene";
	}
	id;
	levelId;
	async activate() {
		await this.#e.activate({ pullUsers: !1 });
	}
	async createDocuments(e, t) {
		return this.#e.createEmbeddedDocuments(e, t);
	}
	async delete() {
		await this.#e.delete();
	}
	async open() {
		await this.#e.view();
	}
	async updateDocuments(e, t) {
		return this.#e.updateEmbeddedDocuments(e, t, {
			diff: !1,
			recursive: !1
		});
	}
};
async function lf(e, t = (e) => Scene.implementation.create(e)) {
	let n = await t(e);
	if (!n) throw Error("Foundry did not return a destination Scene after creation.");
	try {
		return new cf(n);
	} catch (e) {
		try {
			await n.delete();
		} catch (t) {
			throw Error(`${$d(e)} Cleanup of the invalid Scene${n.id ? ` ${n.id}` : ""} also failed: ${$d(t)}`, { cause: t });
		}
		throw e;
	}
}
var uf = {
	callHook(e, ...t) {
		Hooks.callAll(e, ...t);
	},
	createDestination: lf,
	notifyError(e) {
		ui?.notifications?.error(e);
	},
	notifyInfo(e) {
		ui?.notifications?.info(e);
	}
}, df = /* @__PURE__ */ new Map();
function ff(e) {
	if (!e.id.trim()) throw Error("A Scene Merger extension must have a non-empty id.");
	if (df.has(e.id)) throw Error(`A Scene Merger extension with id ${e.id} is already registered.`);
	return df.set(e.id, e), () => df.delete(e.id);
}
function pf() {
	return [...df.values()];
}
function mf(e, t, n) {
	return ff({
		documentTransformers: { [t]: n },
		id: e
	});
}
function hf(e, t) {
	return ff({
		id: e,
		validate: t
	});
}
function gf(e, t) {
	return ff({
		id: e,
		referenceRewriter: t
	});
}
async function _f(e) {
	for (let t of pf()) await t.preMerge?.(e);
}
async function vf(e) {
	for (let t of pf()) await t.postMerge?.(e);
}
//#endregion
//#region src/module/runtime/background-tiles.ts
function yf(e, t, n, r) {
	let i = new Map(t.map((e) => [e.sceneId, e])), a = new Map([...t].sort((e, t) => e.order - t.order).map((e, t) => [e.sceneId, t])), o = Math.max(1, ...e.map((e) => e.documents.Tile?.length ?? 0)) + 1, s = xf(e), c = [];
	for (let l of e) {
		let e = i.get(l.id), u = a.get(l.id) ?? 0, d = l.documents.Level?.[0];
		if (!e || !d) continue;
		let f = Q(d.textures) ?? {};
		bf(c, "background", Q(d.background), f, l, e, n, r, s.background, -(t.length * 2) + u), bf(c, "foreground", Q(d.foreground), f, l, e, n, r, s.foreground, (t.length + 1) * o + u);
	}
	return c;
}
function bf(e, t, n, r, i, a, o, s, c, l) {
	if (typeof n?.src != "string" || n.src.length === 0) return;
	let u = {
		...Z(r),
		...Z(n)
	};
	delete u.color, e.push({
		alpha: 1,
		anchorX: 0,
		anchorY: 0,
		elevation: c,
		flags: { [X]: { importedLevelTexture: {
			layer: t,
			sourceLevelId: i.levels[0]?.id ?? null,
			sourceSceneId: i.id
		} } },
		height: a.height,
		hidden: !1,
		levels: [o.levelId],
		locked: s,
		name: `${i.name} — ${t}`,
		rotation: 0,
		sort: l,
		texture: u,
		width: a.width,
		x: o.sceneX + a.x,
		y: o.sceneY + a.y
	});
}
function xf(e) {
	let t = 0, n = 0, r = (e) => {
		typeof e != "number" || !Number.isFinite(e) || (t = Math.min(t, e), n = Math.max(n, e));
	};
	for (let t of e) {
		for (let e of t.levels) r(e.elevation.bottom), r(e.elevation.top);
		for (let e of Object.values(t.documents)) for (let t of e ?? []) r(t.elevation);
	}
	return {
		background: Math.max(-Number.MAX_VALUE, t - 1),
		foreground: Math.min(Number.MAX_VALUE, n + 1)
	};
}
//#endregion
//#region src/module/runtime/provenance.ts
var Sf = "_temporaryProvenance";
function Cf(e, t) {
	let n = Z(e), r = Z(Q(n.flags) ?? {}), i = Z(Q(r["fvtt-scene-merger"]) ?? {}), a = Object.hasOwn(i, Sf), o = i[Sf];
	return i[Sf] = {
		documentId: t.documentId,
		documentType: t.documentType,
		parentIds: [...t.parentIds ?? []],
		sceneId: t.sceneId,
		sourceKey: xs(t),
		hadPrevious: a,
		previousValue: o
	}, r[X] = i, n.flags = r, n;
}
function wf(e) {
	let t = Z(e), n = Q(t.flags), r = Q(n?.[X]), i = Q(r?.[Sf]);
	return n && r && i && (i.hadPrevious === !0 ? r[Sf] = Tf(i.previousValue) : delete r[Sf], Object.keys(r).length === 0 && delete n[X], t.flags = n), delete t._stats, Array.isArray(t.behaviors) && (t.behaviors = Xd(t.behaviors).map(wf)), t;
}
function Tf(e) {
	return e && typeof e == "object" ? Z(e) : e;
}
function Ef(e) {
	let t = Q(Q(Q(e.flags)?.[X])?.[Sf]);
	if (!t) return;
	let n = t?.documentId, r = t?.documentType, i = t?.sceneId;
	if (!(typeof n != "string" || typeof r != "string" || typeof i != "string")) return {
		documentId: n,
		documentType: r,
		parentIds: Array.isArray(t.parentIds) ? t.parentIds.filter((e) => typeof e == "string") : [],
		sceneId: i
	};
}
function Df(e, t) {
	let n = [];
	for (let r of e) {
		let e = Jd(r);
		Of(e, t, n);
		for (let r of Xd(e.behaviors)) Of(r, t, n);
	}
	return n;
}
function Of(e, t, n) {
	let r = Ef(e), i = Qd(e);
	if (!r || !i) {
		n.push("A created document could not be associated with its source provenance.");
		return;
	}
	t.set(xs(r), i);
}
//#endregion
//#region src/module/runtime/merge/batches.ts
async function kf(e, t, n, r, i, a, o) {
	await Nf(n, o, a, async (a, o) => {
		let s = await e.createDocuments(t, a);
		if (s.length !== a.length) throw Error(`Foundry created ${s.length} of ${a.length} requested ${t} documents.`);
		Mf(i, r, o, n.length, `Created ${t} documents`);
	});
}
async function Af(e, t, n, r, i, a, o, s, c) {
	let l = 0;
	return await Nf(n, c, s, async (s, c) => {
		let u = await e.createDocuments(t, s);
		if (u.length !== s.length) throw Error(`Foundry created ${u.length} of ${s.length} requested ${t} documents.`);
		l += u.length;
		let d = Df(u, r);
		if (d.length > 0) throw i.push(...d), Error(`Foundry created ${t} documents without the provenance needed for safe ID mapping.`);
		Mf(o, a, c, n.length, `Created ${t} documents`);
	}), l;
}
async function jf(e, t, n, r, i, a) {
	await Nf(n, a, i, async (i, a) => {
		let o = await e.updateDocuments(t, i);
		if (o.length !== i.length) throw Error(`Foundry updated ${o.length} of ${i.length} requested ${t} documents.`);
		Mf(r, "rewritingReferences", a, n.length, `Finalized ${t} references`);
	});
}
function Mf(e, t, n, r, i) {
	Gd.debug("Merge progress", {
		completed: n,
		detail: i,
		stage: t,
		total: r
	}), e.onProgress?.({
		completed: n,
		detail: i,
		stage: t,
		total: r
	});
}
async function Nf(e, t, n, r) {
	for (let i = 0; i < e.length; i += t) {
		n.throwIfCancelled();
		let a = e.slice(i, i + t);
		await r(a, Math.min(i + a.length, e.length)), n.throwIfCancelled(), await tf();
	}
}
//#endregion
//#region src/module/runtime/merge/workflow-data.ts
function Pf(e, t, n) {
	let r = new Map(t.map((e) => [e.sceneId, e]));
	for (let t of e) {
		if (t.metrics.gridRegionShapes === 0) continue;
		let e = r.get(t.id);
		if (e && !Is(Fs(t.dimensions, n.dimensions, e), t.grid.size)) throw Error(`Scene ${t.name} has grid Region geometry which is not aligned after destination insets.`);
	}
}
function Ff(e, t, n) {
	let r = { ...n };
	for (let [n, i] of Object.entries(is)) !i || t.options.content[n] || (r[i] = e.reduce((e, t) => e + (t.documents[i]?.length ?? 0), r[i] ?? 0));
	return r;
}
function If(e) {
	return e.reduce((e, t) => e + Xd(t.behaviors).length, 0);
}
function Lf(e, t, n, r, i, a, o) {
	let s = [...new Set(a)], c = [...o];
	return s.length > 0 && c.push(`${s.length} reference or provenance entries require manual review.`), {
		copied: n,
		destinationHeight: t.dimensions.sceneHeight,
		destinationSceneId: t.id,
		destinationSceneName: t.name,
		destinationWidth: t.dimensions.sceneWidth,
		referencesRewritten: i,
		skipped: r,
		sourceCount: e.length,
		unresolvedReferences: s,
		warnings: c
	};
}
//#endregion
//#region src/module/runtime/prepare-documents.ts
function Rf(e, t, n, r, i) {
	let a = new Set(as(r.options.content)), o = new Map(t.map((e) => [e.sceneId, e])), s = new Map([...t].sort((e, t) => e.order - t.order).map((e, t) => [e.sceneId, t])), c = Math.max(1, ...e.map((e) => e.documents.Tile?.length ?? 0)) + 1, l = /* @__PURE__ */ new Map(), u = {};
	for (let t of e) {
		let e = o.get(t.id);
		if (!e) continue;
		let r = Fs(t.dimensions, n, e), d = t.levels[0]?.id, f = s.get(t.id) ?? 0;
		if (!d) continue;
		let p = new Map([[d, n.levelId]]);
		for (let e of a) {
			let a = [...t.documents[e] ?? []];
			e === "Tile" && a.sort((e, t) => $(e.sort) - $(t.sort));
			for (let [o, s] of a.entries()) {
				let a = zf(Z(s), e, t.id, r, t.grid, p, f, c, o, n.id, i);
				if (!a) {
					u[e] = (u[e] ?? 0) + 1;
					continue;
				}
				let d = l.get(e) ?? [];
				d.push(a), l.set(e, d);
			}
		}
	}
	return {
		batches: l,
		skipped: u
	};
}
function zf(e, t, n, r, i, a, o, s, c, l, u) {
	let d = Qd(e);
	if (!d) return;
	let f = {
		documentId: d,
		documentType: t,
		sceneId: n
	}, p = {
		delta: r,
		destinationSceneId: l,
		documentType: t,
		sourceSceneId: n
	}, m = Bf(e, t, r, i);
	t === "Tile" && (m.sort = (o + 1) * s + c), m = Hf(m, f), m = Vf(m, p), u?.(m, p), m = Cf(m, f);
	let h = Hs(Z(m), a);
	return delete h._id, delete h._stats, Uf(h), {
		creationData: h,
		data: m,
		identity: f,
		type: t
	};
}
function Bf(e, t, n, r) {
	let i = {
		...e,
		x: $(e.x),
		y: $(e.y)
	};
	if (t === "Wall") {
		let t = Array.isArray(e.c) ? e.c : [
			0,
			0,
			0,
			0
		];
		return zs({
			...e,
			c: [
				$(t[0]),
				$(t[1]),
				$(t[2]),
				$(t[3])
			]
		}, n);
	}
	return t === "Drawing" ? Bs(i, n) : t === "Region" ? Js(e, n, r) : t === "Token" ? Vs(i, n) : t === "Tile" ? Rs({
		...i,
		height: $(e.height),
		width: $(e.width)
	}, n) : Ls(i, n);
}
function Vf(e, t) {
	let n = e;
	for (let e of pf()) {
		let r = e.documentTransformers?.[t.documentType];
		r && (n = Z(r(n, t)));
	}
	return n;
}
function Hf(e, t) {
	return t.documentType === "Region" && (e.behaviors = Xd(e.behaviors).map((e) => {
		let n = Qd(e);
		return n ? Cf(e, {
			documentId: n,
			documentType: "RegionBehavior",
			parentIds: [t.documentId],
			sceneId: t.sceneId
		}) : e;
	})), e;
}
function Uf(e) {
	let t = Xd(e.behaviors);
	t.length !== 0 && (e.behaviors = t.map((e) => {
		let t = Z(e);
		return delete t._id, delete t._stats, t;
	}));
}
//#endregion
//#region src/module/runtime/reference-updates.ts
function Wf(e, t, n, r, i) {
	let a = /* @__PURE__ */ new Map(), o = [], s = 0;
	for (let [c, l] of e) for (let e of l) {
		let l = {
			destinationSceneId: n,
			idMap: t,
			sourceSceneId: e.identity.sceneId,
			sourceSceneIds: r
		}, u = t.get(Ss(e.identity.sceneId, c, e.identity.documentId));
		if (!u) {
			o.push(`${c}.${e.identity.documentId}`);
			continue;
		}
		let d = Ns(c, e.data, l), f = Z(d.value);
		s += d.rewritten, o.push(...d.unresolved);
		for (let e of pf()) {
			if (!e.referenceRewriter) continue;
			let t = e.referenceRewriter(f, l);
			f = Z(t.value), s += t.rewritten, o.push(...t.unresolved);
		}
		i?.(f, l), f._id = u, c === "Region" && Gf(f, e.identity.documentId, l, o), o.push(...Kf(f, r, c)), f = wf(f);
		let p = a.get(c) ?? [];
		p.push(f), a.set(c, p);
	}
	return {
		referencesRewritten: s,
		unresolved: [...new Set(o)],
		updates: a
	};
}
function Gf(e, t, n, r) {
	e.behaviors = Xd(e.behaviors).map((e) => {
		let i = Qd(e);
		if (!i) return e;
		let a = n.idMap.get(Ss(n.sourceSceneId, "RegionBehavior", i, [t]));
		return a ? {
			...e,
			_id: a
		} : (r.push(`Region.${t}.RegionBehavior.${i}`), e);
	});
}
function Kf(e, t, n) {
	let r = Q(e.flags);
	if (!r) return [];
	let i = [];
	return qf(r, "flags", t, (t) => {
		i.push(`${n}.${Qd(e) ?? "unknown"}:${t}`);
	}), i;
}
function qf(e, t, n, r) {
	if (typeof e == "string") {
		n.some((t) => e.includes(`Scene.${t}.`)) && r(t);
		return;
	}
	if (Array.isArray(e)) {
		e.forEach((e, i) => qf(e, `${t}[${i}]`, n, r));
		return;
	}
	let i = Q(e);
	if (i) for (let [e, a] of Object.entries(i)) qf(a, `${t}.${e}`, n, r);
}
//#endregion
//#region src/module/runtime/merge/workflow.ts
var Jf = 200, Yf = [
	["Tile", "copyingTiles"],
	["Wall", "copyingWalls"],
	["AmbientLight", "copyingLights"],
	["AmbientSound", "copyingSounds"],
	["Drawing", "copyingDrawings"],
	["Note", "copyingNotes"],
	["Region", "copyingRegions"],
	["Token", "copyingTokens"]
];
async function Xf(e, t, n) {
	let r = n.cancellation ?? new sf(), i = Math.max(1, n.batchSize ?? Jf), a, o = "beforeDestination";
	try {
		r.throwIfCancelled(), await _f(e), n.runtime.callHook("fvttSceneMergerPreMerge", e, t), o = "calculatingBounds", Mf(n, o, 0, 1, "Calculating normalized destination bounds");
		let s = ls(e.placements);
		r.throwIfCancelled(), o = "creatingScene", Mf(n, o, 0, 1, "Creating destination Scene and Level"), a = await n.runtime.createDestination(Zf(e, t, s.width, s.height)), Mf(n, o, 1, 1, a.name), r.throwIfCancelled(), Pf(t, s.placements, a);
		let c = Qf(t, a.levelId), l = { Level: 1 }, u = [];
		if (o = "creatingBackgrounds", Mf(n, o, 0, 0, "Preparing background and foreground Tiles"), e.options.content.backgrounds) {
			let c = yf(t, s.placements, {
				...a.dimensions,
				levelId: a.levelId
			}, e.options.destination.lockBackgroundTiles);
			await kf(a, "Tile", c, o, n, r, i), l.Tile = c.length;
		}
		let d = Rf(t, s.placements, {
			...a.dimensions,
			id: a.id,
			levelId: a.levelId
		}, e, (e, t) => n.runtime.callHook("fvttSceneMergerTransformDocument", e, t)), f = Ff(t, e, d.skipped);
		for (let [e, t] of Yf) {
			o = t;
			let s = d.batches.get(e) ?? [];
			Mf(n, o, 0, s.length, `Preparing ${e} documents`);
			let f = await Af(a, e, s.map((e) => e.creationData), c, u, o, n, r, i);
			l[e] = (l[e] ?? 0) + f, e === "Region" && (l.RegionBehavior = If(s.map((e) => e.data)));
		}
		o = "rewritingReferences", Mf(n, o, 0, 0, "Rewriting supported internal references");
		let p = Wf(d.batches, c, a.id, e.sourceSceneIds, (e, t) => n.runtime.callHook("fvttSceneMergerRewriteReferences", e, t));
		u.push(...p.unresolved);
		for (let [e, t] of p.updates) await jf(a, e, t, n, r, i);
		o = "finalizing", Mf(n, o, 0, 1, "Finalizing destination Scene");
		let m = Lf(t, a, l, f, p.referencesRewritten, u, n.validationWarnings ?? []);
		return e.options.destination.activateAfterMerge && await a.activate(), e.options.destination.openAfterMerge && await a.open(), await vf(m), n.runtime.callHook("fvttSceneMergerPostMerge", m), Mf(n, o, 1, 1, a.name), m;
	} catch (e) {
		let t, r = !!a;
		if (a && rs({
			cleanupEnabled: n.cleanupPartial,
			destinationCreated: !0,
			stage: o
		})) try {
			await a.delete(), r = !1;
		} catch (e) {
			t = e;
		}
		throw new of({
			...t ? { cleanupError: t } : {},
			...a && r ? { destinationSceneId: a.id } : {},
			error: e,
			stage: o
		});
	}
}
function Zf(e, t, n, r) {
	let i = t[0];
	if (!i) throw Error("No source Scene is available for destination settings.");
	let a = {
		bottom: Math.min(...t.map((e) => e.levels[0]?.elevation.bottom ?? 0)),
		top: Math.max(...t.map((e) => e.levels[0]?.elevation.top ?? 0))
	};
	return {
		active: !1,
		backgroundColor: i.source.backgroundColor ?? null,
		environment: Z(Q(i.source.environment) ?? {}),
		flags: { "fvtt-scene-merger": { sourceSceneIds: [...e.sourceSceneIds] } },
		folder: e.options.destination.folderId,
		grid: Z(Q(i.source.grid) ?? {}),
		height: r,
		levels: [{
			elevation: a,
			name: "Merged Level"
		}],
		name: e.options.destination.name.trim() || "Merged Scene",
		navigation: e.options.destination.navigation,
		padding: $(i.source.padding, .25),
		shiftX: 0,
		shiftY: 0,
		thumb: null,
		tokenVision: i.source.tokenVision ?? !0,
		width: n
	};
}
function Qf(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) {
		let e = r.levels[0]?.id;
		if (!e) continue;
		let i = Ss(r.id, "Level", e);
		n.set(i, t);
	}
	return n;
}
//#endregion
//#region src/module/runtime/scene-snapshots.ts
var $f = [
	"Tile",
	"Wall",
	"AmbientLight",
	"AmbientSound",
	"Drawing",
	"Note",
	"Region",
	"Token"
], ep = new Set([
	"circle",
	"cone",
	"ellipse",
	"emanation",
	"grid",
	"line",
	"polygon",
	"rectangle",
	"ring",
	"token"
]);
async function tp() {
	return Kd().scenes.contents.map((e) => ip(e, !1));
}
async function np() {
	return Kd().folders.contents.filter((e) => e.id && e.type === "Scene").map((e) => ({
		id: e.id ?? "",
		name: e.name
	}));
}
function rp(e) {
	return e.map((e) => ip(qd(e), !0));
}
function ip(e, t) {
	let n = Kd(), r = ap(e), i = e.levels.contents.map((e) => ({
		elevation: {
			bottom: $(e.elevation?.bottom),
			top: $(e.elevation?.top)
		},
		id: e.id ?? "",
		name: e.name ?? "Level"
	})), a = {
		background: op(e),
		canMerge: n.user.isGM && Scene.implementation.canUserCreate(n.user) && e.canUserModify(n.user, "update"),
		dimensions: {
			height: e.dimensions.height,
			sceneHeight: e.dimensions.sceneHeight,
			sceneWidth: e.dimensions.sceneWidth,
			sceneX: e.dimensions.sceneX,
			sceneY: e.dimensions.sceneY,
			width: e.dimensions.width
		},
		folderId: e.folder?.id ?? null,
		folderName: e.folder?.name ?? null,
		grid: {
			distance: e.grid.distance,
			size: e.grid.size,
			type: e.grid.type,
			units: e.grid.units
		},
		id: e.id ?? "",
		levels: i,
		metrics: sp(e, r),
		name: e.name ?? "Untitled Scene",
		thumbnail: e.thumbnail
	};
	return t ? {
		...a,
		documents: r,
		source: Jd(e)
	} : a;
}
function ap(e) {
	let t = { Level: e.levels.contents.map(Jd) };
	for (let n of $f) t[n] = e.getEmbeddedCollection(n).contents.map(Jd);
	return t;
}
function op(e) {
	let t = e.levels.contents[0], n = Q((t ? Jd(t) : void 0)?.background), r = n?.src, i = n?.color, a = typeof r == "string" && r.length > 0, o = typeof i == "string" && i.length > 0 || typeof i == "number" && Number.isFinite(i);
	return !a && !o ? null : {
		animated: a && ef(r),
		color: o ? i : null,
		height: e.dimensions.sceneHeight,
		rotation: 0,
		scaleX: 1,
		scaleY: 1,
		src: a ? r : null,
		width: e.dimensions.sceneWidth,
		x: 0,
		y: 0
	};
}
function sp(e, t) {
	let n = {}, r = 0, i = 0, a = 0, o = 0, s = 0, c = 0, l = 0, u = 0, d = 0, f = 0;
	c += +!!lp(Jd(e));
	for (let t of e.levels.contents) {
		let n = Jd(t);
		for (let t of [Q(n.background), Q(n.foreground)]) t?.src && (a += 1, i += +!!ef(t.src), l += e.dimensions.sceneWidth * e.dimensions.sceneHeight);
	}
	for (let [a, p] of Object.entries(t)) {
		n[a] = p.length;
		for (let t of p) {
			let n = cp(t, e.id ?? "");
			i += n.animated, r += n.attachedRegion, o += n.crossReferences, s += n.gridShapes, c += n.moduleFlags, l += n.texturePixels, u += n.tokenRegionShapes, d += n.regionBehaviors, f += n.unsupportedRegionShapes;
		}
	}
	return n.RegionBehavior = (t.Region ?? []).reduce((e, t) => e + Xd(t.behaviors).length, 0), {
		attachedRegions: r,
		animatedAssets: i,
		backgroundImages: a,
		crossSceneReferences: o,
		documents: n,
		gridRegionShapes: s,
		moduleFlagDocuments: c,
		texturePixels: l,
		tokenRegionShapes: u,
		unsupportedRegionBehaviors: d,
		unsupportedRegionShapes: f
	};
}
function cp(e, t) {
	let n = Q(e.texture), r = n?.src, i = Q(e.attachment), a = Xd(e.shapes), o = Xd(e.behaviors);
	return {
		animated: +!!ef(r),
		attachedRegion: +(typeof i?.token == "string" && i.token.length > 0),
		crossReferences: up(e, t),
		gridShapes: a.filter((e) => Zd(e.type) === "grid").length,
		moduleFlags: +!!lp(e),
		regionBehaviors: o.filter((e) => dp(e) || Zd(e.type).toLowerCase().includes("changelevel")).length,
		texturePixels: n ? $(e.width) * $(e.height) : 0,
		tokenRegionShapes: a.filter((e) => Zd(e.type) === "token").length,
		unsupportedRegionShapes: a.filter((e) => !ep.has(Zd(e.type))).length
	};
}
function lp(e) {
	let t = Q(e.flags);
	return !!(t && Object.keys(t).some((e) => e !== "core" && e !== "fvtt-scene-merger"));
}
function up(e, t) {
	if (typeof e == "string") return [...e.matchAll(/Scene\.([A-Za-z0-9_-]+)/g)].filter((e) => e[1] !== t).length;
	if (Array.isArray(e)) return e.reduce((e, n) => e + up(n, t), 0);
	let n = Q(e);
	return n ? Object.values(n).reduce((e, n) => e + up(n, t), 0) : 0;
}
function dp(e) {
	if (typeof e == "string") return /(?:Scene|Region|Token)\./.test(e);
	if (Array.isArray(e)) return e.some(dp);
	let t = Q(e);
	return t ? Object.entries(t).some(([e, t]) => /^(?:destination|region|scene|token|uuid)/i.test(e) ? !0 : dp(t)) : !1;
}
//#endregion
//#region src/module/runtime/asset-validation.ts
var fp = 64, pp = 4e3, mp = /* @__PURE__ */ new Map();
async function hp(e, t) {
	return (await Promise.all(e.map(async (e) => {
		let n = [], r = gp(e, t), i = r.slice(0, fp), a = await Promise.all(i.map(vp)), o = a.filter((e) => e === "missing").length, s = a.filter((e) => e === "unverified").length + Math.max(0, r.length - i.length);
		return o > 0 && n.push(bp("assets.unavailable", e.id, o)), s > 0 && n.push(bp("assets.unverified", e.id, s)), n;
	}))).flat();
}
function gp(e, t) {
	let n = /* @__PURE__ */ new Set();
	if (t.backgrounds) for (let t of e.documents.Level ?? []) _p(n, Q(t.background)), _p(n, Q(t.foreground));
	if (t.tiles) for (let t of e.documents.Tile ?? []) _p(n, Q(t.texture));
	return [...n];
}
function _p(e, t) {
	let n = t?.src;
	typeof n == "string" && n.trim().length > 0 && e.add(n);
}
function vp(e) {
	let t = mp.get(e);
	if (t) return t;
	let n = yp(e);
	return mp.set(e, n), n;
}
async function yp(e) {
	if (/^(?:data|blob):/i.test(e)) return "available";
	let t = new AbortController(), n = globalThis.setTimeout(() => t.abort(), pp);
	try {
		let n = await fetch(e, {
			credentials: "same-origin",
			method: "HEAD",
			signal: t.signal
		});
		return n.ok ? "available" : n.status === 404 || n.status === 410 ? "missing" : "unverified";
	} catch {
		return "unverified";
	} finally {
		globalThis.clearTimeout(n);
	}
}
function bp(e, t, n) {
	return {
		code: e,
		details: { count: n },
		overridable: !0,
		sceneIds: [t],
		severity: "warning"
	};
}
//#endregion
//#region src/module/runtime/validation-service.ts
async function xp(e) {
	return (await Sp(e)).report;
}
async function Sp(e) {
	let t = Kd(), n = e.sourceSceneIds.filter((e) => !t.scenes.get(e)), r = rp(e.sourceSceneIds.filter((e) => t.scenes.get(e))), i = ls(e.placements).placements, a = sc(r, i, e.options), o = [
		...a.blocking,
		...a.warnings,
		...await hp(r, e.options.content),
		...n.map((e) => Tp(e))
	], s = e.options.destination.folderId, c = s ? t.folders.get(s) : void 0;
	if (s && (!c || c.type !== "Scene") && o.push({
		code: "destination.folderUnavailable",
		details: { folderId: s },
		overridable: !1,
		sceneIds: [],
		severity: "error"
	}), e.options.content.tokens) for (let e of r) for (let n of e.documents.Token ?? []) {
		let r = n.actorId;
		typeof r == "string" && r && !t.actors.get(r) && o.push({
			code: "tokens.missingActor",
			details: { actorId: r },
			overridable: !0,
			sceneIds: [e.id],
			severity: "warning"
		});
	}
	(!t.user.isGM || !Scene.implementation.canUserCreate(t.user)) && o.push(Tp("destination"));
	for (let t of pf()) t.validate && o.push(...t.validate(r, e));
	return {
		report: oc(o),
		scenes: r
	};
}
function Cp(e, t) {
	let n = new Set(e.acknowledgedWarnings);
	return t.warnings.filter((e) => !n.has(e.code) && !n.has(wp(e)));
}
function wp(e) {
	return `${e.code}:${[...e.sceneIds].sort().join(",")}`;
}
function Tp(e) {
	return {
		code: "selection.unavailable",
		details: {},
		overridable: !1,
		sceneIds: [e],
		severity: "error"
	};
}
//#endregion
//#region src/module/runtime/scene-merger-service.ts
var Ep;
async function Dp(e, t) {
	if (Ep) throw Error("Another Scene merge is already in progress on this client.");
	let n = new sf();
	Ep = n;
	try {
		t?.({
			completed: 0,
			detail: "Validating source Scenes",
			stage: "validating",
			total: 1
		});
		let r = await Sp(e);
		if (Gd.debug("Scene merge request validated", {
			acknowledgedWarnings: e.acknowledgedWarnings.length,
			blocking: r.report.blocking.map((e) => e.code),
			enabledContent: Object.entries(e.options.content).flatMap(([e, t]) => t ? [e] : []),
			placementCount: e.placements.length,
			sourceCount: r.scenes.length,
			warnings: r.report.warnings.map((e) => e.code)
		}), r.report.blocking.length > 0) throw Error(`Scene merge is blocked: ${r.report.blocking.map((e) => nf(e.code)).join(", ")}.`);
		let i = Cp(e, r.report);
		if (i.length > 0) throw Error(`Review and acknowledge ${i.length} merge warning(s) before continuing.`);
		t?.({
			completed: 1,
			detail: "Source Scenes validated",
			stage: "validating",
			total: 1
		}), n.throwIfCancelled();
		let a = await Xf(e, r.scenes, {
			cancellation: n,
			cleanupPartial: rf(),
			...t ? { onProgress: t } : {},
			runtime: uf,
			validationWarnings: r.report.warnings.map(wp)
		});
		return Gd.info("Scene merge completed", a), uf.notifyInfo(`Created Scene “${a.destinationSceneName}”.`), a;
	} catch (e) {
		throw Gd.error("Scene merge failed", e), uf.notifyError(e instanceof Error ? e.message : String(e)), e;
	} finally {
		Ep = void 0;
	}
}
var Op = {
	cancelActiveMerge() {
		Ep?.cancel();
	},
	listSceneFolders: np,
	listScenes: tp,
	merge: Dp,
	async openScene(e) {
		await qd(e).view();
	},
	validate(e) {
		return xp(e);
	}
}, kp = class extends foundry.applications.api.ApplicationV2 {
	#e;
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("fvtt-scene-merger-root"), n.dataset.theme = "fvtt-scene-merger", n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("fvtt-scene-merger-app"), t.replaceChildren(e), this.#e = yo(this.getVueComponent(), this.getVueProps() ?? {}), this.#e.use(Bo()), this.#e.mount(e);
	}
	async _preClose(e) {
		this.unmountVue(), await super._preClose(e);
	}
	unmountVue() {
		this.#e?.unmount(), this.#e = void 0;
	}
}, Ap = class e extends kp {
	static DEFAULT_OPTIONS = {
		id: `${X}-application`,
		position: {
			height: 900,
			width: 1240
		},
		tag: "section",
		window: {
			icon: "fa-solid fa-object-group",
			resizable: !0,
			title: `${Ud}.App.Title`
		}
	};
	static async open() {
		let t = foundry.applications.instances.get(`${X}-application`);
		if (t instanceof e) {
			if (t.rendered) {
				t.bringToFront();
				return;
			}
			await t.render({ force: !0 });
			return;
		}
		await new e().render({ force: !0 });
	}
	getVueComponent() {
		return Vd;
	}
	getVueProps() {
		return {
			services: Op,
			t: (e, t) => {
				let n = Kd().i18n;
				return t ? n.format(e, t) : n.localize(e);
			}
		};
	}
};
async function jp() {
	await Ap.open();
}
//#endregion
//#region src/module/api/create-module-api.ts
function Mp() {
	return {
		cancelActiveMerge: Op.cancelActiveMerge,
		listSceneFolders: Op.listSceneFolders,
		listScenes: Op.listScenes,
		merge: Op.merge,
		open: jp,
		openScene: Op.openScene,
		registerDocumentTransformer: mf,
		registerExtension: ff,
		registerReferenceRewriter: gf,
		registerValidator: hf,
		validate: Op.validate
	};
}
//#endregion
//#region src/module/api/register-module-api.ts
function Np() {
	if (!game) throw Error("Foundry game global is unavailable during module API registration.");
	let e = game.modules.get(X);
	if (!e) throw Error(`Foundry module registry entry was not found for ${X}.`);
	e.api = Mp();
}
//#endregion
//#region src/module/settings/register-settings.ts
function Pp() {
	let e = Kd().settings;
	e.register(X, "cleanupPartialDestination", {
		config: !0,
		default: !0,
		hint: `${Ud}.Settings.CleanupPartial.Hint`,
		name: `${Ud}.Settings.CleanupPartial.Name`,
		scope: "world",
		type: Boolean
	}), e.register(X, "debugLogging", {
		config: !0,
		default: !1,
		hint: `${Ud}.Settings.DebugLogging.Hint`,
		name: `${Ud}.Settings.DebugLogging.Name`,
		scope: "client",
		type: Boolean
	}), e.registerMenu(X, "sceneMerger", {
		icon: "fa-solid fa-object-group",
		label: `${Ud}.Settings.Open.Label`,
		name: `${Ud}.Settings.Open.Name`,
		restricted: !0,
		type: Ap
	});
}
//#endregion
//#region src/module/hooks/register-module-hooks.ts
function Fp() {
	Hooks.once("init", () => {
		Pp(), Np();
	}), Hooks.once("ready", () => {
		let e = Lp();
		Hooks.callAll("fvttSceneMergerRegisterExtensions", e), Hooks.callAll("fvttSceneMergerReady", e);
	}), Hooks.on("getSceneControlButtons", (...e) => {
		Ip(e[0]);
	});
}
function Ip(e) {
	if (!Kd().user.isGM) return;
	let t = e.tiles ?? e.tokens;
	t && (t.tools[`${X}-open`] = {
		button: !0,
		icon: "fa-solid fa-object-group",
		name: `${X}-open`,
		onChange: () => {
			jp();
		},
		order: Object.keys(t.tools).length,
		title: `${Ud}.Controls.Open`,
		visible: !0
	});
}
function Lp() {
	let e = Kd().modules.get(X)?.api;
	if (!e) throw Error("Scene Merger API is unavailable after initialization.");
	return e;
}
//#endregion
//#region src/main.ts
Fp();
//#endregion

//# sourceMappingURL=fvtt-scene-merger.mjs.map