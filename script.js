const imgBtns = $('.imgBtns');
const btns = $('.btns button');
for(let btn of btns) {
    btn.addEventListener('click', function() {
        const button = $('<button>');
        button.html(btn.textContent);
        imgBtns.append(button);
        $("#clear").on('click', function() {
            $(".imgBtns button").remove()
        })

    })
}