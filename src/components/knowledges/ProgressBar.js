import React from 'react';

const ProgressBar = (props) => {
    console.log(props);
    return (
        <div className={props.className}>
            <h3>{props.title}</h3>
            <div className='years'>
                <span>Years of experience</span>
                <span>1 year</span>
                <span>2 years</span>
            </div>

             <div>
              {
                  props.Languages.map((item)=>{
                    let xpYears = 2;
                    let ProgressBar = item.xp / xpYears * 100 + '%';

                    return(
                        <div key={item.id} className="languagesList">
                             <li>{item.value}</li>
                            <div className="ProgressBar" style={{width:ProgressBar}}></div>
                         </div>
                    )
                })
              }
          </div>
        </div>
    );
};

export default ProgressBar;