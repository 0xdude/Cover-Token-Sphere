import * as THREE from './three.module.js';

const Constants = {
  scale: 140,
  aspectRatio: 1.142,
}

export class CoverLogo {
  mesh;

  constructor() {
    this.build()
  }

  build() {
    const texture = new THREE.TextureLoader().load( './assets/cover_logo.png' );
    const geometry = new THREE.PlaneGeometry(
      Constants.scale,
      Constants.scale * Constants.aspectRatio,
      32
    );
    const material = new THREE.MeshPhongMaterial( {
      map: texture,
      transparent: true,
      specular: 0x282828
    })
    this.mesh = new THREE.Mesh(geometry, material);
  }
}
