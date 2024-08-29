import { Canvas,  } from '@react-three/fiber'
import { Suspense, } from 'react'
const RenderModel = () => {
    return (
        <Canvas className='w-screen h-screen relative'>
            <Suspense fallback={null}>
                
            </Suspense>
            
        </Canvas>
    )
}

export default RenderModel