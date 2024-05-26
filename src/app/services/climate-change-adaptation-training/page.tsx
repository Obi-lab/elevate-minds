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
                            <p>Climate Change mitigation/adaptation Research Training</p>
                        </div>
                    </div>
                </div>

                <div className="md:flex block md:flex-row flex-col gap-8 md:px-20 px-8">
                    <div className="climateBackgroundImage rounded-xl h-96 flex flex-1">

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
                            We provide Climate Change mitigation/adaptation Research and Training
                        </p>
                        <p className="text-gray-500">
                            At ElevateMinds, we take a comprehensive approach to climate change research and consultancy. We understand
                            that climate change is causing unpredictable shifts in ecosystems and economic, social, and
                            natural systems. That's why we believe that an effective GHG-reducing energy strategy is
                            critical for companies working to mitigate climate change. Our role is to help companies address
                            the different aspects of climate change in an integrated way while advancing climate solutions for their
                            stakeholders. Our climate change expertise spans all industries, from consumer products to clean technology. On adaptation, we conduct Disaster risk reduction plans and vulnerability assessments. We believe in the power of diverse ideas and strive to articulate evidence-based policy and technology issues related to climate change, human and ecosystem well-being, and Climate proofing of plans and
                            strategies for private and public sector organizations, including businesses, governments, and civil society.
                        </p>
                    </div>
                    <p className="text-xl font-bold text-gray-800" >Other capabilities focus on fostering climate-friendly business and technology solutions through:</p>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-4 items-center">
                            <CheckCircleIcon className="h-8 w-8 p-2 bg-red-600 rounded-full text-white" />
                            <p>
                                Support the integration of climate change adaptation strategies into all levels of development policies and planning.
                            </p>

                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <CheckCircleIcon className="h-8 w-8 p-2 bg-red-600 rounded-full text-white" />
                            <p>Facilitate the development and use of smart tools and policies for climate change adaptation in various sectors</p>

                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <CheckCircleIcon className="h-8 w-8 p-2 bg-red-600 rounded-full text-white" />
                            <p>
                            Promote biodiversity, biosecurity, and environmental sustainability to enhance food security 
                            </p>
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <CheckCircleIcon className="h-8 w-8 p-2 bg-red-600 rounded-full text-white" />
                            <p>
                            Carbon project planning and feasibility assessment
                            </p>
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <CheckCircleIcon className="h-8 w-8 p-2 bg-red-600 rounded-full text-white" />
                            <p>
                            Baseline identification and baseline emission calculation
                            </p>
                        </div>

                        <div className="flex flex-row gap-4 items-center">
                            <CheckCircleIcon className="h-8 w-8 p-2 bg-red-600 rounded-full text-white" />
                            <p>
                            Monitor plan development and monitor report preparation
                            </p>
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <CheckCircleIcon className="h-8 w-8 p-2 bg-red-600 rounded-full text-white" />
                            <p>
                            Emission trading support (e.g., LoA application under CDM, KYC)
                            </p>
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <CheckCircleIcon className="h-8 w-8 p-2 bg-red-600 rounded-full text-white" />
                            <p>
                            Project sourcing (e.g., auction/bidding support and technical/carbon due diligence)
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
