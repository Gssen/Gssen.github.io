// 基于 liyifanniubi.github.io 的改造，用上了 simplePagination

// 填入每页显示的文章数
var itemsPerPage = 15;

//填入自定义页面的数量
var custompages = 0;

//---------------------------------------------------------------------

// XML文件路径
var xmlUrl = `${window.location.origin}/rss.xml`;

// 获取当前页数
function getCurrentPage() {
    const currentUrl = window.location.href;
    const match = currentUrl.match(/page(\d+)\.html/);
    // console.log(match ? parseInt(match[1]) : 1);
    return match ? parseInt(match[1]) : 1;
}


function updatePagination(totalPages, currentPage) {
    $(document).on('load', () => {
        let $oldPagination = $(document).find('.pagination');
        $oldPagination.html('');
        $oldPagination.pagination({
            currentPage: currentPage,
            pages: totalPages,
            cssStyle: 'light-theme',
            onPageClick(pageNumber,) {
                window.location.href = pageNumber === 1 ? `${window.location.origin}` : `${window.location.origin}/page${pageNumber}.html`;
            },
        })
    });
}

// 主
fetch(xmlUrl)
    .then(response => response.text())
    .then(data => {
        var parser = new DOMParser();

        var xmlDoc = parser.parseFromString(data, "text/xml");

        // 查找所有item标签
        var items = xmlDoc.getElementsByTagName("item");

        // console.log(items.length);

        var itemslength = items.length - custompages;

        // 如果总条数小于等于每页显示的文章数，停止
        if (itemslength <= itemsPerPage) {
            return;
        }

        // 计算总页数
        var totalPages = Math.ceil(itemslength / itemsPerPage);

        // 获取当前页
        var currentPage = getCurrentPage();

        // 插入分页条
        updatePagination(totalPages, currentPage);
    })
    .catch(error => console.error('Error fetching XML:', error));
