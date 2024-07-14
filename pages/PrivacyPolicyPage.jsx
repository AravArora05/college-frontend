import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicyPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow relative bg-lb p-5 mx-8 text-center">
                <h1 className="text-3xl text-db font-extrabold mb-5">[Company Name] Privacy Policy</h1>

                <section className="max-w-6xl text-db mx-auto border-2 border-black text-left p-5 mb-5 pt-3">
                    <h2 className="font-bold text-xl mb-2">1. Introduction</h2>
                    <p className="text-md">[Your Company Name] ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [Your Website URL], including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>
                </section>

                <section className="max-w-6xl text-db mx-auto border-2 border-black text-left p-5 mb-5 pt-3">
                    <h2 className="text-db font-bold text-xl mb-2">2. Information we Collect</h2>
                    <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>

                    <h3 className="font-bold mt-4">Personal Data</h3>
                    <p>Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.</p>

                    <h3 className="font-bold mt-4">Derivative Data</h3>
                    <p>Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</p>

                    <h3 className="font-bold mt-4">Financial Data</h3>
                    <p>Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site.</p>

                    <h3 className="font-bold mt-4">Mobile Device Data</h3>
                    <p>Device information, such as your mobile device ID, model, and manufacturer, and information about the location of your device, if you access the Site from a mobile device.</p>
                </section>

                <section className="max-w-6xl text-db mx-auto border-2 border-black text-left p-5 mb-5 pt-3">
                    <h2 className="text-db font-bold text-xl mb-2">3. Use of Your Information</h2>
                    <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>

                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li>Create and manage your account.</li>
                        <li>Process your transactions.</li>
                        <li>Email you regarding your account or order.</li>
                        <li>Deliver targeted advertising, newsletters, and other information regarding promotions and the Site to you.</li>
                        <li>Improve our website and product offerings.</li>
                        <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                        <li>Perform other business activities as needed.</li>
                    </ul>
                </section>

                <section className="max-w-6xl text-db mx-auto border-2 border-black text-left p-5 mb-5 pt-3">
                    <h2 className="font-bold text-xl mb-2">4. Disclosure of Your Information</h2>
                    <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>

                    <h3 className="font-bold mt-4">By Law or to Protect Rights</h3>
                    <p>If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</p>

                    <h3 className="font-bold mt-4">Business Transfers</h3>
                    <p>We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</p>

                    <h3 className="font-bold mt-4">Third-Party Service Providers</h3>
                    <p>We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</p>
                </section>

                <section className="max-w-6xl text-db mx-auto border-2 border-black text-left p-5 mb-5 pt-3">
                    <h2 className="font-bold text-xl mb-2">5. Security of Your Information</h2>
                    <p className="text-md">We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
                </section>

                <section className="max-w-6xl text-db mx-auto border-2 border-black text-left p-5 mb-5 pt-3">
                    <h2 className="font-bold text-xl mb-2">6. Policy for Children</h2>
                    <p className="text-db">We do not knowingly solicit information from or market to children under the age of 13. If we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible.</p>
                </section>

                <section className="max-w-6xl text-db mx-auto border-2 border-black text-left p-5 mb-5 pt-3">
                    <h2 className="font-bold text-xl mb-2">7. Changes to this Privacy Policy</h2>
                    <p className="text-db">We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by updating the "Effective Date" of this Privacy Policy. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting the information we collect.</p>
                </section>

                <section className="max-w-6xl text-db mx-auto border-2 border-black text-left p-5 mb-5 pt-3">
                    <h2 className="font-bold text-xl mb-2">8. Contact Us</h2>
                    <p className="text-db mb-6">If you have questions or comments about this Privacy Policy, please contact us at:</p>
                    <p>[Your Company Name]<br/>
                        [Your Company Address]<br/>
                        [Your Company Email Address]<br/>
                        [Your Company Phone Number]<br/>
                    </p>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default PrivacyPolicyPage;
