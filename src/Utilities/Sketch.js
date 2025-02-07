// src/Sketch.js
class Sketch {
    constructor() {
        this.onResize = this.onResize.bind(this);
        this.onScroll = this.onScroll.bind(this);
        this.content = document.querySelector('[data-content]') || false;
        this.scroll = document.querySelector('[data-scroll]') || false;

        //   this.hero = document.querySelector('[data-hero]') || false;
        //   this.heroTitle = document.querySelector('[data-hero-title]') || false;
        //   this.heroImage = document.querySelector('[data-hero-image]') || false;
        //   this.heroBorder = document.querySelector('[data-hero-border]') || false;

        // this.intoUpper = document.querySelector('[data-intro-top]') || false
        // this.intro = document.querySelector('[data-intro]') || false;
        // this.introTitle = document.querySelector('[data-intro-title]') || false;
        // this.introText = document.querySelector('[data-intro-text]') || false;
        // this.introFigure1 = document.querySelector('[data-intro-figure="1"]') || false;
        // this.introFigure2 = document.querySelector('[data-intro-figure="2"]') || false;
        // this.introFigure3 = document.querySelector('[data-intro-figure="3"]') || false;
        // this.introFigure4 = document.querySelector('[data-intro-figure="4"]') || false;

        this.layer = document.querySelector('[data-layer]') || false;
        this.layerText = document.querySelector('[data-layer-text]') || false;

        this.slider = document.querySelector('[data-slider]') || false;
        this.sliderInner = document.querySelector('[data-slider-inner]') || false;
        this.sliderSlides = document.querySelectorAll('[data-slider-slide]') || false;
        this.gole = document.querySelector('[data-gole]') || false;

        //   this.outro = document.querySelector('[data-outro]') || false;
        //   this.outroMedia = document.querySelectorAll('[data-outro-media]') || false;
        //   this.outroMedias = document.querySelector('[data-outro-medias]') || false;

        this.scrollTop = 0;
        this.windowWidth = 0;
        this.easedScrollTop = 0;

        //   this.heroHeight = 0;
        //   this.heroTitleTop = 0;
        //   this.heroTitleHeight = 0;

        // this.introStart = 0;
        // this.introEnd = 0;
        // this.introHeight = 0;
        // this.introTitleTop = 0;
        // this.introTitleHeight = 0;
        // this.introTextTop = 0;
        // this.introTextHeight = 0;

        this.layerTop = 0;
        this.layerHeight = 0;
        this.layerTextTop = 0;
        this.layerTextHeight = 0;

        this.sliderTop = 0;
        this.sliderInnerWidth = 0;
        this.sliderHeigth = 0
        //   this.outroMediasWidth = 0;
        //   this.outroMediasHeight = 0;
        this.current = 0;
        this.skewX = 0;
        this.rotate = 0;
        this.distX = 0;
        this.distY = 0;
        this.mousePos = { x: 0, y: 0 };
        this.cursorPos = { x: 0, y: 0 };

        this.init();
    }

    init() {
        this.event();
        this.onResize();
        this.update();
    }

    event() {
        window.addEventListener('resize', this.onResize, false);
        document.addEventListener('scroll', this.onScroll, false);
        //   this.outro.addEventListener('mousemove', this.onMove.bind(this), false);
        //   for (const media of this.outroMedia) {
        //     media.addEventListener('mouseenter', this.onEnter, false);
        //   }
    }

    update() {
        requestAnimationFrame(this.update.bind(this));

        this.easedScrollTop += (this.scrollTop - this.easedScrollTop) * 0.5;
        if (this.easedScrollTop < 0.01) {
            this.easedScrollTop = 0;
        }
        this.setTransform(
            this.content,
            'translateY(' + this.easedScrollTop * -1 + 'px) translateZ(0)'
        );

        //   const heroSequence = this.clamp(0, 1, this.easedScrollTop / this.heroHeight);
        //   const heroBorder = heroSequence * 200 + 1;
        //   const heroScale = heroSequence * 0.1 + 1;
        //   const heroTransformY = heroSequence * 300;

        //   this.heroBorder.style.borderWidth = heroBorder + 'px';
        //   this.setTransform(
        //     this.heroImage,
        //     'scale(' +
        //       heroScale +
        //       ') translateY(' +
        //       heroTransformY +
        //       'px) translateZ(0)'
        //   );

        //   if (this.easedScrollTop > this.heroTitleTop + this.heroTitleHeight) {
        //     this.heroTitle.classList.remove('active');
        //   } else {
        //     this.heroTitle.classList.add('active');
        //   }

        // const introSequence = this.clamp(
        //     0,
        //     1,
        //     (this.easedScrollTop - this.introStart) / this.introEnd
        // );
        // const introTransformY1 = introSequence * this.introEnd * 0.1;
        // const introTransformY2 = introSequence * this.introEnd * 0.2;
        // const introTransformY3 = introSequence * this.introEnd * 0.25;
        // const introTransformY4 = introSequence * this.introEnd * 0.3;

        // this.setTransform(
        //     this.introFigure1,
        //     'translateY(' + introTransformY1 + 'px) translateZ(0)'
        // );
        // this.setTransform(
        //     this.introFigure2,
        //     'translateY(' + introTransformY2 * -1 + 'px) translateZ(0)'
        // );
        // this.setTransform(
        //     this.introFigure3,
        //     'translateY(' + introTransformY3 * -1 + 'px) translateZ(0)'
        // );
        // this.setTransform(
        //     this.introFigure4,
        //     'translateY(' + introTransformY4 + 'px) translateZ(0)'
        // );

        // if (
        //     // this.easedScrollTop > this.introTitleTop - this.heroHeight &&
        //     this.easedScrollTop < this.introTitleTop + this.introTitleHeight
        // ) {
        //     this.introTitle.classList.add('active');
        // } else {
        //     this.introTitle.classList.remove('active');
        // }

        // if (
        //     // this.easedScrollTop > this.introTextTop - this.heroHeight &&
        //     this.easedScrollTop < this.introTextTop + this.introTextHeight
        // ) {
        //     this.introText.classList.add('active');
        // } else {
        //     this.introText.classList.remove('active');
        // }

        if (
            this.easedScrollTop > this.layerTextTop - this.sliderHeigth &&
            this.easedScrollTop < this.layerTextTop + this.layerTextHeight
        ) {
            this.layer.classList.add('active');
        } else {
            // this.layer.classList.remove('active');
        }

        const sliderSequence = this.clamp(
            0,
            1,
            (this.easedScrollTop - this.sliderTop) / (this.windowWidth * 2)
        );
        const sliderTransformY = sliderSequence * (this.windowWidth * 2);

        this.setTransform(
            this.slider,
            'translateY(' + sliderTransformY + 'px) translateZ(0)'
        );
        this.setTransform(
            this.sliderInner,
            'translateX(' + -sliderTransformY + 'px) translateZ(0)'
        );

        this.current = this.lerp(this.current, this.scrollTop, 0.08);
        this.current = parseFloat(this.current.toFixed(2));
        this.skewX = (this.scrollTop - this.current) * 0.01;

        for (const slide of this.sliderSlides) {
            if (
                this.easedScrollTop > this.sliderTop &&
                this.easedScrollTop < this.sliderTop + this.windowWidth * 2
            ) {
                this.setTransform(slide, 'skewX(' + this.skewX + 'deg)');
            } else {
                this.setTransform(slide, 'skewX(0deg)');
            }
        }

        //   this.follow();
    }

