// $( document ).ready(function() {

// $('.datepicker-msb-none').focus(function () {
//     var getwidth = $('.data-filed .datepicker-msb-none').width();
//     $('.xdsoft_datetimepicker.xdsoft_noselect.xdsoft_').css({"width": getwidth + 38});
// });

// $('.show-child-kl').hide();
//
// $('.parent_sysbol').click(function () {
//     $(this).next('.show-child-kl').toggle();
//     $(this).closest('tr.has-group').find('.show-child-kl:nth-child(n+4)').show();
// });

//select
// $('select').click(function () {
//     $(this).toggleClass('select-icon-up');
// });
// $('select').focusout(function () {
//     $(this).removeClass('select-icon-up')
// });
//
// //menubar
$(document).ready(function () {

});


// $(".view-menu-mb").click(function () {
//     $(this).toggleClass("change-icon-mb")
//     overlay.toggle();
//     $(".navigation").toggleClass("open-mb");
// });
// overlay.click(function () {
//    $(".view-menu-mb").trigger('click');
// });
//
// //close file name-uploadfile
// $(".close-file").click(function () {
//     $(this).parent(".file-return").remove();
// });
//
// login_pp();

// $('.search-select2').select2();

// js show hide table
// $(".zone-extend").hide();
// $('.zone-narrow').click(function () {
//     $(this).parent().find('.zone-extend').toggle();
//
// });

// var count = $('.table-wrap .table-block table tbody tr.has-group td > div.ex-cls').length;
// if(count > 3){
//     $('.ex-cls:nth-child(n+4)').hide();
//     $('.btn-collapse').hide();
// }
// else{
//     $('.btn-extend-collapse').hide();
// }
//
// $('.btn-extend').click(function () {
//     $(this).hide();
//     $(this).next().show();
//     $(this).closest('tr.has-group').find('.ex-cls:nth-child(n+4)').show();
//
//     $(this).closest('tr.has-group').find('.ex-cls:nth-child(3)').css('border-bottom','1px solid #eaeaea');
//     $(this).parent('.btn-extend-collapse').prev().css('border-bottom','none');
// });
// $('.btn-collapse').click(function () {
//     $(this).hide();
//     $(this).prev().show();
//     $(this).closest('tr.has-group').find('.ex-cls:nth-child(n+4)').hide();
//     $(this).parent('.btn-extend-collapse').prev('.ex-cls:nth-child(3)').css('border-bottom','none')
//     $(this).closest('tr.has-group').find('.ex-cls:nth-child(3)').css('border-bottom','none');
// })

// });

