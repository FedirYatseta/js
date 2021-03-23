function Slider() {
    this.imgUrl = []
    //find elements
    this.showPrefBtn = null;// document.querySelector('.show-prev'),
    this.showNextBtn = null; //document.querySelector('.show-next'),
    this.imgSlider = null; //document.querySelector('.slide-img'),
    this.currentImageIndex = 0;

    this.start 
    this.onShowPrevBtnClick = function (e) {
        console.log('prev clicked')
        this.currentImageIndex--
        this.imgSlider.src = this.imgUrl[this.currentImageIndex];
        this.showNextBtn.disabled = false;
        if (this.currentImageIndex === 0) {
            this.showPrefBtn.disabled = true;
        }
    };
    this.onShowNextBtnClick = function (e) {
        console.log('next clicked')
        this.currentImageIndex++
        this.imgSlider.src = this.imgUrl[this.currentImageIndex];
        this.showPrefBtn.disabled = false;
        if (this.currentImageIndex === (this.imgUrl.length - 1)) {
            this.showNextBtn.disabled = true;
        }

    };

}

Slider.prototype.start = function (elId) {
    var that = this;
    var elSelector = '#' + elId
    var el = document.querySelector(elSelector);
    // var el = document.querySelector('#slider1test');

    this.showPrefBtn = el.querySelector('.show-prev'),
        this.showNextBtn = el.querySelector('.show-next'),
        this.imgSlider = el.querySelector('.slide-img'),
        //subscribe
        this.showPrefBtn.addEventListener('click', function (e) {
            that.onShowPrevBtnClick()
        }),
        this.showNextBtn.addEventListener('click', function (e) {
            that.onShowNextBtnClick()
        }),

        this.imgUrl.push('https://www.goodcarbadcar.net/wp-content/uploads/2019/07/2019-audi-r8-onlocation.jpg'),
        this.imgUrl.push('https://www.goodcarbadcar.net/wp-content/uploads/2019/07/Canada-%E2%80%93-Sports-Car-Sales-Figures.png'),
        this.imgUrl.push('https://s1.cdn.autoevolution.com/images/news/who-d-make-a-better-sports-car-jeep-or-range-rover-143115-7.jpg'),
        this.imgUrl.push('https://i.pinimg.com/originals/4b/b2/85/4bb2852cb354b0ad89dfa1a97ef2f6fa.jpg'),

        this.imgSlider.src = this.imgUrl[this.currentImageIndex],
        this.showPrefBtn.disabled = true
};


   
      

    