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
}, l = Object.prototype.hasOwnProperty, u = (e, t) => l.call(e, t), d = Array.isArray, f = (e) => x(e) === "[object Map]", p = (e) => x(e) === "[object Set]", m = (e) => x(e) === "[object Date]", h = (e) => typeof e == "function", g = (e) => typeof e == "string", _ = (e) => typeof e == "symbol", v = (e) => typeof e == "object" && !!e, y = (e) => (v(e) || h(e)) && h(e.then) && h(e.catch), b = Object.prototype.toString, x = (e) => b.call(e), S = (e) => x(e).slice(8, -1), C = (e) => x(e) === "[object Object]", w = (e) => g(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ee = /* @__PURE__ */ e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), te = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, ne = /-\w/g, T = te((e) => e.replace(ne, (e) => e.slice(1).toUpperCase())), re = /\B([A-Z])/g, E = te((e) => e.replace(re, "-$1").toLowerCase()), ie = te((e) => e.charAt(0).toUpperCase() + e.slice(1)), ae = te((e) => e ? `on${ie(e)}` : ""), D = (e, t) => !Object.is(e, t), oe = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, O = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, se = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, ce, le = () => ce ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function ue(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = g(r) ? me(r) : ue(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	} else if (g(e) || v(e)) return e;
}
var de = /;(?![^(]*\))/g, fe = /:([^]+)/, pe = /\/\*[^]*?\*\//g;
function me(e) {
	let t = {};
	return e.replace(pe, "").split(de).forEach((e) => {
		if (e) {
			let n = e.split(fe);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function k(e) {
	let t = "";
	if (g(e)) t = e;
	else if (d(e)) for (let n = 0; n < e.length; n++) {
		let r = k(e[n]);
		r && (t += r + " ");
	}
	else if (v(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var he = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ge = /* @__PURE__ */ e(he);
he + "";
function _e(e) {
	return !!e || e === "";
}
function ve(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = ye(e[r], t[r]);
	return n;
}
function ye(e, t) {
	if (e === t) return !0;
	let n = m(e), r = m(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = _(e), r = _(t), n || r) return e === t;
	if (n = d(e), r = d(t), n || r) return n && r ? ve(e, t) : !1;
	if (n = v(e), r = v(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !ye(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
var be = (e) => !!(e && e.__v_isRef === !0), A = (e) => g(e) ? e : e == null ? "" : d(e) || v(e) && (e.toString === b || !h(e.toString)) ? be(e) ? A(e.value) : JSON.stringify(e, xe, 2) : String(e), xe = (e, t) => be(t) ? xe(e, t.value) : f(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Se(t, r) + " =>"] = n, e), {}) } : p(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Se(e)) } : _(t) ? Se(t) : v(t) && !d(t) && !C(t) ? String(t) : t, Se = (e, t = "") => _(e) ? `Symbol(${e.description ?? t})` : e, j, Ce = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && j && (j.active ? (this.parent = j, this.index = (j.scopes ||= []).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
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
			let t = j;
			try {
				return j = this, e();
			} finally {
				j = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = j, j = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (j === this) j = this.prevScope;
			else {
				let e = j;
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
function we(e) {
	return new Ce(e);
}
function Te() {
	return j;
}
function Ee(e, t = !1) {
	j && j.cleanups.push(e);
}
var M, De = /* @__PURE__ */ new WeakSet(), Oe = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, j && (j.active ? j.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, De.has(this) && (De.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Me(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, Ge(this), Fe(this);
		let e = M, t = Ve;
		M = this, Ve = !0;
		try {
			return this.fn();
		} finally {
			Ie(this), M = e, Ve = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) ze(e);
			this.deps = this.depsTail = void 0, Ge(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? De.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Le(this) && this.run();
	}
	get dirty() {
		return Le(this);
	}
}, ke = 0, Ae, je;
function Me(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = je, je = e;
		return;
	}
	e.next = Ae, Ae = e;
}
function Ne() {
	ke++;
}
function Pe() {
	if (--ke > 0) return;
	if (je) {
		let e = je;
		for (je = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Ae;) {
		let t = Ae;
		for (Ae = void 0; t;) {
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
function Fe(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ie(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), ze(r), Be(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Le(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Re(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Re(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ke) || (e.globalVersion = Ke, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Le(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = M, r = Ve;
	M = e, Ve = !0;
	try {
		Fe(e);
		let n = e.fn(e._value);
		(t.version === 0 || D(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		M = n, Ve = r, Ie(e), e.flags &= -3;
	}
}
function ze(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) ze(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Be(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var Ve = !0, He = [];
function Ue() {
	He.push(Ve), Ve = !1;
}
function We() {
	let e = He.pop();
	Ve = e === void 0 ? !0 : e;
}
function Ge(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = M;
		M = void 0;
		try {
			t();
		} finally {
			M = e;
		}
	}
}
var Ke = 0, qe = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, Je = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!M || !Ve || M === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== M) t = this.activeLink = new qe(M, this), M.deps ? (t.prevDep = M.depsTail, M.depsTail.nextDep = t, M.depsTail = t) : M.deps = M.depsTail = t, Ye(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = M.depsTail, t.nextDep = void 0, M.depsTail.nextDep = t, M.depsTail = t, M.deps === t && (M.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, Ke++, this.notify(e);
	}
	notify(e) {
		Ne();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Pe();
		}
	}
};
function Ye(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) Ye(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var Xe = /* @__PURE__ */ new WeakMap(), Ze = /* @__PURE__ */ Symbol(""), Qe = /* @__PURE__ */ Symbol(""), $e = /* @__PURE__ */ Symbol("");
function N(e, t, n) {
	if (Ve && M) {
		let t = Xe.get(e);
		t || Xe.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new Je()), r.map = t, r.key = n), r.track();
	}
}
function et(e, t, n, r, i, a) {
	let o = Xe.get(e);
	if (!o) {
		Ke++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Ne(), t === "clear") o.forEach(s);
	else {
		let i = d(e), a = i && w(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === $e || !_(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get($e)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(Ze)), f(e) && s(o.get(Qe)));
				break;
			case "delete":
				i || (s(o.get(Ze)), f(e) && s(o.get(Qe)));
				break;
			case "set":
				f(e) && s(o.get(Ze));
				break;
		}
	}
	Pe();
}
function tt(e, t) {
	let n = Xe.get(e);
	return n && n.get(t);
}
function nt(e) {
	let t = /* @__PURE__ */ P(e);
	return t === e ? t : (N(t, "iterate", $e), /* @__PURE__ */ Vt(e) ? t : t.map(Wt));
}
function rt(e) {
	return N(e = /* @__PURE__ */ P(e), "iterate", $e), e;
}
function it(e, t) {
	return /* @__PURE__ */ Bt(e) ? Gt(/* @__PURE__ */ zt(e) ? Wt(t) : t) : Wt(t);
}
var at = {
	__proto__: null,
	[Symbol.iterator]() {
		return ot(this, Symbol.iterator, (e) => it(this, e));
	},
	concat(...e) {
		return nt(this).concat(...e.map((e) => d(e) ? nt(e) : e));
	},
	entries() {
		return ot(this, "entries", (e) => (e[1] = it(this, e[1]), e));
	},
	every(e, t) {
		return ct(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return ct(this, "filter", e, t, (e) => e.map((e) => it(this, e)), arguments);
	},
	find(e, t) {
		return ct(this, "find", e, t, (e) => it(this, e), arguments);
	},
	findIndex(e, t) {
		return ct(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return ct(this, "findLast", e, t, (e) => it(this, e), arguments);
	},
	findLastIndex(e, t) {
		return ct(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return ct(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return ut(this, "includes", e);
	},
	indexOf(...e) {
		return ut(this, "indexOf", e);
	},
	join(e) {
		return nt(this).join(e);
	},
	lastIndexOf(...e) {
		return ut(this, "lastIndexOf", e);
	},
	map(e, t) {
		return ct(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return dt(this, "pop");
	},
	push(...e) {
		return dt(this, "push", e);
	},
	reduce(e, ...t) {
		return lt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return lt(this, "reduceRight", e, t);
	},
	shift() {
		return dt(this, "shift");
	},
	some(e, t) {
		return ct(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return dt(this, "splice", e);
	},
	toReversed() {
		return nt(this).toReversed();
	},
	toSorted(e) {
		return nt(this).toSorted(e);
	},
	toSpliced(...e) {
		return nt(this).toSpliced(...e);
	},
	unshift(...e) {
		return dt(this, "unshift", e);
	},
	values() {
		return ot(this, "values", (e) => it(this, e));
	}
};
function ot(e, t, n) {
	let r = rt(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ Vt(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var st = Array.prototype;
function ct(e, t, n, r, i, a) {
	let o = rt(e), s = o !== e && !/* @__PURE__ */ Vt(e), c = o[t];
	if (c !== st[t]) {
		let t = c.apply(e, a);
		return s ? Wt(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, it(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function lt(e, t, n, r) {
	let i = rt(e), a = i !== e && !/* @__PURE__ */ Vt(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = it(e, t)), n.call(this, t, it(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? it(e, c) : c;
}
function ut(e, t, n) {
	let r = /* @__PURE__ */ P(e);
	N(r, "iterate", $e);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Ht(n[0]) ? (n[0] = /* @__PURE__ */ P(n[0]), r[t](...n)) : i;
}
function dt(e, t, n = []) {
	Ue(), Ne();
	let r = (/* @__PURE__ */ P(e))[t].apply(e, n);
	return Pe(), We(), r;
}
var ft = /* @__PURE__ */ e("__proto__,__v_isRef,__isVue"), pt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_));
function mt(e) {
	_(e) || (e = String(e));
	let t = /* @__PURE__ */ P(this);
	return N(t, "has", e), t.hasOwnProperty(e);
}
var ht = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Nt : Mt : i ? jt : At).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = d(e);
		if (!r) {
			let e;
			if (a && (e = at[t])) return e;
			if (t === "hasOwnProperty") return mt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ F(e) ? e : n);
		if ((_(t) ? pt.has(t) : ft(t)) || (r || N(e, "get", t), i)) return o;
		if (/* @__PURE__ */ F(o)) {
			let e = a && w(t) ? o : o.value;
			return r && v(e) ? /* @__PURE__ */ Lt(e) : e;
		}
		return v(o) ? r ? /* @__PURE__ */ Lt(o) : /* @__PURE__ */ Ft(o) : o;
	}
}, gt = class extends ht {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = d(e) && w(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Bt(i);
			if (!/* @__PURE__ */ Vt(n) && !/* @__PURE__ */ Bt(n) && (i = /* @__PURE__ */ P(i), n = /* @__PURE__ */ P(n)), !a && /* @__PURE__ */ F(i) && !/* @__PURE__ */ F(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : u(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ F(e) ? e : r);
		return e === /* @__PURE__ */ P(r) && (o ? D(n, i) && et(e, "set", t, n, i) : et(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = u(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && et(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!_(t) || !pt.has(t)) && N(e, "has", t), n;
	}
	ownKeys(e) {
		return N(e, "iterate", d(e) ? "length" : Ze), Reflect.ownKeys(e);
	}
}, _t = class extends ht {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, vt = /* @__PURE__ */ new gt(), yt = /* @__PURE__ */ new _t(), bt = /* @__PURE__ */ new gt(!0), xt = (e) => e, St = (e) => Reflect.getPrototypeOf(e);
function Ct(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ P(i), o = f(a), c = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? xt : t ? Gt : Wt;
		return !t && N(a, "iterate", l ? Qe : Ze), s(Object.create(u), { next() {
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
function wt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Tt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ P(r), a = /* @__PURE__ */ P(n);
			e || (D(n, a) && N(i, "get", n), N(i, "get", a));
			let { has: o } = St(i), s = t ? xt : e ? Gt : Wt;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && N(/* @__PURE__ */ P(t), "iterate", Ze), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ P(n), i = /* @__PURE__ */ P(t);
			return e || (D(t, i) && N(r, "has", t), N(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ P(a), s = t ? xt : e ? Gt : Wt;
			return !e && N(o, "iterate", Ze), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return s(n, e ? {
		add: wt("add"),
		set: wt("set"),
		delete: wt("delete"),
		clear: wt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ P(this), r = St(n), i = /* @__PURE__ */ P(e), a = !t && !/* @__PURE__ */ Vt(e) && !/* @__PURE__ */ Bt(e) ? i : e;
			return r.has.call(n, a) || D(e, a) && r.has.call(n, e) || D(i, a) && r.has.call(n, i) || (n.add(a), et(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ Vt(n) && !/* @__PURE__ */ Bt(n) && (n = /* @__PURE__ */ P(n));
			let r = /* @__PURE__ */ P(this), { has: i, get: a } = St(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ P(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? D(n, s) && et(r, "set", e, n, s) : et(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ P(this), { has: n, get: r } = St(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ P(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && et(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ P(this), t = e.size !== 0, n = e.clear();
			return t && et(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Ct(r, e, t);
	}), n;
}
function Et(e, t) {
	let n = Tt(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(u(n, r) && r in t ? n : t, r, i);
}
var Dt = { get: /* @__PURE__ */ Et(!1, !1) }, Ot = { get: /* @__PURE__ */ Et(!1, !0) }, kt = { get: /* @__PURE__ */ Et(!0, !1) }, At = /* @__PURE__ */ new WeakMap(), jt = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap(), Nt = /* @__PURE__ */ new WeakMap();
function Pt(e) {
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
function Ft(e) {
	return /* @__PURE__ */ Bt(e) ? e : Rt(e, !1, vt, Dt, At);
}
// @__NO_SIDE_EFFECTS__
function It(e) {
	return Rt(e, !1, bt, Ot, jt);
}
// @__NO_SIDE_EFFECTS__
function Lt(e) {
	return Rt(e, !0, yt, kt, Mt);
}
function Rt(e, t, n, r, i) {
	if (!v(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Pt(S(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function zt(e) {
	return /* @__PURE__ */ Bt(e) ? /* @__PURE__ */ zt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Bt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Vt(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ht(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function P(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ P(t) : e;
}
function Ut(e) {
	return !u(e, "__v_skip") && Object.isExtensible(e) && O(e, "__v_skip", !0), e;
}
var Wt = (e) => v(e) ? /* @__PURE__ */ Ft(e) : e, Gt = (e) => v(e) ? /* @__PURE__ */ Lt(e) : e;
// @__NO_SIDE_EFFECTS__
function F(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function I(e) {
	return qt(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
	return qt(e, !0);
}
function qt(e, t) {
	return /* @__PURE__ */ F(e) ? e : new Jt(e, t);
}
var Jt = class {
	constructor(e, t) {
		this.dep = new Je(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ P(e), this._value = t ? e : Wt(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Vt(e) || /* @__PURE__ */ Bt(e);
		e = n ? e : /* @__PURE__ */ P(e), D(e, t) && (this._rawValue = e, this._value = n ? e : Wt(e), this.dep.trigger());
	}
};
function L(e) {
	return /* @__PURE__ */ F(e) ? e.value : e;
}
var Yt = {
	get: (e, t, n) => t === "__v_raw" ? e : L(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ F(i) && !/* @__PURE__ */ F(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function Xt(e) {
	return /* @__PURE__ */ zt(e) ? e : new Proxy(e, Yt);
}
// @__NO_SIDE_EFFECTS__
function Zt(e) {
	let t = d(e) ? Array(e.length) : {};
	for (let n in e) t[n] = $t(e, n);
	return t;
}
var Qt = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = _(t) ? t : String(t), this._raw = /* @__PURE__ */ P(e);
		let r = !0, i = e;
		if (!d(e) || _(this._key) || !w(this._key)) do
			r = !/* @__PURE__ */ Ht(i) || /* @__PURE__ */ Vt(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = L(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ F(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ F(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return tt(this._raw, this._key);
	}
};
function $t(e, t, n) {
	return new Qt(e, t, n);
}
var en = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new Je(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ke - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && M !== this) return Me(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Re(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function tn(e, t, n = !1) {
	let r, i;
	return h(e) ? r = e : (r = e.get, i = e.set), new en(r, i, n);
}
var nn = {}, rn = /* @__PURE__ */ new WeakMap(), an = void 0;
function on(e, t = !1, n = an) {
	if (n) {
		let t = rn.get(n);
		t || rn.set(n, t = []), t.push(e);
	}
}
function sn(e, n, i = t) {
	let { immediate: a, deep: o, once: s, scheduler: l, augmentJob: u, call: f } = i, p = (e) => o ? e : /* @__PURE__ */ Vt(e) || o === !1 || o === 0 ? cn(e, 1) : cn(e), m, g, _, v, y = !1, b = !1;
	if (/* @__PURE__ */ F(e) ? (g = () => e.value, y = /* @__PURE__ */ Vt(e)) : /* @__PURE__ */ zt(e) ? (g = () => p(e), y = !0) : d(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ zt(e) || /* @__PURE__ */ Vt(e)), g = () => e.map((e) => {
		if (/* @__PURE__ */ F(e)) return e.value;
		if (/* @__PURE__ */ zt(e)) return p(e);
		if (h(e)) return f ? f(e, 2) : e();
	})) : g = h(e) ? n ? f ? () => f(e, 2) : e : () => {
		if (_) {
			Ue();
			try {
				_();
			} finally {
				We();
			}
		}
		let t = an;
		an = m;
		try {
			return f ? f(e, 3, [v]) : e(v);
		} finally {
			an = t;
		}
	} : r, n && o) {
		let e = g, t = o === !0 ? Infinity : o;
		g = () => cn(e(), t);
	}
	let x = Te(), S = () => {
		m.stop(), x && x.active && c(x.effects, m);
	};
	if (s && n) {
		let e = n;
		n = (...t) => {
			let n = e(...t);
			return S(), n;
		};
	}
	let C = b ? Array(e.length).fill(nn) : nn, w = (e) => {
		if (!(!(m.flags & 1) || !m.dirty && !e)) if (n) {
			let t = m.run();
			if (e || o || y || (b ? t.some((e, t) => D(e, C[t])) : D(t, C))) {
				_ && _();
				let e = an;
				an = m;
				try {
					let e = [
						t,
						C === nn ? void 0 : b && C[0] === nn ? [] : C,
						v
					];
					C = t, f ? f(n, 3, e) : n(...e);
				} finally {
					an = e;
				}
			}
		} else m.run();
	};
	return u && u(w), m = new Oe(g), m.scheduler = l ? () => l(w, !1) : w, v = (e) => on(e, !1, m), _ = m.onStop = () => {
		let e = rn.get(m);
		if (e) {
			if (f) f(e, 4);
			else for (let t of e) t();
			rn.delete(m);
		}
	}, n ? a ? w(!0) : C = m.run() : l ? l(w.bind(null, !0), !0) : m.run(), S.pause = m.pause.bind(m), S.resume = m.resume.bind(m), S.stop = S, S;
}
function cn(e, t = Infinity, n) {
	if (t <= 0 || !v(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ F(e)) cn(e.value, t, n);
	else if (d(e)) for (let r = 0; r < e.length; r++) cn(e[r], t, n);
	else if (p(e) || f(e)) e.forEach((e) => {
		cn(e, t, n);
	});
	else if (C(e)) {
		for (let r in e) cn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && cn(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function ln(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		dn(e, t, n);
	}
}
function un(e, t, n, r) {
	if (h(e)) {
		let i = ln(e, t, n, r);
		return i && y(i) && i.catch((e) => {
			dn(e, t, n);
		}), i;
	}
	if (d(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(un(e[a], t, n, r));
		return i;
	}
}
function dn(e, n, r, i = !0) {
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
			Ue(), ln(o, null, 10, [
				e,
				i,
				a
			]), We();
			return;
		}
	}
	fn(e, r, a, i, s);
}
function fn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var R = [], pn = -1, mn = [], hn = null, gn = 0, _n = /* @__PURE__ */ Promise.resolve(), vn = null;
function yn(e) {
	let t = vn || _n;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function bn(e) {
	let t = pn + 1, n = R.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = R[r], a = En(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function xn(e) {
	if (!(e.flags & 1)) {
		let t = En(e), n = R[R.length - 1];
		!n || !(e.flags & 2) && t >= En(n) ? R.push(e) : R.splice(bn(t), 0, e), e.flags |= 1, Sn();
	}
}
function Sn() {
	vn ||= _n.then(Dn);
}
function Cn(e) {
	d(e) ? mn.push(...e) : hn && e.id === -1 ? hn.splice(gn + 1, 0, e) : e.flags & 1 || (mn.push(e), e.flags |= 1), Sn();
}
function wn(e, t, n = pn + 1) {
	for (; n < R.length; n++) {
		let t = R[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			R.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function Tn(e) {
	if (mn.length) {
		let e = [...new Set(mn)].sort((e, t) => En(e) - En(t));
		if (mn.length = 0, hn) {
			hn.push(...e);
			return;
		}
		for (hn = e, gn = 0; gn < hn.length; gn++) {
			let e = hn[gn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		hn = null, gn = 0;
	}
}
var En = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Dn(e) {
	try {
		for (pn = 0; pn < R.length; pn++) {
			let e = R[pn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), ln(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; pn < R.length; pn++) {
			let e = R[pn];
			e && (e.flags &= -2);
		}
		pn = -1, R.length = 0, Tn(e), vn = null, (R.length || mn.length) && Dn(e);
	}
}
var On = null, kn = null;
function An(e) {
	let t = On;
	return On = e, kn = e && e.type.__scopeId || null, t;
}
function jn(e, t = On, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && Ri(-1);
		let i = An(t), a;
		try {
			a = e(...n);
		} finally {
			An(i), r._d && Ri(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function Mn(e, n) {
	if (On === null) return e;
	let r = va(On), i = e.dirs ||= [];
	for (let e = 0; e < n.length; e++) {
		let [a, o, s, c = t] = n[e];
		a && (h(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && cn(o), i.push({
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
function Nn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (Ue(), un(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), We());
	}
}
function Pn(e, t) {
	if (q) {
		let n = q.provides, r = q.parent && q.parent.provides;
		r === n && (n = q.provides = Object.create(r)), n[e] = t;
	}
}
function Fn(e, t, n = !1) {
	let r = ra();
	if (r || Vr) {
		let i = Vr ? Vr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && h(t) ? t.call(r && r.proxy) : t;
	}
}
function In() {
	return !!(ra() || Vr);
}
var Ln = /* @__PURE__ */ Symbol.for("v-scx"), Rn = () => Fn(Ln);
function zn(e, t, n) {
	return Bn(e, t, n);
}
function Bn(e, n, i = t) {
	let { immediate: a, deep: o, flush: c, once: l } = i, u = s({}, i), d = n && a || !n && c !== "post", f;
	if (la) {
		if (c === "sync") {
			let e = Rn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = r, e.resume = r, e.pause = r, e;
		}
	}
	let p = q;
	u.call = (e, t, n) => un(e, p, t, n);
	let m = !1;
	c === "post" ? u.scheduler = (e) => {
		B(e, p && p.suspense);
	} : c !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : xn(e);
	}), u.augmentJob = (e) => {
		n && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = sn(e, n, u);
	return la && (f ? f.push(h) : d && h()), h;
}
function Vn(e, t, n) {
	let r = this.proxy, i = g(e) ? e.includes(".") ? Hn(r, e) : () => r[e] : e.bind(r, r), a;
	h(t) ? a = t : (a = t.handler, n = t);
	let o = oa(this), s = Bn(i, a.bind(r), n);
	return o(), s;
}
function Hn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Un = /* @__PURE__ */ Symbol("_vte"), Wn = (e) => e.__isTeleport, Gn = /* @__PURE__ */ Symbol("_leaveCb");
function Kn(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, Kn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function qn(e, t) {
	return h(e) ? /* @__PURE__ */ s({ name: e.name }, t, { setup: e }) : e;
}
function Jn(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function Yn(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var Xn = /* @__PURE__ */ new WeakMap();
function Zn(e, n, r, a, o = !1) {
	if (d(e)) {
		e.forEach((e, t) => Zn(e, n && (d(n) ? n[t] : n), r, a, o));
		return;
	}
	if ($n(a) && !o) {
		a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && Zn(e, n, r, a.component.subTree);
		return;
	}
	let s = a.shapeFlag & 4 ? va(a.component) : a.el, l = o ? null : s, { i: f, r: p } = e, m = n && n.r, _ = f.refs === t ? f.refs = {} : f.refs, v = f.setupState, y = /* @__PURE__ */ P(v), b = v === t ? i : (e) => Yn(_, e) ? !1 : u(y, e), x = (e, t) => !(t && Yn(_, t));
	if (m != null && m !== p) {
		if (Qn(n), g(m)) _[m] = null, b(m) && (v[m] = null);
		else if (/* @__PURE__ */ F(m)) {
			let e = n;
			x(m, e.k) && (m.value = null), e.k && (_[e.k] = null);
		}
	}
	if (h(p)) ln(p, f, 12, [l, _]);
	else {
		let t = g(p), n = /* @__PURE__ */ F(p);
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
					i(), Xn.delete(e);
				};
				t.id = -1, Xn.set(e, t), B(t, r);
			} else Qn(e), i();
		}
	}
}
function Qn(e) {
	let t = Xn.get(e);
	t && (t.flags |= 8, Xn.delete(e));
}
le().requestIdleCallback, le().cancelIdleCallback;
var $n = (e) => !!e.type.__asyncLoader, er = (e) => e.type.__isKeepAlive;
function tr(e, t) {
	rr(e, "a", t);
}
function nr(e, t) {
	rr(e, "da", t);
}
function rr(e, t, n = q) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (ar(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) er(e.parent.vnode) && ir(r, t, n, e), e = e.parent;
	}
}
function ir(e, t, n, r) {
	let i = ar(t, e, r, !0);
	fr(() => {
		c(r[t], i);
	}, n);
}
function ar(e, t, n = q, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Ue();
			let i = oa(n), a = un(t, n, e, r);
			return i(), We(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var or = (e) => (t, n = q) => {
	(!la || e === "sp") && ar(e, (...e) => t(...e), n);
}, sr = or("bm"), cr = or("m"), lr = or("bu"), ur = or("u"), dr = or("bum"), fr = or("um"), pr = or("sp"), mr = or("rtg"), hr = or("rtc");
function gr(e, t = q) {
	ar("ec", e, t);
}
var _r = /* @__PURE__ */ Symbol.for("v-ndc");
function vr(e, t, n, r) {
	let i, a = n && n[r], o = d(e);
	if (o || g(e)) {
		let n = o && /* @__PURE__ */ zt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ Vt(e), s = /* @__PURE__ */ Bt(e), e = rt(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? Gt(Wt(e[n])) : Wt(e[n]) : e[n], n, void 0, a && a[n]);
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
var yr = (e) => e ? ca(e) ? va(e) : yr(e.parent) : null, br = /* @__PURE__ */ s(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => yr(e.parent),
	$root: (e) => yr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => kr(e),
	$forceUpdate: (e) => e.f ||= () => {
		xn(e.update);
	},
	$nextTick: (e) => e.n ||= yn.bind(e.proxy),
	$watch: (e) => Vn.bind(e)
}), xr = (e, n) => e !== t && !e.__isScriptSetup && u(e, n), Sr = {
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
			else if (xr(i, n)) return s[n] = 1, i[n];
			else if (a !== t && u(a, n)) return s[n] = 2, a[n];
			else if (u(o, n)) return s[n] = 3, o[n];
			else if (r !== t && u(r, n)) return s[n] = 4, r[n];
			else wr && (s[n] = 0);
		}
		let d = br[n], f, p;
		if (d) return n === "$attrs" && N(e.attrs, "get", ""), d(e);
		if ((f = c.__cssModules) && (f = f[n])) return f;
		if (r !== t && u(r, n)) return s[n] = 4, r[n];
		if (p = l.config.globalProperties, u(p, n)) return p[n];
	},
	set({ _: e }, n, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return xr(a, n) ? (a[n] = r, !0) : i !== t && u(i, n) ? (i[n] = r, !0) : u(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (o[n] = r, !0);
	},
	has({ _: { data: e, setupState: n, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== t && c[0] !== "$" && u(e, c) || xr(n, c) || u(o, c) || u(i, c) || u(br, c) || u(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? u(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Cr(e) {
	return d(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var wr = !0;
function Tr(e) {
	let t = kr(e), n = e.proxy, i = e.ctx;
	wr = !1, t.beforeCreate && Dr(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: f, beforeMount: p, mounted: m, beforeUpdate: g, updated: _, activated: y, deactivated: b, beforeDestroy: x, beforeUnmount: S, destroyed: C, unmounted: w, render: ee, renderTracked: te, renderTriggered: ne, errorCaptured: T, serverPrefetch: re, expose: E, inheritAttrs: ie, components: ae, directives: D, filters: oe } = t;
	if (u && Er(u, i, null), s) for (let e in s) {
		let t = s[e];
		h(t) && (i[e] = t.bind(n));
	}
	if (a) {
		let t = a.call(n, n);
		v(t) && (e.data = /* @__PURE__ */ Ft(t));
	}
	if (wr = !0, o) for (let e in o) {
		let t = o[e], a = J({
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
	if (c) for (let e in c) Or(c[e], i, n, e);
	if (l) {
		let e = h(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Pn(t, e[t]);
		});
	}
	f && Dr(f, e, "c");
	function O(e, t) {
		d(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (O(sr, p), O(cr, m), O(lr, g), O(ur, _), O(tr, y), O(nr, b), O(gr, T), O(hr, te), O(mr, ne), O(dr, S), O(fr, w), O(pr, re), d(E)) if (E.length) {
		let t = e.exposed ||= {};
		E.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	ee && e.render === r && (e.render = ee), ie != null && (e.inheritAttrs = ie), ae && (e.components = ae), D && (e.directives = D), re && Jn(e);
}
function Er(e, t, n = r) {
	d(e) && (e = Pr(e));
	for (let n in e) {
		let r = e[n], i;
		i = v(r) ? "default" in r ? Fn(r.from || n, r.default, !0) : Fn(r.from || n) : Fn(r), /* @__PURE__ */ F(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Dr(e, t, n) {
	un(d(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Or(e, t, n, r) {
	let i = r.includes(".") ? Hn(n, r) : () => n[r];
	if (g(e)) {
		let n = t[e];
		h(n) && zn(i, n);
	} else if (h(e)) zn(i, e.bind(n));
	else if (v(e)) if (d(e)) e.forEach((e) => Or(e, t, n, r));
	else {
		let r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
		h(r) && zn(i, r, e);
	}
}
function kr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Ar(c, e, o, !0)), Ar(c, t, o)), v(t) && a.set(t, c), c;
}
function Ar(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Ar(e, a, n, !0), i && i.forEach((t) => Ar(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = jr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var jr = {
	data: Mr,
	props: Ir,
	emits: Ir,
	methods: Fr,
	computed: Fr,
	beforeCreate: z,
	created: z,
	beforeMount: z,
	mounted: z,
	beforeUpdate: z,
	updated: z,
	beforeDestroy: z,
	beforeUnmount: z,
	destroyed: z,
	unmounted: z,
	activated: z,
	deactivated: z,
	errorCaptured: z,
	serverPrefetch: z,
	components: Fr,
	directives: Fr,
	watch: Lr,
	provide: Mr,
	inject: Nr
};
function Mr(e, t) {
	return t ? e ? function() {
		return s(h(e) ? e.call(this, this) : e, h(t) ? t.call(this, this) : t);
	} : t : e;
}
function Nr(e, t) {
	return Fr(Pr(e), Pr(t));
}
function Pr(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function z(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Fr(e, t) {
	return e ? s(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ir(e, t) {
	return e ? d(e) && d(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : s(/* @__PURE__ */ Object.create(null), Cr(e), Cr(t ?? {})) : t;
}
function Lr(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = s(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = z(e[r], t[r]);
	return n;
}
function Rr() {
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
var zr = 0;
function Br(e, t) {
	return function(n, r = null) {
		h(n) || (n = s({}, n)), r != null && !v(r) && (r = null);
		let i = Rr(), a = /* @__PURE__ */ new WeakSet(), o = [], c = !1, l = i.app = {
			_uid: zr++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: ba,
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
					let u = l._ceVNode || G(n, r);
					return u.appContext = i, s === !0 ? s = "svg" : s === !1 && (s = void 0), o && t ? t(u, a) : e(u, a, s), c = !0, l._container = a, a.__vue_app__ = l, va(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				c && (un(o, l._instance, 16), e(null, l._container), delete l._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, l;
			},
			runWithContext(e) {
				let t = Vr;
				Vr = l;
				try {
					return e();
				} finally {
					Vr = t;
				}
			}
		};
		return l;
	};
}
var Vr = null, Hr = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${T(t)}Modifiers`] || e[`${E(t)}Modifiers`];
function Ur(e, n, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || t, a = r, o = n.startsWith("update:"), s = o && Hr(i, n.slice(7));
	s && (s.trim && (a = r.map((e) => g(e) ? e.trim() : e)), s.number && (a = r.map(se)));
	let c, l = i[c = ae(n)] || i[c = ae(T(n))];
	!l && o && (l = i[c = ae(E(n))]), l && un(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, un(u, e, 6, a);
	}
}
var Wr = /* @__PURE__ */ new WeakMap();
function Gr(e, t, n = !1) {
	let r = n ? Wr : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, c = !1;
	if (!h(e)) {
		let r = (e) => {
			let n = Gr(e, t, !0);
			n && (c = !0, s(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !c ? (v(e) && r.set(e, null), null) : (d(a) ? a.forEach((e) => o[e] = null) : s(o, a), v(e) && r.set(e, o), o);
}
function Kr(e, t) {
	return !e || !a(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), u(e, t[0].toLowerCase() + t.slice(1)) || u(e, E(t)) || u(e, t));
}
function qr(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: s, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = An(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = Yi(u.call(t, e, d, f, m, p, h)), y = c;
		} else {
			let e = t;
			v = Yi(e.length > 1 ? e(f, {
				attrs: c,
				slots: s,
				emit: l
			}) : e(f, null)), y = t.props ? c : Jr(c);
		}
	} catch (t) {
		Pi.length = 0, dn(t, e, 1), v = G(Mi);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(o) && (y = Yr(y, a)), b = qi(b, y, !1, !0));
	}
	return n.dirs && (b = qi(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && Kn(b, n.transition), v = b, An(_), v;
}
var Jr = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || a(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, Yr = (e, t) => {
	let n = {};
	for (let r in e) (!o(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function Xr(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? Zr(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (Qr(o, r, n) && !Kr(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? Zr(r, o, l) : !0 : !!o;
	return !1;
}
function Zr(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (Qr(t, e, a) && !Kr(n, a)) return !0;
	}
	return !1;
}
function Qr(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && v(r) && v(i) ? !ye(r, i) : r !== i;
}
function $r({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var ei = {}, ti = () => Object.create(ei), ni = (e) => Object.getPrototypeOf(e) === ei;
function ri(e, t, n, r = !1) {
	let i = {}, a = ti();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), ai(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ It(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function ii(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ P(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (Kr(e.emitsOptions, o)) continue;
				let d = t[o];
				if (c) if (u(a, o)) d !== a[o] && (a[o] = d, l = !0);
				else {
					let t = T(o);
					i[t] = oi(c, s, t, d, e, !1);
				}
				else d !== a[o] && (a[o] = d, l = !0);
			}
		}
	} else {
		ai(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !u(t, a) && ((r = E(a)) === a || !u(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = oi(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !u(t, e)) && (delete a[e], l = !0);
	}
	l && et(e.attrs, "set", "");
}
function ai(e, n, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (n) for (let t in n) {
		if (ee(t)) continue;
		let l = n[t], d;
		a && u(a, d = T(t)) ? !o || !o.includes(d) ? r[d] = l : (c ||= {})[d] = l : Kr(e.emitsOptions, t) || (!(t in i) || l !== i[t]) && (i[t] = l, s = !0);
	}
	if (o) {
		let n = /* @__PURE__ */ P(r), i = c || t;
		for (let t = 0; t < o.length; t++) {
			let s = o[t];
			r[s] = oi(a, n, s, i[s], e, !u(i, s));
		}
	}
	return s;
}
function oi(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = u(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && h(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = oa(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === E(n)) && (r = !0));
	}
	return r;
}
var si = /* @__PURE__ */ new WeakMap();
function ci(e, r, i = !1) {
	let a = i ? si : r.propsCache, o = a.get(e);
	if (o) return o;
	let c = e.props, l = {}, f = [], p = !1;
	if (!h(e)) {
		let t = (e) => {
			p = !0;
			let [t, n] = ci(e, r, !0);
			s(l, t), n && f.push(...n);
		};
		!i && r.mixins.length && r.mixins.forEach(t), e.extends && t(e.extends), e.mixins && e.mixins.forEach(t);
	}
	if (!c && !p) return v(e) && a.set(e, n), n;
	if (d(c)) for (let e = 0; e < c.length; e++) {
		let n = T(c[e]);
		li(n) && (l[n] = t);
	}
	else if (c) for (let e in c) {
		let t = T(e);
		if (li(t)) {
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
function li(e) {
	return e[0] !== "$" && !ee(e);
}
var di = (e) => e === "_" || e === "_ctx" || e === "$stable", fi = (e) => d(e) ? e.map(Yi) : [Yi(e)], pi = (e, t, n) => {
	if (t._n) return t;
	let r = jn((...e) => fi(t(...e)), n);
	return r._c = !1, r;
}, mi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (di(n)) continue;
		let i = e[n];
		if (h(i)) t[n] = pi(n, i, r);
		else if (i != null) {
			let e = fi(i);
			t[n] = () => e;
		}
	}
}, hi = (e, t) => {
	let n = fi(t);
	e.slots.default = () => n;
}, gi = (e, t, n) => {
	for (let r in t) (n || !di(r)) && (e[r] = t[r]);
}, _i = (e, t, n) => {
	let r = e.slots = ti();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (gi(r, t, n), n && O(r, "_", e, !0)) : mi(t, r);
	} else t && hi(e, t);
}, vi = (e, n, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = t;
	if (i.shapeFlag & 32) {
		let e = n._;
		e ? r && e === 1 ? o = !1 : gi(a, n, r) : (o = !n.$stable, mi(n, a)), s = n;
	} else n && (hi(e, n), s = { default: 1 });
	if (o) for (let e in a) !di(e) && s[e] == null && delete a[e];
}, B = Ai;
function yi(e) {
	return bi(e);
}
function bi(e, i) {
	let a = le();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = r, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Hi(e, t) && (r = ye(e), k(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case ji:
				y(e, t, n, r);
				break;
			case Mi:
				b(e, t, n, r);
				break;
			case Ni:
				e ?? x(t, n, r, o);
				break;
			case V:
				ae(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? w(e, t, n, r, i, a, o, s, c) : d & 6 ? D(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, xe);
		}
		u != null && i ? Zn(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && Zn(e.ref, null, a, e, !0);
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
	}, S = ({ el: e, anchor: t }, n, r) => {
		let i;
		for (; e && e !== t;) i = h(e), o(e, n, r), e = i;
		o(t, n, r);
	}, C = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, w = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) te(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), re(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, te = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && T(e.children, d, null, r, i, xi(e, a), s, u), _ && Nn(e, null, r, "created"), ne(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !ee(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && $i(f, r, e);
		}
		_ && Nn(e, null, r, "beforeMount");
		let v = Ci(i, g);
		v && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && B(() => {
			try {
				f && $i(f, r, e), v && g.enter(d), _ && Nn(e, null, r, "mounted");
			} finally {}
		}, i);
	}, ne = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || ki(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				ne(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, T = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? Xi(e[l]) : Yi(e[l]), t, n, r, i, a, o, s);
	}, re = (e, n, r, i, a, o, s) => {
		let l = n.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = n;
		u |= e.patchFlag & 16;
		let m = e.props || t, h = n.props || t, g;
		if (r && Si(r, !1), (g = h.onVnodeBeforeUpdate) && $i(g, r, n, e), f && Nn(n, e, r, "beforeUpdate"), r && Si(r, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? E(e.dynamicChildren, d, l, r, i, xi(n, a), o) : s || de(e, n, l, null, r, i, xi(n, a), o, !1), u > 0) {
			if (u & 16) ie(l, m, h, r, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = n.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let n = e[t], i = m[n], o = h[n];
					(o !== i || n === "value") && c(l, n, i, o, a, r);
				}
			}
			u & 1 && e.children !== n.children && p(l, n.children);
		} else !s && d == null && ie(l, m, h, r, a);
		((g = h.onVnodeUpdated) || f) && B(() => {
			g && $i(g, r, n, e), f && Nn(n, e, r, "updated");
		}, i);
	}, E = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === V || !Hi(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
		}
	}, ie = (e, n, r, i, a) => {
		if (n !== r) {
			if (n !== t) for (let t in n) !ee(t) && !(t in r) && c(e, t, n[t], null, a, i);
			for (let t in r) {
				if (ee(t)) continue;
				let o = r[t], s = n[t];
				o !== s && t !== "value" && c(e, t, s, o, a, i);
			}
			"value" in r && c(e, "value", n.value, r.value, a);
		}
	}, ae = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), T(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (E(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && wi(e, t, !0)) : de(e, t, n, f, i, a, s, c, l);
	}, D = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : O(t, n, r, i, a, o, c) : se(e, t, c);
	}, O = (e, t, n, r, i, a, o) => {
		let s = e.component = na(e, r, i);
		if (er(e) && (s.ctx.renderer = xe), ua(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, ce, o), !e.el) {
				let r = s.subTree = G(Mi);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else ce(s, e, t, n, i, a, o);
	}, se = (e, t, n) => {
		let r = t.component = e.component;
		if (Xr(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			ue(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, ce = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Ei(e);
					if (n) {
						t && (t.el = c.el, ue(e, t, o)), n.asyncDep.then(() => {
							B(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				Si(e, !1), t ? (t.el = c.el, ue(e, t, o)) : t = c, n && oe(n), (d = t.props && t.props.onVnodeBeforeUpdate) && $i(d, s, t, c), Si(e, !0);
				let f = qr(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), ye(p), e, i, a), t.el = f.el, u === null && $r(e, f.el), r && B(r, i), (d = t.props && t.props.onVnodeUpdated) && B(() => $i(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = $n(t);
				if (Si(e, !1), l && oe(l), !m && (o = c && c.onVnodeBeforeMount) && $i(o, d, t), Si(e, !0), s && j) {
					let t = () => {
						e.subTree = qr(e), j(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = qr(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && B(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					B(() => $i(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && $n(d.vnode) && d.vnode.shapeFlag & 256) && e.a && B(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Oe(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => xn(u), Si(e, !0), l();
	}, ue = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, ii(e, t.props, r, n), vi(e, t.children, n), Ue(), wn(e), We();
	}, de = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				pe(l, d, n, r, i, a, o, s, c);
				return;
			} else if (f & 256) {
				fe(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && ve(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? pe(l, d, n, r, i, a, o, s, c) : ve(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && T(d, n, r, i, a, o, s, c));
	}, fe = (e, t, r, i, a, o, s, c, l) => {
		e ||= n, t ||= n;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let n = t[p] = l ? Xi(t[p]) : Yi(t[p]);
			v(e[p], n, r, null, a, o, s, c, l);
		}
		u > d ? ve(e, a, o, !0, !1, f) : T(t, r, i, a, o, s, c, l, f);
	}, pe = (e, t, r, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let n = e[u], i = t[u] = l ? Xi(t[u]) : Yi(t[u]);
			if (Hi(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let n = e[f], i = t[p] = l ? Xi(t[p]) : Yi(t[p]);
			if (Hi(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, n = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? Xi(t[u]) : Yi(t[u]), r, n, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) k(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? Xi(t[u]) : Yi(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let n = e[u];
				if (y >= b) {
					k(n, a, o, !0);
					continue;
				}
				let i;
				if (n.key != null) i = g.get(n.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && Hi(n, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? k(n, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(n, t[i], r, null, a, o, s, c, l), y++);
			}
			let w = x ? Ti(C) : n;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, n = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Oi(f) : i;
				C[u] === 0 ? v(null, n, r, p, a, o, s, c, l) : x && (_ < 0 || u !== w[_] ? me(n, r, p, 2) : _--);
			}
		}
	}, me = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			me(e.component.subTree, t, n, r);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, r);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, xe);
			return;
		}
		if (c === V) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) me(u[e], t, n, r);
			o(e.anchor, t, n);
			return;
		}
		if (c === Ni) {
			S(e, t, n);
			return;
		}
		if (r !== 2 && d & 1 && l) if (r === 0) l.persisted && !a[Gn] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), B(() => l.enter(a), i));
		else {
			let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? s(a) : o(a, t, n);
			}, d = () => {
				let e = a._isLeaving || !!a[Gn];
				a._isLeaving && a[Gn](!0), l.persisted && !e ? u() : r(a, () => {
					u(), c && c();
				});
			};
			i ? i(a, u, d) : d();
		}
		else o(a, t, n);
	}, k = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (Ue(), Zn(s, null, n, e, !0), We()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !$n(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && $i(_, t, e), u & 6) _e(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Nn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, xe, r) : l && !l.hasOnce && (a !== V || d > 0 && d & 64) ? ve(l, t, n, !1, !0) : (a === V && d & 384 || !i && u & 16) && ve(c, t, n), r && he(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && B(() => {
			_ && $i(_, t, e), h && Nn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, he = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === V) {
			ge(n, r);
			return;
		}
		if (t === Ni) {
			C(e);
			return;
		}
		let a = () => {
			s(n), i && !i.persisted && i.afterLeave && i.afterLeave();
		};
		if (e.shapeFlag & 1 && i && !i.persisted) {
			let { leave: t, delayLeave: r } = i, o = () => t(n, a);
			r ? r(e.el, a, o) : o();
		} else a();
	}, ge = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, _e = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		Di(c), Di(l), r && oe(r), i.stop(), a && (a.flags |= 8, k(o, e, t, n)), s && B(s, t), B(() => {
			e.isUnmounted = !0;
		}, t);
	}, ve = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) k(e[o], t, n, r, i);
	}, ye = (e) => {
		if (e.shapeFlag & 6) return ye(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Un];
		return n ? h(n) : t;
	}, be = !1, A = (e, t, n) => {
		let r;
		e == null ? t._vnode && (k(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, be ||= (be = !0, wn(r), Tn(), !1);
	}, xe = {
		p: v,
		um: k,
		m: me,
		r: he,
		mt: O,
		mc: T,
		pc: de,
		pbc: E,
		n: ye,
		o: e
	}, Se, j;
	return i && ([Se, j] = i(xe)), {
		render: A,
		hydrate: Se,
		createApp: Br(A, Se)
	};
}
function xi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Si({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ci(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function wi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (d(r) && d(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Xi(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && wi(t, a)), a.type === ji && (a.patchFlag === -1 && (a = i[e] = Xi(a)), a.el = t.el), a.type === Mi && !a.el && (a.el = t.el);
	}
}
function Ti(e) {
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
function Ei(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Ei(t);
}
function Di(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Oi(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? Oi(t.subTree) : null;
}
var ki = (e) => e.__isSuspense;
function Ai(e, t) {
	t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : Cn(e);
}
var V = /* @__PURE__ */ Symbol.for("v-fgt"), ji = /* @__PURE__ */ Symbol.for("v-txt"), Mi = /* @__PURE__ */ Symbol.for("v-cmt"), Ni = /* @__PURE__ */ Symbol.for("v-stc"), Pi = [], Fi = null;
function H(e = !1) {
	Pi.push(Fi = e ? null : []);
}
function Ii() {
	Pi.pop(), Fi = Pi[Pi.length - 1] || null;
}
var Li = 1;
function Ri(e, t = !1) {
	Li += e, e < 0 && Fi && t && (Fi.hasOnce = !0);
}
function zi(e) {
	return e.dynamicChildren = Li > 0 ? Fi || n : null, Ii(), Li > 0 && Fi && Fi.push(e), e;
}
function U(e, t, n, r, i, a) {
	return zi(W(e, t, n, r, i, a, !0));
}
function Bi(e, t, n, r, i) {
	return zi(G(e, t, n, r, i, !0));
}
function Vi(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Hi(e, t) {
	return e.type === t.type && e.key === t.key;
}
var Ui = ({ key: e }) => e ?? null, Wi = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : g(e) || /* @__PURE__ */ F(e) || h(e) ? {
	i: On,
	r: e,
	k: t,
	f: !!n
} : e);
function W(e, t = null, n = null, r = 0, i = null, a = e === V ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Ui(t),
		ref: t && Wi(t),
		scopeId: kn,
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
		ctx: On
	};
	return s ? (Zi(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= g(n) ? 8 : 16), Li > 0 && !o && Fi && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && Fi.push(c), c;
}
var G = Gi;
function Gi(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === _r) && (e = Mi), Vi(e)) {
		let r = qi(e, t, !0);
		return n && Zi(r, n), Li > 0 && !a && Fi && (r.shapeFlag & 6 ? Fi[Fi.indexOf(e)] = r : Fi.push(r)), r.patchFlag = -2, r;
	}
	if (ya(e) && (e = e.__vccOpts), t) {
		t = Ki(t);
		let { class: e, style: n } = t;
		e && !g(e) && (t.class = k(e)), v(n) && (/* @__PURE__ */ Ht(n) && !d(n) && (n = s({}, n)), t.style = ue(n));
	}
	let o = g(e) ? 1 : ki(e) ? 128 : Wn(e) ? 64 : v(e) ? 4 : h(e) ? 2 : 0;
	return W(e, t, n, r, i, o, a, !0);
}
function Ki(e) {
	return e ? /* @__PURE__ */ Ht(e) || ni(e) ? s({}, e) : e : null;
}
function qi(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Qi(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Ui(l),
		ref: t && t.ref ? n && a ? d(a) ? a.concat(Wi(t)) : [a, Wi(t)] : Wi(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== V ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && qi(e.ssContent),
		ssFallback: e.ssFallback && qi(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && Kn(u, c.clone(u)), u;
}
function Ji(e = " ", t = 0) {
	return G(ji, null, e, t);
}
function K(e = "", t = !1) {
	return t ? (H(), Bi(Mi, null, e)) : G(Mi, null, e);
}
function Yi(e) {
	return e == null || typeof e == "boolean" ? G(Mi) : d(e) ? G(V, null, e.slice()) : Vi(e) ? Xi(e) : G(ji, null, String(e));
}
function Xi(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : qi(e);
}
function Zi(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (d(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), Zi(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !ni(t) ? t._ctx = On : r === 3 && On && (On.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else h(t) ? (t = {
		default: t,
		_ctx: On
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Ji(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function Qi(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = k([t.class, r.class]));
		else if (e === "style") t.style = ue([t.style, r.style]);
		else if (a(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(d(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !o(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function $i(e, t, n, r = null) {
	un(e, t, 7, [n, r]);
}
var ea = Rr(), ta = 0;
function na(e, n, r) {
	let i = e.type, a = (n ? n.appContext : e.appContext) || ea, o = {
		uid: ta++,
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
		scope: new Ce(!0),
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
		propsOptions: ci(i, a),
		emitsOptions: Gr(i, a),
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
	return o.ctx = { _: o }, o.root = n ? n.root : o, o.emit = Ur.bind(null, o), e.ce && e.ce(o), o;
}
var q = null, ra = () => q || On, ia, aa;
{
	let e = le(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	ia = t("__VUE_INSTANCE_SETTERS__", (e) => q = e), aa = t("__VUE_SSR_SETTERS__", (e) => la = e);
}
var oa = (e) => {
	let t = q;
	return ia(e), e.scope.on(), () => {
		e.scope.off(), ia(t);
	};
}, sa = () => {
	q && q.scope.off(), ia(null);
};
function ca(e) {
	return e.vnode.shapeFlag & 4;
}
var la = !1;
function ua(e, t = !1, n = !1) {
	t && aa(t);
	let { props: r, children: i } = e.vnode, a = ca(e);
	ri(e, r, a, t), _i(e, i, n || t);
	let o = a ? da(e, t) : void 0;
	return t && aa(!1), o;
}
function da(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Sr);
	let { setup: r } = n;
	if (r) {
		Ue();
		let n = e.setupContext = r.length > 1 ? _a(e) : null, i = oa(e), a = ln(r, e, 0, [e.props, n]), o = y(a);
		if (We(), i(), (o || e.sp) && !$n(e) && Jn(e), o) {
			if (a.then(sa, sa), t) return a.then((n) => {
				fa(e, n, t);
			}).catch((t) => {
				dn(t, e, 0);
			});
			e.asyncDep = a;
		} else fa(e, a, t);
	} else ha(e, t);
}
function fa(e, t, n) {
	h(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : v(t) && (e.setupState = Xt(t)), ha(e, n);
}
var pa, ma;
function ha(e, t, n) {
	let i = e.type;
	if (!e.render) {
		if (!t && pa && !i.render) {
			let t = i.template || kr(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: r } = e.appContext.config, { delimiters: a, compilerOptions: o } = i;
				i.render = pa(t, s(s({
					isCustomElement: n,
					delimiters: a
				}, r), o));
			}
		}
		e.render = i.render || r, ma && ma(e);
	}
	{
		let t = oa(e);
		Ue();
		try {
			Tr(e);
		} finally {
			We(), t();
		}
	}
}
var ga = { get(e, t) {
	return N(e, "get", ""), e[t];
} };
function _a(e) {
	return {
		attrs: new Proxy(e.attrs, ga),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function va(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(Xt(Ut(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in br) return br[n](e);
		},
		has(e, t) {
			return t in e || t in br;
		}
	}) : e.proxy;
}
function ya(e) {
	return h(e) && "__vccOpts" in e;
}
var J = (e, t) => /* @__PURE__ */ tn(e, t, la), ba = "3.5.38", xa = void 0, Sa = typeof window < "u" && window.trustedTypes;
if (Sa) try {
	xa = /* @__PURE__ */ Sa.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Ca = xa ? (e) => xa.createHTML(e) : (e) => e, wa = "http://www.w3.org/2000/svg", Ta = "http://www.w3.org/1998/Math/MathML", Ea = typeof document < "u" ? document : null, Da = Ea && /* @__PURE__ */ Ea.createElement("template"), Oa = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Ea.createElementNS(wa, e) : t === "mathml" ? Ea.createElementNS(Ta, e) : n ? Ea.createElement(e, { is: n }) : Ea.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Ea.createTextNode(e),
	createComment: (e) => Ea.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Ea.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			Da.innerHTML = Ca(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Da.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, ka = /* @__PURE__ */ Symbol("_vtc");
function Aa(e, t, n) {
	let r = e[ka];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var ja = /* @__PURE__ */ Symbol("_vod"), Ma = /* @__PURE__ */ Symbol("_vsh"), Na = /* @__PURE__ */ Symbol(""), Pa = /(?:^|;)\s*display\s*:/;
function Fa(e, t, n) {
	let r = e.style, i = g(n), a = !1;
	if (n && !i) {
		if (t) if (g(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? La(r, t, "");
		}
		else for (let e in t) n[e] ?? La(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? La(r, i, "") : Va(e, i, !g(t) && t ? t[i] : void 0, o) || La(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Na];
			e && (n += ";" + e), r.cssText = n, a = Pa.test(n);
		}
	} else t && e.removeAttribute("style");
	ja in e && (e[ja] = a ? r.display : "", e[Ma] && (r.display = "none"));
}
var Ia = /\s*!important$/;
function La(e, t, n) {
	if (d(n)) n.forEach((n) => La(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = Ba(e, t);
		Ia.test(n) ? e.setProperty(E(r), n.replace(Ia, ""), "important") : e[r] = n;
	}
}
var Ra = [
	"Webkit",
	"Moz",
	"ms"
], za = {};
function Ba(e, t) {
	let n = za[t];
	if (n) return n;
	let r = T(t);
	if (r !== "filter" && r in e) return za[t] = r;
	r = ie(r);
	for (let n = 0; n < Ra.length; n++) {
		let i = Ra[n] + r;
		if (i in e) return za[t] = i;
	}
	return t;
}
function Va(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && g(r) && n === r;
}
var Ha = "http://www.w3.org/1999/xlink";
function Ua(e, t, n, r, i, a = ge(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ha, t.slice(6, t.length)) : e.setAttributeNS(Ha, t, n) : n == null || a && !_e(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : _(n) ? String(n) : n);
}
function Wa(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Ca(n) : n);
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
		r === "boolean" ? n = _e(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function Ga(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function Ka(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var qa = /* @__PURE__ */ Symbol("_vei");
function Ja(e, t, n, r, i = null) {
	let a = e[qa] || (e[qa] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = Xa(t);
		r ? Ga(e, n, a[t] = eo(r, i), s) : o && (Ka(e, n, o, s), a[t] = void 0);
	}
}
var Ya = /(?:Once|Passive|Capture)$/;
function Xa(e) {
	let t;
	if (Ya.test(e)) {
		t = {};
		let n;
		for (; n = e.match(Ya);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : E(e.slice(2)), t];
}
var Za = 0, Qa = /* @__PURE__ */ Promise.resolve(), $a = () => Za ||= (Qa.then(() => Za = 0), Date.now());
function eo(e, t) {
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
				e && un(e, t, 5, a);
			}
		} else un(r, t, 5, [e]);
	};
	return n.value = e, n.attached = $a(), n;
}
var to = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, no = (e, t, n, r, i, s) => {
	let c = i === "svg";
	t === "class" ? Aa(e, r, c) : t === "style" ? Fa(e, n, r) : a(t) ? o(t) || Ja(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ro(e, t, r, c)) ? (Wa(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ua(e, t, r, c, s, t !== "value")) : e._isVueCE && (io(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !g(r))) ? Wa(e, T(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ua(e, t, r, c));
};
function ro(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && to(t) && h(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return to(t) && g(n) ? !1 : t in e;
}
function io(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = T(t);
	return Array.isArray(n) ? n.some((e) => T(e) === r) : Object.keys(n).some((e) => T(e) === r);
}
var ao = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return d(t) ? (e) => oe(t, e) : t;
};
function oo(e) {
	e.target.composing = !0;
}
function so(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var co = /* @__PURE__ */ Symbol("_assign");
function lo(e, t, n) {
	return t && (e = e.trim()), n && (e = se(e)), e;
}
var uo = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[co] = ao(i);
		let a = r || i.props && i.props.type === "number";
		Ga(e, t ? "change" : "input", (t) => {
			t.target.composing || e[co](lo(e.value, n, a));
		}), (n || a) && Ga(e, "change", () => {
			e.value = lo(e.value, n, a);
		}), t || (Ga(e, "compositionstart", oo), Ga(e, "compositionend", so), Ga(e, "change", so));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[co] = ao(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? se(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, fo = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], po = {
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
	exact: (e, t) => fo.some((n) => e[`${n}Key`] && !t.includes(n))
}, mo = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = po[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, ho = /* @__PURE__ */ s({ patchProp: no }, Oa), go;
function _o() {
	return go ||= yi(ho);
}
var vo = ((...e) => {
	let t = _o().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = bo(e);
		if (!r) return;
		let i = t._component;
		!h(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, yo(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function yo(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function bo(e) {
	return g(e) ? document.querySelector(e) : e;
}
//#endregion
//#region node_modules/pinia/dist/pinia.mjs
var xo = typeof window < "u", So, Co = (e) => So = e, wo = Symbol();
function To(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Eo;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Eo ||= {});
var Do = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Oo(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function ko(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		Po(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function Ao(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function jo(e) {
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
var Mo = typeof navigator == "object" ? navigator : { userAgent: "" }, No = /Macintosh/.test(Mo.userAgent) && /AppleWebKit/.test(Mo.userAgent) && !/Safari/.test(Mo.userAgent), Po = xo ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !No ? Fo : "msSaveOrOpenBlob" in Mo ? Io : Lo : () => {};
function Fo(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? jo(r) : Ao(r.href) ? ko(e, t, n) : (r.target = "_blank", jo(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		jo(r);
	}, 0));
}
function Io(e, t = "download", n) {
	if (typeof e == "string") if (Ao(e)) ko(e, t, n);
	else {
		let t = document.createElement("a");
		t.href = e, t.target = "_blank", setTimeout(function() {
			jo(t);
		});
	}
	else navigator.msSaveOrOpenBlob(Oo(e, n), t);
}
function Lo(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return ko(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(Do.HTMLElement)) || "safari" in Do, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || No) && typeof FileReader < "u") {
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
var { assign: Ro } = Object;
function zo() {
	let e = we(!0), t = e.run(() => /* @__PURE__ */ I({})), n = [], r = [], i = Ut({
		install(e) {
			Co(i), i._a = e, e.provide(wo, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var Bo = () => {};
function Vo(e, t, n, r = Bo) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && Te() && Ee(i), i;
}
function Ho(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var Uo = (e) => e(), Wo = Symbol(), Go = Symbol();
function Ko(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		To(i) && To(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ F(r) && !/* @__PURE__ */ zt(r) ? e[n] = Ko(i, r) : e[n] = r;
	}
	return e;
}
var qo = Symbol();
function Jo(e) {
	return !To(e) || !Object.prototype.hasOwnProperty.call(e, qo);
}
var { assign: Yo } = Object;
function Xo(e) {
	return !!(/* @__PURE__ */ F(e) && e.effect);
}
function Zo(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || (n.state.value[e] = i ? i() : {}), Yo(/* @__PURE__ */ Zt(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Ut(J(() => {
			Co(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = Qo(e, l, t, n, r, !0), c;
}
function Qo(e, t, n = {}, r, i, a) {
	let o, s = Yo({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = r.state.value[e];
	!a && !p && (r.state.value[e] = {});
	let m;
	function h(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: Eo.patchFunction,
			storeId: e,
			events: void 0
		}) : (Ko(r.state.value[e], t), n = {
			type: Eo.patchObject,
			payload: t,
			storeId: e,
			events: void 0
		});
		let i = m = Symbol();
		yn().then(() => {
			m === i && (l = !0);
		}), u = !0, Ho(d, n, r.state.value[e]);
	}
	let g = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			Yo(e, t);
		});
	} : Bo;
	function _() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let v = (t, n = "") => {
		if (Wo in t) return t[Go] = n, t;
		let i = function() {
			Co(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			Ho(f, {
				args: n,
				name: i[Go],
				store: y,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : y, n);
			} catch (e) {
				throw Ho(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (Ho(a, e), e)).catch((e) => (Ho(o, e), Promise.reject(e))) : (Ho(a, l), l);
		};
		return i[Wo] = !0, i[Go] = n, i;
	}, y = /* @__PURE__ */ Ft({
		_p: r,
		$id: e,
		$onAction: Vo.bind(null, f),
		$patch: h,
		$reset: g,
		$subscribe(t, n = {}) {
			let i = Vo(d, t, n.detached, () => a()), a = o.run(() => zn(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: Eo.direct,
					events: void 0
				}, r);
			}, Yo({}, c, n)));
			return i;
		},
		$dispose: _
	});
	r._s.set(e, y);
	let b = (r._a && r._a.runWithContext || Uo)(() => r._e.run(() => (o = we()).run(() => t({ action: v }))));
	for (let t in b) {
		let n = b[t];
		/* @__PURE__ */ F(n) && !Xo(n) || /* @__PURE__ */ zt(n) ? a || (p && Jo(n) && (/* @__PURE__ */ F(n) ? n.value = p[t] : Ko(n, p[t])), r.state.value[e][t] = n) : typeof n == "function" && (b[t] = v(n, t), s.actions[t] = n);
	}
	return Yo(y, b), Yo(/* @__PURE__ */ P(y), b), Object.defineProperty(y, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			h((t) => {
				Yo(t, e);
			});
		}
	}), r._p.forEach((e) => {
		Yo(y, o.run(() => e({
			store: y,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), p && a && n.hydrate && n.hydrate(y.$state, p), l = !0, u = !0, y;
}
function $o(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = In();
		return n ||= o ? Fn(wo, null) : null, n && Co(n), n = So, n._s.has(e) || (i ? Qo(e, t, r, n) : Zo(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
//#endregion
//#region src/functions/scene-merger/defaults.ts
var es = {
	edgeThreshold: 16,
	gridSize: 100,
	mode: "edge",
	pixelInterval: 50
};
function ts(e) {
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
function ns(e) {
	return e.cleanupEnabled && e.destinationCreated && e.stage !== "finalizing";
}
//#endregion
//#region src/functions/scene-merger/content.ts
var rs = {
	drawings: "Drawing",
	lights: "AmbientLight",
	notes: "Note",
	regions: "Region",
	sounds: "AmbientSound",
	tiles: "Tile",
	tokens: "Token",
	walls: "Wall"
};
function is(e) {
	return Object.entries(rs).flatMap(([t, n]) => e[t] && n ? [n] : []);
}
//#endregion
//#region src/functions/scene-merger/layout/bounds.ts
function as(e, t, n, r) {
	return {
		height: Math.max(0, r - t),
		maxX: n,
		maxY: r,
		minX: e,
		minY: t,
		width: Math.max(0, n - e)
	};
}
function os(e) {
	return e.length === 0 ? as(0, 0, 0, 0) : as(Math.min(...e.map((e) => e.x)), Math.min(...e.map((e) => e.y)), Math.max(...e.map((e) => e.x + e.width)), Math.max(...e.map((e) => e.y + e.height)));
}
//#endregion
//#region src/functions/scene-merger/layout/normalize.ts
var ss = {
	x: 0,
	y: 0
};
function cs(e, t = ss) {
	let n = os(e), r = {
		x: t.x - n.minX,
		y: t.y - n.minY
	}, i = e.map((e) => ({
		...e,
		x: e.x + r.x,
		y: e.y + r.y
	}));
	return {
		bounds: as(t.x, t.y, t.x + n.width, t.y + n.height),
		height: n.height,
		placements: i,
		shift: r,
		sourceBounds: n,
		width: n.width
	};
}
//#endregion
//#region src/functions/scene-merger/layout/overlaps.ts
function ls(e, t) {
	let n = Math.max(e.x, t.x), r = Math.max(e.y, t.y), i = Math.min(e.x + e.width, t.x + t.width), a = Math.min(e.y + e.height, t.y + t.height);
	return i > n && a > r ? as(n, r, i, a) : null;
}
function us(e) {
	let t = [];
	for (let n = 0; n < e.length; n += 1) {
		let r = e[n];
		if (r) for (let i = n + 1; i < e.length; i += 1) {
			let n = e[i];
			if (!n) continue;
			let a = ls(r, n);
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
function ds(e, t) {
	let n = t > 0 ? Math.round(e / t) * t : e;
	return Object.is(n, -0) ? 0 : n;
}
function fs(e, t, n) {
	let r = e, i = n + 2 ** -52;
	for (let n of t) {
		let t = Math.abs(n - e);
		t < i && (r = n, i = t);
	}
	return i <= n ? r : e;
}
function ps(e, t) {
	let n = [], r = [];
	for (let i of t) n.push(i.x, i.x + i.width, i.x - e.width, i.x + i.width - e.width), r.push(i.y, i.y + i.height, i.y - e.height, i.y + i.height - e.height);
	return {
		x: n,
		y: r
	};
}
function ms(e, t, n = []) {
	if (t.mode === "pixel") return {
		x: ds(e.x, t.pixelInterval),
		y: ds(e.y, t.pixelInterval)
	};
	if (t.mode === "grid") return {
		x: ds(e.x, t.gridSize),
		y: ds(e.y, t.gridSize)
	};
	if (t.mode === "edge") {
		let r = ps(e, n);
		return {
			x: fs(e.x, r.x, t.edgeThreshold),
			y: fs(e.y, r.y, t.edgeThreshold)
		};
	}
	return {
		x: e.x,
		y: e.y
	};
}
function hs(e, t, n, r = 1) {
	let i = t.mode === "edge" && Number.isFinite(r) && r > 0 ? {
		...t,
		edgeThreshold: t.edgeThreshold / r
	} : t;
	return {
		...e,
		...ms(e, i, n)
	};
}
//#endregion
//#region src/functions/scene-merger/layout/viewport.ts
var gs = .02;
function _s(e, t = gs, n = 8) {
	return Math.min(n, Math.max(t, e));
}
function vs(e, t, n = 32) {
	let r = Math.max(1, t.width - n * 2), i = Math.max(1, t.height - n * 2), a = e.width > 0 ? r / e.width : 1, o = e.height > 0 ? i / e.height : 1, s = _s(Math.min(a, o, 1));
	return {
		panX: (t.width - e.width * s) / 2 - e.minX * s,
		panY: (t.height - e.height * s) / 2 - e.minY * s,
		zoom: s
	};
}
function ys(e, t, n) {
	let r = _s(t), i = (n.x - e.panX) / e.zoom, a = (n.y - e.panY) / e.zoom;
	return {
		panX: n.x - i * r,
		panY: n.y - a * r,
		zoom: r
	};
}
//#endregion
//#region src/functions/scene-merger/references/keys.ts
function bs(e) {
	return JSON.stringify([
		e.sceneId,
		e.documentType,
		...e.parentIds ?? [],
		e.documentId
	]);
}
function xs(e, t, n, r = []) {
	return bs({
		documentId: n,
		documentType: t,
		parentIds: r,
		sceneId: e
	});
}
//#endregion
//#region src/functions/scene-merger/transforms/clone.ts
function Ss(e) {
	return Array.isArray(e) ? e.map((e) => Ss(e)) : e && typeof e == "object" ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, Ss(t)])) : e;
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
	return e.idMap.get(xs(i, t, n, r));
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
	let r = Ss(e);
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
	let i = Ss(e), a = i.system;
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
		let i = Ss(r);
		ks(i, "token", t, n), e.attachment = i;
	}
	Array.isArray(e.shapes) && (e.shapes = e.shapes.map((e) => {
		if (!e || typeof e != "object" || Array.isArray(e)) return e;
		let r = Ss(e);
		return ks(r, "token", t, n), r;
	}));
	let i = typeof e._id == "string" ? e._id : void 0;
	Array.isArray(e.behaviors) && (e.behaviors = e.behaviors.map((e) => js(e, i, t, n)));
}
function Ns(e, t, n) {
	let r = Ss(t), i = {
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
		...Ss(e),
		...Ps(e, t)
	};
}
function Rs(e, t) {
	return Ls(e, t);
}
function zs(e, t) {
	return {
		...Ss(e),
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
	let n = { ...Ss(e) };
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
	let n = { ...Ss(e) };
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
		...Ss(e),
		i: e.i + r,
		j: e.j + i
	}));
}
function qs(e, t, n) {
	let r = { ...Ss(e) };
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
		...Ss(e),
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
	for (let e of us(t)) r.push(Y("layout.overlap", "warning", [e.firstSceneId, e.secondSceneId], {
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
	return e ? new Set(Object.entries(rs).flatMap(([t, n]) => n && e[t] ? [n] : [])) : null;
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
	let i = nc(e, os(t), n.content);
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
	let t = J(() => {
		let t = new Map(e.availableScenes.value.map((e) => [e.id, e]));
		return e.placements.value.flatMap((e) => {
			let n = t.get(e.sceneId);
			return n ? [n] : [];
		});
	}), n = J(() => e.placements.value.map(({ sceneId: e }) => e)), r = J(() => os(e.placements.value)), i = J(() => us(e.placements.value)), a = J(() => [...e.sceneFolders.value].sort((e, t) => e.name.localeCompare(t.name))), o = J(() => ({
		content: { ...e.content },
		destination: { ...e.destination }
	}));
	return {
		arrangementBounds: r,
		currentRequest: J(() => ({
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
	let r = /* @__PURE__ */ I({
		panX: 24,
		panY: 24,
		zoom: .1
	}), i = /* @__PURE__ */ Ft({
		...es,
		mode: es.mode
	});
	function a(e, t) {
		n() && (i.mode = e, t !== void 0 && Number.isFinite(t) && t > 0 && (i.pixelInterval = t));
	}
	function o(e) {
		n() && (r.value = e);
	}
	function s(e, t) {
		n() && (r.value = ys(r.value, e, t));
	}
	function c(e) {
		n() && (r.value = vs(t.value, e, 36));
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
var pc = $o("scene-merger", () => {
	let e = ts("Merged Scene"), t = /* @__PURE__ */ Kt(null), n = /* @__PURE__ */ I([]), r = /* @__PURE__ */ I([]), i = /* @__PURE__ */ I([]), a = /* @__PURE__ */ Ft({ ...e.content }), o = /* @__PURE__ */ Ft({ ...e.destination }), s = /* @__PURE__ */ I("loading"), c = /* @__PURE__ */ I(null), l = /* @__PURE__ */ I(!1), u = /* @__PURE__ */ I(!1), d = /* @__PURE__ */ I(null), f = /* @__PURE__ */ I(null), p = /* @__PURE__ */ I(""), m = /* @__PURE__ */ I("beforeDestination"), h = /* @__PURE__ */ I(!1), g = 0, _ = J(() => s.value === "ready"), { arrangementBounds: v, currentRequest: y, folderChoices: b, overlaps: x, selectedSceneIds: S, selectedScenes: C } = lc({
		availableScenes: n,
		content: a,
		destination: o,
		placements: i,
		sceneFolders: r,
		validation: c,
		warningsAcknowledged: u
	}), { fitView: w, locateScene: ee, resetView: te, setSnap: ne, setView: T, snap: re, view: E, zoomAt: ie } = fc(i, v, () => _.value), ae = J(() => _.value && !l.value && !!c.value?.canMerge && (c.value?.warnings.length === 0 || u.value)), D = J(() => s.value === "merging" && !h.value && !!t.value?.cancelActiveMerge && (!d.value || d.value.stage === "validating" || d.value.stage === "calculatingBounds"));
	async function oe(e, i) {
		t.value = e, o.name = i, s.value = "loading";
		try {
			[n.value, r.value] = await Promise.all([e.listScenes(), e.listSceneFolders()]), s.value = "ready", await pe();
		} catch (e) {
			ye(e, "beforeDestination");
		}
	}
	function O(e) {
		if (!_.value || S.value.includes(e)) return;
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
		}], i.value.length === 1 && (re.gridSize = t.grid.size), ve(), pe();
	}
	function se(e) {
		_.value && (i.value = i.value.filter((t) => t.sceneId !== e).map((e, t) => ({
			...e,
			order: t
		})), ve(), pe());
	}
	function ce() {
		_.value && (i.value = [], ve(), pe());
	}
	function le(e, t) {
		if (!_.value) return;
		let n = [...i.value], r = n.findIndex((t) => t.sceneId === e), a = r + t;
		r < 0 || a < 0 || a >= n.length || ([n[r], n[a]] = [n[a], n[r]], i.value = n.map((e, t) => ({
			...e,
			order: t
		})), ve(), pe());
	}
	function ue(e, t, n, r = !0) {
		if (!_.value) return;
		let a = i.value.find((t) => t.sceneId === e);
		if (!a) return;
		let o = {
			...a,
			x: Math.round(t),
			y: Math.round(n)
		}, s = r ? hs(o, re, i.value.filter((t) => t.sceneId !== e), E.value.zoom) : o;
		i.value = i.value.map((t) => t.sceneId === e ? s : t), ve();
	}
	function de(e, t) {
		!_.value || cc[e] === "unavailable" || (a[e] = t, ve(), pe());
	}
	function fe(e, t) {
		_.value && (o[e] = t, ve(), pe());
	}
	async function pe() {
		if (!t.value || !_.value) return;
		let e = ++g;
		l.value = !0;
		try {
			let n = await t.value.validate(y.value);
			e === g && (c.value = n);
		} catch (t) {
			e === g && ye(t, "beforeDestination");
		} finally {
			e === g && (l.value = !1);
		}
	}
	async function me() {
		if (!(!t.value || !_.value) && (await pe(), ae.value)) {
			s.value = "merging", d.value = null, h.value = !1;
			try {
				f.value = await t.value.merge(y.value, (e) => {
					d.value = e;
				}), s.value = "success";
			} catch (e) {
				ye(e, dc(e, d.value?.stage ?? "beforeDestination"));
			}
		}
	}
	async function k() {
		D.value && (h.value = !0, await t.value?.cancelActiveMerge?.());
	}
	async function he() {
		f.value && t.value && await t.value.openScene(f.value.destinationSceneId);
	}
	function ge(e) {
		_.value && (u.value = e);
	}
	function _e() {
		s.value = "ready", d.value = null, h.value = !1, p.value = "", pe();
	}
	function ve() {
		u.value = !1, f.value = null;
	}
	function ye(e, t) {
		p.value = e instanceof Error ? e.message : String(e), m.value = t, s.value = "failure";
	}
	return {
		arrangementBounds: v,
		availableScenes: n,
		canCancel: D,
		canMerge: ae,
		cancelMerge: k,
		cancelRequested: h,
		clearScenes: ce,
		content: a,
		destination: o,
		failureMessage: p,
		failureStage: m,
		fitView: w,
		folderChoices: b,
		initialize: oe,
		locateScene: ee,
		merge: me,
		moveScene: ue,
		openDestination: he,
		overlaps: x,
		placements: i,
		progress: d,
		removeScene: se,
		reorderScene: le,
		resetView: te,
		returnToEditing: _e,
		selectedSceneIds: S,
		selectedScenes: C,
		setContent: de,
		setDestination: fe,
		setSnap: ne,
		setView: T,
		setWarningsAcknowledged: ge,
		setupEditable: _,
		snap: re,
		status: s,
		summary: f,
		validateNow: pe,
		validating: l,
		validation: c,
		view: E,
		warningsAcknowledged: u,
		zoomAt: ie,
		addScene: O
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
}, nl = { class: "tw:min-w-0 tw:flex-1" }, rl = { class: "tw:m-0 tw:font-semibold" }, il = { class: "tw:m-0 tw:text-sm" }, al = { class: "tw:mt-1 tw:block tw:break-words tw:text-xs" }, ol = { class: "tw:mt-2 tw:mb-0 tw:text-xs" }, sl = /* @__PURE__ */ qn({
	__name: "ExecutionPanel",
	props: { t: { type: Function } },
	setup(e) {
		let t = e, n = pc(), r = J(() => {
			let e = n.progress;
			return e && e.total > 0 ? Math.round(e.completed / e.total * 100) : 0;
		}), i = J(() => o(n.summary?.copied)), a = J(() => o(n.summary?.skipped));
		function o(e) {
			return Object.entries(e ?? {}).filter((e) => typeof e[1] == "number" && e[1] > 0).sort(([e], [t]) => e.localeCompare(t));
		}
		function s(e) {
			let n = e.indexOf(":"), r = n < 0 ? e : e.slice(0, n), i = n < 0 ? "" : e.slice(n + 1), a = `FVTT_SCENE_MERGER.Validation.Issues.${r.replace(".", "_")}`, o = t.t(a);
			return o === a ? e : i ? `${o} — ${i}` : o;
		}
		return (t, o) => (H(), U("footer", mc, [L(n).status === "ready" ? (H(), U("div", hc, [W("div", null, [W("h2", gc, A(e.t("FVTT_SCENE_MERGER.Execution.Title")), 1), W("p", _c, A(e.t("FVTT_SCENE_MERGER.Execution.ReadySummary", {
			count: L(n).selectedScenes.length,
			width: Math.round(L(n).arrangementBounds.width),
			height: Math.round(L(n).arrangementBounds.height)
		})), 1)]), W("div", vc, [L(n).canMerge ? K("", !0) : (H(), U("span", yc, A(e.t("FVTT_SCENE_MERGER.Execution.ResolveIssues")), 1)), W("button", {
			class: "dui-btn dui-btn-primary",
			type: "button",
			disabled: !L(n).canMerge,
			onClick: o[0] ||= (e) => L(n).merge()
		}, A(e.t("FVTT_SCENE_MERGER.Actions.Merge")), 9, bc)])])) : L(n).status === "merging" ? (H(), U("div", xc, [
			W("div", Sc, [W("div", null, [W("h2", Cc, A(e.t("FVTT_SCENE_MERGER.Execution.Merging")), 1), W("p", wc, [Ji(A(L(n).progress ? e.t(`FVTT_SCENE_MERGER.MergeStage.${L(n).progress.stage}`) : e.t("FVTT_SCENE_MERGER.MergeStage.validating")) + " ", 1), L(n).progress?.detail ? (H(), U("span", Tc, " · " + A(L(n).progress.detail), 1)) : K("", !0)])]), L(n).canCancel ? (H(), U("button", {
				key: 0,
				class: "dui-btn dui-btn-warning dui-btn-outline dui-btn-sm",
				type: "button",
				onClick: o[1] ||= (e) => L(n).cancelMerge()
			}, A(L(n).cancelRequested ? e.t("FVTT_SCENE_MERGER.Actions.Cancelling") : e.t("FVTT_SCENE_MERGER.Actions.Cancel")), 1)) : (H(), U("span", Ec, A(e.t("FVTT_SCENE_MERGER.Execution.CancellationClosed")), 1))]),
			W("progress", {
				class: "dui-progress tw:w-full",
				value: r.value,
				max: "100"
			}, null, 8, Dc),
			W("div", Oc, [W("span", null, A(e.t("FVTT_SCENE_MERGER.Execution.SourceSafety")), 1), W("span", null, A(r.value) + "%", 1)])
		])) : L(n).status === "success" && L(n).summary ? (H(), U("div", kc, [
			W("div", Ac, [
				o[5] ||= W("span", { "aria-hidden": "true" }, "✓", -1),
				W("div", jc, [W("h2", Mc, A(e.t("FVTT_SCENE_MERGER.Results.SuccessTitle", { name: L(n).summary.destinationSceneName })), 1), W("p", Nc, A(e.t("FVTT_SCENE_MERGER.Results.SuccessDimensions", {
					width: L(n).summary.destinationWidth,
					height: L(n).summary.destinationHeight,
					count: L(n).summary.sourceCount
				})), 1)]),
				W("button", {
					class: "dui-btn dui-btn-sm",
					type: "button",
					onClick: o[2] ||= (e) => L(n).openDestination()
				}, A(e.t("FVTT_SCENE_MERGER.Actions.OpenScene")), 1)
			]),
			W("div", Pc, [
				W("section", Fc, [W("h3", Ic, A(e.t("FVTT_SCENE_MERGER.Results.Copied")), 1), W("ul", Lc, [(H(!0), U(V, null, vr(i.value, ([t, n]) => (H(), U("li", {
					key: t,
					class: "tw:flex tw:justify-between tw:gap-2"
				}, [W("span", null, A(e.t(`FVTT_SCENE_MERGER.Documents.${t}`)), 1), W("strong", null, A(n), 1)]))), 128)), i.value.length === 0 ? (H(), U("li", Rc, A(e.t("FVTT_SCENE_MERGER.Results.None")), 1)) : K("", !0)])]),
				W("section", zc, [W("h3", Bc, A(e.t("FVTT_SCENE_MERGER.Results.Skipped")), 1), W("ul", Vc, [(H(!0), U(V, null, vr(a.value, ([t, n]) => (H(), U("li", {
					key: t,
					class: "tw:flex tw:justify-between tw:gap-2"
				}, [W("span", null, A(e.t(`FVTT_SCENE_MERGER.Documents.${t}`)), 1), W("strong", null, A(n), 1)]))), 128)), a.value.length === 0 ? (H(), U("li", Hc, A(e.t("FVTT_SCENE_MERGER.Results.NoneSkipped")), 1)) : K("", !0)])]),
				W("section", Uc, [W("h3", Wc, A(e.t("FVTT_SCENE_MERGER.Results.Diagnostics")), 1), W("dl", Gc, [
					W("dt", null, A(e.t("FVTT_SCENE_MERGER.Results.Rewritten")), 1),
					W("dd", Kc, A(L(n).summary.referencesRewritten), 1),
					W("dt", null, A(e.t("FVTT_SCENE_MERGER.Results.Unresolved")), 1),
					W("dd", qc, A(L(n).summary.unresolvedReferences.length), 1),
					W("dt", null, A(e.t("FVTT_SCENE_MERGER.Results.Warnings")), 1),
					W("dd", Jc, A(L(n).summary.warnings.length), 1)
				])]),
				W("section", Yc, [W("h3", Xc, A(e.t("FVTT_SCENE_MERGER.Results.Review")), 1), W("ul", Zc, [
					(H(!0), U(V, null, vr(L(n).summary.warnings, (e) => (H(), U("li", { key: e }, A(s(e)), 1))), 128)),
					(H(!0), U(V, null, vr(L(n).summary.unresolvedReferences, (e) => (H(), U("li", { key: e }, A(e), 1))), 128)),
					!L(n).summary.warnings.length && !L(n).summary.unresolvedReferences.length ? (H(), U("li", Qc, A(e.t("FVTT_SCENE_MERGER.Results.NoReviewItems")), 1)) : K("", !0)
				])])
			]),
			W("div", $c, [W("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				type: "button",
				onClick: o[3] ||= (e) => L(n).returnToEditing()
			}, A(e.t("FVTT_SCENE_MERGER.Actions.MergeAnother")), 1)])
		])) : L(n).status === "failure" ? (H(), U("div", el, [W("div", tl, [
			o[6] ||= W("span", { "aria-hidden": "true" }, "×", -1),
			W("div", nl, [
				W("h2", rl, A(e.t("FVTT_SCENE_MERGER.Results.FailureTitle")), 1),
				W("p", il, A(e.t("FVTT_SCENE_MERGER.Results.FailureStage", { stage: e.t(`FVTT_SCENE_MERGER.MergeStage.${L(n).failureStage}`) })), 1),
				W("code", al, A(L(n).failureMessage), 1),
				W("p", ol, A(e.t("FVTT_SCENE_MERGER.Results.FailureSafety")), 1)
			]),
			W("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: o[4] ||= (e) => L(n).returnToEditing()
			}, A(e.t("FVTT_SCENE_MERGER.Actions.BackToSetup")), 1)
		])])) : K("", !0)]));
	}
}), cl = { class: "tw:flex tw:flex-wrap tw:items-end tw:justify-between tw:gap-2" }, ll = { class: "tw:flex tw:flex-wrap tw:items-end tw:gap-2" }, ul = { class: "dui-fieldset tw:p-0" }, dl = { class: "dui-fieldset-legend tw:py-0 tw:text-[0.68rem]" }, fl = ["value", "disabled"], pl = { value: "none" }, ml = { value: "pixel" }, hl = { value: "grid" }, gl = { value: "edge" }, _l = {
	key: 0,
	class: "dui-fieldset tw:w-24 tw:p-0"
}, vl = { class: "dui-fieldset-legend tw:py-0 tw:text-[0.68rem]" }, yl = ["value", "disabled"], bl = {
	key: 1,
	class: "dui-badge dui-badge-outline dui-badge-sm tw:mb-1.5"
}, xl = { class: "tw:flex tw:items-center tw:gap-1" }, Sl = ["disabled", "aria-label"], Cl = { class: "dui-badge dui-badge-ghost tw:min-w-16 tw:justify-center" }, wl = ["disabled", "aria-label"], Tl = ["disabled"], El = ["disabled"], Dl = /* @__PURE__ */ qn({
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
		return (t, o) => (H(), U("div", cl, [W("div", ll, [
			W("fieldset", ul, [W("legend", dl, A(e.t("FVTT_SCENE_MERGER.Layout.SnapMode")), 1), W("select", {
				class: "dui-select dui-select-sm",
				value: L(r).snap.mode,
				disabled: !L(r).setupEditable,
				onChange: i
			}, [
				W("option", pl, A(e.t("FVTT_SCENE_MERGER.Layout.Snap.none")), 1),
				W("option", ml, A(e.t("FVTT_SCENE_MERGER.Layout.Snap.pixel")), 1),
				W("option", hl, A(e.t("FVTT_SCENE_MERGER.Layout.Snap.grid")), 1),
				W("option", gl, A(e.t("FVTT_SCENE_MERGER.Layout.Snap.edge")), 1)
			], 40, fl)]),
			L(r).snap.mode === "pixel" ? (H(), U("fieldset", _l, [W("legend", vl, A(e.t("FVTT_SCENE_MERGER.Layout.Interval")), 1), W("input", {
				class: "dui-input dui-input-sm tw:w-full",
				type: "number",
				min: "1",
				step: "1",
				value: L(r).snap.pixelInterval,
				disabled: !L(r).setupEditable,
				onChange: a
			}, null, 40, yl)])) : K("", !0),
			L(r).snap.mode === "grid" ? (H(), U("span", bl, A(e.t("FVTT_SCENE_MERGER.Layout.GridSize", { size: L(r).snap.gridSize })), 1)) : K("", !0)
		]), W("div", xl, [
			W("button", {
				class: "dui-btn dui-btn-sm dui-btn-square",
				type: "button",
				disabled: !L(r).setupEditable,
				"aria-label": e.t("FVTT_SCENE_MERGER.Layout.ZoomOut"),
				onClick: o[0] ||= (e) => n("zoom", .8)
			}, " − ", 8, Sl),
			W("span", Cl, A(Math.round(L(r).view.zoom * 100)) + "%", 1),
			W("button", {
				class: "dui-btn dui-btn-sm dui-btn-square",
				type: "button",
				disabled: !L(r).setupEditable,
				"aria-label": e.t("FVTT_SCENE_MERGER.Layout.ZoomIn"),
				onClick: o[1] ||= (e) => n("zoom", 1.25)
			}, " + ", 8, wl),
			W("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				disabled: !L(r).setupEditable,
				onClick: o[2] ||= (e) => n("fit")
			}, A(e.t("FVTT_SCENE_MERGER.Layout.ZoomFit")), 9, Tl),
			W("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				type: "button",
				disabled: !L(r).setupEditable,
				onClick: o[3] ||= (e) => n("reset")
			}, A(e.t("FVTT_SCENE_MERGER.Layout.ResetView")), 9, El)
		])]));
	}
}), Ol = ["aria-disabled"], kl = { class: "tw:absolute tw:-top-6 tw:left-0 tw:whitespace-nowrap tw:text-[0.68rem] tw:text-accent" }, Al = [
	"disabled",
	"aria-describedby",
	"aria-label",
	"onPointerdown",
	"onKeydown"
], jl = ["src"], Ml = { class: "tw:absolute tw:inset-x-2 tw:top-1.5 tw:min-w-0" }, Nl = { class: "tw:block tw:truncate tw:text-xs" }, Pl = { class: "tw:block tw:truncate tw:text-[0.65rem] tw:opacity-80" }, Fl = { class: "tw:absolute tw:right-1.5 tw:bottom-1 tw:rounded-field tw:bg-neutral/80 tw:px-1.5 tw:py-0.5 tw:text-[0.62rem]" }, Il = ["id"], Ll = {
	key: 1,
	class: "tw:pointer-events-none tw:absolute tw:inset-0 tw:flex tw:items-center tw:justify-center tw:p-8 tw:text-center tw:text-sm tw:opacity-60"
}, Rl = { class: "tw:pointer-events-none tw:absolute tw:right-2 tw:bottom-2 tw:rounded-field tw:bg-base-300/85 tw:px-2 tw:py-1 tw:text-[0.65rem] tw:opacity-75" }, zl = /* @__PURE__ */ qn({
	__name: "WorkspaceCanvas",
	props: { t: { type: Function } },
	setup(e, { expose: t }) {
		let n = pc(), r = /* @__PURE__ */ I(null), i = /* @__PURE__ */ I(null), a = J(() => new Map(n.availableScenes.map((e) => [e.id, e]))), o = J(() => new Set(n.overlaps.flatMap((e) => [e.firstSceneId, e.secondSceneId]))), s = J(() => {
			let e = /* @__PURE__ */ new Set(), t = n.placements, r = (e, t) => Math.abs(e - t) < .01, i = (e, t, n, r) => Math.min(t, r) > Math.max(e, n);
			for (let [n, a] of t.entries()) for (let o of t.slice(n + 1)) {
				let t = (r(a.x + a.width, o.x) || r(o.x + o.width, a.x)) && i(a.y, a.y + a.height, o.y, o.y + o.height), n = (r(a.y + a.height, o.y) || r(o.y + o.height, a.y)) && i(a.x, a.x + a.width, o.x, o.x + o.width);
				(t || n) && (e.add(a.sceneId), e.add(o.sceneId));
			}
			return e;
		}), c = J(() => ({
			height: r.value?.clientHeight ?? 480,
			width: r.value?.clientWidth ?? 800
		}));
		function l(e) {
			return {
				height: `${Math.max(8, e.height * n.view.zoom)}px`,
				left: `${n.view.panX + e.x * n.view.zoom}px`,
				top: `${n.view.panY + e.y * n.view.zoom}px`,
				width: `${Math.max(8, e.width * n.view.zoom)}px`,
				zIndex: e.order + 2
			};
		}
		let u = J(() => ({
			height: `${n.arrangementBounds.height * n.view.zoom}px`,
			left: `${n.view.panX + n.arrangementBounds.minX * n.view.zoom}px`,
			top: `${n.view.panY + n.arrangementBounds.minY * n.view.zoom}px`,
			width: `${n.arrangementBounds.width * n.view.zoom}px`
		})), d = J(() => ({
			backgroundPosition: `${n.view.panX}px ${n.view.panY}px`,
			backgroundSize: `${Math.max(12, 100 * n.view.zoom)}px ${Math.max(12, 100 * n.view.zoom)}px`
		}));
		function f(e) {
			e.currentTarget.setPointerCapture(e.pointerId);
		}
		function p(e) {
			e.button === 0 && (f(e), i.value = {
				kind: "pan",
				panX: n.view.panX,
				panY: n.view.panY,
				pointerId: e.pointerId,
				startX: e.clientX,
				startY: e.clientY
			});
		}
		function m(e, t) {
			e.button === 0 && (e.stopPropagation(), f(e), i.value = {
				kind: "scene",
				originX: t.x,
				originY: t.y,
				pointerId: e.pointerId,
				sceneId: t.sceneId,
				startX: e.clientX,
				startY: e.clientY
			});
		}
		function h(e) {
			let t = i.value;
			if (!t || t.pointerId !== e.pointerId) return;
			let r = e.clientX - t.startX, a = e.clientY - t.startY;
			t.kind === "pan" ? n.setView({
				zoom: n.view.zoom,
				panX: t.panX + r,
				panY: t.panY + a
			}) : n.moveScene(t.sceneId, t.originX + r / n.view.zoom, t.originY + a / n.view.zoom, !0);
		}
		function g(e) {
			let t = i.value;
			if (!(!t || t.pointerId !== e.pointerId)) {
				if (t.kind === "scene") {
					let e = n.placements.find(({ sceneId: e }) => e === t.sceneId);
					e && n.moveScene(t.sceneId, e.x, e.y, !0), n.validateNow();
				}
				i.value = null;
			}
		}
		function _(e) {
			let t = r.value?.getBoundingClientRect();
			t && n.zoomAt(n.view.zoom * (e.deltaY < 0 ? 1.14 : .88), {
				x: e.clientX - t.left,
				y: e.clientY - t.top
			});
		}
		function v(e, t) {
			let r = e.shiftKey ? 50 : 10, i = {
				ArrowDown: [0, r],
				ArrowLeft: [-r, 0],
				ArrowRight: [r, 0],
				ArrowUp: [0, -r]
			}[e.key];
			i && (e.preventDefault(), n.moveScene(t.sceneId, t.x + i[0], t.y + i[1], !0), n.validateNow());
		}
		function y() {
			n.fitView(c.value);
		}
		function b() {
			n.resetView();
		}
		function x(e) {
			n.locateScene(e, c.value);
		}
		function S(e) {
			n.zoomAt(n.view.zoom * e, {
				x: c.value.width / 2,
				y: c.value.height / 2
			});
		}
		return t({
			fit: y,
			locate: x,
			reset: b,
			zoom: S
		}), (t, i) => (H(), U("div", {
			ref_key: "workspace",
			ref: r,
			class: k(["layout-workspace tw:relative tw:min-h-[440px] tw:touch-none tw:overflow-hidden tw:rounded-box tw:border tw:border-base-300 tw:bg-base-100 tw:select-none", { "tw:pointer-events-none tw:opacity-70": !L(n).setupEditable }]),
			"aria-disabled": !L(n).setupEditable,
			style: ue(d.value),
			onPointerdown: p,
			onPointermove: h,
			onPointerup: g,
			onPointercancel: g,
			onWheel: mo(_, ["prevent"])
		}, [
			L(n).placements.length ? (H(), U("div", {
				key: 0,
				class: "layout-total-bounds tw:pointer-events-none tw:absolute tw:border tw:border-dashed tw:border-accent/70",
				style: ue(u.value)
			}, [W("span", kl, A(e.t("FVTT_SCENE_MERGER.Layout.TotalBounds")), 1)], 4)) : K("", !0),
			(H(!0), U(V, null, vr(L(n).placements, (t) => (H(), U("button", {
				key: t.sceneId,
				class: k(["layout-scene tw:absolute tw:overflow-hidden tw:rounded-field tw:border-2 tw:border-secondary tw:bg-neutral tw:p-0 tw:text-left tw:text-neutral-content tw:shadow-lg tw:focus:outline-2 tw:focus:outline-accent", {
					"layout-scene-overlap": o.value.has(t.sceneId),
					"tw:outline-2 tw:outline-offset-2 tw:outline-success": s.value.has(t.sceneId)
				}]),
				style: ue(l(t)),
				type: "button",
				disabled: !L(n).setupEditable,
				"aria-describedby": s.value.has(t.sceneId) ? `scene-alignment-${t.sceneId}` : void 0,
				"aria-label": e.t("FVTT_SCENE_MERGER.Layout.DragScene", { name: a.value.get(t.sceneId)?.name ?? t.sceneId }),
				onPointerdown: (e) => m(e, t),
				onKeydown: (e) => v(e, t)
			}, [
				a.value.get(t.sceneId)?.thumbnail ? (H(), U("img", {
					key: 0,
					class: "tw:absolute tw:inset-0 tw:h-full tw:w-full tw:object-cover tw:opacity-45",
					src: a.value.get(t.sceneId)?.thumbnail ?? "",
					alt: "",
					draggable: "false"
				}, null, 8, jl)) : K("", !0),
				i[0] ||= W("span", { class: "tw:absolute tw:inset-0 tw:bg-neutral/30" }, null, -1),
				W("span", Ml, [W("strong", Nl, A(a.value.get(t.sceneId)?.name), 1), W("small", Pl, A(t.width) + " × " + A(t.height), 1)]),
				W("span", Fl, A(Math.round(t.x)) + ", " + A(Math.round(t.y)), 1),
				s.value.has(t.sceneId) ? (H(), U("span", {
					key: 1,
					id: `scene-alignment-${t.sceneId}`,
					class: "dui-badge dui-badge-success dui-badge-xs tw:pointer-events-none tw:absolute tw:bottom-1 tw:left-1.5"
				}, A(e.t("FVTT_SCENE_MERGER.Layout.EdgesAligned")), 9, Il)) : K("", !0)
			], 46, Al))), 128)),
			L(n).placements.length === 0 ? (H(), U("div", Ll, A(e.t("FVTT_SCENE_MERGER.Layout.Empty")), 1)) : K("", !0),
			W("div", Rl, A(e.t("FVTT_SCENE_MERGER.Layout.PanZoomHint")), 1)
		], 46, Ol));
	}
}), Bl = { class: "dui-card dui-card-border tw:min-w-0 tw:bg-base-200" }, Vl = { class: "dui-card-body tw:gap-3 tw:p-3" }, Hl = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-2" }, Ul = { class: "dui-card-title tw:text-base" }, Wl = { class: "tw:m-0 tw:text-xs tw:opacity-65" }, Gl = { class: "tw:flex tw:flex-wrap tw:gap-1" }, Kl = { class: "dui-badge dui-badge-outline dui-badge-sm" }, ql = { class: "dui-badge dui-badge-outline dui-badge-sm" }, Jl = { class: "dui-badge dui-badge-secondary dui-badge-sm" }, Yl = {
	key: 0,
	role: "alert",
	class: "dui-alert dui-alert-warning dui-alert-soft tw:py-2 tw:text-sm"
}, Xl = /* @__PURE__ */ qn({
	__name: "LayoutPanel",
	props: { t: { type: Function } },
	setup(e, { expose: t }) {
		let n = pc(), r = /* @__PURE__ */ I(null);
		zn(() => n.placements.length, async (e, t) => {
			e > 0 && t === 0 && (await yn(), r.value?.fit());
		});
		function i(e) {
			r.value?.locate(e);
		}
		return t({ locateScene: i }), (t, i) => (H(), U("section", Bl, [W("div", Vl, [
			W("div", Hl, [W("div", null, [W("h2", Ul, A(e.t("FVTT_SCENE_MERGER.Layout.Title")), 1), W("p", Wl, A(e.t("FVTT_SCENE_MERGER.Layout.Help")), 1)]), W("div", Gl, [
				W("span", Kl, "X " + A(Math.round(L(n).arrangementBounds.minX)) + " → " + A(Math.round(L(n).arrangementBounds.maxX)), 1),
				W("span", ql, "Y " + A(Math.round(L(n).arrangementBounds.minY)) + " → " + A(Math.round(L(n).arrangementBounds.maxY)), 1),
				W("span", Jl, A(Math.round(L(n).arrangementBounds.width).toLocaleString()) + " × " + A(Math.round(L(n).arrangementBounds.height).toLocaleString()), 1)
			])]),
			G(Dl, {
				t: e.t,
				onFit: i[0] ||= (e) => r.value?.fit(),
				onReset: i[1] ||= (e) => r.value?.reset(),
				onZoom: i[2] ||= (e) => r.value?.zoom(e)
			}, null, 8, ["t"]),
			G(zl, {
				ref_key: "workspaceComponent",
				ref: r,
				t: e.t
			}, null, 8, ["t"]),
			L(n).overlaps.length ? (H(), U("div", Yl, [i[3] ||= W("span", { "aria-hidden": "true" }, "△", -1), W("span", null, A(e.t("FVTT_SCENE_MERGER.Layout.OverlapWarning", { count: L(n).overlaps.length })), 1)])) : K("", !0)
		])]));
	}
}), Zl = { class: "dui-card dui-card-border tw:bg-base-200" }, Ql = { class: "dui-card-body tw:gap-4 tw:p-3" }, $l = { class: "dui-card-title tw:text-base" }, eu = { class: "tw:m-0 tw:text-xs tw:opacity-65" }, tu = { class: "tw:grid tw:gap-4 tw:lg:grid-cols-2" }, nu = { class: "dui-fieldset tw:min-w-0 tw:rounded-box tw:bg-base-300/50 tw:p-3" }, ru = { class: "dui-fieldset-legend" }, iu = { class: "tw:grid tw:gap-x-4 tw:gap-y-2 tw:sm:grid-cols-2" }, au = { class: "tw:min-w-0" }, ou = { class: "tw:block tw:text-sm tw:font-medium" }, su = { class: "tw:block tw:text-[0.68rem] tw:opacity-60" }, cu = {
	key: 0,
	class: "dui-badge dui-badge-warning dui-badge-soft dui-badge-xs tw:mt-1"
}, lu = [
	"checked",
	"disabled",
	"onChange"
], uu = { class: "dui-fieldset tw:min-w-0 tw:rounded-box tw:bg-base-300/50 tw:p-3" }, du = { class: "dui-fieldset-legend" }, fu = {
	class: "dui-label tw:pb-0 tw:text-xs",
	for: "scene-merger-name"
}, pu = ["value", "disabled"], mu = {
	class: "dui-label tw:pb-0 tw:text-xs",
	for: "scene-merger-folder"
}, hu = ["value", "disabled"], gu = { value: "" }, _u = ["value"], vu = { class: "tw:mt-2 tw:grid tw:gap-2" }, yu = { class: "tw:block" }, bu = { class: "tw:block tw:text-[0.68rem] tw:opacity-60" }, xu = [
	"checked",
	"disabled",
	"onChange"
], Su = /* @__PURE__ */ qn({
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
		return (s, c) => (H(), U("section", Zl, [W("div", Ql, [W("div", null, [W("h2", $l, A(e.t("FVTT_SCENE_MERGER.Options.Title")), 1), W("p", eu, A(e.t("FVTT_SCENE_MERGER.Options.Help")), 1)]), W("div", tu, [W("fieldset", nu, [W("legend", ru, A(e.t("FVTT_SCENE_MERGER.Options.ContentTitle")), 1), W("div", iu, [(H(), U(V, null, vr(n, (n) => W("label", {
			key: n,
			class: "tw:flex tw:min-w-0 tw:items-start tw:justify-between tw:gap-2 tw:rounded-field tw:bg-base-200 tw:p-2"
		}, [W("span", au, [
			W("span", ou, A(e.t(`FVTT_SCENE_MERGER.Options.Content.${n}.Label`)), 1),
			W("span", su, A(e.t(`FVTT_SCENE_MERGER.Options.Content.${n}.Help`)), 1),
			L(cc)[n] === "unavailable" ? (H(), U("span", cu, A(e.t("FVTT_SCENE_MERGER.Options.UnavailableV14")), 1)) : K("", !0)
		]), W("input", {
			class: "dui-toggle dui-toggle-sm",
			type: "checkbox",
			checked: L(t).content[n],
			disabled: L(cc)[n] === "unavailable" || !L(t).setupEditable,
			onChange: (e) => r(n, e)
		}, null, 40, lu)])), 64))])]), W("fieldset", uu, [
			W("legend", du, A(e.t("FVTT_SCENE_MERGER.Options.DestinationTitle")), 1),
			W("label", fu, A(e.t("FVTT_SCENE_MERGER.Options.Name")), 1),
			W("input", {
				id: "scene-merger-name",
				class: "dui-input dui-input-sm tw:w-full",
				type: "text",
				value: L(t).destination.name,
				disabled: !L(t).setupEditable,
				onChange: i
			}, null, 40, pu),
			W("label", mu, A(e.t("FVTT_SCENE_MERGER.Options.Folder")), 1),
			W("select", {
				id: "scene-merger-folder",
				class: "dui-select dui-select-sm tw:w-full",
				value: L(t).destination.folderId ?? "",
				disabled: !L(t).setupEditable,
				onChange: a
			}, [W("option", gu, A(e.t("FVTT_SCENE_MERGER.Selection.RootFolder")), 1), (H(!0), U(V, null, vr(L(t).folderChoices, (e) => (H(), U("option", {
				key: e.id,
				value: e.id
			}, A(e.name), 9, _u))), 128))], 40, hu),
			W("div", vu, [(H(), U(V, null, vr([
				"navigation",
				"openAfterMerge",
				"activateAfterMerge",
				"lockBackgroundTiles"
			], (n) => W("label", {
				key: n,
				class: "tw:flex tw:items-center tw:justify-between tw:gap-3 tw:text-sm"
			}, [W("span", null, [W("span", yu, A(e.t(`FVTT_SCENE_MERGER.Options.Destination.${n}.Label`)), 1), W("span", bu, A(e.t(`FVTT_SCENE_MERGER.Options.Destination.${n}.Help`)), 1)]), W("input", {
				class: "dui-checkbox dui-checkbox-sm",
				type: "checkbox",
				checked: L(t).destination[n],
				disabled: !L(t).setupEditable,
				onChange: (e) => o(n, e)
			}, null, 40, xu)])), 64))])
		])])])]));
	}
}), Cu = { class: "dui-card dui-card-border tw:min-h-0 tw:bg-base-200" }, wu = { class: "dui-card-body tw:min-h-0 tw:gap-3 tw:p-3" }, Tu = { class: "tw:flex tw:items-center tw:justify-between tw:gap-2" }, Eu = { class: "dui-card-title tw:text-base" }, Du = { class: "tw:m-0 tw:text-xs tw:opacity-65" }, Ou = { class: "dui-badge dui-badge-neutral dui-badge-sm" }, ku = { class: "dui-input dui-input-sm tw:flex tw:w-full tw:items-center tw:gap-2" }, Au = ["disabled", "placeholder"], ju = { class: "scene-list-scroll tw:min-h-32 tw:flex-1 tw:overflow-auto tw:rounded-box tw:bg-base-300/60 tw:p-1" }, Mu = {
	key: 0,
	class: "dui-list tw:m-0 tw:list-none tw:gap-1 tw:p-0"
}, Nu = { class: "tw:h-10 tw:w-12 tw:overflow-hidden tw:rounded-field tw:bg-neutral" }, Pu = ["src"], Fu = {
	key: 1,
	class: "tw:flex tw:h-full tw:items-center tw:justify-center tw:text-xs tw:opacity-50",
	"aria-hidden": "true"
}, Iu = { class: "tw:min-w-0" }, Lu = { class: "tw:truncate tw:text-sm tw:font-semibold" }, Ru = { class: "tw:truncate tw:text-[0.7rem] tw:opacity-65" }, zu = { class: "tw:text-[0.7rem] tw:opacity-65" }, Bu = { class: "tw:text-[0.68rem] tw:opacity-60" }, Vu = [
	"disabled",
	"aria-label",
	"onClick"
], Hu = {
	key: 1,
	class: "tw:m-3 tw:text-center tw:text-sm tw:opacity-60"
}, Uu = { class: "tw:flex tw:items-center tw:justify-between tw:gap-2" }, Wu = { class: "tw:m-0 tw:text-sm tw:font-semibold" }, Gu = ["disabled"], Ku = { class: "dui-list tw:m-0 tw:max-h-56 tw:list-none tw:overflow-auto tw:p-0" }, qu = { class: "dui-badge dui-badge-ghost dui-badge-xs" }, Ju = { class: "tw:min-w-0" }, Yu = { class: "tw:truncate tw:text-sm tw:font-medium" }, Xu = { class: "tw:text-[0.68rem] tw:opacity-60" }, Zu = { class: "tw:flex tw:gap-0.5" }, Qu = [
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
], td = [
	"disabled",
	"aria-label",
	"onClick"
], nd = /* @__PURE__ */ qn({
	__name: "SceneSelectionPanel",
	props: { t: { type: Function } },
	emits: ["locate"],
	setup(e, { emit: t }) {
		let n = t, r = pc(), i = /* @__PURE__ */ I(""), a = J(() => {
			let e = i.value.trim().toLocaleLowerCase();
			return r.availableScenes.filter((t) => r.selectedSceneIds.includes(t.id) ? !1 : e ? `${t.name} ${t.folderName ?? ""}`.toLocaleLowerCase().includes(e) : !0);
		});
		function o(e, t) {
			return `${e.toLocaleString()} × ${t.toLocaleString()}`;
		}
		return (t, s) => (H(), U("aside", Cu, [W("div", wu, [
			W("div", Tu, [W("div", null, [W("h2", Eu, A(e.t("FVTT_SCENE_MERGER.Selection.Title")), 1), W("p", Du, A(e.t("FVTT_SCENE_MERGER.Selection.Help")), 1)]), W("span", Ou, A(L(r).selectedScenes.length), 1)]),
			W("label", ku, [s[2] ||= W("span", { "aria-hidden": "true" }, "⌕", -1), Mn(W("input", {
				"onUpdate:modelValue": s[0] ||= (e) => i.value = e,
				class: "tw:min-w-0 tw:flex-1",
				type: "search",
				disabled: !L(r).setupEditable,
				placeholder: e.t("FVTT_SCENE_MERGER.Selection.Search")
			}, null, 8, Au), [[uo, i.value]])]),
			W("div", ju, [a.value.length ? (H(), U("ul", Mu, [(H(!0), U(V, null, vr(a.value, (t) => (H(), U("li", {
				key: t.id,
				class: "dui-list-row tw:grid-cols-[3rem_minmax(0,1fr)_auto] tw:items-center tw:gap-2 tw:bg-base-200 tw:p-2"
			}, [
				W("div", Nu, [t.thumbnail ? (H(), U("img", {
					key: 0,
					class: "tw:h-full tw:w-full tw:object-cover",
					src: t.thumbnail,
					alt: ""
				}, null, 8, Pu)) : (H(), U("span", Fu, "▧"))]),
				W("div", Iu, [
					W("div", Lu, A(t.name), 1),
					W("div", Ru, A(t.folderName ?? e.t("FVTT_SCENE_MERGER.Selection.RootFolder")), 1),
					W("div", zu, A(o(t.dimensions.sceneWidth, t.dimensions.sceneHeight)), 1),
					W("div", Bu, A(e.t("FVTT_SCENE_MERGER.Selection.GridDetails", {
						type: t.grid.type,
						size: t.grid.size,
						distance: t.grid.distance,
						units: t.grid.units
					})), 1)
				]),
				W("button", {
					class: "dui-btn dui-btn-sm dui-btn-square",
					type: "button",
					disabled: !L(r).setupEditable || !t.canMerge,
					"aria-label": e.t("FVTT_SCENE_MERGER.Selection.AddNamed", { name: t.name }),
					onClick: (e) => L(r).addScene(t.id)
				}, " + ", 8, Vu)
			]))), 128))])) : (H(), U("p", Hu, A(e.t("FVTT_SCENE_MERGER.Selection.NoMatches")), 1))]),
			W("div", Uu, [W("h3", Wu, A(e.t("FVTT_SCENE_MERGER.Selection.Selected")), 1), W("button", {
				class: "dui-btn dui-btn-ghost dui-btn-xs",
				type: "button",
				disabled: !L(r).setupEditable || L(r).selectedScenes.length === 0,
				onClick: s[1] ||= (e) => L(r).clearScenes()
			}, A(e.t("FVTT_SCENE_MERGER.Actions.Clear")), 9, Gu)]),
			W("ol", Ku, [(H(!0), U(V, null, vr(L(r).selectedScenes, (t, i) => (H(), U("li", {
				key: t.id,
				class: "dui-list-row tw:grid-cols-[1.5rem_minmax(0,1fr)_auto] tw:items-center tw:gap-1 tw:px-2 tw:py-1.5"
			}, [
				W("span", qu, A(i + 1), 1),
				W("div", Ju, [W("div", Yu, A(t.name), 1), W("div", Xu, A(o(t.dimensions.sceneWidth, t.dimensions.sceneHeight)), 1)]),
				W("div", Zu, [
					W("button", {
						class: "dui-btn dui-btn-ghost dui-btn-xs dui-btn-square",
						type: "button",
						disabled: !L(r).setupEditable || i === 0,
						"aria-label": e.t("FVTT_SCENE_MERGER.Actions.MoveUp"),
						onClick: (e) => L(r).reorderScene(t.id, -1)
					}, " ↑ ", 8, Qu),
					W("button", {
						class: "dui-btn dui-btn-ghost dui-btn-xs dui-btn-square",
						type: "button",
						disabled: !L(r).setupEditable || i === L(r).selectedScenes.length - 1,
						"aria-label": e.t("FVTT_SCENE_MERGER.Actions.MoveDown"),
						onClick: (e) => L(r).reorderScene(t.id, 1)
					}, " ↓ ", 8, $u),
					W("button", {
						class: "dui-btn dui-btn-ghost dui-btn-xs dui-btn-square",
						type: "button",
						disabled: !L(r).setupEditable,
						"aria-label": e.t("FVTT_SCENE_MERGER.Actions.Locate"),
						onClick: (e) => n("locate", t.id)
					}, " ◎ ", 8, ed),
					W("button", {
						class: "dui-btn dui-btn-ghost dui-btn-xs dui-btn-square",
						type: "button",
						disabled: !L(r).setupEditable,
						"aria-label": e.t("FVTT_SCENE_MERGER.Selection.RemoveNamed", { name: t.name }),
						onClick: (e) => L(r).removeScene(t.id)
					}, " × ", 8, td)
				])
			]))), 128))])
		])]));
	}
}), rd = { class: "dui-card dui-card-border tw:bg-base-200" }, id = { class: "dui-card-body tw:gap-3 tw:p-3" }, ad = { class: "tw:flex tw:items-start tw:justify-between tw:gap-2" }, od = { class: "dui-card-title tw:text-base" }, sd = { class: "tw:m-0 tw:text-xs tw:opacity-65" }, cd = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm"
}, ld = {
	key: 1,
	class: "dui-badge dui-badge-success dui-badge-soft"
}, ud = {
	key: 2,
	class: "dui-badge dui-badge-error dui-badge-soft"
}, dd = { class: "tw:flex tw:flex-wrap tw:gap-1" }, fd = { class: "dui-badge dui-badge-outline dui-badge-sm" }, pd = { class: "dui-badge dui-badge-outline dui-badge-sm" }, md = { class: "dui-badge dui-badge-outline dui-badge-sm" }, hd = { class: "dui-badge dui-badge-outline dui-badge-sm" }, gd = {
	key: 0,
	class: "dui-badge dui-badge-warning dui-badge-soft dui-badge-sm"
}, _d = {
	key: 0,
	class: "tw:grid tw:gap-2"
}, vd = { class: "tw:block" }, yd = {
	key: 0,
	class: "tw:opacity-70"
}, bd = {
	key: 1,
	class: "tw:grid tw:gap-2"
}, xd = { class: "tw:block" }, Sd = {
	key: 0,
	class: "tw:opacity-70"
}, Cd = { class: "tw:flex tw:items-start tw:gap-2 tw:rounded-box tw:bg-warning/10 tw:p-2 tw:text-sm" }, wd = ["checked", "disabled"], Td = { class: "tw:block" }, Ed = { class: "tw:opacity-70" }, Dd = {
	key: 2,
	role: "alert",
	class: "dui-alert dui-alert-success dui-alert-soft tw:py-2 tw:text-sm"
}, Od = /* @__PURE__ */ qn({
	__name: "ValidationPanel",
	props: { t: { type: Function } },
	setup(e) {
		let t = pc(), n = J(() => nc(t.selectedScenes, t.arrangementBounds, { ...t.content }));
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
		return (s, c) => (H(), U("section", rd, [W("div", id, [
			W("div", ad, [W("div", null, [W("h2", od, A(e.t("FVTT_SCENE_MERGER.Validation.Title")), 1), W("p", sd, A(e.t("FVTT_SCENE_MERGER.Validation.Help")), 1)]), L(t).validating ? (H(), U("span", cd)) : L(t).validation?.canMerge ? (H(), U("span", ld, A(e.t("FVTT_SCENE_MERGER.Validation.Ready")), 1)) : (H(), U("span", ud, A(e.t("FVTT_SCENE_MERGER.Validation.Blocked")), 1))]),
			W("div", dd, [
				W("span", fd, A(e.t("FVTT_SCENE_MERGER.Validation.Estimate.Area", { value: a(L(t).arrangementBounds.width * L(t).arrangementBounds.height) })), 1),
				W("span", pd, A(e.t("FVTT_SCENE_MERGER.Validation.Estimate.Textures", { value: a(n.value.texturePixels) })), 1),
				W("span", md, A(e.t("FVTT_SCENE_MERGER.Validation.Estimate.Walls", { value: n.value.documents.Wall ?? 0 })), 1),
				W("span", hd, A(e.t("FVTT_SCENE_MERGER.Validation.Estimate.Tokens", { value: n.value.documents.Token ?? 0 })), 1),
				n.value.animatedAssets ? (H(), U("span", gd, A(e.t("FVTT_SCENE_MERGER.Validation.Estimate.Animated", { value: n.value.animatedAssets })), 1)) : K("", !0)
			]),
			L(t).validation?.blocking.length ? (H(), U("div", _d, [(H(!0), U(V, null, vr(L(t).validation.blocking, (t, n) => (H(), U("div", {
				key: `${t.code}-${n}`,
				role: "alert",
				class: "dui-alert dui-alert-error dui-alert-soft tw:items-start tw:py-2 tw:text-sm"
			}, [c[0] ||= W("span", { "aria-hidden": "true" }, "×", -1), W("span", null, [W("strong", vd, A(e.t(r(t), t.details)), 1), Object.keys(t.details).length ? (H(), U("small", yd, A(i(t)), 1)) : K("", !0)])]))), 128))])) : K("", !0),
			L(t).validation?.warnings.length ? (H(), U("div", bd, [(H(!0), U(V, null, vr(L(t).validation.warnings, (t, n) => (H(), U("div", {
				key: `${t.code}-${n}`,
				role: "alert",
				class: "dui-alert dui-alert-warning dui-alert-soft tw:items-start tw:py-2 tw:text-sm"
			}, [c[1] ||= W("span", { "aria-hidden": "true" }, "!", -1), W("span", null, [W("strong", xd, A(e.t(r(t), t.details)), 1), Object.keys(t.details).length ? (H(), U("small", Sd, A(i(t)), 1)) : K("", !0)])]))), 128)), W("label", Cd, [W("input", {
				class: "dui-checkbox dui-checkbox-warning dui-checkbox-sm tw:mt-0.5",
				type: "checkbox",
				checked: L(t).warningsAcknowledged,
				disabled: !L(t).setupEditable,
				onChange: o
			}, null, 40, wd), W("span", null, [W("strong", Td, A(e.t("FVTT_SCENE_MERGER.Validation.Acknowledge")), 1), W("small", Ed, A(e.t("FVTT_SCENE_MERGER.Validation.AcknowledgeHelp")), 1)])])])) : K("", !0),
			L(t).validation && !L(t).validation.blocking.length && !L(t).validation.warnings.length ? (H(), U("div", Dd, [c[2] ||= W("span", { "aria-hidden": "true" }, "✓", -1), W("span", null, A(e.t("FVTT_SCENE_MERGER.Validation.NoIssues")), 1)])) : K("", !0)
		])]));
	}
}), kd = { class: "scene-merger-shell tw:flex tw:min-h-[720px] tw:flex-col tw:gap-3 tw:p-3 tw:text-base-content" }, Ad = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-3" }, jd = { class: "tw:flex tw:items-center tw:gap-2" }, Md = { class: "dui-badge dui-badge-neutral dui-badge-sm" }, Nd = { class: "tw:m-0 tw:text-xl tw:font-semibold" }, Pd = { class: "tw:mt-1 tw:mb-0 tw:text-sm tw:opacity-70" }, Fd = { class: "dui-badge dui-badge-outline tw:gap-2" }, Id = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-xs"
}, Ld = {
	key: 0,
	class: "dui-card dui-card-border tw:flex-1 tw:bg-base-200"
}, Rd = { class: "dui-card-body tw:items-center tw:justify-center tw:text-center" }, zd = { class: "dui-card-title" }, Bd = { class: "tw:grid tw:min-h-0 tw:flex-1 tw:gap-3 tw:xl:grid-cols-[21rem_minmax(0,1fr)]" }, Vd = { class: "tw:grid tw:gap-3 tw:xl:grid-cols-[minmax(0,1fr)_minmax(22rem,0.72fr)]" }, Hd = /* @__PURE__ */ qn({
	__name: "SceneMergerApp",
	props: {
		services: {},
		t: { type: Function }
	},
	setup(e) {
		let t = e, n = pc(), r = /* @__PURE__ */ I(null);
		cr(() => {
			n.initialize(t.services, t.t("FVTT_SCENE_MERGER.Defaults.DestinationName"));
		});
		function i(e) {
			r.value?.locateScene(e);
		}
		return (t, a) => (H(), U("main", kd, [W("header", Ad, [W("div", null, [W("div", jd, [W("span", Md, A(e.t("FVTT_SCENE_MERGER.App.GmBadge")), 1), W("h1", Nd, A(e.t("FVTT_SCENE_MERGER.App.Title")), 1)]), W("p", Pd, A(e.t("FVTT_SCENE_MERGER.App.Subtitle")), 1)]), W("span", Fd, [L(n).status === "loading" ? (H(), U("span", Id)) : K("", !0), Ji(" " + A(e.t(`FVTT_SCENE_MERGER.Status.${L(n).status}`)), 1)])]), L(n).status === "loading" ? (H(), U("div", Ld, [W("div", Rd, [
			a[0] ||= W("span", { class: "dui-loading dui-loading-ring dui-loading-lg" }, null, -1),
			W("h2", zd, A(e.t("FVTT_SCENE_MERGER.Loading.Title")), 1),
			W("p", null, A(e.t("FVTT_SCENE_MERGER.Loading.Body")), 1)
		])])) : (H(), U(V, { key: 1 }, [
			W("section", Bd, [G(nd, {
				t: e.t,
				onLocate: i
			}, null, 8, ["t"]), G(Xl, {
				ref_key: "layoutPanel",
				ref: r,
				t: e.t
			}, null, 8, ["t"])]),
			W("section", Vd, [G(Su, { t: e.t }, null, 8, ["t"]), G(Od, { t: e.t }, null, 8, ["t"])]),
			G(sl, { t: e.t }, null, 8, ["t"])
		], 64))]));
	}
}), X = "fvtt-scene-merger", Ud = "Foundry VTT Scene Merger", Wd = "FVTT_SCENE_MERGER";
//#endregion
//#region src/module/logging/logger.ts
function Gd() {
	try {
		return game?.settings.get(X, "debugLogging") === !0;
	} catch {
		return !1;
	}
}
var Kd = {
	debug(e, t) {
		Gd() && console.debug(`${Ud} | ${e}`, t ?? "");
	},
	error(e, t) {
		console.error(`${Ud} | ${e}`, t ?? "");
	},
	info(e, t) {
		console.info(`${Ud} | ${e}`, t ?? "");
	},
	warn(e, t) {
		console.warn(`${Ud} | ${e}`, t ?? "");
	}
};
//#endregion
//#region src/module/runtime/runtime-utils.ts
function qd() {
	if (!game) throw Error("Foundry game data is not available yet.");
	return game;
}
function Jd(e) {
	let t = qd().scenes.get(e);
	if (!t) throw Error(`Source Scene ${e} is unavailable.`);
	return t;
}
function Z(e) {
	return Xd(e);
}
function Yd(e) {
	return Z(e.toObject(!0));
}
function Xd(e) {
	if (Array.isArray(e)) return e.map(Xd);
	if (e instanceof Set) return [...e].map(Xd);
	if (e && typeof e == "object") {
		let t = {};
		for (let [n, r] of Object.entries(e)) t[n] = Xd(r);
		return t;
	}
	return e;
}
function Q(e) {
	if (!(!e || typeof e != "object" || Array.isArray(e))) return e;
}
function Zd(e) {
	return Array.isArray(e) ? e.map(Q).filter((e) => !!e) : [];
}
function $(e, t = 0) {
	return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Qd(e, t = "") {
	return typeof e == "string" ? e : t;
}
function $d(e) {
	let t = e._id;
	return typeof t == "string" && t.length > 0 ? t : void 0;
}
function ef(e) {
	return e instanceof Error ? e.message : String(e);
}
function tf(e) {
	return typeof e == "string" && /\.(?:m4v|mp4|ogg|ogv|webm)(?:[?#].*)?$/i.test(e);
}
async function nf() {
	await new Promise((e) => {
		setTimeout(e, 0);
	});
}
function rf(e) {
	return e.replace(/([a-z])([A-Z])/g, "$1 $2").replaceAll(".", ": ").replace(/^./, (e) => e.toUpperCase());
}
//#endregion
//#region src/module/settings/settings-values.ts
function af() {
	return qd().settings.get(X, "cleanupPartialDestination") !== !1;
}
//#endregion
//#region src/module/runtime/merge/errors.ts
var of = class extends Error {
	constructor() {
		super("Scene merge cancelled."), this.name = "MergeCancelledError";
	}
}, sf = class extends Error {
	cleanupError;
	destinationSceneId;
	originalError;
	stage;
	constructor(e) {
		let t = e.cleanupError ? ` Cleanup also failed: ${ef(e.cleanupError)}` : "", n = e.destinationSceneId ? ` Partial destination Scene: ${e.destinationSceneId}.` : "";
		super(`Scene merge failed during ${e.stage}: ${ef(e.error)}.${t}${n}`), this.name = "SceneMergeError", this.cleanupError = e.cleanupError ? ef(e.cleanupError) : null, this.destinationSceneId = e.destinationSceneId ?? null, this.originalError = e.error, this.stage = e.stage;
	}
}, cf = class {
	#e = !1;
	cancel() {
		this.#e = !0;
	}
	throwIfCancelled() {
		if (this.#e) throw new of();
	}
}, lf = class {
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
async function uf(e, t = (e) => Scene.implementation.create(e)) {
	let n = await t(e);
	if (!n) throw Error("Foundry did not return a destination Scene after creation.");
	try {
		return new lf(n);
	} catch (e) {
		try {
			await n.delete();
		} catch (t) {
			throw Error(`${ef(e)} Cleanup of the invalid Scene${n.id ? ` ${n.id}` : ""} also failed: ${ef(t)}`, { cause: t });
		}
		throw e;
	}
}
var df = {
	callHook(e, ...t) {
		Hooks.callAll(e, ...t);
	},
	createDestination: uf,
	notifyError(e) {
		ui?.notifications?.error(e);
	},
	notifyInfo(e) {
		ui?.notifications?.info(e);
	}
}, ff = /* @__PURE__ */ new Map();
function pf(e) {
	if (!e.id.trim()) throw Error("A Scene Merger extension must have a non-empty id.");
	if (ff.has(e.id)) throw Error(`A Scene Merger extension with id ${e.id} is already registered.`);
	return ff.set(e.id, e), () => ff.delete(e.id);
}
function mf() {
	return [...ff.values()];
}
function hf(e, t, n) {
	return pf({
		documentTransformers: { [t]: n },
		id: e
	});
}
function gf(e, t) {
	return pf({
		id: e,
		validate: t
	});
}
function _f(e, t) {
	return pf({
		id: e,
		referenceRewriter: t
	});
}
async function vf(e) {
	for (let t of mf()) await t.preMerge?.(e);
}
async function yf(e) {
	for (let t of mf()) await t.postMerge?.(e);
}
//#endregion
//#region src/module/runtime/background-tiles.ts
function bf(e, t, n, r) {
	let i = new Map(t.map((e) => [e.sceneId, e])), a = new Map([...t].sort((e, t) => e.order - t.order).map((e, t) => [e.sceneId, t])), o = Math.max(1, ...e.map((e) => e.documents.Tile?.length ?? 0)) + 1, s = Sf(e), c = [];
	for (let l of e) {
		let e = i.get(l.id), u = a.get(l.id) ?? 0, d = l.documents.Level?.[0];
		if (!e || !d) continue;
		let f = Q(d.textures) ?? {};
		xf(c, "background", Q(d.background), f, l, e, n, r, s.background, -(t.length * 2) + u), xf(c, "foreground", Q(d.foreground), f, l, e, n, r, s.foreground, (t.length + 1) * o + u);
	}
	return c;
}
function xf(e, t, n, r, i, a, o, s, c, l) {
	if (typeof n?.src != "string" || n.src.length === 0) return;
	let u = {
		...Z(r),
		...Z(n)
	}, d = $(u.anchorX, .5), f = $(u.anchorY, .5);
	u.anchorX = d, u.anchorY = f, delete u.color, e.push({
		alpha: 1,
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
		x: o.sceneX + a.x + a.width * d,
		y: o.sceneY + a.y + a.height * f
	});
}
function Sf(e) {
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
var Cf = "_temporaryProvenance";
function wf(e, t) {
	let n = Z(e), r = Z(Q(n.flags) ?? {}), i = Z(Q(r["fvtt-scene-merger"]) ?? {}), a = Object.hasOwn(i, Cf), o = i[Cf];
	return i[Cf] = {
		documentId: t.documentId,
		documentType: t.documentType,
		parentIds: [...t.parentIds ?? []],
		sceneId: t.sceneId,
		sourceKey: bs(t),
		hadPrevious: a,
		previousValue: o
	}, r[X] = i, n.flags = r, n;
}
function Tf(e) {
	let t = Z(e), n = Q(t.flags), r = Q(n?.[X]), i = Q(r?.[Cf]);
	return n && r && i && (i.hadPrevious === !0 ? r[Cf] = Ef(i.previousValue) : delete r[Cf], Object.keys(r).length === 0 && delete n[X], t.flags = n), delete t._stats, Array.isArray(t.behaviors) && (t.behaviors = Zd(t.behaviors).map(Tf)), t;
}
function Ef(e) {
	return e && typeof e == "object" ? Z(e) : e;
}
function Df(e) {
	let t = Q(Q(Q(e.flags)?.[X])?.[Cf]);
	if (!t) return;
	let n = t?.documentId, r = t?.documentType, i = t?.sceneId;
	if (!(typeof n != "string" || typeof r != "string" || typeof i != "string")) return {
		documentId: n,
		documentType: r,
		parentIds: Array.isArray(t.parentIds) ? t.parentIds.filter((e) => typeof e == "string") : [],
		sceneId: i
	};
}
function Of(e, t) {
	let n = [];
	for (let r of e) {
		let e = Yd(r);
		kf(e, t, n);
		for (let r of Zd(e.behaviors)) kf(r, t, n);
	}
	return n;
}
function kf(e, t, n) {
	let r = Df(e), i = $d(e);
	if (!r || !i) {
		n.push("A created document could not be associated with its source provenance.");
		return;
	}
	t.set(bs(r), i);
}
//#endregion
//#region src/module/runtime/merge/batches.ts
async function Af(e, t, n, r, i, a, o) {
	await Pf(n, o, a, async (a, o) => {
		let s = await e.createDocuments(t, a);
		if (s.length !== a.length) throw Error(`Foundry created ${s.length} of ${a.length} requested ${t} documents.`);
		Nf(i, r, o, n.length, `Created ${t} documents`);
	});
}
async function jf(e, t, n, r, i, a, o, s, c) {
	let l = 0;
	return await Pf(n, c, s, async (s, c) => {
		let u = await e.createDocuments(t, s);
		if (u.length !== s.length) throw Error(`Foundry created ${u.length} of ${s.length} requested ${t} documents.`);
		l += u.length;
		let d = Of(u, r);
		if (d.length > 0) throw i.push(...d), Error(`Foundry created ${t} documents without the provenance needed for safe ID mapping.`);
		Nf(o, a, c, n.length, `Created ${t} documents`);
	}), l;
}
async function Mf(e, t, n, r, i, a) {
	await Pf(n, a, i, async (i, a) => {
		let o = await e.updateDocuments(t, i);
		if (o.length !== i.length) throw Error(`Foundry updated ${o.length} of ${i.length} requested ${t} documents.`);
		Nf(r, "rewritingReferences", a, n.length, `Finalized ${t} references`);
	});
}
function Nf(e, t, n, r, i) {
	Kd.debug("Merge progress", {
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
async function Pf(e, t, n, r) {
	for (let i = 0; i < e.length; i += t) {
		n.throwIfCancelled();
		let a = e.slice(i, i + t);
		await r(a, Math.min(i + a.length, e.length)), n.throwIfCancelled(), await nf();
	}
}
//#endregion
//#region src/module/runtime/merge/workflow-data.ts
function Ff(e, t, n) {
	let r = new Map(t.map((e) => [e.sceneId, e]));
	for (let t of e) {
		if (t.metrics.gridRegionShapes === 0) continue;
		let e = r.get(t.id);
		if (e && !Is(Fs(t.dimensions, n.dimensions, e), t.grid.size)) throw Error(`Scene ${t.name} has grid Region geometry which is not aligned after destination insets.`);
	}
}
function If(e, t, n) {
	let r = { ...n };
	for (let [n, i] of Object.entries(rs)) !i || t.options.content[n] || (r[i] = e.reduce((e, t) => e + (t.documents[i]?.length ?? 0), r[i] ?? 0));
	return r;
}
function Lf(e) {
	return e.reduce((e, t) => e + Zd(t.behaviors).length, 0);
}
function Rf(e, t, n, r, i, a, o) {
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
function zf(e, t, n, r, i) {
	let a = new Set(is(r.options.content)), o = new Map(t.map((e) => [e.sceneId, e])), s = new Map([...t].sort((e, t) => e.order - t.order).map((e, t) => [e.sceneId, t])), c = Math.max(1, ...e.map((e) => e.documents.Tile?.length ?? 0)) + 1, l = /* @__PURE__ */ new Map(), u = {};
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
				let a = Bf(Z(s), e, t.id, r, t.grid, p, f, c, o, n.id, i);
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
function Bf(e, t, n, r, i, a, o, s, c, l, u) {
	let d = $d(e);
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
	}, m = Vf(e, t, r, i);
	t === "Tile" && (m.sort = (o + 1) * s + c), m = Uf(m, f), m = Hf(m, p), u?.(m, p), m = wf(m, f);
	let h = Hs(Z(m), a);
	return delete h._id, delete h._stats, Wf(h), {
		creationData: h,
		data: m,
		identity: f,
		type: t
	};
}
function Vf(e, t, n, r) {
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
function Hf(e, t) {
	let n = e;
	for (let e of mf()) {
		let r = e.documentTransformers?.[t.documentType];
		r && (n = Z(r(n, t)));
	}
	return n;
}
function Uf(e, t) {
	return t.documentType === "Region" && (e.behaviors = Zd(e.behaviors).map((e) => {
		let n = $d(e);
		return n ? wf(e, {
			documentId: n,
			documentType: "RegionBehavior",
			parentIds: [t.documentId],
			sceneId: t.sceneId
		}) : e;
	})), e;
}
function Wf(e) {
	let t = Zd(e.behaviors);
	t.length !== 0 && (e.behaviors = t.map((e) => {
		let t = Z(e);
		return delete t._id, delete t._stats, t;
	}));
}
//#endregion
//#region src/module/runtime/reference-updates.ts
function Gf(e, t, n, r, i) {
	let a = /* @__PURE__ */ new Map(), o = [], s = 0;
	for (let [c, l] of e) for (let e of l) {
		let l = {
			destinationSceneId: n,
			idMap: t,
			sourceSceneId: e.identity.sceneId,
			sourceSceneIds: r
		}, u = t.get(xs(e.identity.sceneId, c, e.identity.documentId));
		if (!u) {
			o.push(`${c}.${e.identity.documentId}`);
			continue;
		}
		let d = Ns(c, e.data, l), f = Z(d.value);
		s += d.rewritten, o.push(...d.unresolved);
		for (let e of mf()) {
			if (!e.referenceRewriter) continue;
			let t = e.referenceRewriter(f, l);
			f = Z(t.value), s += t.rewritten, o.push(...t.unresolved);
		}
		i?.(f, l), f._id = u, c === "Region" && Kf(f, e.identity.documentId, l, o), o.push(...qf(f, r, c)), f = Tf(f);
		let p = a.get(c) ?? [];
		p.push(f), a.set(c, p);
	}
	return {
		referencesRewritten: s,
		unresolved: [...new Set(o)],
		updates: a
	};
}
function Kf(e, t, n, r) {
	e.behaviors = Zd(e.behaviors).map((e) => {
		let i = $d(e);
		if (!i) return e;
		let a = n.idMap.get(xs(n.sourceSceneId, "RegionBehavior", i, [t]));
		return a ? {
			...e,
			_id: a
		} : (r.push(`Region.${t}.RegionBehavior.${i}`), e);
	});
}
function qf(e, t, n) {
	let r = Q(e.flags);
	if (!r) return [];
	let i = [];
	return Jf(r, "flags", t, (t) => {
		i.push(`${n}.${$d(e) ?? "unknown"}:${t}`);
	}), i;
}
function Jf(e, t, n, r) {
	if (typeof e == "string") {
		n.some((t) => e.includes(`Scene.${t}.`)) && r(t);
		return;
	}
	if (Array.isArray(e)) {
		e.forEach((e, i) => Jf(e, `${t}[${i}]`, n, r));
		return;
	}
	let i = Q(e);
	if (i) for (let [e, a] of Object.entries(i)) Jf(a, `${t}.${e}`, n, r);
}
//#endregion
//#region src/module/runtime/merge/workflow.ts
var Yf = 200, Xf = [
	["Tile", "copyingTiles"],
	["Wall", "copyingWalls"],
	["AmbientLight", "copyingLights"],
	["AmbientSound", "copyingSounds"],
	["Drawing", "copyingDrawings"],
	["Note", "copyingNotes"],
	["Region", "copyingRegions"],
	["Token", "copyingTokens"]
];
async function Zf(e, t, n) {
	let r = n.cancellation ?? new cf(), i = Math.max(1, n.batchSize ?? Yf), a, o = "beforeDestination";
	try {
		r.throwIfCancelled(), await vf(e), n.runtime.callHook("fvttSceneMergerPreMerge", e, t), o = "calculatingBounds", Nf(n, o, 0, 1, "Calculating normalized destination bounds");
		let s = cs(e.placements);
		r.throwIfCancelled(), o = "creatingScene", Nf(n, o, 0, 1, "Creating destination Scene and Level"), a = await n.runtime.createDestination(Qf(e, t, s.width, s.height)), Nf(n, o, 1, 1, a.name), r.throwIfCancelled(), Ff(t, s.placements, a);
		let c = $f(t, a.levelId), l = { Level: 1 }, u = [];
		if (o = "creatingBackgrounds", Nf(n, o, 0, 0, "Preparing background and foreground Tiles"), e.options.content.backgrounds) {
			let c = bf(t, s.placements, {
				...a.dimensions,
				levelId: a.levelId
			}, e.options.destination.lockBackgroundTiles);
			await Af(a, "Tile", c, o, n, r, i), l.Tile = c.length;
		}
		let d = zf(t, s.placements, {
			...a.dimensions,
			id: a.id,
			levelId: a.levelId
		}, e, (e, t) => n.runtime.callHook("fvttSceneMergerTransformDocument", e, t)), f = If(t, e, d.skipped);
		for (let [e, t] of Xf) {
			o = t;
			let s = d.batches.get(e) ?? [];
			Nf(n, o, 0, s.length, `Preparing ${e} documents`);
			let f = await jf(a, e, s.map((e) => e.creationData), c, u, o, n, r, i);
			l[e] = (l[e] ?? 0) + f, e === "Region" && (l.RegionBehavior = Lf(s.map((e) => e.data)));
		}
		o = "rewritingReferences", Nf(n, o, 0, 0, "Rewriting supported internal references");
		let p = Gf(d.batches, c, a.id, e.sourceSceneIds, (e, t) => n.runtime.callHook("fvttSceneMergerRewriteReferences", e, t));
		u.push(...p.unresolved);
		for (let [e, t] of p.updates) await Mf(a, e, t, n, r, i);
		o = "finalizing", Nf(n, o, 0, 1, "Finalizing destination Scene");
		let m = Rf(t, a, l, f, p.referencesRewritten, u, n.validationWarnings ?? []);
		return e.options.destination.activateAfterMerge && await a.activate(), e.options.destination.openAfterMerge && await a.open(), await yf(m), n.runtime.callHook("fvttSceneMergerPostMerge", m), Nf(n, o, 1, 1, a.name), m;
	} catch (e) {
		let t, r = !!a;
		if (a && ns({
			cleanupEnabled: n.cleanupPartial,
			destinationCreated: !0,
			stage: o
		})) try {
			await a.delete(), r = !1;
		} catch (e) {
			t = e;
		}
		throw new sf({
			...t ? { cleanupError: t } : {},
			...a && r ? { destinationSceneId: a.id } : {},
			error: e,
			stage: o
		});
	}
}
function Qf(e, t, n, r) {
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
		padding: 0,
		shiftX: 0,
		shiftY: 0,
		thumb: null,
		tokenVision: i.source.tokenVision ?? !0,
		width: n
	};
}
function $f(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) {
		let e = r.levels[0]?.id;
		if (!e) continue;
		let i = xs(r.id, "Level", e);
		n.set(i, t);
	}
	return n;
}
//#endregion
//#region src/module/runtime/scene-snapshots.ts
var ep = [
	"Tile",
	"Wall",
	"AmbientLight",
	"AmbientSound",
	"Drawing",
	"Note",
	"Region",
	"Token"
], tp = new Set([
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
async function np() {
	return qd().scenes.contents.map((e) => ap(e, !1));
}
async function rp() {
	return qd().folders.contents.filter((e) => e.id && e.type === "Scene").map((e) => ({
		id: e.id ?? "",
		name: e.name
	}));
}
function ip(e) {
	return e.map((e) => ap(Jd(e), !0));
}
function ap(e, t) {
	let n = qd(), r = op(e), i = e.levels.contents.map((e) => ({
		elevation: {
			bottom: $(e.elevation?.bottom),
			top: $(e.elevation?.top)
		},
		id: e.id ?? "",
		name: e.name ?? "Level"
	})), a = {
		background: sp(e),
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
		metrics: cp(e, r),
		name: e.name ?? "Untitled Scene",
		thumbnail: e.thumbnail
	};
	return t ? {
		...a,
		documents: r,
		source: Yd(e)
	} : a;
}
function op(e) {
	let t = { Level: e.levels.contents.map(Yd) };
	for (let n of ep) t[n] = e.getEmbeddedCollection(n).contents.map(Yd);
	return t;
}
function sp(e) {
	let t = e.levels.contents[0], n = Q((t ? Yd(t) : void 0)?.background), r = n?.src, i = n?.color, a = typeof r == "string" && r.length > 0, o = typeof i == "string" && i.length > 0 || typeof i == "number" && Number.isFinite(i);
	return !a && !o ? null : {
		animated: a && tf(r),
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
function cp(e, t) {
	let n = {}, r = 0, i = 0, a = 0, o = 0, s = 0, c = 0, l = 0, u = 0, d = 0, f = 0;
	c += +!!up(Yd(e));
	for (let t of e.levels.contents) {
		let n = Yd(t);
		for (let t of [Q(n.background), Q(n.foreground)]) t?.src && (a += 1, i += +!!tf(t.src), l += e.dimensions.sceneWidth * e.dimensions.sceneHeight);
	}
	for (let [a, p] of Object.entries(t)) {
		n[a] = p.length;
		for (let t of p) {
			let n = lp(t, e.id ?? "");
			i += n.animated, r += n.attachedRegion, o += n.crossReferences, s += n.gridShapes, c += n.moduleFlags, l += n.texturePixels, u += n.tokenRegionShapes, d += n.regionBehaviors, f += n.unsupportedRegionShapes;
		}
	}
	return n.RegionBehavior = (t.Region ?? []).reduce((e, t) => e + Zd(t.behaviors).length, 0), {
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
function lp(e, t) {
	let n = Q(e.texture), r = n?.src, i = Q(e.attachment), a = Zd(e.shapes), o = Zd(e.behaviors);
	return {
		animated: +!!tf(r),
		attachedRegion: +(typeof i?.token == "string" && i.token.length > 0),
		crossReferences: dp(e, t),
		gridShapes: a.filter((e) => Qd(e.type) === "grid").length,
		moduleFlags: +!!up(e),
		regionBehaviors: o.filter((e) => fp(e) || Qd(e.type).toLowerCase().includes("changelevel")).length,
		texturePixels: n ? $(e.width) * $(e.height) : 0,
		tokenRegionShapes: a.filter((e) => Qd(e.type) === "token").length,
		unsupportedRegionShapes: a.filter((e) => !tp.has(Qd(e.type))).length
	};
}
function up(e) {
	let t = Q(e.flags);
	return !!(t && Object.keys(t).some((e) => e !== "core" && e !== "fvtt-scene-merger"));
}
function dp(e, t) {
	if (typeof e == "string") return [...e.matchAll(/Scene\.([A-Za-z0-9_-]+)/g)].filter((e) => e[1] !== t).length;
	if (Array.isArray(e)) return e.reduce((e, n) => e + dp(n, t), 0);
	let n = Q(e);
	return n ? Object.values(n).reduce((e, n) => e + dp(n, t), 0) : 0;
}
function fp(e) {
	if (typeof e == "string") return /(?:Scene|Region|Token)\./.test(e);
	if (Array.isArray(e)) return e.some(fp);
	let t = Q(e);
	return t ? Object.entries(t).some(([e, t]) => /^(?:destination|region|scene|token|uuid)/i.test(e) ? !0 : fp(t)) : !1;
}
//#endregion
//#region src/module/runtime/asset-validation.ts
var pp = 64, mp = 4e3, hp = /* @__PURE__ */ new Map();
async function gp(e, t) {
	return (await Promise.all(e.map(async (e) => {
		let n = [], r = _p(e, t), i = r.slice(0, pp), a = await Promise.all(i.map(yp)), o = a.filter((e) => e === "missing").length, s = a.filter((e) => e === "unverified").length + Math.max(0, r.length - i.length);
		return o > 0 && n.push(xp("assets.unavailable", e.id, o)), s > 0 && n.push(xp("assets.unverified", e.id, s)), n;
	}))).flat();
}
function _p(e, t) {
	let n = /* @__PURE__ */ new Set();
	if (t.backgrounds) for (let t of e.documents.Level ?? []) vp(n, Q(t.background)), vp(n, Q(t.foreground));
	if (t.tiles) for (let t of e.documents.Tile ?? []) vp(n, Q(t.texture));
	return [...n];
}
function vp(e, t) {
	let n = t?.src;
	typeof n == "string" && n.trim().length > 0 && e.add(n);
}
function yp(e) {
	let t = hp.get(e);
	if (t) return t;
	let n = bp(e);
	return hp.set(e, n), n;
}
async function bp(e) {
	if (/^(?:data|blob):/i.test(e)) return "available";
	let t = new AbortController(), n = globalThis.setTimeout(() => t.abort(), mp);
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
function xp(e, t, n) {
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
async function Sp(e) {
	return (await Cp(e)).report;
}
async function Cp(e) {
	let t = qd(), n = e.sourceSceneIds.filter((e) => !t.scenes.get(e)), r = ip(e.sourceSceneIds.filter((e) => t.scenes.get(e))), i = cs(e.placements).placements, a = sc(r, i, e.options), o = [
		...a.blocking,
		...a.warnings,
		...await gp(r, e.options.content),
		...n.map((e) => Ep(e))
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
	(!t.user.isGM || !Scene.implementation.canUserCreate(t.user)) && o.push(Ep("destination"));
	for (let t of mf()) t.validate && o.push(...t.validate(r, e));
	return {
		report: oc(o),
		scenes: r
	};
}
function wp(e, t) {
	let n = new Set(e.acknowledgedWarnings);
	return t.warnings.filter((e) => !n.has(e.code) && !n.has(Tp(e)));
}
function Tp(e) {
	return `${e.code}:${[...e.sceneIds].sort().join(",")}`;
}
function Ep(e) {
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
var Dp;
async function Op(e, t) {
	if (Dp) throw Error("Another Scene merge is already in progress on this client.");
	let n = new cf();
	Dp = n;
	try {
		t?.({
			completed: 0,
			detail: "Validating source Scenes",
			stage: "validating",
			total: 1
		});
		let r = await Cp(e);
		if (Kd.debug("Scene merge request validated", {
			acknowledgedWarnings: e.acknowledgedWarnings.length,
			blocking: r.report.blocking.map((e) => e.code),
			enabledContent: Object.entries(e.options.content).flatMap(([e, t]) => t ? [e] : []),
			placementCount: e.placements.length,
			sourceCount: r.scenes.length,
			warnings: r.report.warnings.map((e) => e.code)
		}), r.report.blocking.length > 0) throw Error(`Scene merge is blocked: ${r.report.blocking.map((e) => rf(e.code)).join(", ")}.`);
		let i = wp(e, r.report);
		if (i.length > 0) throw Error(`Review and acknowledge ${i.length} merge warning(s) before continuing.`);
		t?.({
			completed: 1,
			detail: "Source Scenes validated",
			stage: "validating",
			total: 1
		}), n.throwIfCancelled();
		let a = await Zf(e, r.scenes, {
			cancellation: n,
			cleanupPartial: af(),
			...t ? { onProgress: t } : {},
			runtime: df,
			validationWarnings: r.report.warnings.map(Tp)
		});
		return Kd.info("Scene merge completed", a), df.notifyInfo(`Created Scene “${a.destinationSceneName}”.`), a;
	} catch (e) {
		throw Kd.error("Scene merge failed", e), df.notifyError(e instanceof Error ? e.message : String(e)), e;
	} finally {
		Dp = void 0;
	}
}
var kp = {
	cancelActiveMerge() {
		Dp?.cancel();
	},
	listSceneFolders: rp,
	listScenes: np,
	merge: Op,
	async openScene(e) {
		await Jd(e).view();
	},
	validate(e) {
		return Sp(e);
	}
}, Ap = class extends foundry.applications.api.ApplicationV2 {
	#e;
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("fvtt-scene-merger-root"), n.dataset.theme = "fvtt-scene-merger", n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("fvtt-scene-merger-app"), t.replaceChildren(e), this.#e = vo(this.getVueComponent(), this.getVueProps() ?? {}), this.#e.use(zo()), this.#e.mount(e);
	}
	async _preClose(e) {
		this.unmountVue(), await super._preClose(e);
	}
	unmountVue() {
		this.#e?.unmount(), this.#e = void 0;
	}
}, jp = class e extends Ap {
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
			title: `${Wd}.App.Title`
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
		return Hd;
	}
	getVueProps() {
		return {
			services: kp,
			t: (e, t) => {
				let n = qd().i18n;
				return t ? n.format(e, t) : n.localize(e);
			}
		};
	}
};
async function Mp() {
	await jp.open();
}
//#endregion
//#region src/module/api/create-module-api.ts
function Np() {
	return {
		cancelActiveMerge: kp.cancelActiveMerge,
		listSceneFolders: kp.listSceneFolders,
		listScenes: kp.listScenes,
		merge: kp.merge,
		open: Mp,
		openScene: kp.openScene,
		registerDocumentTransformer: hf,
		registerExtension: pf,
		registerReferenceRewriter: _f,
		registerValidator: gf,
		validate: kp.validate
	};
}
//#endregion
//#region src/module/api/register-module-api.ts
function Pp() {
	if (!game) throw Error("Foundry game global is unavailable during module API registration.");
	let e = game.modules.get(X);
	if (!e) throw Error(`Foundry module registry entry was not found for ${X}.`);
	e.api = Np();
}
//#endregion
//#region src/module/settings/register-settings.ts
function Fp() {
	let e = qd().settings;
	e.register(X, "cleanupPartialDestination", {
		config: !0,
		default: !0,
		hint: `${Wd}.Settings.CleanupPartial.Hint`,
		name: `${Wd}.Settings.CleanupPartial.Name`,
		scope: "world",
		type: Boolean
	}), e.register(X, "debugLogging", {
		config: !0,
		default: !1,
		hint: `${Wd}.Settings.DebugLogging.Hint`,
		name: `${Wd}.Settings.DebugLogging.Name`,
		scope: "client",
		type: Boolean
	}), e.registerMenu(X, "sceneMerger", {
		icon: "fa-solid fa-object-group",
		label: `${Wd}.Settings.Open.Label`,
		name: `${Wd}.Settings.Open.Name`,
		restricted: !0,
		type: jp
	});
}
//#endregion
//#region src/module/hooks/register-module-hooks.ts
function Ip() {
	Hooks.once("init", () => {
		Fp(), Pp();
	}), Hooks.once("ready", () => {
		let e = Rp();
		Hooks.callAll("fvttSceneMergerRegisterExtensions", e), Hooks.callAll("fvttSceneMergerReady", e);
	}), Hooks.on("getSceneControlButtons", (...e) => {
		Lp(e[0]);
	});
}
function Lp(e) {
	if (!qd().user.isGM) return;
	let t = e.tiles ?? e.tokens;
	t && (t.tools[`${X}-open`] = {
		button: !0,
		icon: "fa-solid fa-object-group",
		name: `${X}-open`,
		onChange: () => {
			Mp();
		},
		order: Object.keys(t.tools).length,
		title: `${Wd}.Controls.Open`,
		visible: !0
	});
}
function Rp() {
	let e = qd().modules.get(X)?.api;
	if (!e) throw Error("Scene Merger API is unavailable after initialization.");
	return e;
}
//#endregion
//#region src/main.ts
Ip();
//#endregion

//# sourceMappingURL=fvtt-scene-merger.mjs.map