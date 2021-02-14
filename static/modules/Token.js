import * as THREE from './three.module.js';

const Constants = {
  scale: 20,
  radiusX: 115,
  radiusY: 115,
  radiusZ: 115,
  thicknessScale: 0.25,
  rotationSpeedScale: 0.05,
  touchRotationSpeedScale: 8
}

export class Token {
  mesh
  rotationXSpeed
  rotationYSpeed
  configuration

  constructor(configuration) {
    this.configuration = configuration
    this.baseRotationSpeed = 0
    this.touchRotationSpeed = 0
    this.rotationSpeed = (Math.random() - 0.5) * Constants.rotationSpeedScale
    this.build()
  }

  build() {
    const texture = new THREE.TextureLoader().load("./assets/tokens/" + this.configuration.name + ".png")
    const topAndBottomMaterial = new THREE.MeshPhongMaterial({
      map: texture,
      specular: 0x000000
    });
    const sideMaterial = new THREE.MeshPhongMaterial({
      color: this.configuration.color,
      specular: 0x000000
    });

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

  touch() {
    this.touchRotationSpeed = this.rotationSpeed * Constants.touchRotationSpeedScale
    setInterval(() => {
      this.touchRotationSpeed = 0
    }, 1000);
  }

  render() {
    this.baseRotationSpeed += (this.touchRotationSpeed - this.baseRotationSpeed) * 0.05
    this.mesh.rotation.x += this.baseRotationSpeed + this.rotationSpeed
    this.mesh.rotation.z += this.baseRotationSpeed + this.rotationSpeed
  }
}
