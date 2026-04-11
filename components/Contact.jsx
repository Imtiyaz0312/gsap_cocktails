import { openingHours, socials } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

const Contact = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create("#contact h2", {
            type: "words",
        })
        
        const timeline =gsap.timeline({
            scrollTrigger: {
                trigger: "#contact",
                start: "top center",
            },
            ease: "power1.out",
        })

        timeline
        .from(titleSplit.words, {
            opacity: 0,
            yPercent: 100,
            duration: 1,
            stagger: 0.02,
        })
        .from("#contact h3, #contact p", {
            opacity: 0,
            yPercent: 100,
            duration: 1,
        })
        .to(["#f-right-leaf", "#f-left-leaf"], {
            y: -50,
            duration: 1,
            ease: "power1.out",
        }, '<')

    })

  return (
    <footer id="contact">
        <img src="/images/footer-right-leaf.png" alt="leaf-right" id='f-right-leaf' />
        <img src="/images/footer-left-leaf.png" alt="leaf-left" id='f-left-leaf' />

        <div className='content'>
            <h2>Where to find us</h2>

            <div>
                <h3>Visit Our Store</h3>
                <p>123 E Main St, Anytown, USA 12345</p>                
            </div>

            <div>
                <h3>Contact Us</h3>
                <p>(555) 123-2442</p>
                <p>hello@cocktail.com</p>
            </div>

            <div>
                <h3>Open Everyday</h3>
                {openingHours.map((time) => (
                    <p key={time.day}>{time.day} - {time.time}</p>
                ))}
            </div>

            <div>
                <h3>Socials</h3>
                <div className='flex-center gap-5'>
                {socials.map((social) => (
                    <a href={social.url} key={social.name} target='_blank'
                    rel='noopener noreferrer'
                    arialabel={social.name}>
                        <img src={social.icon} alt={social.name} />
                    </a>
                ))}
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Contact