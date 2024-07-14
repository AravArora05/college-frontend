import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfServicePage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow relative bg-lb p-5 mx-8 text-center">
                <h1 className="text-3xl text-db font-extrabold mb-5">[Company Name] Terms of Service</h1>

                <section className="max-w-6xl text-db mx-auto border-2 border-black text-left p-5 mb-5 pt-3">
                    <h2 className="font-bold text-xl mb-2">1. Acceptance of Terms</h2>
                    <p className="text-md">By accessing and using [Your Website URL] (the "Site"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
                </section>

                <section className="max-w-6xl text-db mx-auto border-2 border-black text-left p-5 mb-5 pt-3">
                    <h2 className="text-db font-bold text-xl mb-2">2. Description of Service</h2>
                    <p>[Your Company Name] provides users with access to [brief description of your service]. You are responsible for obtaining access to the Site, and that access may involve third-party fees (such as Internet service provider or airtime charges). You are responsible for those fees. In addition, you must provide and are responsible for all equipment necessary to access the Site.</p>
                </section>

                <section className="max-w-6xl text-db mx-auto border-2 border-black text-left p-5 mb-5 pt-3">
                    <h2 className="text-db font-bold text-xl mb-2">3. User Conduct</h2>
                    <p>You agree to use the Site only for lawful purposes. You agree not to take any action that might compromise the security of the Site, render the Site inaccessible to others or otherwise cause damage to the Site or the Content. You agree not to add to, subtract from, or otherwise modify the Content, or to attempt to access any Content that is not intended for you.</p>
                </section>

                <section className="max-w-6xl text-db mx-auto border-2 border-black text-left p-5 mb-5 pt-3">
                    <h2 className="font-bold text-xl mb-2">4. Intellectual Property Rights</h2>
                    <p>The Content, organization, graphics, design, compilation, magnetic translation, digital conversion and other matters related to the Site are protected under applicable copyrights, trademarks and other proprietary rights. The copying, redistribution, use or publication by you of any such matters or any part of the Site is strictly prohibited.</p>
                </section>

                <section className="max-w-6xl text-db mx-auto border-2 border-black text-left p-5 mb-5 pt-3">
                    <h2 className="font-bold text-xl mb-2">5. Disclaimer of Warranties</h2>
                    <p className="text-md">The Site is provided on an 'AS IS' and 'AS AVAILABLE' basis. [Your Company Name] expressly disclaims all warranties of any kind, whether express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose and non-infringement.</p>
                </section>

                <section className="max-w-6xl text-db mx-auto border-2 border-black text-left p-5 mb-5 pt-3">
                    <h2 className="font-bold text-xl mb-2">6. Limitation of Liability</h2>
                    <p className="text-db">[Your Company Name] shall not be liable for any damages whatsoever, and in particular [Your Company Name] shall not be liable for any special, indirect, consequential, or incidental damages, or damages for lost profits, loss of revenue, or loss of use, arising out of or related to this website or the information contained in it, whether such damages arise in contract, negligence, tort, under statute, in equity, at law, or otherwise.</p>
                </section>

                <section className="max-w-6xl text-db mx-auto border-2 border-black text-left p-5 mb-5 pt-3">
                    <h2 className="font-bold text-xl mb-2">7. Indemnification</h2>
                    <p className="text-db">You agree to indemnify and hold [Your Company Name], its subsidiaries, affiliates, officers, agents, and other partners and employees, harmless from any loss, liability, claim, or demand, including reasonable attorney's fees, made by any third party due to or arising out of your use of the Site in violation of this Agreement and/or arising from a breach of this Agreement.</p>
                </section>

                <section className="max-w-6xl text-db mx-auto border-2 border-black text-left p-5 mb-5 pt-3">
                    <h2 className="font-bold text-xl mb-2">8. Modifications to Terms</h2>
                    <p className="text-db">[Your Company Name] reserves the right, at its sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
                </section>

                <section className="max-w-6xl text-db mx-auto border-2 border-black text-left p-5 mb-5 pt-3">
                    <h2 className="font-bold text-xl mb-2">9. Contact Information</h2>
                    <p className="text-db mb-6">If you have any questions about these Terms, please contact us at:</p>
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

export default TermsOfServicePage;