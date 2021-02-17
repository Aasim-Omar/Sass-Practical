/* global $ document $ */
$(document).ready(function () {
    'use strict';
    $('.icon-list i').on('click', function(){
        $('.header .navbar').slideToggle();
    });
    $('.slider .bullets li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
});