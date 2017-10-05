---
title: New York City - Equity in coastal flood and heat impacts
date: 2017-03-01
authors: Jaskirat R., Daniel Sauter, and Timon McPhearson
---

The Urban Systems Lab is creating new cutting edge 3D visualizations combining multiple sources of social, ecological, and technical infrastructure data for the first time at parcel scale resolution to examine equity in risk and vulnerability to climate driven extreme events such as coastal flooding and heat waves. Here you can see an example of this 3D viz approach

@[vimeo](213720138)


## Process
- Welcome to [Hexo](https://hexo.io/)! This is your very first post. Check [documentation](https://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [troubleshooting](https://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues). Welcome to [Hexo](https://hexo.io/)! This is your very first post. Check [documentation](https://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [troubleshooting](https://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues).
Welcome to [Hexo](https://hexo.io/)! This is your very first post. Check [documentation](https://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [troubleshooting](https://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues). {col col-5}
- "The Urban Systems Lab is creating new cutting edge 3D visualizations combining multiple sources of social, ecological, and technical infrastructure data for the first time at parcel scale resolution" {quote col col-7}
{row gutters cols}


- ![img](/images/lots.jpg)
 MapPluto Lots {col col-6 small italic highlight}
- ![img](/images/tiles.jpg)
OpenStreetMap Data {col col-6 small italic highlight}
{row gutters cols}

### Create a new posts

Welcome to Hexo! This is your very first post. Check documentation for more info. If you get any problems when using Hexo, you can find the answer in troubleshooting or you can ask me on GitHub. Welcome to Hexo! This is your very first post. Check documentation for more info. If you get any problems when using Hexo, you can find the answer in troubleshooting or you can ask me on GitHub.
Welcome to Hexo! This is your very first post. Check documentation for more info. If you get any problems when using Hexo, you can find the answer in troubleshooting or you can ask me on GitHub.

```javascript
/*
  Warning : This is overwrite .geojson filename in the directory with same filename as .json file  
  To run the script:
  
  node convertJson.js <JSON Filename without extension>
  
*/


var Readable = require('stream').Readable
var fs = require('fs')

var filename

process.argv.forEach(function(val, index, array) {
	filename = val
})

var input = `${filename}.json`
var output = `${filename}.geojson`
var json = fs.createReadStream(input)

var header = new Readable()
header.push(`{ "type": "FeatureCollection","features":`)
header.push(null)
var footer = new Readable()
footer.push(`}`)
footer.push(null)

header.pipe(fs.createWriteStream(output))
header.on('end', function() {
	json.pipe(fs.createWriteStream(output, { 'flags': 'a', 'encoding': 'utf8', 'mode': '0666' }))
	json.on('end', function() {
		footer.pipe(fs.createWriteStream(output, { 'flags': 'a', 'encoding': 'utf8', 'mode': '0666' }))
		footer.on('end', function() {
			console.log('done')
		})
	})
})
```


More info: [Deployment](https://hexo.io/docs/deployment.html)
