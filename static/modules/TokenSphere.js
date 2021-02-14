import * as THREE from './three.module.js';
import { Token } from './Token.js';

const Constants = {
  rotationXSpeed: 0.005,
  rotationYSpeed: 0.005,
  radiusX: 115,
  radiusY: 115,
  radiusZ: 115
}

export class TokenSphere {
  tick = 0
  tokens = []
  object
  configuration

  constructor(configuration) {
    this.build()
    this.addTokens()
  }

  build() {
    this.object = new THREE.Group()
    this.tokens.push(new Token({name: "yearn", color: 0x2a6bdb}))
    this.tokens.push(new Token({name: "badger", color: 0xe5a145}))
    this.tokens.push(new Token({name: "cream", color: 0x88ddd0}))
    this.tokens.push(new Token({name: "curve", color: 0xffffff}))
    this.tokens.push(new Token({name: "sushi", color: 0xffffff}))
    this.tokens.push(new Token({name: "barnbridge", color: 0xea5341}))
    this.tokens.push(new Token({name: "88mph", color: 0x000000}))
    this.tokens.push(new Token({name: "aave", color: 0xffffff}))
    this.tokens.push(new Token({name: "token", color: 0xffffff}))
    this.tokens.push(new Token({name: "origin", color: 0x22313e}))
    this.tokens.push(new Token({name: "boringdao", color: 0x337be1}))
  }

  addTokens() {
    this.tokens.forEach((token, i) => {
      const phi = Math.PI * (3 - Math.sqrt(5))
      const y = 1 - (i / this.tokens.length) * 2
      const radius = Math.sqrt( 1 - y * y)
      const theta = phi * i
      token.mesh.position.x = Math.cos(theta) * Constants.radiusX
      token.mesh.position.y = y * Constants.radiusY
      token.mesh.position.z = Math.sin(theta) * Constants.radiusZ
      this.object.add(token.mesh)
    })
  }

  render() {
    this.tokens.forEach((token, i) => {
      token.render()
    })

    this.object.rotation.x += Constants.rotationXSpeed
    this.object.rotation.y += Constants.rotationYSpeed
  }
}
