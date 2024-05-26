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
              <p>Capacity Building in Renewable Energy</p>
            </div>
          </div>
        </div>

        <div className="md:flex block md:flex-row flex-col gap-8 md:px-20 px-8">
          <div className="capacityBackgroundImage rounded-xl h-96 flex flex-1">
            
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
            <p className="font-bold text-gray-800 text-3xl">We offer energy management training </p>
            <p className="text-gray-500">
            ElevateMinds offers energy management training to equip energy professionals with holistic energy management
             skills relevant to the market and create awareness of energy management amongst the public. ElevateMinds’ 
             training programs endeavor to offer value addition for participants through capacity building on energy 
             efficiency. ElevateMinds training programs are facilitated by a qualified team of energy experts, both 
             local and global. From experience conducting energy audits and projects in the region, ElevateMinds has 
             identified key areas that require technical upskilling to enable efficiency strategies and skilled 
             energy-focused competencies within organizations. The renewable energy training programs are standard 
             international and tailor-made on-site programs to suit clients’ needs. Training programs are also 
             customized per industry sector, allowing for a focus on the unique energy training needs across 
             different industry sectors.
             ElevateMinds ensures training programs are current and include emerging global trends in the energy industry.
            </p>
          </div>
          <p className="text-xl font-bold text-gray-800" >Area of focus</p>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-4 items-center">
              <CheckCircleIcon className="h-8 w-8 p-2 bg-red-600 rounded-full text-white"/>
              <p>Solar Pv</p>

            </div>
            <div className="flex flex-row gap-4 items-center">
              <CheckCircleIcon className="h-8 w-8 p-2 bg-red-600 rounded-full text-white"/>
              <p>Solar Water Pumping</p>

            </div>
            <div className="flex flex-row gap-4 items-center">
              <CheckCircleIcon className="h-8 w-8 p-2 bg-red-600 rounded-full text-white"/>
              <p>Biogas Solution</p>

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
