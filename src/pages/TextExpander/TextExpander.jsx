import { Helmet } from "react-helmet-async"
import ExpandableText from "./Partials/ExpandableText"

const TextExpander = () => {
  return (
    <>
        <Helmet>
            <title>Text Expander</title>
        </Helmet>

        <div className="inner-h-full flex items-center justify-center gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="col-span-1 shadow-lg max-w-md border rounded-md duration-300 hover:shadow-sm p-10 mx-auto">
                    <h3 className="text-cyan-600 font-medium mb-3">Text Collapsed to default minimum word (10)</h3>
                    <ExpandableText collapsedButtonColor="rgb(8 145 178)">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                    </ExpandableText>
                </div>
                <div className="col-span-1 shadow-lg max-w-md border rounded-md duration-300 hover:shadow-sm p-10 mx-auto">
                    <h3 className="text-indigo-600 font-medium mb-3">Text Collapsed to minimum 20 word</h3>
                    <ExpandableText minWord={20} >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                    </ExpandableText>
                </div>
                <div className="col-span-1 shadow-lg max-w-md border rounded-md duration-300 hover:shadow-sm p-10 mx-auto">
                    <h3 className="text-green-500 font-medium mb-3">Text is primarily expanded and will collapse to default minimum word</h3>
                    <ExpandableText
                        expanded={true}
                        collapsedButtonColor={"rgb(34 197 94)"}
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                    </ExpandableText>
                </div>
                <div className="col-span-1 shadow-lg max-w-md border rounded-md duration-300 hover:shadow-sm p-10 mx-auto">
                    <h3 className="text-red-600 font-medium mb-3">Text is primarily expanded and will hide collapse button</h3>
                    <ExpandableText
                        expanded={true}
                        hideCollapse={true}
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                    </ExpandableText>
                </div>

                <div className="col-span-1 shadow-lg max-w-md border rounded-md duration-300 hover:shadow-sm p-10 mx-auto">
                    <h3 className="text-amber-500 font-medium mb-3">Text primarily Collapsed and will hide collapse button on expand</h3>
                    <ExpandableText collapsedButtonColor="rgb(245 158 11)" hideCollapse={true} >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                    </ExpandableText>
                </div>

                <div className="col-span-1 shadow-lg shadow-violet-300 max-w-md border border-violet-400 rounded-md duration-300 hover:shadow-sm p-10 mx-auto bg-gradient-to-r from-violet-400 to-fuchsia-400">
                    <h3 className="text-[#edff23]  font-medium mb-3">Text primarily Collapsed with custom colours</h3>
                    <ExpandableText className="your-class" textColor="#fff" collapsedButtonColor="#edff23" expandedButtonColor="#be0ac6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                    </ExpandableText>
                </div>
            </div>
        </div>
    </>
  )
}

export default TextExpander