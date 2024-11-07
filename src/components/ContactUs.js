import React from 'react'
import './contact.css'
import user from '../assets/handsome-smiling-man-looking-with-disbelief.jpg'
export default function ContactUs() {



    return (
        <div className='contact'>
            <div className="about">
                <h1>Request a free <br /> demo today!</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure distinctio libero eum quasi architecto ex dolorem fugiat sunt a dolore!</p>
                <h3>A massage from our CEO</h3>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quasi temporibus expedita repudiandae reiciendis molestiae"</p>
                <div className="id-box">
                    <div className="profile">
                        <img src={user} alt="" />
                        <div className="details">
                            <div className="name">Shehab Shekh</div>
                            <div className="post">CEO, Admin</div>
                        </div>
                    </div>
                </div>
            </div>
            <h2>Sent A Massage</h2>
            <div className='form'>
                <div className="massage-section">
                    <div className="names">
                        <div className="frist-name">
                            <label>Name</label>
                            <input type="text" placeholder='Type Your Name' />
                        </div>
                        <div className="last-name">
                            <label>Last Name</label>
                            <input type="text" placeholder='Type Your Last Name' />
                        </div>
                    </div>
                    <div className="email-section">
                        <label>Email</label>
                        <input type="text" placeholder='Type Your Email' />
                    </div>
                    <div className="massage">
                        <label>Massage</label>
                        <textarea name="" id="" placeholder='Type Your Massage'></textarea>
                    </div>
                    <div className="buttons">
                        <button>Submit</button>
                    </div>
                    <div className='result'></div>
                </div>

            </div>
        </div>
    )
}
