import { useState } from 'react';
import Layout from '../components/Layout'


const Newsletter = () => {
        const [fname, updateName] = useState("");
        const [lname, updateLName] = useState("");
        const [email, updateEmail] = useState("");
        return (
        <Layout title="SHPE UTD">
            <div className="container">
                <section className="section mt-4">
                    <div className="columns is-centered is-vcentered">
                        <div className="column is-half">
                            <p className="title is-1 is-spaced has-text-centered mt-4">Join our Newsletter</p>
                            <div className="field">
                                <label className="label">First name</label>
                                <div className="control">
                                    <input 
                                    className="input" 
                                    type="text" 
                                    id="fname" 
                                    name="fname" 
                                    onChange={(e) => updateName(e.target.value)}> 
                                    </input>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Last name</label>
                                <div className="control">
                                <input 
                                    className="input" 
                                    type="text" 
                                    id="fname" 
                                    name="fname" 
                                    onChange={(e) => updateLName(e.target.value)}> 
                                    </input>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">UTD email</label>
                                <div className="control">
                                    <input 
                                    className="input" 
                                    type="text" 
                                    placeholder="abc123456@utdallas.edu" 
                                    id="email" 
                                    name="email"
                                    onChange={(e) => updateEmail(e.target.value)}>
                                    
                                    </input>
                                </div>
                            </div>
                            <div className="control">
                                <button className="button is-primary" >Submit</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
};

export default Newsletter