    setTransform(el, value) {
        el.style.mozTransform = value;
        el.style.webkitTransform = value;
        el.style.transform = value;
    }

    getPos(node, scope) {
        const root = scope || document;
        let offsetTop = node.offsetTop;
        while (
            node &&
            node.offsetParent &&
            node.offsetParent !== document &&
            node !== root &&
            root !== node.offsetParent
        ) {
            offsetTop += node.offsetParent.offsetTop;
            node = node.offsetParent;
        }
        return { top: offsetTop };
    }

    clamp(min, max, value) {
        return Math.min(Math.max(value, min), max);
    }

    lerp(start, end, time) {
        return start * (1 - time) + end * time;
    }

    onResize() {
        this.scroll.style.height = this.content.clientHeight + 'px';
        //   this.heroHeight = this.hero.clientHeight;
        // this.introUpperHeight = this.intoUpper.clientHeight;
        this.windowWidth = window.innerWidth;

        //   const heroTitleOffset = this.getPos(this.heroTitle);
        //   this.heroTitleTop = heroTitleOffset.top;
        //   this.heroTitleHeight = this.heroTitle.clientHeight;

        // const introOffset = this.getPos(this.intro);
        // this.introStart = introOffset.top - this.introUpperHeight;
        // this.introEnd = this.intro.clientHeight + this.introUpperHeight;
        //   this.introStart = introOffset.top - this.heroHeight;
        //   this.introEnd = this.intro.clientHeight + this.heroHeight;

        // const introTitleOffset = this.getPos(this.introTitle);
        // this.introTitleTop = introTitleOffset.top;
        // this.introTitleHeight = this.introTitle.clientHeight;

        // this.introHeight = this.intro.clientHeight;

        // const introTextOffset = this.getPos(this.introText);
        // this.introTextTop = introTextOffset.top;
        // this.introTextHeight = this.introText.clientHeight;

        const layerOffest = this.getPos(this.layer);
        this.layerTop = layerOffest.top;
        this.layerHeight = this.layer.clientHeight;

        const layerTextOffest = this.getPos(this.layerText);
        this.layerTextTop = layerTextOffest.top;
        this.layerTextHeight = this.layerText.clientHeight;

        const sliderOffest = this.getPos(this.slider);
        this.sliderHeigth = this.gole.clientHeight;
        this.sliderTop = sliderOffest.top;

        //   this.outroMediasHeight = this.outroMedias.clientHeight / 2;
        //   this.outroMediasWidth = this.outroMedias.clientWidth / 2;
    }

    onScroll() {
        this.scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
    }

    // onEnter(e) {
    //   let target = e.currentTarget.dataset.outroMedia;
    //   for (const image of document.querySelectorAll('[data-outro-image]')) {
    //     if (image.classList.contains('active')) {
    //       image.classList.remove('active');
    //     }
    //     if (image.dataset.outroImage === target) {
    //       image.classList.add('active');
    //     }
    //   }
    // }

    onMove(e) {
        this.mousePos.x = e.pageX;
        this.mousePos.y = e.pageY - this.scrollTop;
    }

    // follow() {
    //   this.distX = this.mousePos.x - this.cursorPos.x;
    //   this.distY = this.mousePos.y - this.cursorPos.y;
    //   this.cursorPos.x += this.distX;
    //   this.cursorPos.y += this.distY;
    //   this.rotate = this.mousePos.x <= this.windowWidth / 2 ? -5 : 5;

    //   this.outroMedias.style.left =
    //     this.cursorPos.x - this.outroMediasWidth + 'px';
    //   this.outroMedias.style.top =
    //     this.cursorPos.y - this.outroMediasHeight + 'px';
    //   this.setTransform(this.outroMedias, 'rotate(' + this.rotate + 'deg)');
    // }
}

export default Sketch;