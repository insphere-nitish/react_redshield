import React, {Component} from 'react';

class AppealCta extends Component {
    constructor(props){
        super(props);
        this.state = {
            ctaBackgroundImage: '',
            ctaVideoUrl: '',
            ctaDetails: null,
            videoClass: '',
            ctaStyle: {},
            
        };
        this.getCta();
        this.getCtaWithMeta();
    }
    render() {
      if(!this.state.ctaDetails){
            return null;
      }
      return (
        <div className={"cta-wrap cta-wrap__about "+this.state.videoClass+ " cta_block_"+
        this.state.ctaDetails.id} style={this.state.ctaStyle}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="cta-wrap__main text-center">
                            <div className="cta-wrap__main--title">{this.state.ctaDetails.title}</div>
                            <div className="cta-wrap__main--description">
                                {this.state.ctaDetails.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
    getCta(){
        $.fn.getCta({
            keywords: 'red_shield_appeal', 
            onSuccess: (data, textStatus, jqXHR) => {
                this.setState({
                    ctaDetails:data
                });
                if(data.media.id){
                    var ImageUrl = $.fn.image({media: data.media, mediaOptions: {width: 1900, height: 1900, crop: 'limit'}});
                    console.log(ImageUrl);
                    this.setState({
                        ctaBackgroundImage: ImageUrl
                    });
                }
                if(this.state.ctaBackgroundImage){
                    this.setState({
                        ctaStyle: {
                            backgroundColor: this.state.ctaDetails.backgroundColor,
                            backgroundImage: `url(${this.state.ctaBackgroundImage})`,
                        }
                    });
                }
            }
        });
    }
    getCtaWithMeta(){
        $.fn.getCta({
            keywords: 'red_shield_appeal',
            includeMetaInfo: 1, 
            onSuccess: (data, textStatus, jqXHR) => {
                if(data.additionalInfo.length > 0){
                    this.setState({
                        ctaVideoUrl: data.additionalInfo.cta_video_url
                    });
                }
                if(this.state.ctaVideoUrl){
                    this.setState({
                        videoClass: 'video'
                    });
                }
            }
        });
    }
}
export default AppealCta;

