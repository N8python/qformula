let G = {
    V: [
        [100, 200], // vertex 0 coordinates on canvas
        [260, 100], // vertex 1
        [260, 300], // vertex 2
        [420, 200], // vertex 3
    ],
    E: [
            [0, 1],
            [0, 2],
            [1, 2],
            [1, 3],
            [2, 3]
        ] // edges
};

function getT(t) {
    if (t === undefined) {
        return 1000000;
    }
    return t;
}

function fadeOut(obj, frame) {
    if (obj instanceof Katex) {
        obj.end = frame;
        obj.timer2 = new Timer0(frames(0.7));
    } else if (obj instanceof TextFade) {
        obj.ft.fadeOut(obj.duration);
    } else if (obj instanceof Line) {
        obj.end = frame;
        obj.timer_sw = new StrokeWeightTimer(obj.s, obj.end, obj.strokeweight, 0.7);
    } else if (obj instanceof Rect) {
        obj.end = frame;
    }
}

function fadeIn(obj, frame) {
    if (obj instanceof Katex) {
        obj.start = frame;
        obj.timer = new Timer0(frames(0.7));
    } else if (obj instanceof TextFade) {
        obj.ft.fadeIn(obj.duration);
    } else if (obj instanceof Line) {
        obj.start = frame;
    } else if (obj instanceof Rect) {
        obj.start = frame;
    }
}
const GraphExample = function(s) {
    let tnr;
    s.preload = function() {
        tnr = s.loadFont('../lib/font/times.ttf'); // loads font (Times new roman)
    };
    s.setup = function() {
        // this sets frameRate to be 30, and creates a canvas of 1200 by 675 (you can adjust these in globals.js)
        setup2D(s);

        // creates an undirected graph
        /*s.g = new Graph_U(s, { // parameters are passed in via an object
            V: G.V,
            E: G.E,
            font: tnr,
            start: 40, // the time to start the animation in frames
            color_e: [7, 97, 7], // color of edges in RGB
            color_v: Yellow, // set color of nodes, using the global Yellow variable
        });*/
        //textAlign(CENTER);
        /*s.g = new Katex(s, {
            size: 75,
            mode: 1,
            font: tnr,
            text: "x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}",
            fadeIn: true,
            fadeOut: true,
            font_size: 54,
            x: 400,
            y: 675 / 2 - 100,
            start: 100,
            end: getT()
        })*/
        s.startText = new TextFade(s, {
            size: 75,
            mode: 1,
            font: tnr,
            str: "Quadratic Formula",
            fadeIn: true,
            fadeOut: true,
            x: 600,
            y: 675 / 2,
            end: getT()
        })
        s.qEquation = new Katex(s, {
            size: 75,
            mode: 1,
            font: tnr,
            text: "ax^2+bx+c=0",
            fadeIn: true,
            fadeOut: true,
            font_size: 54,
            x: 350,
            y: 675 / 2 - 200,
            start: getT(),
            end: getT()
        });
        s.step1 = new Katex(s, {
            size: 75,
            mode: 1,
            font: tnr,
            text: "ax^2+bx=-c",
            fadeIn: true,
            fadeOut: true,
            font_size: 54,
            x: 350,
            y: 675 / 2 - 200,
            start: getT(),
            end: getT()

        });
        s.step2 = new Katex(s, {
            size: 75,
            mode: 1,
            font: tnr,
            text: "x^2+\\frac{b}{a}x=-\\frac{c}{a}",
            fadeIn: true,
            fadeOut: true,
            font_size: 54,
            x: 350,
            y: 675 / 2 - 200,
            start: getT(),
            end: getT()
        });
        s.step3 = new Katex(s, {
            size: 75,
            mode: 1,
            font: tnr,
            text: "x^2+\\frac{b}{a}x + \\frac{b^2}{4a^2}=-\\frac{c}{a}+\\frac{b^2}{4a^2}",
            fadeIn: true,
            fadeOut: true,
            font_size: 54,
            x: 350,
            y: 675 / 2 - 200,
            start: getT(),
            end: getT()
        });
        s.step4 = new Katex(s, {
            size: 75,
            mode: 1,
            font: tnr,
            text: "x^2+\\frac{b}{a}x + \\frac{b^2}{4a^2}=-\\frac{4ac}{4a^2}+\\frac{b^2}{4a^2}",
            fadeIn: true,
            fadeOut: true,
            font_size: 54,
            x: 250,
            y: 675 / 2 - 200,
            start: getT(),
            end: getT()
        });
        s.step5 = new Katex(s, {
            size: 75,
            mode: 1,
            font: tnr,
            text: "x^2+\\frac{b}{a}x + \\frac{b^2}{4a^2}=\\frac{b^2-4ac}{4a^2}",
            fadeIn: true,
            fadeOut: true,
            font_size: 54,
            x: 250,
            y: 675 / 2 - 200,
            start: getT(),
            end: getT()
        });
        s.step6 = new Katex(s, {
            size: 75,
            mode: 1,
            font: tnr,
            text: "{(x+\\frac{b}{2a})^2}=\\frac{b^2-4ac}{4a^2}",
            fadeIn: true,
            fadeOut: true,
            font_size: 54,
            x: 250,
            y: 675 / 2 - 200,
            start: getT(),
            end: getT()

        });
        s.step7 = new Katex(s, {
            size: 75,
            mode: 1,
            font: tnr,
            text: "\\sqrt{(x+\\frac{b}{2a})^2}=\\pm\\sqrt{\\frac{b^2-4ac}{4a^2}}",
            fadeIn: true,
            fadeOut: true,
            font_size: 54,
            x: 250,
            y: 675 / 2 - 200,
            start: getT(),
            end: getT()

        });
        s.step8 = new Katex(s, {
            size: 75,
            mode: 1,
            font: tnr,
            text: "{x+\\frac{b}{2a}}=\\frac{\\pm\\sqrt{b^2-4ac}}{2a}",
            fadeIn: true,
            fadeOut: true,
            font_size: 54,
            x: 250,
            y: 675 / 2 - 200,
            start: getT(),
            end: getT()
        });
        s.step9 = new Katex(s, {
            size: 75,
            mode: 1,
            font: tnr,
            text: "x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}",
            fadeIn: true,
            fadeOut: true,
            font_size: 54,
            x: 250,
            y: 675 / 2 - 200,
            start: getT(),
            end: getT()

        });
        s.factor = new Katex(s, {
            size: 75,
            mode: 1,
            font: tnr,
            text: "(ax-b)(cx-d)=0",
            fadeIn: true,
            fadeOut: true,
            font_size: 54,
            x: 325,
            y: 675 / 2,
            start: getT(),
            end: getT()

        })
        s.xAlone = new Katex(s, {
            size: 75,
            mode: 1,
            font: tnr,
            text: "x =",
            fadeIn: true,
            fadeOut: true,
            font_size: 54,
            x: 350,
            y: 675 / 2 - 200,
            start: getT(),
            end: getT()
        })
        s.a = new Katex(s, {
            size: 75,
            mode: 1,
            font: tnr,
            text: "a",
            fadeIn: true,
            fadeOut: true,
            font_size: 54,
            x: 450,
            y: 675 / 2 - 40,
            start: getT(),
            end: getT()
        });
        s.b = new Katex(s, {
            size: 75,
            mode: 1,
            font: tnr,
            text: "b",
            fadeIn: true,
            fadeOut: true,
            font_size: 54,
            x: 500,
            y: 675 / 2 - 40,
            start: getT(),
            end: getT()
        });
        s.c = new Katex(s, {
            size: 75,
            mode: 1,
            font: tnr,
            text: "c",
            fadeIn: true,
            fadeOut: true,
            font_size: 54,
            x: 475,
            y: 675 / 2 + 20,
            start: getT(),
            end: getT()
        });
        s.xLine1 = new Line(s, {
            x1: 300,
            y1: 675 / 2 - 50 + 100,
            x2: 900,
            y2: 675 / 2 + 50 + 100,
            start: getT(),
            end: getT()
        })
        s.xLine2 = new Line(s, {
            x1: 900,
            y1: 675 / 2 - 50 + 100,
            x2: 300,
            y2: 675 / 2 + 50 + 100,
            start: getT(),
            end: getT()
        })
        s.xSquaredSquare = new Emphasis(s, {
            x: 300,
            y: 400,
            w: 150,
            h: 150,
            color: "blue",
            start: getT(),
            end: getT()
        });
        s.xLabel1 = new Katex(s, {
            size: 75,
            mode: 1,
            font: tnr,
            text: "x",
            fadeIn: true,
            fadeOut: true,
            font_size: 54,
            x: 300 + 75 / 1.5,
            y: 490,
            start: getT(),
            end: getT()
        });
        s.xLabel2 = new Katex(s, {
            size: 75,
            mode: 1,
            font: tnr,
            text: "x",
            fadeIn: true,
            fadeOut: true,
            font_size: 54,
            x: 250,
            y: 375,
            start: getT(),
            end: getT()
        });
        s.plus1 = new Katex(s, {
            size: 75,
            mode: 1,
            font: tnr,
            text: "+",
            fadeIn: true,
            fadeOut: true,
            font_size: 54,
            x: 475,
            y: 375,
            start: getT(),
            end: getT()
        });
        s.xabSquare = new Emphasis(s, {
            x: 600,
            y: 400,
            w: 75,
            h: 150,
            color: "yellow",
            start: getT(),
            end: getT()
        });
        s.xabpart1 = new Emphasis(s, {
            x: 600,
            y: 400,
            w: 75 / 2,
            h: 150,
            color: "yellow",
            start: getT(),
            end: getT()
        });
        s.xabpart2 = new Emphasis(s, {
            x: 600 + 75 / 2,
            y: 400,
            w: 75 / 2,
            h: 150,
            color: "yellow",
            start: getT(),
            end: getT()
        });
        s.xabpart1Shift = new Emphasis(s, {
            x: 300,
            y: 400 - 75 / 2,
            w: 150,
            h: 75 / 2,
            color: "yellow",
            start: getT(),
            end: getT()
        });
        s.xabpart2Shift = new Emphasis(s, {
            x: 450,
            y: 400,
            w: 75 / 2,
            h: 150,
            color: "yellow",
            start: getT(),
            end: getT()
        });
        s.b2alabel1 = new Katex(s, {
            size: 25,
            mode: 1,
            font: tnr,
            text: "\\frac{b}{2a}",
            fadeIn: true,
            fadeOut: true,
            font_size: 15,
            x: 310,
            y: 355,
            color: "grey",
            start: getT(),
            end: getT()
        })
        s.b2alabel2 = new Katex(s, {
            size: 75,
            mode: 1,
            font: tnr,
            text: "\\frac{b}{2a}",
            fadeIn: true,
            fadeOut: true,
            font_size: 15,
            x: 460,
            y: 505,
            color: "grey",
            start: getT(),
            end: getT()
        })
        s.tinySquare = new Emphasis(s, {
            x: 450,
            y: 400 - 75 / 2,
            w: 75 / 2,
            h: 75 / 2,
            color: "orange",
            start: getT(),
            end: getT()
        })
        s.tinyLabel = new Katex(s, {
            size: 75,
            mode: 1,
            font: tnr,
            text: "\\frac{b^2}{4a^2}",
            fadeIn: true,
            fadeOut: true,
            font_size: 15,
            x: 450 + 75 / 8,
            y: 400 - 75 / 2 + 75 / 16 - 12,
            color: "grey",
            start: getT(),
            end: getT()

        });
        s.xabLabel1 = new Katex(s, {
            size: 75,
            mode: 1,
            font: tnr,
            text: "x",
            fadeIn: true,
            fadeOut: true,
            font_size: 54,
            x: 550,
            y: 375,
            start: getT(),
            end: getT()
        });
        s.xabLabel2 = new Katex(s, {
            size: 60,
            mode: 1,
            font: tnr,
            text: "\\frac{b}{a}",
            fadeIn: true,
            fadeOut: true,
            font_size: 54,
            x: 615,
            y: 510,
            start: getT(),
            end: getT()
        });
        s.eq1 = new Katex(s, {
            size: 75,
            mode: 1,
            font: tnr,
            text: "=",
            fadeIn: true,
            fadeOut: true,
            font_size: 54,
            x: 712.5,
            y: 375,
            start: getT(),
            end: getT()
        });
        s.caSquare = new Emphasis(s, {
            x: 800,
            y: 400,
            w: 225,
            h: 150,
            color: "green",
            start: getT(),
            end: getT()
        });
        s.tinyRect = new Emphasis(s, {
            x: 800 + 225,
            y: 400,
            w: 9.37,
            h: 150,
            color: "orange",
            start: getT(),
            end: getT()
        })
        s.caLabel = new Katex(s, {
            size: 75,
            mode: 1,
            font: tnr,
            text: "-\\frac{c}{a}",
            fadeIn: true,
            fadeOut: true,
            font_size: 54,
            x: 800 + 225 / 4,
            y: 375,
            start: getT(),
            end: getT()
        });
        s.splitLine = new Line(s, {
            x1: 600 + 75 / 2,
            x2: 600 + 75 / 2,
            y1: 400,
            y2: 550,
            start: getT(),
            end: getT()
        })

    };
    let scene = 0;
    let frame = 0;
    s.draw = function() {
        s.background(0);
        s.startText.show();
        s.qEquation.show();
        s.xLine1.show();
        s.xLine2.show();
        s.factor.show();
        s.xAlone.show();
        s.a.show();
        s.b.show();
        s.c.show();
        s.step1.show();
        s.step2.show();
        s.step3.show();
        s.step4.show();
        s.step5.show();
        s.step6.show();
        s.step7.show();
        s.step8.show();
        s.step9.show();
        s.xSquaredSquare.show();
        s.xLabel1.show();
        s.xLabel2.show();
        s.plus1.show();
        s.xabSquare.show();
        s.xabLabel1.show();
        s.xabLabel2.show();
        s.eq1.show();
        s.caSquare.show();
        s.caLabel.show();
        s.xabpart1.show();
        s.xabpart2.show();
        s.xabpart1Shift.show();
        s.xabpart2Shift.show();
        s.b2alabel1.show();
        s.b2alabel2.show();
        s.splitLine.show();
        s.tinySquare.show();
        s.tinyLabel.show();
        s.tinyRect.show();
        frame++;
    };
    s.mousePressed = function() {
        scene++;
        if (scene === 1) {
            fadeOut(s.startText, frame);
            fadeIn(s.qEquation, frame);
        } else if (scene === 2) {
            fadeIn(s.factor, frame);
        } else if (scene === 3) {
            fadeIn(s.xLine1, frame);
            setTimeout(() => {
                fadeIn(s.xLine2, frame);
            }, 500);
        } else if (scene === 4) {
            fadeOut(s.factor, frame);
            fadeOut(s.xLine1, frame);
            fadeOut(s.xLine2, frame);
        } else if (scene === 5) {
            fadeIn(s.xAlone, frame);
            setTimeout(() => {
                s.xAlone.shift(0, 200, 0.5, 0);
            });
        } else if (scene === 6) {
            fadeIn(s.a, frame);
            fadeIn(s.b, frame);
            fadeIn(s.c, frame);
            setInterval(() => {
                s.a.move(s.b.x, s.b.y, 0.5, 0);
                s.b.move(s.c.x, s.c.y, 0.5, 0)
                s.c.move(s.a.x, s.a.y, 0.5, 0)
            }, 1500);
        } else if (scene === 7) {
            fadeOut(s.xAlone, frame);
            fadeOut(s.a, frame);
            fadeOut(s.b, frame);
            fadeOut(s.c, frame);
        } else if (scene === 8) {
            fadeIn(s.step1, frame);
            fadeOut(s.qEquation, frame);
        } else if (scene === 9) {
            fadeIn(s.step2, frame);
            fadeOut(s.step1, frame);
        } else if (scene === 10) {
            fadeIn(s.xSquaredSquare, frame);
            fadeIn(s.xLabel1, frame);
            fadeIn(s.xLabel2, frame);
        } else if (scene === 11) {
            fadeIn(s.plus1, frame);
            fadeIn(s.xabSquare, frame);
            fadeIn(s.xabLabel1, frame);
            fadeIn(s.xabLabel2, frame);
        } else if (scene === 12) {
            fadeIn(s.eq1, frame);
            fadeIn(s.caSquare, frame);
            fadeIn(s.caLabel, frame);
        } else if (scene === 13) {
            fadeIn(s.splitLine, frame);
            fadeOut(s.xabSquare, frame);
            fadeIn(s.xabpart1, frame);
            fadeIn(s.xabpart2, frame);
        } else if (scene === 14) {
            fadeOut(s.xabpart1, frame);
            fadeIn(s.xabpart1Shift, frame);
        } else if (scene === 15) {
            fadeOut(s.xabpart2, frame);
            fadeIn(s.xabpart2Shift, frame);
            fadeOut(s.splitLine, frame);
            fadeOut(s.xabLabel1, frame);
            fadeOut(s.xabLabel2, frame);
            fadeOut(s.plus1, frame);
        } else if (scene === 16) {
            fadeIn(s.b2alabel1, frame);
            fadeIn(s.b2alabel2, frame);
        } else if (scene === 17) {
            fadeIn(s.tinySquare, frame);
        } else if (scene === 18) {
            fadeIn(s.tinyLabel, frame);
        } else if (scene === 19) {
            fadeIn(s.tinyRect, frame);
        } else if (scene === 20) {
            fadeOut(s.step2, frame);
            fadeIn(s.step3, frame);
            s.step3.shift(-100, 0, 0.5, 0);
        } else if (scene === 21) {
            fadeOut(s.xSquaredSquare, frame);
            fadeOut(s.xLabel1, frame);
            fadeOut(s.xLabel2, frame);
            fadeOut(s.xabpart1Shift, frame);
            fadeOut(s.xabpart2Shift, frame);
            fadeOut(s.b2alabel1, frame);
            fadeOut(s.b2alabel2, frame);
            fadeOut(s.eq1, frame);
            fadeOut(s.caSquare, frame);
            fadeOut(s.caLabel, frame);
            fadeOut(s.tinySquare, frame);
            fadeOut(s.tinyLabel, frame);
            fadeOut(s.tinyRect, frame);
        } else if (scene === 22) {
            fadeOut(s.step3, frame);
            fadeIn(s.step4, frame);
        } else if (scene === 23) {
            fadeOut(s.step4, frame);
            fadeIn(s.step5, frame);
        } else if (scene === 24) {
            fadeOut(s.step5, frame);
            fadeIn(s.step6, frame);
        } else if (scene === 25) {
            fadeOut(s.step6, frame);
            fadeIn(s.step7, frame);
        } else if (scene === 26) {
            fadeOut(s.step7, frame);
            fadeIn(s.step8, frame);
        } else if (scene === 27) {
            fadeOut(s.step8, frame);
            fadeIn(s.step9, frame);
            s.step9.shift(150, 0, 0.5, 0);
        }
    }
};

let p = new p5(GraphExample);