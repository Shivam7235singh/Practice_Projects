import React, { useEffect } from 'react'
import * as THREE from 'three'



const App = () => {

useEffect(() => { 

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const canvas = document.querySelector('.homeCanvas');
const  renderer = new THREE.WebGLRenderer({canvas});
document.body.appendChild(renderer.domElement);


const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color : 0x00ff00});
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.z = 5;

const animate = () => {
  requestAnimationFrame(animate);
  renderer.setSize(window.innerWidth, window.innerHeight);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

}, []);



  return (
    <div className='home'>
      <canvas className='homeCanvas'></canvas>    
    </div>
  )
}

export default App
