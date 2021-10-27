(this["webpackJsonp@limitlesswax/frontend"] = this["webpackJsonp@limitlesswax/frontend"] || []).push([[0], {
    166: function(e, t) {},
    168: function(e, t) {},
    178: function(e, t) {},
    180: function(e, t) {},
    207: function(e, t) {},
    209: function(e, t) {},
    210: function(e, t) {},
    215: function(e, t) {},
    217: function(e, t) {},
    236: function(e, t) {},
    248: function(e, t) {},
    251: function(e, t) {},
    282: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(0)
          , a = n.n(r)
          , c = n(26)
          , i = n.n(c)
          , o = n(2)
          , s = n.n(o)
          , u = n(30)
          , l = n(5)
          , d = n(18)
          , f = n(85)
          , p = "PUB_K1_518dX1E8yMyq6oJ8PzReWSpwfQrEBfTC4cQVSjhsf1gLDviFgR"
          , b = "https://wax.api.atomicassets.io";
        function h(e, t) {
            return x.apply(this, arguments)
        }
        function x() {
            return (x = Object(l.a)(s.a.mark((function e(t, n) {
                var r;
                return s.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            e.next = 3,
                            t.api.rpc.get_table_rows({
                                json: !0,
                                code: "eosio.token",
                                scope: n,
                                table: "accounts",
                                limit: 1,
                                reverse: !1,
                                show_payer: !1
                            });
                        case 3:
                            return r = e.sent,
                            e.abrupt("return", r.rows[0].balance);
                        case 7:
                            e.prev = 7,
                            e.t0 = e.catch(0),
                            console.error(e.t0);
                        case 10:
                            return e.abrupt("return", null);
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 7]])
            }
            )))).apply(this, arguments)
        }
        function j(e, t) {
            return v.apply(this, arguments)
        }
        function v() {
            return (v = Object(l.a)(s.a.mark((function e(t, n) {
                var r;
                return s.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            e.next = 3,
                            t.api.rpc.get_table_rows({
                                json: !0,
                                code: "m.federation",
                                scope: "m.federation",
                                table: "miners",
                                lower_bound: n,
                                upper_bound: n,
                                limit: 1,
                                reverse: !1,
                                show_payer: !1
                            });
                        case 3:
                            return r = e.sent,
                            console.debug("User Land:", r),
                            e.abrupt("return", r.rows[0].current_land);
                        case 8:
                            e.prev = 8,
                            e.t0 = e.catch(0),
                            console.error(e.t0);
                        case 11:
                            return e.abrupt("return", null);
                        case 12:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 8]])
            }
            )))).apply(this, arguments)
        }
        function m(e, t) {
            return O.apply(this, arguments)
        }
        function O() {
            return (O = Object(l.a)(s.a.mark((function e(t, n) {
                var r;
                return s.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            e.next = 3,
                            t.api.rpc.get_table_rows({
                                json: !0,
                                code: "m.federation",
                                scope: "m.federation",
                                table: "bags",
                                lower_bound: n,
                                upper_bound: n,
                                limit: 1,
                                reverse: !1,
                                show_payer: !1
                            });
                        case 3:
                            return r = e.sent,
                            console.debug("userTools:", r),
                            e.abrupt("return", r.rows[0].items);
                        case 8:
                            e.prev = 8,
                            e.t0 = e.catch(0),
                            console.error(e.t0);
                        case 11:
                            return e.abrupt("return", null);
                        case 12:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 8]])
            }
            )))).apply(this, arguments)
        }
        function w(e, t) {
            return y.apply(this, arguments)
        }
        function y() {
            return (y = Object(l.a)(s.a.mark((function e(t, n) {
                var r;
                return s.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            f.b("m.federation", n, t.api.rpc);
                        case 2:
                            return r = e.sent,
                            e.abrupt("return", r);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function g(e) {
            return k.apply(this, arguments)
        }
        function k() {
            return (k = Object(l.a)(s.a.mark((function e(t) {
                var n, r, a;
                return s.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            n = b + "/atomicassets/v1/assets/" + t,
                            e.next = 4,
                            fetch(n);
                        case 4:
                            return r = e.sent,
                            e.next = 7,
                            r.json();
                        case 7:
                            return a = e.sent,
                            e.abrupt("return", a.data.data);
                        case 11:
                            e.prev = 11,
                            e.t0 = e.catch(0),
                            console.error(e.t0);
                        case 14:
                            return e.abrupt("return", null);
                        case 15:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 11]])
            }
            )))).apply(this, arguments)
        }
        var _ = "limitlesswax"
          , T = function(e, t) {
            return {
                actions: [{
                    account: "limitlesswax",
                    name: "mine",
                    authorization: [{
                        actor: _,
                        permission: "active"
                    }],
                    data: {
                        miner: e,
                        info: "cpu"
                    }
                }, {
                    account: "m.federation",
                    name: "mine",
                    authorization: [{
                        actor: e,
                        permission: "active"
                    }],
                    data: {
                        miner: e,
                        nonce: t
                    }
                }, {
                    account: "alien.worlds",
                    name: "transfer",
                    authorization: [{
                        actor: e,
                        permission: "active"
                    }],
                    data: {
                        from: e,
                        memo: "Limitlesswax CPU Payment",
                        quantity: "0.0100 TLM",
                        to: "limitlesswco"
                    }
                }]
            }
        };
        function C(e, t, n, r) {
            return E.apply(this, arguments)
        }
        function E() {
            return (E = Object(l.a)(s.a.mark((function e(t, n, r, a) {
                var c, i, o;
                return s.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return "m.federation",
                            e.next = 3,
                            f.a({
                                mining_account: "m.federation",
                                account: n,
                                difficulty: r,
                                last_mine_tx: a
                            });
                        case 3:
                            if (void 0 !== (c = e.sent)) {
                                e.next = 6;
                                break
                            }
                            return e.abrupt("return", null);
                        case 6:
                            return i = c.rand_str,
                            console.debug("user_nonce:", i),
                            e.prev = 8,
                            e.next = 11,
                            t.api.transact(T(n, i), {
                                blocksBehind: 5,
                                expireSeconds: 120,
                                broadcast: !0,
                                sign: !0
                            });
                        case 11:
                            return o = e.sent,
                            console.debug("Transact result:", o),
                            e.abrupt("return", {
                                nonce: i,
                                transaction_id: o.transaction_id
                            });
                        case 16:
                            throw e.prev = 16,
                            e.t0 = e.catch(8),
                            console.error(e.t0),
                            // alert(e.t0),
                            new Error("Transaction failed to submit. Either no signature or bad format or randomly sent before it was ready.");
                        case 21:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[8, 16]])
            }
            )))).apply(this, arguments)
        }
        function M(e, t) {
            var n = 0
              , r = 0;
            if (null == t)
                return n;
            switch (t.length) {
            case 0:
                console.error("ERROR: Found 0 tools!");
                break;
            case 1:
                console.debug("Mine Delay case 1"),
                t[0].data && t[0].data.delay && (r = t[0].data.delay);
                break;
            case 2:
                console.debug("Mine Delay case 2"),
                t[0].data && t[0].data.delay && t[1].data && t[1].data.delay && (r = t[0].data.delay + t[1].data.delay);
                break;
            case 3:
                if (console.debug("Mine Delay case 3"),
                t[0].data && t[0].data.delay && t[1].data && t[1].data.delay && t[2].data && t[2].data.delay) {
                    var a = [t[0].data.delay, t[1].data.delay, t[2].data.delay];
                    a.splice(a.indexOf(Math.min.apply(Math, a)), 1),
                    r = a[0] + a[1]
                }
                break;
            default:
                console.error("ERROR: Found 0 tools!"),
                r = 0
            }
            return console.debug("Tool Delay:", r),
            e && e.data && (n = e.data.delay * r * .1,
            console.debug("Mine Delay:", n)),
            1e3 * n
        }
        var z = n(299)
          , I = n(301)
          , S = window.S = n(146)
          , D = window.D = {
            getAvailableKeys: function() {
                var e = Object(l.a)(s.a.mark((function e() {
                    return s.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", [p]);
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }(),
            sign: function() {
                var e = Object(l.a)(s.a.mark((function e(t) {
                    var n, r, a, c, i, o;
                    return s.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (-1 !== t.requiredKeys.indexOf(p)) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", {
                                    signatures: [],
                                    serializedTransaction: t.serializedTransaction
                                });
                            case 2:
                                return function(e) {
                                    e.TLM = "TLM",
                                    e.NFT = "NFT",
                                    e.CPU = "CPU"
                                }(n || (n = {})),
                                r = {
                                    transaction: Array.from(t.serializedTransaction),
                                    mineType: n.CPU
                                },
                                e.next = 6,
                                fetch("https://xph358yb93.execute-api.us-west-2.amazonaws.com/awflashloantools", {
                                    method: "POST",
                                    headers: {
                                        Accept: "application/json",
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(r)
                                });
                            case 6:
                                if ((a = e.sent).ok) {
                                    e.next = 13;
                                    break
                                }
                                return e.next = 10,
                                a.json();
                            case 10:
                                throw c = e.sent,
                                // alert(c.reason),
                                Error(c.reason || "Failed to connect to endpoint");
                            case 13:
                                return e.next = 15,
                                a.json();
                            case 15:
                                if (i = e.sent,
                                console.debug("response:", i),
                                i.isOk) {
                                    e.next = 21;
                                    break
                                }
                                // throw alert(i.reason),
                                throw i.reason,
                                // alert("Go to www.cpu4.sale to get more cpu and keep playing!"),
                                Error(i.reason);
                            case 21:
                                return o = {
                                    signatures: i.signature,
                                    serializedTransaction: t.serializedTransaction
                                },
                                e.abrupt("return", o);
                            case 23:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
        };
        function L(e) {
            return N.apply(this, arguments)
        }
        function N() {
            return (N = Object(l.a)(s.a.mark((function e(t) {
                var n;
                return s.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            e.next = 3,
                            t.login();
                        case 3:
                            if ("string" === typeof (n = e.sent)) {
                                e.next = 6;
                                break
                            }
                            throw new Error("unexpected type: " + typeof n);
                        case 6:
                            //window.wax = t;
                            return console.log(t),
                            e.abrupt("return", n);
                        case 10:
                            e.prev = 10,
                            e.t0 = e.catch(0),
                            console.log(e.t0);
                        case 13:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 10]])
            }
            )))).apply(this, arguments)
        }
        var P = n(3)
          , F = Object(r.createContext)(null)
          , R = Object(z.a)((function(e) {
            return {
                root: {
                    flexGrow: 1,
                    display: "inline"
                }
            }
        }
        ))
          , W = function(e) {
            var t = e.children
              , n = Object(r.useState)(null)
              , a = Object(d.a)(n, 2)
              , c = a[0]
              , i = a[1]
              , o = R()
              , u = function() {
                var e = Object(l.a)(s.a.mark((function e() {
                    var t, n;
                    return s.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                t = new S.WaxJS("https://wax.greymass.com",void 0,void 0,!1,D);
                                window.wax = t;
                                return t,
                                e.next = 3,
                                L(t);
                            case 3:
                                void 0 !== (n = e.sent) && i({
                                    wax: t,
                                    accountId: n
                                });
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            return c ? Object(P.jsx)(F.Provider, {
                value: c,
                children: t
            }) : Object(P.jsx)("div", {
                className: o.root,
                children: Object(P.jsx)(I.a, {
                    id: "login",
                    variant: "outlined",
                    size: "large",
                    onClick: u,
                    children: "WAX Login"
                })
            })
        }
          , A = function() {
            var e = Object(r.useState)(null)
              , t = Object(d.a)(e, 2)
              , n = t[0]
              , c = t[1]
              , i = a.a.useContext(F);
            return Object(r.useEffect)((function() {
                var e = function() {
                    var e = Object(l.a)(s.a.mark((function e() {
                        var t;
                        return s.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (i) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4,
                                    h(i.wax, i.accountId);
                                case 4:
                                    if (e.t0 = e.sent,
                                    e.t0) {
                                        e.next = 7;
                                        break
                                    }
                                    e.t0 = "0";
                                case 7:
                                    e.t1 = e.t0,
                                    t = {
                                        balance: e.t1
                                    },
                                    c(Object(u.a)({}, t));
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                n || e();
                var t = setInterval((function() {
                    e()
                }
                ), 2e4);
                return function() {
                    return clearInterval(t)
                }
            }
            ), [i, n]),
            Object(P.jsxs)("div", {
                id: "account-info",
                children: [Object(P.jsx)("p", {
                    children: "New cpu system open now. Go to https://cpu4.sale/ to get more cpu for other games or just to have cpu for transactions."
                }), Object(P.jsxs)("p", {
                    id: "awwaxbalance",
                    children: ["AWWAX Balance: ", n ? n.balance : "0"]
                })]
            })
        }
          , U = n(61)
          , B = n(152)
          , J = Object(r.createContext)({
            info: null,
            update: function() {
                throw new Error("context not set")
            }
        })
          , q = function(e) {
            var t = e.children
              , n = Object(r.useState)(null)
              , c = Object(d.a)(n, 2)
              , i = c[0]
              , o = c[1]
              , f = a.a.useContext(F)
              , p = function() {
                var e = Object(l.a)(s.a.mark((function e(t, n) {
                    var r, a, c, i, l, d, f, p, b, h, x, v;
                    return s.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return r = 0,
                                a = null,
                                e.next = 6,
                                j(t.wax, t.accountId);
                            case 6:
                                if (!(c = e.sent)) {
                                    e.next = 19;
                                    break
                                }
                                if (e.t0 = c,
                                !c) {
                                    e.next = 15;
                                    break
                                }
                                return e.next = 12,
                                g(c);
                            case 12:
                                e.t1 = e.sent,
                                e.next = 16;
                                break;
                            case 15:
                                e.t1 = null;
                            case 16:
                                e.t2 = e.t1,
                                (a = {
                                    id: e.t0,
                                    data: e.t2
                                }).data && (r += a.data.difficulty);
                            case 19:
                                return e.next = 21,
                                m(t.wax, t.accountId);
                            case 21:
                                if (i = e.sent,
                                l = [],
                                !i) {
                                    e.next = 46;
                                    break
                                }
                                d = Object(B.a)(i),
                                e.prev = 25,
                                d.s();
                            case 27:
                                if ((f = d.n()).done) {
                                    e.next = 36;
                                    break
                                }
                                return p = f.value,
                                e.next = 31,
                                g(p);
                            case 31:
                                (b = e.sent) && (r += b.difficulty),
                                l.push({
                                    id: p,
                                    data: b
                                });
                            case 34:
                                e.next = 27;
                                break;
                            case 36:
                                e.next = 41;
                                break;
                            case 38:
                                e.prev = 38,
                                e.t3 = e.catch(25),
                                d.e(e.t3);
                            case 41:
                                return e.prev = 41,
                                d.f(),
                                e.finish(41);
                            case 44:
                                e.next = 47;
                                break;
                            case 46:
                                console.debug("ERROR: User must have at least 1 tool!");
                            case 47:
                                if (e.t4 = null === n || void 0 === n ? void 0 : n.transaction_ids,
                                e.t4) {
                                    e.next = 53;
                                    break
                                }
                                return e.next = 51,
                                w(t.wax, t.accountId);
                            case 51:
                                e.t5 = e.sent,
                                e.t4 = [e.t5];
                            case 53:
                                h = e.t4,
                                x = (null === n || void 0 === n ? void 0 : n.nonce) || "0",
                                v = {
                                    land: a,
                                    tools: l,
                                    difficulty: r,
                                    nonce: x,
                                    transaction_ids: h
                                },
                                console.debug("info:", v),
                                o(Object(u.a)({}, v));
                            case 58:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[25, 38, 41, 44]])
                }
                )));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }();
            return Object(r.useEffect)((function() {
                i || p(f, i);
                var e = setInterval((function() {
                    p(f, i)
                }
                ), 1e4);
                return function() {
                    return clearInterval(e)
                }
            }
            ), [f, i]),
            i ? Object(P.jsx)(J.Provider, {
                value: {
                    info: i,
                    update: o
                },
                children: t
            }) : Object(P.jsx)("h2", {
                children: "Loading Alien Worlds Info..."
            })
        }
          , G = function() {
            var e = Object(r.useState)(0)
              , t = Object(d.a)(e, 2)
              , n = t[0]
              , c = t[1]
              , i = Object(r.useState)(new Date(Date.now() - n))
              , o = Object(d.a)(i, 2)
              , f = o[0]
              , p = o[1]
              , b = Object(r.useState)(new Date)
              , h = Object(d.a)(b, 2)
              , x = h[0]
              , j = h[1]
              , v = a.a.useContext(F)
              , m = a.a.useContext(J);
            Object(r.useEffect)((function() {
                var e = setInterval((function() {
                    j(new Date)
                }
                ), 500);
                return function() {
                    return clearInterval(e)
                }
            }
            ), [x]);
            var O = function() {
                var e = Object(l.a)(s.a.mark((function e() {
                    var t, n, r;
                    return s.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (v) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                if (m.info) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return");
                            case 4:
                                return t = m.info,
                                e.prev = 5,
                                e.next = 8,
                                C(v.wax, v.accountId, t.difficulty, t.transaction_ids[0]);
                            case 8:
                                (n = e.sent) ? ((r = Object(U.a)(t.transaction_ids)).unshift(n.transaction_id),
                                m.update(Object(u.a)(Object(u.a)({}, t), {}, {
                                    nonce: n.nonce,
                                    transaction_ids: r
                                })),
                                p(new Date),
                                c(M(t.land, t.tools))) : console.debug("Unexpected case"),
                                e.next = 16;
                                break;
                            case 12:
                                e.prev = 12,
                                e.t0 = e.catch(5),
                                console.error(e.t0);
                                // alert("Error: Failed to perform mine");
                            case 16:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[5, 12]])
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
              , w = function() {
                return x.valueOf() - f.valueOf()
            };
            return Object(P.jsx)(I.a, {
                id: "mine",
                onClick: O,
                variant: "outlined",
                size: "large",
                disabled: !m || w() < n,
                children: m && w() < n ? "Mine - Timeout: " + function(e) {
                    if (e <= 0)
                        return "";
                    var t = n - e
                      , r = Math.floor(t % 36e5 / 6e4)
                      , a = Math.floor(t % 6e4 / 1e3);
                    return r + ":" + (a <= 9 ? "0" + a : a)
                }(w()) : "Mine"
            })
        }
          , H = Object(z.a)((function(e) {
            return {
                root: {
                    color: "inherit",
                    maxHeight: "100%",
                    maxWidth: "100%"
                }
            }
        }
        ))
          , K = function(e) {
            var t = H()
              , n = e.is_land ? "Land" : "Tool";
            return Object(P.jsx)("img", {
                className: t.root,
                src: e.image_url,
                alt: n,
                id: e.id
            })
        }
          , X = n(305)
          , Q = n(306)
          , V = n(154)
          , Y = Object(z.a)((function(e) {
            return {
                list: {
                    maxHeight: "100%",
                    maxWidth: "100%"
                }
            }
        }
        ))
          , Z = function(e) {
            var t = e.transaction_ids
              , n = e.width
              , r = e.height
              , a = e.item_size
              , c = Y();
            return Object(P.jsxs)("div", {
                children: [Object(P.jsx)("h2", {
                    children: "Transaction History"
                }), Object(P.jsx)(V.a, {
                    className: c.list,
                    height: r,
                    width: n,
                    itemSize: a,
                    itemCount: t.length,
                    children: function(e) {
                        return Object(P.jsx)(X.a, {
                            button: !0,
                            component: "a",
                            href: "https://wax.bloks.io/transaction/" + t[e.index],
                            target: "_blank",
                            children: Object(P.jsx)(Q.a, {
                                primary: t[e.index]
                            })
                        })
                    }
                })]
            })
        }
          , $ = Object(z.a)((function(e) {
            return {
                root: {},
                images: {
                    display: "block",
                    height: "250px",
                    width: "auto",
                    paddingLeft: "0"
                },
                actions: {
                    height: "250px",
                    width: "auto",
                    display: "inline"
                },
                transactions: {
                    paddingTop: "5px",
                    width: "600px",
                    height: "250px"
                }
            }
        }
        ))
          , ee = function() {
            var e, t, n, r = a.a.useContext(J), c = $(), i = function(e, t, n) {
                var r = (e ? null === n || void 0 === n ? void 0 : n.land : ((null === n || void 0 === n ? void 0 : n.tools.length) || 0) > t ? null === n || void 0 === n ? void 0 : n.tools[t] : null) || null;
                return Object(P.jsx)(K, {
                    id: r ? r.id : "",
                    is_land: e,
                    image_url: r && r.data ? "https://gateway.pinata.cloud/ipfs/" + r.data.img : ""
                }, r ? r.id : e ? "land" : "tool" + t)
            }, o = [i(!0, 0, r.info), i(!1, 0, r.info), i(!1, 1, r.info), i(!1, 2, r.info)];
            return Object(P.jsxs)("div", {
                id: "alienworlds",
                children: [Object(P.jsx)("ul", {
                    className: c.images,
                    children: o
                }), Object(P.jsx)("p", {
                    children: "\xa0"
                }), Object(P.jsx)("strong", {
                    children: "Nonce"
                }), Object(P.jsx)("p", {
                    id: "nonce",
                    children: (null === (e = r.info) || void 0 === e ? void 0 : e.nonce) || "0"
                }), Object(P.jsx)("strong", {
                    children: "Difficulty"
                }), Object(P.jsx)("p", {
                    id: "difficulty",
                    children: (null === (t = r.info) || void 0 === t ? void 0 : t.difficulty) || "0"
                }), Object(P.jsxs)("div", {
                    className: c.actions,
                    children: [Object(P.jsx)(G, {}), Object(P.jsx)("div", {
                        className: c.transactions,
                        children: Object(P.jsx)(Z, {
                            transaction_ids: (null === (n = r.info) || void 0 === n ? void 0 : n.transaction_ids) || [],
                            width: 600,
                            height: 200,
                            item_size: 50
                        })
                    })]
                })]
            })
        }
          , te = function() {
            return Object(P.jsx)(q, {
                children: Object(P.jsx)(ee, {})
            })
        }
          , ne = function() {
            return Object(P.jsx)("div", {
                id: "app",
                children: Object(P.jsxs)("header", {
                    className: "App-header",
                    children: [Object(P.jsx)(A, {}), Object(P.jsx)(te, {})]
                })
            })
        }
          , re = n(302)
          , ae = n(304)
          , ce = n(153)
          , ie = n(303)
          , oe = function(e) {
            var t = e.children
              , n = Object(re.a)("(prefers-color-scheme: dark)")
              , a = Object(r.useMemo)((function() {
                return Object(ce.a)({
                    typography: {},
                    palette: {
                        type: n ? "dark" : "light",
                        primary: {
                            main: "#212121"
                        },
                        secondary: {
                            main: "#ffffff"
                        }
                    }
                })
            }
            ), [n]);
            return Object(P.jsxs)(ie.a, {
                theme: a,
                children: [Object(P.jsx)(ae.a, {}), t]
            })
        }
          , se = function(e) {
            e && e instanceof Function && n.e(3).then(n.bind(null, 307)).then((function(t) {
                var n = t.getCLS
                  , r = t.getFID
                  , a = t.getFCP
                  , c = t.getLCP
                  , i = t.getTTFB;
                n(e),
                r(e),
                a(e),
                c(e),
                i(e)
            }
            ))
        };
        i.a.render(Object(P.jsx)(a.a.StrictMode, {
            children: Object(P.jsxs)(oe, {
                children: [Object(P.jsx)("h1", {
                    children: "Limitless Wax"
                }), Object(P.jsx)(W, {
                    children: Object(P.jsx)(ne, {})
                })]
            })
        }), document.getElementById("root")),
        se()
    }
}, [[282, 1, 2]]]);
