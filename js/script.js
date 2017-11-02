$(function () {
    'use strict';
    const ALLCONST = {
        iconMenu: $('.menu-link-icon'),
        iconCancelMenu: $('.menu-link-icon-close'),
        listNav: $('.list-nav'),
        mainInfoRow: $('.main-info-row')
    };


    let showMenu = () => {
        $('body').append(ALLCONST.listNav);
        ALLCONST.listNav.css('display','flex').fadeIn();
    };

    let closeMenu = () => {
        ALLCONST.listNav.fadeOut(() => {
            ALLCONST.mainInfoRow.append(ALLCONST.listNav);
        });
    };

    ALLCONST.iconMenu.click(showMenu);
    ALLCONST.iconCancelMenu.click(closeMenu);
});