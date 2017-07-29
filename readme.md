# Static Pages for USL Projects
Built with [Hexo](https://hexo.io/)

## Deploying Static Pages
Instead of native Hexo-deployer-s3 we are using Travis-CI to push it specific folder on shared S3 bucket.

```sh
hexo clean && hexo generate
git add . && git commit -m "update" && git push origin master
```

Locally

```sh
npm install
hexo clean && hexo server
```