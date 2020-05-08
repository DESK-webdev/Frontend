import React from 'react';

function Component(props){



    return(
       <div className="componentcover">
            <div className="component">
            <img className="componentimg" src={props.image} alt="pic"/>
            <div className="picdescp">
                <div className="piclogo">
                    <img src={require('../assets/manbird.jpg')} alt="pic"/>
                </div>
                <div className="picdata">
                    <h3 className="pictitle">Mountain picture !</h3>
                    <p>This is a picture that you will rarely see.</p>
                </div>
                
            </div>
            <div className="picothers">
                    <p>Anjan Poudel</p>
                    <p>Ratings: <span>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                        </span> </p>
            </div>
        </div>

       </div>
    );
}

export default Component;