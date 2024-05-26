import Layout from "@/components/Layout"
import Image from "next/image"
import AnimateImage from '../../../public/curve.png'
import LeftImage from '../../../public/aboutLeft.png'
import Form from "@/components/Form"
import NewsletterSubscriptionForm from "@/components/NewsLetter"
import { MapIcon, PhoneIcon } from "@heroicons/react/16/solid"
import { MapPinIcon } from "@heroicons/react/24/outline"
import { CheckCircleIcon } from "@heroicons/react/16/solid"

export default function page() {
    return (
        <Layout>
            <div className="flex flex-col gap-32">

                <div className="homeTopBackgroundImage  h-[86vh] flex items-center md:px-20 px-8">
                    <div className="flex flex-col gap-3 mx-auto items-center">
                        <p className="text-4xl font-bold">Services</p>
                        <div className="text-gray-950 gap-4 flex flex-row items-center">
                            <p>Elevate Mind Advisors</p>
                            <div className="skewed-line"></div>
                            <p>Services</p>
                            <div className="skewed-line"></div>
                            <p>Energy Audit</p>
                        </div>
                    </div>
                </div>

                <div className="md:flex block md:flex-row flex-col gap-8 md:px-20 px-8">
                    <div className="energyBackgroundImage rounded-xl h-96 flex flex-1">

                    </div>
                    <div className="footerBackgroundImage hidden md:flex h-96 flex-1 rounded-xl items-center">
                        <div className="flex flex-col  gap-6 items-center mx-auto text-white">
                            <div className="bg-gray-500 rounded-full p-4 animate-pulse">
                                <PhoneIcon className="w-14 h-14 text-red-600 bg-white rounded-full p-3" />
                            </div>

                            <p>Have any questions ? Call us today</p>
                            <p>(+254)712856550</p>

                        </div>

                    </div>
                </div>

                <div className="flex flex-col gap-8 md:px-20 px-8">
                    <div className="flex flex-col gap-6">
                        <p className="font-bold text-gray-800 text-3xl">We offer energy Energy Auditing Services </p>
                        <p className="text-gray-500">
                            ElevateMinds provides a comprehensive review of energy supply and end use. The review aims to identify
                            existing gaps and quantify energy losses and costs. We also consider staff and clients' health, safety,
                            and comfort. The level of energy audit conducted depends on the client's requirements.
                            ElevateMinds conducts various energy audits, and the level of detail is per the client’s requirements.
                        </p>
                    </div>
                    <p className="text-xl font-bold text-gray-800" >Categories of energy audits conducted</p>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-4 items-center">
                            <CheckCircleIcon className="h-8 w-8 p-2 bg-red-600 rounded-full text-white" />
                            <p>Walkthroughs</p>

                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <CheckCircleIcon className="h-8 w-8 p-2 bg-red-600 rounded-full text-white" />
                            <p>General audits</p>

                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <CheckCircleIcon className="h-8 w-8 p-2 bg-red-600 rounded-full text-white" />
                            <p>Investment-grade audits</p>

                        </div>

                    </div>

                    <div className="footerBackgroundImage flex md:hidden flex-1 py-24 rounded-xl items-center">
                        <div className="flex flex-col  gap-6 items-center mx-auto text-white">
                            <div className="bg-gray-500 rounded-full p-4 animate-pulse">
                                <PhoneIcon className="w-14 h-14 text-red-600 bg-white rounded-full p-3" />
                            </div>

                            <p>Have any questions ? Call us today</p>
                            <p>(+254)712856550</p>

                        </div>

                    </div>


                </div>


                <div className="flex items-center">
                    <NewsletterSubscriptionForm />
                </div>


            </div>
        </Layout>
    )
}
