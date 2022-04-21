// goi den button a
var btnBuys = document.querySelectorAll('.js-button-buy-ticket')

//goi den container
var getContainer = document.querySelector('.modal-container')

// lấy nút close
var close_button = document.querySelector('.js-close-button')

// goi class modal
var getModal = document.querySelector('.js-modal')

// Tạo funtion thêm class open vào class modal
function showContainer(){
    getModal.classList.add('open')
}

// ham remove khi nhan nut close
function hideContainer(){
    getModal.classList.remove('open')
}
// Ta0 vong lap bat su kien khi nhan nut
for(var btnBuy of btnBuys){
    btnBuy.addEventListener('click',showContainer )
}

// thuc hien hanh dong khi nhan close
close_button.addEventListener('click',hideContainer )

// nhấn ngoài container sẽ hidden 
getModal.addEventListener('click',hideContainer)

//bỏ hiệu ứng nổi bọt khi click vào container sẽ không hidden
getContainer.addEventListener('click', function(e){
    e.stopPropagation()
})

// get header responsive mobile
var getHeader = document.querySelector('#header')
var menuButton = document.querySelector('.menu-mobile')
// lấy giá trị chiều cao
var currentHeight = getHeader.clientHeight
// click menu
menuButton.addEventListener('click',function(){
    // Chiều cao header ban đầu là 47 nên thẻ sẽ đóng
    var currentClose = getHeader.clientHeight === currentHeight
    if(currentClose){
        getHeader.style.height = 'auto'
    }
    else{ //nếu lấy giá trị thông qua height khác 47 sẽ gán lại header bằng gtri ban đầu để đóng
        getHeader.style.height = null
    }
    
})

// sau khi click vào menu sẽ ẩn menu đi 
// lấy cấc thẻ a
var getItems = document.querySelectorAll('#nav li a[href *= "#"]')
// tạo vòng lặp bắt sự kiện khi nhấn vào từng thẻ a
for (var Item of getItems){
    Item.addEventListener('click',function(){
        getHeader.style.height = null
    })
}
