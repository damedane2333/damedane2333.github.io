// 公共js部分
function search_onfous() {

    // 获取到输入框对象
    var search = document.getElementById('search');
    search.placeholder = '';

}

function search_onblur() {
    var search = document.getElementById('search');
    search.placeholder = '搜索';
}