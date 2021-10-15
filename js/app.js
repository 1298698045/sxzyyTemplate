var mixin = {
    data: function(){
        return {
            isArticle: false,
            hasRoute: this.hasOwnProperty('$route'),
            selectMenu: '',
            isNav: false,
            isTop: false,
            height: 0
        }
    },
    computed: {
        activeMenu: function() {
            return (this.selectMenu || this.typePath)
        }
    },
    mounted() {
        window.addEventListener('scroll',this.handleIsScroll,true)
    },
    methods: {
        push: function(path) {
            router.push({path: path})
        },
        gotoHref: function(url) {
            location.href = url
            this.isNav = false
        },
        goto: function(url) {
            window.open(url)
        },
        onMenuMouseOver: function(menu) {
            this.selectMenu = menu
        },
        onMenuMouseLeave: function() {
            this.selectMenu = ''
        },
        // 导航开关
        handleNavOpen(){
            this.isNav = !this.isNav;
            if(this.isNav){
                this.$nextTick(()=>{
                    this.height = this.$refs.navBody.offsetHeight - 200;
                })
            }else {
                this.$nextTick(()=>{
                    this.height = 0;
                })
            }
        },
        handleIsShow(idx){
            $('.menu').eq(idx).find('.showBox').toggle();
            $('.menu').eq(idx).find('.row .right_icon').toggleClass('active');
            $('.showBox').not($('.menu').eq(idx).find('.showBox')).hide();
            $('.row .right_icon').not($('.menu').eq(idx).find('.row .right_icon')).removeClass('active');
            var top = $('.wrap .mobileHeader .mobileNav .nav_body_modal').scrollTop()+100
            $('.wrap .mobileHeader .mobileNav .nav_body_modal').scrollTop(top)
        },
        handleIsScroll() {
            let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
            scrolltop > 100 ? (this.isTop = true) : (this.isTop = false);
        },
        toTop() {
            let top = document.documentElement.scrollTop || document.body.scrollTop;
            // 实现滚动效果 
            const timeTop = setInterval(() => {
                document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
                if (top <= 0) {
                    this.isTop = true;
                    clearInterval(timeTop);
                }else {
                    this.isTop = false;
                }
            }, 10);
        },
    }
}