//
// $(window).resize(function () {
//     login_pp();
// });
// // fc menumb
// function login_pp() {
//     if (window.innerWidth < 992) {
//         $(".info-user-wrap").hide();
//         $(".user-block").click(function () {
//             $(".info-user-wrap").toggle();
//             $(this).toggleClass("btn-lightx")
//         });
//
//         // js dropdownmenu
//         $(".nav-dropdown").hide();
//         $('.hasdropdown').click(function () {
//             $(".nav-dropdown").slideUp();
//             $('.hasdropdown').removeClass('rotate-up');
//             if(!$(this).children('ul.nav-dropdown').is(":visible"))
//             {
//                 $(this).children('ul.nav-dropdown').slideDown();
//                 $(this).addClass('rotate-up');
//             }
//         });
//         // Check if clicked outside target
//         if (!($(event.target).closest(".user-block").length)) {
//             // Hide target
//             $(".info-user-wrap").hide();
//
//         }
//     }
// }
$(document).ready(function () {
    if (window.innerWidth < 992){
        // js dropdownmenu
        $(".has-dropdown ul").hide();
        $('.has-dropdown').click(function () {
            $(".has-dropdown ul").slideUp();
            $('.has-dropdown').removeClass('rotate-up');
            if(!$(this).children('ul.dropdown-child').is(":visible"))
            {
                $(this).children('.has-dropdown ul').slideDown();
                $(this).addClass('rotate-up');
            }
        });
    }
    var overlay = $("<div class='overlay'></div>");
    $("body").prepend(overlay);
    $(".view-menu-mb").click(function () {
        $(this).toggleClass("change-icon-mb");
        overlay.toggle();
        $(".navigation").toggleClass("open-mb");
    });
    overlay.click(function () {
       $(".view-menu-mb").trigger('click');
    });





    $('.wrap-search i').click(function () {
        $('.block-seacrh').toggle();
    });

    $(window).scroll( () => {
        var windowTop = $(window).scrollTop();
        windowTop > 0 ? $('.head-top').addClass('fixed') : $('.head-top').removeClass('fixed');
        // windowTop > 100 ? $('ul').css('top','100px') : $('ul').css('top','160px');
    });


    // go top
    $("a[href='#top']").click(function () {
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 300) {
            $('#go_top').show();
        }
        else {
            $('#go_top').hide();
        }
    });

    //js menu by javascript
    $('body').append("<div class='overlay'></div>");
    $('.btn-bars').click(function () {
        $('.overlay').toggle();
        $('.navigation').toggleClass('show');
    });

    //js question

    $(".list-question ul").hide();
    $('.list-question > li').click(function () {
        $(".list-question ul").slideUp();
        $('.list-question > li').removeClass('rotate-up');
        if(!$(this).children('.list-question ul').is(":visible"))
        {
            $(this).children('.list-question ul').slideDown();
            $(this).addClass('rotate-up');
        }
    });

    //js select

    $('.item-info select').click(function () {
        $(this).next('i.fas.fa-angle-down').toggleClass('active');
    });
    $('.item-info select').focusout(function () {
        $(this).next('i.fas.fa-angle-down').removeClass('active');
    });

    //js datepicker
    jQuery('.calendar-dv').datetimepicker({
        timepicker:false,
        format: 'd/m/Y'
    });





    // Click event of the showPassword button
    $('.show-pass').on('click', function(){

        // Get the password field
        var passwordField = $('.password-ss');

        // Get the current type of the password field will be password or text
        var passwordFieldType = passwordField.attr('type');

        // Check to see if the type is a password field
        if(passwordFieldType == 'password')
        {
            // Change the password field to text
            passwordField.attr('type', 'text');

            // Change the Text on the show password button to Hide
            $(this).val('Hide');

            $('.show-pass .img-show-pass').hide();
            $('.show-pass .img-hide-pass').show();
        } else {
            // If the password field type is not a password field then set it to password
            passwordField.attr('type', 'password');

            // Change the value of the show password button to Show
            $(this).val('Show');
            $('.show-pass img.img-show-pass').show();
            $('.show-pass img.img-hide-pass').hide();
        }
    });
    $('.show-pass2').on('click', function(){

        // Get the password field
        var passwordField = $('#re_password');

        // Get the current type of the password field will be password or text
        var passwordFieldType = passwordField.attr('type');

        // Check to see if the type is a password field
        if(passwordFieldType == 'password')
        {
            // Change the password field to text
            passwordField.attr('type', 'text');

            // Change the Text on the show password button to Hide
            $(this).val('Hide');

            $('.show-pass2 .img-show-pass').hide();
            $('.show-pass2 .img-hide-pass').show();
        } else {
            // If the password field type is not a password field then set it to password
            passwordField.attr('type', 'password');

            // Change the value of the show password button to Show
            $(this).val('Show');
            $('.show-pass2 img.img-show-pass').show();
            $('.show-pass2 img.img-hide-pass').hide();
        }
    });






});


//effect button
$(function($) {

    $(document).on("mousedown", "[data-ripple]", function(e) {

        var $self = $(this);

        if($self.is(".btn-disabled")) {
            return;
        }
        if($self.closest("[data-ripple]")) {
            e.stopPropagation();
        }

        var initPos = $self.css("position"),
            offs = $self.offset(),
            x = e.pageX - offs.left,
            y = e.pageY - offs.top,
            dia = Math.min(this.offsetHeight, this.offsetWidth, 100), // start diameter
            $ripple = $('<div/>', {class:"ripple", appendTo:$self});

        if(!initPos || initPos==="static") {
            $self.css({position:"relative"});
        }

        $('<div/>', {
            class : "rippleWave",
            css : {
                background: $self.data("ripple"),
                width: dia,
                height: dia,
                left: x - (dia/2),
                top: y - (dia/2),
            },
            appendTo : $ripple,
            one : {
                animationend : function(){
                    $ripple.remove();
                }
            }
        });
    });

});

