const langData = {
    en: {
        logo: "NeuroAssessKids",
        home: "Home",
        info: "Information",
        guidance: "Guidance",
        "home-btn": "Home",
        title: "NeuroAssessKids",
        "assessment-scale": "Assessment Scale",
        "question-total": "1 of 20 Questions",
        "question-text": "1. Does not pay attention to details or make careless mistakes with, (example: homework)",
        "back-btn": "Back",
        "next-btn": "Next",
        "results-title": "Results!",
        "adhd-result": "ADHD:",
        "asd-result": "ASD:",
        "tryAgain-btn": "Try Again",
        "location-btn": "Specialist",
        "home-content-title": "Assist Children with Neurodevelopmental Disorders",
        "home-content-text": "We're here to accompany you every step of the way, ensuring that every child has equal opportunities and options",
        "start-btn": "Start Quiz"
    },
    ms: {
        logo: "NeuroAssessKids",
        home: "Utama",
        info: "Maklumat",
        guidance: "Panduan",
        "home-btn": "Utama",
        title: "NeuroAssessKids",
        "home-content-title": "Membantu Kanak-kanak dengan Gangguan Perkembangan Neuro",
        "home-content-text": "Kami di sini untuk menemani anda setiap langkah perjalanan, memastikan setiap kanak-kanak mempunyai peluang dan pilihan yang sama",
        "assessment-scale": "Skala Penilaian",
        "question-total": "1 dari 20 Soalan",
        "question-text": "1. Tidak memberi perhatian kepada butiran atau membuat kesilapan cuai dengan, (contohnya: kerja rumah)",
        "back-btn": "Kembali",
        "next-btn": "Seterusnya",
        "results-title": "Keputusan!",
        "adhd-result": "ADHD:",
        "asd-result": "ASD:",
        "tryAgain-btn": "Cuba Lagi",
        "location-btn": "Pakar",
        "home-content-title": "Membantu Kanak-kanak dengan Gangguan Perkembangan Neuro",
        "home-content-text": "Kami di sini untuk menemani anda setiap langkah perjalanan, memastikan setiap kanak-kanak mempunyai peluang dan pilihan yang sama",
        "start-btn": "Mula Kuiz"
    }
};

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (langData[lang] && langData[lang][key]) {
            el.textContent = langData[lang][key];
        }
    });
    localStorage.setItem('selectedLanguage', lang);
}

document.addEventListener('DOMContentLoaded', function() {
    const initialLang = localStorage.getItem('selectedLanguage') || 'en';
    document.getElementById('language-select').value = initialLang;
    changeLanguage(initialLang);
});

// Event listener for language select
document.getElementById('language-select').addEventListener('change', function() {
    changeLanguage(this.value);
});

// Initialize the language based on the default value in the select box
document.addEventListener('DOMContentLoaded', function() {
    const initialLang = document.getElementById('language-select').value;
    changeLanguage(initialLang);
});

const languageSelect = document.getElementById('language-select');

languageSelect.addEventListener('change', () => {
    const selectedLanguage = languageSelect.value;
    loadLanguage(selectedLanguage);
});

