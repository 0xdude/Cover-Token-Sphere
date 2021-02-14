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
    const geometry = new THREE.BoxGeometry(
      Constants.scale,
      Constants.scale * Constants.aspectRatio,
      0
    );
    const material = new THREE.MeshBasicMaterial( { map: texture, transparent: true} );
    this.mesh = new THREE.Mesh( geometry, material);
  }
}
