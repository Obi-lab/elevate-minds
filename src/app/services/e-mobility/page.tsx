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
                            <p>E-Mobility   </p>
                        </div>
                    </div>
                </div>

                <div className="md:flex block md:flex-row flex-col gap-8 md:px-20 px-8">
                    <div className="electricBackgroundImage rounded-xl h-96 flex flex-1">

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
                        <p className="font-bold text-gray-800 text-3xl">
                            E-Mobility  Services
                        </p>

                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-4 items-center">
                            <CheckCircleIcon className="h-8 w-8 p-2 bg-red-600 rounded-full text-white" />
                            <p>
                                Transport-As-A-Service
                            </p>

                        </div>
                        <p>
                            Our EV business model is to change the way vehicles are owned and used. We extend the value of choice, environmental sustainability, and cost to every person while offering transport for convenience and comfort without users necessarily putting the high upfront capex for ownership.
                            ElevateMinds is developing a broad partnership for innovation, assembly, and infrastructure development for electric vehicles.
                            Our Transport-As-a-Service Solutions offer Affordable Costs and leverage on Smart Zero-Carbon-Grid.
                            Technology and innovative Clean Energy Station Networks.
                        </p>
                        <div className="flex flex-row gap-4 items-center">
                            <CheckCircleIcon className="h-8 w-8 p-2 bg-red-600 rounded-full text-white" />
                            <p>
                                EV-Transport As-A-Service
                            </p>
                            

                        </div>
                        <p className="py-2 text-gray-800">Our EV Mobility portfolio comprises of : </p>
                        <div className="flex flex-col gap-1 pl-4">
                            
                            <p>1. EV cars, EV-boda boda, EV-Bikes, EV-Tuk-Tuk etc</p>
                            <p>
                               2. Green Energy Stations-EV Charging &amp; Battery Changing infrastructure
                            </p>
                            <p>3. EV Manufacturing /Assembly Lines</p>
                            <p>4. EV-iHubs-Innovation Spaces for EV &amp; ITS incubations, trainings and technology transfers</p>
                            <p>5. EV-as-a-Service hailing services</p>

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
