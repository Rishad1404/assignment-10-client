/* eslint-disable react/no-unescaped-entities */
const HelpSection = () => {
    return (
        <section className="dark:bg-base-200 dark:text-gray-800 border my-10 mx-2 lg:mx-0">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                <p className="mt-4 mb-8 dark:text-gray-600"> Here are some FAQ questions and answers to help you knowing about us:</p>
                <div className="space-y-4">
                    <details className="w-full border-2 border-[#0097B2] rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What kind of paper craft projects can I find on your website?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Yes, we offer step-by-step tutorials and instructions for all of our paper craft projects. Each tutorial is accompanied by clear photos or videos to guide you through the process, making it easy for crafters of all skill levels to follow along. </p>
                    </details>
                    <details className="w-full border-2 border-[#0097B2] rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600"> Do you provide tutorials or instructions for your paper craft projects?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Luxury estates often boast a wide range of amenities, including but not limited to: infinity pools, private gyms, home theaters, wine cellars, smart home automation systems, expansive gardens or landscaping, guest houses, and premium security features. </p>
                    </details>
                    <details className="w-full border-2 border-[#0097B2] rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What types of glass art do you feature on your website?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Our website showcases various forms of glass art, including stained glass, fused glass, glass painting, and glass etching. Whether you're interested in creating decorative pieces for your home or unique gifts for loved ones, you'll find plenty of inspiration here. </p>
                    </details>
                    <details className="w-full border-2 border-[#0097B2] rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600"> Can I purchase supplies for my paper craft and glass art projects through your website?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Yes, we offer a selection of high-quality paper craft and glass art supplies for sale on our website. From specialty papers and tools to glass cutting equipment and paints, we have everything you need to bring your creative visions to life. </p>
                    </details>
                    <details className="w-full border-2 border-[#0097B2] rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600"> Do you accept submissions from other artists and crafters to feature on your website?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Yes, we welcome submissions from artists and crafters who would like to showcase their work on our website. Whether you're an established professional or an aspiring hobbyist, we'd love to feature your creations and share your talent with our community. </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default HelpSection;