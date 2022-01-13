$(document).ready(()=> {
    $('.filter').click(function() {
        const value = $(this).attr('data-filter')
        if(value == 'all') {
            $('.card').show(500)
        } else {
            $('.card').not('.' + value).hide(500)
            $('.card').filter('.' + value).show(500)
        }
    })

    $('.filter').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })
})

$('.card-content').mouseenter(function(element){
    let btn = element.currentTarget.children[0]
    let bgImage = element.currentTarget.children[1]
    $(btn).slideDown()
    $(bgImage).addClass('active')
    
})
$('.card-content').mouseleave(function(element){
    let btn = element.currentTarget.children[0]
    let bgImage = element.currentTarget.children[1]
    $(btn).slideUp()
    $(bgImage).removeClass('active')

})

const menuToggle = document.querySelector('.btn-hidden')
const navigation = document.querySelector('.navigation')
menuToggle.onclick = function(){
    navigation.classList.toggle('active')
}