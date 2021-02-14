import * as THREE from './three.module.js';

const Constants = {
  scale: 20,
  radiusX: 115,
  radiusY: 115,
  radiusZ: 115,
  thicknessScale: 0.25,
  rotationXSpeedScale: 0.05,
  rotationYSpeedScale: 0.05,
}

export class Token {
  mesh
  rotationXSpeed
  rotationYSpeed
  configuration

  constructor(configuration) {
    this.configuration = configuration
    this.rotationXSpeed = (Math.random() - 0.5) * Constants.rotationXSpeedScale
    this.rotationYSpeed = (Math.random() - 0.5) * Constants.rotationYSpeedScale
    this.build()
  }

  build() {
    const texture = new THREE.TextureLoader().load("./assets/tokens/" + this.configuration.name + ".png")
    const topAndBottomMaterial = new THREE.MeshBasicMaterial({map: texture});
    const sideMaterial = new THREE.MeshBasicMaterial({color: this.configuration.color});

    const materials = [
      sideMaterial,
      topAndBottomMaterial,
      topAndBottomMaterial
    ]

    const geometry = new THREE.CylinderGeometry(
      Constants.scale,
      Constants.scale,
      Constants.scale * Constants.thicknessScale,
      32
    )

    const material = new THREE.MeshNormalMaterial()
    this.mesh = new THREE.Mesh(geometry, materials)
  }

  positionToken(index, rotationIndex) {
    const phi = Math.PI * (3 - Math.sqrt(5))
    const y = 1 - rotationIndex * 2
    const radius = Math.sqrt( 1 - y * y)
    const theta = phi * index
    this.mesh.position.x = Math.cos(theta) * Constants.radiusX
    this.mesh.position.y = y * Constants.radiusY
    this.mesh.position.z = Math.sin(theta) * Constants.radiusZ
  }

  render() {
    this.mesh.rotation.x += this.rotationXSpeed
    this.mesh.rotation.z += this.rotationYSpeed
  }
}
