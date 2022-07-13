import React, { Fragment } from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"

export const MailchimpForm = () => {
    const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.evn.REACT_APP_MAILCHIMP_U}$id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    return (
        <Fragment>
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => {
                    <Fragment>

                    </Fragment>
                }}
            />
        </Fragment>
    )
}
