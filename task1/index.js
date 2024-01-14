/**
знайдіть всі <h2> з класом head,
зробіть для них зелений колір фону,
потім серед знайдених елементів знайдіть елементи з класом inner
і поставте їм розмір шрифту 35px (не вносьте змін до html-файлу)
 */

$(document).ready(function () {
  const $titleHead = $('h2.head')
  $titleHead.css('backgroundColor', 'green')
  $titleHead.find('.inner').css('fontSize', '35px')
});
