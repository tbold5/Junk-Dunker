document.addEventListener('DOMContentLoaded', event => {
    let container = document.getElementsByClassName('helpContainer')[0];
    let box = document.getElementsByClassName('helpBox')[0];
    for(let i = 0; i <= 4; i++){
        var items = box.children[i];
        for(let j = 1; j < items.children.length; j++){
            var item =  items.children[j];
            var instance = new Tooltip(item,{
                title: item.getAttribute('data-tooltip'),
                trigger: "hover",
                modifiers: {
                    preventOverflow: {
                        enabled: true,
                        boundariesElement: container
                    },
                }
            });
        }

    }
    // let soda = document.getElementsByClassName('sodaCan')[0];
    //
    // var instance = new Tooltip(soda,{
    //     title: soda.getAttribute('data-tooltip'),
    //     trigger: "click"
    // });
})