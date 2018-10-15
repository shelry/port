$(function(){

    $('#fullpage').fullpage({
        navigation: true,
         /*sectionsColor : ['#ccc', '#ba4646', '#35a090', '#ba46a4'], css로도 가능 */
       // navigationPosition: 'left',
        navigationTooltips: ['sec1', 'sec2', 'sec4'],
        showActiveTooltip: true, /* 해당 페이지에서 네비게이션툴팁 활성화 */
        css3: false, /* background-attachment: fixed를 활성화 하기 위해 */
        scrollOverflow: true, /* 일부 섹션의 height가 100%보다 길경우 */
        menu: '#myMenu',
        anchors: ['ima_d', 'project', 'contact'],
    })

})