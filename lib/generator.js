module.exports = function (locals) {
    var log = this.log;
    var config = this.config;
    var count = config.baidu_url_submit.count;
    var host = config.baidu_url_submit.host;
    var urlsPath = config.baidu_url_submit.path;

    log.info("Generating Baidu urls for last " + count + " posts");

    // get last posts
    var urls = [].concat(locals.posts.toArray())
                     .map(function(post) {
                       return {
                         "date": post.date,
                         "permalink": post.permalink.replace(config.url, host)
                       }
                     })
                     .sort(function(a, b) {
                       return b.date - a.date;
                     })
                     .slice(0, count)
                     .map(function(post) {
                       return post.permalink.replace(config.url, host)
                     })
                     .join('\n');

    log.info("Posts urls generated in " + urlsPath + "\n" + urls);

    return {
     path: urlsPath,
     data: urls
    };
};