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
                            <p>Environmental Management Services  </p>
                        </div>
                    </div>
                </div>

                <div className="md:flex block md:flex-row flex-col gap-8 md:px-20 px-8">
                    <div className="envBackgroundImage rounded-xl h-96 flex flex-1">

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
                            Environmental Management Services
                        </p>

                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-4 items-center">
                            <CheckCircleIcon className="h-8 w-8 p-2 bg-red-600 rounded-full text-white" />
                            <p>
                                Environmental Impact Assessment (EIA) and Audit (EA).
                            </p>

                        </div>
                        <p>
                            The company’s experts have extensive experience in strategic planning and long-term option appraisal for
                            both public and private sector clients. EIA is mandatory for all projects, e.g., industries, engineering
                            firms, flowers growing farms, telecommunication sector, gypsum mining projects, quarry projects, power,
                            Irrigation agriculture, roads, biodiversity conservation projects, wildlife Conservation, Mining, Oil and gas chemical Industries, petroleum outlets, housing projects, Water & sanitation projects, housing and construction, education projects, hydrocarbon handling
                            and storage, construction industries, pharmaceutical warehouses, manufacturing industries, hospitality, etc.
                        </p>
                        <div className="flex flex-row gap-4 items-center">
                            <CheckCircleIcon className="h-8 w-8 p-2 bg-red-600 rounded-full text-white" />
                            <p>
                                Strategic Communication for Environmental Planning and Assessment
                            </p>

                        </div>
                        <p>
                            Increased access to efficient environmental information allows for strategic and project-level
                            developmental planning. The environment is adequately scrutinized, and the environmental consequences
                            of development proposals are understood and adequately considered in the planning process. ElevateMinds
                            is ideally suited and experienced in providing consulting services for designing and implementing these IEM tools
                            with specific provisions of cost-benefit analysis (CBA) and environmental planning and policy development
                        </p>



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
