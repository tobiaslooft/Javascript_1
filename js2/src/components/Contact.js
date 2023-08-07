import React from 'react';

const ContactPage = () => {
    return (
        <div>
            <h1 className='kontakt'>Kontakt</h1>

            <form>
                <div>
                    <label htmlFor="name">Namn:</label>
                    <input type="text" id="name" />
                </div>

                <div>
                    <label htmlFor="email">E-post:</label>
                    <input type="email" id="email" />
                </div>

                <div>
                    <label htmlFor="message">Meddelande:</label>
                    <textarea id="message"></textarea>
                </div>

                <button type="submit">Skicka</button>
            </form>
        </div>
    );
};

export default ContactPage;
