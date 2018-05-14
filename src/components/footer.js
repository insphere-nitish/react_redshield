import React, {Component} from 'react';
import SocialLinks from './social-links';

class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {
            footerLogo: '',
            logoUrl: '',
            ftClass: 'footer-main__container__listing--justify-end',
            socialData: null
        };
        this.getNetworkData();
        this.getHomeBlogSettings();
    }
    render() {
      return (
          <footer className="footer">
            <div className="footer-main">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="footer-main__container d-flex justify-content-between align-items-center">
                                <div className="footer-main__container--logo">
                                    <a href={this.state.logoUrl}>
                                        <img className="img-fluid" src={this.state.footerLogo} alt="footer logo" />
                                    </a>
                                </div>
                                <div className={"footer-main__container__listing "+this.state.ftClass} >
                                    <a className="footer-main__container__listing--items privacy" target="_blank" href="http://www.salvationarmy.org.au/Privacy/">Privacy Policy</a>
                                    <a className="footer-main__container__listing--items terms" target="_blank" href="http://www.salvationarmy.org.au/Terms-of-Use/">Terms of Use</a>
                                    <div className="footer-main__container__listing--items no-link">Copyright 2018 The Salvation Army</div>
                                    <div className="footer-main__container__listing--items no-link">Donations over $2 are tax deductible<span>(ABN: 18 730 899 453)</span></div>
                                </div>
                                <SocialLinks socialData={this.state.socialData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer> 
      );
    }
    
    getNetworkData(){
        $.fn.getNetworkData({
            onSuccess: (data, textStatus, jqXHR) => {
                this.setState({
                    footerLogo: data.templatePath+'/static/images/logos/salvation-logo.svg',
                    logoUrl: data.networkLogoLinkUrl,
                });
                if(Object.keys(data.logoMedia).length > 0){
                    var ImageUrl = $.fn.image({media: data.logoMedia, mediaOptions: {width: 177, height: 65, crop: 'limit'}});
                    this.setState({
                        footerLogo: ImageUrl
                    });
                }
            }
        });
    }
    getHomeBlogSettings(){
        $.fn.getHomeBlogSettings({
            onSuccess: (data, textStatus, jqXHR) => {
                if(data.social.facebook !== null || data.social.twitter !== null || data.social.instagram !== null || data.social.youtube !== null){
                    this.setState({
                        ftClass: ''
                    });
                }else{
                    this.setState({
                        socialData: data.social
                    });
                }
            }
        });
    }
};
export default Footer;
