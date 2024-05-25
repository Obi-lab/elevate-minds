import Layout from "@/components/Layout"
import Image from "next/image"
import AnimateImage from '../../../public/curve.png'
import LeftImage from '../../../public/aboutLeft.png'
import Form from "@/components/Form"
import NewsletterSubscriptionForm from "@/components/NewsLetter"
import { MapIcon } from "@heroicons/react/16/solid"
import { MapPinIcon } from "@heroicons/react/24/outline"

export default function page() {
  return (
    <Layout>
      <div className="flex flex-col gap-32">

        <div className="homeTopBackgroundImage  h-[86vh] flex items-center">
          <div className="flex flex-col gap-3 mx-auto items-center">
            <p className="text-4xl font-bold">CONTACT</p>
            <div className="text-gray-950 gap-4 flex flex-row items-center">
              <p>Elevate Mind Advisors</p>
              <div className="skewed-line"></div>
              <p>Contact</p>
            </div>
          </div>
        </div>

        <div className="px-20 flex flex-row ">
          <div className="flex flex-col gap-10 flex-1">
            <p className="text-red-600 py-4">Contact Us</p>
            <p className="text-gray-800 text-3xl font-extrabold">Get In Touch</p>
            <div className="flex flex-row gap-8">
              <div className="bg-white shadow-md p-6">
                <MapPinIcon className="h-8 w-8  text-red-600" />
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold">Visit Us:</p>
                <p>Nairobi , Vision Plaza , Mombasa Road.</p>
              </div>
            </div>
            <div className="flex flex-row gap-8">
              <div className="bg-white shadow-md p-6">
                <MapPinIcon className="h-8 w-8  text-red-600" />
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold">Mail Us:</p>
                <p>example@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-row gap-8">
              <div className="bg-white shadow-md p-6">
                <MapPinIcon className="h-8 w-8  text-red-600" />
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold">Call Us:</p>
                <p>(+254)712856550.</p>
              </div>
            </div>

          </div>
          <div className="flex flex-1">
            <Form />
          </div>
        </div>

        <div className="flex items-center">
          <NewsletterSubscriptionForm />
        </div>


      </div>
    </Layout>
  )
}
