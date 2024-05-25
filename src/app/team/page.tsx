import Layout from "@/components/Layout"
import Image from "next/image"
import AnimateImage from '../../../public/curve.png'
import LeftImage from '../../../public/aboutLeft.png'
import Form from "@/components/Form"
import NewsletterSubscriptionForm from "@/components/NewsLetter"

export default function page() {
  return (
    <Layout>
      <div className="flex flex-col gap-32">

        <div className="homeTopBackgroundImage  h-[86vh] flex items-center">
          <div className="flex flex-col gap-3 mx-auto items-center">
            <p className="text-4xl font-bold">Team</p>
            <div className="text-gray-950 gap-4 flex flex-row items-center">
              <p>Elevate Mind Advisors</p>
              <div className="skewed-line"></div>
              <p>Team</p>
            </div>
          </div>
        </div>

      

        <div className="flex items-center">
          <NewsletterSubscriptionForm/>
        </div>


      </div>
    </Layout>
  )
}
