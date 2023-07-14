import Accordion from "../components/Accordion"
import faqs from "../data/faqs.js"


const AccordionPractice = () => {

  return (
    <>
      <div className="conainer max-w-7xl mx-auto">
        <div className="pb-1">
          <h2 className="text-2xl font-bold mb-4">Collapsible <span className="text-lg font-medium text-gray-400">( Can open all elements individualy )</span></h2>
          <Accordion data={faqs} collapsible={true} />
        </div>

        <hr className="relative block my-10" />

        <div className="">
          <h2 className="text-2xl font-bold mb-4">Accordion <span className="text-lg font-medium text-gray-400">( Can open one element at a time )</span></h2>
          <Accordion className="purple-accordion" data={faqs} />
        </div>
      </div>
    </>
  )
}

export default AccordionPractice