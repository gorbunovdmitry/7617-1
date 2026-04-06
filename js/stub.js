/**
 * Только для stub.html (как history.replaceState в 7244 после заглушки).
 * Ключ localStorage «7617_1» только для варианта 7617-1; для 7617-2 используйте «7617_2» и т.д.
 * Блокирует «Назад» в рамках этой вкладки на странице заглушки.
 */
(function () {
    history.replaceState(null, '', location.href);
    history.pushState(null, '', location.href);
    window.addEventListener('popstate', function () {
        history.pushState(null, '', location.href);
    });
})();
