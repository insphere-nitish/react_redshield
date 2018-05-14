import React, {Component} from 'react';

function GenerateLinks(data){
    var Links = '';
    for (var social in data) {
        Links += '<a href={social} target="_blank"><i class="fa fa-"+{social}+"-official"></i></a>'
    };
    return (Links);
}
class SocialLinks extends Component {
    constructor(props){
        super(props);
    }
    render() {
        if(!this.props.socialData){
            return <div></div>;
        }
        console.log(this.props.socialData);
        
        return (
            <div className="footer-main__container__social">
                <GenerateLinks data={this.props.socialData}/>
            </div>
        );
    }
    
    
};
export default SocialLinks;
