import React from "react";
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { HeroDisplay } from '../../assets/WebsiteAssets2'
import { Bloom, EffectComposer,SSAO} from '@react-three/postprocessing'
const RightPart = () =>{
    return(
        < >
            <Canvas >
                <ambientLight intensity={0.7}></ambientLight>
                <spotLight position={[25,20,10]}></spotLight>
                <HeroDisplay></HeroDisplay>
                <PerspectiveCamera makeDefault position={[12,2,22]}></PerspectiveCamera>
                <OrbitControls 
                    minAzimuthAngle={-Math.PI/4}
                    maxAzimuthAngle={Math.PI/4}
                    minPolarAngle={Math.PI/6}
                    maxPolarAngle={Math.PI -Math.PI/6}
                    enableDamping={true}
                    enablePan={false}
                    maxZoom={0}
                ></OrbitControls>
                <EffectComposer>
                    <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} intensity={0.5}></Bloom>
                </EffectComposer>
            </Canvas>
        </>
    );
};

export default RightPart;