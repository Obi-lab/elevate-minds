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
                            <p>Waste Management and Consulting </p>
                        </div>
                    </div>
                </div>

                <div className="md:flex block md:flex-row flex-col gap-8 md:px-20 px-8">
                    <div className="wasteBackgroundImage rounded-xl h-96 flex flex-1">

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
                            Waste Management and Consulting 
                        </p>
                        <p className="text-gray-500">
                        ElevateMinds has an overwhelming capacity to help implement legally compliant waste management 
                        strategies. ElevateMinds brings expertise to help clients address their needs.
                        </p>
                    </div>
                    <p className="text-xl font-bold text-gray-800" >
                    Specific services the Company provides with the utmost competence :
                    </p>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-4 items-center">
                            <CheckCircleIcon className="h-8 w-8 p-2 bg-red-600 rounded-full text-white" />
                            <p>
                            Climate Change mitigation/adaptation Research and Training
                            </p>

                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <CheckCircleIcon className="h-8 w-8 p-2 bg-red-600 rounded-full text-white" />
                            <p>
                            Strategic Communication for Environmental Planning and Assessment (SCEPA)
                            </p>

                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <CheckCircleIcon className="h-8 w-8 p-2 bg-red-600 rounded-full text-white" />
                            <p>
                            Corporate and Environmental sustainability training
                            </p>
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <CheckCircleIcon className="h-8 w-8 p-2 bg-red-600 rounded-full text-white" />
                            <p>
                            Occupational Health and Safety 
                            </p>
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <CheckCircleIcon className="h-8 w-8 p-2 bg-red-600 rounded-full text-white" />
                            <p>
                            GIS and mapping technologies, GIS data analysis, and Management 
                            </p>
                        </div>

                        <div className="flex flex-row gap-4 items-center">
                            <CheckCircleIcon className="h-8 w-8 p-2 bg-red-600 rounded-full text-white" />
                            <p>
                            Baseline Survey and Monitoring
                            </p>
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <CheckCircleIcon className="h-8 w-8 p-2 bg-red-600 rounded-full text-white" />
                            <p>
                            Green Economy-Life Cycle Assessments 
                            </p>
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <CheckCircleIcon className="h-8 w-8 p-2 bg-red-600 rounded-full text-white" />
                            <p>
                            Waste Management; Waste Reduction and Recycling Programs 
                            </p>
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <CheckCircleIcon className="h-8 w-8 p-2 bg-red-600 rounded-full text-white" />
                            <p>
                            Ecosystem management Plans for Natural resources management 
                            </p>
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
