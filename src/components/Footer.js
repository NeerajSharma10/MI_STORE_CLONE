import React from 'react'
import '../styles/Footer.css'
const circle = <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M30.5 42.5V31.05H33.5V37.5Q36.7 34.9 38.6 31.4Q40.5 27.9 40.5 24Q40.5 17.4 36.5 12.725Q32.5 8.05 26.5 7.15V4.1Q33.8 5 38.65 10.55Q43.5 16.1 43.5 24Q43.5 28.4 41.425 32.4Q39.35 36.4 35.85 39.5H41.95V42.5ZM21.5 43.9Q17.9 43.45 14.775 41.75Q11.65 40.05 9.375 37.425Q7.1 34.8 5.8 31.375Q4.5 27.95 4.5 24Q4.5 19.6 6.575 15.6Q8.65 11.6 12.15 8.5H6.05V5.5H17.5V16.95H14.5V10.5Q11.3 13.05 9.4 16.575Q7.5 20.1 7.5 24Q7.5 30.6 11.5 35.275Q15.5 39.95 21.5 40.85ZM21.15 32.5 13.4 24.75 15.5 22.65 21.15 28.3 32.5 16.95 34.6 19.05Z"/></svg>
const dollar = <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M22.55 38.35H25.3V35.75Q28.35 35.4 30.05 33.875Q31.75 32.35 31.75 29.8Q31.75 27.25 30.3 25.65Q28.85 24.05 25.4 22.6Q22.5 21.4 21.2 20.45Q19.9 19.5 19.9 17.9Q19.9 16.35 21.025 15.45Q22.15 14.55 24.1 14.55Q25.6 14.55 26.7 15.25Q27.8 15.95 28.55 17.35L30.95 16.2Q30.1 14.45 28.7 13.45Q27.3 12.45 25.4 12.25V9.7H22.65V12.25Q20.1 12.6 18.625 14.125Q17.15 15.65 17.15 17.9Q17.15 20.35 18.65 21.8Q20.15 23.25 23.15 24.5Q26.5 25.9 27.75 27.025Q29 28.15 29 29.8Q29 31.4 27.675 32.375Q26.35 33.35 24.35 33.35Q22.4 33.35 20.875 32.25Q19.35 31.15 18.75 29.25L16.2 30.1Q17.25 32.4 18.775 33.725Q20.3 35.05 22.55 35.65ZM24 44Q19.9 44 16.25 42.425Q12.6 40.85 9.875 38.125Q7.15 35.4 5.575 31.75Q4 28.1 4 24Q4 19.9 5.575 16.25Q7.15 12.6 9.875 9.875Q12.6 7.15 16.25 5.575Q19.9 4 24 4Q28.1 4 31.75 5.575Q35.4 7.15 38.125 9.875Q40.85 12.6 42.425 16.25Q44 19.9 44 24Q44 28.1 42.425 31.75Q40.85 35.4 38.125 38.125Q35.4 40.85 31.75 42.425Q28.1 44 24 44ZM24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24ZM24 41Q31 41 36 36Q41 31 41 24Q41 17 36 12Q31 7 24 7Q17 7 12 12Q7 17 7 24Q7 31 12 36Q17 41 24 41Z"/></svg>
const book = <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M21.85 40.95V36.85Q20.1 36.85 18.9 35.55Q17.7 34.25 17.7 32.5V30.3L7.45 20.05Q7.2 21.05 7.1 22.025Q7 23 7 24Q7 30.5 11.225 35.35Q15.45 40.2 21.85 40.95ZM36.55 35.55Q38.75 33.15 39.875 30.175Q41 27.2 41 24Q41 18.7 38.1 14.375Q35.2 10.05 30.35 8.05V8.95Q30.35 10.7 29.15 12Q27.95 13.3 26.2 13.3H21.85V17.65Q21.85 18.5 21.175 19.05Q20.5 19.6 19.65 19.6H15.5V24H28.4Q29.25 24 29.8 24.65Q30.35 25.3 30.35 26.15V32.5H32.5Q33.95 32.5 35.05 33.35Q36.15 34.2 36.55 35.55ZM24 44Q19.85 44 16.2 42.425Q12.55 40.85 9.85 38.15Q7.15 35.45 5.575 31.8Q4 28.15 4 24Q4 19.85 5.575 16.2Q7.15 12.55 9.85 9.85Q12.55 7.15 16.2 5.575Q19.85 4 24 4Q28.15 4 31.8 5.575Q35.45 7.15 38.15 9.85Q40.85 12.55 42.425 16.2Q44 19.85 44 24Q44 28.15 42.425 31.8Q40.85 35.45 38.15 38.15Q35.45 40.85 31.8 42.425Q28.15 44 24 44Z"/></svg>
const fb = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
const inst = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
const you = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
const twi = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>