const translations = {
    en: {
        startBtn: 'Start',
        exitBtn: 'Exit',
        continueBtn: 'Continue',
        backBtn: 'Back',
        nextBtn: 'Next',
        tryAgainBtn: 'Try Again',
        questions: [
            {
                numb: 1,
                question: "Does not pay attention to details or make careless mistakes with, (example: homework)",
                category: "ADHD",
                options: [ "a. Never", "b. Occasionally", "c. Often", "d. Very often", ],
            },
            {
                numb: 2,
                question: "Has difficulty keeping attention to what needs to be done",
                category: "ADHD",
                options: [ "a. Never", "b. Occasionally", "c. Often", "d. Very often", ],
            },
            {
                numb: 3,
                question: "Does not seem to listen when spoken to directly",
                category: "ADHD",
                options: [ "a. Never", "b. Occasionally", "c. Often", "d. Very often", ],
            },
            {
                numb: 4,
                question: "Does not follow through when given directions and fails to finish activities(not due to refusal or failure to understand)",
                category: "ADHD",
                options: [ "a. Never", "b. Occasionally", "c. Often", "d. Very often", ],
            },
            {
                numb: 5,
                question: "Has difficulty organizing tasks and activities",
                category: "ADHD",
                options: [ "a. Never", "b. Occasionally", "c. Often", "d. Very often", ],
            },
            {
                numb: 6,
                question: "If you point at something across the room, does your child look at it? (FOR EXAMPLE, if you point at a toy or an animal, does your child look at the toy or animal?)",
                category: "ASD",
                options: ["a. Yes", "b. No",],
            },
            {
                numb: 7,
                question: "Have you ever wondered if your child might be deaf?",
                category: "ASD",
                options: ["a. Yes", "b. No",],
            },
            {
                numb: 8,
                question: "Is your child interested in other children? (FOR EXAMPLE, does your child watch other children, smile at them, or go to them?)",
                category: "ASD",
                options: ["a. Yes", "b. No",],
            },
            {
                numb: 9,
                question: "Does your child get upset by everyday noises? (FOR EXAMPLE, does your child scream or cry to noise such as a vacuum cleaner or loud music?)",
                category: "ASD",
                options: ["a. Yes", "b. No",],
            },
            {
                numb: 10,
                question: "If you turn your head to look at something, does your child look around to see what you are looking at?",
                category: "ASD",
                options: ["a. Yes", "b. No",],
            },
            {
                numb: 11,
                question: "Leaves seat when remaining seated is expected",
                category: "ADHD",
                options: [ "a. Never", "b. Occasionally", "c. Often", "d. Very often", ],
            },
            {
                numb: 12,
                question: "Runs about or climbs too much when remaining seated is expected",
                category: "ADHD",
                options: [ "a. Never", "b. Occasionally", "c. Often", "d. Very often", ],
            },
            {
                numb: 13,
                question: "Has difficulty playing or beginning quiet play activities",
                category: "ADHD",
                options: [ "a. Never", "b. Occasionally", "c. Often", "d. Very often", ],
            },
            {
                numb: 14,
                question: "Talks too much",
                category: "ADHD",
                options: [ "a. Never", "b. Occasionally", "c. Often", "d. Very often", ],
            },
            {
                numb: 15,
                question: "Blurts out answers before questions have been completed",
                category: "ADHD",
                options: [ "a. Never", "b. Occasionally", "c. Often", "d. Very often", ],
            },
            {
                numb: 16,
                question: "Does your child respond when you call his or her name? (FOR EXAMPLE, does he or she look up, talk or babble, or stop what he or she is doing when you call his or her name?)",
                category: "ASD",
                options: ["a. Yes", "b. No",],
            },
            {
                numb: 17,
                question: "Does your child like movement activities? (FOR EXAMPLE, being swung or bounced on your knee)",
                category: "ASD",
                options: ["a. Yes", "b. No",],
            },
            {
                numb: 18,
                question: "Does your child point with one finger to show you something interesting? (FOR EXAMPLE, pointing to an airplane in the sky or a big truck in the road)",
                category: "ASD",
                options: ["a. Yes", "b. No",],
            },
            {
                numb: 19,
                question: "If something new happens, does your child look at your face to see how you feel about it? (FOR EXAMPLE, if he or she sees a new toy, will he or she look at your face?)",
                category: "ASD",
                options: ["a. Yes", "b. No",],
            },
            {
                numb: 20,
                question: "Does your child try to copy what you do? (FOR EXAMPLE, wave bye-bye, clap, or make a funny noise when you do)",
                category: "ASD",
                options: ["a. Yes", "b. No",],
            },
            {
                numb: 21,
                question: "Is afraid to try new things for fear of making mistakes",
                category: "ADHD",
                options: [ "a. Never", "b. Occasionally", "c. Often", "d. Very often", ],
            },
            {
                numb: 22,
                question: "Is self-conscious or easily embarrassed",
                category: "ADHD",
                options: [ "a. Never", "b. Occasionally", "c. Often", "d. Very often", ],
            },
            {
                numb: 23,
                question: "Is touchy or easily annoyed by others",
                category: "ADHD",
                options: [ "a. Never", "b. Occasionally", "c. Often", "d. Very often", ],
            },
            {
                numb: 24,
                question: "Avoids, dislikes, or does not want to start tasks that require ongoing mental effort",
                category: "ADHD",
                options: [ "a. Never", "b. Occasionally", "c. Often", "d. Very often", ],
            },
            {
                numb: 25,
                question: "Is fearful, anxious, or worried",
                category: "ADHD",
                options: [ "a. Never", "b. Occasionally", "c. Often", "d. Very often", ],
            },
        ]
    },
    ms: {
        startBtn: 'Mula',
        exitBtn: 'Keluar',
        continueBtn: 'Teruskan',
        backBtn: 'Kembali',
        nextBtn: 'Seterusnya',
        tryAgainBtn: 'Cuba Lagi',
        questions: [
            { numb: 1, question: "Tidak memberi perhatian kepada perincian atau membuat kesilapan yang tidak kemas dengan, (contohnya: kerja rumah)", 
                category: "ADHD", options: ["Tidak pernah", "Kadang-kadang", "Selalu", "Sering"] },
            { numb: 2, question: "Sukar mengekalkan perhatian pada apa yang perlu dilakukan", 
                category: "ADHD", options: ["Tidak pernah", "Kadang-kadang", "Selalu", "Sering"] },
            { numb: 3, question: "Tidak kelihatan mendengar apabila bercakap secara langsung", 
                category: "ADHD", options: ["Tidak pernah", "Kadang-kadang", "Selalu", "Sering"] },
            { numb: 4, question: "Tidak mengikuti arahan apabila diberikan dan gagal menyelesaikan aktiviti (bukan disebabkan oleh penolakan atau kegagalan untuk memahami)", 
                category: "ADHD", options: ["Tidak pernah", "Kadang-kadang", "Selalu", "Sering"] },
            { numb: 5, question: "Sukar mengatur tugas dan aktiviti", 
                category: "ADHD", options: ["Tidak pernah", "Kadang-kadang", "Selalu", "Sering"] },
            { numb: 6, question: "Jika anda menunjuk ke sesuatu di seberang bilik, adakah anak anda melihatnya? (contoh, jika anda menunjuk kepada mainan atau haiwan, adakah anak anda melihat mainan atau haiwan itu?)", 
                category: "ASD", options: ["Ya", "Tidak"] },
            { numb: 7, question: "Pernahkah anda terfikir jika anak anda mungkin pekak?", 
                category: "ASD", options: ["Ya", "Tidak"] },
            { numb: 8, question: "Adakah anak anda berminat dengan kanak-kanak lain? (contoh, adakah anak anda melihat kanak-kanak lain, senyum kepada mereka, atau pergi kepada mereka?)", 
                category: "ASD", options: ["Ya", "Tidak"] },
            { numb: 9, question: "Adakah anak anda marah dengan bunyi harian? (contoh, adakah anak anda menjerit atau menangis kepada bunyi seperti pembersih vakum atau muzik kuat?)", 
                category: "ASD", options: ["Ya", "Tidak"] },
            { numb: 10, question: "Jika anda memusingkan kepala untuk melihat sesuatu, adakah anak anda melihat sekeliling untuk melihat apa yang anda sedang lihat?", 
                category: "ASD", options: ["Ya", "Tidak"] },
            { numb: 11, question: "Bangun dari tempat duduk apabila sepatutnya duduk", 
                category: "ADHD", options: ["Tidak pernah", "Kadang-kadang", "Selalu", "Sering"] },
            { numb: 12, question: "Terlalu banyak berlari atau memanjat apabila sepatutnya duduk", 
                category: "ADHD", options: ["Tidak pernah", "Kadang-kadang", "Selalu", "Sering"] },
            { numb: 13, question: "Sukar bermain atau memulakan aktiviti permainan dengan tenang", 
                category: "ADHD", options: ["Tidak pernah", "Kadang-kadang", "Selalu", "Sering"] },
            { numb: 14, question: "Bercakap terlalu banyak", 
                category: "ADHD", options: ["Tidak pernah", "Kadang-kadang", "Selalu", "Sering"] },
            { numb: 15, question: "Menjawab sebelum soalan selesai ditanya", 
                category: "ADHD", options: ["Tidak pernah", "Kadang-kadang", "Selalu", "Sering"] },
            { numb: 16, question: "Adakah anak anda memberi respon apabila anda memanggil namanya? (contoh, adakah dia melihat ke atas, bercakap atau berceloteh, atau berhenti melakukan apa yang dia lakukan apabila anda memanggil namanya?)", 
                category: "ASD", options: ["Ya", "Tidak"] },
            { numb: 17, question: "Adakah anak anda suka aktiviti pergerakan? (contoh, diayun atau dilantun di atas lutut anda)", 
                category: "ASD", options: ["Ya", "Tidak"] },
            { numb: 18, question: "Adakah anak anda menunjuk dengan satu jari untuk menunjukkan sesuatu yang menarik? (contoh, menunjuk kepada kapal terbang di langit atau trak besar di jalan)", 
                category: "ASD", options: ["Ya", "Tidak"] },
            { numb: 19, question: "Jika sesuatu yang baru berlaku, adakah anak anda melihat wajah anda untuk melihat bagaimana perasaan anda mengenainya?", 
                category: "ASD", options: ["Ya", "Tidak"] },
            { numb: 20, question: "Adakah anak anda cuba meniru apa yang anda lakukan? (contoh, melambai selamat tinggal, bertepuk tangan, atau membuat bunyi lucu apabila anda melakukannya)", 
                category: "ASD", options: ["Ya", "Tidak"] },
            { numb: 21, question: "Takut mencuba perkara baru kerana takut membuat kesilapan", 
                category: "ADHD", options: ["Tidak pernah", "Kadang-kadang", "Selalu", "Sering"] },
            { numb: 22, question: "Berasa malu atau mudah malu", 
                category: "ADHD", options: ["Tidak pernah", "Kadang-kadang", "Selalu", "Sering"] },
            { numb: 23, question: "Sensitif atau mudah terganggu oleh orang lain", 
                category: "ADHD", options: ["Tidak pernah", "Kadang-kadang", "Selalu", "Sering"] },
            { numb: 24, question: "Mengelak, tidak suka, atau tidak mahu memulakan tugas yang memerlukan usaha mental yang berterusan", 
                category: "ADHD", options: ["Tidak pernah", "Kadang-kadang", "Selalu", "Sering"] },
            { numb: 25, question: "Takut, cemas, atau risau", 
                category: "ADHD", options: ["Tidak pernah", "Kadang-kadang", "Selalu", "Sering"] },
        ]
        }
}; 