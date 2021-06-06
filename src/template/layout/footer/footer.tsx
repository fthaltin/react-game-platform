import React from 'react';
import Grid from '../../components/grid';
import facebook from '../../../assets/img/icon-facebook.png';
import twitter from '../../../assets/img/icon-twitter.png';
import instagram from '../../../assets/img/icon-instagram.png';
import youtube from '../../../assets/img/icon-youtube.png';
import Icon from '../../components/icon';

export default function Footer() {
  return (
    <div id="footer">
      <div className="footer-top">
        <Grid>
          <div className="footer-top-inner-container">
            <div className="footer-top-left">
              <ul>
                <li><a href="#dd">Games</a></li>
                <li><a href="#dd">Membership</a></li>
                <li><a href="#dd">Download</a></li>
              </ul>
              <ul>
                <li><a href="#dd">Contact Us</a></li>
                <li><a href="#dd">Blog</a></li>
              </ul>
              <ul>
                <li><a href="#dd">FAQs</a></li>
                <li><a href="#dd">Service Status</a></li>
              </ul>
            </div>
            <div className="footer-top-right">
              <div>
                <h4 className="footer-head">Follow Us! </h4>
                <ul className="social-container">
                  <li>
                    <a href="#dd" className="social-item">
                      <img src={facebook} alt="Facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#dd" className="social-item">
                      <img src={twitter} alt="twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#dd" className="social-item">
                      <img src={instagram} alt="instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#dd" className="social-item">
                      <img src={youtube} alt="youtube" />
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="footer-head">Site Language </h4>
                <div className="footer-dropdown">
                  <span>English </span>
                  <Icon name="arrowDown" />
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </div>
      <div className="footer-bottom">
        <Grid>
          <div className="footer-bottom-inner-container">
            <div className="footer-bottom-left">
              <ul>
                <li><a href="#dd">Terms of Use</a></li>
                <li><a href="#dd">Privacy Policy</a></li>
                <li><a href="#dd">Cookies</a></li>
              </ul>
            </div>
            <div className="footer-bottom-right">
              <span>Tüm hakları saklıdır.</span>
            </div>
          </div>
        </Grid>
      </div>
    </div>
  );
}
