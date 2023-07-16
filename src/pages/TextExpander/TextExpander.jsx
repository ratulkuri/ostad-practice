import { Helmet } from "react-helmet-async"
import ExpandableText from "./Partials/ExpandableText"

const TextExpander = () => {
  return (
    <>
        <Helmet>
            <title>Text Expander</title>
        </Helmet>

        <div className="inner-h-full flex flex-col items-center justify-center gap-8">
            <div className="shadow-lg max-w-md border rounded-md duration-300 hover:shadow-sm p-10">
                <h3 className="font-medium mb-3">Text Collapsed to default minimum word (10)</h3>
                <ExpandableText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s
                </ExpandableText>
            </div>
            <div className="shadow-lg max-w-md border rounded-md duration-300 hover:shadow-sm p-10">
                <h3 className="font-medium mb-3">Text Collapsed to default 20 word</h3>
                <ExpandableText minWord={20} >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s
                </ExpandableText>
            </div>
            <div className="shadow-lg max-w-md border rounded-md duration-300 hover:shadow-sm p-10">
                <h3 className="font-medium mb-3">Text is primarily expanded and will collapse to default minimum word</h3>
                <ExpandableText
                    expanded={true}
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s
                </ExpandableText>
            </div>
        </div>
    </>
  )
}

export default TextExpander