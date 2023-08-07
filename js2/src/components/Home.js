import React from 'react';

const HomePage = () => {
    return (
        <div>
            <div>
                <h2>About</h2>
                <div className="image-container">
                    <img src="./components/images/tobias1.jpg" alt="Tobias1" />
                    <img src="./components/images/tobias2.jpeg" alt="Tobias2" />
                </div>

                <div className="text-container">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