const Footer = ({footers}) => {
  return (
    <>
        <div className='PreFooter1'>
            <div className='samepre1'>
                <div>{circle}</div>
                <div>
                    <p>Hassle-free replacement</p>
                    <a>10-day easy replacement policy on mi.com</a>
                </div>
            </div>
            <div className='samepre1'>
                <div>{dollar}</div>
                <div>
                    <p>100% secure payments</p>
                    <a>We support Cards, Wallets, EMI and COD</a>
                </div>
            </div>
            <div className='samepre1'>
                <div>{book}</div>
                <div>
                    <p>Vast Service Network</p>
                    <a>1000 Mi service-centers across 600 cities</a>
                </div>
            </div>
        </div>

        <div className='PreFooter2'>
            <div className='Pll'>
                <div>
                    <h5>
                        LET'S STAY IN TOUCH
                    </h5>
                    <p>
                        Get updates on sales specials and more
                    </p>
                </div>
                <div>
                
                    <input type="text" name="example" value="Enter Email Address">
                    </input>

                </div>
            </div>

            <div className='Prr'>
                <div>
                    <h5>
                        FOLLOW MI
                    </h5>
                    <p>
                        We want to hear from you!
                    </p>
                </div>
                <div className='iconss'>
                    <div>{fb}</div>
                    <div>{you}</div>
                    <div>{inst}</div>
                    <div>{twi}</div>
                </div>    
            </div>
            
            
        </div>

        <div className='FinalFooter'>
            <div className='FFl'>
                <p>SUPPORT</p>
                <div>
                    {
                        footers.support.map((ele) => (
                            <a href={ele.url}>{ele.name}</a>
                        ))
                    }
                </div>
                
            </div>
            <div className='FFr'>
                <p>SHOP AND LEARN</p>
                <div>
                    {
                        footers.shopAndLearn.map((ele) => (
                            <a href={ele.url}>{ele.name}</a>
                        ))
                    }
                </div>
                
            </div>
            <div className='FFr'>
                <p>RETAIL STORE</p>
                <div>
                    {
                        footers.retailStore.map((ele) => (
                            <a href={ele.url}>{ele.name}</a>
                        ))
                    }
                </div>
            </div>
            <div className='FFr'>
                <p>ABOUT US</p>
                <div>
                {
                    footers.aboutUS.map((ele) => (
                        <a href={ele.url}>{ele.name}</a>
                    ))
                }
                </div>
            </div>
            <div className='FFr'>
                <p>CONTACT US</p>
                <div>
                {
                    footers.contactUs.map((ele) => (
                        <a href={ele.url}>{ele.name}</a>
                    ))
                }
                </div>
            </div>
            <div className='FFRRl'>
                <p className='kkkk'>
                Chat With Our AI Bot (24/7 Live Agent Support)
                </p>
                <button>CHAT NOW</button>
            </div>
        </div>
        
        <div className='lastfoot'>
            <p>Copyright © 2010 - 2022 Xiaomi. All Rights Reserved</p>
        </div>
    
    
    </>
  )
}

export default Footer