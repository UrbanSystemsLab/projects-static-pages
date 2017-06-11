# Static Pages for USL Projects
Built on Hexo

To deploy
Instead of native Hexo-deployer-s3 we are using Travis CI to push it specific folder on shared S3 bucket for more flexibility

```sh
git add . && git commit -m "update" && git push origin master
```

Locally

```sh
npm install
hexo clean && hexo server
```