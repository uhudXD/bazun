
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
    {
        question: "Di mana lokasi Bazun Service?",
        answer:
            "Bazun Service berlokasi di Jl. Telaga Asih, RT.06/RW.02, Telaga Asih, Kecamatan Cikarang Barat, Kabupaten Bekasi, Jawa Barat 17841. Lokasi ini melayani pelanggan dari Cikarang Barat, Cibitung, dan area sekitarnya.",
    },
    {
        question: "Apakah Bazun Service melayani service HP di Cibitung?",
        answer:
            "Ya. Bazun Service melayani pelanggan yang membutuhkan service HP di Cibitung dan sekitarnya. Layanan meliputi penggantian LCD, baterai, konektor charger, perbaikan komponen mesin, serta penanganan masalah software HP.",
    },
    {
        question: "Kerusakan HP apa saja yang bisa diperbaiki?",
        answer:
            "Bazun Service menangani berbagai kebutuhan perbaikan HP, seperti layar pecah atau bermasalah, baterai yang perlu diganti, HP tidak bisa mengisi daya, dan gangguan pada komponen maupun software. Jenis perbaikan ditentukan berdasarkan kondisi perangkat setelah diperiksa.",
    },
    {
        question: "Berapa biaya service HP di Bazun Service?",
        answer:
            "Biaya jasa pemasangan komponen mulai dari Rp50.000. Total biaya bergantung pada jenis kerusakan, komponen yang dibutuhkan, dan tingkat kesulitan pengerjaan. Hubungi Bazun Service untuk mendiskusikan keluhan perangkat dan mendapatkan informasi estimasi biaya.",
    },
    {
        question: "Apakah bisa membawa sparepart sendiri untuk dipasang?",
        answer:
            "Bisa. Pelanggan dapat membawa sparepart sendiri untuk ditanyakan pemasangannya di Bazun Service. Sebaiknya hubungi kami terlebih dahulu untuk memastikan jenis komponen dan kemungkinan pengerjaannya sesuai dengan perangkat.",
    },
    {
        question: "Apakah Bazun Service menerima service laptop dan komputer?",
        answer:
            "Ya. Bazun Service melayani pelanggan di Cibitung dan Cikarang Barat untuk service laptop dan komputer. Penanganan mencakup pemeriksaan perangkat, perbaikan hardware, masalah software, upgrade komponen, dan instalasi ulang sistem operasi sesuai kebutuhan.",
    },
    {
        question: "Berapa lama proses perbaikan HP, laptop, atau komputer?",
        answer:
            "Waktu pengerjaan bergantung pada jenis kerusakan, tingkat kesulitan, dan ketersediaan komponen yang diperlukan. Setelah perangkat diperiksa, hubungi Bazun Service untuk mendapatkan perkiraan waktu pengerjaan yang lebih sesuai dengan kondisi perangkat.",
    },
    {
        question: "Kapan jam operasional Bazun Service?",
        answer:
            "Bazun Service buka setiap hari, Senin sampai Minggu, pukul 09.00–22.00 WIB. Untuk menanyakan layanan atau mendiskusikan kerusakan perangkat sebelum datang, pelanggan dapat menghubungi kami melalui WhatsApp.",
    },
]

export function FAQSection() {
    return (
        <section id="faq" className="w-full py-16 sm:py-20 lg:py-28">
            <div className="container mx-auto max-w-4xl px-5 sm:px-6">
                <div className="mb-10 text-center sm:mb-14">
                    <p className="mb-3 text-sm font-medium text-muted-foreground">
                        PERTANYAAN UMUM
                    </p>

                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        Ada yang ingin Anda ketahui?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                        Temukan informasi seputar layanan service HP, laptop,
                        dan komputer di Bazun Service, termasuk lokasi,
                        biaya, dan proses perbaikan.
                    </p>
                </div>

                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                >
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                        >
                            <AccordionTrigger className="text-left text-base font-medium sm:text-lg">
                                {faq.question}
                            </AccordionTrigger>

                            <AccordionContent className="text-sm leading-7 text-muted-foreground sm:text-base">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <div className="mt-10 text-center">
                    <p className="text-sm text-muted-foreground">
                        Belum menemukan jawaban yang Anda cari?
                    </p>

                    <a
                        href="https://wa.me/6281382000575"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex text-sm font-medium underline underline-offset-4"
                    >
                        Hubungi Bazun Service melalui WhatsApp
                    </a>
                </div>
            </div>
        </section>
    )
}
