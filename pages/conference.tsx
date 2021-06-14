import React from 'react'
import Layout from "../components/Layout";
import { useState } from 'react'


export const conference = () => {

    const [counter, setcounter] = useState(4)

    const buttonClicked = () => {
        console.log("clicked on the button")
        setcounter(counter + 1)
    }



    return (
        <Layout title="National Conference">
            <div>
                conference
                <button className="button testClass" onClick={buttonClicked}>
                    Enter
                </button>

                {counter}

            </div>
        </Layout>
    )


}

export default conference;
