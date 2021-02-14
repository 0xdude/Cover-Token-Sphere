import * as THREE from './three.module.js';
import { Token } from './Token.js';

const Constants = {
  rotationXSpeed: 0.005,
  rotationYSpeed: 0.005,
}

export class TokenSphere {
  tick = 0
  tokens = []
  object
  configuration

  constructor(configuration) {
    this.build()
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

    this.tokens.forEach((token, i) => {
      let rotationIndex = i / this.tokens.length
      token.positionToken(i, rotationIndex)
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
