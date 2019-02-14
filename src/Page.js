import React, { Component } from 'react';
import './css/style.js'

class Page extends Component {
  render() {
    return (
      <div className="grid">
        <div className="one header">
          <div className="innerWrapper headerInnerWrapper">
          </div>
        </div>
        <div className="two truckBanner">
          <div className="innerWrapper">
          </div>
        </div>
        <div className="three instagram">
          <div className="innerWrapper instagramInnerWrapper">
          </div>
        </div>
        <div className="four parallax spreadImage">
          <div className="innerWrapper parallaxInnerWrapper">
          </div>
        </div>
        <div className="five ourStory">
          <div className="innerWrapper ourStoryInnerWrapper">
            <h1 className="ourStoryTitle"> Our Story </h1>
            <p className="ourStoryText"> Born in Ethiopia from parents of Eritrean descent, Makina Cafe founder Eden G. Egziabher
            was raised amidst a vibrant mix of Ethiopian, Eritrean and Italian cultures. It’s no coincidence
            that “Makina” translates to “truck” in all three of these countries’ languages, whose cultures
            combine to create the mosaic of flavors found on the mobile cafe’s menu. Eden prides herself on
            being the first Eritrean-American female entrepreneur in NYC with a food truck serving “Habesha”
            food. Used as a term of pride, the word “Habesha” is used to eliminate the distinction betwee different
            tribes of Eritrea and Ethiopia and celebrates the unity of people of the same region. Tasty, healthy,
            nutritious and something quite unique, Makina Cafe serves up breakfast and lunch to New Yorkers that are
            tired of the same old take-out options. You can follow Makina Cafe (@makinacafe) on all major social media
            outlets to find the trucks' location each day.  In the future, Eden hopes to bring the Makina experience to
            other parts of the US and use Makina Cafe as a charitable platform that gives back to the community.
            </p>
          </div>
        </div>
        <div className="six parallax detailsImage">
          <div className="innerwrapper parallaxInnerWrapper">
          </div>
        </div>
        <div className="seven menu">
          <div className="innerWrapper menuInnerwrapper">
          </div>
        </div>
        <div className="eight parallax ingredientsImage">
          <div className="innerWrapper parallaxInnerwrapper">
          </div>
        </div>
        <div className="nine press">
          <div className="innerWrapper pressInnerWrapper">
          </div>
        </div>
        <div className="ten parallax">
          <div className="innerWrapper parallaxInnerWrapper">
          </div>
        </div>
        <div className="eleven footer">
          <div className="innerWrapper">
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
