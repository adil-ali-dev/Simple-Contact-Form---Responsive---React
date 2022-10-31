import React, { useState } from 'react';
import ThankyouPage from './ThankyouPage';
import { states } from '../Utils/utils';
const ContactForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    

    const [selectedOption, setSelectedOption] = useState(states[0].value);

    const onSubmit = (e) => {
        e.preventDefault()
        const { fname, lname, email, zipcode } = e.target.elements
        let conFom = {
            fname: fname.value,
            lname: lname.value,
            email: email.value,
            zipcode: zipcode.value,
            state: selectedOption
        }
        console.log(conFom)
        setIsSubmitted(true)
    }

    return (
        <div className="container mt-5" id='content-wrap'>
            {
                !isSubmitted ?
                    <>
                        <h2 className="mb-3">Contact Form</h2>
                        <form onSubmit={onSubmit} style={{ textAlign: "initial" }}>

                            <div className="mb-3">
                                <label className="form-label" htmlFor="fname">
                                    First Name
                                </label>
                                <input className="form-control" type="text" name="fname" pattern="[a-zA-Z]+" id="fname" required />
                            </div>

                            <div className="mb-3">
                                <label className="form-label" htmlFor="lname">
                                    Last Name
                                </label>
                                <input className="form-control" type="text" name="lname" pattern="[a-zA-Z]+" id="lname" required />
                            </div>

                            <div className="mb-3">
                                <label className="form-label" htmlFor="email">
                                    Email
                                </label>
                                <input className="form-control" type="email" name="email" pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$' id="email" required />
                            </div>

                            <div className="mb-3">
                                <label className="form-label" htmlFor="zipcode">
                                    Zipcode
                                </label>
                                <input className="form-control" type="text" id="zipcode" name="zipcode" required />
                            </div>

                            <div className="mb-3">
                                <label className="form-label" htmlFor="state">
                                    State
                                </label>
                                <select className="form-control" onChange={e => setSelectedOption(e.target.value)}>
                                    {states.map(item => {
                                        return (<option key={item.value} value={item.value}>{item.name}</option>);
                                    })}
                                </select>
                            </div>

                            <button className="btn btn-danger" type="submit">
                                Send
                            </button>
                        </form>
                    </>
                    :
                    <ThankyouPage />

            }

        </div>
    )
}
export default ContactForm