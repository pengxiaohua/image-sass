import { Uppy } from '@uppy/core'
import AWSS3 from '@uppy/aws-s3'
import { useState } from 'react';

export default async function Home() {
    const [uppy] = useState(() => {
        const uppy = new Uppy();
    })
    return (
        <div className="h-screen flex justify-center items-center">

        </div>
    );
}