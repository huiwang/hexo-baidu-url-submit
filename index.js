const serve_mode = ['s', 'serve', 'server'].indexOf(hexo.env.args._[0]) != -1;
const enable_baidu_push = hexo.config.baidu_url_submit.enable;
if (!serve_mode || enable_baidu_push) {
  hexo.extend.generator.register('baidu_url_generator', require('./lib/generator'));
  hexo.extend.deployer.register('baidu_url_submitter', require('./lib/submitter'));
  hexo.extend.deployer.register('baidu_xz_url_submitter', require('./lib/xz_submitter'));
}
