/* eslint-disable react/no-unescaped-entities */
const HelpSection = () => {
    return (
        <section className="dark:bg-base-200 dark:text-gray-800 border my-10 mx-2 lg:mx-0">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                <p className="mt-4 mb-8 dark:text-gray-600"> Here are some FAQ questions and answers to help you knowing about us:</p>
                <div className="space-y-4">
                    <details className="w-full border-2 border-[#0097B2] rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What defines a luxury estate?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Luxury estates are characterized by their exceptional quality, exquisite design, prime locations, and extensive amenities. These properties often feature high-end finishes, advanced technology integration, and expansive grounds or breathtaking views. </p>
                    </details>
                    <details className="w-full border-2 border-[#0097B2] rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600"> What amenities can I expect in a luxury estate?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Luxury estates often boast a wide range of amenities, including but not limited to: infinity pools, private gyms, home theaters, wine cellars, smart home automation systems, expansive gardens or landscaping, guest houses, and premium security features. </p>
                    </details>
                    <details className="w-full border-2 border-[#0097B2] rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600"> How do I know if a luxury estate is worth the investment?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Investing in a luxury estate involves careful consideration of factors such as location, market trends, property features, and potential for appreciation. Working with experienced real estate professionals who specialize in luxury properties can help you make informed decisions and assess the value of your investment. </p>
                    </details>
                    <details className="w-full border-2 border-[#0097B2] rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600"> Are luxury estates only available in specific locations?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">While luxury estates are often associated with exclusive neighborhoods in major cities or resort destinations, they can be found in a variety of locations worldwide. Whether it is a beachfront villa, a countryside estate, or a penthouse in the heart of a bustling metropolis, there are luxury properties to suit diverse preferences and lifestyles. </p>
                    </details>
                    <details className="w-full border-2 border-[#0097B2] rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600"> What sets your luxury real estate agency apart from others?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Our luxury real estate agency prides itself on unparalleled expertise, personalized service, and a commitment to excellence. With a deep understanding of the luxury market and access to exclusive listings, we strive to exceed our client's expectations and deliver exceptional results tailored to their unique needs and desires. </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default HelpSection;