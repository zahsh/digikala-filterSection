
window.onscroll = function() {
        // document.querySelector("#autoScroll").scrollTop = window.scrollY;
        document.querySelector("#autoScroll").scrollTop =  window.scrollY-806;
        document.querySelector("#autoScroll").style.position = 'sticky';

        // console.log("filter : " +document.querySelector("#autoScroll").scrollTop )
        // console.log("window : " + window.scrollY )
}


// document.querySelector('#red').addEventListener('scroll',function () {
//         document.querySelector('#blue').scrollTop = document.querySelector('#red').scrollTop
// })

// document.querySelector('#blue').addEventListener('scroll',function () {
//         document.querySelector('#red').scrollTop = document.querySelector('#blue').scrollTop
// })
