//#region node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function e(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var t = process.env.NODE_ENV === "production" ? {} : Object.freeze({}), n = process.env.NODE_ENV === "production" ? [] : Object.freeze([]), r = () => {}, i = () => !1, a = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), o = (e) => e.startsWith("onUpdate:"), s = Object.assign, c = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, l = Object.prototype.hasOwnProperty, u = (e, t) => l.call(e, t), d = Array.isArray, f = (e) => x(e) === "[object Map]", p = (e) => x(e) === "[object Set]", m = (e) => x(e) === "[object Date]", h = (e) => typeof e == "function", g = (e) => typeof e == "string", _ = (e) => typeof e == "symbol", v = (e) => typeof e == "object" && !!e, y = (e) => (v(e) || h(e)) && h(e.then) && h(e.catch), b = Object.prototype.toString, x = (e) => b.call(e), S = (e) => x(e).slice(8, -1), C = (e) => x(e) === "[object Object]", w = (e) => g(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ee = /* @__PURE__ */ e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), te = /* @__PURE__ */ e("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), T = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, ne = /-\w/g, E = T((e) => e.replace(ne, (e) => e.slice(1).toUpperCase())), re = /\B([A-Z])/g, D = T((e) => e.replace(re, "-$1").toLowerCase()), ie = T((e) => e.charAt(0).toUpperCase() + e.slice(1)), ae = T((e) => e ? `on${ie(e)}` : ""), oe = (e, t) => !Object.is(e, t), se = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, ce = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, O = (e) => {
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
function ge(e) {
	let t = "";
	if (g(e)) t = e;
	else if (d(e)) for (let n = 0; n < e.length; n++) {
		let r = ge(e[n]);
		r && (t += r + " ");
	}
	else if (v(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var _e = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", ve = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", ye = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", be = /* @__PURE__ */ e(_e), xe = /* @__PURE__ */ e(ve), Se = /* @__PURE__ */ e(ye), Ce = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", we = /* @__PURE__ */ e(Ce);
Ce + "";
function Te(e) {
	return !!e || e === "";
}
function Ee(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = De(e[r], t[r]);
	return n;
}
function De(e, t) {
	if (e === t) return !0;
	let n = m(e), r = m(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = _(e), r = _(t), n || r) return e === t;
	if (n = d(e), r = d(t), n || r) return n && r ? Ee(e, t) : !1;
	if (n = v(e), r = v(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !De(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
var Oe = (e) => !!(e && e.__v_isRef === !0), k = (e) => g(e) ? e : e == null ? "" : d(e) || v(e) && (e.toString === b || !h(e.toString)) ? Oe(e) ? k(e.value) : JSON.stringify(e, ke, 2) : String(e), ke = (e, t) => Oe(t) ? ke(e, t.value) : f(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Ae(t, r) + " =>"] = n, e), {}) } : p(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Ae(e)) } : _(t) ? Ae(t) : v(t) && !d(t) && !C(t) ? String(t) : t, Ae = (e, t = "") => _(e) ? `Symbol(${e.description ?? t})` : e;
//#endregion
//#region node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
function je(e, ...t) {
	console.warn(`[Vue warn] ${e}`, ...t);
}
var A, Me = class {
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
		} else process.env.NODE_ENV !== "production" && this._warnOnRun && je("cannot run an inactive effect scope.");
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
function Ne(e) {
	return new Me(e);
}
function Pe() {
	return A;
}
function Fe(e, t = !1) {
	A ? A.cleanups.push(e) : process.env.NODE_ENV !== "production" && !t && je("onScopeDispose() is called when there is no active effect scope to be associated with.");
}
var j, Ie = /* @__PURE__ */ new WeakSet(), Le = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, A && (A.active ? A.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Ie.has(this) && (Ie.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ve(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, et(this), We(this);
		let e = j, t = Xe;
		j = this, Xe = !0;
		try {
			return this.fn();
		} finally {
			process.env.NODE_ENV !== "production" && j !== this && je("Active effect was not restored correctly - this is likely a Vue internal bug."), Ge(this), j = e, Xe = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Je(e);
			this.deps = this.depsTail = void 0, et(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Ie.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Ke(this) && this.run();
	}
	get dirty() {
		return Ke(this);
	}
}, Re = 0, ze, Be;
function Ve(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = Be, Be = e;
		return;
	}
	e.next = ze, ze = e;
}
function He() {
	Re++;
}
function Ue() {
	if (--Re > 0) return;
	if (Be) {
		let e = Be;
		for (Be = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; ze;) {
		let t = ze;
		for (ze = void 0; t;) {
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
function We(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ge(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Je(r), Ye(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Ke(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (qe(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function qe(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === tt) || (e.globalVersion = tt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ke(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = j, r = Xe;
	j = e, Xe = !0;
	try {
		We(e);
		let n = e.fn(e._value);
		(t.version === 0 || oe(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		j = n, Xe = r, Ge(e), e.flags &= -3;
	}
}
function Je(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = i), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Je(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ye(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var Xe = !0, Ze = [];
function Qe() {
	Ze.push(Xe), Xe = !1;
}
function $e() {
	let e = Ze.pop();
	Xe = e === void 0 ? !0 : e;
}
function et(e) {
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
var tt = 0, nt = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, rt = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
	}
	track(e) {
		if (!j || !Xe || j === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== j) t = this.activeLink = new nt(j, this), j.deps ? (t.prevDep = j.depsTail, j.depsTail.nextDep = t, j.depsTail = t) : j.deps = j.depsTail = t, it(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = j.depsTail, t.nextDep = void 0, j.depsTail.nextDep = t, j.depsTail = t, j.deps === t && (j.deps = e);
		}
		return process.env.NODE_ENV !== "production" && j.onTrack && j.onTrack(s({ effect: j }, e)), t;
	}
	trigger(e) {
		this.version++, tt++, this.notify(e);
	}
	notify(e) {
		He();
		try {
			if (process.env.NODE_ENV !== "production") for (let t = this.subsHead; t; t = t.nextSub) t.sub.onTrigger && !(t.sub.flags & 8) && t.sub.onTrigger(s({ effect: t.sub }, e));
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Ue();
		}
	}
};
function it(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) it(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
	}
}
var at = /* @__PURE__ */ new WeakMap(), ot = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "Object iterate"), st = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "Map keys iterate"), ct = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "Array iterate");
function M(e, t, n) {
	if (Xe && j) {
		let r = at.get(e);
		r || at.set(e, r = /* @__PURE__ */ new Map());
		let i = r.get(n);
		i || (r.set(n, i = new rt()), i.map = r, i.key = n), process.env.NODE_ENV === "production" ? i.track() : i.track({
			target: e,
			type: t,
			key: n
		});
	}
}
function lt(e, t, n, r, i, a) {
	let o = at.get(e);
	if (!o) {
		tt++;
		return;
	}
	let s = (o) => {
		o && (process.env.NODE_ENV === "production" ? o.trigger() : o.trigger({
			target: e,
			type: t,
			key: n,
			newValue: r,
			oldValue: i,
			oldTarget: a
		}));
	};
	if (He(), t === "clear") o.forEach(s);
	else {
		let i = d(e), a = i && w(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === ct || !_(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(ct)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(ot)), f(e) && s(o.get(st)));
				break;
			case "delete":
				i || (s(o.get(ot)), f(e) && s(o.get(st)));
				break;
			case "set":
				f(e) && s(o.get(ot));
				break;
		}
	}
	Ue();
}
function ut(e, t) {
	let n = at.get(e);
	return n && n.get(t);
}
function dt(e) {
	let t = /* @__PURE__ */ P(e);
	return t === e ? t : (M(t, "iterate", ct), /* @__PURE__ */ N(e) ? t : t.map(nn));
}
function ft(e) {
	return M(e = /* @__PURE__ */ P(e), "iterate", ct), e;
}
function pt(e, t) {
	return /* @__PURE__ */ $t(e) ? rn(/* @__PURE__ */ Qt(e) ? nn(t) : t) : nn(t);
}
var mt = {
	__proto__: null,
	[Symbol.iterator]() {
		return ht(this, Symbol.iterator, (e) => pt(this, e));
	},
	concat(...e) {
		return dt(this).concat(...e.map((e) => d(e) ? dt(e) : e));
	},
	entries() {
		return ht(this, "entries", (e) => (e[1] = pt(this, e[1]), e));
	},
	every(e, t) {
		return _t(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return _t(this, "filter", e, t, (e) => e.map((e) => pt(this, e)), arguments);
	},
	find(e, t) {
		return _t(this, "find", e, t, (e) => pt(this, e), arguments);
	},
	findIndex(e, t) {
		return _t(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return _t(this, "findLast", e, t, (e) => pt(this, e), arguments);
	},
	findLastIndex(e, t) {
		return _t(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return _t(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return yt(this, "includes", e);
	},
	indexOf(...e) {
		return yt(this, "indexOf", e);
	},
	join(e) {
		return dt(this).join(e);
	},
	lastIndexOf(...e) {
		return yt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return _t(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return bt(this, "pop");
	},
	push(...e) {
		return bt(this, "push", e);
	},
	reduce(e, ...t) {
		return vt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return vt(this, "reduceRight", e, t);
	},
	shift() {
		return bt(this, "shift");
	},
	some(e, t) {
		return _t(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return bt(this, "splice", e);
	},
	toReversed() {
		return dt(this).toReversed();
	},
	toSorted(e) {
		return dt(this).toSorted(e);
	},
	toSpliced(...e) {
		return dt(this).toSpliced(...e);
	},
	unshift(...e) {
		return bt(this, "unshift", e);
	},
	values() {
		return ht(this, "values", (e) => pt(this, e));
	}
};
function ht(e, t, n) {
	let r = ft(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ N(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var gt = Array.prototype;
function _t(e, t, n, r, i, a) {
	let o = ft(e), s = o !== e && !/* @__PURE__ */ N(e), c = o[t];
	if (c !== gt[t]) {
		let t = c.apply(e, a);
		return s ? nn(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, pt(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function vt(e, t, n, r) {
	let i = ft(e), a = i !== e && !/* @__PURE__ */ N(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = pt(e, t)), n.call(this, t, pt(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? pt(e, c) : c;
}
function yt(e, t, n) {
	let r = /* @__PURE__ */ P(e);
	M(r, "iterate", ct);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ en(n[0]) ? (n[0] = /* @__PURE__ */ P(n[0]), r[t](...n)) : i;
}
function bt(e, t, n = []) {
	Qe(), He();
	let r = (/* @__PURE__ */ P(e))[t].apply(e, n);
	return Ue(), $e(), r;
}
var xt = /* @__PURE__ */ e("__proto__,__v_isRef,__isVue"), St = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_));
function Ct(e) {
	_(e) || (e = String(e));
	let t = /* @__PURE__ */ P(this);
	return M(t, "has", e), t.hasOwnProperty(e);
}
var wt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Gt : Wt : i ? Ut : Ht).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = d(e);
		if (!r) {
			let e;
			if (a && (e = mt[t])) return e;
			if (t === "hasOwnProperty") return Ct;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ F(e) ? e : n);
		if ((_(t) ? St.has(t) : xt(t)) || (r || M(e, "get", t), i)) return o;
		if (/* @__PURE__ */ F(o)) {
			let e = a && w(t) ? o : o.value;
			return r && v(e) ? /* @__PURE__ */ Yt(e) : e;
		}
		return v(o) ? r ? /* @__PURE__ */ Yt(o) : /* @__PURE__ */ qt(o) : o;
	}
}, Tt = class extends wt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = d(e) && w(t);
		if (!this._isShallow) {
			let r = /* @__PURE__ */ $t(i);
			if (!/* @__PURE__ */ N(n) && !/* @__PURE__ */ $t(n) && (i = /* @__PURE__ */ P(i), n = /* @__PURE__ */ P(n)), !a && /* @__PURE__ */ F(i) && !/* @__PURE__ */ F(n)) return r ? (process.env.NODE_ENV !== "production" && je(`Set operation on key "${String(t)}" failed: target is readonly.`, e[t]), !0) : (i.value = n, !0);
		}
		let o = a ? Number(t) < e.length : u(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ F(e) ? e : r);
		return e === /* @__PURE__ */ P(r) && (o ? oe(n, i) && lt(e, "set", t, n, i) : lt(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = u(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && lt(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!_(t) || !St.has(t)) && M(e, "has", t), n;
	}
	ownKeys(e) {
		return M(e, "iterate", d(e) ? "length" : ot), Reflect.ownKeys(e);
	}
}, Et = class extends wt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return process.env.NODE_ENV !== "production" && je(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
	}
	deleteProperty(e, t) {
		return process.env.NODE_ENV !== "production" && je(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
	}
}, Dt = /* @__PURE__ */ new Tt(), Ot = /* @__PURE__ */ new Et(), kt = /* @__PURE__ */ new Tt(!0), At = /* @__PURE__ */ new Et(!0), jt = (e) => e, Mt = (e) => Reflect.getPrototypeOf(e);
function Nt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ P(i), o = f(a), c = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? jt : t ? rn : nn;
		return !t && M(a, "iterate", l ? st : ot), s(Object.create(u), { next() {
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
function Pt(e) {
	return function(...t) {
		if (process.env.NODE_ENV !== "production") {
			let n = t[0] ? `on key "${t[0]}" ` : "";
			je(`${ie(e)} operation ${n}failed: target is readonly.`, /* @__PURE__ */ P(this));
		}
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Ft(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ P(r), a = /* @__PURE__ */ P(n);
			e || (oe(n, a) && M(i, "get", n), M(i, "get", a));
			let { has: o } = Mt(i), s = t ? jt : e ? rn : nn;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && M(/* @__PURE__ */ P(t), "iterate", ot), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ P(n), i = /* @__PURE__ */ P(t);
			return e || (oe(t, i) && M(r, "has", t), M(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ P(a), s = t ? jt : e ? rn : nn;
			return !e && M(o, "iterate", ot), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return s(n, e ? {
		add: Pt("add"),
		set: Pt("set"),
		delete: Pt("delete"),
		clear: Pt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ P(this), r = Mt(n), i = /* @__PURE__ */ P(e), a = !t && !/* @__PURE__ */ N(e) && !/* @__PURE__ */ $t(e) ? i : e;
			return r.has.call(n, a) || oe(e, a) && r.has.call(n, e) || oe(i, a) && r.has.call(n, i) || (n.add(a), lt(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ N(n) && !/* @__PURE__ */ $t(n) && (n = /* @__PURE__ */ P(n));
			let r = /* @__PURE__ */ P(this), { has: i, get: a } = Mt(r), o = i.call(r, e);
			o ? process.env.NODE_ENV !== "production" && Vt(r, i, e) : (e = /* @__PURE__ */ P(e), o = i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? oe(n, s) && lt(r, "set", e, n, s) : lt(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ P(this), { has: n, get: r } = Mt(t), i = n.call(t, e);
			i ? process.env.NODE_ENV !== "production" && Vt(t, n, e) : (e = /* @__PURE__ */ P(e), i = n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && lt(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ P(this), t = e.size !== 0, n = process.env.NODE_ENV === "production" ? void 0 : f(e) ? new Map(e) : new Set(e), r = e.clear();
			return t && lt(e, "clear", void 0, void 0, n), r;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Nt(r, e, t);
	}), n;
}
function It(e, t) {
	let n = Ft(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(u(n, r) && r in t ? n : t, r, i);
}
var Lt = { get: /* @__PURE__ */ It(!1, !1) }, Rt = { get: /* @__PURE__ */ It(!1, !0) }, zt = { get: /* @__PURE__ */ It(!0, !1) }, Bt = { get: /* @__PURE__ */ It(!0, !0) };
function Vt(e, t, n) {
	let r = /* @__PURE__ */ P(n);
	if (r !== n && t.call(e, r)) {
		let t = S(e);
		je(`Reactive ${t} contains both the raw and reactive versions of the same object${t === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
	}
}
var Ht = /* @__PURE__ */ new WeakMap(), Ut = /* @__PURE__ */ new WeakMap(), Wt = /* @__PURE__ */ new WeakMap(), Gt = /* @__PURE__ */ new WeakMap();
function Kt(e) {
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
function qt(e) {
	return /* @__PURE__ */ $t(e) ? e : Zt(e, !1, Dt, Lt, Ht);
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
	return Zt(e, !1, kt, Rt, Ut);
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
	return Zt(e, !0, Ot, zt, Wt);
}
// @__NO_SIDE_EFFECTS__
function Xt(e) {
	return Zt(e, !0, At, Bt, Gt);
}
function Zt(e, t, n, r, i) {
	if (!v(e)) return process.env.NODE_ENV !== "production" && je(`value cannot be made ${t ? "readonly" : "reactive"}: ${String(e)}`), e;
	if (e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Kt(S(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Qt(e) {
	return /* @__PURE__ */ $t(e) ? /* @__PURE__ */ Qt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function N(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function en(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function P(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ P(t) : e;
}
function tn(e) {
	return !u(e, "__v_skip") && Object.isExtensible(e) && ce(e, "__v_skip", !0), e;
}
var nn = (e) => v(e) ? /* @__PURE__ */ qt(e) : e, rn = (e) => v(e) ? /* @__PURE__ */ Yt(e) : e;
// @__NO_SIDE_EFFECTS__
function F(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function I(e) {
	return on(e, !1);
}
// @__NO_SIDE_EFFECTS__
function an(e) {
	return on(e, !0);
}
function on(e, t) {
	return /* @__PURE__ */ F(e) ? e : new sn(e, t);
}
var sn = class {
	constructor(e, t) {
		this.dep = new rt(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ P(e), this._value = t ? e : nn(e), this.__v_isShallow = t;
	}
	get value() {
		return process.env.NODE_ENV === "production" ? this.dep.track() : this.dep.track({
			target: this,
			type: "get",
			key: "value"
		}), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ N(e) || /* @__PURE__ */ $t(e);
		e = n ? e : /* @__PURE__ */ P(e), oe(e, t) && (this._rawValue = e, this._value = n ? e : nn(e), process.env.NODE_ENV === "production" ? this.dep.trigger() : this.dep.trigger({
			target: this,
			type: "set",
			key: "value",
			newValue: e,
			oldValue: t
		}));
	}
};
function L(e) {
	return /* @__PURE__ */ F(e) ? e.value : e;
}
var cn = {
	get: (e, t, n) => t === "__v_raw" ? e : L(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ F(i) && !/* @__PURE__ */ F(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function ln(e) {
	return /* @__PURE__ */ Qt(e) ? e : new Proxy(e, cn);
}
// @__NO_SIDE_EFFECTS__
function un(e) {
	process.env.NODE_ENV !== "production" && !/* @__PURE__ */ en(e) && je("toRefs() expects a reactive object but received a plain one.");
	let t = d(e) ? Array(e.length) : {};
	for (let n in e) t[n] = mn(e, n);
	return t;
}
var dn = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = _(t) ? t : String(t), this._raw = /* @__PURE__ */ P(e);
		let r = !0, i = e;
		if (!d(e) || _(this._key) || !w(this._key)) do
			r = !/* @__PURE__ */ en(i) || /* @__PURE__ */ N(i);
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
		return ut(this._raw, this._key);
	}
}, fn = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
// @__NO_SIDE_EFFECTS__
function pn(e, t, n) {
	return /* @__PURE__ */ F(e) ? e : h(e) ? new fn(e) : v(e) && arguments.length > 1 ? mn(e, t, n) : /* @__PURE__ */ I(e);
}
function mn(e, t, n) {
	return new dn(e, t, n);
}
var hn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new rt(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = tt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && j !== this) return Ve(this, !0), !0;
		process.env.NODE_ENV;
	}
	get value() {
		let e = process.env.NODE_ENV === "production" ? this.dep.track() : this.dep.track({
			target: this,
			type: "get",
			key: "value"
		});
		return qe(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter ? this.setter(e) : process.env.NODE_ENV !== "production" && je("Write operation failed: computed value is readonly");
	}
};
// @__NO_SIDE_EFFECTS__
function gn(e, t, n = !1) {
	let r, i;
	h(e) ? r = e : (r = e.get, i = e.set);
	let a = new hn(r, i, n);
	return process.env.NODE_ENV !== "production" && t && !n && (a.onTrack = t.onTrack, a.onTrigger = t.onTrigger), a;
}
var _n = {}, vn = /* @__PURE__ */ new WeakMap(), yn = void 0;
function bn(e, t = !1, n = yn) {
	if (n) {
		let t = vn.get(n);
		t || vn.set(n, t = []), t.push(e);
	} else process.env.NODE_ENV !== "production" && !t && je("onWatcherCleanup() was called when there was no active watcher to associate with.");
}
function xn(e, n, i = t) {
	let { immediate: a, deep: o, once: s, scheduler: l, augmentJob: u, call: f } = i, p = (e) => {
		(i.onWarn || je)("Invalid watch source: ", e, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
	}, m = (e) => o ? e : /* @__PURE__ */ N(e) || o === !1 || o === 0 ? Sn(e, 1) : Sn(e), g, _, v, y, b = !1, x = !1;
	if (/* @__PURE__ */ F(e) ? (_ = () => e.value, b = /* @__PURE__ */ N(e)) : /* @__PURE__ */ Qt(e) ? (_ = () => m(e), b = !0) : d(e) ? (x = !0, b = e.some((e) => /* @__PURE__ */ Qt(e) || /* @__PURE__ */ N(e)), _ = () => e.map((e) => {
		if (/* @__PURE__ */ F(e)) return e.value;
		if (/* @__PURE__ */ Qt(e)) return m(e);
		if (h(e)) return f ? f(e, 2) : e();
		process.env.NODE_ENV !== "production" && p(e);
	})) : h(e) ? _ = n ? f ? () => f(e, 2) : e : () => {
		if (v) {
			Qe();
			try {
				v();
			} finally {
				$e();
			}
		}
		let t = yn;
		yn = g;
		try {
			return f ? f(e, 3, [y]) : e(y);
		} finally {
			yn = t;
		}
	} : (_ = r, process.env.NODE_ENV !== "production" && p(e)), n && o) {
		let e = _, t = o === !0 ? Infinity : o;
		_ = () => Sn(e(), t);
	}
	let S = Pe(), C = () => {
		g.stop(), S && S.active && c(S.effects, g);
	};
	if (s && n) {
		let e = n;
		n = (...t) => {
			let n = e(...t);
			return C(), n;
		};
	}
	let w = x ? Array(e.length).fill(_n) : _n, ee = (e) => {
		if (!(!(g.flags & 1) || !g.dirty && !e)) if (n) {
			let t = g.run();
			if (e || o || b || (x ? t.some((e, t) => oe(e, w[t])) : oe(t, w))) {
				v && v();
				let e = yn;
				yn = g;
				try {
					let e = [
						t,
						w === _n ? void 0 : x && w[0] === _n ? [] : w,
						y
					];
					w = t, f ? f(n, 3, e) : n(...e);
				} finally {
					yn = e;
				}
			}
		} else g.run();
	};
	return u && u(ee), g = new Le(_), g.scheduler = l ? () => l(ee, !1) : ee, y = (e) => bn(e, !1, g), v = g.onStop = () => {
		let e = vn.get(g);
		if (e) {
			if (f) f(e, 4);
			else for (let t of e) t();
			vn.delete(g);
		}
	}, process.env.NODE_ENV !== "production" && (g.onTrack = i.onTrack, g.onTrigger = i.onTrigger), n ? a ? ee(!0) : w = g.run() : l ? l(ee.bind(null, !0), !0) : g.run(), C.pause = g.pause.bind(g), C.resume = g.resume.bind(g), C.stop = C, C;
}
function Sn(e, t = Infinity, n) {
	if (t <= 0 || !v(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ F(e)) Sn(e.value, t, n);
	else if (d(e)) for (let r = 0; r < e.length; r++) Sn(e[r], t, n);
	else if (p(e) || f(e)) e.forEach((e) => {
		Sn(e, t, n);
	});
	else if (C(e)) {
		for (let r in e) Sn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && Sn(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var Cn = [];
function wn(e) {
	Cn.push(e);
}
function Tn() {
	Cn.pop();
}
var En = !1;
function R(e, ...t) {
	if (En) return;
	En = !0, Qe();
	let n = Cn.length ? Cn[Cn.length - 1].component : null, r = n && n.appContext.config.warnHandler, i = Dn();
	if (r) Nn(r, n, 11, [
		e + t.map((e) => e.toString?.call(e) ?? JSON.stringify(e)).join(""),
		n && n.proxy,
		i.map(({ vnode: e }) => `at <${cs(n, e.type)}>`).join("\n"),
		i
	]);
	else {
		let n = [`[Vue warn]: ${e}`, ...t];
		i.length && n.push("\n", ...On(i)), console.warn(...n);
	}
	$e(), En = !1;
}
function Dn() {
	let e = Cn[Cn.length - 1];
	if (!e) return [];
	let t = [];
	for (; e;) {
		let n = t[0];
		n && n.vnode === e ? n.recurseCount++ : t.push({
			vnode: e,
			recurseCount: 0
		});
		let r = e.component && e.component.parent;
		e = r && r.vnode;
	}
	return t;
}
function On(e) {
	let t = [];
	return e.forEach((e, n) => {
		t.push(...n === 0 ? [] : ["\n"], ...kn(e));
	}), t;
}
function kn({ vnode: e, recurseCount: t }) {
	let n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, i = ` at <${cs(e.component, e.type, r)}`, a = ">" + n;
	return e.props ? [
		i,
		...An(e.props),
		a
	] : [i + a];
}
function An(e) {
	let t = [], n = Object.keys(e);
	return n.slice(0, 3).forEach((n) => {
		t.push(...jn(n, e[n]));
	}), n.length > 3 && t.push(" ..."), t;
}
function jn(e, t, n) {
	return g(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : /* @__PURE__ */ F(t) ? (t = jn(e, /* @__PURE__ */ P(t.value), !0), n ? t : [
		`${e}=Ref<`,
		t,
		">"
	]) : h(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = /* @__PURE__ */ P(t), n ? t : [`${e}=`, t]);
}
var Mn = {
	sp: "serverPrefetch hook",
	bc: "beforeCreate hook",
	c: "created hook",
	bm: "beforeMount hook",
	m: "mounted hook",
	bu: "beforeUpdate hook",
	u: "updated",
	bum: "beforeUnmount hook",
	um: "unmounted hook",
	a: "activated hook",
	da: "deactivated hook",
	ec: "errorCaptured hook",
	rtc: "renderTracked hook",
	rtg: "renderTriggered hook",
	0: "setup function",
	1: "render function",
	2: "watcher getter",
	3: "watcher callback",
	4: "watcher cleanup function",
	5: "native event handler",
	6: "component event handler",
	7: "vnode hook",
	8: "directive hook",
	9: "transition hook",
	10: "app errorHandler",
	11: "app warnHandler",
	12: "ref function",
	13: "async component loader",
	14: "scheduler flush",
	15: "component update",
	16: "app unmount cleanup function"
};
function Nn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		Fn(e, t, n);
	}
}
function Pn(e, t, n, r) {
	if (h(e)) {
		let i = Nn(e, t, n, r);
		return i && y(i) && i.catch((e) => {
			Fn(e, t, n);
		}), i;
	}
	if (d(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(Pn(e[a], t, n, r));
		return i;
	} else process.env.NODE_ENV !== "production" && R(`Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`);
}
function Fn(e, n, r, i = !0) {
	let a = n ? n.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = n && n.appContext.config || t;
	if (n) {
		let t = n.parent, i = n.proxy, a = process.env.NODE_ENV === "production" ? `https://vuejs.org/error-reference/#runtime-${r}` : Mn[r];
		for (; t;) {
			let n = t.ec;
			if (n) {
				for (let t = 0; t < n.length; t++) if (n[t](e, i, a) === !1) return;
			}
			t = t.parent;
		}
		if (o) {
			Qe(), Nn(o, null, 10, [
				e,
				i,
				a
			]), $e();
			return;
		}
	}
	In(e, r, a, i, s);
}
function In(e, t, n, r = !0, i = !1) {
	if (process.env.NODE_ENV !== "production") {
		let i = Mn[t];
		if (n && wn(n), R(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && Tn(), r) throw e;
		console.error(e);
	} else if (i) throw e;
	else console.error(e);
}
var Ln = [], Rn = -1, zn = [], Bn = null, Vn = 0, Hn = /* @__PURE__ */ Promise.resolve(), Un = null, Wn = 100;
function Gn(e) {
	let t = Un || Hn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function Kn(e) {
	let t = Rn + 1, n = Ln.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = Ln[r], a = Qn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function qn(e) {
	if (!(e.flags & 1)) {
		let t = Qn(e), n = Ln[Ln.length - 1];
		!n || !(e.flags & 2) && t >= Qn(n) ? Ln.push(e) : Ln.splice(Kn(t), 0, e), e.flags |= 1, Jn();
	}
}
function Jn() {
	Un ||= Hn.then($n);
}
function Yn(e) {
	d(e) ? zn.push(...e) : Bn && e.id === -1 ? Bn.splice(Vn + 1, 0, e) : e.flags & 1 || (zn.push(e), e.flags |= 1), Jn();
}
function Xn(e, t, n = Rn + 1) {
	for (process.env.NODE_ENV !== "production" && (t ||= /* @__PURE__ */ new Map()); n < Ln.length; n++) {
		let r = Ln[n];
		if (r && r.flags & 2) {
			if (e && r.id !== e.uid || process.env.NODE_ENV !== "production" && er(t, r)) continue;
			Ln.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
		}
	}
}
function Zn(e) {
	if (zn.length) {
		let t = [...new Set(zn)].sort((e, t) => Qn(e) - Qn(t));
		if (zn.length = 0, Bn) {
			Bn.push(...t);
			return;
		}
		for (Bn = t, process.env.NODE_ENV !== "production" && (e ||= /* @__PURE__ */ new Map()), Vn = 0; Vn < Bn.length; Vn++) {
			let t = Bn[Vn];
			process.env.NODE_ENV !== "production" && er(e, t) || (t.flags & 4 && (t.flags &= -2), t.flags & 8 || t(), t.flags &= -2);
		}
		Bn = null, Vn = 0;
	}
}
var Qn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function $n(e) {
	process.env.NODE_ENV !== "production" && (e ||= /* @__PURE__ */ new Map());
	let t = process.env.NODE_ENV === "production" ? r : (t) => er(e, t);
	try {
		for (Rn = 0; Rn < Ln.length; Rn++) {
			let e = Ln[Rn];
			if (e && !(e.flags & 8)) {
				if (process.env.NODE_ENV !== "production" && t(e)) continue;
				e.flags & 4 && (e.flags &= -2), Nn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2);
			}
		}
	} finally {
		for (; Rn < Ln.length; Rn++) {
			let e = Ln[Rn];
			e && (e.flags &= -2);
		}
		Rn = -1, Ln.length = 0, Zn(e), Un = null, (Ln.length || zn.length) && $n(e);
	}
}
function er(e, t) {
	let n = e.get(t) || 0;
	if (n > Wn) {
		let e = t.i, n = e && ss(e.type);
		return Fn(`Maximum recursive updates exceeded${n ? ` in component <${n}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`, null, 10), !0;
	}
	return e.set(t, n + 1), !1;
}
var tr = !1, nr = (e) => {
	try {
		return tr;
	} finally {
		tr = e;
	}
}, rr = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (ue().__VUE_HMR_RUNTIME__ = {
	createRecord: fr(sr),
	rerender: fr(lr),
	reload: fr(ur)
});
var ir = /* @__PURE__ */ new Map();
function ar(e) {
	let t = e.type.__hmrId, n = ir.get(t);
	n ||= (sr(t, e.type), ir.get(t)), n.instances.add(e);
}
function or(e) {
	ir.get(e.type.__hmrId).instances.delete(e);
}
function sr(e, t) {
	return ir.has(e) ? !1 : (ir.set(e, {
		initialDef: cr(t),
		instances: /* @__PURE__ */ new Set()
	}), !0);
}
function cr(e) {
	return ls(e) ? e.__vccOpts : e;
}
function lr(e, t) {
	let n = ir.get(e);
	n && (n.initialDef.render = t, [...n.instances].forEach((e) => {
		t && (e.render = t, cr(e.type).render = t), e.renderCache = [], tr = !0, e.job.flags & 8 || e.update(), tr = !1;
	}));
}
function ur(e, t) {
	let n = ir.get(e);
	if (!n) return;
	t = cr(t), dr(n.initialDef, t);
	let r = [...n.instances];
	for (let e = 0; e < r.length; e++) {
		let i = r[e], a = cr(i.type), o = rr.get(a);
		o || (a !== n.initialDef && dr(a, t), rr.set(a, o = /* @__PURE__ */ new Set())), o.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (o.add(i), i.ceReload(t.styles), o.delete(i)) : i.parent ? qn(() => {
			i.job.flags & 8 || (tr = !0, i.parent.update(), tr = !1, o.delete(i));
		}) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required."), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(a);
	}
	Yn(() => {
		rr.clear();
	});
}
function dr(e, t) {
	s(e, t);
	for (let n in e) n !== "__file" && !(n in t) && delete e[n];
}
function fr(e) {
	return (t, n) => {
		try {
			return e(t, n);
		} catch (e) {
			console.error(e), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
		}
	};
}
var pr, mr = [], hr = !1;
function gr(e, ...t) {
	pr ? pr.emit(e, ...t) : hr || mr.push({
		event: e,
		args: t
	});
}
function _r(e, t) {
	pr = e, pr ? (pr.enabled = !0, mr.forEach(({ event: e, args: t }) => pr.emit(e, ...t)), mr = []) : typeof window < "u" && window.HTMLElement && !(window.navigator?.userAgent)?.includes("jsdom") ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((e) => {
		_r(e, t);
	}), setTimeout(() => {
		pr || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, hr = !0, mr = []);
	}, 3e3)) : (hr = !0, mr = []);
}
function vr(e, t) {
	gr("app:init", e, t, {
		Fragment: z,
		Text: co,
		Comment: lo,
		Static: uo
	});
}
function yr(e) {
	gr("app:unmount", e);
}
var br = /* @__PURE__ */ wr("component:added"), xr = /* @__PURE__ */ wr("component:updated"), Sr = /* @__PURE__ */ wr("component:removed"), Cr = (e) => {
	pr && typeof pr.cleanupBuffer == "function" && !pr.cleanupBuffer(e) && Sr(e);
};
// @__NO_SIDE_EFFECTS__
function wr(e) {
	return (t) => {
		gr(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
	};
}
var Tr = /* @__PURE__ */ Dr("perf:start"), Er = /* @__PURE__ */ Dr("perf:end");
function Dr(e) {
	return (t, n, r) => {
		gr(e, t.appContext.app, t.uid, t, n, r);
	};
}
function Or(e, t, n) {
	gr("component:emit", e.appContext.app, e, t, n);
}
var kr = null, Ar = null;
function jr(e) {
	let t = kr;
	return kr = e, Ar = e && e.type.__scopeId || null, t;
}
function Mr(e, t = kr, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && go(-1);
		let i = jr(t), a;
		try {
			a = e(...n);
		} finally {
			jr(i), r._d && go(1);
		}
		return process.env.NODE_ENV !== "production" && xr(t), a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function Nr(e) {
	te(e) && R("Do not use built-in directive ids as custom directive id: " + e);
}
function Pr(e, n) {
	if (kr === null) return process.env.NODE_ENV !== "production" && R("withDirectives can only be used inside render functions."), e;
	let r = is(kr), i = e.dirs ||= [];
	for (let e = 0; e < n.length; e++) {
		let [a, o, s, c = t] = n[e];
		a && (h(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && Sn(o), i.push({
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
function Fr(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (Qe(), Pn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), $e());
	}
}
function Ir(e, t) {
	if (process.env.NODE_ENV !== "production" && (!W || W.isMounted) && R("provide() can only be used inside setup()."), W) {
		let n = W.provides, r = W.parent && W.parent.provides;
		r === n && (n = W.provides = Object.create(r)), n[e] = t;
	}
}
function Lr(e, t, n = !1) {
	let r = zo();
	if (r || Zi) {
		let i = Zi ? Zi._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && h(t) ? t.call(r && r.proxy) : t;
		process.env.NODE_ENV !== "production" && R(`injection "${String(e)}" not found.`);
	} else process.env.NODE_ENV !== "production" && R("inject() can only be used inside setup() or functional components.");
}
function Rr() {
	return !!(zo() || Zi);
}
var zr = /* @__PURE__ */ Symbol.for("v-scx"), Br = () => {
	{
		let e = Lr(zr);
		return e || process.env.NODE_ENV !== "production" && R("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
	}
};
function Vr(e, t, n) {
	return process.env.NODE_ENV !== "production" && !h(t) && R("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), Hr(e, t, n);
}
function Hr(e, n, i = t) {
	let { immediate: a, deep: o, flush: c, once: l } = i;
	process.env.NODE_ENV !== "production" && !n && (a !== void 0 && R("watch() \"immediate\" option is only respected when using the watch(source, callback, options?) signature."), o !== void 0 && R("watch() \"deep\" option is only respected when using the watch(source, callback, options?) signature."), l !== void 0 && R("watch() \"once\" option is only respected when using the watch(source, callback, options?) signature."));
	let u = s({}, i);
	process.env.NODE_ENV !== "production" && (u.onWarn = R);
	let d = n && a || !n && c !== "post", f;
	if (qo) {
		if (c === "sync") {
			let e = Br();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = r, e.resume = r, e.pause = r, e;
		}
	}
	let p = W;
	u.call = (e, t, n) => Pn(e, p, t, n);
	let m = !1;
	c === "post" ? u.scheduler = (e) => {
		Ya(e, p && p.suspense);
	} : c !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : qn(e);
	}), u.augmentJob = (e) => {
		n && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = xn(e, n, u);
	return qo && (f ? f.push(h) : d && h()), h;
}
function Ur(e, t, n) {
	let r = this.proxy, i = g(e) ? e.includes(".") ? Wr(r, e) : () => r[e] : e.bind(r, r), a;
	h(t) ? a = t : (a = t.handler, n = t);
	let o = Ho(this), s = Hr(i, a.bind(r), n);
	return o(), s;
}
function Wr(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Gr = /* @__PURE__ */ Symbol("_vte"), Kr = (e) => e.__isTeleport, qr = /* @__PURE__ */ Symbol("_leaveCb");
function Jr(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, Jr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Yr(e, t) {
	return h(e) ? /* @__PURE__ */ s({ name: e.name }, t, { setup: e }) : e;
}
function Xr(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
var Zr = /* @__PURE__ */ new WeakSet();
function Qr(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var $r = /* @__PURE__ */ new WeakMap();
function ei(e, n, r, a, o = !1) {
	if (d(e)) {
		e.forEach((e, t) => ei(e, n && (d(n) ? n[t] : n), r, a, o));
		return;
	}
	if (ni(a) && !o) {
		a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && ei(e, n, r, a.component.subTree);
		return;
	}
	let s = a.shapeFlag & 4 ? is(a.component) : a.el, l = o ? null : s, { i: f, r: p } = e;
	if (process.env.NODE_ENV !== "production" && !f) {
		R("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
		return;
	}
	let m = n && n.r, _ = f.refs === t ? f.refs = {} : f.refs, v = f.setupState, y = /* @__PURE__ */ P(v), b = v === t ? i : (e) => process.env.NODE_ENV !== "production" && (u(y, e) && !/* @__PURE__ */ F(y[e]) && R(`Template ref "${e}" used on a non-ref value. It will not work in the production build.`), Zr.has(y[e])) || Qr(_, e) ? !1 : u(y, e), x = (e, t) => !(process.env.NODE_ENV !== "production" && Zr.has(e) || t && Qr(_, t));
	if (m != null && m !== p) {
		if (ti(n), g(m)) _[m] = null, b(m) && (v[m] = null);
		else if (/* @__PURE__ */ F(m)) {
			let e = n;
			x(m, e.k) && (m.value = null), e.k && (_[e.k] = null);
		}
	}
	if (h(p)) Nn(p, f, 12, [l, _]);
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
				} else t ? (_[p] = l, b(p) && (v[p] = l)) : n ? (x(p, e.k) && (p.value = l), e.k && (_[e.k] = l)) : process.env.NODE_ENV !== "production" && R("Invalid template ref type:", p, `(${typeof p})`);
			};
			if (l) {
				let t = () => {
					i(), $r.delete(e);
				};
				t.id = -1, $r.set(e, t), Ya(t, r);
			} else ti(e), i();
		} else process.env.NODE_ENV !== "production" && R("Invalid template ref type:", p, `(${typeof p})`);
	}
}
function ti(e) {
	let t = $r.get(e);
	t && (t.flags |= 8, $r.delete(e));
}
ue().requestIdleCallback, ue().cancelIdleCallback;
var ni = (e) => !!e.type.__asyncLoader, ri = (e) => e.type.__isKeepAlive;
function ii(e, t) {
	oi(e, "a", t);
}
function ai(e, t) {
	oi(e, "da", t);
}
function oi(e, t, n = W) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (ci(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) ri(e.parent.vnode) && si(r, t, n, e), e = e.parent;
	}
}
function si(e, t, n, r) {
	let i = ci(t, e, r, !0);
	gi(() => {
		c(r[t], i);
	}, n);
}
function ci(e, t, n = W, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Qe();
			let i = Ho(n), a = Pn(t, n, e, r);
			return i(), $e(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	} else process.env.NODE_ENV !== "production" && R(`${ae(Mn[e].replace(/ hook$/, ""))} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
}
var li = (e) => (t, n = W) => {
	(!qo || e === "sp") && ci(e, (...e) => t(...e), n);
}, di = li("bm"), fi = li("m"), pi = li("bu"), mi = li("u"), hi = li("bum"), gi = li("um"), _i = li("sp"), vi = li("rtg"), yi = li("rtc");
function bi(e, t = W) {
	ci("ec", e, t);
}
var xi = /* @__PURE__ */ Symbol.for("v-ndc");
function Si(e, t, n, r) {
	let i, a = n && n[r], o = d(e);
	if (o || g(e)) {
		let n = o && /* @__PURE__ */ Qt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ N(e), s = /* @__PURE__ */ $t(e), e = ft(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? rn(nn(e[n])) : nn(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") if (process.env.NODE_ENV !== "production" && (!Number.isInteger(e) || e < 0)) R(`The v-for range expects a positive integer value but got ${e}.`), i = [];
	else {
		i = Array(e);
		for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
	}
	else if (v(e)) if (e[Symbol.iterator]) i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
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
var Ci = (e) => e ? Ko(e) ? is(e) : Ci(e.parent) : null, wi = /* @__PURE__ */ s(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => process.env.NODE_ENV === "production" ? e.props : /* @__PURE__ */ Xt(e.props),
	$attrs: (e) => process.env.NODE_ENV === "production" ? e.attrs : /* @__PURE__ */ Xt(e.attrs),
	$slots: (e) => process.env.NODE_ENV === "production" ? e.slots : /* @__PURE__ */ Xt(e.slots),
	$refs: (e) => process.env.NODE_ENV === "production" ? e.refs : /* @__PURE__ */ Xt(e.refs),
	$parent: (e) => Ci(e.parent),
	$root: (e) => Ci(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Ri(e),
	$forceUpdate: (e) => e.f ||= () => {
		qn(e.update);
	},
	$nextTick: (e) => e.n ||= Gn.bind(e.proxy),
	$watch: (e) => Ur.bind(e)
}), Ti = (e) => e === "_" || e === "$", Ei = (e, n) => e !== t && !e.__isScriptSetup && u(e, n), Di = {
	get({ _: e }, n) {
		if (n === "__v_skip") return !0;
		let { ctx: r, setupState: i, data: a, props: o, accessCache: s, type: c, appContext: l } = e;
		if (process.env.NODE_ENV !== "production" && n === "__isVue") return !0;
		if (n[0] !== "$") {
			let e = s[n];
			if (e !== void 0) switch (e) {
				case 1: return i[n];
				case 2: return a[n];
				case 4: return r[n];
				case 3: return o[n];
			}
			else if (Ei(i, n)) return s[n] = 1, i[n];
			else if (a !== t && u(a, n)) return s[n] = 2, a[n];
			else if (u(o, n)) return s[n] = 3, o[n];
			else if (r !== t && u(r, n)) return s[n] = 4, r[n];
			else Ni && (s[n] = 0);
		}
		let d = wi[n], f, p;
		if (d) return n === "$attrs" ? (M(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && ia()) : process.env.NODE_ENV !== "production" && n === "$slots" && M(e, "get", n), d(e);
		if ((f = c.__cssModules) && (f = f[n])) return f;
		if (r !== t && u(r, n)) return s[n] = 4, r[n];
		if (p = l.config.globalProperties, u(p, n)) return p[n];
		process.env.NODE_ENV !== "production" && kr && (!g(n) || n.indexOf("__v") !== 0) && (a !== t && Ti(n[0]) && u(a, n) ? R(`Property ${JSON.stringify(n)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === kr && R(`Property ${JSON.stringify(n)} was accessed during render but is not defined on instance.`));
	},
	set({ _: e }, n, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return Ei(a, n) ? (a[n] = r, !0) : process.env.NODE_ENV !== "production" && a.__isScriptSetup && u(a, n) ? (R(`Cannot mutate <script setup> binding "${n}" from Options API.`), !1) : i !== t && u(i, n) ? (i[n] = r, !0) : u(e.props, n) ? (process.env.NODE_ENV !== "production" && R(`Attempting to mutate prop "${n}". Props are readonly.`), !1) : n[0] === "$" && n.slice(1) in e ? (process.env.NODE_ENV !== "production" && R(`Attempting to mutate public property "${n}". Properties starting with $ are reserved and readonly.`), !1) : (process.env.NODE_ENV !== "production" && n in e.appContext.config.globalProperties ? Object.defineProperty(o, n, {
			enumerable: !0,
			configurable: !0,
			value: r
		}) : o[n] = r, !0);
	},
	has({ _: { data: e, setupState: n, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== t && c[0] !== "$" && u(e, c) || Ei(n, c) || u(o, c) || u(i, c) || u(wi, c) || u(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? u(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
process.env.NODE_ENV !== "production" && (Di.ownKeys = (e) => (R("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function Oi(e) {
	let t = {};
	return Object.defineProperty(t, "_", {
		configurable: !0,
		enumerable: !1,
		get: () => e
	}), Object.keys(wi).forEach((n) => {
		Object.defineProperty(t, n, {
			configurable: !0,
			enumerable: !1,
			get: () => wi[n](e),
			set: r
		});
	}), t;
}
function ki(e) {
	let { ctx: t, propsOptions: [n] } = e;
	n && Object.keys(n).forEach((n) => {
		Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => e.props[n],
			set: r
		});
	});
}
function Ai(e) {
	let { ctx: t, setupState: n } = e;
	Object.keys(/* @__PURE__ */ P(n)).forEach((e) => {
		if (!n.__isScriptSetup) {
			if (Ti(e[0])) {
				R(`setup() return property ${JSON.stringify(e)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
				return;
			}
			Object.defineProperty(t, e, {
				enumerable: !0,
				configurable: !0,
				get: () => n[e],
				set: r
			});
		}
	});
}
function ji(e) {
	return d(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
function Mi() {
	let e = /* @__PURE__ */ Object.create(null);
	return (t, n) => {
		e[n] ? R(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
	};
}
var Ni = !0;
function Pi(e) {
	let t = Ri(e), n = e.proxy, i = e.ctx;
	Ni = !1, t.beforeCreate && Ii(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: f, beforeMount: p, mounted: m, beforeUpdate: g, updated: _, activated: b, deactivated: x, beforeDestroy: S, beforeUnmount: C, destroyed: w, unmounted: ee, render: te, renderTracked: T, renderTriggered: ne, errorCaptured: E, serverPrefetch: re, expose: D, inheritAttrs: ie, components: ae, directives: oe, filters: se } = t, ce = process.env.NODE_ENV === "production" ? null : Mi();
	if (process.env.NODE_ENV !== "production") {
		let [t] = e.propsOptions;
		if (t) for (let e in t) ce("Props", e);
	}
	if (u && Fi(u, i, ce), s) for (let e in s) {
		let t = s[e];
		h(t) ? (process.env.NODE_ENV === "production" ? i[e] = t.bind(n) : Object.defineProperty(i, e, {
			value: t.bind(n),
			configurable: !0,
			enumerable: !0,
			writable: !0
		}), process.env.NODE_ENV !== "production" && ce("Methods", e)) : process.env.NODE_ENV !== "production" && R(`Method "${e}" has type "${typeof t}" in the component definition. Did you reference the function correctly?`);
	}
	if (a) {
		process.env.NODE_ENV !== "production" && !h(a) && R("The data option must be a function. Plain object usage is no longer supported.");
		let t = a.call(n, n);
		if (process.env.NODE_ENV !== "production" && y(t) && R("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !v(t)) process.env.NODE_ENV !== "production" && R("data() should return an object.");
		else if (e.data = /* @__PURE__ */ qt(t), process.env.NODE_ENV !== "production") for (let e in t) ce("Data", e), Ti(e[0]) || Object.defineProperty(i, e, {
			configurable: !0,
			enumerable: !0,
			get: () => t[e],
			set: r
		});
	}
	if (Ni = !0, o) for (let e in o) {
		let t = o[e], a = h(t) ? t.bind(n, n) : h(t.get) ? t.get.bind(n, n) : r;
		process.env.NODE_ENV !== "production" && a === r && R(`Computed property "${e}" has no getter.`);
		let s = G({
			get: a,
			set: !h(t) && h(t.set) ? t.set.bind(n) : process.env.NODE_ENV === "production" ? r : () => {
				R(`Write operation failed: computed property "${e}" is readonly.`);
			}
		});
		Object.defineProperty(i, e, {
			enumerable: !0,
			configurable: !0,
			get: () => s.value,
			set: (e) => s.value = e
		}), process.env.NODE_ENV !== "production" && ce("Computed", e);
	}
	if (c) for (let e in c) Li(c[e], i, n, e);
	if (l) {
		let e = h(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Ir(t, e[t]);
		});
	}
	f && Ii(f, e, "c");
	function O(e, t) {
		d(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (O(di, p), O(fi, m), O(pi, g), O(mi, _), O(ii, b), O(ai, x), O(bi, E), O(yi, T), O(vi, ne), O(hi, C), O(gi, ee), O(_i, re), d(D)) if (D.length) {
		let t = e.exposed ||= {};
		D.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	te && e.render === r && (e.render = te), ie != null && (e.inheritAttrs = ie), ae && (e.components = ae), oe && (e.directives = oe), re && Xr(e);
}
function Fi(e, t, n = r) {
	d(e) && (e = Ui(e));
	for (let r in e) {
		let i = e[r], a;
		a = v(i) ? "default" in i ? Lr(i.from || r, i.default, !0) : Lr(i.from || r) : Lr(i), /* @__PURE__ */ F(a) ? Object.defineProperty(t, r, {
			enumerable: !0,
			configurable: !0,
			get: () => a.value,
			set: (e) => a.value = e
		}) : t[r] = a, process.env.NODE_ENV !== "production" && n("Inject", r);
	}
}
function Ii(e, t, n) {
	Pn(d(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Li(e, t, n, r) {
	let i = r.includes(".") ? Wr(n, r) : () => n[r];
	if (g(e)) {
		let n = t[e];
		h(n) ? Vr(i, n) : process.env.NODE_ENV !== "production" && R(`Invalid watch handler specified by key "${e}"`, n);
	} else if (h(e)) Vr(i, e.bind(n));
	else if (v(e)) if (d(e)) e.forEach((e) => Li(e, t, n, r));
	else {
		let r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
		h(r) ? Vr(i, r, e) : process.env.NODE_ENV !== "production" && R(`Invalid watch handler specified by key "${e.handler}"`, r);
	}
	else process.env.NODE_ENV !== "production" && R(`Invalid watch option: "${r}"`, e);
}
function Ri(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => zi(c, e, o, !0)), zi(c, t, o)), v(t) && a.set(t, c), c;
}
function zi(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && zi(e, a, n, !0), i && i.forEach((t) => zi(e, t, n, !0));
	for (let i in t) if (r && i === "expose") process.env.NODE_ENV !== "production" && R("\"expose\" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.");
	else {
		let r = Bi[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Bi = {
	data: Vi,
	props: Ki,
	emits: Ki,
	methods: Gi,
	computed: Gi,
	beforeCreate: Wi,
	created: Wi,
	beforeMount: Wi,
	mounted: Wi,
	beforeUpdate: Wi,
	updated: Wi,
	beforeDestroy: Wi,
	beforeUnmount: Wi,
	destroyed: Wi,
	unmounted: Wi,
	activated: Wi,
	deactivated: Wi,
	errorCaptured: Wi,
	serverPrefetch: Wi,
	components: Gi,
	directives: Gi,
	watch: qi,
	provide: Vi,
	inject: Hi
};
function Vi(e, t) {
	return t ? e ? function() {
		return s(h(e) ? e.call(this, this) : e, h(t) ? t.call(this, this) : t);
	} : t : e;
}
function Hi(e, t) {
	return Gi(Ui(e), Ui(t));
}
function Ui(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function Wi(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Gi(e, t) {
	return e ? s(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ki(e, t) {
	return e ? d(e) && d(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : s(/* @__PURE__ */ Object.create(null), ji(e), ji(t ?? {})) : t;
}
function qi(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = s(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = Wi(e[r], t[r]);
	return n;
}
function Ji() {
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
var Yi = 0;
function Xi(e, t) {
	return function(n, r = null) {
		h(n) || (n = s({}, n)), r != null && !v(r) && (process.env.NODE_ENV !== "production" && R("root props passed to app.mount() must be an object."), r = null);
		let i = Ji(), a = /* @__PURE__ */ new WeakSet(), o = [], c = !1, l = i.app = {
			_uid: Yi++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: ds,
			get config() {
				return i.config;
			},
			set config(e) {
				process.env.NODE_ENV !== "production" && R("app.config cannot be replaced. Modify individual options instead.");
			},
			use(e, ...t) {
				return a.has(e) ? process.env.NODE_ENV !== "production" && R("Plugin has already been applied to target app.") : e && h(e.install) ? (a.add(e), e.install(l, ...t)) : h(e) ? (a.add(e), e(l, ...t)) : process.env.NODE_ENV !== "production" && R("A plugin must either be a function or an object with an \"install\" function."), l;
			},
			mixin(e) {
				return i.mixins.includes(e) ? process.env.NODE_ENV !== "production" && R("Mixin has already been applied to target app" + (e.name ? `: ${e.name}` : "")) : i.mixins.push(e), l;
			},
			component(e, t) {
				return process.env.NODE_ENV !== "production" && Go(e, i.config), t ? (process.env.NODE_ENV !== "production" && i.components[e] && R(`Component "${e}" has already been registered in target app.`), i.components[e] = t, l) : i.components[e];
			},
			directive(e, t) {
				return process.env.NODE_ENV !== "production" && Nr(e), t ? (process.env.NODE_ENV !== "production" && i.directives[e] && R(`Directive "${e}" has already been registered in target app.`), i.directives[e] = t, l) : i.directives[e];
			},
			mount(a, o, s) {
				if (c) process.env.NODE_ENV !== "production" && R("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
				else {
					process.env.NODE_ENV !== "production" && a.__vue_app__ && R("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
					let u = l._ceVNode || To(n, r);
					return u.appContext = i, s === !0 ? s = "svg" : s === !1 && (s = void 0), process.env.NODE_ENV !== "production" && (i.reload = () => {
						let t = Oo(u);
						t.el = null, e(t, a, s);
					}), o && t ? t(u, a) : e(u, a, s), c = !0, l._container = a, a.__vue_app__ = l, process.env.NODE_ENV !== "production" && (l._instance = u.component, vr(l, ds)), is(u.component);
				}
			},
			onUnmount(e) {
				process.env.NODE_ENV !== "production" && typeof e != "function" && R(`Expected function as first argument to app.onUnmount(), but got ${typeof e}`), o.push(e);
			},
			unmount() {
				c ? (Pn(o, l._instance, 16), e(null, l._container), process.env.NODE_ENV !== "production" && (l._instance = null, yr(l)), delete l._container.__vue_app__) : process.env.NODE_ENV !== "production" && R("Cannot unmount an app that is not mounted.");
			},
			provide(e, t) {
				return process.env.NODE_ENV !== "production" && e in i.provides && (u(i.provides, e) ? R(`App already provides property with key "${String(e)}". It will be overwritten with the new value.`) : R(`App already provides property with key "${String(e)}" inherited from its parent element. It will be overwritten with the new value.`)), i.provides[e] = t, l;
			},
			runWithContext(e) {
				let t = Zi;
				Zi = l;
				try {
					return e();
				} finally {
					Zi = t;
				}
			}
		};
		return l;
	};
}
var Zi = null, Qi = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${E(t)}Modifiers`] || e[`${D(t)}Modifiers`];
function $i(e, n, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || t;
	if (process.env.NODE_ENV !== "production") {
		let { emitsOptions: t, propsOptions: [i] } = e;
		if (t) if (!(n in t)) (!i || !(ae(E(n)) in i)) && R(`Component emitted event "${n}" but it is neither declared in the emits option nor as an "${ae(E(n))}" prop.`);
		else {
			let e = t[n];
			h(e) && (e(...r) || R(`Invalid event arguments: event validation failed for event "${n}".`));
		}
	}
	let a = r, o = n.startsWith("update:"), s = o && Qi(i, n.slice(7));
	if (s && (s.trim && (a = r.map((e) => g(e) ? e.trim() : e)), s.number && (a = r.map(O))), process.env.NODE_ENV !== "production" && Or(e, n, a), process.env.NODE_ENV !== "production") {
		let t = n.toLowerCase();
		t !== n && i[ae(t)] && R(`Event "${t}" is emitted in component ${cs(e, e.type)} but the handler is registered for "${n}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${D(n)}" instead of "${n}".`);
	}
	let c, l = i[c = ae(n)] || i[c = ae(E(n))];
	!l && o && (l = i[c = ae(D(n))]), l && Pn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, Pn(u, e, 6, a);
	}
}
var ea = /* @__PURE__ */ new WeakMap();
function ta(e, t, n = !1) {
	let r = n ? ea : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, c = !1;
	if (!h(e)) {
		let r = (e) => {
			let n = ta(e, t, !0);
			n && (c = !0, s(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !c ? (v(e) && r.set(e, null), null) : (d(a) ? a.forEach((e) => o[e] = null) : s(o, a), v(e) && r.set(e, o), o);
}
function na(e, t) {
	return !e || !a(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), u(e, t[0].toLowerCase() + t.slice(1)) || u(e, D(t)) || u(e, t));
}
var ra = !1;
function ia() {
	ra = !0;
}
function aa(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [s], slots: c, attrs: l, emit: u, render: d, renderCache: f, props: p, data: m, setupState: h, ctx: g, inheritAttrs: _ } = e, v = jr(e), y, b;
	process.env.NODE_ENV !== "production" && (ra = !1);
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = process.env.NODE_ENV !== "production" && h.__isScriptSetup ? new Proxy(e, { get(e, t, n) {
				return R(`Property '${String(t)}' was accessed via 'this'. Avoid using 'this' in templates.`), Reflect.get(e, t, n);
			} }) : e;
			y = jo(d.call(t, e, f, process.env.NODE_ENV === "production" ? p : /* @__PURE__ */ Xt(p), h, m, g)), b = l;
		} else {
			let e = t;
			process.env.NODE_ENV !== "production" && l === p && ia(), y = jo(e.length > 1 ? e(process.env.NODE_ENV === "production" ? p : /* @__PURE__ */ Xt(p), process.env.NODE_ENV === "production" ? {
				attrs: l,
				slots: c,
				emit: u
			} : {
				get attrs() {
					return ia(), /* @__PURE__ */ Xt(l);
				},
				slots: c,
				emit: u
			}) : e(process.env.NODE_ENV === "production" ? p : /* @__PURE__ */ Xt(p), null)), b = t.props ? l : ca(l);
		}
	} catch (t) {
		fo.length = 0, Fn(t, e, 1), y = To(lo);
	}
	let x = y, S;
	if (process.env.NODE_ENV !== "production" && y.patchFlag > 0 && y.patchFlag & 2048 && ([x, S] = oa(y)), b && _ !== !1) {
		let e = Object.keys(b), { shapeFlag: t } = x;
		if (e.length) {
			if (t & 7) s && e.some(o) && (b = la(b, s)), x = Oo(x, b, !1, !0);
			else if (process.env.NODE_ENV !== "production" && !ra && x.type !== lo) {
				let e = Object.keys(l), t = [], n = [];
				for (let r = 0, i = e.length; r < i; r++) {
					let i = e[r];
					a(i) ? o(i) || t.push(i[2].toLowerCase() + i.slice(3)) : n.push(i);
				}
				n.length && R(`Extraneous non-props attributes (${n.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`), t.length && R(`Extraneous non-emits event listeners (${t.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
			}
		}
	}
	return n.dirs && (process.env.NODE_ENV !== "production" && !ua(x) && R("Runtime directive used on component with non-element root node. The directives will not function as intended."), x = Oo(x, null, !1, !0), x.dirs = x.dirs ? x.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !ua(x) && R("Component inside <Transition> renders non-element root node that cannot be animated."), Jr(x, n.transition)), process.env.NODE_ENV !== "production" && S ? S(x) : y = x, jr(v), y;
}
var oa = (e) => {
	let t = e.children, n = e.dynamicChildren, r = sa(t, !1);
	if (!r) return [e, void 0];
	if (process.env.NODE_ENV !== "production" && r.patchFlag > 0 && r.patchFlag & 2048) return oa(r);
	let i = t.indexOf(r), a = n ? n.indexOf(r) : -1;
	return [jo(r), (r) => {
		t[i] = r, n && (a > -1 ? n[a] = r : r.patchFlag > 0 && (e.dynamicChildren = [...n, r]));
	}];
};
function sa(e, t = !0) {
	let n;
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		if (yo(i)) {
			if (i.type !== lo || i.children === "v-if") {
				if (n) return;
				if (n = i, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048) return sa(n.children);
			}
		} else return;
	}
	return n;
}
var ca = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || a(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, la = (e, t) => {
	let n = {};
	for (let r in e) (!o(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
}, ua = (e) => e.shapeFlag & 7 || e.type === lo;
function da(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (process.env.NODE_ENV !== "production" && (i || s) && tr || t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? fa(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (pa(o, r, n) && !na(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? fa(r, o, l) : !0 : !!o;
	return !1;
}
function fa(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (pa(t, e, a) && !na(n, a)) return !0;
	}
	return !1;
}
function pa(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && v(r) && v(i) ? !De(r, i) : r !== i;
}
function ma({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var ha = {}, ga = () => Object.create(ha), _a = (e) => Object.getPrototypeOf(e) === ha;
function va(e, t, n, r = !1) {
	let i = {}, a = ga();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), xa(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	process.env.NODE_ENV !== "production" && Da(t || {}, i, e), n ? e.props = r ? i : /* @__PURE__ */ Jt(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function ya(e) {
	for (; e;) {
		if (e.type.__hmrId) return !0;
		e = e.parent;
	}
}
function ba(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ P(i), [c] = e.propsOptions, l = !1;
	if (!(process.env.NODE_ENV !== "production" && ya(e)) && (r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (na(e.emitsOptions, o)) continue;
				let d = t[o];
				if (c) if (u(a, o)) d !== a[o] && (a[o] = d, l = !0);
				else {
					let t = E(o);
					i[t] = Sa(c, s, t, d, e, !1);
				}
				else d !== a[o] && (a[o] = d, l = !0);
			}
		}
	} else {
		xa(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !u(t, a) && ((r = D(a)) === a || !u(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Sa(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !u(t, e)) && (delete a[e], l = !0);
	}
	l && lt(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && Da(t || {}, i, e);
}
function xa(e, n, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (n) for (let t in n) {
		if (ee(t)) continue;
		let l = n[t], d;
		a && u(a, d = E(t)) ? !o || !o.includes(d) ? r[d] = l : (c ||= {})[d] = l : na(e.emitsOptions, t) || (!(t in i) || l !== i[t]) && (i[t] = l, s = !0);
	}
	if (o) {
		let n = /* @__PURE__ */ P(r), i = c || t;
		for (let t = 0; t < o.length; t++) {
			let s = o[t];
			r[s] = Sa(a, n, s, i[s], e, !u(i, s));
		}
	}
	return s;
}
function Sa(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = u(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && h(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = Ho(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === D(n)) && (r = !0));
	}
	return r;
}
var Ca = /* @__PURE__ */ new WeakMap();
function wa(e, r, i = !1) {
	let a = i ? Ca : r.propsCache, o = a.get(e);
	if (o) return o;
	let c = e.props, l = {}, f = [], p = !1;
	if (!h(e)) {
		let t = (e) => {
			p = !0;
			let [t, n] = wa(e, r, !0);
			s(l, t), n && f.push(...n);
		};
		!i && r.mixins.length && r.mixins.forEach(t), e.extends && t(e.extends), e.mixins && e.mixins.forEach(t);
	}
	if (!c && !p) return v(e) && a.set(e, n), n;
	if (d(c)) for (let e = 0; e < c.length; e++) {
		process.env.NODE_ENV !== "production" && !g(c[e]) && R("props must be strings when using array syntax.", c[e]);
		let n = E(c[e]);
		Ta(n) && (l[n] = t);
	}
	else if (c) {
		process.env.NODE_ENV !== "production" && !v(c) && R("invalid props options", c);
		for (let e in c) {
			let t = E(e);
			if (Ta(t)) {
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
	}
	let m = [l, f];
	return v(e) && a.set(e, m), m;
}
function Ta(e) {
	return e[0] !== "$" && !ee(e) ? !0 : (process.env.NODE_ENV !== "production" && R(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Ea(e) {
	return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Da(e, t, n) {
	let r = /* @__PURE__ */ P(t), i = n.propsOptions[0], a = Object.keys(e).map((e) => E(e));
	for (let e in i) {
		let t = i[e];
		t != null && Oa(e, r[e], t, process.env.NODE_ENV === "production" ? r : /* @__PURE__ */ Xt(r), !a.includes(e));
	}
}
function Oa(e, t, n, r, i) {
	let { type: a, required: o, validator: s, skipCheck: c } = n;
	if (o && i) {
		R("Missing required prop: \"" + e + "\"");
		return;
	}
	if (!(t == null && !o)) {
		if (a != null && a !== !0 && !c) {
			let n = !1, r = d(a) ? a : [a], i = [];
			for (let e = 0; e < r.length && !n; e++) {
				let { valid: a, expectedType: o } = Aa(t, r[e]);
				i.push(o || ""), n = a;
			}
			if (!n) {
				R(ja(e, t, i));
				return;
			}
		}
		s && !s(t, r) && R("Invalid prop: custom validator check failed for prop \"" + e + "\".");
	}
}
var ka = /* @__PURE__ */ e("String,Number,Boolean,Function,Symbol,BigInt");
function Aa(e, t) {
	let n, r = Ea(t);
	if (r === "null") n = e === null;
	else if (ka(r)) {
		let i = typeof e;
		n = i === r.toLowerCase(), !n && i === "object" && (n = e instanceof t);
	} else n = r === "Object" ? v(e) : r === "Array" ? d(e) : e instanceof t;
	return {
		valid: n,
		expectedType: r
	};
}
function ja(e, t, n) {
	if (n.length === 0) return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
	let r = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(ie).join(" | ")}`, i = n[0], a = S(t), o = Ma(t, i), s = Ma(t, a);
	return n.length === 1 && Na(i) && Pa(i, a) && (r += ` with value ${o}`), r += `, got ${a} `, Na(a) && (r += `with value ${s}.`), r;
}
function Ma(e, t) {
	return _(e) ? e.toString() : t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Na(e) {
	return [
		"string",
		"number",
		"boolean"
	].some((t) => e.toLowerCase() === t);
}
function Pa(...e) {
	return e.every((e) => {
		let t = e.toLowerCase();
		return t !== "boolean" && t !== "symbol";
	});
}
var Fa = (e) => e === "_" || e === "_ctx" || e === "$stable", Ia = (e) => d(e) ? e.map(jo) : [jo(e)], La = (e, t, n) => {
	if (t._n) return t;
	let r = Mr((...r) => (process.env.NODE_ENV !== "production" && W && !(n === null && kr) && !(n && n.root !== W.root) && R(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), Ia(t(...r))), n);
	return r._c = !1, r;
}, Ra = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Fa(n)) continue;
		let i = e[n];
		if (h(i)) t[n] = La(n, i, r);
		else if (i != null) {
			process.env.NODE_ENV !== "production" && R(`Non-function value encountered for slot "${n}". Prefer function slots for better performance.`);
			let e = Ia(i);
			t[n] = () => e;
		}
	}
}, za = (e, t) => {
	process.env.NODE_ENV !== "production" && !ri(e.vnode) && R("Non-function value encountered for default slot. Prefer function slots for better performance.");
	let n = Ia(t);
	e.slots.default = () => n;
}, Ba = (e, t, n) => {
	for (let r in t) (n || !Fa(r)) && (e[r] = t[r]);
}, Va = (e, t, n) => {
	let r = e.slots = ga();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Ba(r, t, n), n && ce(r, "_", e, !0)) : Ra(t, r);
	} else t && za(e, t);
}, Ha = (e, n, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = t;
	if (i.shapeFlag & 32) {
		let t = n._;
		t ? process.env.NODE_ENV !== "production" && tr ? (Ba(a, n, r), lt(e, "set", "$slots")) : r && t === 1 ? o = !1 : Ba(a, n, r) : (o = !n.$stable, Ra(n, a)), s = n;
	} else n && (za(e, n), s = { default: 1 });
	if (o) for (let e in a) !Fa(e) && s[e] == null && delete a[e];
}, Ua, Wa;
function Ga(e, t) {
	e.appContext.config.performance && qa() && Wa.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Tr(e, t, qa() ? Wa.now() : Date.now());
}
function Ka(e, t) {
	if (e.appContext.config.performance && qa()) {
		let n = `vue-${t}-${e.uid}`, r = n + ":end", i = `<${cs(e, e.type)}> ${t}`;
		Wa.mark(r), Wa.measure(i, n, r), Wa.clearMeasures(i), Wa.clearMarks(n), Wa.clearMarks(r);
	}
	process.env.NODE_ENV !== "production" && Er(e, t, qa() ? Wa.now() : Date.now());
}
function qa() {
	return Ua === void 0 && (typeof window < "u" && window.performance ? (Ua = !0, Wa = window.performance) : Ua = !1), Ua;
}
function Ja() {
	let e = [];
	if (process.env.NODE_ENV !== "production" && e.length) {
		let t = e.length > 1;
		console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
	}
}
var Ya = so;
function Xa(e) {
	return Za(e);
}
function Za(e, i) {
	Ja();
	let a = ue();
	a.__VUE__ = !0, process.env.NODE_ENV !== "production" && _r(a.__VUE_DEVTOOLS_GLOBAL_HOOK__, a);
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = r, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = process.env.NODE_ENV !== "production" && tr ? !1 : !!t.dynamicChildren) => {
		if (e === t) return;
		e && !bo(e, t) && (r = Se(e), _e(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case co:
				y(e, t, n, r);
				break;
			case lo:
				b(e, t, n, r);
				break;
			case uo:
				e == null ? x(t, n, r, o) : process.env.NODE_ENV !== "production" && S(e, t, n, o);
				break;
			case z:
				ae(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? te(e, t, n, r, i, a, o, s, c) : d & 6 ? oe(e, t, n, r, i, a, o, s, c) : d & 64 || d & 128 ? l.process(e, t, n, r, i, a, o, s, c, Te) : process.env.NODE_ENV !== "production" && R("Invalid VNode type:", l, `(${typeof l})`);
		}
		u != null && i ? ei(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && ei(e.ref, null, a, e, !0);
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
	}, S = (e, t, n, r) => {
		if (t.children !== e.children) {
			let i = h(e.anchor);
			w(e), [t.el, t.anchor] = _(t.children, n, i, r);
		} else t.el = e.el, t.anchor = e.anchor;
	}, C = ({ el: e, anchor: t }, n, r) => {
		let i;
		for (; e && e !== t;) i = h(e), o(e, n, r), e = i;
		o(t, n, r);
	}, w = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, te = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) T(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), re(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, T = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && E(e.children, d, null, r, i, Qa(e, a), s, u), _ && Fr(e, null, r, "created"), ne(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !ee(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && Fo(f, r, e);
		}
		process.env.NODE_ENV !== "production" && (ce(d, "__vnode", e, !0), ce(d, "__vueParentComponent", r, !0)), _ && Fr(e, null, r, "beforeMount");
		let v = eo(i, g);
		if (v && g.beforeEnter(d), o(d, t, n), (f = m && m.onVnodeMounted) || v || _) {
			let t = process.env.NODE_ENV !== "production" && tr;
			Ya(() => {
				let n;
				process.env.NODE_ENV !== "production" && (n = nr(t));
				try {
					f && Fo(f, r, e), v && g.enter(d), _ && Fr(e, null, r, "mounted");
				} finally {
					process.env.NODE_ENV !== "production" && nr(n);
				}
			}, i);
		}
	}, ne = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (process.env.NODE_ENV !== "production" && n.patchFlag > 0 && n.patchFlag & 2048 && (n = sa(n.children) || n), t === n || oo(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				ne(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, E = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? Mo(e[l]) : jo(e[l]), t, n, r, i, a, o, s);
	}, re = (e, n, r, i, a, o, s) => {
		let l = n.el = e.el;
		process.env.NODE_ENV !== "production" && (l.__vnode = n);
		let { patchFlag: u, dynamicChildren: d, dirs: f } = n;
		u |= e.patchFlag & 16;
		let m = e.props || t, h = n.props || t, g;
		if (r && $a(r, !1), (g = h.onVnodeBeforeUpdate) && Fo(g, r, n, e), f && Fr(n, e, r, "beforeUpdate"), r && $a(r, !0), process.env.NODE_ENV !== "production" && tr && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? (D(e.dynamicChildren, d, l, r, i, Qa(n, a), o), process.env.NODE_ENV !== "production" && to(e, n)) : s || pe(e, n, l, null, r, i, Qa(n, a), o, !1), u > 0) {
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
		((g = h.onVnodeUpdated) || f) && Ya(() => {
			g && Fo(g, r, n, e), f && Fr(n, e, r, "updated");
		}, i);
	}, D = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === z || !bo(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
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
		process.env.NODE_ENV !== "production" && (tr || p & 2048) && (p = 0, l = !1, m = null), h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), E(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (D(e.dynamicChildren, m, n, i, a, s, c), process.env.NODE_ENV === "production" ? (t.key != null || i && t === i.subTree) && to(e, t, !0) : to(e, t)) : pe(e, t, n, f, i, a, s, c, l);
	}, oe = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : O(t, n, r, i, a, o, c) : le(e, t, c);
	}, O = (e, t, n, r, i, a, o) => {
		let s = e.component = Ro(e, r, i);
		if (process.env.NODE_ENV !== "production" && s.type.__hmrId && ar(s), process.env.NODE_ENV !== "production" && (wn(e), Ga(s, "mount")), ri(e) && (s.ctx.renderer = Te), process.env.NODE_ENV !== "production" && Ga(s, "init"), Jo(s, !1, o), process.env.NODE_ENV !== "production" && Ka(s, "init"), process.env.NODE_ENV !== "production" && tr && (e.el = null), s.asyncDep) {
			if (i && i.registerDep(s, de, o), !e.el) {
				let r = s.subTree = To(lo);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else de(s, e, t, n, i, a, o);
		process.env.NODE_ENV !== "production" && (Tn(), Ka(s, "mount"));
	}, le = (e, t, n) => {
		let r = t.component = e.component;
		if (da(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			process.env.NODE_ENV !== "production" && wn(t), fe(r, t, n), process.env.NODE_ENV !== "production" && Tn();
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, de = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = ro(e);
					if (n) {
						t && (t.el = c.el, fe(e, t, o)), n.asyncDep.then(() => {
							Ya(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				process.env.NODE_ENV !== "production" && wn(t || e.vnode), $a(e, !1), t ? (t.el = c.el, fe(e, t, o)) : t = c, n && se(n), (d = t.props && t.props.onVnodeBeforeUpdate) && Fo(d, s, t, c), $a(e, !0), process.env.NODE_ENV !== "production" && Ga(e, "render");
				let f = aa(e);
				process.env.NODE_ENV !== "production" && Ka(e, "render");
				let p = e.subTree;
				e.subTree = f, process.env.NODE_ENV !== "production" && Ga(e, "patch"), v(p, f, m(p.el), Se(p), e, i, a), process.env.NODE_ENV !== "production" && Ka(e, "patch"), t.el = f.el, u === null && ma(e, f.el), r && Ya(r, i), (d = t.props && t.props.onVnodeUpdated) && Ya(() => Fo(d, s, t, c), i), process.env.NODE_ENV !== "production" && xr(e), process.env.NODE_ENV !== "production" && Tn();
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = ni(t);
				if ($a(e, !1), l && se(l), !m && (o = c && c.onVnodeBeforeMount) && Fo(o, d, t), $a(e, !0), s && De) {
					let t = () => {
						process.env.NODE_ENV !== "production" && Ga(e, "render"), e.subTree = aa(e), process.env.NODE_ENV !== "production" && Ka(e, "render"), process.env.NODE_ENV !== "production" && Ga(e, "hydrate"), De(s, e.subTree, e, i, null), process.env.NODE_ENV !== "production" && Ka(e, "hydrate");
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0), process.env.NODE_ENV !== "production" && Ga(e, "render");
					let o = e.subTree = aa(e);
					process.env.NODE_ENV !== "production" && Ka(e, "render"), process.env.NODE_ENV !== "production" && Ga(e, "patch"), v(null, o, n, r, e, i, a), process.env.NODE_ENV !== "production" && Ka(e, "patch"), t.el = o.el;
				}
				if (u && Ya(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Ya(() => Fo(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && ni(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Ya(e.a, i), e.isMounted = !0, process.env.NODE_ENV !== "production" && br(e), t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Le(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => qn(u), $a(e, !0), process.env.NODE_ENV !== "production" && (c.onTrack = e.rtc ? (t) => se(e.rtc, t) : void 0, c.onTrigger = e.rtg ? (t) => se(e.rtg, t) : void 0), l();
	}, fe = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, ba(e, t.props, r, n), Ha(e, t.children, n), Qe(), Xn(e), $e();
	}, pe = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				he(l, d, n, r, i, a, o, s, c);
				return;
			} else if (f & 256) {
				me(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && xe(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? he(l, d, n, r, i, a, o, s, c) : xe(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && E(d, n, r, i, a, o, s, c));
	}, me = (e, t, r, i, a, o, s, c, l) => {
		e ||= n, t ||= n;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let n = t[p] = l ? Mo(t[p]) : jo(t[p]);
			v(e[p], n, r, null, a, o, s, c, l);
		}
		u > d ? xe(e, a, o, !0, !1, f) : E(t, r, i, a, o, s, c, l, f);
	}, he = (e, t, r, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let n = e[u], i = t[u] = l ? Mo(t[u]) : jo(t[u]);
			if (bo(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let n = e[f], i = t[p] = l ? Mo(t[p]) : jo(t[p]);
			if (bo(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, n = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? Mo(t[u]) : jo(t[u]), r, n, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) _e(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? Mo(t[u]) : jo(t[u]);
				e.key != null && (process.env.NODE_ENV !== "production" && g.has(e.key) && R("Duplicate keys found during update:", JSON.stringify(e.key), "Make sure keys are unique."), g.set(e.key, u));
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let n = e[u];
				if (y >= b) {
					_e(n, a, o, !0);
					continue;
				}
				let i;
				if (n.key != null) i = g.get(n.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && bo(n, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? _e(n, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(n, t[i], r, null, a, o, s, c, l), y++);
			}
			let w = x ? no(C) : n;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, n = t[e], f = t[e + 1], p = e + 1 < d ? f.el || ao(f) : i;
				C[u] === 0 ? v(null, n, r, p, a, o, s, c, l) : x && (_ < 0 || u !== w[_] ? ge(n, r, p, 2) : _--);
			}
		}
	}, ge = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			ge(e.component.subTree, t, n, r);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, r);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, Te);
			return;
		}
		if (c === z) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) ge(u[e], t, n, r);
			o(e.anchor, t, n);
			return;
		}
		if (c === uo) {
			C(e, t, n);
			return;
		}
		if (r !== 2 && d & 1 && l) if (r === 0) l.persisted && !a[qr] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), Ya(() => l.enter(a), i));
		else {
			let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? s(a) : o(a, t, n);
			}, d = () => {
				let e = a._isLeaving || !!a[qr];
				a._isLeaving && a[qr](!0), l.persisted && !e ? u() : r(a, () => {
					u(), c && c();
				});
			};
			i ? i(a, u, d) : d();
		}
		else o(a, t, n);
	}, _e = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (Qe(), ei(s, null, n, e, !0), $e()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !ni(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Fo(_, t, e), u & 6) be(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Fr(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Te, r) : l && !l.hasOnce && (a !== z || d > 0 && d & 64) ? xe(l, t, n, !1, !0) : (a === z && d & 384 || !i && u & 16) && xe(c, t, n), r && ve(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Ya(() => {
			_ && Fo(_, t, e), h && Fr(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, ve = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === z) {
			process.env.NODE_ENV !== "production" && e.patchFlag > 0 && e.patchFlag & 2048 && i && !i.persisted ? e.children.forEach((e) => {
				e.type === lo ? s(e.el) : ve(e);
			}) : ye(n, r);
			return;
		}
		if (t === uo) {
			w(e);
			return;
		}
		let a = () => {
			s(n), i && !i.persisted && i.afterLeave && i.afterLeave();
		};
		if (e.shapeFlag & 1 && i && !i.persisted) {
			let { leave: t, delayLeave: r } = i, o = () => t(n, a);
			r ? r(e.el, a, o) : o();
		} else a();
	}, ye = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, be = (e, t, n) => {
		process.env.NODE_ENV !== "production" && e.type.__hmrId && or(e);
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		io(c), io(l), r && se(r), i.stop(), a && (a.flags |= 8, _e(o, e, t, n)), s && Ya(s, t), Ya(() => {
			e.isUnmounted = !0;
		}, t), process.env.NODE_ENV !== "production" && Cr(e);
	}, xe = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) _e(e[o], t, n, r, i);
	}, Se = (e) => {
		if (e.shapeFlag & 6) return Se(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Gr];
		return n ? h(n) : t;
	}, Ce = !1, we = (e, t, n) => {
		let r;
		e == null ? t._vnode && (_e(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, Ce ||= (Ce = !0, Xn(r), Zn(), !1);
	}, Te = {
		p: v,
		um: _e,
		m: ge,
		r: ve,
		mt: O,
		mc: E,
		pc: pe,
		pbc: D,
		n: Se,
		o: e
	}, Ee, De;
	return i && ([Ee, De] = i(Te)), {
		render: we,
		hydrate: Ee,
		createApp: Xi(we, Ee)
	};
}
function Qa({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function $a({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function eo(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function to(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (d(r) && d(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Mo(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && to(t, a)), a.type === co && (a.patchFlag === -1 && (a = i[e] = Mo(a)), a.el = t.el), a.type === lo && !a.el && (a.el = t.el), process.env.NODE_ENV !== "production" && a.el && (a.el.__vnode = a);
	}
}
function no(e) {
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
function ro(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : ro(t);
}
function io(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function ao(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? ao(t.subTree) : null;
}
var oo = (e) => e.__isSuspense;
function so(e, t) {
	t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : Yn(e);
}
var z = /* @__PURE__ */ Symbol.for("v-fgt"), co = /* @__PURE__ */ Symbol.for("v-txt"), lo = /* @__PURE__ */ Symbol.for("v-cmt"), uo = /* @__PURE__ */ Symbol.for("v-stc"), fo = [], po = null;
function B(e = !1) {
	fo.push(po = e ? null : []);
}
function mo() {
	fo.pop(), po = fo[fo.length - 1] || null;
}
var ho = 1;
function go(e, t = !1) {
	ho += e, e < 0 && po && t && (po.hasOnce = !0);
}
function _o(e) {
	return e.dynamicChildren = ho > 0 ? po || n : null, mo(), ho > 0 && po && po.push(e), e;
}
function V(e, t, n, r, i, a) {
	return _o(H(e, t, n, r, i, a, !0));
}
function vo(e, t, n, r, i) {
	return _o(To(e, t, n, r, i, !0));
}
function yo(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function bo(e, t) {
	if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
		let n = rr.get(t.type);
		if (n && n.has(e.component)) return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
	}
	return e.type === t.type && e.key === t.key;
}
var xo, So = (...e) => Eo(...xo ? xo(e, kr) : e), Co = ({ key: e }) => e ?? null, wo = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : g(e) || /* @__PURE__ */ F(e) || h(e) ? {
	i: kr,
	r: e,
	k: t,
	f: !!n
} : e);
function H(e, t = null, n = null, r = 0, i = null, a = e === z ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Co(t),
		ref: t && wo(t),
		scopeId: Ar,
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
		ctx: kr
	};
	return s ? (No(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= g(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && R("VNode created with invalid key (NaN). VNode type:", c.type), ho > 0 && !o && po && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && po.push(c), c;
}
var To = process.env.NODE_ENV === "production" ? Eo : So;
function Eo(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === xi) && (process.env.NODE_ENV !== "production" && !e && R(`Invalid vnode type when creating vnode: ${e}.`), e = lo), yo(e)) {
		let r = Oo(e, t, !0);
		return n && No(r, n), ho > 0 && !a && po && (r.shapeFlag & 6 ? po[po.indexOf(e)] = r : po.push(r)), r.patchFlag = -2, r;
	}
	if (ls(e) && (e = e.__vccOpts), t) {
		t = Do(t);
		let { class: e, style: n } = t;
		e && !g(e) && (t.class = ge(e)), v(n) && (/* @__PURE__ */ en(n) && !d(n) && (n = s({}, n)), t.style = de(n));
	}
	let o = g(e) ? 1 : oo(e) ? 128 : Kr(e) ? 64 : v(e) ? 4 : h(e) ? 2 : 0;
	return process.env.NODE_ENV !== "production" && o & 4 && /* @__PURE__ */ en(e) && (e = /* @__PURE__ */ P(e), R("Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", "\nComponent that was made reactive: ", e)), H(e, t, n, r, i, o, a, !0);
}
function Do(e) {
	return e ? /* @__PURE__ */ en(e) || _a(e) ? s({}, e) : e : null;
}
function Oo(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Po(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Co(l),
		ref: t && t.ref ? n && a ? d(a) ? a.concat(wo(t)) : [a, wo(t)] : wo(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: process.env.NODE_ENV !== "production" && o === -1 && d(s) ? s.map(ko) : s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== z ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Oo(e.ssContent),
		ssFallback: e.ssFallback && Oo(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && Jr(u, c.clone(u)), u;
}
function ko(e) {
	let t = Oo(e);
	return d(e.children) && (t.children = e.children.map(ko)), t;
}
function Ao(e = " ", t = 0) {
	return To(co, null, e, t);
}
function U(e = "", t = !1) {
	return t ? (B(), vo(lo, null, e)) : To(lo, null, e);
}
function jo(e) {
	return e == null || typeof e == "boolean" ? To(lo) : d(e) ? To(z, null, e.slice()) : yo(e) ? Mo(e) : To(co, null, String(e));
}
function Mo(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Oo(e);
}
function No(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (d(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), No(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !_a(t) ? t._ctx = kr : r === 3 && kr && (kr.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else h(t) ? (t = {
		default: t,
		_ctx: kr
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Ao(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function Po(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = ge([t.class, r.class]));
		else if (e === "style") t.style = de([t.style, r.style]);
		else if (a(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(d(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !o(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function Fo(e, t, n, r = null) {
	Pn(e, t, 7, [n, r]);
}
var Io = Ji(), Lo = 0;
function Ro(e, n, r) {
	let i = e.type, a = (n ? n.appContext : e.appContext) || Io, o = {
		uid: Lo++,
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
		scope: new Me(!0),
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
		propsOptions: wa(i, a),
		emitsOptions: ta(i, a),
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
	return process.env.NODE_ENV === "production" ? o.ctx = { _: o } : o.ctx = Oi(o), o.root = n ? n.root : o, o.emit = $i.bind(null, o), e.ce && e.ce(o), o;
}
var W = null, zo = () => W || kr, Bo, Vo;
{
	let e = ue(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Bo = t("__VUE_INSTANCE_SETTERS__", (e) => W = e), Vo = t("__VUE_SSR_SETTERS__", (e) => qo = e);
}
var Ho = (e) => {
	let t = W;
	return Bo(e), e.scope.on(), () => {
		e.scope.off(), Bo(t);
	};
}, Uo = () => {
	W && W.scope.off(), Bo(null);
}, Wo = /* @__PURE__ */ e("slot,component");
function Go(e, { isNativeTag: t }) {
	(Wo(e) || t(e)) && R("Do not use built-in or reserved HTML elements as component id: " + e);
}
function Ko(e) {
	return e.vnode.shapeFlag & 4;
}
var qo = !1;
function Jo(e, t = !1, n = !1) {
	t && Vo(t);
	let { props: r, children: i } = e.vnode, a = Ko(e);
	va(e, r, a, t), Va(e, i, n || t);
	let o = a ? Yo(e, t) : void 0;
	return t && Vo(!1), o;
}
function Yo(e, t) {
	let n = e.type;
	if (process.env.NODE_ENV !== "production") {
		if (n.name && Go(n.name, e.appContext.config), n.components) {
			let t = Object.keys(n.components);
			for (let n = 0; n < t.length; n++) Go(t[n], e.appContext.config);
		}
		if (n.directives) {
			let e = Object.keys(n.directives);
			for (let t = 0; t < e.length; t++) Nr(e[t]);
		}
		n.compilerOptions && $o() && R("\"compilerOptions\" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.");
	}
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Di), process.env.NODE_ENV !== "production" && ki(e);
	let { setup: r } = n;
	if (r) {
		Qe();
		let i = e.setupContext = r.length > 1 ? rs(e) : null, a = Ho(e), o = Nn(r, e, 0, [process.env.NODE_ENV === "production" ? e.props : /* @__PURE__ */ Xt(e.props), i]), s = y(o);
		if ($e(), a(), (s || e.sp) && !ni(e) && Xr(e), s) {
			if (o.then(Uo, Uo), t) return o.then((n) => {
				Xo(e, n, t);
			}).catch((t) => {
				Fn(t, e, 0);
			});
			e.asyncDep = o, process.env.NODE_ENV !== "production" && !e.suspense && R(`Component <${cs(e, n)}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
		} else Xo(e, o, t);
	} else es(e, t);
}
function Xo(e, t, n) {
	h(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : v(t) ? (process.env.NODE_ENV !== "production" && yo(t) && R("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = ln(t), process.env.NODE_ENV !== "production" && Ai(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && R(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), es(e, n);
}
var Zo, Qo, $o = () => !Zo;
function es(e, t, n) {
	let i = e.type;
	if (!e.render) {
		if (!t && Zo && !i.render) {
			let t = i.template || Ri(e).template;
			if (t) {
				process.env.NODE_ENV !== "production" && Ga(e, "compile");
				let { isCustomElement: n, compilerOptions: r } = e.appContext.config, { delimiters: a, compilerOptions: o } = i;
				i.render = Zo(t, s(s({
					isCustomElement: n,
					delimiters: a
				}, r), o)), process.env.NODE_ENV !== "production" && Ka(e, "compile");
			}
		}
		e.render = i.render || r, Qo && Qo(e);
	}
	{
		let t = Ho(e);
		Qe();
		try {
			Pi(e);
		} finally {
			$e(), t();
		}
	}
	process.env.NODE_ENV !== "production" && !i.render && e.render === r && !t && (!Zo && i.template ? R("Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias \"vue\" to \"vue/dist/vue.esm-bundler.js\".") : R("Component is missing template or render function: ", i));
}
var ts = process.env.NODE_ENV === "production" ? { get(e, t) {
	return M(e, "get", ""), e[t];
} } : {
	get(e, t) {
		return ia(), M(e, "get", ""), e[t];
	},
	set() {
		return R("setupContext.attrs is readonly."), !1;
	},
	deleteProperty() {
		return R("setupContext.attrs is readonly."), !1;
	}
};
function ns(e) {
	return new Proxy(e.slots, { get(t, n) {
		return M(e, "get", "$slots"), t[n];
	} });
}
function rs(e) {
	let t = (t) => {
		if (process.env.NODE_ENV !== "production" && (e.exposed && R("expose() should be called only once per setup()."), t != null)) {
			let e = typeof t;
			e === "object" && (d(t) ? e = "array" : /* @__PURE__ */ F(t) && (e = "ref")), e !== "object" && R(`expose() should be passed a plain object, received ${e}.`);
		}
		e.exposed = t || {};
	};
	if (process.env.NODE_ENV !== "production") {
		let n, r;
		return Object.freeze({
			get attrs() {
				return n ||= new Proxy(e.attrs, ts);
			},
			get slots() {
				return r ||= ns(e);
			},
			get emit() {
				return (t, ...n) => e.emit(t, ...n);
			},
			expose: t
		});
	} else return {
		attrs: new Proxy(e.attrs, ts),
		slots: e.slots,
		emit: e.emit,
		expose: t
	};
}
function is(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(ln(tn(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in wi) return wi[n](e);
		},
		has(e, t) {
			return t in e || t in wi;
		}
	}) : e.proxy;
}
var as = /(?:^|[-_])\w/g, os = (e) => e.replace(as, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function ss(e, t = !0) {
	return h(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function cs(e, t, n = !1) {
	let r = ss(t);
	if (!r && t.__file) {
		let e = t.__file.match(/([^/\\]+)\.\w+$/);
		e && (r = e[1]);
	}
	if (!r && e) {
		let n = (e) => {
			for (let n in e) if (e[n] === t) return n;
		};
		r = n(e.components) || e.parent && n(e.parent.type.components) || n(e.appContext.components);
	}
	return r ? os(r) : n ? "App" : "Anonymous";
}
function ls(e) {
	return h(e) && "__vccOpts" in e;
}
var G = (e, t) => {
	let n = /* @__PURE__ */ gn(e, t, qo);
	if (process.env.NODE_ENV !== "production") {
		let e = zo();
		e && e.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
	}
	return n;
};
function us() {
	if (process.env.NODE_ENV === "production" || typeof window > "u") return;
	let e = { style: "color:#3ba776" }, n = { style: "color:#1677ff" }, r = { style: "color:#f5222d" }, i = { style: "color:#eb2f96" }, a = {
		__vue_custom_formatter: !0,
		header(t) {
			if (!v(t)) return null;
			if (t.__isVue) return [
				"div",
				e,
				"VueInstance"
			];
			if (/* @__PURE__ */ F(t)) {
				Qe();
				let n = t.value;
				return $e(), [
					"div",
					{},
					[
						"span",
						e,
						p(t)
					],
					"<",
					l(n),
					">"
				];
			} else if (/* @__PURE__ */ Qt(t)) return [
				"div",
				{},
				[
					"span",
					e,
					/* @__PURE__ */ N(t) ? "ShallowReactive" : "Reactive"
				],
				"<",
				l(t),
				`>${/* @__PURE__ */ $t(t) ? " (readonly)" : ""}`
			];
			else if (/* @__PURE__ */ $t(t)) return [
				"div",
				{},
				[
					"span",
					e,
					/* @__PURE__ */ N(t) ? "ShallowReadonly" : "Readonly"
				],
				"<",
				l(t),
				">"
			];
			return null;
		},
		hasBody(e) {
			return e && e.__isVue;
		},
		body(e) {
			if (e && e.__isVue) return [
				"div",
				{},
				...o(e.$)
			];
		}
	};
	function o(e) {
		let n = [];
		e.type.props && e.props && n.push(c("props", /* @__PURE__ */ P(e.props))), e.setupState !== t && n.push(c("setup", e.setupState)), e.data !== t && n.push(c("data", /* @__PURE__ */ P(e.data)));
		let r = u(e, "computed");
		r && n.push(c("computed", r));
		let a = u(e, "inject");
		return a && n.push(c("injected", a)), n.push([
			"div",
			{},
			[
				"span",
				{ style: i.style + ";opacity:0.66" },
				"$ (internal): "
			],
			["object", { object: e }]
		]), n;
	}
	function c(e, t) {
		return t = s({}, t), Object.keys(t).length ? [
			"div",
			{ style: "line-height:1.25em;margin-bottom:0.6em" },
			[
				"div",
				{ style: "color:#476582" },
				e
			],
			[
				"div",
				{ style: "padding-left:1.25em" },
				...Object.keys(t).map((e) => [
					"div",
					{},
					[
						"span",
						i,
						e + ": "
					],
					l(t[e], !1)
				])
			]
		] : ["span", {}];
	}
	function l(e, t = !0) {
		return typeof e == "number" ? [
			"span",
			n,
			e
		] : typeof e == "string" ? [
			"span",
			r,
			JSON.stringify(e)
		] : typeof e == "boolean" ? [
			"span",
			i,
			e
		] : v(e) ? ["object", { object: t ? /* @__PURE__ */ P(e) : e }] : [
			"span",
			r,
			String(e)
		];
	}
	function u(e, t) {
		let n = e.type;
		if (h(n)) return;
		let r = {};
		for (let i in e.ctx) f(n, i, t) && (r[i] = e.ctx[i]);
		return r;
	}
	function f(e, t, n) {
		let r = e[n];
		if (d(r) && r.includes(t) || v(r) && t in r || e.extends && f(e.extends, t, n) || e.mixins && e.mixins.some((e) => f(e, t, n))) return !0;
	}
	function p(e) {
		return /* @__PURE__ */ N(e) ? "ShallowRef" : e.effect ? "ComputedRef" : "Ref";
	}
	window.devtoolsFormatters ? window.devtoolsFormatters.push(a) : window.devtoolsFormatters = [a];
}
var ds = "3.5.38", fs = process.env.NODE_ENV === "production" ? r : R;
process.env.NODE_ENV, process.env.NODE_ENV;
//#endregion
//#region node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var ps = void 0, ms = typeof window < "u" && window.trustedTypes;
if (ms) try {
	ps = /* @__PURE__ */ ms.createPolicy("vue", { createHTML: (e) => e });
} catch (e) {
	process.env.NODE_ENV !== "production" && fs(`Error creating trusted types policy: ${e}`);
}
var hs = ps ? (e) => ps.createHTML(e) : (e) => e, gs = "http://www.w3.org/2000/svg", _s = "http://www.w3.org/1998/Math/MathML", vs = typeof document < "u" ? document : null, ys = vs && /* @__PURE__ */ vs.createElement("template"), bs = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? vs.createElementNS(gs, e) : t === "mathml" ? vs.createElementNS(_s, e) : n ? vs.createElement(e, { is: n }) : vs.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => vs.createTextNode(e),
	createComment: (e) => vs.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => vs.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			ys.innerHTML = hs(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = ys.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, xs = /* @__PURE__ */ Symbol("_vtc");
function Ss(e, t, n) {
	let r = e[xs];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Cs = /* @__PURE__ */ Symbol("_vod"), ws = /* @__PURE__ */ Symbol("_vsh"), Ts = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "CSS_VAR_TEXT"), Es = /(?:^|;)\s*display\s*:/;
function Ds(e, t, n) {
	let r = e.style, i = g(n), a = !1;
	if (n && !i) {
		if (t) if (g(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? As(r, t, "");
		}
		else for (let e in t) n[e] ?? As(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? As(r, i, "") : Ps(e, i, !g(t) && t ? t[i] : void 0, o) || As(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Ts];
			e && (n += ";" + e), r.cssText = n, a = Es.test(n);
		}
	} else t && e.removeAttribute("style");
	Cs in e && (e[Cs] = a ? r.display : "", e[ws] && (r.display = "none"));
}
var Os = /[^\\];\s*$/, ks = /\s*!important$/;
function As(e, t, n) {
	if (d(n)) n.forEach((n) => As(e, t, n));
	else if (n ??= "", process.env.NODE_ENV !== "production" && Os.test(n) && fs(`Unexpected semicolon at the end of '${t}' style value: '${n}'`), t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = Ns(e, t);
		ks.test(n) ? e.setProperty(D(r), n.replace(ks, ""), "important") : e[r] = n;
	}
}
var js = [
	"Webkit",
	"Moz",
	"ms"
], Ms = {};
function Ns(e, t) {
	let n = Ms[t];
	if (n) return n;
	let r = E(t);
	if (r !== "filter" && r in e) return Ms[t] = r;
	r = ie(r);
	for (let n = 0; n < js.length; n++) {
		let i = js[n] + r;
		if (i in e) return Ms[t] = i;
	}
	return t;
}
function Ps(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && g(r) && n === r;
}
var Fs = "http://www.w3.org/1999/xlink";
function Is(e, t, n, r, i, a = we(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Fs, t.slice(6, t.length)) : e.setAttributeNS(Fs, t, n) : n == null || a && !Te(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : _(n) ? String(n) : n);
}
function Ls(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? hs(n) : n);
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
		r === "boolean" ? n = Te(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch (e) {
		process.env.NODE_ENV !== "production" && !o && fs(`Failed setting prop "${t}" on <${a.toLowerCase()}>: value ${n} is invalid.`, e);
	}
	o && e.removeAttribute(i || t);
}
function Rs(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function zs(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var Bs = /* @__PURE__ */ Symbol("_vei");
function Vs(e, t, n, r, i = null) {
	let a = e[Bs] || (e[Bs] = {}), o = a[t];
	if (r && o) o.value = process.env.NODE_ENV === "production" ? r : Js(r, t);
	else {
		let [n, s] = Us(t);
		r ? Rs(e, n, a[t] = qs(process.env.NODE_ENV === "production" ? r : Js(r, t), i), s) : o && (zs(e, n, o, s), a[t] = void 0);
	}
}
var Hs = /(?:Once|Passive|Capture)$/;
function Us(e) {
	let t;
	if (Hs.test(e)) {
		t = {};
		let n;
		for (; n = e.match(Hs);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : D(e.slice(2)), t];
}
var Ws = 0, Gs = /* @__PURE__ */ Promise.resolve(), Ks = () => Ws ||= (Gs.then(() => Ws = 0), Date.now());
function qs(e, t) {
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
				e && Pn(e, t, 5, a);
			}
		} else Pn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = Ks(), n;
}
function Js(e, t) {
	return h(e) || d(e) ? e : (fs(`Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`), r);
}
var Ys = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Xs = (e, t, n, r, i, s) => {
	let c = i === "svg";
	t === "class" ? Ss(e, r, c) : t === "style" ? Ds(e, n, r) : a(t) ? o(t) || Vs(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Zs(e, t, r, c)) ? (Ls(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Is(e, t, r, c, s, t !== "value")) : e._isVueCE && (Qs(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !g(r))) ? Ls(e, E(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Is(e, t, r, c));
};
function Zs(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Ys(t) && h(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Ys(t) && g(n) ? !1 : t in e;
}
function Qs(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = E(t);
	return Array.isArray(n) ? n.some((e) => E(e) === r) : Object.keys(n).some((e) => E(e) === r);
}
var $s = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return d(t) ? (e) => se(t, e) : t;
};
function ec(e) {
	e.target.composing = !0;
}
function tc(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var nc = /* @__PURE__ */ Symbol("_assign");
function rc(e, t, n) {
	return t && (e = e.trim()), n && (e = O(e)), e;
}
var ic = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[nc] = $s(i);
		let a = r || i.props && i.props.type === "number";
		Rs(e, t ? "change" : "input", (t) => {
			t.target.composing || e[nc](rc(e.value, n, a));
		}), (n || a) && Rs(e, "change", () => {
			e.value = rc(e.value, n, a);
		}), t || (Rs(e, "compositionstart", ec), Rs(e, "compositionend", tc), Rs(e, "change", tc));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[nc] = $s(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? O(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, ac = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], oc = {
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
	exact: (e, t) => ac.some((n) => e[`${n}Key`] && !t.includes(n))
}, sc = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = oc[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, cc = /* @__PURE__ */ s({ patchProp: Xs }, bs), lc;
function uc() {
	return lc ||= Xa(cc);
}
var dc = ((...e) => {
	let t = uc().createApp(...e);
	process.env.NODE_ENV !== "production" && (pc(t), mc(t));
	let { mount: n } = t;
	return t.mount = (e) => {
		let r = hc(e);
		if (!r) return;
		let i = t._component;
		!h(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, fc(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function fc(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function pc(e) {
	Object.defineProperty(e.config, "isNativeTag", {
		value: (e) => be(e) || xe(e) || Se(e),
		writable: !1
	});
}
function mc(e) {
	if ($o()) {
		let t = e.config.isCustomElement;
		Object.defineProperty(e.config, "isCustomElement", {
			get() {
				return t;
			},
			set() {
				fs("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
			}
		});
		let n = e.config.compilerOptions, r = "The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka \"full build\"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader's `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc";
		Object.defineProperty(e.config, "compilerOptions", {
			get() {
				return fs(r), n;
			},
			set() {
				fs(r);
			}
		});
	}
}
function hc(e) {
	if (g(e)) {
		let t = document.querySelector(e);
		return process.env.NODE_ENV !== "production" && !t && fs(`Failed to mount app: mount target selector "${e}" returned null.`), t;
	}
	return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && fs("mounting on a ShadowRoot with `{mode: \"closed\"}` may lead to unpredictable bugs"), e;
}
//#endregion
//#region node_modules/vue/dist/vue.runtime.esm-bundler.js
function gc() {
	us();
}
process.env.NODE_ENV !== "production" && gc();
//#endregion
//#region node_modules/@vue/devtools-shared/dist/index.js
var _c = Object.create, vc = Object.defineProperty, yc = Object.getOwnPropertyDescriptor, bc = Object.getOwnPropertyNames, xc = Object.getPrototypeOf, Sc = Object.prototype.hasOwnProperty, Cc = (e, t) => function() {
	return e && (t = (0, e[bc(e)[0]])(e = 0)), t;
}, wc = (e, t) => function() {
	return t || (0, e[bc(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, Tc = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (let i of bc(t)) !Sc.call(e, i) && i !== n && vc(e, i, {
		get: () => t[i],
		enumerable: !(r = yc(t, i)) || r.enumerable
	});
	return e;
}, Ec = (e, t, n) => (n = e == null ? {} : _c(xc(e)), Tc(t || !e || !e.__esModule ? vc(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), Dc = Cc({ "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {} }), Oc = wc({ "../../node_modules/.pnpm/rfdc@1.4.1/node_modules/rfdc/index.js"(e, t) {
	Dc(), t.exports = r;
	function n(e) {
		return e instanceof Buffer ? Buffer.from(e) : new e.constructor(e.buffer.slice(), e.byteOffset, e.length);
	}
	function r(e) {
		if (e ||= {}, e.circles) return i(e);
		let t = /* @__PURE__ */ new Map();
		if (t.set(Date, (e) => new Date(e)), t.set(Map, (e, t) => new Map(a(Array.from(e), t))), t.set(Set, (e, t) => new Set(a(Array.from(e), t))), e.constructorHandlers) for (let n of e.constructorHandlers) t.set(n[0], n[1]);
		let r = null;
		return e.proto ? s : o;
		function a(e, i) {
			let a = Object.keys(e), o = Array(a.length);
			for (let s = 0; s < a.length; s++) {
				let c = a[s], l = e[c];
				typeof l != "object" || !l ? o[c] = l : l.constructor !== Object && (r = t.get(l.constructor)) ? o[c] = r(l, i) : ArrayBuffer.isView(l) ? o[c] = n(l) : o[c] = i(l);
			}
			return o;
		}
		function o(e) {
			if (typeof e != "object" || !e) return e;
			if (Array.isArray(e)) return a(e, o);
			if (e.constructor !== Object && (r = t.get(e.constructor))) return r(e, o);
			let i = {};
			for (let a in e) {
				if (Object.hasOwnProperty.call(e, a) === !1) continue;
				let s = e[a];
				typeof s != "object" || !s ? i[a] = s : s.constructor !== Object && (r = t.get(s.constructor)) ? i[a] = r(s, o) : ArrayBuffer.isView(s) ? i[a] = n(s) : i[a] = o(s);
			}
			return i;
		}
		function s(e) {
			if (typeof e != "object" || !e) return e;
			if (Array.isArray(e)) return a(e, s);
			if (e.constructor !== Object && (r = t.get(e.constructor))) return r(e, s);
			let i = {};
			for (let a in e) {
				let o = e[a];
				typeof o != "object" || !o ? i[a] = o : o.constructor !== Object && (r = t.get(o.constructor)) ? i[a] = r(o, s) : ArrayBuffer.isView(o) ? i[a] = n(o) : i[a] = s(o);
			}
			return i;
		}
	}
	function i(e) {
		let t = [], r = [], i = /* @__PURE__ */ new Map();
		if (i.set(Date, (e) => new Date(e)), i.set(Map, (e, t) => new Map(o(Array.from(e), t))), i.set(Set, (e, t) => new Set(o(Array.from(e), t))), e.constructorHandlers) for (let t of e.constructorHandlers) i.set(t[0], t[1]);
		let a = null;
		return e.proto ? c : s;
		function o(e, o) {
			let s = Object.keys(e), c = Array(s.length);
			for (let l = 0; l < s.length; l++) {
				let u = s[l], d = e[u];
				if (typeof d != "object" || !d) c[u] = d;
				else if (d.constructor !== Object && (a = i.get(d.constructor))) c[u] = a(d, o);
				else if (ArrayBuffer.isView(d)) c[u] = n(d);
				else {
					let e = t.indexOf(d);
					e === -1 ? c[u] = o(d) : c[u] = r[e];
				}
			}
			return c;
		}
		function s(e) {
			if (typeof e != "object" || !e) return e;
			if (Array.isArray(e)) return o(e, s);
			if (e.constructor !== Object && (a = i.get(e.constructor))) return a(e, s);
			let c = {};
			t.push(e), r.push(c);
			for (let o in e) {
				if (Object.hasOwnProperty.call(e, o) === !1) continue;
				let l = e[o];
				if (typeof l != "object" || !l) c[o] = l;
				else if (l.constructor !== Object && (a = i.get(l.constructor))) c[o] = a(l, s);
				else if (ArrayBuffer.isView(l)) c[o] = n(l);
				else {
					let e = t.indexOf(l);
					e === -1 ? c[o] = s(l) : c[o] = r[e];
				}
			}
			return t.pop(), r.pop(), c;
		}
		function c(e) {
			if (typeof e != "object" || !e) return e;
			if (Array.isArray(e)) return o(e, c);
			if (e.constructor !== Object && (a = i.get(e.constructor))) return a(e, c);
			let s = {};
			t.push(e), r.push(s);
			for (let o in e) {
				let l = e[o];
				if (typeof l != "object" || !l) s[o] = l;
				else if (l.constructor !== Object && (a = i.get(l.constructor))) s[o] = a(l, c);
				else if (ArrayBuffer.isView(l)) s[o] = n(l);
				else {
					let e = t.indexOf(l);
					e === -1 ? s[o] = c(l) : s[o] = r[e];
				}
			}
			return t.pop(), r.pop(), s;
		}
	}
} });
Dc(), Dc(), Dc();
var kc = typeof navigator < "u", K = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : {};
K.chrome !== void 0 && K.chrome.devtools, kc && (K.self, K.top), typeof navigator < "u" && navigator.userAgent?.toLowerCase().includes("electron"), typeof window < "u" && window.__NUXT__, Dc();
var Ac = Ec(Oc(), 1), jc = /(?:^|[-_/])(\w)/g;
function Mc(e, t) {
	return t ? t.toUpperCase() : "";
}
function Nc(e) {
	return e && `${e}`.replace(jc, Mc);
}
function Pc(e, t) {
	let n = e.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
	n.endsWith(`index${t}`) && (n = n.replace(`/index${t}`, t));
	let r = n.lastIndexOf("/"), i = n.substring(r + 1);
	if (t) {
		let e = i.lastIndexOf(t);
		return i.substring(0, e);
	}
	return "";
}
var Fc = (0, Ac.default)({ circles: !0 }), Ic = { trailing: !0 };
function Lc(e, t = 25, n = {}) {
	if (n = {
		...Ic,
		...n
	}, !Number.isFinite(t)) throw TypeError("Expected `wait` to be a finite number");
	let r, i, a = [], o, s, c = (t, r) => (o = Rc(e, t, r), o.finally(() => {
		if (o = null, n.trailing && s && !i) {
			let e = c(t, s);
			return s = null, e;
		}
	}), o);
	return function(...e) {
		return o ? (n.trailing && (s = e), o) : new Promise((o) => {
			let s = !i && n.leading;
			clearTimeout(i), i = setTimeout(() => {
				i = null;
				let t = n.leading ? r : c(this, e);
				for (let e of a) e(t);
				a = [];
			}, t), s ? (r = c(this, e), o(r)) : a.push(o);
		});
	};
}
async function Rc(e, t, n) {
	return await e.apply(t, n);
}
//#endregion
//#region node_modules/hookable/dist/index.mjs
function zc(e, t = {}, n) {
	for (let r in e) {
		let i = e[r], a = n ? `${n}:${r}` : r;
		typeof i == "object" && i ? zc(i, t, a) : typeof i == "function" && (t[a] = i);
	}
	return t;
}
var Bc = { run: (e) => e() }, Vc = console.createTask === void 0 ? () => Bc : console.createTask;
function Hc(e, t) {
	let n = Vc(t.shift());
	return e.reduce((e, r) => e.then(() => n.run(() => r(...t))), Promise.resolve());
}
function Uc(e, t) {
	let n = Vc(t.shift());
	return Promise.all(e.map((e) => n.run(() => e(...t))));
}
function Wc(e, t) {
	for (let n of [...e]) n(t);
}
var Gc = class {
	constructor() {
		this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
	}
	hook(e, t, n = {}) {
		if (!e || typeof t != "function") return () => {};
		let r = e, i;
		for (; this._deprecatedHooks[e];) i = this._deprecatedHooks[e], e = i.to;
		if (i && !n.allowDeprecated) {
			let e = i.message;
			e ||= `${r} hook has been deprecated` + (i.to ? `, please use ${i.to}` : ""), this._deprecatedMessages ||= /* @__PURE__ */ new Set(), this._deprecatedMessages.has(e) || (console.warn(e), this._deprecatedMessages.add(e));
		}
		if (!t.name) try {
			Object.defineProperty(t, "name", {
				get: () => "_" + e.replace(/\W+/g, "_") + "_hook_cb",
				configurable: !0
			});
		} catch {}
		return this._hooks[e] = this._hooks[e] || [], this._hooks[e].push(t), () => {
			t &&= (this.removeHook(e, t), void 0);
		};
	}
	hookOnce(e, t) {
		let n, r = (...e) => (typeof n == "function" && n(), n = void 0, r = void 0, t(...e));
		return n = this.hook(e, r), n;
	}
	removeHook(e, t) {
		if (this._hooks[e]) {
			let n = this._hooks[e].indexOf(t);
			n !== -1 && this._hooks[e].splice(n, 1), this._hooks[e].length === 0 && delete this._hooks[e];
		}
	}
	deprecateHook(e, t) {
		this._deprecatedHooks[e] = typeof t == "string" ? { to: t } : t;
		let n = this._hooks[e] || [];
		delete this._hooks[e];
		for (let t of n) this.hook(e, t);
	}
	deprecateHooks(e) {
		Object.assign(this._deprecatedHooks, e);
		for (let t in e) this.deprecateHook(t, e[t]);
	}
	addHooks(e) {
		let t = zc(e), n = Object.keys(t).map((e) => this.hook(e, t[e]));
		return () => {
			for (let e of n.splice(0, n.length)) e();
		};
	}
	removeHooks(e) {
		let t = zc(e);
		for (let e in t) this.removeHook(e, t[e]);
	}
	removeAllHooks() {
		for (let e in this._hooks) delete this._hooks[e];
	}
	callHook(e, ...t) {
		return t.unshift(e), this.callHookWith(Hc, e, ...t);
	}
	callHookParallel(e, ...t) {
		return t.unshift(e), this.callHookWith(Uc, e, ...t);
	}
	callHookWith(e, t, ...n) {
		let r = this._before || this._after ? {
			name: t,
			args: n,
			context: {}
		} : void 0;
		this._before && Wc(this._before, r);
		let i = e(t in this._hooks ? [...this._hooks[t]] : [], n);
		return i instanceof Promise ? i.finally(() => {
			this._after && r && Wc(this._after, r);
		}) : (this._after && r && Wc(this._after, r), i);
	}
	beforeEach(e) {
		return this._before = this._before || [], this._before.push(e), () => {
			if (this._before !== void 0) {
				let t = this._before.indexOf(e);
				t !== -1 && this._before.splice(t, 1);
			}
		};
	}
	afterEach(e) {
		return this._after = this._after || [], this._after.push(e), () => {
			if (this._after !== void 0) {
				let t = this._after.indexOf(e);
				t !== -1 && this._after.splice(t, 1);
			}
		};
	}
};
function Kc() {
	return new Gc();
}
//#endregion
//#region node_modules/@vue/devtools-kit/dist/index.js
var qc = Object.create, Jc = Object.defineProperty, Yc = Object.getOwnPropertyDescriptor, Xc = Object.getOwnPropertyNames, Zc = Object.getPrototypeOf, Qc = Object.prototype.hasOwnProperty, $c = (e, t) => function() {
	return e && (t = (0, e[Xc(e)[0]])(e = 0)), t;
}, el = (e, t) => function() {
	return t || (0, e[Xc(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, tl = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (let i of Xc(t)) !Qc.call(e, i) && i !== n && Jc(e, i, {
		get: () => t[i],
		enumerable: !(r = Yc(t, i)) || r.enumerable
	});
	return e;
}, nl = (e, t, n) => (n = e == null ? {} : qc(Zc(e)), tl(t || !e || !e.__esModule ? Jc(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), q = $c({ "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {} }), rl = el({ "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/lib/speakingurl.js"(e, t) {
	q(), (function(e) {
		var n = {
			À: "A",
			Á: "A",
			Â: "A",
			Ã: "A",
			Ä: "Ae",
			Å: "A",
			Æ: "AE",
			Ç: "C",
			È: "E",
			É: "E",
			Ê: "E",
			Ë: "E",
			Ì: "I",
			Í: "I",
			Î: "I",
			Ï: "I",
			Ð: "D",
			Ñ: "N",
			Ò: "O",
			Ó: "O",
			Ô: "O",
			Õ: "O",
			Ö: "Oe",
			Ő: "O",
			Ø: "O",
			Ù: "U",
			Ú: "U",
			Û: "U",
			Ü: "Ue",
			Ű: "U",
			Ý: "Y",
			Þ: "TH",
			ß: "ss",
			à: "a",
			á: "a",
			â: "a",
			ã: "a",
			ä: "ae",
			å: "a",
			æ: "ae",
			ç: "c",
			è: "e",
			é: "e",
			ê: "e",
			ë: "e",
			ì: "i",
			í: "i",
			î: "i",
			ï: "i",
			ð: "d",
			ñ: "n",
			ò: "o",
			ó: "o",
			ô: "o",
			õ: "o",
			ö: "oe",
			ő: "o",
			ø: "o",
			ù: "u",
			ú: "u",
			û: "u",
			ü: "ue",
			ű: "u",
			ý: "y",
			þ: "th",
			ÿ: "y",
			ẞ: "SS",
			ا: "a",
			أ: "a",
			إ: "i",
			آ: "aa",
			ؤ: "u",
			ئ: "e",
			ء: "a",
			ب: "b",
			ت: "t",
			ث: "th",
			ج: "j",
			ح: "h",
			خ: "kh",
			د: "d",
			ذ: "th",
			ر: "r",
			ز: "z",
			س: "s",
			ش: "sh",
			ص: "s",
			ض: "dh",
			ط: "t",
			ظ: "z",
			ع: "a",
			غ: "gh",
			ف: "f",
			ق: "q",
			ك: "k",
			ل: "l",
			م: "m",
			ن: "n",
			ه: "h",
			و: "w",
			ي: "y",
			ى: "a",
			ة: "h",
			ﻻ: "la",
			ﻷ: "laa",
			ﻹ: "lai",
			ﻵ: "laa",
			گ: "g",
			چ: "ch",
			پ: "p",
			ژ: "zh",
			ک: "k",
			ی: "y",
			"َ": "a",
			"ً": "an",
			"ِ": "e",
			"ٍ": "en",
			"ُ": "u",
			"ٌ": "on",
			"ْ": "",
			"٠": "0",
			"١": "1",
			"٢": "2",
			"٣": "3",
			"٤": "4",
			"٥": "5",
			"٦": "6",
			"٧": "7",
			"٨": "8",
			"٩": "9",
			"۰": "0",
			"۱": "1",
			"۲": "2",
			"۳": "3",
			"۴": "4",
			"۵": "5",
			"۶": "6",
			"۷": "7",
			"۸": "8",
			"۹": "9",
			က: "k",
			ခ: "kh",
			ဂ: "g",
			ဃ: "ga",
			င: "ng",
			စ: "s",
			ဆ: "sa",
			ဇ: "z",
			စျ: "za",
			ည: "ny",
			ဋ: "t",
			ဌ: "ta",
			ဍ: "d",
			ဎ: "da",
			ဏ: "na",
			တ: "t",
			ထ: "ta",
			ဒ: "d",
			ဓ: "da",
			န: "n",
			ပ: "p",
			ဖ: "pa",
			ဗ: "b",
			ဘ: "ba",
			မ: "m",
			ယ: "y",
			ရ: "ya",
			လ: "l",
			ဝ: "w",
			သ: "th",
			ဟ: "h",
			ဠ: "la",
			အ: "a",
			"ြ": "y",
			"ျ": "ya",
			"ွ": "w",
			"ြွ": "yw",
			"ျွ": "ywa",
			"ှ": "h",
			ဧ: "e",
			"၏": "-e",
			ဣ: "i",
			ဤ: "-i",
			ဉ: "u",
			ဦ: "-u",
			ဩ: "aw",
			သြော: "aw",
			ဪ: "aw",
			"၀": "0",
			"၁": "1",
			"၂": "2",
			"၃": "3",
			"၄": "4",
			"၅": "5",
			"၆": "6",
			"၇": "7",
			"၈": "8",
			"၉": "9",
			"္": "",
			"့": "",
			"း": "",
			č: "c",
			ď: "d",
			ě: "e",
			ň: "n",
			ř: "r",
			š: "s",
			ť: "t",
			ů: "u",
			ž: "z",
			Č: "C",
			Ď: "D",
			Ě: "E",
			Ň: "N",
			Ř: "R",
			Š: "S",
			Ť: "T",
			Ů: "U",
			Ž: "Z",
			ހ: "h",
			ށ: "sh",
			ނ: "n",
			ރ: "r",
			ބ: "b",
			ޅ: "lh",
			ކ: "k",
			އ: "a",
			ވ: "v",
			މ: "m",
			ފ: "f",
			ދ: "dh",
			ތ: "th",
			ލ: "l",
			ގ: "g",
			ޏ: "gn",
			ސ: "s",
			ޑ: "d",
			ޒ: "z",
			ޓ: "t",
			ޔ: "y",
			ޕ: "p",
			ޖ: "j",
			ޗ: "ch",
			ޘ: "tt",
			ޙ: "hh",
			ޚ: "kh",
			ޛ: "th",
			ޜ: "z",
			ޝ: "sh",
			ޞ: "s",
			ޟ: "d",
			ޠ: "t",
			ޡ: "z",
			ޢ: "a",
			ޣ: "gh",
			ޤ: "q",
			ޥ: "w",
			"ަ": "a",
			"ާ": "aa",
			"ި": "i",
			"ީ": "ee",
			"ު": "u",
			"ޫ": "oo",
			"ެ": "e",
			"ޭ": "ey",
			"ޮ": "o",
			"ޯ": "oa",
			"ް": "",
			ა: "a",
			ბ: "b",
			გ: "g",
			დ: "d",
			ე: "e",
			ვ: "v",
			ზ: "z",
			თ: "t",
			ი: "i",
			კ: "k",
			ლ: "l",
			მ: "m",
			ნ: "n",
			ო: "o",
			პ: "p",
			ჟ: "zh",
			რ: "r",
			ს: "s",
			ტ: "t",
			უ: "u",
			ფ: "p",
			ქ: "k",
			ღ: "gh",
			ყ: "q",
			შ: "sh",
			ჩ: "ch",
			ც: "ts",
			ძ: "dz",
			წ: "ts",
			ჭ: "ch",
			ხ: "kh",
			ჯ: "j",
			ჰ: "h",
			α: "a",
			β: "v",
			γ: "g",
			δ: "d",
			ε: "e",
			ζ: "z",
			η: "i",
			θ: "th",
			ι: "i",
			κ: "k",
			λ: "l",
			μ: "m",
			ν: "n",
			ξ: "ks",
			ο: "o",
			π: "p",
			ρ: "r",
			σ: "s",
			τ: "t",
			υ: "y",
			φ: "f",
			χ: "x",
			ψ: "ps",
			ω: "o",
			ά: "a",
			έ: "e",
			ί: "i",
			ό: "o",
			ύ: "y",
			ή: "i",
			ώ: "o",
			ς: "s",
			ϊ: "i",
			ΰ: "y",
			ϋ: "y",
			ΐ: "i",
			Α: "A",
			Β: "B",
			Γ: "G",
			Δ: "D",
			Ε: "E",
			Ζ: "Z",
			Η: "I",
			Θ: "TH",
			Ι: "I",
			Κ: "K",
			Λ: "L",
			Μ: "M",
			Ν: "N",
			Ξ: "KS",
			Ο: "O",
			Π: "P",
			Ρ: "R",
			Σ: "S",
			Τ: "T",
			Υ: "Y",
			Φ: "F",
			Χ: "X",
			Ψ: "PS",
			Ω: "O",
			Ά: "A",
			Έ: "E",
			Ί: "I",
			Ό: "O",
			Ύ: "Y",
			Ή: "I",
			Ώ: "O",
			Ϊ: "I",
			Ϋ: "Y",
			ā: "a",
			ē: "e",
			ģ: "g",
			ī: "i",
			ķ: "k",
			ļ: "l",
			ņ: "n",
			ū: "u",
			Ā: "A",
			Ē: "E",
			Ģ: "G",
			Ī: "I",
			Ķ: "k",
			Ļ: "L",
			Ņ: "N",
			Ū: "U",
			Ќ: "Kj",
			ќ: "kj",
			Љ: "Lj",
			љ: "lj",
			Њ: "Nj",
			њ: "nj",
			Тс: "Ts",
			тс: "ts",
			ą: "a",
			ć: "c",
			ę: "e",
			ł: "l",
			ń: "n",
			ś: "s",
			ź: "z",
			ż: "z",
			Ą: "A",
			Ć: "C",
			Ę: "E",
			Ł: "L",
			Ń: "N",
			Ś: "S",
			Ź: "Z",
			Ż: "Z",
			Є: "Ye",
			І: "I",
			Ї: "Yi",
			Ґ: "G",
			є: "ye",
			і: "i",
			ї: "yi",
			ґ: "g",
			ă: "a",
			Ă: "A",
			ș: "s",
			Ș: "S",
			ț: "t",
			Ț: "T",
			ţ: "t",
			Ţ: "T",
			а: "a",
			б: "b",
			в: "v",
			г: "g",
			д: "d",
			е: "e",
			ё: "yo",
			ж: "zh",
			з: "z",
			и: "i",
			й: "i",
			к: "k",
			л: "l",
			м: "m",
			н: "n",
			о: "o",
			п: "p",
			р: "r",
			с: "s",
			т: "t",
			у: "u",
			ф: "f",
			х: "kh",
			ц: "c",
			ч: "ch",
			ш: "sh",
			щ: "sh",
			ъ: "",
			ы: "y",
			ь: "",
			э: "e",
			ю: "yu",
			я: "ya",
			А: "A",
			Б: "B",
			В: "V",
			Г: "G",
			Д: "D",
			Е: "E",
			Ё: "Yo",
			Ж: "Zh",
			З: "Z",
			И: "I",
			Й: "I",
			К: "K",
			Л: "L",
			М: "M",
			Н: "N",
			О: "O",
			П: "P",
			Р: "R",
			С: "S",
			Т: "T",
			У: "U",
			Ф: "F",
			Х: "Kh",
			Ц: "C",
			Ч: "Ch",
			Ш: "Sh",
			Щ: "Sh",
			Ъ: "",
			Ы: "Y",
			Ь: "",
			Э: "E",
			Ю: "Yu",
			Я: "Ya",
			ђ: "dj",
			ј: "j",
			ћ: "c",
			џ: "dz",
			Ђ: "Dj",
			Ј: "j",
			Ћ: "C",
			Џ: "Dz",
			ľ: "l",
			ĺ: "l",
			ŕ: "r",
			Ľ: "L",
			Ĺ: "L",
			Ŕ: "R",
			ş: "s",
			Ş: "S",
			ı: "i",
			İ: "I",
			ğ: "g",
			Ğ: "G",
			ả: "a",
			Ả: "A",
			ẳ: "a",
			Ẳ: "A",
			ẩ: "a",
			Ẩ: "A",
			đ: "d",
			Đ: "D",
			ẹ: "e",
			Ẹ: "E",
			ẽ: "e",
			Ẽ: "E",
			ẻ: "e",
			Ẻ: "E",
			ế: "e",
			Ế: "E",
			ề: "e",
			Ề: "E",
			ệ: "e",
			Ệ: "E",
			ễ: "e",
			Ễ: "E",
			ể: "e",
			Ể: "E",
			ỏ: "o",
			ọ: "o",
			Ọ: "o",
			ố: "o",
			Ố: "O",
			ồ: "o",
			Ồ: "O",
			ổ: "o",
			Ổ: "O",
			ộ: "o",
			Ộ: "O",
			ỗ: "o",
			Ỗ: "O",
			ơ: "o",
			Ơ: "O",
			ớ: "o",
			Ớ: "O",
			ờ: "o",
			Ờ: "O",
			ợ: "o",
			Ợ: "O",
			ỡ: "o",
			Ỡ: "O",
			Ở: "o",
			ở: "o",
			ị: "i",
			Ị: "I",
			ĩ: "i",
			Ĩ: "I",
			ỉ: "i",
			Ỉ: "i",
			ủ: "u",
			Ủ: "U",
			ụ: "u",
			Ụ: "U",
			ũ: "u",
			Ũ: "U",
			ư: "u",
			Ư: "U",
			ứ: "u",
			Ứ: "U",
			ừ: "u",
			Ừ: "U",
			ự: "u",
			Ự: "U",
			ữ: "u",
			Ữ: "U",
			ử: "u",
			Ử: "ư",
			ỷ: "y",
			Ỷ: "y",
			ỳ: "y",
			Ỳ: "Y",
			ỵ: "y",
			Ỵ: "Y",
			ỹ: "y",
			Ỹ: "Y",
			ạ: "a",
			Ạ: "A",
			ấ: "a",
			Ấ: "A",
			ầ: "a",
			Ầ: "A",
			ậ: "a",
			Ậ: "A",
			ẫ: "a",
			Ẫ: "A",
			ắ: "a",
			Ắ: "A",
			ằ: "a",
			Ằ: "A",
			ặ: "a",
			Ặ: "A",
			ẵ: "a",
			Ẵ: "A",
			"⓪": "0",
			"①": "1",
			"②": "2",
			"③": "3",
			"④": "4",
			"⑤": "5",
			"⑥": "6",
			"⑦": "7",
			"⑧": "8",
			"⑨": "9",
			"⑩": "10",
			"⑪": "11",
			"⑫": "12",
			"⑬": "13",
			"⑭": "14",
			"⑮": "15",
			"⑯": "16",
			"⑰": "17",
			"⑱": "18",
			"⑲": "18",
			"⑳": "18",
			"⓵": "1",
			"⓶": "2",
			"⓷": "3",
			"⓸": "4",
			"⓹": "5",
			"⓺": "6",
			"⓻": "7",
			"⓼": "8",
			"⓽": "9",
			"⓾": "10",
			"⓿": "0",
			"⓫": "11",
			"⓬": "12",
			"⓭": "13",
			"⓮": "14",
			"⓯": "15",
			"⓰": "16",
			"⓱": "17",
			"⓲": "18",
			"⓳": "19",
			"⓴": "20",
			"Ⓐ": "A",
			"Ⓑ": "B",
			"Ⓒ": "C",
			"Ⓓ": "D",
			"Ⓔ": "E",
			"Ⓕ": "F",
			"Ⓖ": "G",
			"Ⓗ": "H",
			"Ⓘ": "I",
			"Ⓙ": "J",
			"Ⓚ": "K",
			"Ⓛ": "L",
			"Ⓜ": "M",
			"Ⓝ": "N",
			"Ⓞ": "O",
			"Ⓟ": "P",
			"Ⓠ": "Q",
			"Ⓡ": "R",
			"Ⓢ": "S",
			"Ⓣ": "T",
			"Ⓤ": "U",
			"Ⓥ": "V",
			"Ⓦ": "W",
			"Ⓧ": "X",
			"Ⓨ": "Y",
			"Ⓩ": "Z",
			"ⓐ": "a",
			"ⓑ": "b",
			"ⓒ": "c",
			"ⓓ": "d",
			"ⓔ": "e",
			"ⓕ": "f",
			"ⓖ": "g",
			"ⓗ": "h",
			"ⓘ": "i",
			"ⓙ": "j",
			"ⓚ": "k",
			"ⓛ": "l",
			"ⓜ": "m",
			"ⓝ": "n",
			"ⓞ": "o",
			"ⓟ": "p",
			"ⓠ": "q",
			"ⓡ": "r",
			"ⓢ": "s",
			"ⓣ": "t",
			"ⓤ": "u",
			"ⓦ": "v",
			"ⓥ": "w",
			"ⓧ": "x",
			"ⓨ": "y",
			"ⓩ": "z",
			"“": "\"",
			"”": "\"",
			"‘": "'",
			"’": "'",
			"∂": "d",
			ƒ: "f",
			"™": "(TM)",
			"©": "(C)",
			œ: "oe",
			Œ: "OE",
			"®": "(R)",
			"†": "+",
			"℠": "(SM)",
			"…": "...",
			"˚": "o",
			º: "o",
			ª: "a",
			"•": "*",
			"၊": ",",
			"။": ".",
			$: "USD",
			"€": "EUR",
			"₢": "BRN",
			"₣": "FRF",
			"£": "GBP",
			"₤": "ITL",
			"₦": "NGN",
			"₧": "ESP",
			"₩": "KRW",
			"₪": "ILS",
			"₫": "VND",
			"₭": "LAK",
			"₮": "MNT",
			"₯": "GRD",
			"₱": "ARS",
			"₲": "PYG",
			"₳": "ARA",
			"₴": "UAH",
			"₵": "GHS",
			"¢": "cent",
			"¥": "CNY",
			元: "CNY",
			円: "YEN",
			"﷼": "IRR",
			"₠": "EWE",
			"฿": "THB",
			"₨": "INR",
			"₹": "INR",
			"₰": "PF",
			"₺": "TRY",
			"؋": "AFN",
			"₼": "AZN",
			лв: "BGN",
			"៛": "KHR",
			"₡": "CRC",
			"₸": "KZT",
			ден: "MKD",
			zł: "PLN",
			"₽": "RUB",
			"₾": "GEL"
		}, r = ["်", "ް"], i = {
			"ာ": "a",
			"ါ": "a",
			"ေ": "e",
			"ဲ": "e",
			"ိ": "i",
			"ီ": "i",
			"ို": "o",
			"ု": "u",
			"ူ": "u",
			"ေါင်": "aung",
			"ော": "aw",
			"ော်": "aw",
			"ေါ": "aw",
			"ေါ်": "aw",
			"်": "်",
			က်: "et",
			"ိုက်": "aik",
			"ောက်": "auk",
			င်: "in",
			"ိုင်": "aing",
			"ောင်": "aung",
			စ်: "it",
			ည်: "i",
			တ်: "at",
			"ိတ်": "eik",
			"ုတ်": "ok",
			"ွတ်": "ut",
			"ေတ်": "it",
			ဒ်: "d",
			"ိုဒ်": "ok",
			"ုဒ်": "ait",
			န်: "an",
			"ာန်": "an",
			"ိန်": "ein",
			"ုန်": "on",
			"ွန်": "un",
			ပ်: "at",
			"ိပ်": "eik",
			"ုပ်": "ok",
			"ွပ်": "ut",
			န်ုပ်: "nub",
			မ်: "an",
			"ိမ်": "ein",
			"ုမ်": "on",
			"ွမ်": "un",
			ယ်: "e",
			"ိုလ်": "ol",
			ဉ်: "in",
			"ံ": "an",
			"ိံ": "ein",
			"ုံ": "on",
			"ައް": "ah",
			"ަށް": "ah"
		}, a = {
			en: {},
			az: {
				ç: "c",
				ə: "e",
				ğ: "g",
				ı: "i",
				ö: "o",
				ş: "s",
				ü: "u",
				Ç: "C",
				Ə: "E",
				Ğ: "G",
				İ: "I",
				Ö: "O",
				Ş: "S",
				Ü: "U"
			},
			cs: {
				č: "c",
				ď: "d",
				ě: "e",
				ň: "n",
				ř: "r",
				š: "s",
				ť: "t",
				ů: "u",
				ž: "z",
				Č: "C",
				Ď: "D",
				Ě: "E",
				Ň: "N",
				Ř: "R",
				Š: "S",
				Ť: "T",
				Ů: "U",
				Ž: "Z"
			},
			fi: {
				ä: "a",
				Ä: "A",
				ö: "o",
				Ö: "O"
			},
			hu: {
				ä: "a",
				Ä: "A",
				ö: "o",
				Ö: "O",
				ü: "u",
				Ü: "U",
				ű: "u",
				Ű: "U"
			},
			lt: {
				ą: "a",
				č: "c",
				ę: "e",
				ė: "e",
				į: "i",
				š: "s",
				ų: "u",
				ū: "u",
				ž: "z",
				Ą: "A",
				Č: "C",
				Ę: "E",
				Ė: "E",
				Į: "I",
				Š: "S",
				Ų: "U",
				Ū: "U"
			},
			lv: {
				ā: "a",
				č: "c",
				ē: "e",
				ģ: "g",
				ī: "i",
				ķ: "k",
				ļ: "l",
				ņ: "n",
				š: "s",
				ū: "u",
				ž: "z",
				Ā: "A",
				Č: "C",
				Ē: "E",
				Ģ: "G",
				Ī: "i",
				Ķ: "k",
				Ļ: "L",
				Ņ: "N",
				Š: "S",
				Ū: "u",
				Ž: "Z"
			},
			pl: {
				ą: "a",
				ć: "c",
				ę: "e",
				ł: "l",
				ń: "n",
				ó: "o",
				ś: "s",
				ź: "z",
				ż: "z",
				Ą: "A",
				Ć: "C",
				Ę: "e",
				Ł: "L",
				Ń: "N",
				Ó: "O",
				Ś: "S",
				Ź: "Z",
				Ż: "Z"
			},
			sv: {
				ä: "a",
				Ä: "A",
				ö: "o",
				Ö: "O"
			},
			sk: {
				ä: "a",
				Ä: "A"
			},
			sr: {
				љ: "lj",
				њ: "nj",
				Љ: "Lj",
				Њ: "Nj",
				đ: "dj",
				Đ: "Dj"
			},
			tr: {
				Ü: "U",
				Ö: "O",
				ü: "u",
				ö: "o"
			}
		}, o = {
			ar: {
				"∆": "delta",
				"∞": "la-nihaya",
				"♥": "hob",
				"&": "wa",
				"|": "aw",
				"<": "aqal-men",
				">": "akbar-men",
				"∑": "majmou",
				"¤": "omla"
			},
			az: {},
			ca: {
				"∆": "delta",
				"∞": "infinit",
				"♥": "amor",
				"&": "i",
				"|": "o",
				"<": "menys que",
				">": "mes que",
				"∑": "suma dels",
				"¤": "moneda"
			},
			cs: {
				"∆": "delta",
				"∞": "nekonecno",
				"♥": "laska",
				"&": "a",
				"|": "nebo",
				"<": "mensi nez",
				">": "vetsi nez",
				"∑": "soucet",
				"¤": "mena"
			},
			de: {
				"∆": "delta",
				"∞": "unendlich",
				"♥": "Liebe",
				"&": "und",
				"|": "oder",
				"<": "kleiner als",
				">": "groesser als",
				"∑": "Summe von",
				"¤": "Waehrung"
			},
			dv: {
				"∆": "delta",
				"∞": "kolunulaa",
				"♥": "loabi",
				"&": "aai",
				"|": "noonee",
				"<": "ah vure kuda",
				">": "ah vure bodu",
				"∑": "jumula",
				"¤": "faisaa"
			},
			en: {
				"∆": "delta",
				"∞": "infinity",
				"♥": "love",
				"&": "and",
				"|": "or",
				"<": "less than",
				">": "greater than",
				"∑": "sum",
				"¤": "currency"
			},
			es: {
				"∆": "delta",
				"∞": "infinito",
				"♥": "amor",
				"&": "y",
				"|": "u",
				"<": "menos que",
				">": "mas que",
				"∑": "suma de los",
				"¤": "moneda"
			},
			fa: {
				"∆": "delta",
				"∞": "bi-nahayat",
				"♥": "eshgh",
				"&": "va",
				"|": "ya",
				"<": "kamtar-az",
				">": "bishtar-az",
				"∑": "majmooe",
				"¤": "vahed"
			},
			fi: {
				"∆": "delta",
				"∞": "aarettomyys",
				"♥": "rakkaus",
				"&": "ja",
				"|": "tai",
				"<": "pienempi kuin",
				">": "suurempi kuin",
				"∑": "summa",
				"¤": "valuutta"
			},
			fr: {
				"∆": "delta",
				"∞": "infiniment",
				"♥": "Amour",
				"&": "et",
				"|": "ou",
				"<": "moins que",
				">": "superieure a",
				"∑": "somme des",
				"¤": "monnaie"
			},
			ge: {
				"∆": "delta",
				"∞": "usasruloba",
				"♥": "siqvaruli",
				"&": "da",
				"|": "an",
				"<": "naklebi",
				">": "meti",
				"∑": "jami",
				"¤": "valuta"
			},
			gr: {},
			hu: {
				"∆": "delta",
				"∞": "vegtelen",
				"♥": "szerelem",
				"&": "es",
				"|": "vagy",
				"<": "kisebb mint",
				">": "nagyobb mint",
				"∑": "szumma",
				"¤": "penznem"
			},
			it: {
				"∆": "delta",
				"∞": "infinito",
				"♥": "amore",
				"&": "e",
				"|": "o",
				"<": "minore di",
				">": "maggiore di",
				"∑": "somma",
				"¤": "moneta"
			},
			lt: {
				"∆": "delta",
				"∞": "begalybe",
				"♥": "meile",
				"&": "ir",
				"|": "ar",
				"<": "maziau nei",
				">": "daugiau nei",
				"∑": "suma",
				"¤": "valiuta"
			},
			lv: {
				"∆": "delta",
				"∞": "bezgaliba",
				"♥": "milestiba",
				"&": "un",
				"|": "vai",
				"<": "mazak neka",
				">": "lielaks neka",
				"∑": "summa",
				"¤": "valuta"
			},
			my: {
				"∆": "kwahkhyaet",
				"∞": "asaonasme",
				"♥": "akhyait",
				"&": "nhin",
				"|": "tho",
				"<": "ngethaw",
				">": "kyithaw",
				"∑": "paungld",
				"¤": "ngwekye"
			},
			mk: {},
			nl: {
				"∆": "delta",
				"∞": "oneindig",
				"♥": "liefde",
				"&": "en",
				"|": "of",
				"<": "kleiner dan",
				">": "groter dan",
				"∑": "som",
				"¤": "valuta"
			},
			pl: {
				"∆": "delta",
				"∞": "nieskonczonosc",
				"♥": "milosc",
				"&": "i",
				"|": "lub",
				"<": "mniejsze niz",
				">": "wieksze niz",
				"∑": "suma",
				"¤": "waluta"
			},
			pt: {
				"∆": "delta",
				"∞": "infinito",
				"♥": "amor",
				"&": "e",
				"|": "ou",
				"<": "menor que",
				">": "maior que",
				"∑": "soma",
				"¤": "moeda"
			},
			ro: {
				"∆": "delta",
				"∞": "infinit",
				"♥": "dragoste",
				"&": "si",
				"|": "sau",
				"<": "mai mic ca",
				">": "mai mare ca",
				"∑": "suma",
				"¤": "valuta"
			},
			ru: {
				"∆": "delta",
				"∞": "beskonechno",
				"♥": "lubov",
				"&": "i",
				"|": "ili",
				"<": "menshe",
				">": "bolshe",
				"∑": "summa",
				"¤": "valjuta"
			},
			sk: {
				"∆": "delta",
				"∞": "nekonecno",
				"♥": "laska",
				"&": "a",
				"|": "alebo",
				"<": "menej ako",
				">": "viac ako",
				"∑": "sucet",
				"¤": "mena"
			},
			sr: {},
			tr: {
				"∆": "delta",
				"∞": "sonsuzluk",
				"♥": "ask",
				"&": "ve",
				"|": "veya",
				"<": "kucuktur",
				">": "buyuktur",
				"∑": "toplam",
				"¤": "para birimi"
			},
			uk: {
				"∆": "delta",
				"∞": "bezkinechnist",
				"♥": "lubov",
				"&": "i",
				"|": "abo",
				"<": "menshe",
				">": "bilshe",
				"∑": "suma",
				"¤": "valjuta"
			},
			vn: {
				"∆": "delta",
				"∞": "vo cuc",
				"♥": "yeu",
				"&": "va",
				"|": "hoac",
				"<": "nho hon",
				">": "lon hon",
				"∑": "tong",
				"¤": "tien te"
			}
		}, s = [
			";",
			"?",
			":",
			"@",
			"&",
			"=",
			"+",
			"$",
			",",
			"/"
		].join(""), c = [
			";",
			"?",
			":",
			"@",
			"&",
			"=",
			"+",
			"$",
			","
		].join(""), l = [
			".",
			"!",
			"~",
			"*",
			"'",
			"(",
			")"
		].join(""), u = function(e, t) {
			var u = "-", d = "", m = "", h = !0, g = {}, _, v, y, b, x, S, C, w, ee, te, T, ne, E, re, D = "";
			if (typeof e != "string") return "";
			if (typeof t == "string" && (u = t), C = o.en, w = a.en, typeof t == "object") for (T in _ = t.maintainCase || !1, g = t.custom && typeof t.custom == "object" ? t.custom : g, y = +t.truncate > 1 && t.truncate || !1, b = t.uric || !1, x = t.uricNoSlash || !1, S = t.mark || !1, h = !(t.symbols === !1 || t.lang === !1), u = t.separator || u, b && (D += s), x && (D += c), S && (D += l), C = t.lang && o[t.lang] && h ? o[t.lang] : h ? o.en : {}, w = t.lang && a[t.lang] ? a[t.lang] : t.lang === !1 || t.lang === !0 ? {} : a.en, t.titleCase && typeof t.titleCase.length == "number" && Array.prototype.toString.call(t.titleCase) ? (t.titleCase.forEach(function(e) {
				g[e + ""] = e + "";
			}), v = !0) : v = !!t.titleCase, t.custom && typeof t.custom.length == "number" && Array.prototype.toString.call(t.custom) && t.custom.forEach(function(e) {
				g[e + ""] = e + "";
			}), Object.keys(g).forEach(function(t) {
				var n = t.length > 1 ? RegExp("\\b" + f(t) + "\\b", "gi") : new RegExp(f(t), "gi");
				e = e.replace(n, g[t]);
			}), g) D += T;
			for (D += u, D = f(D), e = e.replace(/(^\s+|\s+$)/g, ""), E = !1, re = !1, te = 0, ne = e.length; te < ne; te++) T = e[te], p(T, g) ? E = !1 : w[T] ? (T = E && w[T].match(/[A-Za-z0-9]/) ? " " + w[T] : w[T], E = !1) : T in n ? (te + 1 < ne && r.indexOf(e[te + 1]) >= 0 ? (m += T, T = "") : re === !0 ? (T = i[m] + n[T], m = "") : T = E && n[T].match(/[A-Za-z0-9]/) ? " " + n[T] : n[T], E = !1, re = !1) : T in i ? (m += T, T = "", te === ne - 1 && (T = i[m]), re = !0) : C[T] && !(b && s.indexOf(T) !== -1) && !(x && c.indexOf(T) !== -1) ? (T = E || d.substr(-1).match(/[A-Za-z0-9]/) ? u + C[T] : C[T], T += e[te + 1] !== void 0 && e[te + 1].match(/[A-Za-z0-9]/) ? u : "", E = !0) : (re === !0 ? (T = i[m] + T, m = "", re = !1) : E && (/[A-Za-z0-9]/.test(T) || d.substr(-1).match(/A-Za-z0-9]/)) && (T = " " + T), E = !1), d += T.replace(RegExp("[^\\w\\s" + D + "_-]", "g"), u);
			return v && (d = d.replace(/(\w)(\S*)/g, function(e, t, n) {
				var r = t.toUpperCase() + (n === null ? "" : n);
				return Object.keys(g).indexOf(r.toLowerCase()) < 0 ? r : r.toLowerCase();
			})), d = d.replace(/\s+/g, u).replace(RegExp("\\" + u + "+", "g"), u).replace(RegExp("(^\\" + u + "+|\\" + u + "+$)", "g"), ""), y && d.length > y && (ee = d.charAt(y) === u, d = d.slice(0, y), ee || (d = d.slice(0, d.lastIndexOf(u)))), !_ && !v && (d = d.toLowerCase()), d;
		}, d = function(e) {
			return function(t) {
				return u(t, e);
			};
		}, f = function(e) {
			return e.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
		}, p = function(e, t) {
			for (var n in t) if (t[n] === e) return !0;
		};
		if (t !== void 0 && t.exports) t.exports = u, t.exports.createSlug = d;
		else if (typeof define < "u" && define.amd) define([], function() {
			return u;
		});
		else try {
			if (e.getSlug || e.createSlug) throw "speakingurl: globals exists /(getSlug|createSlug)/";
			e.getSlug = u, e.createSlug = d;
		} catch {}
	})(e);
} }), il = el({ "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/index.js"(e, t) {
	q(), t.exports = rl();
} });
q(), q(), q(), q(), q(), q(), q(), q();
function al(e) {
	let t = e.name || e._componentTag || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || e.__name;
	return t === "index" && e.__file?.endsWith("index.vue") ? "" : t;
}
function ol(e) {
	let t = e.__file;
	if (t) return Nc(Pc(t, ".vue"));
}
function sl(e, t) {
	return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = t, t;
}
function cl(e) {
	if (e.__VUE_DEVTOOLS_NEXT_APP_RECORD__) return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
	if (e.root) return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function ll(e) {
	let t = e.subTree?.type, n = cl(e);
	return n ? n?.types?.Fragment === t : !1;
}
function ul(e) {
	let t = al(e?.type || {});
	if (t) return t;
	if (e?.root === e) return "Root";
	for (let t in e.parent?.type?.components) if (e.parent.type.components[t] === e?.type) return sl(e, t);
	for (let t in e.appContext?.components) if (e.appContext.components[t] === e?.type) return sl(e, t);
	return ol(e?.type || {}) || "Anonymous Component";
}
function dl(e) {
	return `${e?.appContext?.app?.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__ ?? 0}:${e === e?.root ? "root" : e.uid}`;
}
function fl(e, t) {
	return t ||= `${e.id}:root`, e.instanceMap.get(t) || e.instanceMap.get(":root");
}
function pl() {
	let e = {
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		get width() {
			return e.right - e.left;
		},
		get height() {
			return e.bottom - e.top;
		}
	};
	return e;
}
var ml;
function hl(e) {
	return ml ||= document.createRange(), ml.selectNode(e), ml.getBoundingClientRect();
}
function gl(e) {
	let t = pl();
	if (!e.children) return t;
	for (let n = 0, r = e.children.length; n < r; n++) {
		let r = e.children[n], i;
		if (r.component) i = yl(r.component);
		else if (r.el) {
			let e = r.el;
			e.nodeType === 1 || e.getBoundingClientRect ? i = e.getBoundingClientRect() : e.nodeType === 3 && e.data.trim() && (i = hl(e));
		}
		i && _l(t, i);
	}
	return t;
}
function _l(e, t) {
	return (!e.top || t.top < e.top) && (e.top = t.top), (!e.bottom || t.bottom > e.bottom) && (e.bottom = t.bottom), (!e.left || t.left < e.left) && (e.left = t.left), (!e.right || t.right > e.right) && (e.right = t.right), e;
}
var vl = {
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	width: 0,
	height: 0
};
function yl(e) {
	let t = e.subTree.el;
	return typeof window > "u" ? vl : ll(e) ? gl(e.subTree) : t?.nodeType === 1 ? t?.getBoundingClientRect() : e.subTree.component ? yl(e.subTree.component) : vl;
}
q();
function bl(e) {
	return ll(e) ? xl(e.subTree) : e.subTree ? [e.subTree.el] : [];
}
function xl(e) {
	if (!e.children) return [];
	let t = [];
	return e.children.forEach((e) => {
		e.component ? t.push(...bl(e.component)) : e?.el && t.push(e.el);
	}), t;
}
var Sl = "__vue-devtools-component-inspector__", Cl = "__vue-devtools-component-inspector__card__", wl = "__vue-devtools-component-inspector__name__", Tl = "__vue-devtools-component-inspector__indicator__", El = {
	display: "block",
	zIndex: 2147483640,
	position: "fixed",
	backgroundColor: "#42b88325",
	border: "1px solid #42b88350",
	borderRadius: "5px",
	transition: "all 0.1s ease-in",
	pointerEvents: "none"
}, Dl = {
	fontFamily: "Arial, Helvetica, sans-serif",
	padding: "5px 8px",
	borderRadius: "4px",
	textAlign: "left",
	position: "absolute",
	left: 0,
	color: "#e9e9e9",
	fontSize: "14px",
	fontWeight: 600,
	lineHeight: "24px",
	backgroundColor: "#42b883",
	boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
}, Ol = {
	display: "inline-block",
	fontWeight: 400,
	fontStyle: "normal",
	fontSize: "12px",
	opacity: .7
};
function kl() {
	return document.getElementById(Sl);
}
function Al() {
	return document.getElementById(Cl);
}
function jl() {
	return document.getElementById(Tl);
}
function Ml() {
	return document.getElementById(wl);
}
function Nl(e) {
	return {
		left: `${Math.round(e.left * 100) / 100}px`,
		top: `${Math.round(e.top * 100) / 100}px`,
		width: `${Math.round(e.width * 100) / 100}px`,
		height: `${Math.round(e.height * 100) / 100}px`
	};
}
function Pl(e) {
	let t = document.createElement("div");
	t.id = e.elementId ?? Sl, Object.assign(t.style, {
		...El,
		...Nl(e.bounds),
		...e.style
	});
	let n = document.createElement("span");
	n.id = Cl, Object.assign(n.style, {
		...Dl,
		top: e.bounds.top < 35 ? 0 : "-35px"
	});
	let r = document.createElement("span");
	r.id = wl, r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`;
	let i = document.createElement("i");
	return i.id = Tl, i.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`, Object.assign(i.style, Ol), n.appendChild(r), n.appendChild(i), t.appendChild(n), document.body.appendChild(t), t;
}
function Fl(e) {
	let t = kl(), n = Al(), r = Ml(), i = jl();
	t && (Object.assign(t.style, {
		...El,
		...Nl(e.bounds)
	}), Object.assign(n.style, { top: e.bounds.top < 35 ? 0 : "-35px" }), r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`, i.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`);
}
function Il(e) {
	let t = yl(e);
	if (!t.width && !t.height) return;
	let n = ul(e);
	kl() ? Fl({
		bounds: t,
		name: n
	}) : Pl({
		bounds: t,
		name: n
	});
}
function Ll() {
	let e = kl();
	e && (e.style.display = "none");
}
var Rl = null;
function zl(e) {
	let t = e.target;
	if (t) {
		let e = t.__vueParentComponent;
		if (e && (Rl = e, e.vnode.el)) {
			let t = yl(e), n = ul(e);
			kl() ? Fl({
				bounds: t,
				name: n
			}) : Pl({
				bounds: t,
				name: n
			});
		}
	}
}
function Bl(e, t) {
	e.preventDefault(), e.stopPropagation(), Rl && t(dl(Rl));
}
var Vl = null;
function Hl() {
	Ll(), window.removeEventListener("mouseover", zl), window.removeEventListener("click", Vl, !0), Vl = null;
}
function Ul() {
	return window.addEventListener("mouseover", zl), new Promise((e) => {
		function t(n) {
			n.preventDefault(), n.stopPropagation(), Bl(n, (n) => {
				window.removeEventListener("click", t, !0), Vl = null, window.removeEventListener("mouseover", zl);
				let r = kl();
				r && (r.style.display = "none"), e(JSON.stringify({ id: n }));
			});
		}
		Vl = t, window.addEventListener("click", t, !0);
	});
}
function Wl(e) {
	let t = fl(Cu.value, e.id);
	if (t) {
		let [n] = bl(t);
		if (typeof n.scrollIntoView == "function") n.scrollIntoView({ behavior: "smooth" });
		else {
			let e = yl(t), n = document.createElement("div"), r = {
				...Nl(e),
				position: "absolute"
			};
			Object.assign(n.style, r), document.body.appendChild(n), n.scrollIntoView({ behavior: "smooth" }), setTimeout(() => {
				document.body.removeChild(n);
			}, 2e3);
		}
		setTimeout(() => {
			let n = yl(t);
			if (n.width || n.height) {
				let r = ul(t), i = kl();
				i ? Fl({
					...e,
					name: r,
					bounds: n
				}) : Pl({
					...e,
					name: r,
					bounds: n
				}), setTimeout(() => {
					i && (i.style.display = "none");
				}, 1500);
			}
		}, 1200);
	}
}
q();
var Gl;
(Gl = K).__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ ?? (Gl.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ = !0);
function Kl(e) {
	let t = 0, n = setInterval(() => {
		K.__VUE_INSPECTOR__ && (clearInterval(n), t += 30, e()), t >= 5e3 && clearInterval(n);
	}, 30);
}
function ql() {
	let e = K.__VUE_INSPECTOR__, t = e.openInEditor;
	e.openInEditor = async (...n) => {
		e.disable(), t(...n);
	};
}
function Jl() {
	return new Promise((e) => {
		function t() {
			ql(), e(K.__VUE_INSPECTOR__);
		}
		K.__VUE_INSPECTOR__ ? t() : Kl(() => {
			t();
		});
	});
}
q(), q();
function Yl(e) {
	return !!(e && e.__v_isReadonly);
}
function Xl(e) {
	return Yl(e) ? Xl(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Zl(e) {
	return !!(e && e.__v_isRef === !0);
}
function Ql(e) {
	let t = e && e.__v_raw;
	return t ? Ql(t) : e;
}
var $l = class {
	constructor() {
		this.refEditor = new eu();
	}
	set(e, t, n, r) {
		let i = Array.isArray(t) ? t : t.split(".");
		for (; i.length > 1;) {
			let t = i.shift();
			e = e instanceof Map ? e.get(t) : e instanceof Set ? Array.from(e.values())[t] : e[t], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
		}
		let a = i[0], o = this.refEditor.get(e)[a];
		r ? r(e, a, n) : this.refEditor.isRef(o) ? this.refEditor.set(o, n) : e[a] = n;
	}
	get(e, t) {
		let n = Array.isArray(t) ? t : t.split(".");
		for (let t = 0; t < n.length; t++) if (e = e instanceof Map ? e.get(n[t]) : e[n[t]], this.refEditor.isRef(e) && (e = this.refEditor.get(e)), !e) return;
		return e;
	}
	has(e, t, n = !1) {
		if (e === void 0) return !1;
		let r = Array.isArray(t) ? t.slice() : t.split("."), i = n ? 2 : 1;
		for (; e && r.length > i;) {
			let t = r.shift();
			e = e[t], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
		}
		return e != null && Object.prototype.hasOwnProperty.call(e, r[0]);
	}
	createDefaultSetCallback(e) {
		return (t, n, r) => {
			if ((e.remove || e.newKey) && (Array.isArray(t) ? t.splice(n, 1) : Ql(t) instanceof Map ? t.delete(n) : Ql(t) instanceof Set ? t.delete(Array.from(t.values())[n]) : Reflect.deleteProperty(t, n)), !e.remove) {
				let i = t[e.newKey || n];
				this.refEditor.isRef(i) ? this.refEditor.set(i, r) : Ql(t) instanceof Map ? t.set(e.newKey || n, r) : Ql(t) instanceof Set ? t.add(r) : t[e.newKey || n] = r;
			}
		};
	}
}, eu = class {
	set(e, t) {
		if (Zl(e)) e.value = t;
		else {
			if (e instanceof Set && Array.isArray(t)) {
				e.clear(), t.forEach((t) => e.add(t));
				return;
			}
			let n = Object.keys(t);
			if (e instanceof Map) {
				let r = new Set(e.keys());
				n.forEach((n) => {
					e.set(n, Reflect.get(t, n)), r.delete(n);
				}), r.forEach((t) => e.delete(t));
				return;
			}
			let r = new Set(Object.keys(e));
			n.forEach((n) => {
				Reflect.set(e, n, Reflect.get(t, n)), r.delete(n);
			}), r.forEach((t) => Reflect.deleteProperty(e, t));
		}
	}
	get(e) {
		return Zl(e) ? e.value : e;
	}
	isRef(e) {
		return Zl(e) || Xl(e);
	}
};
new $l(), q(), q(), q();
var tu = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function nu() {
	if (typeof window > "u" || !kc || typeof localStorage > "u" || localStorage === null) return {
		recordingState: !1,
		mouseEventEnabled: !1,
		keyboardEventEnabled: !1,
		componentEventEnabled: !1,
		performanceEventEnabled: !1,
		selected: ""
	};
	let e = localStorage.getItem === void 0 ? null : localStorage.getItem(tu);
	return e ? JSON.parse(e) : {
		recordingState: !1,
		mouseEventEnabled: !1,
		keyboardEventEnabled: !1,
		componentEventEnabled: !1,
		performanceEventEnabled: !1,
		selected: ""
	};
}
q(), q(), q();
var ru;
(ru = K).__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS ?? (ru.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS = []);
var iu = new Proxy(K.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, { get(e, t, n) {
	return Reflect.get(e, t, n);
} });
function au(e, t) {
	J.timelineLayersState[t.id] = !1, iu.push({
		...e,
		descriptorId: t.id,
		appRecord: cl(t.app)
	});
}
var ou;
(ou = K).__VUE_DEVTOOLS_KIT_INSPECTOR__ ?? (ou.__VUE_DEVTOOLS_KIT_INSPECTOR__ = []);
var su = new Proxy(K.__VUE_DEVTOOLS_KIT_INSPECTOR__, { get(e, t, n) {
	return Reflect.get(e, t, n);
} }), cu = Lc(() => {
	od.hooks.callHook("sendInspectorToClient", uu());
});
function lu(e, t) {
	su.push({
		options: e,
		descriptor: t,
		treeFilterPlaceholder: e.treeFilterPlaceholder ?? "Search tree...",
		stateFilterPlaceholder: e.stateFilterPlaceholder ?? "Search state...",
		treeFilter: "",
		selectedNodeId: "",
		appRecord: cl(t.app)
	}), cu();
}
function uu() {
	return su.filter((e) => e.descriptor.app === Cu.value.app).filter((e) => e.descriptor.id !== "components").map((e) => {
		let t = e.descriptor, n = e.options;
		return {
			id: n.id,
			label: n.label,
			logo: t.logo,
			icon: `custom-ic-baseline-${(n?.icon)?.replace(/_/g, "-")}`,
			packageName: t.packageName,
			homepage: t.homepage,
			pluginId: t.id
		};
	});
}
function du(e, t) {
	return su.find((n) => n.options.id === e && (t ? n.descriptor.app === t : !0));
}
function fu() {
	let e = Kc();
	e.hook("addInspector", ({ inspector: e, plugin: t }) => {
		lu(e, t.descriptor);
	});
	let t = Lc(async ({ inspectorId: t, plugin: n }) => {
		if (!t || !n?.descriptor?.app || J.highPerfModeEnabled) return;
		let r = du(t, n.descriptor.app), i = {
			app: n.descriptor.app,
			inspectorId: t,
			filter: r?.treeFilter || "",
			rootNodes: []
		};
		await new Promise((t) => {
			e.callHookWith(async (e) => {
				await Promise.all(e.map((e) => e(i))), t();
			}, "getInspectorTree");
		}), e.callHookWith(async (e) => {
			await Promise.all(e.map((e) => e({
				inspectorId: t,
				rootNodes: i.rootNodes
			})));
		}, "sendInspectorTreeToClient");
	}, 120);
	e.hook("sendInspectorTree", t);
	let n = Lc(async ({ inspectorId: t, plugin: n }) => {
		if (!t || !n?.descriptor?.app || J.highPerfModeEnabled) return;
		let r = du(t, n.descriptor.app), i = {
			app: n.descriptor.app,
			inspectorId: t,
			nodeId: r?.selectedNodeId || "",
			state: null
		}, a = { currentTab: `custom-inspector:${t}` };
		i.nodeId && await new Promise((t) => {
			e.callHookWith(async (e) => {
				await Promise.all(e.map((e) => e(i, a))), t();
			}, "getInspectorState");
		}), e.callHookWith(async (e) => {
			await Promise.all(e.map((e) => e({
				inspectorId: t,
				nodeId: i.nodeId,
				state: i.state
			})));
		}, "sendInspectorStateToClient");
	}, 120);
	return e.hook("sendInspectorState", n), e.hook("customInspectorSelectNode", ({ inspectorId: e, nodeId: t, plugin: n }) => {
		let r = du(e, n.descriptor.app);
		r && (r.selectedNodeId = t);
	}), e.hook("timelineLayerAdded", ({ options: e, plugin: t }) => {
		au(e, t.descriptor);
	}), e.hook("timelineEventAdded", ({ options: t, plugin: n }) => {
		J.highPerfModeEnabled || !J.timelineLayersState?.[n.descriptor.id] && ![
			"performance",
			"component-event",
			"keyboard",
			"mouse"
		].includes(t.layerId) || e.callHookWith(async (e) => {
			await Promise.all(e.map((e) => e(t)));
		}, "sendTimelineEventToClient");
	}), e.hook("getComponentInstances", async ({ app: e }) => {
		let t = e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
		if (!t) return null;
		let n = t.id.toString();
		return [...t.instanceMap].filter(([e]) => e.split(":")[0] === n).map(([, e]) => e);
	}), e.hook("getComponentBounds", async ({ instance: e }) => yl(e)), e.hook("getComponentName", ({ instance: e }) => ul(e)), e.hook("componentHighlight", ({ uid: e }) => {
		let t = Cu.value.instanceMap.get(e);
		t && Il(t);
	}), e.hook("componentUnhighlight", () => {
		Ll();
	}), e;
}
var pu;
(pu = K).__VUE_DEVTOOLS_KIT_APP_RECORDS__ ?? (pu.__VUE_DEVTOOLS_KIT_APP_RECORDS__ = []);
var mu;
(mu = K).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ ?? (mu.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = {});
var hu;
(hu = K).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ ?? (hu.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = "");
var gu;
(gu = K).__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ ?? (gu.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ = []);
var _u;
(_u = K).__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ ?? (_u.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ = []);
var vu = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function yu() {
	return {
		connected: !1,
		clientConnected: !1,
		vitePluginDetected: !0,
		appRecords: [],
		activeAppRecordId: "",
		tabs: [],
		commands: [],
		highPerfModeEnabled: !0,
		devtoolsClientDetected: {},
		perfUniqueGroupId: 0,
		timelineLayersState: nu()
	};
}
var bu;
(bu = K)[vu] ?? (bu[vu] = yu());
var xu = Lc((e) => {
	od.hooks.callHook("devtoolsStateUpdated", { state: e });
});
Lc((e, t) => {
	od.hooks.callHook("devtoolsConnectedUpdated", {
		state: e,
		oldState: t
	});
});
var Su = new Proxy(K.__VUE_DEVTOOLS_KIT_APP_RECORDS__, { get(e, t, n) {
	return t === "value" ? K.__VUE_DEVTOOLS_KIT_APP_RECORDS__ : K.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t];
} }), Cu = new Proxy(K.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, { get(e, t, n) {
	return t === "value" ? K.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : t === "id" ? K.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : K.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t];
} });
function wu() {
	xu({
		...K[vu],
		appRecords: Su.value,
		activeAppRecordId: Cu.id,
		tabs: K.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
		commands: K.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
	});
}
function Tu(e) {
	K.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = e, wu();
}
function Eu(e) {
	K.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = e, wu();
}
var J = new Proxy(K[vu], {
	get(e, t) {
		return t === "appRecords" ? Su : t === "activeAppRecordId" ? Cu.id : t === "tabs" ? K.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : t === "commands" ? K.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : K[vu][t];
	},
	deleteProperty(e, t) {
		return delete e[t], !0;
	},
	set(e, t, n) {
		return { ...K[vu] }, e[t] = n, K[vu][t] = n, !0;
	}
});
function Du(e = {}) {
	let { file: t, host: n, baseUrl: r = window.location.origin, line: i = 0, column: a = 0 } = e;
	if (t) {
		if (n === "chrome-extension") {
			let e = t.replace(/\\/g, "\\\\"), n = window.VUE_DEVTOOLS_CONFIG?.openInEditorHost ?? "/";
			fetch(`${n}__open-in-editor?file=${encodeURI(t)}`).then((t) => {
				if (!t.ok) {
					let t = `Opening component ${e} failed`;
					console.log(`%c${t}`, "color:red");
				}
			});
		} else if (J.vitePluginDetected) {
			let e = K.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__ ?? r;
			K.__VUE_INSPECTOR__.openInEditor(e, t, i, a);
		}
	}
}
q(), q(), q(), q(), q();
var Ou;
(Ou = K).__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ ?? (Ou.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ = []);
var ku = new Proxy(K.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, { get(e, t, n) {
	return Reflect.get(e, t, n);
} });
function Au(e) {
	let t = {};
	return Object.keys(e).forEach((n) => {
		t[n] = e[n].defaultValue;
	}), t;
}
function ju(e) {
	return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`;
}
function Mu(e) {
	return (ku.find((t) => t[0].id === e && !!t[0]?.settings)?.[0] ?? null)?.settings ?? null;
}
function Nu(e, t) {
	let n = ju(e);
	if (n) {
		let e = localStorage.getItem(n);
		if (e) return JSON.parse(e);
	}
	return Au(e ? (ku.find((t) => t[0].id === e)?.[0] ?? null)?.settings ?? {} : t);
}
function Pu(e, t) {
	let n = ju(e);
	localStorage.getItem(n) || localStorage.setItem(n, JSON.stringify(Au(t)));
}
function Fu(e, t, n) {
	let r = ju(e), i = localStorage.getItem(r), a = JSON.parse(i || "{}"), o = {
		...a,
		[t]: n
	};
	localStorage.setItem(r, JSON.stringify(o)), od.hooks.callHookWith((r) => {
		r.forEach((r) => r({
			pluginId: e,
			key: t,
			oldValue: a[t],
			newValue: n,
			settings: o
		}));
	}, "setPluginSettings");
}
q(), q(), q(), q(), q(), q(), q(), q(), q(), q(), q();
var Iu, Lu = (Iu = K).__VUE_DEVTOOLS_HOOK ?? (Iu.__VUE_DEVTOOLS_HOOK = Kc()), Ru = {
	on: {
		vueAppInit(e) {
			Lu.hook("app:init", e);
		},
		vueAppUnmount(e) {
			Lu.hook("app:unmount", e);
		},
		vueAppConnected(e) {
			Lu.hook("app:connected", e);
		},
		componentAdded(e) {
			return Lu.hook("component:added", e);
		},
		componentEmit(e) {
			return Lu.hook("component:emit", e);
		},
		componentUpdated(e) {
			return Lu.hook("component:updated", e);
		},
		componentRemoved(e) {
			return Lu.hook("component:removed", e);
		},
		setupDevtoolsPlugin(e) {
			Lu.hook("devtools-plugin:setup", e);
		},
		perfStart(e) {
			return Lu.hook("perf:start", e);
		},
		perfEnd(e) {
			return Lu.hook("perf:end", e);
		}
	},
	setupDevToolsPlugin(e, t) {
		return Lu.callHook("devtools-plugin:setup", e, t);
	}
}, zu = class {
	constructor({ plugin: e, ctx: t }) {
		this.hooks = t.hooks, this.plugin = e;
	}
	get on() {
		return {
			visitComponentTree: (e) => {
				this.hooks.hook("visitComponentTree", e);
			},
			inspectComponent: (e) => {
				this.hooks.hook("inspectComponent", e);
			},
			editComponentState: (e) => {
				this.hooks.hook("editComponentState", e);
			},
			getInspectorTree: (e) => {
				this.hooks.hook("getInspectorTree", e);
			},
			getInspectorState: (e) => {
				this.hooks.hook("getInspectorState", e);
			},
			editInspectorState: (e) => {
				this.hooks.hook("editInspectorState", e);
			},
			inspectTimelineEvent: (e) => {
				this.hooks.hook("inspectTimelineEvent", e);
			},
			timelineCleared: (e) => {
				this.hooks.hook("timelineCleared", e);
			},
			setPluginSettings: (e) => {
				this.hooks.hook("setPluginSettings", e);
			}
		};
	}
	notifyComponentUpdate(e) {
		if (J.highPerfModeEnabled) return;
		let t = uu().find((e) => e.packageName === this.plugin.descriptor.packageName);
		if (t?.id) {
			if (e) {
				let t = [
					e.appContext.app,
					e.uid,
					e.parent?.uid,
					e
				];
				Lu.callHook("component:updated", ...t);
			} else Lu.callHook("component:updated");
			this.hooks.callHook("sendInspectorState", {
				inspectorId: t.id,
				plugin: this.plugin
			});
		}
	}
	addInspector(e) {
		this.hooks.callHook("addInspector", {
			inspector: e,
			plugin: this.plugin
		}), this.plugin.descriptor.settings && Pu(e.id, this.plugin.descriptor.settings);
	}
	sendInspectorTree(e) {
		J.highPerfModeEnabled || this.hooks.callHook("sendInspectorTree", {
			inspectorId: e,
			plugin: this.plugin
		});
	}
	sendInspectorState(e) {
		J.highPerfModeEnabled || this.hooks.callHook("sendInspectorState", {
			inspectorId: e,
			plugin: this.plugin
		});
	}
	selectInspectorNode(e, t) {
		this.hooks.callHook("customInspectorSelectNode", {
			inspectorId: e,
			nodeId: t,
			plugin: this.plugin
		});
	}
	visitComponentTree(e) {
		return this.hooks.callHook("visitComponentTree", e);
	}
	now() {
		return J.highPerfModeEnabled ? 0 : Date.now();
	}
	addTimelineLayer(e) {
		this.hooks.callHook("timelineLayerAdded", {
			options: e,
			plugin: this.plugin
		});
	}
	addTimelineEvent(e) {
		J.highPerfModeEnabled || this.hooks.callHook("timelineEventAdded", {
			options: e,
			plugin: this.plugin
		});
	}
	getSettings(e) {
		return Nu(e ?? this.plugin.descriptor.id, this.plugin.descriptor.settings);
	}
	getComponentInstances(e) {
		return this.hooks.callHook("getComponentInstances", { app: e });
	}
	getComponentBounds(e) {
		return this.hooks.callHook("getComponentBounds", { instance: e });
	}
	getComponentName(e) {
		return this.hooks.callHook("getComponentName", { instance: e });
	}
	highlightElement(e) {
		let t = e.__VUE_DEVTOOLS_NEXT_UID__;
		return this.hooks.callHook("componentHighlight", { uid: t });
	}
	unhighlightElement() {
		return this.hooks.callHook("componentUnhighlight");
	}
};
q(), q(), q(), q();
var Bu = "__vue_devtool_undefined__", Vu = "__vue_devtool_infinity__", Hu = "__vue_devtool_negative_infinity__", Uu = "__vue_devtool_nan__";
q(), q(), Object.entries({
	[Bu]: "undefined",
	[Uu]: "NaN",
	[Vu]: "Infinity",
	[Hu]: "-Infinity"
}).reduce((e, [t, n]) => (e[n] = t, e), {}), q(), q(), q(), q(), q();
var Wu;
(Wu = K).__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ ?? (Wu.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ = /* @__PURE__ */ new Set());
function Gu(e, t) {
	return Ru.setupDevToolsPlugin(e, t);
}
function Ku(e, t) {
	let [n, r] = e;
	if (n.app !== t) return;
	let i = new zu({
		plugin: {
			setupFn: r,
			descriptor: n
		},
		ctx: od
	});
	n.packageName === "vuex" && i.on.editInspectorState((e) => {
		i.sendInspectorState(e.inspectorId);
	}), r(i);
}
function qu(e, t) {
	K.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e) || J.highPerfModeEnabled && !t?.inspectingComponent || (K.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e), ku.forEach((t) => {
		Ku(t, e);
	}));
}
q(), q();
var Ju = "__VUE_DEVTOOLS_ROUTER__", Yu = "__VUE_DEVTOOLS_ROUTER_INFO__", Xu;
(Xu = K).__VUE_DEVTOOLS_ROUTER_INFO__ ?? (Xu.__VUE_DEVTOOLS_ROUTER_INFO__ = {
	currentRoute: null,
	routes: []
});
var Zu;
(Zu = K).__VUE_DEVTOOLS_ROUTER__ ?? (Zu.__VUE_DEVTOOLS_ROUTER__ = {}), new Proxy(K[Yu], { get(e, t) {
	return K[Yu][t];
} }), new Proxy(K[Ju], { get(e, t) {
	if (t === "value") return K[Ju];
} });
function Qu(e) {
	let t = /* @__PURE__ */ new Map();
	return (e?.getRoutes() || []).filter((e) => !t.has(e.path) && t.set(e.path, 1));
}
function $u(e) {
	return e.map((e) => {
		let { path: t, name: n, children: r, meta: i } = e;
		return r?.length && (r = $u(r)), {
			path: t,
			name: n,
			children: r,
			meta: i
		};
	});
}
function ed(e) {
	if (e) {
		let { fullPath: t, hash: n, href: r, path: i, name: a, matched: o, params: s, query: c } = e;
		return {
			fullPath: t,
			hash: n,
			href: r,
			path: i,
			name: a,
			params: s,
			query: c,
			matched: $u(o)
		};
	}
	return e;
}
function td(e, t) {
	function n() {
		let t = e.app?.config.globalProperties.$router, n = ed(t?.currentRoute.value), r = $u(Qu(t)), i = console.warn;
		console.warn = () => {}, K[Yu] = {
			currentRoute: n ? Fc(n) : {},
			routes: Fc(r)
		}, K[Ju] = t, console.warn = i;
	}
	n(), Ru.on.componentUpdated(Lc(() => {
		t.value?.app === e.app && (n(), !J.highPerfModeEnabled && od.hooks.callHook("routerInfoUpdated", { state: K[Yu] }));
	}, 200));
}
function nd(e) {
	return {
		async getInspectorTree(t) {
			let n = {
				...t,
				app: Cu.value.app,
				rootNodes: []
			};
			return await new Promise((t) => {
				e.callHookWith(async (e) => {
					await Promise.all(e.map((e) => e(n))), t();
				}, "getInspectorTree");
			}), n.rootNodes;
		},
		async getInspectorState(t) {
			let n = {
				...t,
				app: Cu.value.app,
				state: null
			}, r = { currentTab: `custom-inspector:${t.inspectorId}` };
			return await new Promise((t) => {
				e.callHookWith(async (e) => {
					await Promise.all(e.map((e) => e(n, r))), t();
				}, "getInspectorState");
			}), n.state;
		},
		editInspectorState(t) {
			let n = new $l(), r = {
				...t,
				app: Cu.value.app,
				set: (e, r = t.path, i = t.state.value, a) => {
					n.set(e, r, i, a || n.createDefaultSetCallback(t.state));
				}
			};
			e.callHookWith((e) => {
				e.forEach((e) => e(r));
			}, "editInspectorState");
		},
		sendInspectorState(t) {
			let n = du(t);
			e.callHook("sendInspectorState", {
				inspectorId: t,
				plugin: {
					descriptor: n.descriptor,
					setupFn: () => ({})
				}
			});
		},
		inspectComponentInspector() {
			return Ul();
		},
		cancelInspectComponentInspector() {
			return Hl();
		},
		getComponentRenderCode(e) {
			let t = fl(Cu.value, e);
			if (t) return typeof t?.type == "function" ? t.type.toString() : t.render.toString();
		},
		scrollToComponent(e) {
			return Wl({ id: e });
		},
		openInEditor: Du,
		getVueInspector: Jl,
		toggleApp(e, t) {
			let n = Su.value.find((t) => t.id === e);
			n && (Eu(e), Tu(n), td(n, Cu), cu(), qu(n.app, t));
		},
		inspectDOM(e) {
			let t = fl(Cu.value, e);
			if (t) {
				let [e] = bl(t);
				e && (K.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = e);
			}
		},
		updatePluginSettings(e, t, n) {
			Fu(e, t, n);
		},
		getPluginSettings(e) {
			return {
				options: Mu(e),
				values: Nu(e)
			};
		}
	};
}
q();
var rd;
(rd = K).__VUE_DEVTOOLS_ENV__ ?? (rd.__VUE_DEVTOOLS_ENV__ = { vitePluginDetected: !1 });
var id = fu(), ad;
(ad = K).__VUE_DEVTOOLS_KIT_CONTEXT__ ?? (ad.__VUE_DEVTOOLS_KIT_CONTEXT__ = {
	hooks: id,
	get state() {
		return {
			...J,
			activeAppRecordId: Cu.id,
			activeAppRecord: Cu.value,
			appRecords: Su.value
		};
	},
	api: nd(id)
});
var od = K.__VUE_DEVTOOLS_KIT_CONTEXT__;
q(), nl(il(), 1);
var sd;
(sd = K).__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ ?? (sd.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ = {
	id: 0,
	appIds: /* @__PURE__ */ new Set()
}), q(), q();
function cd(e) {
	J.highPerfModeEnabled = e ?? !J.highPerfModeEnabled, !e && Cu.value && qu(Cu.value.app);
}
q(), q(), q();
function ld(e) {
	J.devtoolsClientDetected = {
		...J.devtoolsClientDetected,
		...e
	}, cd(!Object.values(J.devtoolsClientDetected).some(Boolean));
}
var ud;
(ud = K).__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ ?? (ud.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ = ld), q(), q(), q(), q(), q(), q(), q();
var dd = class {
	constructor() {
		this.keyToValue = /* @__PURE__ */ new Map(), this.valueToKey = /* @__PURE__ */ new Map();
	}
	set(e, t) {
		this.keyToValue.set(e, t), this.valueToKey.set(t, e);
	}
	getByKey(e) {
		return this.keyToValue.get(e);
	}
	getByValue(e) {
		return this.valueToKey.get(e);
	}
	clear() {
		this.keyToValue.clear(), this.valueToKey.clear();
	}
}, fd = class {
	constructor(e) {
		this.generateIdentifier = e, this.kv = new dd();
	}
	register(e, t) {
		this.kv.getByValue(e) || (t ||= this.generateIdentifier(e), this.kv.set(t, e));
	}
	clear() {
		this.kv.clear();
	}
	getIdentifier(e) {
		return this.kv.getByValue(e);
	}
	getValue(e) {
		return this.kv.getByKey(e);
	}
}, pd = class extends fd {
	constructor() {
		super((e) => e.name), this.classToAllowedProps = /* @__PURE__ */ new Map();
	}
	register(e, t) {
		typeof t == "object" ? (t.allowProps && this.classToAllowedProps.set(e, t.allowProps), super.register(e, t.identifier)) : super.register(e, t);
	}
	getAllowedProps(e) {
		return this.classToAllowedProps.get(e);
	}
};
q(), q();
function md(e) {
	if ("values" in Object) return Object.values(e);
	let t = [];
	for (let n in e) e.hasOwnProperty(n) && t.push(e[n]);
	return t;
}
function hd(e, t) {
	let n = md(e);
	if ("find" in n) return n.find(t);
	let r = n;
	for (let e = 0; e < r.length; e++) {
		let n = r[e];
		if (t(n)) return n;
	}
}
function gd(e, t) {
	Object.entries(e).forEach(([e, n]) => t(n, e));
}
function _d(e, t) {
	return e.indexOf(t) !== -1;
}
function vd(e, t) {
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		if (t(r)) return r;
	}
}
var yd = class {
	constructor() {
		this.transfomers = {};
	}
	register(e) {
		this.transfomers[e.name] = e;
	}
	findApplicable(e) {
		return hd(this.transfomers, (t) => t.isApplicable(e));
	}
	findByName(e) {
		return this.transfomers[e];
	}
};
q(), q();
var bd = (e) => Object.prototype.toString.call(e).slice(8, -1), xd = (e) => e === void 0, Sd = (e) => e === null, Cd = (e) => typeof e != "object" || !e || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null ? !0 : Object.getPrototypeOf(e) === Object.prototype, wd = (e) => Cd(e) && Object.keys(e).length === 0, Td = (e) => Array.isArray(e), Ed = (e) => typeof e == "string", Dd = (e) => typeof e == "number" && !isNaN(e), Od = (e) => typeof e == "boolean", kd = (e) => e instanceof RegExp, Ad = (e) => e instanceof Map, jd = (e) => e instanceof Set, Md = (e) => bd(e) === "Symbol", Nd = (e) => e instanceof Date && !isNaN(e.valueOf()), Pd = (e) => e instanceof Error, Fd = (e) => typeof e == "number" && isNaN(e), Id = (e) => Od(e) || Sd(e) || xd(e) || Dd(e) || Ed(e) || Md(e), Ld = (e) => typeof e == "bigint", Rd = (e) => e === Infinity || e === -Infinity, zd = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), Bd = (e) => e instanceof URL;
q();
var Vd = (e) => e.replace(/\./g, "\\."), Hd = (e) => e.map(String).map(Vd).join("."), Ud = (e) => {
	let t = [], n = "";
	for (let r = 0; r < e.length; r++) {
		let i = e.charAt(r);
		if (i === "\\" && e.charAt(r + 1) === ".") {
			n += ".", r++;
			continue;
		}
		if (i === ".") {
			t.push(n), n = "";
			continue;
		}
		n += i;
	}
	let r = n;
	return t.push(r), t;
};
q();
function Wd(e, t, n, r) {
	return {
		isApplicable: e,
		annotation: t,
		transform: n,
		untransform: r
	};
}
var Gd = [
	Wd(xd, "undefined", () => null, () => void 0),
	Wd(Ld, "bigint", (e) => e.toString(), (e) => typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)),
	Wd(Nd, "Date", (e) => e.toISOString(), (e) => new Date(e)),
	Wd(Pd, "Error", (e, t) => {
		let n = {
			name: e.name,
			message: e.message
		};
		return t.allowedErrorProps.forEach((t) => {
			n[t] = e[t];
		}), n;
	}, (e, t) => {
		let n = Error(e.message);
		return n.name = e.name, n.stack = e.stack, t.allowedErrorProps.forEach((t) => {
			n[t] = e[t];
		}), n;
	}),
	Wd(kd, "regexp", (e) => "" + e, (e) => {
		let t = e.slice(1, e.lastIndexOf("/")), n = e.slice(e.lastIndexOf("/") + 1);
		return new RegExp(t, n);
	}),
	Wd(jd, "set", (e) => [...e.values()], (e) => new Set(e)),
	Wd(Ad, "map", (e) => [...e.entries()], (e) => new Map(e)),
	Wd((e) => Fd(e) || Rd(e), "number", (e) => Fd(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number),
	Wd((e) => e === 0 && 1 / e == -Infinity, "number", () => "-0", Number),
	Wd(Bd, "URL", (e) => e.toString(), (e) => new URL(e))
];
function Kd(e, t, n, r) {
	return {
		isApplicable: e,
		annotation: t,
		transform: n,
		untransform: r
	};
}
var qd = Kd((e, t) => Md(e) ? !!t.symbolRegistry.getIdentifier(e) : !1, (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t, n) => {
	let r = n.symbolRegistry.getValue(t[1]);
	if (!r) throw Error("Trying to deserialize unknown symbol");
	return r;
}), Jd = [
	Int8Array,
	Uint8Array,
	Int16Array,
	Uint16Array,
	Int32Array,
	Uint32Array,
	Float32Array,
	Float64Array,
	Uint8ClampedArray
].reduce((e, t) => (e[t.name] = t, e), {}), Yd = Kd(zd, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t) => {
	let n = Jd[t[1]];
	if (!n) throw Error("Trying to deserialize unknown typed array");
	return new n(e);
});
function Xd(e, t) {
	return e?.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : !1;
}
var Zd = Kd(Xd, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
	let n = t.classRegistry.getAllowedProps(e.constructor);
	if (!n) return { ...e };
	let r = {};
	return n.forEach((t) => {
		r[t] = e[t];
	}), r;
}, (e, t, n) => {
	let r = n.classRegistry.getValue(t[1]);
	if (!r) throw Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);
	return Object.assign(Object.create(r.prototype), e);
}), Qd = Kd((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, n) => {
	let r = n.customTransformerRegistry.findByName(t[1]);
	if (!r) throw Error("Trying to deserialize unknown custom value");
	return r.deserialize(e);
}), $d = [
	Zd,
	qd,
	Qd,
	Yd
], ef = (e, t) => {
	let n = vd($d, (n) => n.isApplicable(e, t));
	if (n) return {
		value: n.transform(e, t),
		type: n.annotation(e, t)
	};
	let r = vd(Gd, (n) => n.isApplicable(e, t));
	if (r) return {
		value: r.transform(e, t),
		type: r.annotation
	};
}, tf = {};
Gd.forEach((e) => {
	tf[e.annotation] = e;
});
var nf = (e, t, n) => {
	if (Td(t)) switch (t[0]) {
		case "symbol": return qd.untransform(e, t, n);
		case "class": return Zd.untransform(e, t, n);
		case "custom": return Qd.untransform(e, t, n);
		case "typed-array": return Yd.untransform(e, t, n);
		default: throw Error("Unknown transformation: " + t);
	}
	else {
		let r = tf[t];
		if (!r) throw Error("Unknown transformation: " + t);
		return r.untransform(e, n);
	}
};
q();
var rf = (e, t) => {
	if (t > e.size) throw Error("index out of bounds");
	let n = e.keys();
	for (; t > 0;) n.next(), t--;
	return n.next().value;
};
function af(e) {
	if (_d(e, "__proto__")) throw Error("__proto__ is not allowed as a property");
	if (_d(e, "prototype")) throw Error("prototype is not allowed as a property");
	if (_d(e, "constructor")) throw Error("constructor is not allowed as a property");
}
var of = (e, t) => {
	af(t);
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (jd(e)) e = rf(e, +r);
		else if (Ad(e)) {
			let i = +r, a = +t[++n] == 0 ? "key" : "value", o = rf(e, i);
			switch (a) {
				case "key":
					e = o;
					break;
				case "value":
					e = e.get(o);
					break;
			}
		} else e = e[r];
	}
	return e;
}, sf = (e, t, n) => {
	if (af(t), t.length === 0) return n(e);
	let r = e;
	for (let e = 0; e < t.length - 1; e++) {
		let n = t[e];
		if (Td(r)) {
			let e = +n;
			r = r[e];
		} else if (Cd(r)) r = r[n];
		else if (jd(r)) {
			let e = +n;
			r = rf(r, e);
		} else if (Ad(r)) {
			if (e === t.length - 2) break;
			let i = +n, a = +t[++e] == 0 ? "key" : "value", o = rf(r, i);
			switch (a) {
				case "key":
					r = o;
					break;
				case "value":
					r = r.get(o);
					break;
			}
		}
	}
	let i = t[t.length - 1];
	if (Td(r) ? r[+i] = n(r[+i]) : Cd(r) && (r[i] = n(r[i])), jd(r)) {
		let e = rf(r, +i), t = n(e);
		e !== t && (r.delete(e), r.add(t));
	}
	if (Ad(r)) {
		let e = +t[t.length - 2], a = rf(r, e);
		switch (+i == 0 ? "key" : "value") {
			case "key": {
				let e = n(a);
				r.set(e, r.get(a)), e !== a && r.delete(a);
				break;
			}
			case "value":
				r.set(a, n(r.get(a)));
				break;
		}
	}
	return e;
};
function cf(e, t, n = []) {
	if (!e) return;
	if (!Td(e)) {
		gd(e, (e, r) => cf(e, t, [...n, ...Ud(r)]));
		return;
	}
	let [r, i] = e;
	i && gd(i, (e, r) => {
		cf(e, t, [...n, ...Ud(r)]);
	}), t(r, n);
}
function lf(e, t, n) {
	return cf(t, (t, r) => {
		e = sf(e, r, (e) => nf(e, t, n));
	}), e;
}
function uf(e, t) {
	function n(t, n) {
		let r = of(e, Ud(n));
		t.map(Ud).forEach((t) => {
			e = sf(e, t, () => r);
		});
	}
	if (Td(t)) {
		let [r, i] = t;
		r.forEach((t) => {
			e = sf(e, Ud(t), () => e);
		}), i && gd(i, n);
	} else gd(t, n);
	return e;
}
var df = (e, t) => Cd(e) || Td(e) || Ad(e) || jd(e) || Xd(e, t);
function ff(e, t, n) {
	let r = n.get(e);
	r ? r.push(t) : n.set(e, [t]);
}
function pf(e, t) {
	let n = {}, r;
	return e.forEach((e) => {
		if (e.length <= 1) return;
		t || (e = e.map((e) => e.map(String)).sort((e, t) => e.length - t.length));
		let [i, ...a] = e;
		i.length === 0 ? r = a.map(Hd) : n[Hd(i)] = a.map(Hd);
	}), r ? wd(n) ? [r] : [r, n] : wd(n) ? void 0 : n;
}
var mf = (e, t, n, r, i = [], a = [], o = /* @__PURE__ */ new Map()) => {
	let s = Id(e);
	if (!s) {
		ff(e, i, t);
		let n = o.get(e);
		if (n) return r ? { transformedValue: null } : n;
	}
	if (!df(e, n)) {
		let t = ef(e, n), r = t ? {
			transformedValue: t.value,
			annotations: [t.type]
		} : { transformedValue: e };
		return s || o.set(e, r), r;
	}
	if (_d(a, e)) return { transformedValue: null };
	let c = ef(e, n), l = c?.value ?? e, u = Td(l) ? [] : {}, d = {};
	gd(l, (s, c) => {
		if (c === "__proto__" || c === "constructor" || c === "prototype") throw Error(`Detected property ${c}. This is a prototype pollution risk, please remove it from your object.`);
		let l = mf(s, t, n, r, [...i, c], [...a, e], o);
		u[c] = l.transformedValue, Td(l.annotations) ? d[c] = l.annotations : Cd(l.annotations) && gd(l.annotations, (e, t) => {
			d[Vd(c) + "." + t] = e;
		});
	});
	let f = wd(d) ? {
		transformedValue: u,
		annotations: c ? [c.type] : void 0
	} : {
		transformedValue: u,
		annotations: c ? [c.type, d] : d
	};
	return s || o.set(e, f), f;
};
q(), q();
function hf(e) {
	return Object.prototype.toString.call(e).slice(8, -1);
}
function gf(e) {
	return hf(e) === "Array";
}
function _f(e) {
	if (hf(e) !== "Object") return !1;
	let t = Object.getPrototypeOf(e);
	return !!t && t.constructor === Object && t === Object.prototype;
}
function vf(e, t, n, r, i) {
	let a = {}.propertyIsEnumerable.call(r, t) ? "enumerable" : "nonenumerable";
	a === "enumerable" && (e[t] = n), i && a === "nonenumerable" && Object.defineProperty(e, t, {
		value: n,
		enumerable: !1,
		writable: !0,
		configurable: !0
	});
}
function yf(e, t = {}) {
	if (gf(e)) return e.map((e) => yf(e, t));
	if (!_f(e)) return e;
	let n = Object.getOwnPropertyNames(e), r = Object.getOwnPropertySymbols(e);
	return [...n, ...r].reduce((n, r) => {
		if (gf(t.props) && !t.props.includes(r)) return n;
		let i = e[r];
		return vf(n, r, yf(i, t), e, t.nonenumerable), n;
	}, {});
}
var Y = class {
	constructor({ dedupe: e = !1 } = {}) {
		this.classRegistry = new pd(), this.symbolRegistry = new fd((e) => e.description ?? ""), this.customTransformerRegistry = new yd(), this.allowedErrorProps = [], this.dedupe = e;
	}
	serialize(e) {
		let t = /* @__PURE__ */ new Map(), n = mf(e, t, this, this.dedupe), r = { json: n.transformedValue };
		n.annotations && (r.meta = {
			...r.meta,
			values: n.annotations
		});
		let i = pf(t, this.dedupe);
		return i && (r.meta = {
			...r.meta,
			referentialEqualities: i
		}), r;
	}
	deserialize(e) {
		let { json: t, meta: n } = e, r = yf(t);
		return n?.values && (r = lf(r, n.values, this)), n?.referentialEqualities && (r = uf(r, n.referentialEqualities)), r;
	}
	stringify(e) {
		return JSON.stringify(this.serialize(e));
	}
	parse(e) {
		return this.deserialize(JSON.parse(e));
	}
	registerClass(e, t) {
		this.classRegistry.register(e, t);
	}
	registerSymbol(e, t) {
		this.symbolRegistry.register(e, t);
	}
	registerCustom(e, t) {
		this.customTransformerRegistry.register({
			name: t,
			...e
		});
	}
	allowErrorProps(...e) {
		this.allowedErrorProps.push(...e);
	}
};
Y.defaultInstance = new Y(), Y.serialize = Y.defaultInstance.serialize.bind(Y.defaultInstance), Y.deserialize = Y.defaultInstance.deserialize.bind(Y.defaultInstance), Y.stringify = Y.defaultInstance.stringify.bind(Y.defaultInstance), Y.parse = Y.defaultInstance.parse.bind(Y.defaultInstance), Y.registerClass = Y.defaultInstance.registerClass.bind(Y.defaultInstance), Y.registerSymbol = Y.defaultInstance.registerSymbol.bind(Y.defaultInstance), Y.registerCustom = Y.defaultInstance.registerCustom.bind(Y.defaultInstance), Y.allowErrorProps = Y.defaultInstance.allowErrorProps.bind(Y.defaultInstance), Y.serialize, Y.deserialize, Y.stringify, Y.parse, Y.registerClass, Y.registerCustom, Y.registerSymbol, Y.allowErrorProps, q(), q(), q(), q(), q(), q(), q(), q(), q(), q(), q(), q(), q(), q(), q(), q(), q(), q(), q(), q(), q(), q(), q();
var bf;
(bf = K).__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ ?? (bf.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ = []);
var xf;
(xf = K).__VUE_DEVTOOLS_KIT_RPC_CLIENT__ ?? (xf.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ = null);
var Sf;
(Sf = K).__VUE_DEVTOOLS_KIT_RPC_SERVER__ ?? (Sf.__VUE_DEVTOOLS_KIT_RPC_SERVER__ = null);
var Cf;
(Cf = K).__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ ?? (Cf.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ = null);
var wf;
(wf = K).__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ ?? (wf.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ = null);
var Tf;
(Tf = K).__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ ?? (Tf.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ = null), q(), q(), q(), q(), q(), q(), q();
//#endregion
//#region node_modules/pinia/dist/pinia.mjs
var Ef = typeof window < "u", Df, Of = (e) => Df = e;
process.env.NODE_ENV;
var kf = process.env.NODE_ENV === "production" ? Symbol() : Symbol("pinia");
function Af(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var jf;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(jf ||= {});
var Mf = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Nf(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function Pf(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		zf(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function Ff(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function If(e) {
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
var Lf = typeof navigator == "object" ? navigator : { userAgent: "" }, Rf = /Macintosh/.test(Lf.userAgent) && /AppleWebKit/.test(Lf.userAgent) && !/Safari/.test(Lf.userAgent), zf = Ef ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Rf ? Bf : "msSaveOrOpenBlob" in Lf ? Vf : Hf : () => {};
function Bf(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? If(r) : Ff(r.href) ? Pf(e, t, n) : (r.target = "_blank", If(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		If(r);
	}, 0));
}
function Vf(e, t = "download", n) {
	if (typeof e == "string") if (Ff(e)) Pf(e, t, n);
	else {
		let t = document.createElement("a");
		t.href = e, t.target = "_blank", setTimeout(function() {
			If(t);
		});
	}
	else navigator.msSaveOrOpenBlob(Nf(e, n), t);
}
function Hf(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return Pf(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(Mf.HTMLElement)) || "safari" in Mf, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || Rf) && typeof FileReader < "u") {
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
function X(e, t) {
	let n = "🍍 " + e;
	typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, t) : t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
function Uf(e) {
	return "_a" in e && "install" in e;
}
function Wf() {
	if (!("clipboard" in navigator)) return X("Your browser doesn't support the Clipboard API", "error"), !0;
}
function Gf(e) {
	return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (X("You need to activate the \"Emulate a focused page\" setting in the \"Rendering\" panel of devtools.", "warn"), !0) : !1;
}
async function Kf(e) {
	if (!Wf()) try {
		await navigator.clipboard.writeText(JSON.stringify(e.state.value)), X("Global state copied to clipboard.");
	} catch (e) {
		if (Gf(e)) return;
		X("Failed to serialize the state. Check the console for more details.", "error"), console.error(e);
	}
}
async function qf(e) {
	if (!Wf()) try {
		Qf(e, JSON.parse(await navigator.clipboard.readText())), X("Global state pasted from clipboard.");
	} catch (e) {
		if (Gf(e)) return;
		X("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(e);
	}
}
async function Jf(e) {
	try {
		zf(new Blob([JSON.stringify(e.state.value)], { type: "text/plain;charset=utf-8" }), "pinia-state.json");
	} catch (e) {
		X("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(e);
	}
}
var Yf;
function Xf() {
	Yf || (Yf = document.createElement("input"), Yf.type = "file", Yf.accept = ".json");
	function e() {
		return new Promise((e, t) => {
			Yf.onchange = async () => {
				let t = Yf.files;
				if (!t) return e(null);
				let n = t.item(0);
				return e(n ? {
					text: await n.text(),
					file: n
				} : null);
			}, Yf.oncancel = () => e(null), Yf.onerror = t, Yf.click();
		});
	}
	return e;
}
async function Zf(e) {
	try {
		let t = await Xf()();
		if (!t) return;
		let { text: n, file: r } = t;
		Qf(e, JSON.parse(n)), X(`Global state imported from "${r.name}".`);
	} catch (e) {
		X("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(e);
	}
}
function Qf(e, t) {
	for (let n in t) {
		let r = e.state.value[n];
		r ? Object.assign(r, t[n]) : e.state.value[n] = t[n];
	}
}
function $f(e) {
	return { _custom: { display: e } };
}
var ep = "🍍 Pinia (root)", tp = "_root";
function np(e) {
	return Uf(e) ? {
		id: tp,
		label: ep
	} : {
		id: e.$id,
		label: e.$id
	};
}
function rp(e) {
	if (Uf(e)) {
		let t = Array.from(e._s.keys()), n = e._s;
		return {
			state: t.map((t) => ({
				editable: !0,
				key: t,
				value: e.state.value[t]
			})),
			getters: t.filter((e) => n.get(e)._getters).map((e) => {
				let t = n.get(e);
				return {
					editable: !1,
					key: e,
					value: t._getters.reduce((e, n) => (e[n] = t[n], e), {})
				};
			})
		};
	}
	let t = { state: Object.keys(e.$state).map((t) => ({
		editable: !0,
		key: t,
		value: e.$state[t]
	})) };
	return e._getters && e._getters.length && (t.getters = e._getters.map((t) => ({
		editable: !1,
		key: t,
		value: e[t]
	}))), e._customProperties.size && (t.customProperties = Array.from(e._customProperties).map((t) => ({
		editable: !0,
		key: t,
		value: e[t]
	}))), t;
}
function ip(e) {
	return e ? Array.isArray(e) ? e.reduce((e, t) => (e.keys.push(t.key), e.operations.push(t.type), e.oldValue[t.key] = t.oldValue, e.newValue[t.key] = t.newValue, e), {
		oldValue: {},
		keys: [],
		operations: [],
		newValue: {}
	}) : {
		operation: $f(e.type),
		key: $f(e.key),
		oldValue: e.oldValue,
		newValue: e.newValue
	} : {};
}
function ap(e) {
	switch (e) {
		case jf.direct: return "mutation";
		case jf.patchFunction: return "$patch";
		case jf.patchObject: return "$patch";
		default: return "unknown";
	}
}
var op = !0, sp = [], cp = "pinia:mutations", lp = "pinia", { assign: up } = Object, dp = (e) => "🍍 " + e;
function fp(e, t) {
	Gu({
		id: "dev.esm.pinia",
		label: "Pinia 🍍",
		logo: "https://pinia.vuejs.org/logo.svg",
		packageName: "pinia",
		homepage: "https://pinia.vuejs.org",
		componentStateTypes: sp,
		app: e
	}, (n) => {
		typeof n.now != "function" && X("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
			id: cp,
			label: "Pinia 🍍",
			color: 15064968
		}), n.addInspector({
			id: lp,
			label: "Pinia 🍍",
			icon: "storage",
			treeFilterPlaceholder: "Search stores",
			actions: [
				{
					icon: "content_copy",
					action: () => {
						Kf(t);
					},
					tooltip: "Serialize and copy the state"
				},
				{
					icon: "content_paste",
					action: async () => {
						await qf(t), n.sendInspectorTree(lp), n.sendInspectorState(lp);
					},
					tooltip: "Replace the state with the content of your clipboard"
				},
				{
					icon: "save",
					action: () => {
						Jf(t);
					},
					tooltip: "Save the state as a JSON file"
				},
				{
					icon: "folder_open",
					action: async () => {
						await Zf(t), n.sendInspectorTree(lp), n.sendInspectorState(lp);
					},
					tooltip: "Import the state from a JSON file"
				}
			],
			nodeActions: [{
				icon: "restore",
				tooltip: "Reset the state (with \"$reset\")",
				action: (e) => {
					let n = t._s.get(e);
					n ? typeof n.$reset == "function" ? (n.$reset(), X(`Store "${e}" reset.`)) : X(`Cannot reset "${e}" store because it doesn't have a "$reset" method implemented.`, "warn") : X(`Cannot reset "${e}" store because it wasn't found.`, "warn");
				}
			}]
		}), n.on.inspectComponent((e) => {
			let t = e.componentInstance && e.componentInstance.proxy;
			if (t && t._pStores) {
				let t = e.componentInstance.proxy._pStores;
				Object.values(t).forEach((t) => {
					e.instanceData.state.push({
						type: dp(t.$id),
						key: "state",
						editable: !0,
						value: t._isOptionsAPI ? { _custom: {
							value: /* @__PURE__ */ P(t.$state),
							actions: [{
								icon: "restore",
								tooltip: "Reset the state of this store",
								action: () => t.$reset()
							}]
						} } : Object.keys(t.$state).reduce((e, n) => (e[n] = t.$state[n], e), {})
					}), t._getters && t._getters.length && e.instanceData.state.push({
						type: dp(t.$id),
						key: "getters",
						editable: !1,
						value: t._getters.reduce((e, n) => {
							try {
								e[n] = t[n];
							} catch (t) {
								e[n] = t;
							}
							return e;
						}, {})
					});
				});
			}
		}), n.on.getInspectorTree((n) => {
			if (n.app === e && n.inspectorId === lp) {
				let e = [t];
				e = e.concat(Array.from(t._s.values())), n.rootNodes = (n.filter ? e.filter((e) => "$id" in e ? e.$id.toLowerCase().includes(n.filter.toLowerCase()) : ep.toLowerCase().includes(n.filter.toLowerCase())) : e).map(np);
			}
		}), globalThis.$pinia = t, n.on.getInspectorState((n) => {
			if (n.app === e && n.inspectorId === lp) {
				let e = n.nodeId === tp ? t : t._s.get(n.nodeId);
				if (!e) return;
				e && (n.nodeId !== tp && (globalThis.$store = /* @__PURE__ */ P(e)), n.state = rp(e));
			}
		}), n.on.editInspectorState((n) => {
			if (n.app === e && n.inspectorId === lp) {
				let e = n.nodeId === tp ? t : t._s.get(n.nodeId);
				if (!e) return X(`store "${n.nodeId}" not found`, "error");
				let { path: r } = n;
				Uf(e) ? r.unshift("state") : (r.length !== 1 || !e._customProperties.has(r[0]) || r[0] in e.$state) && r.unshift("$state"), op = !1, n.set(e, r, n.state.value), op = !0;
			}
		}), n.on.editComponentState((e) => {
			if (e.type.startsWith("🍍")) {
				let n = e.type.replace(/^🍍\s*/, ""), r = t._s.get(n);
				if (!r) return X(`store "${n}" not found`, "error");
				let { path: i } = e;
				if (i[0] !== "state") return X(`Invalid path for store "${n}":\n${i}\nOnly state can be modified.`);
				i[0] = "$state", op = !1, e.set(r, i, e.state.value), op = !0;
			}
		});
	});
}
function pp(e, t) {
	sp.includes(dp(t.$id)) || sp.push(dp(t.$id)), Gu({
		id: "dev.esm.pinia",
		label: "Pinia 🍍",
		logo: "https://pinia.vuejs.org/logo.svg",
		packageName: "pinia",
		homepage: "https://pinia.vuejs.org",
		componentStateTypes: sp,
		app: e,
		settings: { logStoreChanges: {
			label: "Notify about new/deleted stores",
			type: "boolean",
			defaultValue: !0
		} }
	}, (e) => {
		let n = typeof e.now == "function" ? e.now.bind(e) : Date.now;
		t.$onAction(({ after: r, onError: i, name: a, args: o }) => {
			let s = mp++;
			e.addTimelineEvent({
				layerId: cp,
				event: {
					time: n(),
					title: "🛫 " + a,
					subtitle: "start",
					data: {
						store: $f(t.$id),
						action: $f(a),
						args: o
					},
					groupId: s
				}
			}), r((r) => {
				hp = void 0, e.addTimelineEvent({
					layerId: cp,
					event: {
						time: n(),
						title: "🛬 " + a,
						subtitle: "end",
						data: {
							store: $f(t.$id),
							action: $f(a),
							args: o,
							result: r
						},
						groupId: s
					}
				});
			}), i((r) => {
				hp = void 0, e.addTimelineEvent({
					layerId: cp,
					event: {
						time: n(),
						logType: "error",
						title: "💥 " + a,
						subtitle: "end",
						data: {
							store: $f(t.$id),
							action: $f(a),
							args: o,
							error: r
						},
						groupId: s
					}
				});
			});
		}, !0), t._customProperties.forEach((r) => {
			Vr(() => L(t[r]), (t, i) => {
				e.notifyComponentUpdate(), e.sendInspectorState(lp), op && e.addTimelineEvent({
					layerId: cp,
					event: {
						time: n(),
						title: "Change",
						subtitle: r,
						data: {
							newValue: t,
							oldValue: i
						},
						groupId: hp
					}
				});
			}, { deep: !0 });
		}), t.$subscribe(({ events: r, type: i }, a) => {
			if (e.notifyComponentUpdate(), e.sendInspectorState(lp), !op) return;
			let o = {
				time: n(),
				title: ap(i),
				data: up({ store: $f(t.$id) }, ip(r)),
				groupId: hp
			};
			i === jf.patchFunction ? o.subtitle = "⤵️" : i === jf.patchObject ? o.subtitle = "🧩" : r && !Array.isArray(r) && (o.subtitle = r.type), r && (o.data["rawEvent(s)"] = { _custom: {
				display: "DebuggerEvent",
				type: "object",
				tooltip: "raw DebuggerEvent[]",
				value: r
			} }), e.addTimelineEvent({
				layerId: cp,
				event: o
			});
		}, {
			detached: !0,
			flush: "sync"
		});
		let r = t._hotUpdate;
		t._hotUpdate = tn((i) => {
			r(i), e.addTimelineEvent({
				layerId: cp,
				event: {
					time: n(),
					title: "🔥 " + t.$id,
					subtitle: "HMR update",
					data: {
						store: $f(t.$id),
						info: $f("HMR update")
					}
				}
			}), e.notifyComponentUpdate(), e.sendInspectorTree(lp), e.sendInspectorState(lp);
		});
		let { $dispose: i } = t;
		t.$dispose = () => {
			i(), e.notifyComponentUpdate(), e.sendInspectorTree(lp), e.sendInspectorState(lp), e.getSettings().logStoreChanges && X(`Disposed "${t.$id}" store 🗑`);
		}, e.notifyComponentUpdate(), e.sendInspectorTree(lp), e.sendInspectorState(lp), e.getSettings().logStoreChanges && X(`"${t.$id}" store installed 🆕`);
	});
}
var mp = 0, hp;
function gp(e, t, n) {
	let r = t.reduce((t, n) => (t[n] = (/* @__PURE__ */ P(e))[n], t), {});
	for (let t in r) e[t] = function() {
		let i = mp, a = n ? new Proxy(e, {
			get(...e) {
				return hp = i, Reflect.get(...e);
			},
			set(...e) {
				return hp = i, Reflect.set(...e);
			}
		}) : e;
		hp = i;
		let o = r[t].apply(a, arguments);
		return hp = void 0, o;
	};
}
function _p({ app: e, store: t, options: n }) {
	if (!t.$id.startsWith("__hot:")) {
		if (t._isOptionsAPI = !!n.state, !t._p._testing) {
			gp(t, Object.keys(n.actions), t._isOptionsAPI);
			let e = t._hotUpdate;
			(/* @__PURE__ */ P(t))._hotUpdate = function(n) {
				e.apply(this, arguments), gp(t, Object.keys(n._hmrPayload.actions), !!t._isOptionsAPI);
			};
		}
		pp(e, t);
	}
}
function vp() {
	let e = Ne(!0), t = e.run(() => /* @__PURE__ */ I({})), n = [], r = [], i = tn({
		install(e) {
			Of(i), i._a = e, e.provide(kf, i), e.config.globalProperties.$pinia = i, process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && Ef && fp(e, i), r.forEach((e) => n.push(e)), r = [];
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
	return process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && Ef && typeof Proxy < "u" && i.use(_p), i;
}
function yp(e, t) {
	for (let n in t) {
		let r = t[n];
		if (!(n in e)) continue;
		let i = e[n];
		Af(i) && Af(r) && !/* @__PURE__ */ F(r) && !/* @__PURE__ */ Qt(r) ? e[n] = yp(i, r) : e[n] = r;
	}
	return e;
}
var bp = () => {};
function xp(e, t, n, r = bp) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && Pe() && Fe(i), i;
}
function Sp(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var Cp = (e) => e(), wp = Symbol(), Tp = Symbol();
function Ep(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		Af(i) && Af(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ F(r) && !/* @__PURE__ */ Qt(r) ? e[n] = Ep(i, r) : e[n] = r;
	}
	return e;
}
var Dp = process.env.NODE_ENV === "production" ? Symbol() : Symbol("pinia:skipHydration");
function Op(e) {
	return !Af(e) || !Object.prototype.hasOwnProperty.call(e, Dp);
}
var { assign: kp } = Object;
function Ap(e) {
	return !!(/* @__PURE__ */ F(e) && e.effect);
}
function jp(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		!s && (process.env.NODE_ENV === "production" || !r) && (n.state.value[e] = i ? i() : {});
		let t = process.env.NODE_ENV !== "production" && r ? /* @__PURE__ */ un((/* @__PURE__ */ I(i ? i() : {})).value) : /* @__PURE__ */ un(n.state.value[e]);
		return kp(t, a, Object.keys(o || {}).reduce((r, i) => (process.env.NODE_ENV !== "production" && i in t && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${i}" in store "${e}".`), r[i] = tn(G(() => {
			Of(n);
			let t = n._s.get(e);
			return o[i].call(t, t);
		})), r), {}));
	}
	return c = Mp(e, l, t, n, r, !0), c;
}
function Mp(e, t, n = {}, r, i, a) {
	let o, s = kp({ actions: {} }, n);
	/* istanbul ignore if */
	if (process.env.NODE_ENV !== "production" && !r._e.active) throw Error("Pinia destroyed");
	let c = { deep: !0 };
	/* istanbul ignore else */
	process.env.NODE_ENV !== "production" && (c.onTrigger = (e) => {
		/* istanbul ignore else */
		l ? p = e : l == 0 && !C._hotUpdating && (Array.isArray(p) ? p.push(e) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
	});
	let l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p, m = r.state.value[e];
	!a && !m && (process.env.NODE_ENV === "production" || !i) && (r.state.value[e] = {});
	let h = /* @__PURE__ */ I({}), g;
	function _(t) {
		let n;
		l = u = !1, process.env.NODE_ENV !== "production" && (p = []), typeof t == "function" ? (t(r.state.value[e]), n = {
			type: jf.patchFunction,
			storeId: e,
			events: p
		}) : (Ep(r.state.value[e], t), n = {
			type: jf.patchObject,
			payload: t,
			storeId: e,
			events: p
		});
		let i = g = Symbol();
		Gn().then(() => {
			g === i && (l = !0);
		}), u = !0, Sp(d, n, r.state.value[e]);
	}
	let v = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			kp(e, t);
		});
	} : process.env.NODE_ENV === "production" ? bp : () => {
		throw Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
	};
	function y() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let b = (t, n = "") => {
		if (wp in t) return t[Tp] = n, t;
		let i = function() {
			Of(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			Sp(f, {
				args: n,
				name: i[Tp],
				store: C,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : C, n);
			} catch (e) {
				throw Sp(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (Sp(a, e), e)).catch((e) => (Sp(o, e), Promise.reject(e))) : (Sp(a, l), l);
		};
		return i[wp] = !0, i[Tp] = n, i;
	}, x = /*#__PURE__*/ tn({
		actions: {},
		getters: {},
		state: [],
		hotState: h
	}), S = {
		_p: r,
		$id: e,
		$onAction: xp.bind(null, f),
		$patch: _,
		$reset: v,
		$subscribe(t, n = {}) {
			let i = xp(d, t, n.detached, () => a()), a = o.run(() => Vr(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: jf.direct,
					events: p
				}, r);
			}, kp({}, c, n)));
			return i;
		},
		$dispose: y
	}, C = /* @__PURE__ */ qt(process.env.NODE_ENV !== "production" || process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && Ef ? kp({
		_hmrPayload: x,
		_customProperties: tn(/* @__PURE__ */ new Set())
	}, S) : S);
	r._s.set(e, C);
	let w = (r._a && r._a.runWithContext || Cp)(() => r._e.run(() => (o = Ne()).run(() => t({ action: b }))));
	for (let t in w) {
		let o = w[t];
		/* @__PURE__ */ F(o) && !Ap(o) || /* @__PURE__ */ Qt(o) ? (process.env.NODE_ENV !== "production" && i ? h.value[t] = /* @__PURE__ */ pn(w, t) : a || (m && Op(o) && (/* @__PURE__ */ F(o) ? o.value = m[t] : Ep(o, m[t])), r.state.value[e][t] = o), process.env.NODE_ENV !== "production" && x.state.push(t)) : typeof o == "function" ? (w[t] = process.env.NODE_ENV !== "production" && i ? o : b(o, t), process.env.NODE_ENV !== "production" && (x.actions[t] = o), s.actions[t] = o) : process.env.NODE_ENV !== "production" && Ap(o) && (x.getters[t] = a ? n.getters[t] : o, Ef && (w._getters ||= tn([])).push(t));
	}
	if (kp(C, w), kp(/* @__PURE__ */ P(C), w), Object.defineProperty(C, "$state", {
		get: () => process.env.NODE_ENV !== "production" && i ? h.value : r.state.value[e],
		set: (e) => {
			/* istanbul ignore if */
			if (process.env.NODE_ENV !== "production" && i) throw Error("cannot set hotState");
			_((t) => {
				kp(t, e);
			});
		}
	}), process.env.NODE_ENV !== "production" && (C._hotUpdate = tn((t) => {
		C._hotUpdating = !0, t._hmrPayload.state.forEach((e) => {
			if (e in C.$state) {
				let n = t.$state[e], r = C.$state[e];
				typeof n == "object" && Af(n) && Af(r) ? yp(n, r) : t.$state[e] = r;
			}
			C[e] = /* @__PURE__ */ pn(t.$state, e);
		}), Object.keys(C.$state).forEach((e) => {
			e in t.$state || delete C[e];
		}), l = !1, u = !1, r.state.value[e] = /* @__PURE__ */ pn(t._hmrPayload, "hotState"), u = !0, Gn().then(() => {
			l = !0;
		});
		for (let e in t._hmrPayload.actions) {
			let n = t[e];
			C[e] = b(n, e);
		}
		for (let e in t._hmrPayload.getters) {
			let n = t._hmrPayload.getters[e];
			C[e] = a ? G(() => (Of(r), n.call(C, C))) : n;
		}
		Object.keys(C._hmrPayload.getters).forEach((e) => {
			e in t._hmrPayload.getters || delete C[e];
		}), Object.keys(C._hmrPayload.actions).forEach((e) => {
			e in t._hmrPayload.actions || delete C[e];
		}), C._hmrPayload = t._hmrPayload, C._getters = t._getters, C._hotUpdating = !1;
	})), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && Ef) {
		let e = {
			writable: !0,
			configurable: !0,
			enumerable: !1
		};
		[
			"_p",
			"_hmrPayload",
			"_getters",
			"_customProperties"
		].forEach((t) => {
			Object.defineProperty(C, t, kp({ value: C[t] }, e));
		});
	}
	return r._p.forEach((e) => {
		/* istanbul ignore else */
		if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && Ef) {
			let t = o.run(() => e({
				store: C,
				app: r._a,
				pinia: r,
				options: s
			}));
			Object.keys(t || {}).forEach((e) => C._customProperties.add(e)), kp(C, t);
		} else kp(C, o.run(() => e({
			store: C,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), process.env.NODE_ENV !== "production" && C.$state && typeof C.$state == "object" && typeof C.$state.constructor == "function" && !C.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${C.$id}".`), m && a && n.hydrate && n.hydrate(C.$state, m), l = !0, u = !0, C;
}
function Np(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, o) {
		let s = Rr();
		if (n = (process.env.NODE_ENV === "test" && Df && Df._testing ? null : n) || (s ? Lr(kf, null) : null), n && Of(n), process.env.NODE_ENV !== "production" && !Df) throw Error("[🍍]: \"getActivePinia()\" was called but there was no active Pinia. Are you trying to use a store before calling \"app.use(pinia)\"?\nSee https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.\nThis will fail in production.");
		n = Df, n._s.has(e) || (i ? Mp(e, t, r, n) : jp(e, r, n), process.env.NODE_ENV !== "production" && (a._pinia = n));
		let c = n._s.get(e);
		if (process.env.NODE_ENV !== "production" && o) {
			let a = "__hot:" + e, s = i ? Mp(a, t, r, n, !0) : jp(a, kp({}, r), n, !0);
			o._hotUpdate(s), delete n.state.value[a], n._s.delete(a);
		}
		if (process.env.NODE_ENV !== "production" && Ef) {
			let t = zo();
			if (t && t.proxy && !o) {
				let n = t.proxy, r = "_pStores" in n ? n._pStores : n._pStores = {};
				r[e] = c;
			}
		}
		return c;
	}
	return a.$id = e, a;
}
//#endregion
//#region src/functions/scene-merger/defaults.ts
var Pp = {
	edgeThreshold: 16,
	gridSize: 100,
	mode: "edge",
	pixelInterval: 50
};
function Fp(e) {
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
function Ip(e) {
	return e.cleanupEnabled && e.destinationCreated && e.stage !== "finalizing";
}
//#endregion
//#region src/functions/scene-merger/content.ts
var Lp = {
	drawings: "Drawing",
	lights: "AmbientLight",
	notes: "Note",
	regions: "Region",
	sounds: "AmbientSound",
	tiles: "Tile",
	tokens: "Token",
	walls: "Wall"
};
function Rp(e) {
	return Object.entries(Lp).flatMap(([t, n]) => e[t] && n ? [n] : []);
}
//#endregion
//#region src/functions/scene-merger/layout/bounds.ts
function zp(e, t, n, r) {
	return {
		height: Math.max(0, r - t),
		maxX: n,
		maxY: r,
		minX: e,
		minY: t,
		width: Math.max(0, n - e)
	};
}
function Bp(e) {
	return e.length === 0 ? zp(0, 0, 0, 0) : zp(Math.min(...e.map((e) => e.x)), Math.min(...e.map((e) => e.y)), Math.max(...e.map((e) => e.x + e.width)), Math.max(...e.map((e) => e.y + e.height)));
}
//#endregion
//#region src/functions/scene-merger/layout/normalize.ts
var Vp = {
	x: 0,
	y: 0
};
function Hp(e, t = Vp) {
	let n = Bp(e), r = {
		x: t.x - n.minX,
		y: t.y - n.minY
	}, i = e.map((e) => ({
		...e,
		x: e.x + r.x,
		y: e.y + r.y
	}));
	return {
		bounds: zp(t.x, t.y, t.x + n.width, t.y + n.height),
		height: n.height,
		placements: i,
		shift: r,
		sourceBounds: n,
		width: n.width
	};
}
//#endregion
//#region src/functions/scene-merger/layout/overlaps.ts
function Up(e, t) {
	let n = Math.max(e.x, t.x), r = Math.max(e.y, t.y), i = Math.min(e.x + e.width, t.x + t.width), a = Math.min(e.y + e.height, t.y + t.height);
	return i > n && a > r ? zp(n, r, i, a) : null;
}
function Wp(e) {
	let t = [];
	for (let n = 0; n < e.length; n += 1) {
		let r = e[n];
		if (r) for (let i = n + 1; i < e.length; i += 1) {
			let n = e[i];
			if (!n) continue;
			let a = Up(r, n);
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
function Gp(e, t) {
	let n = t > 0 ? Math.round(e / t) * t : e;
	return Object.is(n, -0) ? 0 : n;
}
function Kp(e, t, n) {
	let r = e, i = n + 2 ** -52;
	for (let n of t) {
		let t = Math.abs(n - e);
		t < i && (r = n, i = t);
	}
	return i <= n ? r : e;
}
function qp(e, t) {
	let n = [], r = [];
	for (let i of t) n.push(i.x, i.x + i.width, i.x - e.width, i.x + i.width - e.width), r.push(i.y, i.y + i.height, i.y - e.height, i.y + i.height - e.height);
	return {
		x: n,
		y: r
	};
}
function Jp(e, t, n = []) {
	if (t.mode === "pixel") return {
		x: Gp(e.x, t.pixelInterval),
		y: Gp(e.y, t.pixelInterval)
	};
	if (t.mode === "grid") return {
		x: Gp(e.x, t.gridSize),
		y: Gp(e.y, t.gridSize)
	};
	if (t.mode === "edge") {
		let r = qp(e, n);
		return {
			x: Kp(e.x, r.x, t.edgeThreshold),
			y: Kp(e.y, r.y, t.edgeThreshold)
		};
	}
	return {
		x: e.x,
		y: e.y
	};
}
function Yp(e, t, n) {
	return {
		...e,
		...Jp(e, t, n)
	};
}
//#endregion
//#region src/functions/scene-merger/layout/viewport.ts
var Xp = .02;
function Zp(e, t = Xp, n = 8) {
	return Math.min(n, Math.max(t, e));
}
function Qp(e, t, n = 32) {
	let r = Math.max(1, t.width - n * 2), i = Math.max(1, t.height - n * 2), a = e.width > 0 ? r / e.width : 1, o = e.height > 0 ? i / e.height : 1, s = Zp(Math.min(a, o, 1));
	return {
		panX: (t.width - e.width * s) / 2 - e.minX * s,
		panY: (t.height - e.height * s) / 2 - e.minY * s,
		zoom: s
	};
}
function $p(e, t, n) {
	let r = Zp(t), i = (n.x - e.panX) / e.zoom, a = (n.y - e.panY) / e.zoom;
	return {
		panX: n.x - i * r,
		panY: n.y - a * r,
		zoom: r
	};
}
//#endregion
//#region src/functions/scene-merger/references/keys.ts
function em(e) {
	return JSON.stringify([
		e.sceneId,
		e.documentType,
		...e.parentIds ?? [],
		e.documentId
	]);
}
function tm(e, t, n, r = []) {
	return em({
		documentId: n,
		documentType: t,
		parentIds: r,
		sceneId: e
	});
}
//#endregion
//#region src/functions/scene-merger/transforms/clone.ts
function nm(e) {
	return Array.isArray(e) ? e.map((e) => nm(e)) : e && typeof e == "object" ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, nm(t)])) : e;
}
//#endregion
//#region src/functions/scene-merger/references/uuid.ts
var rm = new Set([
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
function im(e) {
	return rm.has(e);
}
function am(e, t, n, r = [], i = e.sourceSceneId) {
	return e.idMap.get(tm(i, t, n, r));
}
function om(e, t) {
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
		if (!c || !l || !im(c)) return {
			rewritten: 0,
			unresolved: [e],
			value: e
		};
		let u = am(t, c, l, a, r);
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
function sm(e, t, n) {
	if (typeof e.level == "string") {
		let r = e.level, i = am(t, "Level", r);
		i ? (e.level = i, n.rewritten += 1) : n.unresolved.push(`Level.${r}`);
	}
	Array.isArray(e.levels) && (e.levels = e.levels.map((e) => {
		if (typeof e != "string") return e;
		let r = am(t, "Level", e);
		return r ? (n.rewritten += 1, r) : (n.unresolved.push(`Level.${e}`), e);
	}));
}
function cm(e, t, n) {
	if (typeof e != "string") return e;
	let r = om(e, t);
	return n.rewritten += r.rewritten, n.unresolved.push(...r.unresolved), r.value;
}
function lm(e, t, n, r) {
	let i = e[t];
	if (typeof i != "string") return;
	let a = am(n, "Token", i);
	a ? (e[t] = a, r.rewritten += 1) : r.unresolved.push(`Token.${i}`);
}
function um(e, t, n) {
	if (typeof e == "string") return cm(e, t, n);
	if (!e || typeof e != "object" || Array.isArray(e)) return e;
	let r = nm(e);
	typeof r.uuid == "string" && (r.uuid = cm(r.uuid, t, n));
	let i = r.scene;
	if (typeof i == "string" && t.sourceSceneIds.includes(i) && typeof r.region == "string") {
		let e = am(t, "Region", r.region, [], i);
		e ? (r.scene = t.destinationSceneId, r.region = e, n.rewritten += 2) : n.unresolved.push(`Region.${String(r.region)}`);
	}
	return r;
}
function dm(e, t, n, r) {
	if (!e || typeof e != "object" || Array.isArray(e)) return e;
	let i = nm(e), a = i.system;
	if (!a || typeof a != "object" || Array.isArray(a)) return i;
	let o = { ...a }, s = typeof i.type == "string" ? i.type.toLowerCase() : "";
	if (s.includes("teleport") && Array.isArray(o.destinations) && (o.destinations = o.destinations.map((e) => um(e, n, r))), s.includes("toggle") && t) for (let e of ["enable", "disable"]) Array.isArray(o[e]) && (o[e] = o[e].map((e) => {
		if (typeof e != "string") return e;
		if (e.startsWith("Scene.")) return cm(e, n, r);
		let i = am(n, "RegionBehavior", e, [t]);
		return i ? (r.rewritten += 1, i) : (r.unresolved.push(`Region.${t}.RegionBehavior.${e}`), e);
	}));
	return i.system = o, i;
}
function fm(e, t, n) {
	let r = e.attachment;
	if (r && typeof r == "object" && !Array.isArray(r)) {
		let i = nm(r);
		lm(i, "token", t, n), e.attachment = i;
	}
	Array.isArray(e.shapes) && (e.shapes = e.shapes.map((e) => {
		if (!e || typeof e != "object" || Array.isArray(e)) return e;
		let r = nm(e);
		return lm(r, "token", t, n), r;
	}));
	let i = typeof e._id == "string" ? e._id : void 0;
	Array.isArray(e.behaviors) && (e.behaviors = e.behaviors.map((e) => dm(e, i, t, n)));
}
function pm(e, t, n) {
	let r = nm(t), i = {
		rewritten: 0,
		unresolved: []
	};
	return sm(r, n, i), e === "Region" && fm(r, n, i), {
		rewritten: i.rewritten,
		unresolved: i.unresolved,
		value: r
	};
}
//#endregion
//#region src/functions/scene-merger/transforms/coordinates.ts
function mm(e, t) {
	return {
		x: e.x + t.x,
		y: e.y + t.y
	};
}
function hm(e, t, n) {
	return {
		x: t.sceneX + n.x - e.sceneX,
		y: t.sceneY + n.y - e.sceneY
	};
}
function gm(e, t) {
	if (!Number.isFinite(t) || t <= 0) return !1;
	let n = 1e-7, r = e.x / t, i = e.y / t;
	return Math.abs(r - Math.round(r)) < n && Math.abs(i - Math.round(i)) < n;
}
//#endregion
//#region src/functions/scene-merger/transforms/documents.ts
function _m(e, t) {
	return {
		...nm(e),
		...mm(e, t)
	};
}
function vm(e, t) {
	return _m(e, t);
}
function ym(e, t) {
	return {
		...nm(e),
		c: [
			e.c[0] + t.x,
			e.c[1] + t.y,
			e.c[2] + t.x,
			e.c[3] + t.y
		]
	};
}
function bm(e, t) {
	return _m(e, t);
}
function xm(e, t) {
	return {
		..._m(e, t),
		_movementHistory: [],
		_regions: []
	};
}
function Sm(e, t) {
	let n = { ...nm(e) };
	return typeof e.level == "string" && (n.level = t.get(e.level) ?? e.level), Array.isArray(e.levels) && (n.levels = e.levels.map((e) => t.get(e) ?? e)), n;
}
//#endregion
//#region src/functions/scene-merger/transforms/regions.ts
var Cm = new Set([
	"circle",
	"cone",
	"ellipse",
	"line",
	"rectangle",
	"ring"
]);
function wm(e, t) {
	let n = { ...nm(e) };
	return typeof e.x == "number" && (n.x = e.x + t.x), typeof e.y == "number" && (n.y = e.y + t.y), n;
}
function Tm(e, t) {
	return e.map((e, n) => e + (n % 2 == 0 ? t.x : t.y));
}
function Em(e, t, n) {
	if (!n || n.type !== 1 || n.size <= 0) throw Error("Grid Region shapes can currently be translated only on a square grid.");
	let r = t.y / n.size, i = t.x / n.size;
	if (!Number.isInteger(r) || !Number.isInteger(i)) throw Error("Grid Region shape translation must align to complete grid cells.");
	return e.map((e) => ({
		...nm(e),
		i: e.i + r,
		j: e.j + i
	}));
}
function Dm(e, t, n) {
	let r = { ...nm(e) };
	if (Cm.has(e.type)) return wm(r, t);
	if (e.type === "polygon") return r.points = Tm(e.points ?? [], t), r;
	if (e.type === "emanation") return e.base && (r.base = wm(e.base, t)), r;
	if (e.type === "grid") return r.offsets = Em(e.offsets ?? [], t, n), r;
	throw e.type === "token" ? Error("Token-linked Region shapes cannot currently be merged safely.") : Error(`Unsupported Region shape type: ${e.type}`);
}
function Om(e, t, n) {
	let r = e.attachment?.token;
	if (typeof r == "string" && r.length > 0) throw Error("Attached Regions cannot currently be merged safely.");
	return {
		...nm(e),
		_shapeConstraints: null,
		shapes: e.shapes?.map((e) => Dm(e, t, n)) ?? []
	};
}
//#endregion
//#region src/functions/scene-merger/validation/compatibility.ts
function Z(e, t, n, r = {}, i = t !== "error") {
	return {
		code: e,
		details: r,
		overridable: i,
		sceneIds: n,
		severity: t
	};
}
function km(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
	for (let r of e) t.has(r) && n.add(r), t.add(r);
	return [...n];
}
function Am(e) {
	return !Number.isFinite(e.x) || !Number.isFinite(e.y) || !Number.isFinite(e.width) || !Number.isFinite(e.height) || !Number.isFinite(e.x + e.width) || !Number.isFinite(e.y + e.height) || e.width <= 0 || e.height <= 0;
}
function jm(e) {
	let t = e[0];
	if (!t) return [];
	let n = [];
	for (let r of e.slice(1)) {
		let e = [t.id, r.id];
		r.grid.type !== t.grid.type && n.push(Z("grid.typeMismatch", "error", e)), r.grid.size !== t.grid.size && n.push(Z("grid.sizeMismatch", "error", e)), r.grid.distance !== t.grid.distance && n.push(Z("grid.distanceMismatch", "error", e)), r.grid.units !== t.grid.units && n.push(Z("grid.unitsMismatch", "error", e));
	}
	return n;
}
function Mm(e, t, n) {
	let r = [], i = e.background;
	return n.content.backgrounds && i && (i.x !== 0 || i.y !== 0 || i.rotation !== 0 || i.scaleX !== 1 || i.scaleY !== 1) && r.push(Z("background.transform", "warning", [e.id])), e.metrics.crossSceneReferences > 0 && r.push(Z("references.crossScene", "warning", [e.id], { count: e.metrics.crossSceneReferences })), e.metrics.moduleFlagDocuments > 0 && r.push(Z("flags.moduleData", "warning", [e.id], { count: e.metrics.moduleFlagDocuments })), n.content.regions && e.metrics.unsupportedRegionBehaviors > 0 && r.push(Z("regions.unsupportedBehavior", "warning", [e.id], { count: e.metrics.unsupportedRegionBehaviors })), n.content.regions && e.metrics.attachedRegions > 0 && r.push(Z("regions.attachedUnsupported", "error", [e.id], { count: e.metrics.attachedRegions })), n.content.regions && e.metrics.unsupportedRegionShapes > 0 && r.push(Z("regions.unsupportedShape", "error", [e.id], { count: e.metrics.unsupportedRegionShapes })), n.content.regions && e.metrics.tokenRegionShapes > 0 && r.push(Z("regions.tokenShapeUnsupported", "error", [e.id], { count: e.metrics.tokenRegionShapes })), n.content.regions && e.metrics.gridRegionShapes > 0 && e.grid.type !== 1 && r.push(Z("grid.regionShapeUnsupported", "error", [e.id])), n.content.regions && t && e.metrics.gridRegionShapes > 0 && e.grid.type === 1 && e.grid.size > 0 && (t.x % e.grid.size !== 0 || t.y % e.grid.size !== 0) && r.push(Z("grid.regionAlignment", "error", [e.id])), r;
}
function Nm(e, t, n) {
	let r = [], i = new Map(t.map((e) => [e.sceneId, e]));
	n.destination.name.trim() || r.push(Z("destination.nameRequired", "error", [])), e.length < 2 && r.push(Z("selection.tooFew", "error", e.map((e) => e.id)));
	let a = km(e.map((e) => e.id));
	a.length > 0 && r.push(Z("selection.duplicate", "error", a));
	let o = km(t.map((e) => e.sceneId));
	o.length > 0 && r.push(Z("layout.duplicate", "error", o));
	let s = new Set(e.map((e) => e.id)), c = [...new Set(t.map((e) => e.sceneId).filter((e) => !s.has(e)))];
	c.length > 0 && r.push(Z("layout.unknown", "error", c));
	for (let t of e) {
		let e = i.get(t.id);
		t.canMerge || r.push(Z("selection.unavailable", "error", [t.id])), e ? (Am(e) || e.width !== t.dimensions.sceneWidth || e.height !== t.dimensions.sceneHeight) && r.push(Z("layout.invalidDimensions", "error", [t.id], {
			actualHeight: e.height,
			actualWidth: e.width,
			expectedHeight: t.dimensions.sceneHeight,
			expectedWidth: t.dimensions.sceneWidth
		})) : r.push(Z("layout.missing", "error", [t.id])), t.levels.length !== 1 && r.push(Z("levels.multiple", "error", [t.id], { count: t.levels.length })), r.push(...Mm(t, e, n));
	}
	r.push(...jm(e)), n.content.backgrounds && new Set(e.map((e) => String(e.background?.color ?? "none"))).size > 1 && r.push(Z("background.colorMismatch", "warning", e.map((e) => e.id)));
	for (let e of Wp(t)) r.push(Z("layout.overlap", "warning", [e.firstSceneId, e.secondSceneId], {
		height: e.intersection.height,
		width: e.intersection.width
	}));
	return n.content.templates && r.push(Z("content.templatesUnavailable", "error", [])), r;
}
//#endregion
//#region src/functions/scene-merger/validation/performance.ts
var Pm = {
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
function Fm(e, t) {
	return e[t] ?? 0;
}
function Im(e, t, n) {
	let r = {}, i = Lm(n);
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
function Lm(e) {
	return e ? new Set(Object.entries(Lp).flatMap(([t, n]) => n && e[t] ? [n] : [])) : null;
}
function Rm(e, t, n) {
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
function zm(e, t = Pm) {
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
			Fm(e.documents, "Tile") + e.backgrounds,
			t.tiles
		],
		[
			"performance.animatedAssets",
			e.animatedAssets,
			t.animatedAssets
		],
		[
			"performance.walls",
			Fm(e.documents, "Wall"),
			t.walls
		],
		[
			"performance.lights",
			Fm(e.documents, "AmbientLight"),
			t.lights
		],
		[
			"performance.sounds",
			Fm(e.documents, "AmbientSound"),
			t.sounds
		],
		[
			"performance.tokens",
			Fm(e.documents, "Token"),
			t.tokens
		],
		[
			"performance.regions",
			Fm(e.documents, "Region"),
			t.regions
		]
	];
	for (let [e, t, r] of a) t > r && n.push(Rm(e, t, r));
	return n;
}
//#endregion
//#region src/functions/scene-merger/validation/report.ts
function Bm(e) {
	let t = e.filter((e) => e.severity === "error"), n = e.filter((e) => e.severity !== "error");
	return {
		blocking: t,
		canMerge: t.length === 0,
		warnings: n
	};
}
function Vm(e, t, n, r = Pm) {
	let i = Im(e, Bp(t), n.content);
	return Bm([...Nm(e, t, n), ...zm(i, r)]);
}
//#endregion
//#region src/types/scene-merger/options.ts
var Hm = {
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
function Um(e) {
	let t = G(() => {
		let t = new Map(e.availableScenes.value.map((e) => [e.id, e]));
		return e.placements.value.flatMap((e) => {
			let n = t.get(e.sceneId);
			return n ? [n] : [];
		});
	}), n = G(() => e.placements.value.map(({ sceneId: e }) => e)), r = G(() => Bp(e.placements.value)), i = G(() => Wp(e.placements.value)), a = G(() => [...e.sceneFolders.value].sort((e, t) => e.name.localeCompare(t.name))), o = G(() => ({
		content: { ...e.content },
		destination: { ...e.destination }
	}));
	return {
		arrangementBounds: r,
		currentRequest: G(() => ({
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
var Wm = new Set([
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
function Gm(e, t) {
	if (typeof e != "object" || !e || !("stage" in e)) return t;
	let n = e.stage;
	return typeof n == "string" && Wm.has(n) ? n : t;
}
//#endregion
//#region src/state/scene-merger/workspace.ts
function Km(e, t, n = () => !0) {
	let r = /* @__PURE__ */ I({
		panX: 24,
		panY: 24,
		zoom: .1
	}), i = /* @__PURE__ */ qt({
		...Pp,
		mode: Pp.mode
	});
	function a(e, t) {
		n() && (i.mode = e, t !== void 0 && Number.isFinite(t) && t > 0 && (i.pixelInterval = t));
	}
	function o(e) {
		n() && (r.value = e);
	}
	function s(e, t) {
		n() && (r.value = $p(r.value, e, t));
	}
	function c(e) {
		n() && (r.value = Qp(t.value, e, 36));
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
var qm = Np("scene-merger", () => {
	let e = Fp("Merged Scene"), t = /* @__PURE__ */ an(null), n = /* @__PURE__ */ I([]), r = /* @__PURE__ */ I([]), i = /* @__PURE__ */ I([]), a = /* @__PURE__ */ qt({ ...e.content }), o = /* @__PURE__ */ qt({ ...e.destination }), s = /* @__PURE__ */ I("loading"), c = /* @__PURE__ */ I(null), l = /* @__PURE__ */ I(!1), u = /* @__PURE__ */ I(!1), d = /* @__PURE__ */ I(null), f = /* @__PURE__ */ I(null), p = /* @__PURE__ */ I(""), m = /* @__PURE__ */ I("beforeDestination"), h = /* @__PURE__ */ I(!1), g = 0, _ = G(() => s.value === "ready"), { arrangementBounds: v, currentRequest: y, folderChoices: b, overlaps: x, selectedSceneIds: S, selectedScenes: C } = Um({
		availableScenes: n,
		content: a,
		destination: o,
		placements: i,
		sceneFolders: r,
		validation: c,
		warningsAcknowledged: u
	}), { fitView: w, locateScene: ee, resetView: te, setSnap: T, setView: ne, snap: E, view: re, zoomAt: D } = Km(i, v, () => _.value), ie = G(() => _.value && !l.value && !!c.value?.canMerge && (c.value?.warnings.length === 0 || u.value)), ae = G(() => s.value === "merging" && !h.value && !!t.value?.cancelActiveMerge && (!d.value || d.value.stage === "validating" || d.value.stage === "calculatingBounds"));
	async function oe(e, i) {
		t.value = e, o.name = i, s.value = "loading";
		try {
			[n.value, r.value] = await Promise.all([e.listScenes(), e.listSceneFolders()]), s.value = "ready", await pe();
		} catch (e) {
			be(e, "beforeDestination");
		}
	}
	function se(e) {
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
		}], i.value.length === 1 && (E.gridSize = t.grid.size), ye(), pe();
	}
	function ce(e) {
		_.value && (i.value = i.value.filter((t) => t.sceneId !== e).map((e, t) => ({
			...e,
			order: t
		})), ye(), pe());
	}
	function O() {
		_.value && (i.value = [], ye(), pe());
	}
	function le(e, t) {
		if (!_.value) return;
		let n = [...i.value], r = n.findIndex((t) => t.sceneId === e), a = r + t;
		r < 0 || a < 0 || a >= n.length || ([n[r], n[a]] = [n[a], n[r]], i.value = n.map((e, t) => ({
			...e,
			order: t
		})), ye(), pe());
	}
	function ue(e, t, n, r = !0) {
		if (!_.value) return;
		let a = i.value.find((t) => t.sceneId === e);
		if (!a) return;
		let o = {
			...a,
			x: Math.round(t),
			y: Math.round(n)
		}, s = r ? Yp(o, E, i.value.filter((t) => t.sceneId !== e)) : o;
		i.value = i.value.map((t) => t.sceneId === e ? s : t), ye();
	}
	function de(e, t) {
		!_.value || Hm[e] === "unavailable" || (a[e] = t, ye(), pe());
	}
	function fe(e, t) {
		_.value && (o[e] = t, ye(), pe());
	}
	async function pe() {
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
	async function me() {
		if (!(!t.value || !_.value) && (await pe(), ie.value)) {
			s.value = "merging", d.value = null, h.value = !1;
			try {
				f.value = await t.value.merge(y.value, (e) => {
					d.value = e;
				}), s.value = "success";
			} catch (e) {
				be(e, Gm(e, d.value?.stage ?? "beforeDestination"));
			}
		}
	}
	async function he() {
		ae.value && (h.value = !0, await t.value?.cancelActiveMerge?.());
	}
	async function ge() {
		f.value && t.value && await t.value.openScene(f.value.destinationSceneId);
	}
	function _e(e) {
		_.value && (u.value = e);
	}
	function ve() {
		s.value = "ready", d.value = null, h.value = !1, p.value = "", pe();
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
		canCancel: ae,
		canMerge: ie,
		cancelMerge: he,
		cancelRequested: h,
		clearScenes: O,
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
		openDestination: ge,
		overlaps: x,
		placements: i,
		progress: d,
		removeScene: ce,
		reorderScene: le,
		resetView: te,
		returnToEditing: ve,
		selectedSceneIds: S,
		selectedScenes: C,
		setContent: de,
		setDestination: fe,
		setSnap: T,
		setView: ne,
		setWarningsAcknowledged: _e,
		setupEditable: _,
		snap: E,
		status: s,
		summary: f,
		validateNow: pe,
		validating: l,
		validation: c,
		view: re,
		warningsAcknowledged: u,
		zoomAt: D,
		addScene: se
	};
}), Jm = { class: "dui-card dui-card-border tw:bg-base-200" }, Ym = {
	key: 0,
	class: "dui-card-body tw:flex-row tw:flex-wrap tw:items-center tw:justify-between tw:gap-3 tw:p-3"
}, Xm = { class: "dui-card-title tw:text-base" }, Zm = { class: "tw:m-0 tw:text-xs tw:opacity-65" }, Qm = { class: "tw:flex tw:items-center tw:gap-2" }, $m = {
	key: 0,
	class: "tw:max-w-72 tw:text-right tw:text-xs tw:opacity-65"
}, eh = ["disabled"], th = {
	key: 1,
	class: "dui-card-body tw:gap-3 tw:p-3"
}, nh = { class: "tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-2" }, rh = { class: "dui-card-title tw:text-base" }, ih = { class: "tw:m-0 tw:text-xs tw:opacity-70" }, ah = { key: 0 }, oh = {
	key: 1,
	class: "dui-badge dui-badge-ghost dui-badge-sm"
}, sh = ["value"], ch = { class: "tw:flex tw:justify-between tw:text-[0.68rem] tw:opacity-65" }, lh = {
	key: 2,
	class: "dui-card-body tw:gap-3 tw:p-3"
}, uh = {
	role: "alert",
	class: "dui-alert dui-alert-success dui-alert-soft"
}, dh = { class: "tw:min-w-0 tw:flex-1" }, fh = { class: "tw:m-0 tw:font-semibold" }, ph = { class: "tw:m-0 tw:text-sm" }, mh = { class: "tw:grid tw:gap-3 tw:md:grid-cols-2 tw:xl:grid-cols-4" }, hh = { class: "tw:rounded-box tw:bg-base-300/50 tw:p-3" }, gh = { class: "tw:mt-0 tw:mb-2 tw:text-sm tw:font-semibold" }, _h = { class: "tw:m-0 tw:grid tw:list-none tw:gap-1 tw:p-0 tw:text-xs" }, vh = {
	key: 0,
	class: "tw:opacity-60"
}, yh = { class: "tw:rounded-box tw:bg-base-300/50 tw:p-3" }, bh = { class: "tw:mt-0 tw:mb-2 tw:text-sm tw:font-semibold" }, xh = { class: "tw:m-0 tw:grid tw:list-none tw:gap-1 tw:p-0 tw:text-xs" }, Sh = {
	key: 0,
	class: "tw:opacity-60"
}, Ch = { class: "tw:rounded-box tw:bg-base-300/50 tw:p-3" }, wh = { class: "tw:mt-0 tw:mb-2 tw:text-sm tw:font-semibold" }, Th = { class: "tw:m-0 tw:grid tw:grid-cols-[1fr_auto] tw:gap-x-3 tw:gap-y-1 tw:text-xs" }, Eh = { class: "tw:m-0 tw:font-semibold" }, Dh = { class: "tw:m-0 tw:font-semibold" }, Oh = { class: "tw:m-0 tw:font-semibold" }, kh = { class: "tw:rounded-box tw:bg-base-300/50 tw:p-3" }, Ah = { class: "tw:mt-0 tw:mb-2 tw:text-sm tw:font-semibold" }, jh = { class: "tw:m-0 tw:max-h-24 tw:overflow-auto tw:pl-4 tw:text-xs" }, Mh = {
	key: 0,
	class: "tw:list-none tw:opacity-60"
}, Nh = { class: "dui-card-actions tw:justify-end" }, Ph = {
	key: 3,
	class: "dui-card-body tw:gap-3 tw:p-3"
}, Fh = {
	role: "alert",
	class: "dui-alert dui-alert-error dui-alert-soft"
}, Ih = { class: "tw:min-w-0 tw:flex-1" }, Lh = { class: "tw:m-0 tw:font-semibold" }, Rh = { class: "tw:m-0 tw:text-sm" }, zh = { class: "tw:mt-1 tw:block tw:break-words tw:text-xs" }, Bh = { class: "tw:mt-2 tw:mb-0 tw:text-xs" }, Vh = /* @__PURE__ */ Yr({
	__name: "ExecutionPanel",
	props: { t: { type: Function } },
	setup(e) {
		let t = e, n = qm(), r = G(() => {
			let e = n.progress;
			return e && e.total > 0 ? Math.round(e.completed / e.total * 100) : 0;
		}), i = G(() => o(n.summary?.copied)), a = G(() => o(n.summary?.skipped));
		function o(e) {
			return Object.entries(e ?? {}).filter((e) => typeof e[1] == "number" && e[1] > 0).sort(([e], [t]) => e.localeCompare(t));
		}
		function s(e) {
			let n = e.indexOf(":"), r = n < 0 ? e : e.slice(0, n), i = n < 0 ? "" : e.slice(n + 1), a = `FVTT_SCENE_MERGER.Validation.Issues.${r.replace(".", "_")}`, o = t.t(a);
			return o === a ? e : i ? `${o} — ${i}` : o;
		}
		return (t, o) => (B(), V("footer", Jm, [L(n).status === "ready" ? (B(), V("div", Ym, [H("div", null, [H("h2", Xm, k(e.t("FVTT_SCENE_MERGER.Execution.Title")), 1), H("p", Zm, k(e.t("FVTT_SCENE_MERGER.Execution.ReadySummary", {
			count: L(n).selectedScenes.length,
			width: Math.round(L(n).arrangementBounds.width),
			height: Math.round(L(n).arrangementBounds.height)
		})), 1)]), H("div", Qm, [L(n).canMerge ? U("", !0) : (B(), V("span", $m, k(e.t("FVTT_SCENE_MERGER.Execution.ResolveIssues")), 1)), H("button", {
			class: "dui-btn dui-btn-primary",
			type: "button",
			disabled: !L(n).canMerge,
			onClick: o[0] ||= (e) => L(n).merge()
		}, k(e.t("FVTT_SCENE_MERGER.Actions.Merge")), 9, eh)])])) : L(n).status === "merging" ? (B(), V("div", th, [
			H("div", nh, [H("div", null, [H("h2", rh, k(e.t("FVTT_SCENE_MERGER.Execution.Merging")), 1), H("p", ih, [Ao(k(L(n).progress ? e.t(`FVTT_SCENE_MERGER.MergeStage.${L(n).progress.stage}`) : e.t("FVTT_SCENE_MERGER.MergeStage.validating")) + " ", 1), L(n).progress?.detail ? (B(), V("span", ah, " · " + k(L(n).progress.detail), 1)) : U("", !0)])]), L(n).canCancel ? (B(), V("button", {
				key: 0,
				class: "dui-btn dui-btn-warning dui-btn-outline dui-btn-sm",
				type: "button",
				onClick: o[1] ||= (e) => L(n).cancelMerge()
			}, k(L(n).cancelRequested ? e.t("FVTT_SCENE_MERGER.Actions.Cancelling") : e.t("FVTT_SCENE_MERGER.Actions.Cancel")), 1)) : (B(), V("span", oh, k(e.t("FVTT_SCENE_MERGER.Execution.CancellationClosed")), 1))]),
			H("progress", {
				class: "dui-progress tw:w-full",
				value: r.value,
				max: "100"
			}, null, 8, sh),
			H("div", ch, [H("span", null, k(e.t("FVTT_SCENE_MERGER.Execution.SourceSafety")), 1), H("span", null, k(r.value) + "%", 1)])
		])) : L(n).status === "success" && L(n).summary ? (B(), V("div", lh, [
			H("div", uh, [
				o[5] ||= H("span", { "aria-hidden": "true" }, "✓", -1),
				H("div", dh, [H("h2", fh, k(e.t("FVTT_SCENE_MERGER.Results.SuccessTitle", { name: L(n).summary.destinationSceneName })), 1), H("p", ph, k(e.t("FVTT_SCENE_MERGER.Results.SuccessDimensions", {
					width: L(n).summary.destinationWidth,
					height: L(n).summary.destinationHeight,
					count: L(n).summary.sourceCount
				})), 1)]),
				H("button", {
					class: "dui-btn dui-btn-sm",
					type: "button",
					onClick: o[2] ||= (e) => L(n).openDestination()
				}, k(e.t("FVTT_SCENE_MERGER.Actions.OpenScene")), 1)
			]),
			H("div", mh, [
				H("section", hh, [H("h3", gh, k(e.t("FVTT_SCENE_MERGER.Results.Copied")), 1), H("ul", _h, [(B(!0), V(z, null, Si(i.value, ([t, n]) => (B(), V("li", {
					key: t,
					class: "tw:flex tw:justify-between tw:gap-2"
				}, [H("span", null, k(e.t(`FVTT_SCENE_MERGER.Documents.${t}`)), 1), H("strong", null, k(n), 1)]))), 128)), i.value.length === 0 ? (B(), V("li", vh, k(e.t("FVTT_SCENE_MERGER.Results.None")), 1)) : U("", !0)])]),
				H("section", yh, [H("h3", bh, k(e.t("FVTT_SCENE_MERGER.Results.Skipped")), 1), H("ul", xh, [(B(!0), V(z, null, Si(a.value, ([t, n]) => (B(), V("li", {
					key: t,
					class: "tw:flex tw:justify-between tw:gap-2"
				}, [H("span", null, k(e.t(`FVTT_SCENE_MERGER.Documents.${t}`)), 1), H("strong", null, k(n), 1)]))), 128)), a.value.length === 0 ? (B(), V("li", Sh, k(e.t("FVTT_SCENE_MERGER.Results.NoneSkipped")), 1)) : U("", !0)])]),
				H("section", Ch, [H("h3", wh, k(e.t("FVTT_SCENE_MERGER.Results.Diagnostics")), 1), H("dl", Th, [
					H("dt", null, k(e.t("FVTT_SCENE_MERGER.Results.Rewritten")), 1),
					H("dd", Eh, k(L(n).summary.referencesRewritten), 1),
					H("dt", null, k(e.t("FVTT_SCENE_MERGER.Results.Unresolved")), 1),
					H("dd", Dh, k(L(n).summary.unresolvedReferences.length), 1),
					H("dt", null, k(e.t("FVTT_SCENE_MERGER.Results.Warnings")), 1),
					H("dd", Oh, k(L(n).summary.warnings.length), 1)
				])]),
				H("section", kh, [H("h3", Ah, k(e.t("FVTT_SCENE_MERGER.Results.Review")), 1), H("ul", jh, [
					(B(!0), V(z, null, Si(L(n).summary.warnings, (e) => (B(), V("li", { key: e }, k(s(e)), 1))), 128)),
					(B(!0), V(z, null, Si(L(n).summary.unresolvedReferences, (e) => (B(), V("li", { key: e }, k(e), 1))), 128)),
					!L(n).summary.warnings.length && !L(n).summary.unresolvedReferences.length ? (B(), V("li", Mh, k(e.t("FVTT_SCENE_MERGER.Results.NoReviewItems")), 1)) : U("", !0)
				])])
			]),
			H("div", Nh, [H("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				type: "button",
				onClick: o[3] ||= (e) => L(n).returnToEditing()
			}, k(e.t("FVTT_SCENE_MERGER.Actions.MergeAnother")), 1)])
		])) : L(n).status === "failure" ? (B(), V("div", Ph, [H("div", Fh, [
			o[6] ||= H("span", { "aria-hidden": "true" }, "×", -1),
			H("div", Ih, [
				H("h2", Lh, k(e.t("FVTT_SCENE_MERGER.Results.FailureTitle")), 1),
				H("p", Rh, k(e.t("FVTT_SCENE_MERGER.Results.FailureStage", { stage: e.t(`FVTT_SCENE_MERGER.MergeStage.${L(n).failureStage}`) })), 1),
				H("code", zh, k(L(n).failureMessage), 1),
				H("p", Bh, k(e.t("FVTT_SCENE_MERGER.Results.FailureSafety")), 1)
			]),
			H("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: o[4] ||= (e) => L(n).returnToEditing()
			}, k(e.t("FVTT_SCENE_MERGER.Actions.BackToSetup")), 1)
		])])) : U("", !0)]));
	}
}), Hh = { class: "tw:flex tw:flex-wrap tw:items-end tw:justify-between tw:gap-2" }, Uh = { class: "tw:flex tw:flex-wrap tw:items-end tw:gap-2" }, Wh = { class: "dui-fieldset tw:p-0" }, Gh = { class: "dui-fieldset-legend tw:py-0 tw:text-[0.68rem]" }, Kh = ["value", "disabled"], qh = { value: "none" }, Jh = { value: "pixel" }, Yh = { value: "grid" }, Xh = { value: "edge" }, Zh = {
	key: 0,
	class: "dui-fieldset tw:w-24 tw:p-0"
}, Qh = { class: "dui-fieldset-legend tw:py-0 tw:text-[0.68rem]" }, $h = ["value", "disabled"], eg = {
	key: 1,
	class: "dui-badge dui-badge-outline dui-badge-sm tw:mb-1.5"
}, tg = { class: "tw:flex tw:items-center tw:gap-1" }, ng = ["disabled", "aria-label"], rg = { class: "dui-badge dui-badge-ghost tw:min-w-16 tw:justify-center" }, ig = ["disabled", "aria-label"], ag = ["disabled"], og = ["disabled"], sg = /* @__PURE__ */ Yr({
	__name: "LayoutToolbar",
	props: { t: { type: Function } },
	emits: [
		"fit",
		"reset",
		"zoom"
	],
	setup(e, { emit: t }) {
		let n = t, r = qm();
		function i(e) {
			r.setSnap(e.currentTarget.value);
		}
		function a(e) {
			r.setSnap(r.snap.mode, Number(e.currentTarget.value));
		}
		return (t, o) => (B(), V("div", Hh, [H("div", Uh, [
			H("fieldset", Wh, [H("legend", Gh, k(e.t("FVTT_SCENE_MERGER.Layout.SnapMode")), 1), H("select", {
				class: "dui-select dui-select-sm",
				value: L(r).snap.mode,
				disabled: !L(r).setupEditable,
				onChange: i
			}, [
				H("option", qh, k(e.t("FVTT_SCENE_MERGER.Layout.Snap.none")), 1),
				H("option", Jh, k(e.t("FVTT_SCENE_MERGER.Layout.Snap.pixel")), 1),
				H("option", Yh, k(e.t("FVTT_SCENE_MERGER.Layout.Snap.grid")), 1),
				H("option", Xh, k(e.t("FVTT_SCENE_MERGER.Layout.Snap.edge")), 1)
			], 40, Kh)]),
			L(r).snap.mode === "pixel" ? (B(), V("fieldset", Zh, [H("legend", Qh, k(e.t("FVTT_SCENE_MERGER.Layout.Interval")), 1), H("input", {
				class: "dui-input dui-input-sm tw:w-full",
				type: "number",
				min: "1",
				step: "1",
				value: L(r).snap.pixelInterval,
				disabled: !L(r).setupEditable,
				onChange: a
			}, null, 40, $h)])) : U("", !0),
			L(r).snap.mode === "grid" ? (B(), V("span", eg, k(e.t("FVTT_SCENE_MERGER.Layout.GridSize", { size: L(r).snap.gridSize })), 1)) : U("", !0)
		]), H("div", tg, [
			H("button", {
				class: "dui-btn dui-btn-sm dui-btn-square",
				type: "button",
				disabled: !L(r).setupEditable,
				"aria-label": e.t("FVTT_SCENE_MERGER.Layout.ZoomOut"),
				onClick: o[0] ||= (e) => n("zoom", .8)
			}, " − ", 8, ng),
			H("span", rg, k(Math.round(L(r).view.zoom * 100)) + "%", 1),
			H("button", {
				class: "dui-btn dui-btn-sm dui-btn-square",
				type: "button",
				disabled: !L(r).setupEditable,
				"aria-label": e.t("FVTT_SCENE_MERGER.Layout.ZoomIn"),
				onClick: o[1] ||= (e) => n("zoom", 1.25)
			}, " + ", 8, ig),
			H("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				disabled: !L(r).setupEditable,
				onClick: o[2] ||= (e) => n("fit")
			}, k(e.t("FVTT_SCENE_MERGER.Layout.ZoomFit")), 9, ag),
			H("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				type: "button",
				disabled: !L(r).setupEditable,
				onClick: o[3] ||= (e) => n("reset")
			}, k(e.t("FVTT_SCENE_MERGER.Layout.ResetView")), 9, og)
		])]));
	}
}), cg = ["aria-disabled"], lg = { class: "tw:absolute tw:-top-6 tw:left-0 tw:whitespace-nowrap tw:text-[0.68rem] tw:text-accent" }, ug = [
	"disabled",
	"aria-label",
	"onPointerdown",
	"onKeydown"
], dg = ["src"], fg = { class: "tw:absolute tw:inset-x-2 tw:top-1.5 tw:min-w-0" }, pg = { class: "tw:block tw:truncate tw:text-xs" }, mg = { class: "tw:block tw:truncate tw:text-[0.65rem] tw:opacity-80" }, hg = { class: "tw:absolute tw:right-1.5 tw:bottom-1 tw:rounded-field tw:bg-neutral/80 tw:px-1.5 tw:py-0.5 tw:text-[0.62rem]" }, gg = {
	key: 1,
	class: "tw:pointer-events-none tw:absolute tw:inset-0 tw:flex tw:items-center tw:justify-center tw:p-8 tw:text-center tw:text-sm tw:opacity-60"
}, _g = { class: "tw:pointer-events-none tw:absolute tw:right-2 tw:bottom-2 tw:rounded-field tw:bg-base-300/85 tw:px-2 tw:py-1 tw:text-[0.65rem] tw:opacity-75" }, vg = /* @__PURE__ */ Yr({
	__name: "WorkspaceCanvas",
	props: { t: { type: Function } },
	setup(e, { expose: t }) {
		let n = qm(), r = /* @__PURE__ */ I(null), i = /* @__PURE__ */ I(null), a = G(() => new Map(n.availableScenes.map((e) => [e.id, e]))), o = G(() => new Set(n.overlaps.flatMap((e) => [e.firstSceneId, e.secondSceneId]))), s = G(() => ({
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
		let l = G(() => ({
			height: `${n.arrangementBounds.height * n.view.zoom}px`,
			left: `${n.view.panX + n.arrangementBounds.minX * n.view.zoom}px`,
			top: `${n.view.panY + n.arrangementBounds.minY * n.view.zoom}px`,
			width: `${n.arrangementBounds.width * n.view.zoom}px`
		})), u = G(() => ({
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
		}), (t, i) => (B(), V("div", {
			ref_key: "workspace",
			ref: r,
			class: ge(["layout-workspace tw:relative tw:min-h-[440px] tw:touch-none tw:overflow-hidden tw:rounded-box tw:border tw:border-base-300 tw:bg-base-100 tw:select-none", { "tw:pointer-events-none tw:opacity-70": !L(n).setupEditable }]),
			"aria-disabled": !L(n).setupEditable,
			style: de(u.value),
			onPointerdown: f,
			onPointermove: m,
			onPointerup: h,
			onPointercancel: h,
			onWheel: sc(g, ["prevent"])
		}, [
			L(n).placements.length ? (B(), V("div", {
				key: 0,
				class: "layout-total-bounds tw:pointer-events-none tw:absolute tw:border tw:border-dashed tw:border-accent/70",
				style: de(l.value)
			}, [H("span", lg, k(e.t("FVTT_SCENE_MERGER.Layout.TotalBounds")), 1)], 4)) : U("", !0),
			(B(!0), V(z, null, Si(L(n).placements, (t) => (B(), V("button", {
				key: t.sceneId,
				class: ge(["layout-scene tw:absolute tw:overflow-hidden tw:rounded-field tw:border-2 tw:border-secondary tw:bg-neutral tw:p-0 tw:text-left tw:text-neutral-content tw:shadow-lg tw:focus:outline-2 tw:focus:outline-accent", { "layout-scene-overlap": o.value.has(t.sceneId) }]),
				style: de(c(t)),
				type: "button",
				disabled: !L(n).setupEditable,
				"aria-label": e.t("FVTT_SCENE_MERGER.Layout.DragScene", { name: a.value.get(t.sceneId)?.name ?? t.sceneId }),
				onPointerdown: (e) => p(e, t),
				onKeydown: (e) => _(e, t)
			}, [
				a.value.get(t.sceneId)?.thumbnail ? (B(), V("img", {
					key: 0,
					class: "tw:absolute tw:inset-0 tw:h-full tw:w-full tw:object-cover tw:opacity-45",
					src: a.value.get(t.sceneId)?.thumbnail ?? "",
					alt: "",
					draggable: "false"
				}, null, 8, dg)) : U("", !0),
				i[0] ||= H("span", { class: "tw:absolute tw:inset-0 tw:bg-neutral/30" }, null, -1),
				H("span", fg, [H("strong", pg, k(a.value.get(t.sceneId)?.name), 1), H("small", mg, k(t.width) + " × " + k(t.height), 1)]),
				H("span", hg, k(Math.round(t.x)) + ", " + k(Math.round(t.y)), 1)
			], 46, ug))), 128)),
			L(n).placements.length === 0 ? (B(), V("div", gg, k(e.t("FVTT_SCENE_MERGER.Layout.Empty")), 1)) : U("", !0),
			H("div", _g, k(e.t("FVTT_SCENE_MERGER.Layout.PanZoomHint")), 1)
		], 46, cg));
	}
}), yg = { class: "dui-card dui-card-border tw:min-w-0 tw:bg-base-200" }, bg = { class: "dui-card-body tw:gap-3 tw:p-3" }, xg = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-2" }, Sg = { class: "dui-card-title tw:text-base" }, Cg = { class: "tw:m-0 tw:text-xs tw:opacity-65" }, wg = { class: "tw:flex tw:flex-wrap tw:gap-1" }, Tg = { class: "dui-badge dui-badge-outline dui-badge-sm" }, Eg = { class: "dui-badge dui-badge-outline dui-badge-sm" }, Dg = { class: "dui-badge dui-badge-secondary dui-badge-sm" }, Og = {
	key: 0,
	role: "alert",
	class: "dui-alert dui-alert-warning dui-alert-soft tw:py-2 tw:text-sm"
}, kg = /* @__PURE__ */ Yr({
	__name: "LayoutPanel",
	props: { t: { type: Function } },
	setup(e, { expose: t }) {
		let n = qm(), r = /* @__PURE__ */ I(null);
		Vr(() => n.placements.length, async (e, t) => {
			e > 0 && t === 0 && (await Gn(), r.value?.fit());
		});
		function i(e) {
			r.value?.locate(e);
		}
		return t({ locateScene: i }), (t, i) => (B(), V("section", yg, [H("div", bg, [
			H("div", xg, [H("div", null, [H("h2", Sg, k(e.t("FVTT_SCENE_MERGER.Layout.Title")), 1), H("p", Cg, k(e.t("FVTT_SCENE_MERGER.Layout.Help")), 1)]), H("div", wg, [
				H("span", Tg, "X " + k(Math.round(L(n).arrangementBounds.minX)) + " → " + k(Math.round(L(n).arrangementBounds.maxX)), 1),
				H("span", Eg, "Y " + k(Math.round(L(n).arrangementBounds.minY)) + " → " + k(Math.round(L(n).arrangementBounds.maxY)), 1),
				H("span", Dg, k(Math.round(L(n).arrangementBounds.width).toLocaleString()) + " × " + k(Math.round(L(n).arrangementBounds.height).toLocaleString()), 1)
			])]),
			To(sg, {
				t: e.t,
				onFit: i[0] ||= (e) => r.value?.fit(),
				onReset: i[1] ||= (e) => r.value?.reset(),
				onZoom: i[2] ||= (e) => r.value?.zoom(e)
			}, null, 8, ["t"]),
			To(vg, {
				ref_key: "workspaceComponent",
				ref: r,
				t: e.t
			}, null, 8, ["t"]),
			L(n).overlaps.length ? (B(), V("div", Og, [i[3] ||= H("span", { "aria-hidden": "true" }, "△", -1), H("span", null, k(e.t("FVTT_SCENE_MERGER.Layout.OverlapWarning", { count: L(n).overlaps.length })), 1)])) : U("", !0)
		])]));
	}
}), Ag = { class: "dui-card dui-card-border tw:bg-base-200" }, jg = { class: "dui-card-body tw:gap-4 tw:p-3" }, Mg = { class: "dui-card-title tw:text-base" }, Ng = { class: "tw:m-0 tw:text-xs tw:opacity-65" }, Pg = { class: "tw:grid tw:gap-4 tw:lg:grid-cols-2" }, Fg = { class: "dui-fieldset tw:min-w-0 tw:rounded-box tw:bg-base-300/50 tw:p-3" }, Ig = { class: "dui-fieldset-legend" }, Lg = { class: "tw:grid tw:gap-x-4 tw:gap-y-2 tw:sm:grid-cols-2" }, Rg = { class: "tw:min-w-0" }, zg = { class: "tw:block tw:text-sm tw:font-medium" }, Bg = { class: "tw:block tw:text-[0.68rem] tw:opacity-60" }, Vg = {
	key: 0,
	class: "dui-badge dui-badge-warning dui-badge-soft dui-badge-xs tw:mt-1"
}, Hg = [
	"checked",
	"disabled",
	"onChange"
], Ug = { class: "dui-fieldset tw:min-w-0 tw:rounded-box tw:bg-base-300/50 tw:p-3" }, Wg = { class: "dui-fieldset-legend" }, Gg = {
	class: "dui-label tw:pb-0 tw:text-xs",
	for: "scene-merger-name"
}, Kg = ["value", "disabled"], qg = {
	class: "dui-label tw:pb-0 tw:text-xs",
	for: "scene-merger-folder"
}, Jg = ["value", "disabled"], Yg = { value: "" }, Xg = ["value"], Zg = { class: "tw:mt-2 tw:grid tw:gap-2" }, Qg = { class: "tw:block" }, $g = { class: "tw:block tw:text-[0.68rem] tw:opacity-60" }, e_ = [
	"checked",
	"disabled",
	"onChange"
], t_ = /* @__PURE__ */ Yr({
	__name: "MergeOptionsPanel",
	props: { t: { type: Function } },
	setup(e) {
		let t = qm(), n = [
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
		return (s, c) => (B(), V("section", Ag, [H("div", jg, [H("div", null, [H("h2", Mg, k(e.t("FVTT_SCENE_MERGER.Options.Title")), 1), H("p", Ng, k(e.t("FVTT_SCENE_MERGER.Options.Help")), 1)]), H("div", Pg, [H("fieldset", Fg, [H("legend", Ig, k(e.t("FVTT_SCENE_MERGER.Options.ContentTitle")), 1), H("div", Lg, [(B(), V(z, null, Si(n, (n) => H("label", {
			key: n,
			class: "tw:flex tw:min-w-0 tw:items-start tw:justify-between tw:gap-2 tw:rounded-field tw:bg-base-200 tw:p-2"
		}, [H("span", Rg, [
			H("span", zg, k(e.t(`FVTT_SCENE_MERGER.Options.Content.${n}.Label`)), 1),
			H("span", Bg, k(e.t(`FVTT_SCENE_MERGER.Options.Content.${n}.Help`)), 1),
			L(Hm)[n] === "unavailable" ? (B(), V("span", Vg, k(e.t("FVTT_SCENE_MERGER.Options.UnavailableV14")), 1)) : U("", !0)
		]), H("input", {
			class: "dui-toggle dui-toggle-sm",
			type: "checkbox",
			checked: L(t).content[n],
			disabled: L(Hm)[n] === "unavailable" || !L(t).setupEditable,
			onChange: (e) => r(n, e)
		}, null, 40, Hg)])), 64))])]), H("fieldset", Ug, [
			H("legend", Wg, k(e.t("FVTT_SCENE_MERGER.Options.DestinationTitle")), 1),
			H("label", Gg, k(e.t("FVTT_SCENE_MERGER.Options.Name")), 1),
			H("input", {
				id: "scene-merger-name",
				class: "dui-input dui-input-sm tw:w-full",
				type: "text",
				value: L(t).destination.name,
				disabled: !L(t).setupEditable,
				onChange: i
			}, null, 40, Kg),
			H("label", qg, k(e.t("FVTT_SCENE_MERGER.Options.Folder")), 1),
			H("select", {
				id: "scene-merger-folder",
				class: "dui-select dui-select-sm tw:w-full",
				value: L(t).destination.folderId ?? "",
				disabled: !L(t).setupEditable,
				onChange: a
			}, [H("option", Yg, k(e.t("FVTT_SCENE_MERGER.Selection.RootFolder")), 1), (B(!0), V(z, null, Si(L(t).folderChoices, (e) => (B(), V("option", {
				key: e.id,
				value: e.id
			}, k(e.name), 9, Xg))), 128))], 40, Jg),
			H("div", Zg, [(B(), V(z, null, Si([
				"navigation",
				"openAfterMerge",
				"activateAfterMerge",
				"lockBackgroundTiles"
			], (n) => H("label", {
				key: n,
				class: "tw:flex tw:items-center tw:justify-between tw:gap-3 tw:text-sm"
			}, [H("span", null, [H("span", Qg, k(e.t(`FVTT_SCENE_MERGER.Options.Destination.${n}.Label`)), 1), H("span", $g, k(e.t(`FVTT_SCENE_MERGER.Options.Destination.${n}.Help`)), 1)]), H("input", {
				class: "dui-checkbox dui-checkbox-sm",
				type: "checkbox",
				checked: L(t).destination[n],
				disabled: !L(t).setupEditable,
				onChange: (e) => o(n, e)
			}, null, 40, e_)])), 64))])
		])])])]));
	}
}), n_ = { class: "dui-card dui-card-border tw:min-h-0 tw:bg-base-200" }, r_ = { class: "dui-card-body tw:min-h-0 tw:gap-3 tw:p-3" }, i_ = { class: "tw:flex tw:items-center tw:justify-between tw:gap-2" }, a_ = { class: "dui-card-title tw:text-base" }, o_ = { class: "tw:m-0 tw:text-xs tw:opacity-65" }, s_ = { class: "dui-badge dui-badge-neutral dui-badge-sm" }, c_ = { class: "dui-input dui-input-sm tw:flex tw:w-full tw:items-center tw:gap-2" }, l_ = ["disabled", "placeholder"], u_ = { class: "scene-list-scroll tw:min-h-32 tw:flex-1 tw:overflow-auto tw:rounded-box tw:bg-base-300/60 tw:p-1" }, d_ = {
	key: 0,
	class: "dui-list tw:m-0 tw:list-none tw:gap-1 tw:p-0"
}, f_ = { class: "tw:h-10 tw:w-12 tw:overflow-hidden tw:rounded-field tw:bg-neutral" }, p_ = ["src"], m_ = {
	key: 1,
	class: "tw:flex tw:h-full tw:items-center tw:justify-center tw:text-xs tw:opacity-50",
	"aria-hidden": "true"
}, h_ = { class: "tw:min-w-0" }, g_ = { class: "tw:truncate tw:text-sm tw:font-semibold" }, __ = { class: "tw:truncate tw:text-[0.7rem] tw:opacity-65" }, v_ = { class: "tw:text-[0.7rem] tw:opacity-65" }, y_ = { class: "tw:text-[0.68rem] tw:opacity-60" }, b_ = [
	"disabled",
	"aria-label",
	"onClick"
], x_ = {
	key: 1,
	class: "tw:m-3 tw:text-center tw:text-sm tw:opacity-60"
}, S_ = { class: "tw:flex tw:items-center tw:justify-between tw:gap-2" }, C_ = { class: "tw:m-0 tw:text-sm tw:font-semibold" }, w_ = ["disabled"], T_ = { class: "dui-list tw:m-0 tw:max-h-56 tw:list-none tw:overflow-auto tw:p-0" }, E_ = { class: "dui-badge dui-badge-ghost dui-badge-xs" }, D_ = { class: "tw:min-w-0" }, O_ = { class: "tw:truncate tw:text-sm tw:font-medium" }, k_ = { class: "tw:text-[0.68rem] tw:opacity-60" }, A_ = { class: "tw:flex tw:gap-0.5" }, j_ = [
	"disabled",
	"aria-label",
	"onClick"
], M_ = [
	"disabled",
	"aria-label",
	"onClick"
], N_ = [
	"disabled",
	"aria-label",
	"onClick"
], P_ = [
	"disabled",
	"aria-label",
	"onClick"
], F_ = /* @__PURE__ */ Yr({
	__name: "SceneSelectionPanel",
	props: { t: { type: Function } },
	emits: ["locate"],
	setup(e, { emit: t }) {
		let n = t, r = qm(), i = /* @__PURE__ */ I(""), a = G(() => {
			let e = i.value.trim().toLocaleLowerCase();
			return r.availableScenes.filter((t) => r.selectedSceneIds.includes(t.id) ? !1 : e ? `${t.name} ${t.folderName ?? ""}`.toLocaleLowerCase().includes(e) : !0);
		});
		function o(e, t) {
			return `${e.toLocaleString()} × ${t.toLocaleString()}`;
		}
		return (t, s) => (B(), V("aside", n_, [H("div", r_, [
			H("div", i_, [H("div", null, [H("h2", a_, k(e.t("FVTT_SCENE_MERGER.Selection.Title")), 1), H("p", o_, k(e.t("FVTT_SCENE_MERGER.Selection.Help")), 1)]), H("span", s_, k(L(r).selectedScenes.length), 1)]),
			H("label", c_, [s[2] ||= H("span", { "aria-hidden": "true" }, "⌕", -1), Pr(H("input", {
				"onUpdate:modelValue": s[0] ||= (e) => i.value = e,
				class: "tw:min-w-0 tw:flex-1",
				type: "search",
				disabled: !L(r).setupEditable,
				placeholder: e.t("FVTT_SCENE_MERGER.Selection.Search")
			}, null, 8, l_), [[ic, i.value]])]),
			H("div", u_, [a.value.length ? (B(), V("ul", d_, [(B(!0), V(z, null, Si(a.value, (t) => (B(), V("li", {
				key: t.id,
				class: "dui-list-row tw:grid-cols-[3rem_minmax(0,1fr)_auto] tw:items-center tw:gap-2 tw:bg-base-200 tw:p-2"
			}, [
				H("div", f_, [t.thumbnail ? (B(), V("img", {
					key: 0,
					class: "tw:h-full tw:w-full tw:object-cover",
					src: t.thumbnail,
					alt: ""
				}, null, 8, p_)) : (B(), V("span", m_, "▧"))]),
				H("div", h_, [
					H("div", g_, k(t.name), 1),
					H("div", __, k(t.folderName ?? e.t("FVTT_SCENE_MERGER.Selection.RootFolder")), 1),
					H("div", v_, k(o(t.dimensions.sceneWidth, t.dimensions.sceneHeight)), 1),
					H("div", y_, k(e.t("FVTT_SCENE_MERGER.Selection.GridDetails", {
						type: t.grid.type,
						size: t.grid.size,
						distance: t.grid.distance,
						units: t.grid.units
					})), 1)
				]),
				H("button", {
					class: "dui-btn dui-btn-sm dui-btn-square",
					type: "button",
					disabled: !L(r).setupEditable || !t.canMerge,
					"aria-label": e.t("FVTT_SCENE_MERGER.Selection.AddNamed", { name: t.name }),
					onClick: (e) => L(r).addScene(t.id)
				}, " + ", 8, b_)
			]))), 128))])) : (B(), V("p", x_, k(e.t("FVTT_SCENE_MERGER.Selection.NoMatches")), 1))]),
			H("div", S_, [H("h3", C_, k(e.t("FVTT_SCENE_MERGER.Selection.Selected")), 1), H("button", {
				class: "dui-btn dui-btn-ghost dui-btn-xs",
				type: "button",
				disabled: !L(r).setupEditable || L(r).selectedScenes.length === 0,
				onClick: s[1] ||= (e) => L(r).clearScenes()
			}, k(e.t("FVTT_SCENE_MERGER.Actions.Clear")), 9, w_)]),
			H("ol", T_, [(B(!0), V(z, null, Si(L(r).selectedScenes, (t, i) => (B(), V("li", {
				key: t.id,
				class: "dui-list-row tw:grid-cols-[1.5rem_minmax(0,1fr)_auto] tw:items-center tw:gap-1 tw:px-2 tw:py-1.5"
			}, [
				H("span", E_, k(i + 1), 1),
				H("div", D_, [H("div", O_, k(t.name), 1), H("div", k_, k(o(t.dimensions.sceneWidth, t.dimensions.sceneHeight)), 1)]),
				H("div", A_, [
					H("button", {
						class: "dui-btn dui-btn-ghost dui-btn-xs dui-btn-square",
						type: "button",
						disabled: !L(r).setupEditable || i === 0,
						"aria-label": e.t("FVTT_SCENE_MERGER.Actions.MoveUp"),
						onClick: (e) => L(r).reorderScene(t.id, -1)
					}, " ↑ ", 8, j_),
					H("button", {
						class: "dui-btn dui-btn-ghost dui-btn-xs dui-btn-square",
						type: "button",
						disabled: !L(r).setupEditable || i === L(r).selectedScenes.length - 1,
						"aria-label": e.t("FVTT_SCENE_MERGER.Actions.MoveDown"),
						onClick: (e) => L(r).reorderScene(t.id, 1)
					}, " ↓ ", 8, M_),
					H("button", {
						class: "dui-btn dui-btn-ghost dui-btn-xs dui-btn-square",
						type: "button",
						disabled: !L(r).setupEditable,
						"aria-label": e.t("FVTT_SCENE_MERGER.Actions.Locate"),
						onClick: (e) => n("locate", t.id)
					}, " ◎ ", 8, N_),
					H("button", {
						class: "dui-btn dui-btn-ghost dui-btn-xs dui-btn-square",
						type: "button",
						disabled: !L(r).setupEditable,
						"aria-label": e.t("FVTT_SCENE_MERGER.Selection.RemoveNamed", { name: t.name }),
						onClick: (e) => L(r).removeScene(t.id)
					}, " × ", 8, P_)
				])
			]))), 128))])
		])]));
	}
}), I_ = { class: "dui-card dui-card-border tw:bg-base-200" }, L_ = { class: "dui-card-body tw:gap-3 tw:p-3" }, R_ = { class: "tw:flex tw:items-start tw:justify-between tw:gap-2" }, z_ = { class: "dui-card-title tw:text-base" }, B_ = { class: "tw:m-0 tw:text-xs tw:opacity-65" }, V_ = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-sm"
}, H_ = {
	key: 1,
	class: "dui-badge dui-badge-success dui-badge-soft"
}, U_ = {
	key: 2,
	class: "dui-badge dui-badge-error dui-badge-soft"
}, W_ = { class: "tw:flex tw:flex-wrap tw:gap-1" }, G_ = { class: "dui-badge dui-badge-outline dui-badge-sm" }, K_ = { class: "dui-badge dui-badge-outline dui-badge-sm" }, q_ = { class: "dui-badge dui-badge-outline dui-badge-sm" }, J_ = { class: "dui-badge dui-badge-outline dui-badge-sm" }, Y_ = {
	key: 0,
	class: "dui-badge dui-badge-warning dui-badge-soft dui-badge-sm"
}, X_ = {
	key: 0,
	class: "tw:grid tw:gap-2"
}, Z_ = { class: "tw:block" }, Q_ = {
	key: 0,
	class: "tw:opacity-70"
}, $_ = {
	key: 1,
	class: "tw:grid tw:gap-2"
}, ev = { class: "tw:block" }, tv = {
	key: 0,
	class: "tw:opacity-70"
}, nv = { class: "tw:flex tw:items-start tw:gap-2 tw:rounded-box tw:bg-warning/10 tw:p-2 tw:text-sm" }, rv = ["checked", "disabled"], iv = { class: "tw:block" }, av = { class: "tw:opacity-70" }, ov = {
	key: 2,
	role: "alert",
	class: "dui-alert dui-alert-success dui-alert-soft tw:py-2 tw:text-sm"
}, sv = /* @__PURE__ */ Yr({
	__name: "ValidationPanel",
	props: { t: { type: Function } },
	setup(e) {
		let t = qm(), n = G(() => Im(t.selectedScenes, t.arrangementBounds, { ...t.content }));
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
		return (s, c) => (B(), V("section", I_, [H("div", L_, [
			H("div", R_, [H("div", null, [H("h2", z_, k(e.t("FVTT_SCENE_MERGER.Validation.Title")), 1), H("p", B_, k(e.t("FVTT_SCENE_MERGER.Validation.Help")), 1)]), L(t).validating ? (B(), V("span", V_)) : L(t).validation?.canMerge ? (B(), V("span", H_, k(e.t("FVTT_SCENE_MERGER.Validation.Ready")), 1)) : (B(), V("span", U_, k(e.t("FVTT_SCENE_MERGER.Validation.Blocked")), 1))]),
			H("div", W_, [
				H("span", G_, k(e.t("FVTT_SCENE_MERGER.Validation.Estimate.Area", { value: a(L(t).arrangementBounds.width * L(t).arrangementBounds.height) })), 1),
				H("span", K_, k(e.t("FVTT_SCENE_MERGER.Validation.Estimate.Textures", { value: a(n.value.texturePixels) })), 1),
				H("span", q_, k(e.t("FVTT_SCENE_MERGER.Validation.Estimate.Walls", { value: n.value.documents.Wall ?? 0 })), 1),
				H("span", J_, k(e.t("FVTT_SCENE_MERGER.Validation.Estimate.Tokens", { value: n.value.documents.Token ?? 0 })), 1),
				n.value.animatedAssets ? (B(), V("span", Y_, k(e.t("FVTT_SCENE_MERGER.Validation.Estimate.Animated", { value: n.value.animatedAssets })), 1)) : U("", !0)
			]),
			L(t).validation?.blocking.length ? (B(), V("div", X_, [(B(!0), V(z, null, Si(L(t).validation.blocking, (t, n) => (B(), V("div", {
				key: `${t.code}-${n}`,
				role: "alert",
				class: "dui-alert dui-alert-error dui-alert-soft tw:items-start tw:py-2 tw:text-sm"
			}, [c[0] ||= H("span", { "aria-hidden": "true" }, "×", -1), H("span", null, [H("strong", Z_, k(e.t(r(t), t.details)), 1), Object.keys(t.details).length ? (B(), V("small", Q_, k(i(t)), 1)) : U("", !0)])]))), 128))])) : U("", !0),
			L(t).validation?.warnings.length ? (B(), V("div", $_, [(B(!0), V(z, null, Si(L(t).validation.warnings, (t, n) => (B(), V("div", {
				key: `${t.code}-${n}`,
				role: "alert",
				class: "dui-alert dui-alert-warning dui-alert-soft tw:items-start tw:py-2 tw:text-sm"
			}, [c[1] ||= H("span", { "aria-hidden": "true" }, "!", -1), H("span", null, [H("strong", ev, k(e.t(r(t), t.details)), 1), Object.keys(t.details).length ? (B(), V("small", tv, k(i(t)), 1)) : U("", !0)])]))), 128)), H("label", nv, [H("input", {
				class: "dui-checkbox dui-checkbox-warning dui-checkbox-sm tw:mt-0.5",
				type: "checkbox",
				checked: L(t).warningsAcknowledged,
				disabled: !L(t).setupEditable,
				onChange: o
			}, null, 40, rv), H("span", null, [H("strong", iv, k(e.t("FVTT_SCENE_MERGER.Validation.Acknowledge")), 1), H("small", av, k(e.t("FVTT_SCENE_MERGER.Validation.AcknowledgeHelp")), 1)])])])) : U("", !0),
			L(t).validation && !L(t).validation.blocking.length && !L(t).validation.warnings.length ? (B(), V("div", ov, [c[2] ||= H("span", { "aria-hidden": "true" }, "✓", -1), H("span", null, k(e.t("FVTT_SCENE_MERGER.Validation.NoIssues")), 1)])) : U("", !0)
		])]));
	}
}), cv = { class: "scene-merger-shell tw:flex tw:min-h-[720px] tw:flex-col tw:gap-3 tw:p-3 tw:text-base-content" }, lv = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-3" }, uv = { class: "tw:flex tw:items-center tw:gap-2" }, dv = { class: "dui-badge dui-badge-neutral dui-badge-sm" }, fv = { class: "tw:m-0 tw:text-xl tw:font-semibold" }, pv = { class: "tw:mt-1 tw:mb-0 tw:text-sm tw:opacity-70" }, mv = { class: "dui-badge dui-badge-outline tw:gap-2" }, hv = {
	key: 0,
	class: "dui-loading dui-loading-spinner dui-loading-xs"
}, gv = {
	key: 0,
	class: "dui-card dui-card-border tw:flex-1 tw:bg-base-200"
}, _v = { class: "dui-card-body tw:items-center tw:justify-center tw:text-center" }, vv = { class: "dui-card-title" }, yv = { class: "tw:grid tw:min-h-0 tw:flex-1 tw:gap-3 tw:xl:grid-cols-[21rem_minmax(0,1fr)]" }, bv = { class: "tw:grid tw:gap-3 tw:xl:grid-cols-[minmax(0,1fr)_minmax(22rem,0.72fr)]" }, xv = /* @__PURE__ */ Yr({
	__name: "SceneMergerApp",
	props: {
		services: {},
		t: { type: Function }
	},
	setup(e) {
		let t = e, n = qm(), r = /* @__PURE__ */ I(null);
		fi(() => {
			n.initialize(t.services, t.t("FVTT_SCENE_MERGER.Defaults.DestinationName"));
		});
		function i(e) {
			r.value?.locateScene(e);
		}
		return (t, a) => (B(), V("main", cv, [H("header", lv, [H("div", null, [H("div", uv, [H("span", dv, k(e.t("FVTT_SCENE_MERGER.App.GmBadge")), 1), H("h1", fv, k(e.t("FVTT_SCENE_MERGER.App.Title")), 1)]), H("p", pv, k(e.t("FVTT_SCENE_MERGER.App.Subtitle")), 1)]), H("span", mv, [L(n).status === "loading" ? (B(), V("span", hv)) : U("", !0), Ao(" " + k(e.t(`FVTT_SCENE_MERGER.Status.${L(n).status}`)), 1)])]), L(n).status === "loading" ? (B(), V("div", gv, [H("div", _v, [
			a[0] ||= H("span", { class: "dui-loading dui-loading-ring dui-loading-lg" }, null, -1),
			H("h2", vv, k(e.t("FVTT_SCENE_MERGER.Loading.Title")), 1),
			H("p", null, k(e.t("FVTT_SCENE_MERGER.Loading.Body")), 1)
		])])) : (B(), V(z, { key: 1 }, [
			H("section", yv, [To(F_, {
				t: e.t,
				onLocate: i
			}, null, 8, ["t"]), To(kg, {
				ref_key: "layoutPanel",
				ref: r,
				t: e.t
			}, null, 8, ["t"])]),
			H("section", bv, [To(t_, { t: e.t }, null, 8, ["t"]), To(sv, { t: e.t }, null, 8, ["t"])]),
			To(Vh, { t: e.t }, null, 8, ["t"])
		], 64))]));
	}
}), Q = "fvtt-scene-merger", Sv = "Foundry VTT Scene Merger", Cv = "FVTT_SCENE_MERGER";
//#endregion
//#region src/module/logging/logger.ts
function wv() {
	try {
		return game?.settings.get(Q, "debugLogging") === !0;
	} catch {
		return !1;
	}
}
var Tv = {
	debug(e, t) {
		wv() && console.debug(`${Sv} | ${e}`, t ?? "");
	},
	error(e, t) {
		console.error(`${Sv} | ${e}`, t ?? "");
	},
	info(e, t) {
		console.info(`${Sv} | ${e}`, t ?? "");
	},
	warn(e, t) {
		console.warn(`${Sv} | ${e}`, t ?? "");
	}
};
//#endregion
//#region src/module/runtime/runtime-utils.ts
function Ev() {
	if (!game) throw Error("Foundry game data is not available yet.");
	return game;
}
function Dv(e) {
	let t = Ev().scenes.get(e);
	if (!t) throw Error(`Source Scene ${e} is unavailable.`);
	return t;
}
function Ov(e) {
	return Av(e);
}
function kv(e) {
	return Ov(e.toObject(!0));
}
function Av(e) {
	if (Array.isArray(e)) return e.map(Av);
	if (e instanceof Set) return [...e].map(Av);
	if (e && typeof e == "object") {
		let t = {};
		for (let [n, r] of Object.entries(e)) t[n] = Av(r);
		return t;
	}
	return e;
}
function $(e) {
	if (!(!e || typeof e != "object" || Array.isArray(e))) return e;
}
function jv(e) {
	return Array.isArray(e) ? e.map($).filter((e) => !!e) : [];
}
function Mv(e, t = 0) {
	return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Nv(e, t = "") {
	return typeof e == "string" ? e : t;
}
function Pv(e) {
	let t = e._id;
	return typeof t == "string" && t.length > 0 ? t : void 0;
}
function Fv(e) {
	return e instanceof Error ? e.message : String(e);
}
function Iv(e) {
	return typeof e == "string" && /\.(?:m4v|mp4|ogg|ogv|webm)(?:[?#].*)?$/i.test(e);
}
async function Lv() {
	await new Promise((e) => {
		setTimeout(e, 0);
	});
}
function Rv(e) {
	return e.replace(/([a-z])([A-Z])/g, "$1 $2").replaceAll(".", ": ").replace(/^./, (e) => e.toUpperCase());
}
//#endregion
//#region src/module/settings/settings-values.ts
function zv() {
	return Ev().settings.get(Q, "cleanupPartialDestination") !== !1;
}
//#endregion
//#region src/module/runtime/merge/errors.ts
var Bv = class extends Error {
	constructor() {
		super("Scene merge cancelled."), this.name = "MergeCancelledError";
	}
}, Vv = class extends Error {
	cleanupError;
	destinationSceneId;
	originalError;
	stage;
	constructor(e) {
		let t = e.cleanupError ? ` Cleanup also failed: ${Fv(e.cleanupError)}` : "", n = e.destinationSceneId ? ` Partial destination Scene: ${e.destinationSceneId}.` : "";
		super(`Scene merge failed during ${e.stage}: ${Fv(e.error)}.${t}${n}`), this.name = "SceneMergeError", this.cleanupError = e.cleanupError ? Fv(e.cleanupError) : null, this.destinationSceneId = e.destinationSceneId ?? null, this.originalError = e.error, this.stage = e.stage;
	}
}, Hv = class {
	#e = !1;
	cancel() {
		this.#e = !0;
	}
	throwIfCancelled() {
		if (this.#e) throw new Bv();
	}
}, Uv = class {
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
async function Wv(e, t = (e) => Scene.implementation.create(e)) {
	let n = await t(e);
	if (!n) throw Error("Foundry did not return a destination Scene after creation.");
	try {
		return new Uv(n);
	} catch (e) {
		try {
			await n.delete();
		} catch (t) {
			throw Error(`${Fv(e)} Cleanup of the invalid Scene${n.id ? ` ${n.id}` : ""} also failed: ${Fv(t)}`, { cause: t });
		}
		throw e;
	}
}
var Gv = {
	callHook(e, ...t) {
		Hooks.callAll(e, ...t);
	},
	createDestination: Wv,
	notifyError(e) {
		ui?.notifications?.error(e);
	},
	notifyInfo(e) {
		ui?.notifications?.info(e);
	}
}, Kv = /* @__PURE__ */ new Map();
function qv(e) {
	if (!e.id.trim()) throw Error("A Scene Merger extension must have a non-empty id.");
	if (Kv.has(e.id)) throw Error(`A Scene Merger extension with id ${e.id} is already registered.`);
	return Kv.set(e.id, e), () => Kv.delete(e.id);
}
function Jv() {
	return [...Kv.values()];
}
function Yv(e, t, n) {
	return qv({
		documentTransformers: { [t]: n },
		id: e
	});
}
function Xv(e, t) {
	return qv({
		id: e,
		validate: t
	});
}
function Zv(e, t) {
	return qv({
		id: e,
		referenceRewriter: t
	});
}
async function Qv(e) {
	for (let t of Jv()) await t.preMerge?.(e);
}
async function $v(e) {
	for (let t of Jv()) await t.postMerge?.(e);
}
//#endregion
//#region src/module/runtime/background-tiles.ts
function ey(e, t, n, r) {
	let i = new Map(t.map((e) => [e.sceneId, e])), a = new Map([...t].sort((e, t) => e.order - t.order).map((e, t) => [e.sceneId, t])), o = Math.max(1, ...e.map((e) => e.documents.Tile?.length ?? 0)) + 1, s = ny(e), c = [];
	for (let l of e) {
		let e = i.get(l.id), u = a.get(l.id) ?? 0, d = l.documents.Level?.[0];
		if (!e || !d) continue;
		let f = $(d.textures) ?? {};
		ty(c, "background", $(d.background), f, l, e, n, r, s.background, -(t.length * 2) + u), ty(c, "foreground", $(d.foreground), f, l, e, n, r, s.foreground, (t.length + 1) * o + u);
	}
	return c;
}
function ty(e, t, n, r, i, a, o, s, c, l) {
	if (typeof n?.src != "string" || n.src.length === 0) return;
	let u = {
		...Ov(r),
		...Ov(n)
	};
	delete u.color, e.push({
		alpha: 1,
		anchorX: 0,
		anchorY: 0,
		elevation: c,
		flags: { [Q]: { importedLevelTexture: {
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
function ny(e) {
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
var ry = "_temporaryProvenance";
function iy(e, t) {
	let n = Ov(e), r = Ov($(n.flags) ?? {}), i = Ov($(r["fvtt-scene-merger"]) ?? {}), a = Object.hasOwn(i, ry), o = i[ry];
	return i[ry] = {
		documentId: t.documentId,
		documentType: t.documentType,
		parentIds: [...t.parentIds ?? []],
		sceneId: t.sceneId,
		sourceKey: em(t),
		hadPrevious: a,
		previousValue: o
	}, r[Q] = i, n.flags = r, n;
}
function ay(e) {
	let t = Ov(e), n = $(t.flags), r = $(n?.[Q]), i = $(r?.[ry]);
	return n && r && i && (i.hadPrevious === !0 ? r[ry] = oy(i.previousValue) : delete r[ry], Object.keys(r).length === 0 && delete n[Q], t.flags = n), delete t._stats, Array.isArray(t.behaviors) && (t.behaviors = jv(t.behaviors).map(ay)), t;
}
function oy(e) {
	return e && typeof e == "object" ? Ov(e) : e;
}
function sy(e) {
	let t = $($($(e.flags)?.[Q])?.[ry]);
	if (!t) return;
	let n = t?.documentId, r = t?.documentType, i = t?.sceneId;
	if (!(typeof n != "string" || typeof r != "string" || typeof i != "string")) return {
		documentId: n,
		documentType: r,
		parentIds: Array.isArray(t.parentIds) ? t.parentIds.filter((e) => typeof e == "string") : [],
		sceneId: i
	};
}
function cy(e, t) {
	let n = [];
	for (let r of e) {
		let e = kv(r);
		ly(e, t, n);
		for (let r of jv(e.behaviors)) ly(r, t, n);
	}
	return n;
}
function ly(e, t, n) {
	let r = sy(e), i = Pv(e);
	if (!r || !i) {
		n.push("A created document could not be associated with its source provenance.");
		return;
	}
	t.set(em(r), i);
}
//#endregion
//#region src/module/runtime/merge/batches.ts
async function uy(e, t, n, r, i, a, o) {
	await my(n, o, a, async (a, o) => {
		let s = await e.createDocuments(t, a);
		if (s.length !== a.length) throw Error(`Foundry created ${s.length} of ${a.length} requested ${t} documents.`);
		py(i, r, o, n.length, `Created ${t} documents`);
	});
}
async function dy(e, t, n, r, i, a, o, s, c) {
	let l = 0;
	return await my(n, c, s, async (s, c) => {
		let u = await e.createDocuments(t, s);
		if (u.length !== s.length) throw Error(`Foundry created ${u.length} of ${s.length} requested ${t} documents.`);
		l += u.length;
		let d = cy(u, r);
		if (d.length > 0) throw i.push(...d), Error(`Foundry created ${t} documents without the provenance needed for safe ID mapping.`);
		py(o, a, c, n.length, `Created ${t} documents`);
	}), l;
}
async function fy(e, t, n, r, i, a) {
	await my(n, a, i, async (i, a) => {
		let o = await e.updateDocuments(t, i);
		if (o.length !== i.length) throw Error(`Foundry updated ${o.length} of ${i.length} requested ${t} documents.`);
		py(r, "rewritingReferences", a, n.length, `Finalized ${t} references`);
	});
}
function py(e, t, n, r, i) {
	Tv.debug("Merge progress", {
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
async function my(e, t, n, r) {
	for (let i = 0; i < e.length; i += t) {
		n.throwIfCancelled();
		let a = e.slice(i, i + t);
		await r(a, Math.min(i + a.length, e.length)), n.throwIfCancelled(), await Lv();
	}
}
//#endregion
//#region src/module/runtime/merge/workflow-data.ts
function hy(e, t, n) {
	let r = new Map(t.map((e) => [e.sceneId, e]));
	for (let t of e) {
		if (t.metrics.gridRegionShapes === 0) continue;
		let e = r.get(t.id);
		if (e && !gm(hm(t.dimensions, n.dimensions, e), t.grid.size)) throw Error(`Scene ${t.name} has grid Region geometry which is not aligned after destination insets.`);
	}
}
function gy(e, t, n) {
	let r = { ...n };
	for (let [n, i] of Object.entries(Lp)) !i || t.options.content[n] || (r[i] = e.reduce((e, t) => e + (t.documents[i]?.length ?? 0), r[i] ?? 0));
	return r;
}
function _y(e) {
	return e.reduce((e, t) => e + jv(t.behaviors).length, 0);
}
function vy(e, t, n, r, i, a, o) {
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
function yy(e, t, n, r, i) {
	let a = new Set(Rp(r.options.content)), o = new Map(t.map((e) => [e.sceneId, e])), s = new Map([...t].sort((e, t) => e.order - t.order).map((e, t) => [e.sceneId, t])), c = Math.max(1, ...e.map((e) => e.documents.Tile?.length ?? 0)) + 1, l = /* @__PURE__ */ new Map(), u = {};
	for (let t of e) {
		let e = o.get(t.id);
		if (!e) continue;
		let r = hm(t.dimensions, n, e), d = t.levels[0]?.id, f = s.get(t.id) ?? 0;
		if (!d) continue;
		let p = new Map([[d, n.levelId]]);
		for (let e of a) {
			let a = [...t.documents[e] ?? []];
			e === "Tile" && a.sort((e, t) => Mv(e.sort) - Mv(t.sort));
			for (let [o, s] of a.entries()) {
				let a = by(Ov(s), e, t.id, r, t.grid, p, f, c, o, n.id, i);
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
function by(e, t, n, r, i, a, o, s, c, l, u) {
	let d = Pv(e);
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
	}, m = xy(e, t, r, i);
	t === "Tile" && (m.sort = (o + 1) * s + c), m = Cy(m, f), m = Sy(m, p), u?.(m, p), m = iy(m, f);
	let h = Sm(Ov(m), a);
	return delete h._id, delete h._stats, wy(h), {
		creationData: h,
		data: m,
		identity: f,
		type: t
	};
}
function xy(e, t, n, r) {
	let i = {
		...e,
		x: Mv(e.x),
		y: Mv(e.y)
	};
	if (t === "Wall") {
		let t = Array.isArray(e.c) ? e.c : [
			0,
			0,
			0,
			0
		];
		return ym({
			...e,
			c: [
				Mv(t[0]),
				Mv(t[1]),
				Mv(t[2]),
				Mv(t[3])
			]
		}, n);
	}
	return t === "Drawing" ? bm(i, n) : t === "Region" ? Om(e, n, r) : t === "Token" ? xm(i, n) : t === "Tile" ? vm({
		...i,
		height: Mv(e.height),
		width: Mv(e.width)
	}, n) : _m(i, n);
}
function Sy(e, t) {
	let n = e;
	for (let e of Jv()) {
		let r = e.documentTransformers?.[t.documentType];
		r && (n = Ov(r(n, t)));
	}
	return n;
}
function Cy(e, t) {
	return t.documentType === "Region" && (e.behaviors = jv(e.behaviors).map((e) => {
		let n = Pv(e);
		return n ? iy(e, {
			documentId: n,
			documentType: "RegionBehavior",
			parentIds: [t.documentId],
			sceneId: t.sceneId
		}) : e;
	})), e;
}
function wy(e) {
	let t = jv(e.behaviors);
	t.length !== 0 && (e.behaviors = t.map((e) => {
		let t = Ov(e);
		return delete t._id, delete t._stats, t;
	}));
}
//#endregion
//#region src/module/runtime/reference-updates.ts
function Ty(e, t, n, r, i) {
	let a = /* @__PURE__ */ new Map(), o = [], s = 0;
	for (let [c, l] of e) for (let e of l) {
		let l = {
			destinationSceneId: n,
			idMap: t,
			sourceSceneId: e.identity.sceneId,
			sourceSceneIds: r
		}, u = t.get(tm(e.identity.sceneId, c, e.identity.documentId));
		if (!u) {
			o.push(`${c}.${e.identity.documentId}`);
			continue;
		}
		let d = pm(c, e.data, l), f = Ov(d.value);
		s += d.rewritten, o.push(...d.unresolved);
		for (let e of Jv()) {
			if (!e.referenceRewriter) continue;
			let t = e.referenceRewriter(f, l);
			f = Ov(t.value), s += t.rewritten, o.push(...t.unresolved);
		}
		i?.(f, l), f._id = u, c === "Region" && Ey(f, e.identity.documentId, l, o), o.push(...Dy(f, r, c)), f = ay(f);
		let p = a.get(c) ?? [];
		p.push(f), a.set(c, p);
	}
	return {
		referencesRewritten: s,
		unresolved: [...new Set(o)],
		updates: a
	};
}
function Ey(e, t, n, r) {
	e.behaviors = jv(e.behaviors).map((e) => {
		let i = Pv(e);
		if (!i) return e;
		let a = n.idMap.get(tm(n.sourceSceneId, "RegionBehavior", i, [t]));
		return a ? {
			...e,
			_id: a
		} : (r.push(`Region.${t}.RegionBehavior.${i}`), e);
	});
}
function Dy(e, t, n) {
	let r = $(e.flags);
	if (!r) return [];
	let i = [];
	return Oy(r, "flags", t, (t) => {
		i.push(`${n}.${Pv(e) ?? "unknown"}:${t}`);
	}), i;
}
function Oy(e, t, n, r) {
	if (typeof e == "string") {
		n.some((t) => e.includes(`Scene.${t}.`)) && r(t);
		return;
	}
	if (Array.isArray(e)) {
		e.forEach((e, i) => Oy(e, `${t}[${i}]`, n, r));
		return;
	}
	let i = $(e);
	if (i) for (let [e, a] of Object.entries(i)) Oy(a, `${t}.${e}`, n, r);
}
//#endregion
//#region src/module/runtime/merge/workflow.ts
var ky = 200, Ay = [
	["Tile", "copyingTiles"],
	["Wall", "copyingWalls"],
	["AmbientLight", "copyingLights"],
	["AmbientSound", "copyingSounds"],
	["Drawing", "copyingDrawings"],
	["Note", "copyingNotes"],
	["Region", "copyingRegions"],
	["Token", "copyingTokens"]
];
async function jy(e, t, n) {
	let r = n.cancellation ?? new Hv(), i = Math.max(1, n.batchSize ?? ky), a, o = "beforeDestination";
	try {
		r.throwIfCancelled(), await Qv(e), n.runtime.callHook("fvttSceneMergerPreMerge", e, t), o = "calculatingBounds", py(n, o, 0, 1, "Calculating normalized destination bounds");
		let s = Hp(e.placements);
		r.throwIfCancelled(), o = "creatingScene", py(n, o, 0, 1, "Creating destination Scene and Level"), a = await n.runtime.createDestination(My(e, t, s.width, s.height)), py(n, o, 1, 1, a.name), r.throwIfCancelled(), hy(t, s.placements, a);
		let c = Ny(t, a.levelId), l = { Level: 1 }, u = [];
		if (o = "creatingBackgrounds", py(n, o, 0, 0, "Preparing background and foreground Tiles"), e.options.content.backgrounds) {
			let c = ey(t, s.placements, {
				...a.dimensions,
				levelId: a.levelId
			}, e.options.destination.lockBackgroundTiles);
			await uy(a, "Tile", c, o, n, r, i), l.Tile = c.length;
		}
		let d = yy(t, s.placements, {
			...a.dimensions,
			id: a.id,
			levelId: a.levelId
		}, e, (e, t) => n.runtime.callHook("fvttSceneMergerTransformDocument", e, t)), f = gy(t, e, d.skipped);
		for (let [e, t] of Ay) {
			o = t;
			let s = d.batches.get(e) ?? [];
			py(n, o, 0, s.length, `Preparing ${e} documents`);
			let f = await dy(a, e, s.map((e) => e.creationData), c, u, o, n, r, i);
			l[e] = (l[e] ?? 0) + f, e === "Region" && (l.RegionBehavior = _y(s.map((e) => e.data)));
		}
		o = "rewritingReferences", py(n, o, 0, 0, "Rewriting supported internal references");
		let p = Ty(d.batches, c, a.id, e.sourceSceneIds, (e, t) => n.runtime.callHook("fvttSceneMergerRewriteReferences", e, t));
		u.push(...p.unresolved);
		for (let [e, t] of p.updates) await fy(a, e, t, n, r, i);
		o = "finalizing", py(n, o, 0, 1, "Finalizing destination Scene");
		let m = vy(t, a, l, f, p.referencesRewritten, u, n.validationWarnings ?? []);
		return e.options.destination.activateAfterMerge && await a.activate(), e.options.destination.openAfterMerge && await a.open(), await $v(m), n.runtime.callHook("fvttSceneMergerPostMerge", m), py(n, o, 1, 1, a.name), m;
	} catch (e) {
		let t, r = !!a;
		if (a && Ip({
			cleanupEnabled: n.cleanupPartial,
			destinationCreated: !0,
			stage: o
		})) try {
			await a.delete(), r = !1;
		} catch (e) {
			t = e;
		}
		throw new Vv({
			...t ? { cleanupError: t } : {},
			...a && r ? { destinationSceneId: a.id } : {},
			error: e,
			stage: o
		});
	}
}
function My(e, t, n, r) {
	let i = t[0];
	if (!i) throw Error("No source Scene is available for destination settings.");
	let a = {
		bottom: Math.min(...t.map((e) => e.levels[0]?.elevation.bottom ?? 0)),
		top: Math.max(...t.map((e) => e.levels[0]?.elevation.top ?? 0))
	};
	return {
		active: !1,
		backgroundColor: i.source.backgroundColor ?? null,
		environment: Ov($(i.source.environment) ?? {}),
		flags: { "fvtt-scene-merger": { sourceSceneIds: [...e.sourceSceneIds] } },
		folder: e.options.destination.folderId,
		grid: Ov($(i.source.grid) ?? {}),
		height: r,
		levels: [{
			elevation: a,
			name: "Merged Level"
		}],
		name: e.options.destination.name.trim() || "Merged Scene",
		navigation: e.options.destination.navigation,
		padding: Mv(i.source.padding, .25),
		shiftX: 0,
		shiftY: 0,
		thumb: null,
		tokenVision: i.source.tokenVision ?? !0,
		width: n
	};
}
function Ny(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) {
		let e = r.levels[0]?.id;
		if (!e) continue;
		let i = tm(r.id, "Level", e);
		n.set(i, t);
	}
	return n;
}
//#endregion
//#region src/module/runtime/scene-snapshots.ts
var Py = [
	"Tile",
	"Wall",
	"AmbientLight",
	"AmbientSound",
	"Drawing",
	"Note",
	"Region",
	"Token"
], Fy = new Set([
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
async function Iy() {
	return Ev().scenes.contents.map((e) => zy(e, !1));
}
async function Ly() {
	return Ev().folders.contents.filter((e) => e.id && e.type === "Scene").map((e) => ({
		id: e.id ?? "",
		name: e.name
	}));
}
function Ry(e) {
	return e.map((e) => zy(Dv(e), !0));
}
function zy(e, t) {
	let n = Ev(), r = By(e), i = e.levels.contents.map((e) => ({
		elevation: {
			bottom: Mv(e.elevation?.bottom),
			top: Mv(e.elevation?.top)
		},
		id: e.id ?? "",
		name: e.name ?? "Level"
	})), a = {
		background: Vy(e),
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
		metrics: Hy(e, r),
		name: e.name ?? "Untitled Scene",
		thumbnail: e.thumbnail
	};
	return t ? {
		...a,
		documents: r,
		source: kv(e)
	} : a;
}
function By(e) {
	let t = { Level: e.levels.contents.map(kv) };
	for (let n of Py) t[n] = e.getEmbeddedCollection(n).contents.map(kv);
	return t;
}
function Vy(e) {
	let t = e.levels.contents[0], n = $((t ? kv(t) : void 0)?.background), r = n?.src, i = n?.color, a = typeof r == "string" && r.length > 0, o = typeof i == "string" && i.length > 0 || typeof i == "number" && Number.isFinite(i);
	return !a && !o ? null : {
		animated: a && Iv(r),
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
function Hy(e, t) {
	let n = {}, r = 0, i = 0, a = 0, o = 0, s = 0, c = 0, l = 0, u = 0, d = 0, f = 0;
	c += +!!Wy(kv(e));
	for (let t of e.levels.contents) {
		let n = kv(t);
		for (let t of [$(n.background), $(n.foreground)]) t?.src && (a += 1, i += +!!Iv(t.src), l += e.dimensions.sceneWidth * e.dimensions.sceneHeight);
	}
	for (let [a, p] of Object.entries(t)) {
		n[a] = p.length;
		for (let t of p) {
			let n = Uy(t, e.id ?? "");
			i += n.animated, r += n.attachedRegion, o += n.crossReferences, s += n.gridShapes, c += n.moduleFlags, l += n.texturePixels, u += n.tokenRegionShapes, d += n.regionBehaviors, f += n.unsupportedRegionShapes;
		}
	}
	return n.RegionBehavior = (t.Region ?? []).reduce((e, t) => e + jv(t.behaviors).length, 0), {
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
function Uy(e, t) {
	let n = $(e.texture), r = n?.src, i = $(e.attachment), a = jv(e.shapes), o = jv(e.behaviors);
	return {
		animated: +!!Iv(r),
		attachedRegion: +(typeof i?.token == "string" && i.token.length > 0),
		crossReferences: Gy(e, t),
		gridShapes: a.filter((e) => Nv(e.type) === "grid").length,
		moduleFlags: +!!Wy(e),
		regionBehaviors: o.filter((e) => Ky(e) || Nv(e.type).toLowerCase().includes("changelevel")).length,
		texturePixels: n ? Mv(e.width) * Mv(e.height) : 0,
		tokenRegionShapes: a.filter((e) => Nv(e.type) === "token").length,
		unsupportedRegionShapes: a.filter((e) => !Fy.has(Nv(e.type))).length
	};
}
function Wy(e) {
	let t = $(e.flags);
	return !!(t && Object.keys(t).some((e) => e !== "core" && e !== "fvtt-scene-merger"));
}
function Gy(e, t) {
	if (typeof e == "string") return [...e.matchAll(/Scene\.([A-Za-z0-9_-]+)/g)].filter((e) => e[1] !== t).length;
	if (Array.isArray(e)) return e.reduce((e, n) => e + Gy(n, t), 0);
	let n = $(e);
	return n ? Object.values(n).reduce((e, n) => e + Gy(n, t), 0) : 0;
}
function Ky(e) {
	if (typeof e == "string") return /(?:Scene|Region|Token)\./.test(e);
	if (Array.isArray(e)) return e.some(Ky);
	let t = $(e);
	return t ? Object.entries(t).some(([e, t]) => /^(?:destination|region|scene|token|uuid)/i.test(e) ? !0 : Ky(t)) : !1;
}
//#endregion
//#region src/module/runtime/asset-validation.ts
var qy = 64, Jy = 4e3, Yy = /* @__PURE__ */ new Map();
async function Xy(e, t) {
	return (await Promise.all(e.map(async (e) => {
		let n = [], r = Zy(e, t), i = r.slice(0, qy), a = await Promise.all(i.map($y)), o = a.filter((e) => e === "missing").length, s = a.filter((e) => e === "unverified").length + Math.max(0, r.length - i.length);
		return o > 0 && n.push(tb("assets.unavailable", e.id, o)), s > 0 && n.push(tb("assets.unverified", e.id, s)), n;
	}))).flat();
}
function Zy(e, t) {
	let n = /* @__PURE__ */ new Set();
	if (t.backgrounds) for (let t of e.documents.Level ?? []) Qy(n, $(t.background)), Qy(n, $(t.foreground));
	if (t.tiles) for (let t of e.documents.Tile ?? []) Qy(n, $(t.texture));
	return [...n];
}
function Qy(e, t) {
	let n = t?.src;
	typeof n == "string" && n.trim().length > 0 && e.add(n);
}
function $y(e) {
	let t = Yy.get(e);
	if (t) return t;
	let n = eb(e);
	return Yy.set(e, n), n;
}
async function eb(e) {
	if (/^(?:data|blob):/i.test(e)) return "available";
	let t = new AbortController(), n = globalThis.setTimeout(() => t.abort(), Jy);
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
function tb(e, t, n) {
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
async function nb(e) {
	return (await rb(e)).report;
}
async function rb(e) {
	let t = Ev(), n = e.sourceSceneIds.filter((e) => !t.scenes.get(e)), r = Ry(e.sourceSceneIds.filter((e) => t.scenes.get(e))), i = Hp(e.placements).placements, a = Vm(r, i, e.options), o = [
		...a.blocking,
		...a.warnings,
		...await Xy(r, e.options.content),
		...n.map((e) => ob(e))
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
	(!t.user.isGM || !Scene.implementation.canUserCreate(t.user)) && o.push(ob("destination"));
	for (let t of Jv()) t.validate && o.push(...t.validate(r, e));
	return {
		report: Bm(o),
		scenes: r
	};
}
function ib(e, t) {
	let n = new Set(e.acknowledgedWarnings);
	return t.warnings.filter((e) => !n.has(e.code) && !n.has(ab(e)));
}
function ab(e) {
	return `${e.code}:${[...e.sceneIds].sort().join(",")}`;
}
function ob(e) {
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
var sb;
async function cb(e, t) {
	if (sb) throw Error("Another Scene merge is already in progress on this client.");
	let n = new Hv();
	sb = n;
	try {
		t?.({
			completed: 0,
			detail: "Validating source Scenes",
			stage: "validating",
			total: 1
		});
		let r = await rb(e);
		if (Tv.debug("Scene merge request validated", {
			acknowledgedWarnings: e.acknowledgedWarnings.length,
			blocking: r.report.blocking.map((e) => e.code),
			enabledContent: Object.entries(e.options.content).flatMap(([e, t]) => t ? [e] : []),
			placementCount: e.placements.length,
			sourceCount: r.scenes.length,
			warnings: r.report.warnings.map((e) => e.code)
		}), r.report.blocking.length > 0) throw Error(`Scene merge is blocked: ${r.report.blocking.map((e) => Rv(e.code)).join(", ")}.`);
		let i = ib(e, r.report);
		if (i.length > 0) throw Error(`Review and acknowledge ${i.length} merge warning(s) before continuing.`);
		t?.({
			completed: 1,
			detail: "Source Scenes validated",
			stage: "validating",
			total: 1
		}), n.throwIfCancelled();
		let a = await jy(e, r.scenes, {
			cancellation: n,
			cleanupPartial: zv(),
			...t ? { onProgress: t } : {},
			runtime: Gv,
			validationWarnings: r.report.warnings.map(ab)
		});
		return Tv.info("Scene merge completed", a), Gv.notifyInfo(`Created Scene “${a.destinationSceneName}”.`), a;
	} catch (e) {
		throw Tv.error("Scene merge failed", e), Gv.notifyError(e instanceof Error ? e.message : String(e)), e;
	} finally {
		sb = void 0;
	}
}
var lb = {
	cancelActiveMerge() {
		sb?.cancel();
	},
	listSceneFolders: Ly,
	listScenes: Iy,
	merge: cb,
	async openScene(e) {
		await Dv(e).view();
	},
	validate(e) {
		return nb(e);
	}
}, ub = class extends foundry.applications.api.ApplicationV2 {
	#e;
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("fvtt-scene-merger-root"), n.dataset.theme = "fvtt-scene-merger", n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("fvtt-scene-merger-app"), t.replaceChildren(e), this.#e = dc(this.getVueComponent(), this.getVueProps() ?? {}), this.#e.use(vp()), this.#e.mount(e);
	}
	async _preClose(e) {
		this.unmountVue(), await super._preClose(e);
	}
	unmountVue() {
		this.#e?.unmount(), this.#e = void 0;
	}
}, db = class e extends ub {
	static DEFAULT_OPTIONS = {
		id: `${Q}-application`,
		position: {
			height: 900,
			width: 1240
		},
		tag: "section",
		window: {
			icon: "fa-solid fa-object-group",
			resizable: !0,
			title: `${Cv}.App.Title`
		}
	};
	static async open() {
		let t = foundry.applications.instances.get(`${Q}-application`);
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
		return xv;
	}
	getVueProps() {
		return {
			services: lb,
			t: (e, t) => {
				let n = Ev().i18n;
				return t ? n.format(e, t) : n.localize(e);
			}
		};
	}
};
async function fb() {
	await db.open();
}
//#endregion
//#region src/module/api/create-module-api.ts
function pb() {
	return {
		cancelActiveMerge: lb.cancelActiveMerge,
		listSceneFolders: lb.listSceneFolders,
		listScenes: lb.listScenes,
		merge: lb.merge,
		open: fb,
		openScene: lb.openScene,
		registerDocumentTransformer: Yv,
		registerExtension: qv,
		registerReferenceRewriter: Zv,
		registerValidator: Xv,
		validate: lb.validate
	};
}
//#endregion
//#region src/module/api/register-module-api.ts
function mb() {
	if (!game) throw Error("Foundry game global is unavailable during module API registration.");
	let e = game.modules.get(Q);
	if (!e) throw Error(`Foundry module registry entry was not found for ${Q}.`);
	e.api = pb();
}
//#endregion
//#region src/module/settings/register-settings.ts
function hb() {
	let e = Ev().settings;
	e.register(Q, "cleanupPartialDestination", {
		config: !0,
		default: !0,
		hint: `${Cv}.Settings.CleanupPartial.Hint`,
		name: `${Cv}.Settings.CleanupPartial.Name`,
		scope: "world",
		type: Boolean
	}), e.register(Q, "debugLogging", {
		config: !0,
		default: !1,
		hint: `${Cv}.Settings.DebugLogging.Hint`,
		name: `${Cv}.Settings.DebugLogging.Name`,
		scope: "client",
		type: Boolean
	}), e.registerMenu(Q, "sceneMerger", {
		icon: "fa-solid fa-object-group",
		label: `${Cv}.Settings.Open.Label`,
		name: `${Cv}.Settings.Open.Name`,
		restricted: !0,
		type: db
	});
}
//#endregion
//#region src/module/hooks/register-module-hooks.ts
function gb() {
	Hooks.once("init", () => {
		hb(), mb();
	}), Hooks.once("ready", () => {
		let e = vb();
		Hooks.callAll("fvttSceneMergerRegisterExtensions", e), Hooks.callAll("fvttSceneMergerReady", e);
	}), Hooks.on("getSceneControlButtons", (...e) => {
		_b(e[0]);
	});
}
function _b(e) {
	if (!Ev().user.isGM) return;
	let t = e.tiles ?? e.tokens;
	t && (t.tools[`${Q}-open`] = {
		button: !0,
		icon: "fa-solid fa-object-group",
		name: `${Q}-open`,
		onChange: () => {
			fb();
		},
		order: Object.keys(t.tools).length,
		title: `${Cv}.Controls.Open`,
		visible: !0
	});
}
function vb() {
	let e = Ev().modules.get(Q)?.api;
	if (!e) throw Error("Scene Merger API is unavailable after initialization.");
	return e;
}
//#endregion
//#region src/main.ts
gb();
//#endregion

//# sourceMappingURL=fvtt-scene-merger.mjs.map