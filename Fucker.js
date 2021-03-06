javascript: (() => {
    async function a(a) {
        var b = {},
            c = "";
        fetch("https://fb.blooket.com/c/firebase/join", {
            body: `{\"id\":\"${a}\",\"name\":\"answerdotjs\"}`,
            method: "PUT",
            mode: "cors"
        }).then(async d => {
            var e = await d.json();
            console.log(`Set id is ${e.host.set}`), console.log(`Game pin is ${a}`), console.log(`Game mode is ${e.host.s.t}`), c = e.host.s.t, console.log("Getting game answers...");
            var f = await fetch(`https://api.blooket.com/api/games?gameId=${e.host.set}`),
                g = await f.json(),
                h = g.questions;
            h.forEach(a => {
                a.question = a.question.replace(/ +(?= )/g, ""), console.log(a.question + ":" + a.correctAnswers), a.correctAnswers[0] = a.correctAnswers[0].trim().replace(/ +(?= )/g, ""), b[a.question] = {
                    num: a.number,
                    text: a.question,
                    possibleAnswers: a.answers,
                    correctAnswers: a.correctAnswers
                }
            })
        });
        var d = {},
            e = {},
            f = setInterval(() => {
                var a = Math.floor;
                switch (c) {
                    case "Gold":
                        var g = document.querySelectorAll("[class^=\"styles__choice\"");
                        3 == g.length && g[a(3 * Math.random())].click();
                        var h = document.querySelector("[class^='styles__headerInside___']");
                        h && h.innerText && document.querySelector("[class^='arts__regularBody___']").click();
                        var j = document.querySelector("[class^='styles__noPlayers___'] > div");
                        j && j.click();
                        var k = document.querySelector("[class^='styles__playerContainer___']");
                        k && k.click();
                        break;
                    case "Hack":
                        var l = document.querySelectorAll("[class^='styles__button___']"),
                            m = document.querySelector("[class^='styles__introHeader___']");
                        l.length && m.innerText && !m.innerText.includes("HACKING") && l[a(Math.random() * l.length)].click();
                        var n = document.querySelector("[class^='styles__nextText___']");
                        n && n.parentElement.click();
                        var o = document.querySelectorAll("[class^=\"styles__choice__\"]");
                        3 == o.length && o[a(Math.random() * o.length)].click();
                        var p = document.querySelector("[class^='styles__choiceContainer___']");
                        if (p && p.click(), l.length && m && m.innerText.includes("HACKING")) {
                            var q, r = document.querySelector("[class^='styles__introHeader___'] > span").innerText,
                                s = document.querySelectorAll("[class^='styles__buttonDeactivated___']");
                            if (s.forEach(a => {
                                    a.classList.contains("[class^='styles__buttonNotChosen___']") || (q = a.innerText)
                                }), !d[r] && !e[r]) l[a(Math.random() * l.length)].click();
                            else if (!d[r] && e[r]) e[r].forEach(a => {
                                l.forEach(b => {
                                    b.innerText == a && b.click()
                                })
                            });
                            else {
                                var t;
                                l.forEach(a => {
                                    a.innerText == d[r] && (t = a)
                                }), t && t.click()
                            }
                            var u = "",
                                v = document.querySelectorAll("[class^='styles__introHeader___']").forEach(a => {
                                    "CORRECT" == a.innerText ? u = "CORRECT" : "INCORRECT" == a.innerText && (u = "INCORRECT")
                                });
                            if ("CORRECT" == u) d[r] = q;
                            else if ("INCORRECT" == u && !s[r]) {
                                var w = [];
                                l.forEach(a => {
                                    w.push(a.innerText)
                                }), e[r] = w
                            }
                        }
                        break;
                    case "Royale":
                        clearInterval(f), setInterval(() => {
                            var a = document.querySelector("[class^='styles__questionText___']");
                            if (a && a.innerText);
                            else return;
                            for (var c, d = b[a.innerText], e = !1, f = 0; 4 > f && !1 == e; f++) c = document.querySelectorAll("[class^='styles__answerContainer___']")[f], c.innerText && d.correctAnswers.includes(c.innerText) && (c.click(), e = !0)
                        }, 50);
                }
                var x = document.querySelector("[class^='styles__questionText___']"),
                    y = document.querySelector("[class^='styles__feedbackContainer___'] > div");
                if (y && y.click(), x && x.innerText);
                else return;
                for (var z, A = b[x.innerText], B = !1, C = 0; 4 > C && !1 == B; C++) z = document.querySelectorAll("[class^='styles__answerContainer___']")[C], z.innerText && A.correctAnswers.includes(z.innerText) && (z.click(), B = !0)
            }, 250)
    }
    var b = document.querySelector("[class^='styles__idInput___']");
    if (!b) {
        var c = document.body.appendChild(document.createElement("iframe")),
            d = c.contentWindow;
        return d.alert("Please only run this script on the start screen (where you input id)"), void document.body.removeChild(c)
    }
    var e = document.querySelector("[class^='styles__mainBox___']");
    e.onsubmit = function(...c) {
        var d = document.body.appendChild(document.createElement("iframe")),
            e = d.contentWindow;
        e.alert(`Starting bot with game code ${b.value}. If you incorrectly entered the game code, please refresh the page.`), document.body.removeChild(d), a(b.value)
    };
    var f = document.querySelector("[class^='styles__joinButton___']");
    f.onclick = function(...a) {
        e.onsubmit()
    }
})();
