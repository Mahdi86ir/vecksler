import { useState } from 'react'
import './WordsExplain.css'

interface ExpProps{
    prevStep:()=>void,
    startQuiz:()=>void
}

interface LastExplainProps{
    prevExp:()=>void,
    startQuiz:()=>void
}

interface startQuizProps{
    startQuiz:()=>void
}

function LastExplain ({prevExp , startQuiz}:LastExplainProps ){


    return(
        <div className='words-explain-container'>
            <p>اگر کاملاً متوجه فرآیند انجام آزمون شده‌اید، روی دکمۀ شروع آزمون کلیک کنید. در غیر این صورت از طریق دکمۀ «صفحۀ قبل» به صفحات قبل بازگردید و دستورالعمل اجرای آزمون را مرور کنید.</p>
            <p>برای شروع کافی است جملۀ زیر را به شرکت کننده بگویید:</p>
            <p style={{color:'blue'}}>«من چند کلمه را برایت می‌خوانم. خوب گوش بده و به من بگو معنای آن کلمه چیست؟»</p>
            <div className='actions'>
                <span>
                    <button type="button" onClick={()=>startQuiz()} className='btn'>شروع آزمون</button>
                </span>
                <span>
                    <button type="button" onClick={() => prevExp()} className='btn'>صفحه قبل</button>
                </span>
            </div>
        </div>
    )
}




function Exp({prevStep , startQuiz}:ExpProps){

    const [lastExp , setLastExp] = useState(false)

    const prevExp = () => {
        setLastExp(false)
    }

    return (
        <>
            {lastExp ? <LastExplain startQuiz={startQuiz} prevExp={prevExp}/> : (
                <section className='notes'>
                    <p>لازم است کلمه را با صدای بلند و بدون هیچ تغییر و توضیحی برای شرکت کننده بخوانید و پاسخ او را با پاسخ‌های نمونه تطبیق دهید و نمرۀ او را ثبت کنید.</p>
                    <h3>لطفاً در تمام آزمون، نکات زیر را مدنظر داشته باشید:  </h3>
                    <ul className='ul-exp1'>
                        <li>هر سؤال را کلمه به کلمه و واضح بخوانید. درصورت نیاز از گویش محلی یا تلفظی که فکر می‌کنید برای شرکت‌کننده آشناتر است استفاده کنید. </li>
                        <li>هر سؤال را می‌توانید هرقدر که شرکت کننده نیاز دارد تکرار کنید، اما کلمات سؤال هرگز نباید تغییر کنند. </li>
                        <li>اگر شرکت کننده به جای تعریف لغت، به آن اشاره کرد بگویید: «اشاره نکن. با چند کلمه به من توضیح بده»</li>
                        <li>اگر پاسخ شرکت کننده نشان‌دهندۀ این بود که کلمه را اشتباه شنیده است، دوباره و به شکلی واضح کلمه را تکرار کنید: <br />«با دقت گوش کن. معنای .......... چیست؟»</li>
                        <li>پاسخ‌های غیرکلامی (مثلاً وانمود کردن یا نشان دادن و اشاره کردن) نمره‌ای نمی‌گیرند. اگر شرکت کننده پاسخ‌های غیرکلامی داد به او بگویید: «با کلمات به من بگو چه معنایی دارد؟»</li>
                        <li>در چهار حالت زیر، این سؤال را بپرسید: « توضیح بده منظورت چیست. دربارۀ این کلمه بیشتر بگو. » <ul className='ul-exp2'>
                            <li>اگر برایتان سخت بود تشخیص دهید شرکت کننده معنای لغت را می‌داند یا نه</li>
                            <li>اگر پاسخ او به قدری مبهم بود که نمی‌توانستید نمرۀ آن را مشخص کنید</li>
                            <li>اگر پاسخ او در مرز بین نمرۀ 0 و 1 و یا 1 و 2 بود و احتمال دادید که می‌تواند پاسخ بهتری دهد</li>
                            <li>اگر پاسخ او با آن دسته از پاسخ‌های نمونه که به رنگ نارنجی مشخص شده‌اند، شبیه بود.</li>    
                        </ul>غیر از این موارد، هیچ سؤال دیگری مجاز نیست.</li>
                        <li>در مورد پاسخ‌هایی که نمره آنها به وضوح 0 و یا 1 است، نیازی نیست سؤال اضافی بپرسید.</li>
                        <li>اگر شرکت کننده علاوه بر پاسخ اصلی، توضیحاتی اضافی ارائه بدهد، فقط پاسخ اصلی او را برای نمره دادن درنظر بگیرید. مثلاً اگر به سؤال «آینه چیست» بگوید : «در آن خودمان را نگاه می‌کنیم. من یک آینۀ گرد کوچک دارم که در کیفم می‌گذارم». قسمت اول پاسخ صحیح است و نمرۀ 2 می‌گیرد.</li>
                        <li>اگر پاسخ‌های کودک با یکدیگر متفاوت باشند اما یکی از پاسخ‌ها پاسخ اصلی را تخریب نکند، برای نمره‌دهی بهترین پاسخ او را درنظر بگیرید. مثلاً در پاسخ به سؤال «اطاعت چه معنایی دارد» بگوید: «اطاعت یعنی خوب بود و پیروی کردن از قوانین»، بهترین پاسخ او یعنی «پیروی کردن از قوانین» را درنظر بگیرید و به او نمرۀ 2 بدهید. </li>
                        <li>اگر شرکت کننده پاسخی 1 یا 2 نمره‌ای، بعلاوۀ یک پاسخ تخریب کننده داد، به او نمرۀ 0 بدهید. مثلاً در پاسخ به سؤال «خلبان کیست» بگوید: « او پرواز می‌کند. وقتی در آسمان پرواز می‌کند یک کلاه قرمز بر سرش می‌گذارد». در این حالت پاسخ دوم، پاسخ اول را تخریب می‌کند و نمره  می‌شود.</li>
                        <li>شرکت‌کننده درصورت ارائه پاسخ درست با تلفظ اشتباه، امتیازی از دست نمی‌دهد. درصورت ارائه پاسخ درست با تلفظ غلط، نمرۀ متناسب با پاسخ را برای او ثبت کنید.</li>
                        <li>دقت کنید هرجا شرکت کننده‌ پاسخی شبیه به یکی از پاسخ‌هایی ارائه دهد که با رنگ نارنجی در کادر پاسخ‌ها مشخص شده‌اند، باید پاسخ او را بیشتر مورد سؤال قرار دهید؛ مثلاً به او بگویید: «بیشتر توضیح بده» ، «منظورت چیست؟» یا سؤال بی طرف دیگر</li>
                    </ul>
                    <div className='actions'>
                        <span>
                            <button type="button" onClick={()=>setLastExp(true)} className='btn'>صفحه بعد</button>
                        </span>
                        <span>
                            <button type="button" onClick={() => prevStep()} className='btn'>صفحه قبل</button>
                        </span>
                    </div>
                </section>     
            )}
        </>
    )
}


