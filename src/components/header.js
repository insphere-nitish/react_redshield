import React, {Component} from 'react';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            mainLogo: '',
            logoUrl: '',
        };
        this.getNetworkData();
    }
    render() {
      return (
          <header className="header">
              <div className="container">
                  <div className="row">
                      <div className="col-12">
                          <div className="d-flex justify-content-between align-items-center header__section">
                              <aside className="header__section-left">
                                  <a className="main-logo" href={this.state.logoUrl}>
                                      <img src={this.state.mailLogo} className="img-fluid" alt="logo" />
                                  </a>
                              </aside>
                              <aside className="header__section-right">
                                  <a href="https://www.my.salvationarmy.org.au/donation/red-shield" target="_blank" className="button button--radius button--red">Donate</a>
                              </aside>
                          </div>
                      </div>
                  </div>
              </div>
          </header> 
      );
    }
    
    getNetworkData(){
        $.fn.getNetworkData({
            onSuccess: (data, textStatus, jqXHR) => {
                this.setState({
                    mailLogo: data.templatePath+'/static/images/logos/salvation-logo.svg',
                    logoUrl: data.networkLogoLinkUrl,
                });
                if(Object.keys(data.logoMedia).length > 0){
                    var ImageUrl = $.fn.image({media: data.logoMedia, mediaOptions: {width: 177, height: 65, crop: 'limit'}});
                    this.setState({
                        mailLogo: ImageUrl
                    });
                }
            }
        });
    }
};
export default Header;
