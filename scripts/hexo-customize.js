const cheerio = require('cheerio');

hexo.extend.filter.register('after_render:html', function (html) {
  const $ = cheerio.load(html);

  const comment = `
  <script src="https://giscus.app/client.js"
    data-repo="maxzhuo/blog-comments"
    data-repo-id="R_kgDOH8TQmA"
    data-category="General"
    data-category-id="DIC_kwDOH8TQmM4CRPoU"
    data-mapping="url"
    data-strict="0"
    data-reactions-enabled="1"
    data-emit-metadata="0"
    data-input-position="top"
    data-theme="preferred_color_scheme"
    data-lang="zh-CN"
    data-loading="lazy"
    crossorigin="anonymous"
    async>
  </script>
  `;

  $('.main').append(comment);

  return $.html();

});