export default function WordsExplain({startQuiz}:startQuizProps) {
    const [showMoreExp , setShowMoreExp] = useState(false)

    const prevStep = () => {
        setShowMoreExp(false)
    }
    return (
        <>
            {showMoreExp ? <Exp prevStep={prevStep} startQuiz={startQuiz}/> : (
                <div className='words-explain-container'>
                    <h2>بخش تصویری آزمون به پایان رسید. برای انجام بخش کلامی، صفحۀ نمایشگر آزمون را به سوی خود برگردانید. </h2>
                    <p>در بخش کلامی، تعدادی کلمه ارائه می‌شوند که آزمون‌دهنده باید معنای آن‌ها را بیان کند.</p>
                    <p>پاسخی که آزمون‌دهنده ارائه می‌دهد، بر اساس کیفیت و میزان مرتبط بودن از 0 تا 2 نمره می‌گیرد. همانطور که در تصویر نمونه می‌بینید، برای هر کلمه، مثال‌هایی از پاسخ‌های ممکن روی صفحه وجود دارد که شما باید پاسخ شرکت کننده را با آنها تطبیق دهید و نمرۀ او را مشخص کنید.</p>
                    <p>بنابراین لازم است به پاسخ شرکت کننده با دقت گوش کنید و بررسی کنید پاسخ او به پاسخ‌های ارائه شده در کدام کادر بیشترین شباهت را دارد. سپس روی دکمه‌ای که زیر کادر مدنظرتان قرار دارد کلیک کنید تا نمرۀ شرکت‌کننده ثبت شود.</p>
                    <span>
                        <button type="button" onClick={()=> setShowMoreExp(true)} className="btn">صفحه بعد</button>
                    </span>
                </div>
            )}
        </>
  )
}
