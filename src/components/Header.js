import React from 'react';
import '../styles/style.css'
function Header(props) {
    return (
       <> <div>
            <div className="navigation">
                <div className="nav-links">
                    <div className="brand">Market Stats - AICT BOT</div><br/>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <div className="text-success mt-3 mb-3 font-weight-bold text-center">
                <a style={{color:"black", cursor:"Pointer"}} href="https://binoxa-2.vercel.app/#/admin/default">{"<-"}Home{"       "}</a>

                    Smart Suggestion For Smart Trades !
                </div>
            </div>
        </div>
        </>
    );
}

export default Header;