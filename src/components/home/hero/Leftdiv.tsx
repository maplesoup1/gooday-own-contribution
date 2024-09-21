import React from 'react'
import Image from 'next/image'
import H2 from '@/components/h2'
import H1 from '@/components/h1'
import { Button } from '@/components/button'

const Leftdiv = () => {
    return (
        <div>
            <div className="h-auto w-[450px] flex flex-col z-10 absolute left-10 top-24">
                <div className="z-20">
                    <Image
                        src="/images/logo-text.png"
                        width={150}
                        height={150}
                        alt="logo"
                        className="my-10"
                    />
                    <div>
                        <div className="flex flex-col gap-6">
                            <H2>Increased Bookings.</H2>
                            <H1>Decreased cancellations.</H1>
                        </div>

                        <div className="my-8 w-4/5 text-wrap">
                            Gooday is a fully integrated, centralised software and app that
                            streamlines bookings between businesses and consumers. We automate
                            the manual organisation process to increase bookings and decrease
                            cancellations for all.
                        </div>
                        <Button className="bg-blue-300 text-white rounded-3xl w-36 ">
                            Get started
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leftdiv