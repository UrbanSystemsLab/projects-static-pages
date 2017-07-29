/* global THREE TWEEN bgAnimation Stats */

var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 50)
var mouse = new THREE.Vector2()

// var controls
// controls = new THREE.OrbitControls(camera)
// controls.autoRotate = true
// controls.addEventListener('change', render)

camera.position.x = -10
camera.position.z = 30
document.onmousemove = handleMouseMove
window.addEventListener('resize', onWindowResize, false)

var stats = new Stats()
	// stats.showPanel(1) // 0: fps, 1: ms, 2: mb, 3+: custom
	// document.body.appendChild(stats.dom)

var renderer = new THREE.WebGLRenderer({
	canvas: bgAnimation,
	antialias: true,
	preserveDrawingBuffer: true,
	alpha: true
})
renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1)
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0x000000, 0)
document.body.appendChild(renderer.domElement)

var material, plane

for (var i = 0; i < 13; i++) {
	material = new THREE.MeshBasicMaterial({
		map: new THREE.TextureLoader().load('../img/contours/c' + i + '.png', texture => {
			// console.log(texture.image.currentSrc)
		}),
		transparent: true,
		opacity: 0,
		color: 0x000000
	})
	plane = new THREE.Mesh(new THREE.PlaneGeometry(30, 30, 1), material)
	plane.position.z = i / 4 - 0.8
	scene.add(plane)
	showContour(i, plane)
}

material = new THREE.PointsMaterial({
	color: 0xbbbbbb,
	size: 2,
	sizeAttenuation: false
})

var geometry = new THREE.Geometry()
var x, y, z

for (var j = 0; j < 1500; j++) {
	x = (Math.random() * 80) - 50
	y = (Math.random() * 80) - 40
	z = (Math.random() * 80) - 40

	geometry.vertices.push(new THREE.Vector3(x, y, z))
}
var pointCloud = new THREE.Points(geometry, material)
scene.add(pointCloud)

render()

function render() {
	stats.begin()

	requestAnimationFrame(render)
	renderer.render(scene, camera)
		// controls.update()
	scene.rotation.x = 0.99 * scene.rotation.x - 0.01 * mouse.y - 0.0001
	scene.rotation.y = 0.99 * scene.rotation.y + 0.01 * mouse.x + 0.001
	TWEEN.update()

	stats.end()
}

function handleMouseMove(event) {
	mouse.x = (event.clientX / window.innerWidth) - 1
	mouse.y = -(event.clientY / window.innerHeight) + 1
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()
	renderer.setSize(window.innerWidth, window.innerHeight)
	render()
}

function showContour(i, plane) {
	setTimeout(function() {
		new TWEEN.Tween(plane.material).to({ opacity: 0.2 }, 1200).easing(TWEEN.Easing.Bounce.In).start()
		new TWEEN.Tween(plane.position).to({ z: plane.position.z + 0.8 }, 1500).easing(TWEEN.Easing.Exponential.InOut).start()
	}, 400 * i + 1200)
}
