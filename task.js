const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsContent = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach(item => {
    item.addEventListener('click', function() {
        closeAlltabs();
        closeAlltabContent();
        let index = tabs.indexOf(item);
        tabs[index].classList.add('tab_active');
        tabsContent[index].classList.add('tab__content_active');
    });
});

//закрываем другие вкладки, открыта должна быть только одна вкладка
//current - текущая вкладка
function closeAlltabs (current = null) {

    tabs.forEach(item => {
        if (item != current) {
        item.classList.remove('tab_active')
        }
    }); 
};

//закрываем контент других вкладок, открыт должен быть контент только одной вкладки
//current - текущий контент
function closeAlltabContent (current = null) {

    tabsContent.forEach(item => {
        if (item != current) {
        item.classList.remove('tab__content_active')
        }
    }); 
};
