import React, {Component} from 'react';

class TopHomePageCta extends Component {
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
        <div className={"banner__section image-covered text-center "+this.state.videoClass+ " cta_block_"+
        this.state.ctaDetails.id} style={this.state.ctaStyle}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="banner__section-content d-flex align-items-center flex-column justify-content-center m-auto">
                            {this.state.ctaVideoUrl && <a data-fancybox href={this.state.ctaVideoUrl} className="play-icon"></a>}
                            <h1>{this.state.ctaDetails.title}</h1>     
                            <p>{this.state.ctaDetails.description}</p>
                            {this.state.ctaDetails.button.text && <a href={this.state.ctaDetails.button.url} target="_blank" className="button button--red upper button--radius">{this.state.ctaDetails.button.text}</a>}   
                        </div>
                    </div>
                </div>
            </div>
        </div> 
      );
    }
    getCta(){
        $.fn.getCta({
            keywords: 'home_top_page', 
            onSuccess: (data, textStatus, jqXHR) => {
                console.log(data);
                if(data.media.id){
                    var ImageUrl = $.fn.image({media: data.media, mediaOptions: {width: 1900, height: 1900, crop: 'limit'}});
                    console.log(ImageUrl);
                    this.setState({
                        ctaBackgroundImage: ImageUrl,
                        ctaDetails:data
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
            keywords: 'home_top_page',
            includeMetaInfo: 1, 
            onSuccess: (data, textStatus, jqXHR) => {
                console.log(data);
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
};
export default TopHomePageCta;
